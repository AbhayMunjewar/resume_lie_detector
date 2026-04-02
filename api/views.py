from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
import json
import os
from django.conf import settings
import PyPDF2

DATA_DIR = os.path.join(settings.BASE_DIR, '../data')

# Dummy session storage (since we are deterministic and want to keep it simple, we'll use a global dict)
# In a real app, you'd use Django sessions or a db.
session_data = {
    "detected_skills": [],
    "claimed_scores": {},
    "interrogation_state": {},
    "results": {}
}

def load_json_data(filename):
    with open(os.path.join(DATA_DIR, filename), 'r') as f:
        return json.load(f)

@api_view(['POST'])
def upload_resume(request):
    if 'resume' not in request.FILES:
        return Response({"error": "No resume file provided"}, status=400)
    
    resume_file = request.FILES['resume']
    text_content = ""
    
    try:
        pdf_reader = PyPDF2.PdfReader(resume_file)
        for page in pdf_reader.pages:
            text_content += page.extract_text()
    except Exception as e:
         return Response({"error": f"Could not read PDF: {str(e)}"}, status=400)
    
    session_data['resume_text'] = text_content
    return Response({"message": "Resume uploaded successfully. Proceed to skill detection."})

@api_view(['GET'])
def detect_skills(request):
    text_content = session_data.get('resume_text', "")
    if not text_content:
        return Response({"error": "No resume uploaded yet"}, status=400)
    
    skills_data = load_json_data('skills.json')
    all_skills = skills_data.get('skills', [])
    
    detected = []
    # Simple deterministic substring search
    text_lower = text_content.lower()
    for skill in all_skills:
        if skill.lower() in text_lower:
            detected.append(skill)
            
    # Limit to top 5
    detected = detected[:5]
    session_data["detected_skills"] = detected
    
    return Response({"detected_skills": detected})

@api_view(['POST'])
def get_questions(request):
    # Expecting {"skill": "React", "current_level": "easy"}
    skill = request.data.get('skill')
    current_level = request.data.get('current_level', 'easy')
    
    questions_data = load_json_data('questions.json')
    
    for q_tree in questions_data:
        if q_tree['skill'].lower() == skill.lower():
            items = q_tree.get('questions', []) + q_tree.get('levels', [])
            for q in items:
                if q['level'] == current_level:
                    return Response({
                        "skill": skill,
                        "level": current_level,
                        "question": q.get('question', ''),
                        "options": q.get('options', [])
                    })
                    
    return Response({"error": "Question not found for this skill/level"}, status=404)

@api_view(['POST'])
def submit_answer(request):
    # Expecting {"skill": "React", "level": "easy", "answer": "Option 1"}
    skill = request.data.get('skill')
    level = request.data.get('level')
    user_answer = request.data.get('answer')
    
    questions_data = load_json_data('questions.json')
    
    correct_answer = None
    keywords = []
    for q_tree in questions_data:
        if q_tree['skill'].lower() == skill.lower():
            items = q_tree.get('questions', []) + q_tree.get('levels', [])
            for item in items:
                if item['level'] == level:
                    correct_answer = item.get('correct_answer') or item.get('correct')
                    keywords = item.get('keywords', [])
                    break
    
    is_correct = False
    if correct_answer: # MCQ
        is_correct = (user_answer == correct_answer)
    elif keywords: # Text
        is_correct = any(kw.lower() in user_answer.lower() for kw in keywords)
    
    # Store outcome
    if skill not in session_data["interrogation_state"]:
         session_data["interrogation_state"][skill] = {}
    
    session_data["interrogation_state"][skill][level] = is_correct
    
    # Determine next step deterministically
    next_action = ""
    next_level = ""
    
    if level == "easy":
        if is_correct:
            next_action = "continue"
            next_level = "medium"
        else:
            next_action = "stop"
            reason = "Major Bluff"
            
    elif level == "medium":
        if is_correct:
            next_action = "continue"
            next_level = "hard"
        else:
            next_action = "stop"
            reason = "Mild Bluff"
            
    elif level == "hard":
        next_action = "finish"
        reason = "Verified Skill"
        

    response_data = {
        "correct": is_correct,
        "next_action": next_action,
    }
    if next_level:
        response_data["next_level"] = next_level
    if next_action in ["stop", "finish"]:
         response_data["status"] = reason
         
    return Response(response_data)

@api_view(['POST'])
def calculate_score(request):
    # Calculate scores based on interrogation state
    # Weight: Easy=1, Medium=2, Hard=3
    # Logic: Pass Easy=3, Pass Medium=6, Pass Hard=9. Scale of 10.
    
    claimed_scores = request.data.get('claimed_scores', {}) # {"React": 8, "Node": 6}
    
    total_skills = len(claimed_scores)
    if total_skills == 0:
        return Response({"error": "No skills claimed"}, status=400)
    
    actual_scores = {}
    bluffs = []
    verified = []
    
    for skill, state in session_data.get("interrogation_state", {}).items():
        score = 0
        if state.get("hard"):
            score = 9
            verified.append(skill)
        elif state.get("medium"):
            score = 6
        elif state.get("easy"):
            score = 3
            
        actual_scores[skill] = score
        
        claimed = claimed_scores.get(skill, 0)
        gap = int(claimed) - score
        if gap > 3:
            bluffs.append({"skill": skill, "gap": gap})
            
    # Calculate overall avg
    overall_actual = sum(actual_scores.values()) / len(actual_scores) if actual_scores else 0

    session_data["results"] = {
        "actual_scores": actual_scores,
        "overall_score": overall_actual,
        "bluffs": bluffs,
        "verified": verified
    }
    
    return Response(session_data["results"])

@api_view(['GET'])
def get_results(request):
    results = session_data.get("results", {})
    score = results.get("overall_score", 0)
    
    recs_data = load_json_data('recommendations.json')
    suggested_role = "Unknown"
    
    for rec in recs_data.get('recommendations', []):
        if rec['min'] <= score <= rec['max']:
            suggested_role = rec['role']
            break
            
    results["recommendation"] = suggested_role
    return Response(results)

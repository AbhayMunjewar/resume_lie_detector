import re
import os

with open('frontend/js/app.js', 'r', encoding='utf-8') as f:
    js = f.read()

# Replace the interrogator initialization
old_init = """    let currentSkillIndex = 0;
    let levelSequence = ['easy', 'medium', 'hard'];
    let currentLevelIndex = 0;
    let finalResults = {};"""
new_init = """    let currentSkillIndex = 0;
    let levelSequence = ['easy', 'medium', 'hard'];
    let currentLevelIndex = 0;
    let currentQuestionIndex = 0;
    let finalResults = {};"""
js = js.replace(old_init, new_init)

# Replace getQuestion
old_gq = """    function getQuestion(skill, level) {
      const defaultSkillData = { levels: [
        { level: "easy", question: "", options: [], correct: "" },
        { level: "medium", question: "", options: [], correct: "" },
        { level: "hard", question: "", options: [], correct: "" }
      ]};
      let skillData = (typeof QUESTION_BANK !== 'undefined' && QUESTION_BANK[skill]) ? QUESTION_BANK[skill] : defaultSkillData;
      let levelData = skillData.levels.find(l => l.level === level);
      if (!levelData) levelData = defaultSkillData.levels[0];
      return levelData;
    }"""
new_gq = """    function getQuestion(skill, level, qIndex) {
      const defaultSkillData = { levels: [
        { level: "easy", questions: Array(5).fill({ question: "", options: [], correct: "" }) },
        { level: "medium", questions: Array(5).fill({ question: "", options: [], correct: "" }) },
        { level: "hard", questions: Array(5).fill({ question: "", options: [], correct: "" }) }
      ]};
      let skillData = (typeof QUESTION_BANK !== 'undefined' && QUESTION_BANK[skill]) ? QUESTION_BANK[skill] : defaultSkillData;
      let levelData = skillData.levels.find(l => l.level === level) || defaultSkillData.levels[0];
      let questionsArr = levelData.questions || Array(5).fill({ question: "", options: [], correct: "" });
      return questionsArr[qIndex] || { question: "", options: [], correct: "" };
    }"""
js = js.replace(old_gq, new_gq)

# Replace parts of renderQuestion
old_rq1 = """      skillNameUI.textContent = activeSkill;"""
new_rq1 = """      skillNameUI.textContent = `${activeSkill} (${currentQuestionIndex + 1}/5)`;"""
js = js.replace(old_rq1, new_rq1)

old_rq2 = """      let totalSteps = skills.length * 3;
      let currentStep = (currentSkillIndex * 3) + currentLevelIndex;
      overallProgress.style.width = ((currentStep / totalSteps) * 100) + '%';

      const qd = getQuestion(activeSkill, activeLevel);
      if (!qd.question || qd.question === "") {
         questionText.innerHTML = `<em>(Please fill "${activeLevel}" question for ${activeSkill} in QUESTION_BANK JSON)</em>`;"""
new_rq2 = """      let totalSteps = skills.length * 15;
      let currentStep = (currentSkillIndex * 15) + (currentLevelIndex * 5) + currentQuestionIndex;
      overallProgress.style.width = ((currentStep / totalSteps) * 100) + '%';

      const qd = getQuestion(activeSkill, activeLevel, currentQuestionIndex);
      if (!qd.question || qd.question === "") {
         questionText.innerHTML = `<em>(Please fill "${activeLevel}" question #${currentQuestionIndex + 1} for ${activeSkill} in QUESTION_BANK JSON)</em>`;"""
js = js.replace(old_rq2, new_rq2)

old_submit = """        const selectedAnswer = checked.value;
        const qd = getQuestion(activeSkill, activeLevel);
        
        let isCorrect = false;
        if (!qd.correct || qd.correct === "") {
           isCorrect = (selectedAnswer === qd.options[0] || selectedAnswer === "A"); 
        } else {
           isCorrect = (selectedAnswer === qd.correct);
        }

        if (!finalResults[activeSkill]) {
          finalResults[activeSkill] = { levelReached: "none", score: 0 };
        }

        if (isCorrect) {
          finalResults[activeSkill].levelReached = activeLevel;
          finalResults[activeSkill].score = (currentLevelIndex + 1) * 3; 
          currentLevelIndex++; 
          if (currentLevelIndex > 2) {
            currentLevelIndex = 0;
            currentSkillIndex++;
          }
        } else {
          currentLevelIndex = 0;
          currentSkillIndex++;
        }"""
new_submit = """        const selectedAnswer = checked.value;
        const qd = getQuestion(activeSkill, activeLevel, currentQuestionIndex);
        
        let isCorrect = false;
        if (!qd.correct || qd.correct === "") {
           isCorrect = (selectedAnswer === qd.options[0] || selectedAnswer === "A"); 
        } else {
           isCorrect = (selectedAnswer === qd.correct);
        }

        if (!finalResults[activeSkill]) {
          finalResults[activeSkill] = { levelReached: "none", score: 0 };
        }

        if (isCorrect) {
          finalResults[activeSkill].score += (currentLevelIndex + 1); // Easy=1, Med=2, Hard=3 per question
          
          currentQuestionIndex++;
          if (currentQuestionIndex > 4) {
            finalResults[activeSkill].levelReached = activeLevel;
            currentLevelIndex++; 
            currentQuestionIndex = 0;
            if (currentLevelIndex > 2) {
              currentLevelIndex = 0;
              currentSkillIndex++;
            }
          }
        } else {
          // Failed a question - abort current skill immediately
          currentLevelIndex = 0;
          currentQuestionIndex = 0;
          currentSkillIndex++;
        }"""
js = js.replace(old_submit, new_submit)

with open('frontend/js/app.js', 'w', encoding='utf-8') as f:
    f.write(js)

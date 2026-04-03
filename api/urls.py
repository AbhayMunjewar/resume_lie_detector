from django.urls import path
from . import views

urlpatterns = [
    path('upload-resume/', views.upload_resume, name='upload_resume'),
    path('detect-skills/', views.detect_skills, name='detect_skills'),
    path('get-questions/', views.get_questions, name='get_questions'),
    path('submit-answer/', views.submit_answer, name='submit_answer'),
    path('calculate-score/', views.calculate_score, name='calculate_score'),
    path('get-results/', views.get_results, name='get_results'),
]

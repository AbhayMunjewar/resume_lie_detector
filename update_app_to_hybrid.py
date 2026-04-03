import re

app_file = 'frontend/js/app.js'

with open(app_file, 'r', encoding='utf-8') as f:
    js_content = f.read()

# 1. Update the renderQuestion function
render_options_original = """      // Render options
      if (optionsContainerEl) {
        const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
        optionsContainerEl.innerHTML = qData.options.map((opt, i) => `
          <div class="option-item" data-value="${opt}" id="option_${i}">
            <input type="radio" name="answer_opt" value="${opt}">
            <div class="option-letter">${letters[i] || (i + 1)}</div>
            <div class="option-text">${opt || `Option ${letters[i]}`}</div>
          </div>
        `).join('');

        // Attach click handlers to options
        document.querySelectorAll('.option-item').forEach(item => {
          item.addEventListener('click', () => {
            if (isAnswerSubmitted) return; // don't allow change after submit
            
            document.querySelectorAll('.option-item').forEach(el => el.classList.remove('selected'));
            item.classList.add('selected');
            item.querySelector('input[type="radio"]').checked = true;
            selectedAnswer = item.dataset.value;
            
            // Enable submit button
            if (submitBtn) submitBtn.disabled = false;
          });
        });
      }"""

render_options_new = """      // Render options
      if (optionsContainerEl) {
        if (level === 'hard') {
          // --- WRITTEN ANSWER MODE ---
          optionsContainerEl.innerHTML = `
            <div class="textarea-wrapper" style="margin-top: 15px;">
              <textarea id="writtenAnswerTextarea" placeholder="Type your detailed answer here..." rows="5" style="width: 100%; border-radius: 8px; padding: 12px; background: rgba(255,255,255,0.05); color: #fff; border: 1px solid rgba(255,255,255,0.1); outline: none; font-family: inherit; font-size: 1rem; resize: vertical; box-sizing: border-box;"></textarea>
            </div>
            <div style="margin-top: 10px; font-size: 0.85rem; color: var(--text-dim);">
              <span style="color: var(--accent-warning);">⚡ Automated NLP Analysis</span> will grade your response based on core keywords.
            </div>
          `;
          const textarea = document.getElementById('writtenAnswerTextarea');
          if (textarea) {
            textarea.addEventListener('input', (e) => {
              if (isAnswerSubmitted) return;
              selectedAnswer = e.target.value;
              // Enable submit button if user has typed something
              if (submitBtn) submitBtn.disabled = selectedAnswer.trim().length === 0;
            });
          }
        } else {
          // --- MULTIPLE CHOICE MODE (Easy/Medium) ---
          const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
          optionsContainerEl.innerHTML = (qData.options || []).map((opt, i) => `
            <div class="option-item" data-value="${opt}" id="option_${i}">
              <input type="radio" name="answer_opt" value="${opt}">
              <div class="option-letter">${letters[i] || (i + 1)}</div>
              <div class="option-text">${opt || `Option ${letters[i]}`}</div>
            </div>
          `).join('');

          // Attach click handlers to options
          document.querySelectorAll('.option-item').forEach(item => {
            item.addEventListener('click', () => {
              if (isAnswerSubmitted) return; // don't allow change after submit
              
              document.querySelectorAll('.option-item').forEach(el => el.classList.remove('selected'));
              item.classList.add('selected');
              item.querySelector('input[type="radio"]').checked = true;
              selectedAnswer = item.dataset.value;
              
              // Enable submit button
              if (submitBtn) submitBtn.disabled = false;
            });
          });
        }
      }"""
js_content = js_content.replace(render_options_original, render_options_new)

# 2. Update the submitAnswer click handler
submit_handler_original = """        const qData = currentQuestions[currentQuestionIndex];
        const isCorrect = selectedAnswer === (qData.correct || qData.options[0]);"""

submit_handler_new = """        const qData = currentQuestions[currentQuestionIndex];
        const level = levels[currentLevelIndex];
        let isCorrect = false;

        if (level === 'hard') {
            // NLP Keyword Grading
            const userAnswerLower = selectedAnswer.toLowerCase();
            const keywords = qData.keywords || [];
            
            if (keywords.length > 0) {
                // Check if user answer contains at least ONE of the required keywords
                // (In a production environment, you might require 2 or 3, or use a real NLP backend)
                let matchCount = 0;
                keywords.forEach(kw => {
                    if (userAnswerLower.includes(kw.toLowerCase())) {
                        matchCount++;
                    }
                });
                
                // Let's say if they get at least 1 keyword, it's correct for testing purposes
                isCorrect = matchCount >= 1;
            } else {
                // Fallback if questions.json doesn't have keywords array for hard mode yet
                isCorrect = userAnswerLower.trim().length > 10; // Basic length check if no keywords exist
            }
        } else {
            // Multiple Choice grading
            isCorrect = selectedAnswer === (qData.correct || (qData.options && qData.options[0]));
        }"""
js_content = js_content.replace(submit_handler_original, submit_handler_new)

# 3. Update the feedback rendering
feedback_original = """            if (isCorrect) {
              feedbackText.innerHTML = `<span style="color:var(--accent-success);">Correct!</span>`;
            } else {
              feedbackText.innerHTML = `<span style="color:var(--accent-danger);">Incorrect</span><br><span class="text-dim" style="font-size:0.85rem;">Correct answer: ${qData.correct}</span>`;
              if (qData.topic) {
                feedbackText.innerHTML += `<br><span style="font-size:0.75rem; color:var(--accent-danger); opacity:0.8;">Weak area: ${qData.topic}</span>`;
              }
            }"""

feedback_new = """            if (isCorrect) {
              feedbackText.innerHTML = `<span style="color:var(--accent-success);">${level === 'hard' ? 'Excellent! Keyword matched.' : 'Correct!'}</span>`;
            } else {
              if (level === 'hard') {
                 feedbackText.innerHTML = `<span style="color:var(--accent-danger);">Incomplete Analysis</span><br><span class="text-dim" style="font-size:0.85rem;">Expected keywords like: ${(qData.keywords || ['(Not defined)']).join(', ')}</span>`;
              } else {
                 feedbackText.innerHTML = `<span style="color:var(--accent-danger);">Incorrect</span><br><span class="text-dim" style="font-size:0.85rem;">Correct answer: ${qData.correct}</span>`;
              }
              if (qData.topic) {
                feedbackText.innerHTML += `<br><span style="font-size:0.75rem; color:var(--accent-danger); opacity:0.8;">Weak area: ${qData.topic}</span>`;
              }
            }"""
js_content = js_content.replace(feedback_original, feedback_new)


with open(app_file, 'w', encoding='utf-8') as f:
    f.write(js_content)

print("Updated app.js for Hybrid MCQ/Text Mode.")

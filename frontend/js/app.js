// ============================================================
// RESUME GAUNTLET — Main Application Logic
// Deterministic Interview Readiness Analyzer
// NO AI, NO randomness. Same input → Same output.
// ============================================================

const API_BASE_URL = 'http://127.0.0.1:8000/api';

// ============================================================
// SKILL ICON MAPPING (deterministic)
// ============================================================
const SKILL_ICONS = {
  'React': '⚛️', 'Node.js': '🟢', 'NodeJS': '🟢', 'SQL': '🗄️',
  'DSA': '🧮', 'Python': '🐍', 'AWS': '☁️', 'Docker': '🐳',
  'Kubernetes': '⎈', 'TypeScript': '📘', 'Java': '☕', 'C++': '⚡',
  'Bootstrap': '🎨', 'MongoDB': '🍃', 'Flask': '🧪', 'TensorFlow': '🧠',
  'Dart': '🎯', 'JavaScript': '💛', 'Pandas': '🐼', 'Django': '🎸',
  'Git': '📦', 'Matplotlib': '📊', 'OpenCV': '👁️', 'NLP': '💬',
  'Scikit-learn': '🔬', 'HTML_CSS': '🌐', 'JupyterNotebook': '📓', 'NumPy': '🔢'
};

function getSkillIcon(skill) {
  return SKILL_ICONS[skill] || '⚡';
}

// ============================================================
// CORE MODULE: Decision Tree Interrogation Engine
// ============================================================

/**
 * Start a test for a specific skill.
 * Redirects to interrogation.html?skill=SkillName
 */
function startTest(skill) {
  window.location.href = `interrogation.html?skill=${encodeURIComponent(skill)}`;
}

/**
 * Get question data from QUESTION_BANK for given skill and level.
 * Falls back to placeholder questions if data is missing or empty.
 */
function getQuestionsForLevel(skill, level) {
  if (typeof QUESTION_BANK === 'undefined' || !QUESTION_BANK[skill] || !QUESTION_BANK[skill][level]) {
    return generateFallbackQuestions(skill, level);
  }
  
  const questions = QUESTION_BANK[skill][level];
  
  // Check if questions are empty (all have empty question text)
  if (questions.length === 0 || questions.every(q => !q.question || q.question.trim() === '')) {
    return generateFallbackQuestions(skill, level);
  }
  
  // Filter out empty questions
  const validQuestions = questions.filter(q => q.question && q.question.trim() !== '');
  if (validQuestions.length === 0) {
    return generateFallbackQuestions(skill, level);
  }
  
  return validQuestions;
}

/**
 * Generate deterministic fallback questions for skills with empty data.
 */
function generateFallbackQuestions(skill, level) {
  const count = level === 'easy' ? 5 : level === 'medium' ? 5 : 5;
  return Array(count).fill(null).map((_, i) => ({
    question: `[Placeholder] ${skill} - ${level.charAt(0).toUpperCase() + level.slice(1)} Question ${i + 1} (Add your question here)`,
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    correct: 'Option A',
    topic: `${skill} ${level} Topic ${i + 1}`
  }));
}

/**
 * Save result for a single skill to localStorage.
 */
function saveSkillResult(skill, result) {
  const allResults = JSON.parse(localStorage.getItem('skillResults') || '{}');
  allResults[skill] = {
    status: 'completed',
    levelReached: result.levelReached,
    score: result.score,
    verdict: result.status,
    label: result.label,
    weakTopics: result.weakTopics || [],
    levelScores: result.levelScores || {}
  };
  localStorage.setItem('skillResults', JSON.stringify(allResults));
}

/**
 * Get all skill results from localStorage.
 */
function getSkillResults() {
  return JSON.parse(localStorage.getItem('skillResults') || '{}');
}

/**
 * Check if all skills are completed.
 */
function areAllSkillsCompleted() {
  const skills = JSON.parse(localStorage.getItem('detectedSkills') || '[]');
  const results = getSkillResults();
  if (skills.length === 0) return false;
  return skills.every(skill => results[skill] && results[skill].status === 'completed');
}

/**
 * Move to next skill or trigger final results.
 */
function moveToNextSkill() {
  if (areAllSkillsCompleted()) {
    window.location.href = 'results.html';
  } else {
    window.location.href = 'skill-selection.html';
  }
}

/**
 * Calculate final readiness results for results page.
 */
function calculateFinalResults() {
  const skills = JSON.parse(localStorage.getItem('detectedSkills') || '[]');
  const results = getSkillResults();
  const mastery = JSON.parse(localStorage.getItem('userMastery') || '{}');

  let totalScore = 0;
  let maxPossibleScore = 0;
  let skillCount = 0;
  const breakdown = [];
  const allWeakTopics = [];

  skills.forEach(skill => {
    const r = results[skill];
    if (!r) return;

    const actualScore = r.score;
    const claimedScore = mastery[skill] || 5;
    totalScore += actualScore;
    maxPossibleScore += 10;
    skillCount++;

    if (r.weakTopics) {
      r.weakTopics.forEach(t => {
        if (!allWeakTopics.includes(t)) allWeakTopics.push(t);
      });
    }

    breakdown.push({
      skill,
      actualScore,
      claimedScore,
      levelReached: r.levelReached,
      verdict: r.verdict,
      label: r.label,
      weakTopics: r.weakTopics || [],
      levelScores: r.levelScores || {}
    });
  });

  const avgScore = skillCount > 0 ? totalScore / skillCount : 0;
  const readinessPercent = maxPossibleScore > 0 ? Math.round((totalScore / maxPossibleScore) * 100) : 0;

  return {
    averageScore: Math.round(avgScore * 10) / 10,
    totalSkills: skillCount,
    breakdown,
    allWeakTopics,
    readinessPercent,
    ready: avgScore >= 7
  };
}


// ============================================================
// PAGE INITIALIZATION
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  // Apply tilt effect to cards
  function applyTilt() {
    const cards = document.querySelectorAll('.tilt-card');
    cards.forEach(card => {
      card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -4;
        const rotateY = ((x - centerX) / centerX) * 4;
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
      });
    });
  }
  applyTilt();

  // ============================================================
  // LOGIN PAGE
  // ============================================================
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('email').value;
      const pwd = document.getElementById('password').value;
      if (email && pwd) window.location.href = 'upload.html';
      else alert('Please fill in all fields.');
    });
  }

  // ============================================================
  // UPLOAD PAGE
  // ============================================================
  const uploadArea = document.getElementById('uploadArea');
  if (uploadArea) {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.pdf,.doc,.docx';
    fileInput.style.display = 'none';
    uploadArea.appendChild(fileInput);

    const browseBtn = document.getElementById('browseBtn');
    if (browseBtn) browseBtn.addEventListener('click', () => fileInput.click());

    ['dragenter', 'dragover'].forEach(evt => {
      uploadArea.addEventListener(evt, e => {
        e.preventDefault();
        uploadArea.style.borderColor = 'var(--accent-cyan)';
        uploadArea.style.background = 'rgba(0, 229, 195, 0.08)';
      });
    });
    ['dragleave', 'drop'].forEach(evt => {
      uploadArea.addEventListener(evt, e => {
        e.preventDefault();
        uploadArea.style.borderColor = 'rgba(255,255,255,0.15)';
        uploadArea.style.background = 'rgba(0,0,0,0.2)';
      });
    });

    uploadArea.addEventListener('drop', async e => {
      const file = e.dataTransfer.files[0];
      if (file) await handleFileUpload(file);
    });

    fileInput.addEventListener('change', async e => {
      const file = e.target.files[0];
      if (file) await handleFileUpload(file);
    });

    async function handleFileUpload(file) {
      // Clear old data
      localStorage.removeItem('skillResults');

      document.querySelector('.extracted-skills')?.setAttribute('style', 'display:none');
      uploadArea.innerHTML = `<h3><span class="pulse-animation" style="display:inline-block; margin-right:8px; color:var(--accent-cyan)">●</span> Extracting Skills...</h3>`;

      const fd = new FormData();
      fd.append('resume', file);

      try {
        const uploadRes = await fetch(`${API_BASE_URL}/upload-resume/`, { method: 'POST', body: fd });
        if (!uploadRes.ok) throw new Error("Upload failed");

        const detectRes = await fetch(`${API_BASE_URL}/detect-skills/`);
        if (!detectRes.ok) throw new Error("Skill detection failed");

        const detectData = await detectRes.json();
        const detectedSkills = detectData.detected_skills || [];

        localStorage.setItem('detectedSkills', JSON.stringify(detectedSkills));

        document.querySelector('.extracted-skills').style.display = 'block';
        uploadArea.innerHTML = `<h3><span style="color:var(--accent-cyan)">✔</span> Resume Parsed</h3><p>${detectedSkills.length} Skills identified.</p>`;

        const skillTagsContainer = document.querySelector('.skill-badges');
        if (skillTagsContainer) {
          skillTagsContainer.innerHTML = detectedSkills.map(skill =>
            `<span class="skill-badge glass-card"><span style="color:var(--accent-cyan)">${getSkillIcon(skill)}</span> ${skill}</span>`
          ).join('');
        }

        // Update count
        const countSpan = document.querySelector('.extracted-skills span.text-dim');
        if (countSpan) countSpan.textContent = `${detectedSkills.length} Skills Identified`;
      } catch (err) {
        uploadArea.innerHTML = `<h3><span style="color:var(--accent-danger)">✖</span> Error</h3><p>${err.message}</p>`;
      }
    }
  }

  // ============================================================
  // SKILLS / MASTERY PAGE
  // ============================================================
  const dynamicSkillList = document.getElementById('dynamicSkillList');
  if (dynamicSkillList) {
    let skills = JSON.parse(localStorage.getItem('detectedSkills') || '[]');
    if (skills.length === 0) skills = ['React', 'Node.js', 'Docker', 'Python'];

    let htmlStr = '';
    skills.forEach(skill => {
      const valId = `val_${skill.replace(/[^A-Za-z0-9]/g, '')}`;
      htmlStr += `
        <div class="glass-card skill-card tilt-card" style="margin-bottom: 20px;">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <div style="display:flex; align-items:center; gap:12px;">
              <div style="width:40px; height:40px; background:rgba(255,255,255,0.1); border-radius:8px; display:flex; align-items:center; justify-content:center; font-size:1.2rem;">${getSkillIcon(skill)}</div>
              <div><h3 style="line-height:1;" class="mastery-skill-name">${skill}</h3></div>
            </div>
            <div style="font-size:1.5rem; font-weight:700; color:var(--accent-cyan);" id="${valId}">5</div>
          </div>
          <input type="range" class="skill-slider" min="1" max="10" value="5" data-skill="${skill}" data-target="${valId}">
          <div style="display:flex; justify-content:space-between; font-size:0.75rem; color:var(--text-dim); text-transform:uppercase;">
            <span>Novice</span><span>Architect</span>
          </div>
        </div>`;
    });
    dynamicSkillList.innerHTML = htmlStr;
    applyTilt();

    document.querySelectorAll('.skill-slider').forEach(slider => {
      slider.addEventListener('input', (e) => {
        const valDisplay = document.getElementById(e.target.dataset.target);
        if (valDisplay) valDisplay.textContent = e.target.value;
      });
    });

    const startInterrogationBtn = document.getElementById('startInterrogationBtn');
    if (startInterrogationBtn) {
      startInterrogationBtn.addEventListener('click', () => {
        const masteryValues = {};
        document.querySelectorAll('.skill-slider').forEach(slider => {
          masteryValues[slider.dataset.skill] = parseInt(slider.value, 10);
        });
        localStorage.setItem('userMastery', JSON.stringify(masteryValues));
        // Clear old results before starting fresh
        localStorage.removeItem('skillResults');
        // Go to skill selection page
        window.location.href = 'skill-selection.html';
      });
    }
  }

  // ============================================================
  // SKILL SELECTION PAGE
  // ============================================================
  const skillSelectionGrid = document.getElementById('skillSelectionGrid');
  if (skillSelectionGrid) {
    let skills = JSON.parse(localStorage.getItem('detectedSkills') || '[]');
    if (skills.length === 0) {
      skills = ['React', 'Node.js', 'Docker', 'SQL'];
      localStorage.setItem('detectedSkills', JSON.stringify(skills));
    }
    const mastery = JSON.parse(localStorage.getItem('userMastery') || '{}');
    const results = getSkillResults();

    let completedCount = 0;
    let htmlStr = '';

    skills.forEach((skill, index) => {
      const r = results[skill];
      const isCompleted = r && r.status === 'completed';
      if (isCompleted) completedCount++;

      const masteryVal = mastery[skill] || 5;
      const icon = getSkillIcon(skill);

      let statusBadge, resultSection = '';

      if (isCompleted) {
        statusBadge = `<span class="skill-status-badge badge-completed">✓ Completed</span>`;
        const verdictClass = r.verdict === 'VERIFIED' ? 'result-verified' :
                             r.verdict === 'PARTIAL' ? 'result-partial' :
                             r.verdict === 'GOOD' ? 'result-good' : 'result-failed';
        resultSection = `
          <div class="skill-card-result">
            <span class="skill-card-result-label">Result</span>
            <span class="skill-card-result-value ${verdictClass}">${r.label}</span>
          </div>
          <div class="skill-card-result">
            <span class="skill-card-result-label">Score</span>
            <span class="skill-card-result-value" style="color: var(--accent-cyan);">${r.score}/10</span>
          </div>`;
        if (r.weakTopics && r.weakTopics.length > 0) {
          resultSection += `
          <div class="skill-card-result" style="flex-wrap:wrap;">
            <span class="skill-card-result-label" style="width:100%; margin-bottom:4px;">Weak Topics</span>
            <div style="display:flex; flex-wrap:wrap; gap:4px;">
              ${r.weakTopics.slice(0, 3).map(t => `<span style="font-size:0.65rem; padding:2px 6px; background:rgba(255,77,106,0.12); color:var(--accent-danger); border-radius:4px;">${t}</span>`).join('')}
              ${r.weakTopics.length > 3 ? `<span style="font-size:0.65rem; color:var(--text-dim);">+${r.weakTopics.length - 3} more</span>` : ''}
            </div>
          </div>`;
        }
      } else {
        statusBadge = `<span class="skill-status-badge badge-not-started">○ Not Started</span>`;
      }

      htmlStr += `
        <div class="glass-card skill-select-card ${isCompleted ? 'completed' : ''}" 
             data-skill="${skill}" 
             id="skillCard_${index}"
             style="animation-delay: ${index * 0.08}s;"
             ${!isCompleted ? `onclick="startTest('${skill.replace(/'/g, "\\'")}')"` : ''}>
          <div class="skill-card-header">
            <div class="skill-card-icon">${icon}</div>
            ${statusBadge}
          </div>
          <div class="skill-card-name">${skill}</div>
          <div class="skill-card-mastery">Claimed Mastery: ${masteryVal}/10</div>
          ${resultSection}
        </div>`;
    });

    skillSelectionGrid.innerHTML = htmlStr;

    // Update progress summary
    const completedCountEl = document.getElementById('completedCount');
    const overallProgressPct = document.getElementById('overallProgressPct');
    const overallStatus = document.getElementById('overallStatus');
    
    if (completedCountEl) completedCountEl.textContent = `${completedCount} / ${skills.length}`;
    if (overallProgressPct) overallProgressPct.textContent = `${Math.round((completedCount / skills.length) * 100)}%`;
    
    if (completedCount === skills.length) {
      if (overallStatus) {
        overallStatus.textContent = 'Complete!';
        overallStatus.style.color = 'var(--accent-success)';
      }
      const actionBar = document.getElementById('actionBar');
      if (actionBar) actionBar.style.display = 'flex';
    } else {
      if (overallStatus) {
        overallStatus.textContent = 'In Progress';
        overallStatus.style.color = 'var(--accent-cyan)';
      }
    }

    // View Final Results button
    const viewFinalResultsBtn = document.getElementById('viewFinalResultsBtn');
    if (viewFinalResultsBtn) {
      viewFinalResultsBtn.addEventListener('click', () => {
        window.location.href = 'results.html';
      });
    }
  }

  // ============================================================
  // INTERROGATION PAGE (Decision Tree - Multi Question)
  // ============================================================
  const interrogationContainer = document.getElementById('interrogationContainer');
  if (interrogationContainer) {
    const urlParams = new URLSearchParams(window.location.search);
    const currentSkill = urlParams.get('skill');

    if (!currentSkill) {
      interrogationContainer.innerHTML = `
        <div style="text-align: center; padding: 80px 20px;">
          <div style="font-size: 3rem; margin-bottom: 16px;">❌</div>
          <h2>No Skill Selected</h2>
          <p class="text-dim" style="margin-top:8px;">Please select a skill from the selection page.</p>
          <a href="skill-selection.html" class="btn-primary" style="margin-top: 24px;">Go to Selection →</a>
        </div>`;
      return;
    }

    const skillNameEl = document.getElementById('currentSkillName');
    const skillIcon = document.getElementById('skillIcon');
    if (skillNameEl) skillNameEl.textContent = currentSkill;
    if (skillIcon) skillIcon.textContent = getSkillIcon(currentSkill);

    // State Variables
    const levels = ['easy', 'medium', 'hard'];
    let currentLevelIndex = 0;
    
    // Level specific
    let currentQuestions = [];
    let currentQuestionIndex = 0;
    let currentLevelCorrect = 0;
    let selectedAnswer = null;
    let isAnswerSubmitted = false;
    
    // Skill global
    let totalScore = 0;
    let weakTopics = [];
    let levelScores = {};

    // Elements
    const levelBadgeEl = document.getElementById('currentLevelBadge');
    const questionTextEl = document.getElementById('questionText');
    const optionsContainerEl = document.getElementById('optionsContainer');
    const progressBarEl = document.getElementById('progressBar');
    const questionLevelTag = document.getElementById('questionLevelTag');
    const questionTopicTag = document.getElementById('questionTopicTag');
    const questionNumberBadge = document.getElementById('questionNumberBadge');
    const submitBtn = document.getElementById('submitAnswerBtn');
    const submitBtnText = document.getElementById('submitBtnText');
    const answerFeedback = document.getElementById('answerFeedback');
    const questionCard = document.getElementById('questionCard');
    const feedbackIcon = document.getElementById('feedbackIcon');
    const feedbackText = document.getElementById('feedbackText');
    const continueBtn = document.getElementById('continueBtn');
    const buttonRow = document.getElementById('buttonRow');
    
    // Stats display
    const questionCounter = document.getElementById('questionCounter');
    const correctCounter = document.getElementById('correctCounter');
    const levelScoreDisplay = document.getElementById('levelScoreDisplay');
    const thresholdDisplay = document.getElementById('thresholdDisplay');
    const levelSummary = document.getElementById('levelSummary');

    // -------------------------------------------------------
    // Start a level
    // -------------------------------------------------------
    function startLevel() {
      const level = levels[currentLevelIndex];
      currentQuestions = getQuestionsForLevel(currentSkill, level);
      currentQuestionIndex = 0;
      currentLevelCorrect = 0;
      isAnswerSubmitted = false;
      
      updateTreeVisual();

      if (levelBadgeEl) {
        levelBadgeEl.textContent = level.toUpperCase();
        levelBadgeEl.className = `level-badge badge-${level}`;
      }
      if (questionLevelTag) {
        questionLevelTag.textContent = `LEVEL: ${level.toUpperCase()}`;
        questionLevelTag.className = `question-level-tag badge-${level}`;
      }
      
      const threshold = SCORING_CONFIG.thresholds[level] * 100;
      if (thresholdDisplay) thresholdDisplay.textContent = `${threshold}%`;

      if (levelSummary) levelSummary.style.display = 'none';
      if (questionCard) {
        questionCard.style.display = 'block';
        // Trigger slide-in animation
        questionCard.className = 'glass-card question-card-wrapper animate-slide-in-right';
      }
      if (buttonRow) buttonRow.style.display = 'flex';

      renderQuestion();
    }

    // -------------------------------------------------------
    // Update the tree visual (Easy → Medium → Hard nodes)
    // -------------------------------------------------------
    function updateTreeVisual() {
      const allNodes = document.querySelectorAll('.tree-node');
      allNodes.forEach((n, i) => {
        if (i < currentLevelIndex) n.className = 'tree-node tree-node-passed';
        else if (i === currentLevelIndex) n.className = 'tree-node tree-node-active';
        else n.className = 'tree-node';
      });
      const allConns = document.querySelectorAll('.tree-connector');
      allConns.forEach((c, i) => {
        if (i < currentLevelIndex) c.className = 'tree-connector connector-active';
        else c.className = 'tree-connector';
      });
    }

    // -------------------------------------------------------
    // Render a single question (one at a time)
    // -------------------------------------------------------
    function renderQuestion() {
      const qData = currentQuestions[currentQuestionIndex];
      const level = levels[currentLevelIndex];
      const totalQ = currentQuestions.length;
      
      // Update stats
      if (questionCounter) questionCounter.textContent = `${currentQuestionIndex + 1} / ${totalQ}`;
      if (correctCounter) correctCounter.textContent = currentLevelCorrect;
      
      const weight = SCORING_CONFIG.weights[level] || 1;
      if (levelScoreDisplay) levelScoreDisplay.textContent = currentLevelCorrect * weight;
      
      // Update progress bar (overall across all 3 levels)
      if (progressBarEl) {
        const qPerLevel = 5; // approximate
        const currentQOverall = (currentLevelIndex * qPerLevel) + currentQuestionIndex; 
        const maxQ = 15;
        progressBarEl.style.width = `${Math.min(100, Math.max(0, (currentQOverall / maxQ) * 100))}%`;
      }

      // Question number badge
      if (questionNumberBadge) {
        questionNumberBadge.innerHTML = `<span>📋</span> Question ${currentQuestionIndex + 1} of ${totalQ} <span style="color:var(--text-dim); margin-left:4px;">(${level.charAt(0).toUpperCase() + level.slice(1)})</span>`;
      }

      // Question text
      if (questionTextEl) questionTextEl.textContent = qData.question || '(Empty question — add your question here)';
      
      // Topic tag
      if (questionTopicTag) {
        const topic = qData.topic || 'General';
        questionTopicTag.textContent = `TOPIC: ${topic}`;
        questionTopicTag.style.display = 'inline-block';
      }

      // Show question card with animation
      if (questionCard) {
        questionCard.style.display = 'block';
        // Re-trigger animation
        questionCard.classList.remove('animate-slide-in-right');
        void questionCard.offsetHeight; // force reflow
        questionCard.classList.add('animate-slide-in-right');
      }

      // Render options
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
      }

      // Reset state
      selectedAnswer = null;
      isAnswerSubmitted = false;
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.style.display = 'inline-flex';
      }
      if (submitBtnText) submitBtnText.textContent = 'Submit Answer';
      if (answerFeedback) answerFeedback.style.display = 'none';
      if (buttonRow) buttonRow.style.display = 'flex';
    }

    // -------------------------------------------------------
    // Submit answer handler
    // -------------------------------------------------------
    if (submitBtn) {
      submitBtn.addEventListener('click', () => {
        if (!selectedAnswer) {
          submitBtn.classList.add('animate-shake');
          setTimeout(() => submitBtn.classList.remove('animate-shake'), 500);
          return;
        }

        if (isAnswerSubmitted) return;
        isAnswerSubmitted = true;

        const qData = currentQuestions[currentQuestionIndex];
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
        }
        
        if (isCorrect) {
          currentLevelCorrect++;
          // Update live counter
          if (correctCounter) correctCounter.textContent = currentLevelCorrect;
          const level = levels[currentLevelIndex];
          const weight = SCORING_CONFIG.weights[level] || 1;
          if (levelScoreDisplay) levelScoreDisplay.textContent = currentLevelCorrect * weight;
        } else if (qData.topic) {
          // Track weak topics
          if (!weakTopics.includes(qData.topic)) {
            weakTopics.push(qData.topic);
          }
        }

        // Highlight correct/incorrect on options
        document.querySelectorAll('.option-item').forEach(item => {
          item.classList.add('disabled-option');
          if (item.dataset.value === qData.correct) {
            item.classList.add('correct-answer');
          }
          if (item.dataset.value === selectedAnswer && !isCorrect) {
            item.classList.add('wrong-answer');
          }
        });

        // Hide submit button, show feedback
        if (submitBtn) submitBtn.style.display = 'none';

        if (answerFeedback) {
          answerFeedback.style.display = 'block';
          answerFeedback.className = `answer-feedback glass-card ${isCorrect ? 'feedback-correct' : 'feedback-wrong'}`;
          // Re-trigger animation
          answerFeedback.style.animation = 'none';
          void answerFeedback.offsetHeight;
          answerFeedback.style.animation = '';
          
          if (feedbackIcon) feedbackIcon.textContent = isCorrect ? '✅' : '❌';
          if (feedbackText) {
            if (isCorrect) {
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
            }
          }
          
          // Update button text based on whether there are more questions
          if (continueBtn) {
            if (currentQuestionIndex + 1 >= currentQuestions.length) {
              continueBtn.textContent = 'View Level Results →';
            } else {
              continueBtn.textContent = `Next Question (${currentQuestionIndex + 2}/${currentQuestions.length}) →`;
            }
          }
        }
      });
    }

    // -------------------------------------------------------
    // Continue button (next question or finish level)
    // -------------------------------------------------------
    if (continueBtn) {
      continueBtn.addEventListener('click', () => {
        currentQuestionIndex++;
        if (currentQuestionIndex >= currentQuestions.length) {
          // Finished all questions in this level
          finishLevel();
        } else {
          // Next question
          renderQuestion();
        }
      });
    }

    // -------------------------------------------------------
    // Finish level — evaluate and decide next action
    // -------------------------------------------------------
    function finishLevel() {
      const level = levels[currentLevelIndex];
      const thresholdReq = SCORING_CONFIG.thresholds[level];
      const accuracy = currentLevelCorrect / currentQuestions.length;
      const passed = accuracy >= thresholdReq;
      const weight = SCORING_CONFIG.weights[level];
      
      const levelPts = currentLevelCorrect * weight;
      totalScore += levelPts;
      levelScores[level] = {
        correct: currentLevelCorrect,
        total: currentQuestions.length,
        score: levelPts,
        accuracy: Math.round(accuracy * 100),
        passed
      };

      // Hide question UI
      if (questionCard) questionCard.style.display = 'none';
      if (answerFeedback) answerFeedback.style.display = 'none';
      if (buttonRow) buttonRow.style.display = 'none';

      // Update tree visual for pass/fail
      if (!passed) {
        const currentNode = document.querySelectorAll('.tree-node')[currentLevelIndex];
        if (currentNode) currentNode.className = 'tree-node tree-node-failed';
      } else {
        const currentNode = document.querySelectorAll('.tree-node')[currentLevelIndex];
        if (currentNode) currentNode.className = 'tree-node tree-node-passed';
      }
      
      // Decision Tree Logic
      let action = '';
      let status = '';
      let label = '';
      let finalLevelReached = currentLevelIndex;

      if (level === 'easy' && !passed) {
        action = 'stop'; status = 'FAILED'; label = '✕ Major Bluff'; finalLevelReached = 0;
      } else if (level === 'easy' && passed) {
        action = 'continue';
      } else if (level === 'medium' && !passed) {
        action = 'stop'; status = 'PARTIAL'; label = '⚠ Bluff Detected'; finalLevelReached = 1;
      } else if (level === 'medium' && passed) {
        action = 'continue';
      } else if (level === 'hard' && !passed) {
        action = 'finish'; status = 'GOOD'; label = '~ Good but not Expert'; finalLevelReached = 2;
      } else if (level === 'hard' && passed) {
        action = 'finish'; status = 'VERIFIED'; label = '✓ Verified Expert'; finalLevelReached = 3;
      }

      if (action === 'continue') {
        currentLevelIndex++;
        showLevelSummary(passed, level, accuracy, () => { startLevel(); });
      } else {
        // Test ended — calculate normalized score
        // Max possible: easy(5*1) + medium(5*2) + hard(5*3) = 30
        const normalizedScore = Math.min(10, Math.round((totalScore / 30) * 10));
        saveSkillResult(currentSkill, {
          levelReached: finalLevelReached,
          score: normalizedScore || 1,
          status: status,
          label: label,
          weakTopics: weakTopics,
          levelScores: levelScores
        });
        
        showLevelSummary(passed, level, accuracy, () => {
          if (progressBarEl) progressBarEl.style.width = '100%';
          moveToNextSkill();
        });
      }
    }

    // -------------------------------------------------------
    // Show level summary overlay
    // -------------------------------------------------------
    function showLevelSummary(passed, level, accuracy, callback) {
      if (!levelSummary) return callback();
      
      levelSummary.style.display = 'block';
      levelSummary.style.animation = 'none';
      void levelSummary.offsetHeight;
      levelSummary.style.animation = '';
      
      const icon = document.getElementById('levelSummaryIcon');
      const title = document.getElementById('levelSummaryTitle');
      const stats = document.getElementById('levelSummaryStats');
      const msg = document.getElementById('levelSummaryMessage');
      const btn = document.getElementById('levelSummaryBtn');
      const weakTopicsSection = document.getElementById('levelSummaryWeakTopics');
      const weakTopicsPills = document.getElementById('weakTopicsPillContainer');

      if (icon) icon.textContent = passed ? '🔓' : '🛑';
      if (title) title.textContent = passed ? `${level.toUpperCase()} CLEARED` : `${level.toUpperCase()} FAILED`;
      
      const pct = Math.round(accuracy * 100);
      const weight = SCORING_CONFIG.weights[level];
      if (stats) {
        stats.innerHTML = `
          <span>Accuracy: <strong style="color:var(--accent-${passed ? 'success' : 'danger'})">${pct}%</strong></span>
          <span style="margin:0 10px">|</span>
          <span>Required: <strong>${SCORING_CONFIG.thresholds[level] * 100}%</strong></span>
          <span style="margin:0 10px">|</span>
          <span>Score: <strong style="color:var(--accent-cyan)">${currentLevelCorrect * weight} pts</strong></span>`;
      }
      
      if (msg) {
        if (passed && level === 'hard') {
          msg.textContent = 'You have conquered the gauntlet for this skill. Expert level verified!';
        } else if (passed) {
          msg.textContent = `Level cleared! Proceeding to ${levels[currentLevelIndex + 1]?.toUpperCase() || 'NEXT'} difficulty.`;
        } else {
          msg.textContent = 'Threshold not met. Interrogation terminated for this skill.';
        }
      }

      // Show weak topics for this level
      if (weakTopicsSection && weakTopicsPills) {
        const levelWeakTopics = weakTopics.filter(t => t); // all accumulated
        if (levelWeakTopics.length > 0) {
          weakTopicsSection.style.display = 'block';
          weakTopicsPills.innerHTML = levelWeakTopics.map(t => 
            `<span class="weak-topic-pill">${t}</span>`
          ).join('');
        } else {
          weakTopicsSection.style.display = 'none';
        }
      }
      
      if (btn) {
        btn.textContent = passed && level !== 'hard' ? `Start ${levels[currentLevelIndex + 1]?.charAt(0).toUpperCase() + levels[currentLevelIndex + 1]?.slice(1) || 'Next'} Level →` : 'Continue →';
        btn.onclick = () => {
          levelSummary.style.display = 'none';
          callback();
        };
      }
    }

    // Start the interrogation!
    startLevel();
  }

  // ============================================================
  // RESULTS PAGE
  // ============================================================
  const skillBreakdownGrid = document.getElementById('skillBreakdownGrid');
  if (skillBreakdownGrid) {
    const finalData = calculateFinalResults();
    const mastery = JSON.parse(localStorage.getItem('userMastery') || '{}');

    // Session ID (deterministic based on skill count)
    const sessionIdEl = document.getElementById('sessionId');
    if (sessionIdEl) sessionIdEl.textContent = `${finalData.totalSkills}${finalData.totalSkills > 5 ? 'X' : 'A'}`;

    // Overall Status Card
    const verdictText = document.getElementById('verdictText');
    const readinessScore = document.getElementById('readinessScore');
    const overallStatusCard = document.getElementById('overallStatusCard');

    const scoreDisplay = `${finalData.averageScore}/10`;

    if (readinessScore) {
      readinessScore.textContent = scoreDisplay;
      if (finalData.averageScore >= 7) {
        readinessScore.className = 'readiness-score score-high';
      } else if (finalData.averageScore >= 4) {
        readinessScore.className = 'readiness-score score-medium';
      } else {
        readinessScore.className = 'readiness-score score-low';
      }
    }

    if (verdictText) {
      if (finalData.averageScore >= 7) {
        verdictText.innerHTML = '<span style="color:var(--accent-success);">✓ INTERVIEW READY</span>';
        if (overallStatusCard) {
          overallStatusCard.style.borderColor = 'rgba(52, 211, 153, 0.3)';
          overallStatusCard.style.background = 'linear-gradient(135deg, rgba(52,211,153,0.06), rgba(52,211,153,0.02))';
        }
      } else if (finalData.averageScore >= 4) {
        verdictText.innerHTML = '<span style="color:var(--accent-warning);">⚠ NEEDS IMPROVEMENT</span>';
        if (overallStatusCard) {
          overallStatusCard.style.borderColor = 'rgba(251, 191, 36, 0.3)';
          overallStatusCard.style.background = 'linear-gradient(135deg, rgba(251,191,36,0.06), rgba(251,191,36,0.02))';
        }
      } else {
        verdictText.innerHTML = '<span style="color:var(--accent-danger);">✕ BLUFF DETECTED</span>';
        if (overallStatusCard) {
          overallStatusCard.style.borderColor = 'rgba(255, 77, 106, 0.3)';
          overallStatusCard.style.background = 'linear-gradient(135deg, rgba(255,77,106,0.06), rgba(255,77,106,0.02))';
        }
      }
    }

    // Decision Banner
    const decisionBanner = document.getElementById('decisionBanner');
    const decisionIcon = document.getElementById('decisionIcon');
    const decisionTitle = document.getElementById('decisionTitle');
    const decisionSubtitle = document.getElementById('decisionSubtitle');

    if (finalData.ready) {
      if (decisionBanner) decisionBanner.className = 'glass-card decision-banner success';
      if (decisionIcon) decisionIcon.textContent = '🚀';
      if (decisionTitle) decisionTitle.textContent = 'You are ready to apply!';
      if (decisionSubtitle) decisionSubtitle.textContent = 'Your skills are verified. Apply for roles matching your expertise.';
    } else {
      if (decisionBanner) decisionBanner.className = 'glass-card decision-banner failure';
      if (decisionIcon) decisionIcon.textContent = '📚';
      if (decisionTitle) decisionTitle.textContent = 'You need improvement';
      if (decisionSubtitle) decisionSubtitle.textContent = 'Focus on weak areas listed below to strengthen your profile.';
    }

    // Skill Breakdown
    let breakdownHTML = '';
    finalData.breakdown.forEach(item => {
      const cardClass = item.verdict === 'VERIFIED' ? 'card-verified' :
                        item.verdict === 'PARTIAL' ? 'card-partial' :
                        item.verdict === 'GOOD' ? 'card-good' : 'card-bluff';
      const verdictClass = item.verdict === 'VERIFIED' ? 'verdict-verified' :
                           item.verdict === 'PARTIAL' ? 'verdict-partial' :
                           item.verdict === 'GOOD' ? 'verdict-good' : 'verdict-bluff';
      const barClass = item.verdict === 'VERIFIED' ? 'score-bar-verified' :
                       item.verdict === 'PARTIAL' ? 'score-bar-partial' :
                       item.verdict === 'GOOD' ? 'score-bar-good' : 'score-bar-bluff';

      const levelNames = ['None', 'Easy', 'Medium', 'Expert'];
      const levelName = levelNames[item.levelReached] || 'None';
      
      let weakTopicsHTML = '';
      if (item.weakTopics && item.weakTopics.length > 0) {
        weakTopicsHTML = `
          <div style="margin-top:16px; padding-top:12px; border-top:1px solid rgba(255,255,255,0.05);">
            <div style="font-size:0.75rem; color:var(--text-dim); text-transform:uppercase; margin-bottom:8px;">Weak Areas Detected</div>
            <div style="display:flex; flex-wrap:wrap; gap:6px;">
              ${item.weakTopics.map(t => `<span style="font-size:0.7rem; padding:3px 8px; background:rgba(255,77,106,0.15); color:var(--accent-danger); border-radius:4px;">${t}</span>`).join('')}
            </div>
          </div>
        `;
      }

      // Level breakdown details
      let levelDetailsHTML = '';
      if (item.levelScores && Object.keys(item.levelScores).length > 0) {
        levelDetailsHTML = `<div style="margin-top:12px; padding-top:12px; border-top:1px solid rgba(255,255,255,0.05);">`;
        ['easy', 'medium', 'hard'].forEach(lvl => {
          const ls = item.levelScores[lvl];
          if (ls) {
            const lvlColor = ls.passed ? 'var(--accent-success)' : 'var(--accent-danger)';
            levelDetailsHTML += `
              <div style="display:flex; justify-content:space-between; font-size:0.78rem; padding:4px 0;">
                <span style="color:var(--text-dim); text-transform:capitalize;">${lvl}</span>
                <span style="color:${lvlColor}; font-weight:600;">${ls.correct}/${ls.total} (${ls.accuracy}%)</span>
              </div>`;
          }
        });
        levelDetailsHTML += `</div>`;
      }

      breakdownHTML += `
        <div class="glass-card breakdown-card ${cardClass}">
          <div class="breakdown-header">
            <span class="breakdown-skill-name">${getSkillIcon(item.skill)} ${item.skill}</span>
            <span class="breakdown-verdict ${verdictClass}">${item.label}</span>
          </div>
          <div class="breakdown-details">
            <div class="breakdown-row">
              <span class="breakdown-row-label">Claimed Mastery</span>
              <span class="breakdown-row-value">${item.claimedScore}/10</span>
            </div>
            <div class="breakdown-row">
              <span class="breakdown-row-label">Actual Score</span>
              <span class="breakdown-row-value" style="color: var(--accent-cyan);">${item.actualScore}/10</span>
            </div>
            <div class="breakdown-row">
              <span class="breakdown-row-label">Level Reached</span>
              <span class="breakdown-row-value">${levelName}</span>
            </div>
          </div>
          <div class="score-bar-container">
            <div class="score-bar-fill ${barClass}" style="width: ${(item.actualScore / 10) * 100}%;"></div>
          </div>
          ${levelDetailsHTML}
          ${weakTopicsHTML}
        </div>`;
    });
    skillBreakdownGrid.innerHTML = breakdownHTML;

    // Readiness Percent display
    const readinessPercentEl = document.getElementById('readinessPercent');
    if (readinessPercentEl) readinessPercentEl.textContent = `${finalData.readinessPercent}%`;

    // All Weak Topics Section
    const allWeakTopicsEl = document.getElementById('allWeakTopics');
    if (allWeakTopicsEl && finalData.allWeakTopics.length > 0) {
      allWeakTopicsEl.innerHTML = finalData.allWeakTopics.map(t => 
        `<span style="font-size:0.78rem; padding:5px 12px; background:rgba(255,77,106,0.12); color:var(--accent-danger); border-radius:6px; border:1px solid rgba(255,77,106,0.2);">${t}</span>`
      ).join('');
      const weakTopicsSection = document.getElementById('weakTopicsOverview');
      if (weakTopicsSection) weakTopicsSection.style.display = 'block';
    }

    // Success Section (score >= 7)
    const successSection = document.getElementById('successSection');
    const improvementSection = document.getElementById('improvementSection');

    if (finalData.ready) {
      if (successSection) successSection.style.display = 'block';
      if (improvementSection) improvementSection.style.display = 'none';

      // Determine suggested roles
      const rolesGrid = document.getElementById('rolesGrid');
      if (rolesGrid) {
        let roles = [];
        if (finalData.averageScore >= 8) {
          roles = [
            { icon: '💼', title: 'SDE (Full-Time)', sub: 'Software Development Engineer' },
            { icon: '🖥️', title: 'Frontend Developer', sub: 'React/Vue/Angular' },
            { icon: '⚙️', title: 'Backend Developer', sub: 'Node.js/Python/Java' },
            { icon: '☁️', title: 'Cloud Engineer', sub: 'AWS/GCP/Azure' }
          ];
        } else {
          roles = [
            { icon: '🎓', title: 'SDE Intern', sub: 'Entry-level Engineering' },
            { icon: '🖥️', title: 'Frontend Developer', sub: 'Junior Role' },
            { icon: '⚙️', title: 'Backend Developer', sub: 'Intern/Junior' }
          ];
        }

        rolesGrid.innerHTML = roles.map(role => `
          <div class="glass-card role-card">
            <div class="role-card-icon">${role.icon}</div>
            <div class="role-card-title">${role.title}</div>
            <div class="role-card-sub">${role.sub}</div>
          </div>
        `).join('');
      }
    } else {
      if (successSection) successSection.style.display = 'none';
      if (improvementSection) improvementSection.style.display = 'block';

      // Build improvement plan
      const improvementGrid = document.getElementById('improvementGrid');
      if (improvementGrid) {
        let improvementHTML = '';
        finalData.breakdown.forEach(item => {
          if (item.verdict === 'FAILED' || item.verdict === 'PARTIAL') {
            // Use actual weak topics from the test
            const topicsToShow = item.weakTopics.length > 0 
              ? item.weakTopics 
              : ['Core Fundamentals', 'Advanced Concepts', 'Best Practices'];

            // Get resource suggestions
            const res = (typeof RESOURCE_SUGGESTIONS !== 'undefined' && RESOURCE_SUGGESTIONS[item.skill])
              ? RESOURCE_SUGGESTIONS[item.skill]
              : RESOURCE_SUGGESTIONS['default'] || { youtube: 'FreeCodeCamp', roadmap: 'roadmap.sh', practice: 'Practice projects' };

            improvementHTML += `
              <div class="glass-card improvement-card">
                <div class="improvement-skill-name">${getSkillIcon(item.skill)} ${item.skill}</div>
                <div class="improvement-topics">
                  ${topicsToShow.map(topic => `<div class="improvement-topic">${topic}</div>`).join('')}
                </div>
                <div class="resource-card glass-card" style="margin-top:12px;">
                  <div class="resource-card-title">📚 Suggested Resources</div>
                  <div class="resource-item"><span>🎬</span> ${res.youtube}</div>
                  <div class="resource-item"><span>🗺️</span> ${res.roadmap}</div>
                  <div class="resource-item"><span>💻</span> ${res.practice}</div>
                </div>
              </div>`;
          }
        });

        // If all skills were GOOD or better but average < 7
        if (improvementHTML === '') {
          finalData.breakdown.forEach(item => {
            if (item.actualScore < 10) {
              const topicsToShow = item.weakTopics.length > 0
                ? item.weakTopics
                : ['Advanced Concepts', 'Performance Optimization'];

              improvementHTML += `
                <div class="glass-card improvement-card" style="border-top-color: var(--accent-warning);">
                  <div class="improvement-skill-name" style="color: var(--accent-warning);">${getSkillIcon(item.skill)} ${item.skill}</div>
                  <div class="improvement-topics">
                    ${topicsToShow.map(topic => `<div class="improvement-topic">${topic}</div>`).join('')}
                  </div>
                </div>`;
            }
          });
        }

        improvementGrid.innerHTML = improvementHTML || '<p class="text-dim">Review all skills for advanced mastery.</p>';
      }
    }

    // Restart button
    const restartBtn = document.getElementById('restartBtn');
    if (restartBtn) {
      restartBtn.addEventListener('click', () => {
        localStorage.removeItem('skillResults');
        localStorage.removeItem('interrogationResults');
        window.location.href = 'upload.html';
      });
    }
  }
});

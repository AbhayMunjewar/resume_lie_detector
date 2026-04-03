// App Navigation and Interaction Logic

const API_BASE_URL = 'http://127.0.0.1:8000/api';

document.addEventListener('DOMContentLoaded', () => {
  // Set active nav link
  const currentPath = window.location.pathname;
  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.getAttribute('href') && currentPath.includes(link.getAttribute('href').replace('./', ''))) {
      link.classList.add('active');
    }
  });

  function applyTilt() {
    const cards = document.querySelectorAll('.tilt-card');
    cards.forEach(card => {
      card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -5;
        const rotateY = ((x - centerX) / centerX) * 5;
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
      });
    });
  }
  applyTilt();

  // Login Form Validation
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

  // Upload Area Logic
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
        uploadArea.style.background = 'rgba(0, 255, 200, 0.1)';
      });
    });
    ['dragleave', 'drop'].forEach(evt => {
      uploadArea.addEventListener(evt, e => {
        e.preventDefault();
        uploadArea.style.borderColor = 'rgba(255,255,255,0.1)';
        uploadArea.style.background = 'rgba(255,255,255,0.05)';
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
        uploadArea.innerHTML = `<h3><span style="color:var(--accent-cyan)">✔</span> Resume Parsed</h3><p>Analysis complete. ${detectedSkills.length} Skills identified.</p>`;

        const skillTagsContainer = document.querySelector('.skill-badges');     
        if (skillTagsContainer) {
          skillTagsContainer.innerHTML = detectedSkills.map(skill => `<span class="skill-badge glass-card"><span style="color:var(--accent-cyan)">✨</span> ${skill}</span>`).join('');
        }
      } catch (err) {
        uploadArea.innerHTML = `<h3><span style="color:#ff4444">✖</span> Error</h3><p>${err.message}</p>`;
      }
    }
  }

  // --- SKILLS DYNAMIC RENDERING ---
  const dynamicSkillList = document.getElementById('dynamicSkillList');
  if (dynamicSkillList) {
    let skills = JSON.parse(localStorage.getItem('detectedSkills') || '[]');
    if (skills.length === 0) skills = ["React", "Node.js", "Docker", "Python"];
    
    let htmlStr = "";
    skills.forEach(skill => {
      const valId = `val_${skill.replace(/[^A-Za-z0-9]/g, '')}`;
      htmlStr += `
        <div class="glass-card skill-card tilt-card" style="margin-bottom: 20px;">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <div style="display:flex; align-items:center; gap:12px;">
              <div style="width:40px; height:40px; background:rgba(255,255,255,0.1); border-radius:8px; display:flex; align-items:center; justify-content:center; font-size:1.2rem; color:var(--accent-cyan);">✨</div>
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

    const sliders = document.querySelectorAll('.skill-slider');
    sliders.forEach(slider => {
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
        window.location.href = 'interrogation.html';
      });
    }
  }

  // --- INTERROGATION LOGIC (DETERMINISTIC JS) ---
  const interrogationArea = document.getElementById('interrogationArea');
  if (interrogationArea) {
    let skills = JSON.parse(localStorage.getItem('detectedSkills') || '[]');
    let userMastery = JSON.parse(localStorage.getItem('userMastery') || '{}');
    if (skills.length === 0) Object.keys(userMastery).length > 0 ? (skills = Object.keys(userMastery)) : (skills = ["React"]);

    let currentSkillIndex = 0;
    let levelSequence = ['easy', 'medium', 'hard'];
    let currentLevelIndex = 0;
    let currentQuestionIndex = 0;
    let finalResults = {};

    const questionText    = document.getElementById('questionText');
    const optionsContainer= document.getElementById('optionsContainer');
    const skillNameUI     = document.getElementById('currentSkillName');
    const levelBadgeUI    = document.getElementById('currentLevelBadge');
    const submitBtn       = document.getElementById('submitAnswerBtn');
    const overallProgress = document.getElementById('overallProgress');

    interrogationArea.style.display = 'block';

    function getQuestion(skill, level, qIndex) {
      const defaultSkillData = { levels: [
        { level: "easy", questions: Array(5).fill({ question: "", options: [], correct: "" }) },
        { level: "medium", questions: Array(5).fill({ question: "", options: [], correct: "" }) },
        { level: "hard", questions: Array(5).fill({ question: "", options: [], correct: "" }) }
      ]};
      let skillData = (typeof QUESTION_BANK !== 'undefined' && QUESTION_BANK[skill]) ? QUESTION_BANK[skill] : defaultSkillData;
      let levelData = skillData.levels.find(l => l.level === level) || defaultSkillData.levels[0];
      let questionsArr = levelData.questions || Array(5).fill({ question: "", options: [], correct: "" });
      return questionsArr[qIndex] || { question: "", options: [], correct: "" };
    }

    function renderQuestion() {
      if (currentSkillIndex >= skills.length) {
        interrogationArea.style.display = 'none';
        const completeUI = document.getElementById('interrogationComplete');
        if (completeUI) completeUI.style.display = 'block';
        localStorage.setItem('interrogationResults', JSON.stringify(finalResults));
        return;
      }

      const activeSkill = skills[currentSkillIndex];
      const activeLevel = levelSequence[currentLevelIndex];

      skillNameUI.textContent = `${activeSkill} (${currentQuestionIndex + 1}/5)`;
      levelBadgeUI.textContent = activeLevel.toUpperCase();
      levelBadgeUI.className = 'level-badge badge-' + activeLevel;

      let totalSteps = skills.length * 15;
      let currentStep = (currentSkillIndex * 15) + (currentLevelIndex * 5) + currentQuestionIndex;
      overallProgress.style.width = ((currentStep / totalSteps) * 100) + '%';

      const qd = getQuestion(activeSkill, activeLevel, currentQuestionIndex);
      if (!qd.question || qd.question === "") {
         questionText.innerHTML = `<em>(Please fill "${activeLevel}" question #${currentQuestionIndex + 1} for ${activeSkill} in QUESTION_BANK JSON)</em>`;
      } else {
         questionText.innerHTML = qd.question;
      }

      let opts = qd.options;
      if (!opts || opts.length === 0) {
         opts = ["A", "B", "C", "D"]; // Dummy options
      }

      optionsContainer.innerHTML = opts.map(opt => `
        <label class="radio-option">
          <input type="radio" name="answer_opt" value="${opt}">
          <span>${opt}</span>
        </label>
      `).join('');
    }

    if (submitBtn) {
      submitBtn.addEventListener('click', () => {
        const activeSkill = skills[currentSkillIndex];
        const activeLevel = levelSequence[currentLevelIndex];
        
        const checked = document.querySelector('input[name="answer_opt"]:checked');
        if (!checked) return alert("Select an option!");

        const selectedAnswer = checked.value;
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
        }

        renderQuestion();
      });
    }

    const viewResultsBtn = document.getElementById('viewResultsBtn');
    if (viewResultsBtn) {
      viewResultsBtn.addEventListener('click', () => {
        window.location.href = 'results.html';
      });
    }

    renderQuestion();
  }
});

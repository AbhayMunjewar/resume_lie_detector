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

  // 3D Tilt Effect for Glass Cards
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
      card.style.transform = `perspective(1000px) rotateX(0) rotateY(0) translateY(0)`;
    });
  });

  // Login Form Validation
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('email').value;
      const pwd = document.getElementById('password').value;
      if (email && pwd) {
        window.location.href = 'upload.html';
      } else {
        alert('Please fill in all fields.');
      }
    });
  }

  // Upload Area Logic
  const uploadArea = document.getElementById('uploadArea');
  if (uploadArea) {
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
      uploadArea.addEventListener(eventName, preventDefaults, false);
    });

    function preventDefaults(e) {
      e.preventDefault();
      e.stopPropagation();
    }

    ['dragenter', 'dragover'].forEach(eventName => {
      uploadArea.addEventListener(eventName, () => uploadArea.classList.add('dragover'), false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
      uploadArea.addEventListener(eventName, () => uploadArea.classList.remove('dragover'), false);
    });

    uploadArea.addEventListener('drop', handleDrop, false);
    
    function handleDrop(e) {
      const files = e.dataTransfer.files;
      if (files.length) {
        uploadFile(files[0]);
      }
    }

    document.getElementById('browseBtn').addEventListener('click', () => {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'application/pdf';
      input.onchange = (e) => {
        if (e.target.files.length) {
          uploadFile(e.target.files[0]);
        }
      };
      input.click();
    });

    async function uploadFile(file) {
      uploadArea.innerHTML = `<h3><span style="color:var(--accent-cyan)">⟳</span> Analyzing Resume...</h3><p>Extracting skills securely...</p>`;
      
      const formData = new FormData();
      formData.append('resume', file);
      
      try {
        const uploadRes = await fetch(`${API_BASE_URL}/upload-resume/`, {
          method: 'POST',
          body: formData
        });
        
        if (!uploadRes.ok) throw new Error('Upload failed');
        
        const detectRes = await fetch(`${API_BASE_URL}/detect-skills/`);
        if (!detectRes.ok) throw new Error('Skill detection failed');

        const detectData = await detectRes.json();
        const detectedSkills = detectData.detected_skills || [];
        
        // Save skills to loop through in Interrogation
        localStorage.setItem('detectedSkills', JSON.stringify(detectedSkills));
        
        document.querySelector('.extracted-skills').style.display = 'block';
        uploadArea.innerHTML = `<h3><span style="color:var(--accent-cyan)">✔</span> Resume Parsed</h3><p>Analysis complete. ${detectedSkills.length} Skills identified.</p>`;
        
        const skillTagsContainer = document.querySelector('.skill-tags');
        skillTagsContainer.innerHTML = detectedSkills.map(skill => `<span class="badge">${skill}</span>`).join('');
        
      } catch (err) {
        uploadArea.innerHTML = `<h3><span style="color:#ff4444">✖</span> Error</h3><p>${err.message}</p>`;
      }
    }
  }

  // Skills Sliders
  const sliders = document.querySelectorAll('.skill-slider');
  sliders.forEach(slider => {
    slider.addEventListener('input', (e) => {
      const valDisplay = document.getElementById(e.target.dataset.target);
      if (valDisplay) valDisplay.textContent = e.target.value;
    });
  });

  // Interrogation Logic
  const questionBox = document.getElementById('questionText');
  if (questionBox) {
    let currentSkillIndex = 0;
    let currentLevel = 'easy';
    let skills = JSON.parse(localStorage.getItem('detectedSkills') || '[]');
    let currentQuestionData = null;
    
    // Fallback if no skills
    if (skills.length === 0) {
        skills = ["Python"]; 
    }

    // Typewriter effect
    function typeWriter(text, i, cb) {
      if (i < text.length) {
        questionBox.innerHTML = text.substring(0, i+1) + '<span class="cursor" style="color:var(--accent-cyan)">|</span>';
        setTimeout(() => typeWriter(text, i + 1, cb), 30);
      } else {
        questionBox.innerHTML = text;
        if(cb) cb();
      }
    }

    async function fetchNextQuestion() {
      if (currentSkillIndex >= skills.length) {
        // We're done with all skills
        window.location.href = 'results.html';
        return;
      }

      const activeSkill = skills[currentSkillIndex];

      try {
        const res = await fetch(`${API_BASE_URL}/get-questions/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                skill: activeSkill,
                current_level: currentLevel
            })
        });
        
        if (res.ok) {
            const data = await res.json();
            currentQuestionData = data;
            
            document.querySelectorAll('.option-card').forEach(c => c.classList.remove('selected'));
            questionBox.innerHTML = '';
            
            const qStr = `[${data.skill} - ${data.level.toUpperCase()}] ${data.question}`;
            typeWriter("> " + qStr, 0);

            // Update Progress Bar roughly
            const totalSteps = skills.length * 3;
            const currentStep = (currentSkillIndex * 3) + (currentLevel === 'easy' ? 0 : currentLevel === 'medium' ? 1 : 2);
            document.getElementById('progressBar').style.width = `${(currentStep / totalSteps) * 100}%`;

        } else {
            console.error("Skipping missing question");
            currentSkillIndex++;
            currentLevel = 'easy';
            fetchNextQuestion();
        }
      } catch(e) {
        questionBox.innerHTML = "Error loading question from server.";
      }
    }

    // Initialize first load
    setTimeout(fetchNextQuestion, 500);

    document.querySelectorAll('.option-card').forEach(card => {
      card.addEventListener('click', () => {
        document.querySelectorAll('.option-card').forEach(c => {
          c.classList.remove('selected');
        });
        card.classList.add('selected');
      });
    });

    document.getElementById('nextBtn').addEventListener('click', async () => {
      const selected = document.querySelector('.option-card.selected');
      if (!selected) return alert("Select an option first");
      
      if (!currentQuestionData) return;
      
      const activeSkill = currentQuestionData.skill;
      const activeLevel = currentQuestionData.level;

      // Simulated boolean logic based on the user's card selection in the UI
      const answerText = selected.textContent;
      
      try {
          const res = await fetch(`${API_BASE_URL}/submit-answer/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              skill: activeSkill,
              level: activeLevel,
              answer: answerText
            })
          });
          const result = await res.json();
          
          if (result.next_action === "continue" && result.next_level) {
              currentLevel = result.next_level;
          } else {
              // Action is "stop" (failed) or "finish" (passed hard)
              currentSkillIndex++;
              currentLevel = 'easy'; // Reset level for the next skill
          }
          
          fetchNextQuestion();
      } catch (err) {
          console.error(err);
          alert("Error submitting answer.");
      }
    });
  }
});

// App Navigation and Interaction Logic

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
      document.querySelector('.extracted-skills').style.display = 'block';
      uploadArea.innerHTML = `<h3><span style="color:var(--accent-cyan)">✔</span> Resume Parsed</h3><p>Analysis complete. Skills extracted.</p>`;
    }

    document.getElementById('browseBtn').addEventListener('click', () => {
      document.querySelector('.extracted-skills').style.display = 'block';
      uploadArea.innerHTML = `<h3><span style="color:var(--accent-cyan)">✔</span> Resume Parsed</h3><p>Analysis complete. 8 Skills identified.</p>`;
    });
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
    const questions = [
      "How would you handle a race condition in a distributed system with horizontally scaled microservices?",
      "Explain the difference between a mutex and a spinlock in the context of high-frequency trading.",
      "How do you optimize a React application that suffers from excessive re-rendering?"
    ];
    let currentQ = 0;
    
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

    function loadQuestion(index) {
      document.querySelectorAll('.option-card').forEach(c => c.classList.remove('selected'));
      questionBox.innerHTML = '';
      typeWriter("> " + questions[index], 0);
      document.getElementById('progressBar').style.width = `${((index) / questions.length) * 100}%`;
    }

    loadQuestion(currentQ);

    document.querySelectorAll('.option-card').forEach(card => {
      card.addEventListener('click', () => {
        document.querySelectorAll('.option-card').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
      });
    });

    document.getElementById('nextBtn').addEventListener('click', () => {
      const selected = document.querySelector('.option-card.selected');
      if (!selected) return alert("Select an option first");
      
      currentQ++;
      if (currentQ < questions.length) {
        loadQuestion(currentQ);
      } else {
        window.location.href = 'results.html';
      }
    });
  }
});

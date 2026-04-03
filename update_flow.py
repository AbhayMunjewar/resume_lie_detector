import re

app_file = 'frontend/js/app.js'

with open(app_file, 'r', encoding='utf-8') as f:
    js_content = f.read()

# 1. Remove slider rendering in `skills.html`.
render_skills_original = r'''          <div style="font-size:1\.5rem;\s+font-weight:700;\s+color:var\(--accent-cyan\);" id="\$\{valId\}">5</div>
          </div>
          <input type="range" class="skill-slider" min="1" max="10" value="5" data-skill="\$\{skill\}" data-target="\$\{valId\}">
          <div style="display:flex; justify-content:space-between; font-size:0\.75rem; color:var\(--text-dim\); text-transform:uppercase;">
            <span>Novice</span><span>Architect</span>
          </div>'''

render_skills_new = r'''          <div style="font-size:1.0rem; font-weight:700; color:var(--accent-success);" id="${valId}">Ready</div>
          </div>'''

js_content = re.sub(render_skills_original, render_skills_new, js_content)


# 2. Update the submit button for skills.html
start_button_original = r'''        const masteryValues = \{\};
        document\.querySelectorAll\('\.skill-slider'\)\.forEach\(slider => \{
          masteryValues\[slider\.dataset\.skill\] = parseInt\(slider\.value, 10\);
        \}\);
        localStorage\.setItem\('userMastery',\s*JSON\.stringify\(masteryValues\)\);
        // Clear old results before starting fresh
        localStorage\.removeItem\('skillResults'\);
        // Go to skill selection page
        window\.location\.href = 'skill-selection\.html';'''

start_button_new = r'''        // Remove manual mastery
        // Setup initial state and go to FIRST interrogation skill
        const skillsToTest = JSON.parse(localStorage.getItem('detectedSkills') || '[]');
        localStorage.removeItem('skillResults');
        if (skillsToTest.length > 0) {
            window.location.href = `interrogation.html?skill=${encodeURIComponent(skillsToTest[0])}`;
        } else {
            console.error("No skills found to start.");
            window.location.href = 'upload.html';
        }'''

js_content = re.sub(start_button_original, start_button_new, js_content)

# 3. Update moveToNextSkill logic
move_next_original = r'''function moveToNextSkill\(\) \{
  if \(areAllSkillsCompleted\(\)\) \{
    window\.location\.href = 'results\.html';
  \} else \{
    window\.location\.href = 'skill-selection\.html';
  \}
\}'''

move_next_new = r'''function moveToNextSkill() {
  const urlParams = new URLSearchParams(window.location.search);
  const currentSkill = urlParams.get('skill');
  const skillsToTest = JSON.parse(localStorage.getItem('detectedSkills') || '[]');
  
  if (!currentSkill) {
      window.location.href = 'results.html';
      return;
  }
  
  const currentIndex = skillsToTest.indexOf(currentSkill);
  if (currentIndex !== -1 && currentIndex + 1 < skillsToTest.length) {
      const nextSkill = skillsToTest[currentIndex + 1];
      window.location.href = `interrogation.html?skill=${encodeURIComponent(nextSkill)}`;
  } else {
      window.location.href = 'results.html';
  }
}'''

js_content = re.sub(move_next_original, move_next_new, js_content)

# 4. Remove slider listener error
slider_listener_original = r'''    document.querySelectorAll\('\.skill-slider'\)\.forEach\(slider => \{
      slider\.addEventListener\('input', \(e\) => \{
        const valDisplay = document\.getElementById\(e\.target\.dataset\.target\);
        if \(valDisplay\) valDisplay\.textContent = e\.target\.value;
      \}\);
    \}\);'''

slider_listener_new = r'''    // Sliders removed, automatic progression only.'''
js_content = re.sub(slider_listener_original, slider_listener_new, js_content)

# Also find and replace any other local usages of moveToNextSkill inside interrogation
# There's a declaration of moveToNextSkill at the top of the file, we just replaced it.

# Update `moveToNextSkill` call inside `finishLevel`:
# If `finishLevel` calls `moveToNextSkill()` locally, we need to make sure we don't have scope issues. But it seems `moveToNextSkill` is global.

with open(app_file, 'w', encoding='utf-8') as f:
    f.write(js_content)

print("Updated app.js for seamless test flow.")

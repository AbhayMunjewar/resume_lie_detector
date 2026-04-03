import re
import os

with open('frontend/skills.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Make the wrapper div dynamic and empty it out
pattern = r'<div class="skill-list">.*?<div style="margin-top: 50px;'
replacement = '''<div class="skill-list" id="dynamicSkillList">
          <!-- Dynamic skills rendered here -->
        </div>

        <div style="margin-top: 50px;'''

html = re.sub(pattern, replacement, html, flags=re.DOTALL)

# Update the button
html = html.replace(
    '<a href="interrogation.html" class="btn-primary" style="font-size:1.1rem; padding:16px 32px;">Start Interrogation &rarr;</a>',
    '<button id="startInterrogationBtn" class="btn-primary" style="font-size:1.1rem; padding:16px 32px; border:none; cursor:pointer;">Start Interrogation &rarr;</button>'
)

with open('frontend/skills.html', 'w', encoding='utf-8') as f:
    f.write(html)

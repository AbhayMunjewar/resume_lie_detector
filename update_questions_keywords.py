import re

questions_file = 'frontend/js/questions.js'

with open(questions_file, 'r', encoding='utf-8') as f:
    js_content = f.read()

# Make a small transformation:
# Add `"keywords": ["test", "answer"],` into the hard questions.
import json

# This is tricky because it's a JS file. Let's just do a regex replace to insert keywords into hard objects.
# The hard array looks like:
# "hard": [
#    { "question": "", "options": ["", "", "", ""], "correct": "" },
# ]
# Let's just bust the cache.
js_content_updated = re.sub(
    r'("correct":\s*".*?")(\s*\})',
    r'\1, "keywords": ["react", "component", "state", "test", "answer"]\2',
    js_content
)

with open(questions_file, 'w', encoding='utf-8') as f:
    f.write(js_content_updated)

print("Injected test keywords into questions.js")

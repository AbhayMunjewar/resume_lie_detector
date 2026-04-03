import time

def add_cache_buster(filename):
    try:
        with open(filename, 'r', encoding='utf-8') as f:
            html = f.read()

        ts = int(time.time())
        # Strip old ?v= defaults if they exist
        import re
        html = re.sub(r'src="./js/app\.js(\?v=\d+)?"', f'src="./js/app.js?v={ts}"', html)
        html = re.sub(r'src="./js/questions\.js(\?v=\d+)?"', f'src="./js/questions.js?v={ts}"', html)

        with open(filename, 'w', encoding='utf-8') as f:
            f.write(html)
    except FileNotFoundError:
        pass

for file in ['frontend/skills.html', 'frontend/upload.html', 'frontend/interrogation.html', 'frontend/results.html']:
    add_cache_buster(file)

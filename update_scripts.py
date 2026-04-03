for html_file in ['frontend/skills.html', 'frontend/interrogation.html', 'frontend/results.html']:
    try:
        with open(html_file, 'r', encoding='utf-8') as f:
            html = f.read()
        if '<script src="./js/questions.js"></script>' not in html:
            html = html.replace('<script src="./js/app.js"></script>', '<script src="./js/questions.js"></script>\n  <script src="./js/app.js"></script>')
            with open(html_file, 'w', encoding='utf-8') as f:
                f.write(html)
    except FileNotFoundError:
        pass

import json
import re

file_path = r'c:\Users\Ajay\resume_lie_detector\frontend\js\questions.js'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# We need to insert CSS, HTML, JavaScript to the QUESTION_BANK dictionary
css_data = """
  "CSS": {
    "easy": [
      {
        "question": "What does CSS stand for?",
        "options": ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"],
        "correct": "Cascading Style Sheets",
        "topic": "CSS Basics"
      },
      {
        "question": "Where in an HTML document is the correct place to refer to an external style sheet?",
        "options": ["In the <head> section", "In the <body> section", "At the end of the document", "Inside a <div>"],
        "correct": "In the <head> section",
        "topic": "Linking CSS"
      },
      {
        "question": "Which HTML tag is used to define an internal style sheet?",
        "options": ["<style>", "<css>", "<script>", "<link>"],
        "correct": "<style>",
        "topic": "Internal CSS"
      },
      {
        "question": "Which property is used to change the background color?",
        "options": ["background-color", "color", "bgcolor", "background"],
        "correct": "background-color",
        "topic": "Colors"
      },
      {
        "question": "How do you add a comment in a CSS file?",
        "options": ["/* this is a comment */", "// this is a comment", "<!-- this is a comment -->", "' this is a comment"],
        "correct": "/* this is a comment */",
        "topic": "Syntax"
      }
    ],
    "medium": [
      {
        "question": "Which property is used to change the left margin of an element?",
        "options": ["margin-left", "padding-left", "indent", "spacing-left"],
        "correct": "margin-left",
        "topic": "Margins"
      },
      {
        "question": "How do you select an element with id 'demo'?",
        "options": ["#demo", ".demo", "demo", "*demo"],
        "correct": "#demo",
        "topic": "Selectors"
      },
      {
        "question": "How do you select elements with class name 'test'?",
        "options": [".test", "#test", "test", "*test"],
        "correct": ".test",
        "topic": "Selectors"
      },
      {
        "question": "What is the default value of the position property?",
        "options": ["static", "relative", "fixed", "absolute"],
        "correct": "static",
        "topic": "Positioning"
      },
      {
        "question": "Which property is used to control the spacing between letters?",
        "options": ["letter-spacing", "word-spacing", "line-height", "text-spacing"],
        "correct": "letter-spacing",
        "topic": "Typography"
      }
    ],
    "hard": [
      {
        "question": "What is the difference between 'display: none' and 'visibility: hidden'?",
        "options": ["'display: none' removes the element from the document flow, 'visibility: hidden' leaves a blank space", "They are exactly the same", "'visibility: hidden' removes the element from the document flow", "'display: none' leaves a blank space"],
        "correct": "'display: none' removes the element from the document flow, 'visibility: hidden' leaves a blank space",
        "topic": "Layout"
      },
      {
        "question": "How do you clear floated elements?",
        "options": ["Using the 'clear' property", "Using the 'float' property", "Using 'display: inline'", "Using 'position: absolute'"],
        "correct": "Using the 'clear' property",
        "topic": "Floats"
      },
      {
        "question": "What is the CSS box model?",
        "options": ["A box that wraps around every HTML element (margin, border, padding, content)", "A way to draw shapes", "A grid system", "A flexbox container"],
        "correct": "A box that wraps around every HTML element (margin, border, padding, content)",
        "topic": "Box Model"
      },
      {
        "question": "What does the z-index property do?",
        "options": ["Specifies the stack order of an element", "Changes the zoom level", "Changes the z-axis rotation", "Sets the font size"],
        "correct": "Specifies the stack order of an element",
        "topic": "Stacking Context"
      },
      {
        "question": "Which property allows you to use a custom font?",
        "options": ["@font-face", "font-family", "font-weight", "font-style"],
        "correct": "@font-face",
        "topic": "Typography"
      }
    ]
  },
"""

# Insert right after "const QUESTION_BANK = {"
new_content = content.replace("const QUESTION_BANK = {", f"const QUESTION_BANK = {{\n{css_data}")

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("CSS questions added successfully.")

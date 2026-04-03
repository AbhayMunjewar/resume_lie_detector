import json

new_data = [
{
  "skill": "Scikit-learn",
  "questions": [

    {
      "id": 1,
      "question": "What is Scikit-learn?",
      "level": "easy",
      "topic": "Basics",
      "keywords": ["python", "machine learning", "library"],
      "points": 1
    },
    {
      "id": 2,
      "question": "What types of ML tasks does Scikit-learn support?",
      "level": "easy",
      "topic": "Basics",
      "keywords": ["classification", "regression", "clustering"],
      "points": 1
    },
    {
      "id": 3,
      "question": "What is a dataset in Scikit-learn?",
      "level": "easy",
      "topic": "Data",
      "keywords": ["features", "labels"],
      "points": 1
    },
    {
      "id": 4,
      "question": "What is train_test_split?",
      "level": "easy",
      "topic": "Data",
      "keywords": ["split", "train", "test"],
      "points": 1
    },
    {
      "id": 5,
      "question": "What is a model in Scikit-learn?",
      "level": "easy",
      "topic": "Model",
      "keywords": ["model", "fit"],
      "points": 1
    },
    {
      "id": 6,
      "question": "What is fit() and predict()?",
      "level": "medium",
      "topic": "Model",
      "keywords": ["fit", "predict"],
      "points": 2
    },
    {
      "id": 7,
      "question": "What is classification?",
      "level": "easy",
      "topic": "Algorithms",
      "keywords": ["classification"],
      "points": 1
    },
    {
      "id": 8,
      "question": "What is regression?",
      "level": "easy",
      "topic": "Algorithms",
      "keywords": ["regression"],
      "points": 1
    },
    {
      "id": 9,
      "question": "What is clustering?",
      "level": "easy",
      "topic": "Algorithms",
      "keywords": ["clustering"],
      "points": 1
    },
    {
      "id": 10,
      "question": "What is KNN algorithm?",
      "level": "medium",
      "topic": "Algorithms",
      "keywords": ["knn"],
      "points": 2
    },
    {
      "id": 11,
      "question": "What is decision tree?",
      "level": "medium",
      "topic": "Algorithms",
      "keywords": ["tree"],
      "points": 2
    },
    {
      "id": 12,
      "question": "What is random forest?",
      "level": "medium",
      "topic": "Algorithms",
      "keywords": ["forest"],
      "points": 2
    },
    {
      "id": 13,
      "question": "What is overfitting in ML?",
      "level": "medium",
      "topic": "Evaluation",
      "keywords": ["overfit"],
      "points": 2
    },
    {
      "id": 14,
      "question": "What is cross-validation?",
      "level": "medium",
      "topic": "Evaluation",
      "keywords": ["cross validation"],
      "points": 2
    },
    {
      "id": 15,
      "question": "What is accuracy, precision, recall?",
      "level": "medium",
      "topic": "Evaluation",
      "keywords": ["accuracy", "precision", "recall"],
      "points": 2
    },
    {
      "id": 16,
      "question": "What is confusion matrix?",
      "level": "hard",
      "topic": "Evaluation",
      "keywords": ["confusion matrix"],
      "points": 3
    },
    {
      "id": 17,
      "question": "What is pipeline in Scikit-learn?",
      "level": "hard",
      "topic": "Pipeline",
      "keywords": ["pipeline"],
      "points": 3
    },
    {
      "id": 18,
      "question": "How do you optimize ML models in Scikit-learn?",
      "level": "hard",
      "topic": "Optimization",
      "keywords": ["optimize", "grid search"],
      "points": 3
    }

  ]
},
{
  "skill": "Git",
  "questions": [

    {
      "id": 1,
      "question": "What is Git?",
      "level": "easy",
      "topic": "Basics",
      "keywords": ["version control", "source code"],
      "points": 1
    },
    {
      "id": 2,
      "question": "What is version control?",
      "level": "easy",
      "topic": "Basics",
      "keywords": ["track changes"],
      "points": 1
    },
    {
      "id": 3,
      "question": "What is a repository?",
      "level": "easy",
      "topic": "Basics",
      "keywords": ["repo"],
      "points": 1
    },
    {
      "id": 4,
      "question": "What is the difference between Git and GitHub?",
      "level": "medium",
      "topic": "Basics",
      "keywords": ["github", "git"],
      "points": 2
    },
    {
      "id": 5,
      "question": "What is a commit in Git?",
      "level": "easy",
      "topic": "Commits",
      "keywords": ["commit"],
      "points": 1
    },
    {
      "id": 6,
      "question": "What is staging area?",
      "level": "medium",
      "topic": "Commits",
      "keywords": ["staging"],
      "points": 2
    },
    {
      "id": 7,
      "question": "What is git add and git commit?",
      "level": "easy",
      "topic": "Commands",
      "keywords": ["add", "commit"],
      "points": 1
    },
    {
      "id": 8,
      "question": "What is git push and git pull?",
      "level": "easy",
      "topic": "Commands",
      "keywords": ["push", "pull"],
      "points": 1
    },
    {
      "id": 9,
      "question": "What is a branch in Git?",
      "level": "medium",
      "topic": "Branching",
      "keywords": ["branch"],
      "points": 2
    },
    {
      "id": 10,
      "question": "What is git merge?",
      "level": "medium",
      "topic": "Branching",
      "keywords": ["merge"],
      "points": 2
    },
    {
      "id": 11,
      "question": "What is merge conflict?",
      "level": "medium",
      "topic": "Branching",
      "keywords": ["conflict"],
      "points": 2
    },
    {
      "id": 12,
      "question": "What is git clone?",
      "level": "easy",
      "topic": "Commands",
      "keywords": ["clone"],
      "points": 1
    },
    {
      "id": 13,
      "question": "What is git status?",
      "level": "easy",
      "topic": "Commands",
      "keywords": ["status"],
      "points": 1
    },
    {
      "id": 14,
      "question": "What is git log?",
      "level": "medium",
      "topic": "Commands",
      "keywords": ["log"],
      "points": 2
    },
    {
      "id": 15,
      "question": "What is git stash?",
      "level": "hard",
      "topic": "Advanced",
      "keywords": ["stash"],
      "points": 3
    },
    {
      "id": 16,
      "question": "What is rebase in Git?",
      "level": "hard",
      "topic": "Advanced",
      "keywords": ["rebase"],
      "points": 3
    },
    {
      "id": 17,
      "question": "What is difference between merge and rebase?",
      "level": "hard",
      "topic": "Advanced",
      "keywords": ["merge", "rebase"],
      "points": 3
    },
    {
      "id": 18,
      "question": "How do you resolve merge conflicts?",
      "level": "hard",
      "topic": "Advanced",
      "keywords": ["conflict", "resolve"],
      "points": 3
    }

  ]
},
{
  "skill": "JupyterNotebook",
  "questions": [

    {
      "id": 1,
      "question": "What is Jupyter Notebook?",
      "level": "easy",
      "topic": "Basics",
      "keywords": ["interactive", "notebook", "python"],
      "points": 1
    },
    {
      "id": 2,
      "question": "What are cells in Jupyter Notebook?",
      "level": "easy",
      "topic": "Basics",
      "keywords": ["cell", "code", "markdown"],
      "points": 1
    },
    {
      "id": 3,
      "question": "What is difference between code cell and markdown cell?",
      "level": "easy",
      "topic": "Basics",
      "keywords": ["code", "markdown"],
      "points": 1
    },
    {
      "id": 4,
      "question": "How do you run a cell in Jupyter?",
      "level": "easy",
      "topic": "Execution",
      "keywords": ["run", "cell"],
      "points": 1
    },
    {
      "id": 5,
      "question": "What is kernel in Jupyter Notebook?",
      "level": "medium",
      "topic": "Core Concepts",
      "keywords": ["kernel"],
      "points": 2
    },
    {
      "id": 6,
      "question": "What is kernel restart?",
      "level": "medium",
      "topic": "Core Concepts",
      "keywords": ["restart"],
      "points": 2
    },
    {
      "id": 7,
      "question": "How do you install packages in Jupyter Notebook?",
      "level": "easy",
      "topic": "Environment",
      "keywords": ["pip", "install"],
      "points": 1
    },
    {
      "id": 8,
      "question": "What is magic command in Jupyter?",
      "level": "medium",
      "topic": "Features",
      "keywords": ["magic"],
      "points": 2
    },
    {
      "id": 9,
      "question": "What is %matplotlib inline?",
      "level": "medium",
      "topic": "Visualization",
      "keywords": ["matplotlib"],
      "points": 2
    },
    {
      "id": 10,
      "question": "How do you display graphs in Jupyter?",
      "level": "easy",
      "topic": "Visualization",
      "keywords": ["plot"],
      "points": 1
    },
    {
      "id": 11,
      "question": "What is notebook checkpoint?",
      "level": "easy",
      "topic": "Storage",
      "keywords": ["checkpoint"],
      "points": 1
    },
    {
      "id": 12,
      "question": "What is difference between Jupyter Notebook and JupyterLab?",
      "level": "medium",
      "topic": "Comparison",
      "keywords": ["lab", "notebook"],
      "points": 2
    },
    {
      "id": 13,
      "question": "What is interactive visualization?",
      "level": "medium",
      "topic": "Visualization",
      "keywords": ["interactive"],
      "points": 2
    },
    {
      "id": 14,
      "question": "How do you share Jupyter notebooks?",
      "level": "easy",
      "topic": "Sharing",
      "keywords": ["share"],
      "points": 1
    },
    {
      "id": 15,
      "question": "What is notebook export?",
      "level": "easy",
      "topic": "Sharing",
      "keywords": ["export"],
      "points": 1
    },
    {
      "id": 16,
      "question": "How do you debug code in Jupyter?",
      "level": "hard",
      "topic": "Debugging",
      "keywords": ["debug"],
      "points": 3
    },
    {
      "id": 17,
      "question": "What are limitations of Jupyter Notebook?",
      "level": "hard",
      "topic": "Advanced",
      "keywords": ["limitations"],
      "points": 3
    },
    {
      "id": 18,
      "question": "How do you optimize workflow in Jupyter?",
      "level": "hard",
      "topic": "Productivity",
      "keywords": ["workflow"],
      "points": 3
    }

  ]
}
]

with open('data/questions.json', 'r', encoding='utf-8') as f:
    existing_data = json.load(f)

existing_data.extend(new_data)

with open('data/questions.json', 'w', encoding='utf-8') as f:
    json.dump(existing_data, f, indent=4)
    
print("Successfully appended new skills to data/questions.json!")

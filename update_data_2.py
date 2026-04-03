import json

new_data = [
{
  "skill": "Bootstrap",
  "questions": [

    {
      "id": 1,
      "question": "What is Bootstrap?",
      "level": "easy",
      "topic": "Basics",
      "keywords": ["css framework", "responsive"],
      "points": 1
    },
    {
      "id": 2,
      "question": "What is Bootstrap grid system?",
      "level": "easy",
      "topic": "Layout",
      "keywords": ["grid", "12 columns"],
      "points": 1
    },
    {
      "id": 3,
      "question": "What are Bootstrap breakpoints?",
      "level": "medium",
      "topic": "Responsive",
      "keywords": ["screen", "responsive"],
      "points": 2
    },
    {
      "id": 4,
      "question": "What is container class in Bootstrap?",
      "level": "easy",
      "topic": "Layout",
      "keywords": ["container", "layout"],
      "points": 1
    },
    {
      "id": 5,
      "question": "Difference between container and container-fluid?",
      "level": "medium",
      "topic": "Layout",
      "keywords": ["fixed", "full width"],
      "points": 2
    },
    {
      "id": 6,
      "question": "What are Bootstrap components?",
      "level": "easy",
      "topic": "Components",
      "keywords": ["navbar", "button", "card"],
      "points": 1
    },
    {
      "id": 7,
      "question": "What is navbar in Bootstrap?",
      "level": "easy",
      "topic": "Components",
      "keywords": ["navigation", "menu"],
      "points": 1
    },
    {
      "id": 8,
      "question": "What is card component?",
      "level": "easy",
      "topic": "Components",
      "keywords": ["card", "ui"],
      "points": 1
    },
    {
      "id": 9,
      "question": "What is utility class in Bootstrap?",
      "level": "medium",
      "topic": "Utilities",
      "keywords": ["margin", "padding"],
      "points": 2
    },
    {
      "id": 10,
      "question": "What is spacing utility in Bootstrap?",
      "level": "medium",
      "topic": "Utilities",
      "keywords": ["m-", "p-"],
      "points": 2
    },
    {
      "id": 11,
      "question": "How do you make a responsive layout using Bootstrap?",
      "level": "medium",
      "topic": "Responsive",
      "keywords": ["grid", "responsive"],
      "points": 2
    },
    {
      "id": 12,
      "question": "What is flex utility in Bootstrap?",
      "level": "medium",
      "topic": "Flexbox",
      "keywords": ["flex", "align"],
      "points": 2
    },
    {
      "id": 13,
      "question": "What is Bootstrap modal?",
      "level": "medium",
      "topic": "Components",
      "keywords": ["popup", "modal"],
      "points": 2
    },
    {
      "id": 14,
      "question": "What is Bootstrap carousel?",
      "level": "easy",
      "topic": "Components",
      "keywords": ["slider", "carousel"],
      "points": 1
    },
    {
      "id": 15,
      "question": "What is difference between Bootstrap 4 and 5?",
      "level": "hard",
      "topic": "Advanced",
      "keywords": ["bootstrap 4", "bootstrap 5"],
      "points": 3
    },
    {
      "id": 16,
      "question": "What is Bootstrap responsive utility classes?",
      "level": "medium",
      "topic": "Responsive",
      "keywords": ["responsive", "display"],
      "points": 2
    },
    {
      "id": 17,
      "question": "How does Bootstrap handle mobile-first design?",
      "level": "hard",
      "topic": "Responsive",
      "keywords": ["mobile first"],
      "points": 3
    },
    {
      "id": 18,
      "question": "How do you customize Bootstrap?",
      "level": "hard",
      "topic": "Advanced",
      "keywords": ["customize", "css"],
      "points": 3
    }

  ]
},
{
  "skill": "Flask",
  "questions": [

    {
      "id": 1,
      "question": "What is Flask?",
      "level": "easy",
      "topic": "Basics",
      "keywords": ["python", "web framework", "lightweight"],
      "points": 1
    },
    {
      "id": 2,
      "question": "What is routing in Flask?",
      "level": "easy",
      "topic": "Routing",
      "keywords": ["route", "url", "endpoint"],
      "points": 1
    },
    {
      "id": 3,
      "question": "What is Flask app object?",
      "level": "easy",
      "topic": "Basics",
      "keywords": ["app", "instance"],
      "points": 1
    },
    {
      "id": 4,
      "question": "What is request and response in Flask?",
      "level": "medium",
      "topic": "Request/Response",
      "keywords": ["request", "response"],
      "points": 2
    },
    {
      "id": 5,
      "question": "What is Jinja2 template engine?",
      "level": "medium",
      "topic": "Templates",
      "keywords": ["jinja", "template", "render"],
      "points": 2
    },
    {
      "id": 6,
      "question": "How do you handle forms in Flask?",
      "level": "medium",
      "topic": "Forms",
      "keywords": ["form", "post", "get"],
      "points": 2
    },
    {
      "id": 7,
      "question": "How do you connect Flask with database?",
      "level": "medium",
      "topic": "Database",
      "keywords": ["sqlalchemy", "database"],
      "points": 2
    },
    {
      "id": 8,
      "question": "What is Flask SQLAlchemy?",
      "level": "medium",
      "topic": "Database",
      "keywords": ["orm", "sqlalchemy"],
      "points": 2
    },
    {
      "id": 9,
      "question": "What is session in Flask?",
      "level": "medium",
      "topic": "Session",
      "keywords": ["session", "user"],
      "points": 2
    },
    {
      "id": 10,
      "question": "What is difference between GET and POST in Flask?",
      "level": "easy",
      "topic": "HTTP",
      "keywords": ["get", "post"],
      "points": 1
    },
    {
      "id": 11,
      "question": "How do you create REST API using Flask?",
      "level": "medium",
      "topic": "API",
      "keywords": ["api", "json"],
      "points": 2
    },
    {
      "id": 12,
      "question": "What is Flask Blueprint?",
      "level": "hard",
      "topic": "Architecture",
      "keywords": ["blueprint", "modular"],
      "points": 3
    },
    {
      "id": 13,
      "question": "What is middleware concept in Flask?",
      "level": "hard",
      "topic": "Middleware",
      "keywords": ["middleware", "request"],
      "points": 3
    },
    {
      "id": 14,
      "question": "How do you handle authentication in Flask?",
      "level": "hard",
      "topic": "Authentication",
      "keywords": ["login", "auth", "jwt"],
      "points": 3
    },
    {
      "id": 15,
      "question": "What is Flask RESTful?",
      "level": "medium",
      "topic": "API",
      "keywords": ["restful", "api"],
      "points": 2
    },
    {
      "id": 16,
      "question": "How do you deploy a Flask application?",
      "level": "hard",
      "topic": "Deployment",
      "keywords": ["deploy", "server", "gunicorn"],
      "points": 3
    },
    {
      "id": 17,
      "question": "What is difference between Flask and Django?",
      "level": "medium",
      "topic": "Comparison",
      "keywords": ["lightweight", "full stack"],
      "points": 2
    },
    {
      "id": 18,
      "question": "How do you optimize Flask performance?",
      "level": "hard",
      "topic": "Optimization",
      "keywords": ["cache", "optimize"],
      "points": 3
    }

  ]
},
{
  "skill": "OpenCV",
  "questions": [

    {
      "id": 1,
      "question": "What is OpenCV?",
      "level": "easy",
      "topic": "Basics",
      "keywords": ["computer vision", "image processing", "library"],
      "points": 1
    },
    {
      "id": 2,
      "question": "What is an image in OpenCV?",
      "level": "easy",
      "topic": "Basics",
      "keywords": ["matrix", "pixels"],
      "points": 1
    },
    {
      "id": 3,
      "question": "What is BGR format?",
      "level": "easy",
      "topic": "Color",
      "keywords": ["blue", "green", "red"],
      "points": 1
    },
    {
      "id": 4,
      "question": "What is grayscale image?",
      "level": "easy",
      "topic": "Color",
      "keywords": ["gray", "single channel"],
      "points": 1
    },
    {
      "id": 5,
      "question": "What is image thresholding?",
      "level": "medium",
      "topic": "Processing",
      "keywords": ["threshold", "binary"],
      "points": 2
    },
    {
      "id": 6,
      "question": "What is edge detection?",
      "level": "medium",
      "topic": "Processing",
      "keywords": ["edge", "detect"],
      "points": 2
    },
    {
      "id": 7,
      "question": "What is Canny edge detection?",
      "level": "medium",
      "topic": "Processing",
      "keywords": ["canny", "edge"],
      "points": 2
    },
    {
      "id": 8,
      "question": "What is contour detection?",
      "level": "medium",
      "topic": "Processing",
      "keywords": ["contour", "shape"],
      "points": 2
    },
    {
      "id": 9,
      "question": "What is image resizing?",
      "level": "easy",
      "topic": "Processing",
      "keywords": ["resize", "scale"],
      "points": 1
    },
    {
      "id": 10,
      "question": "What is image cropping?",
      "level": "easy",
      "topic": "Processing",
      "keywords": ["crop", "region"],
      "points": 1
    },
    {
      "id": 11,
      "question": "What is blurring in OpenCV?",
      "level": "medium",
      "topic": "Filtering",
      "keywords": ["blur", "smooth"],
      "points": 2
    },
    {
      "id": 12,
      "question": "What is Gaussian blur?",
      "level": "medium",
      "topic": "Filtering",
      "keywords": ["gaussian", "blur"],
      "points": 2
    },
    {
      "id": 13,
      "question": "What is histogram in image processing?",
      "level": "hard",
      "topic": "Analysis",
      "keywords": ["histogram", "intensity"],
      "points": 3
    },
    {
      "id": 14,
      "question": "What is object detection?",
      "level": "medium",
      "topic": "Advanced",
      "keywords": ["detect", "object"],
      "points": 2
    },
    {
      "id": 15,
      "question": "What is face detection in OpenCV?",
      "level": "medium",
      "topic": "Advanced",
      "keywords": ["face", "detect"],
      "points": 2
    },
    {
      "id": 16,
      "question": "What is Haar Cascade?",
      "level": "hard",
      "topic": "Advanced",
      "keywords": ["haar", "cascade"],
      "points": 3
    },
    {
      "id": 17,
      "question": "What is video capture in OpenCV?",
      "level": "medium",
      "topic": "Video",
      "keywords": ["video", "camera"],
      "points": 2
    },
    {
      "id": 18,
      "question": "How do you optimize OpenCV performance?",
      "level": "hard",
      "topic": "Optimization",
      "keywords": ["optimize", "performance"],
      "points": 3
    }

  ]
},
{
  "skill": "TensorFlow",
  "questions": [

    {
      "id": 1,
      "question": "What is TensorFlow?",
      "level": "easy",
      "topic": "Basics",
      "keywords": ["machine learning", "library", "google"],
      "points": 1
    },
    {
      "id": 2,
      "question": "What is a tensor?",
      "level": "easy",
      "topic": "Basics",
      "keywords": ["array", "matrix", "multi dimensional"],
      "points": 1
    },
    {
      "id": 3,
      "question": "What is a model in TensorFlow?",
      "level": "easy",
      "topic": "Model",
      "keywords": ["model", "train"],
      "points": 1
    },
    {
      "id": 4,
      "question": "What is training in machine learning?",
      "level": "medium",
      "topic": "Model",
      "keywords": ["train", "data"],
      "points": 2
    },
    {
      "id": 5,
      "question": "What is overfitting?",
      "level": "medium",
      "topic": "Model",
      "keywords": ["overfit", "generalization"],
      "points": 2
    },
    {
      "id": 6,
      "question": "What is underfitting?",
      "level": "medium",
      "topic": "Model",
      "keywords": ["underfit"],
      "points": 2
    },
    {
      "id": 7,
      "question": "What is loss function?",
      "level": "medium",
      "topic": "Training",
      "keywords": ["loss", "error"],
      "points": 2
    },
    {
      "id": 8,
      "question": "What is optimizer in TensorFlow?",
      "level": "medium",
      "topic": "Training",
      "keywords": ["optimize", "gradient"],
      "points": 2
    },
    {
      "id": 9,
      "question": "What is gradient descent?",
      "level": "hard",
      "topic": "Training",
      "keywords": ["gradient", "descent"],
      "points": 3
    },
    {
      "id": 10,
      "question": "What is neural network?",
      "level": "easy",
      "topic": "Neural Network",
      "keywords": ["neuron", "layer"],
      "points": 1
    },
    {
      "id": 11,
      "question": "What is activation function?",
      "level": "medium",
      "topic": "Neural Network",
      "keywords": ["activation", "relu", "sigmoid"],
      "points": 2
    },
    {
      "id": 12,
      "question": "What is ReLU function?",
      "level": "medium",
      "topic": "Neural Network",
      "keywords": ["relu"],
      "points": 2
    },
    {
      "id": 13,
      "question": "What is CNN in TensorFlow?",
      "level": "medium",
      "topic": "Deep Learning",
      "keywords": ["cnn", "image"],
      "points": 2
    },
    {
      "id": 14,
      "question": "What is backpropagation?",
      "level": "hard",
      "topic": "Deep Learning",
      "keywords": ["backpropagation"],
      "points": 3
    },
    {
      "id": 15,
      "question": "What is dataset in TensorFlow?",
      "level": "easy",
      "topic": "Data",
      "keywords": ["data", "dataset"],
      "points": 1
    },
    {
      "id": 16,
      "question": "What is TensorFlow Keras?",
      "level": "medium",
      "topic": "Framework",
      "keywords": ["keras", "api"],
      "points": 2
    },
    {
      "id": 17,
      "question": "How do you evaluate a model?",
      "level": "medium",
      "topic": "Evaluation",
      "keywords": ["accuracy", "test"],
      "points": 2
    },
    {
      "id": 18,
      "question": "How do you deploy a TensorFlow model?",
      "level": "hard",
      "topic": "Deployment",
      "keywords": ["deploy", "api", "model"],
      "points": 3
    }

  ]
},
{
  "skill": "NLP",
  "questions": [

    {
      "id": 1,
      "question": "What is NLP?",
      "level": "easy",
      "topic": "Basics",
      "keywords": ["text", "language", "processing"],
      "points": 1
    },
    {
      "id": 2,
      "question": "What is tokenization?",
      "level": "easy",
      "topic": "Preprocessing",
      "keywords": ["token", "words"],
      "points": 1
    },
    {
      "id": 3,
      "question": "What is stop word removal?",
      "level": "easy",
      "topic": "Preprocessing",
      "keywords": ["stop words", "remove"],
      "points": 1
    },
    {
      "id": 4,
      "question": "What is stemming?",
      "level": "medium",
      "topic": "Preprocessing",
      "keywords": ["root", "word"],
      "points": 2
    },
    {
      "id": 5,
      "question": "What is lemmatization?",
      "level": "medium",
      "topic": "Preprocessing",
      "keywords": ["lemma", "base"],
      "points": 2
    },
    {
      "id": 6,
      "question": "Difference between stemming and lemmatization?",
      "level": "medium",
      "topic": "Preprocessing",
      "keywords": ["difference", "stemming", "lemmatization"],
      "points": 2
    },
    {
      "id": 7,
      "question": "What is Bag of Words?",
      "level": "medium",
      "topic": "Feature Extraction",
      "keywords": ["bag", "words"],
      "points": 2
    },
    {
      "id": 8,
      "question": "What is TF-IDF?",
      "level": "medium",
      "topic": "Feature Extraction",
      "keywords": ["tfidf", "frequency"],
      "points": 2
    },
    {
      "id": 9,
      "question": "What is n-gram?",
      "level": "medium",
      "topic": "Feature Extraction",
      "keywords": ["n-gram"],
      "points": 2
    },
    {
      "id": 10,
      "question": "What is word embedding?",
      "level": "hard",
      "topic": "Advanced",
      "keywords": ["embedding", "vector"],
      "points": 3
    },
    {
      "id": 11,
      "question": "What is Word2Vec?",
      "level": "hard",
      "topic": "Advanced",
      "keywords": ["word2vec"],
      "points": 3
    },
    {
      "id": 12,
      "question": "What is sentiment analysis?",
      "level": "easy",
      "topic": "Applications",
      "keywords": ["sentiment", "positive", "negative"],
      "points": 1
    },
    {
      "id": 13,
      "question": "What is named entity recognition (NER)?",
      "level": "medium",
      "topic": "Applications",
      "keywords": ["entity", "ner"],
      "points": 2
    },
    {
      "id": 14,
      "question": "What is part-of-speech tagging?",
      "level": "medium",
      "topic": "Applications",
      "keywords": ["pos", "tagging"],
      "points": 2
    },
    {
      "id": 15,
      "question": "What is sequence-to-sequence model?",
      "level": "hard",
      "topic": "Models",
      "keywords": ["sequence", "model"],
      "points": 3
    },
    {
      "id": 16,
      "question": "What is transformer model?",
      "level": "hard",
      "topic": "Models",
      "keywords": ["transformer", "attention"],
      "points": 3
    },
    {
      "id": 17,
      "question": "What is attention mechanism?",
      "level": "hard",
      "topic": "Models",
      "keywords": ["attention"],
      "points": 3
    },
    {
      "id": 18,
      "question": "How do you deploy NLP models?",
      "level": "hard",
      "topic": "Deployment",
      "keywords": ["deploy", "api", "model"],
      "points": 3
    }

  ]
},
{
  "skill": "Dart",
  "questions": [

    {
      "id": 1,
      "question": "What is Dart?",
      "level": "easy",
      "topic": "Basics",
      "keywords": ["programming language", "flutter"],
      "points": 1
    },
    {
      "id": 2,
      "question": "What are features of Dart?",
      "level": "easy",
      "topic": "Basics",
      "keywords": ["oop", "async"],
      "points": 1
    },
    {
      "id": 3,
      "question": "What are data types in Dart?",
      "level": "easy",
      "topic": "Basics",
      "keywords": ["int", "double", "string", "list"],
      "points": 1
    },
    {
      "id": 4,
      "question": "What is a function in Dart?",
      "level": "easy",
      "topic": "Functions",
      "keywords": ["function", "method"],
      "points": 1
    },
    {
      "id": 5,
      "question": "What is a class in Dart?",
      "level": "easy",
      "topic": "OOP",
      "keywords": ["class", "object"],
      "points": 1
    },
    {
      "id": 6,
      "question": "What is inheritance in Dart?",
      "level": "medium",
      "topic": "OOP",
      "keywords": ["inherit", "parent", "child"],
      "points": 2
    },
    {
      "id": 7,
      "question": "What is encapsulation?",
      "level": "medium",
      "topic": "OOP",
      "keywords": ["data hiding"],
      "points": 2
    },
    {
      "id": 8,
      "question": "What is polymorphism?",
      "level": "medium",
      "topic": "OOP",
      "keywords": ["multiple forms"],
      "points": 2
    },
    {
      "id": 9,
      "question": "What is async and await in Dart?",
      "level": "medium",
      "topic": "Async",
      "keywords": ["async", "await"],
      "points": 2
    },
    {
      "id": 10,
      "question": "What is Future in Dart?",
      "level": "medium",
      "topic": "Async",
      "keywords": ["future"],
      "points": 2
    },
    {
      "id": 11,
      "question": "What is Stream in Dart?",
      "level": "hard",
      "topic": "Async",
      "keywords": ["stream"],
      "points": 3
    },
    {
      "id": 12,
      "question": "Difference between Future and Stream?",
      "level": "hard",
      "topic": "Async",
      "keywords": ["future", "stream"],
      "points": 3
    },
    {
      "id": 13,
      "question": "What is null safety in Dart?",
      "level": "medium",
      "topic": "Advanced",
      "keywords": ["null safety"],
      "points": 2
    },
    {
      "id": 14,
      "question": "What is mixin in Dart?",
      "level": "hard",
      "topic": "Advanced",
      "keywords": ["mixin"],
      "points": 3
    },
    {
      "id": 15,
      "question": "What is collection in Dart?",
      "level": "easy",
      "topic": "Collections",
      "keywords": ["list", "set", "map"],
      "points": 1
    },
    {
      "id": 16,
      "question": "What is map in Dart?",
      "level": "easy",
      "topic": "Collections",
      "keywords": ["key", "value"],
      "points": 1
    },
    {
      "id": 17,
      "question": "What is exception handling in Dart?",
      "level": "medium",
      "topic": "Error Handling",
      "keywords": ["try", "catch"],
      "points": 2
    },
    {
      "id": 18,
      "question": "How do you optimize Dart code performance?",
      "level": "hard",
      "topic": "Optimization",
      "keywords": ["optimize", "performance"],
      "points": 3
    }

  ]
},
{
  "skill": "Pandas",
  "questions": [

    {
      "id": 1,
      "question": "What is Pandas?",
      "level": "easy",
      "topic": "Basics",
      "keywords": ["python", "data analysis", "library"],
      "points": 1
    },
    {
      "id": 2,
      "question": "What is Series in Pandas?",
      "level": "easy",
      "topic": "Data Structures",
      "keywords": ["series", "1d"],
      "points": 1
    },
    {
      "id": 3,
      "question": "What is DataFrame?",
      "level": "easy",
      "topic": "Data Structures",
      "keywords": ["dataframe", "table"],
      "points": 1
    },
    {
      "id": 4,
      "question": "How do you read a CSV file in Pandas?",
      "level": "easy",
      "topic": "IO",
      "keywords": ["read_csv"],
      "points": 1
    },
    {
      "id": 5,
      "question": "How do you select columns in Pandas?",
      "level": "easy",
      "topic": "Selection",
      "keywords": ["select", "columns"],
      "points": 1
    },
    {
      "id": 6,
      "question": "What is iloc and loc?",
      "level": "medium",
      "topic": "Selection",
      "keywords": ["iloc", "loc"],
      "points": 2
    },
    {
      "id": 7,
      "question": "How do you handle missing values?",
      "level": "medium",
      "topic": "Data Cleaning",
      "keywords": ["fillna", "dropna"],
      "points": 2
    },
    {
      "id": 8,
      "question": "What is groupby in Pandas?",
      "level": "medium",
      "topic": "Aggregation",
      "keywords": ["groupby"],
      "points": 2
    },
    {
      "id": 9,
      "question": "What is merge in Pandas?",
      "level": "medium",
      "topic": "Data Manipulation",
      "keywords": ["merge", "join"],
      "points": 2
    },
    {
      "id": 10,
      "question": "What is pivot table?",
      "level": "medium",
      "topic": "Aggregation",
      "keywords": ["pivot"],
      "points": 2
    },
    {
      "id": 11,
      "question": "What is apply function in Pandas?",
      "level": "medium",
      "topic": "Functions",
      "keywords": ["apply"],
      "points": 2
    },
    {
      "id": 12,
      "question": "Difference between map and apply?",
      "level": "hard",
      "topic": "Functions",
      "keywords": ["map", "apply"],
      "points": 3
    },
    {
      "id": 13,
      "question": "What is sorting in Pandas?",
      "level": "easy",
      "topic": "Operations",
      "keywords": ["sort"],
      "points": 1
    },
    {
      "id": 14,
      "question": "What is filtering in Pandas?",
      "level": "easy",
      "topic": "Operations",
      "keywords": ["filter"],
      "points": 1
    },
    {
      "id": 15,
      "question": "What is indexing in Pandas?",
      "level": "medium",
      "topic": "Indexing",
      "keywords": ["index"],
      "points": 2
    },
    {
      "id": 16,
      "question": "What is multi-indexing?",
      "level": "hard",
      "topic": "Indexing",
      "keywords": ["multiindex"],
      "points": 3
    },
    {
      "id": 17,
      "question": "How do you optimize Pandas performance?",
      "level": "hard",
      "topic": "Optimization",
      "keywords": ["optimize", "performance"],
      "points": 3
    },
    {
      "id": 18,
      "question": "What is vectorization in Pandas?",
      "level": "hard",
      "topic": "Optimization",
      "keywords": ["vectorization"],
      "points": 3
    }

  ]
},
{
  "skill": "NumPy",
  "questions": [

    {
      "id": 1,
      "question": "What is NumPy?",
      "level": "easy",
      "topic": "Basics",
      "keywords": ["python", "numerical", "library"],
      "points": 1
    },
    {
      "id": 2,
      "question": "What is ndarray in NumPy?",
      "level": "easy",
      "topic": "Array",
      "keywords": ["array", "ndarray"],
      "points": 1
    },
    {
      "id": 3,
      "question": "Difference between list and NumPy array?",
      "level": "medium",
      "topic": "Array",
      "keywords": ["list", "array"],
      "points": 2
    },
    {
      "id": 4,
      "question": "How do you create an array in NumPy?",
      "level": "easy",
      "topic": "Array",
      "keywords": ["array", "np.array"],
      "points": 1
    },
    {
      "id": 5,
      "question": "What is shape of an array?",
      "level": "easy",
      "topic": "Array",
      "keywords": ["shape", "dimension"],
      "points": 1
    },
    {
      "id": 6,
      "question": "What is indexing in NumPy?",
      "level": "medium",
      "topic": "Indexing",
      "keywords": ["index", "access"],
      "points": 2
    },
    {
      "id": 7,
      "question": "What is slicing in NumPy?",
      "level": "medium",
      "topic": "Indexing",
      "keywords": ["slice"],
      "points": 2
    },
    {
      "id": 8,
      "question": "What is broadcasting in NumPy?",
      "level": "medium",
      "topic": "Operations",
      "keywords": ["broadcast"],
      "points": 2
    },
    {
      "id": 9,
      "question": "What is vectorization?",
      "level": "medium",
      "topic": "Operations",
      "keywords": ["vectorization"],
      "points": 2
    },
    {
      "id": 10,
      "question": "What are NumPy data types?",
      "level": "easy",
      "topic": "Data Types",
      "keywords": ["int", "float"],
      "points": 1
    },
    {
      "id": 11,
      "question": "What is reshape in NumPy?",
      "level": "medium",
      "topic": "Array",
      "keywords": ["reshape"],
      "points": 2
    },
    {
      "id": 12,
      "question": "What is flatten in NumPy?",
      "level": "medium",
      "topic": "Array",
      "keywords": ["flatten"],
      "points": 2
    },
    {
      "id": 13,
      "question": "What is random module in NumPy?",
      "level": "easy",
      "topic": "Random",
      "keywords": ["random"],
      "points": 1
    },
    {
      "id": 14,
      "question": "What is mean and standard deviation?",
      "level": "easy",
      "topic": "Statistics",
      "keywords": ["mean", "std"],
      "points": 1
    },
    {
      "id": 15,
      "question": "What is dot product?",
      "level": "medium",
      "topic": "Math",
      "keywords": ["dot"],
      "points": 2
    },
    {
      "id": 16,
      "question": "What is matrix multiplication in NumPy?",
      "level": "medium",
      "topic": "Math",
      "keywords": ["matrix", "multiply"],
      "points": 2
    },
    {
      "id": 17,
      "question": "How do you optimize NumPy performance?",
      "level": "hard",
      "topic": "Optimization",
      "keywords": ["optimize"],
      "points": 3
    },
    {
      "id": 18,
      "question": "What is difference between view and copy?",
      "level": "hard",
      "topic": "Memory",
      "keywords": ["view", "copy"],
      "points": 3
    }

  ]
},
{
  "skill": "Matplotlib",
  "questions": [

    {
      "id": 1,
      "question": "What is Matplotlib?",
      "level": "easy",
      "topic": "Basics",
      "keywords": ["python", "plotting", "visualization"],
      "points": 1
    },
    {
      "id": 2,
      "question": "What is pyplot in Matplotlib?",
      "level": "easy",
      "topic": "Basics",
      "keywords": ["pyplot", "plot"],
      "points": 1
    },
    {
      "id": 3,
      "question": "How do you create a simple line plot?",
      "level": "easy",
      "topic": "Plotting",
      "keywords": ["plot", "line"],
      "points": 1
    },
    {
      "id": 4,
      "question": "What is a bar chart?",
      "level": "easy",
      "topic": "Plotting",
      "keywords": ["bar"],
      "points": 1
    },
    {
      "id": 5,
      "question": "What is a histogram?",
      "level": "medium",
      "topic": "Plotting",
      "keywords": ["histogram"],
      "points": 2
    },
    {
      "id": 6,
      "question": "What is a scatter plot?",
      "level": "easy",
      "topic": "Plotting",
      "keywords": ["scatter"],
      "points": 1
    },
    {
      "id": 7,
      "question": "How do you add labels and title to a plot?",
      "level": "easy",
      "topic": "Customization",
      "keywords": ["xlabel", "ylabel", "title"],
      "points": 1
    },
    {
      "id": 8,
      "question": "What is legend in Matplotlib?",
      "level": "easy",
      "topic": "Customization",
      "keywords": ["legend"],
      "points": 1
    },
    {
      "id": 9,
      "question": "How do you change color and style of a plot?",
      "level": "medium",
      "topic": "Customization",
      "keywords": ["color", "style"],
      "points": 2
    },
    {
      "id": 10,
      "question": "What is subplot in Matplotlib?",
      "level": "medium",
      "topic": "Advanced",
      "keywords": ["subplot"],
      "points": 2
    },
    {
      "id": 11,
      "question": "What is figure in Matplotlib?",
      "level": "medium",
      "topic": "Advanced",
      "keywords": ["figure"],
      "points": 2
    },
    {
      "id": 12,
      "question": "What is axis in Matplotlib?",
      "level": "medium",
      "topic": "Advanced",
      "keywords": ["axis"],
      "points": 2
    },
    {
      "id": 13,
      "question": "How do you save a plot?",
      "level": "easy",
      "topic": "IO",
      "keywords": ["savefig"],
      "points": 1
    },
    {
      "id": 14,
      "question": "What is tight_layout?",
      "level": "medium",
      "topic": "Advanced",
      "keywords": ["layout"],
      "points": 2
    },
    {
      "id": 15,
      "question": "Difference between plot() and scatter()?",
      "level": "medium",
      "topic": "Plotting",
      "keywords": ["plot", "scatter"],
      "points": 2
    },
    {
      "id": 16,
      "question": "How do you handle multiple plots in one figure?",
      "level": "hard",
      "topic": "Advanced",
      "keywords": ["multiple", "subplot"],
      "points": 3
    },
    {
      "id": 17,
      "question": "What is customization of axes?",
      "level": "hard",
      "topic": "Customization",
      "keywords": ["axes", "customize"],
      "points": 3
    },
    {
      "id": 18,
      "question": "How do you optimize Matplotlib performance?",
      "level": "hard",
      "topic": "Optimization",
      "keywords": ["optimize"],
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

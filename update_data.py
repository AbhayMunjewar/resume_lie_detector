import json

data = [
{
  "skill": "React",
  "questions": [
    {
      "id": 1,
      "question": "What is React?",
      "level": "easy",
      "topic": "Basics",
      "keywords": ["library", "ui", "component"],
      "points": 1
    },
    {
      "id": 2,
      "question": "What is a component in React?",
      "level": "easy",
      "topic": "Components",
      "keywords": ["reusable", "function", "ui"],
      "points": 1
    },
    {
      "id": 3,
      "question": "What is JSX?",
      "level": "easy",
      "topic": "JSX",
      "keywords": ["html", "javascript", "syntax"],
      "points": 1
    },
    {
      "id": 4,
      "question": "What is useState hook?",
      "level": "easy",
      "topic": "Hooks",
      "keywords": ["state", "update", "component"],
      "points": 1
    },
    {
      "id": 5,
      "question": "What is useEffect used for?",
      "level": "medium",
      "topic": "Hooks",
      "keywords": ["side effect", "lifecycle"],
      "points": 2
    },
    {
      "id": 6,
      "question": "Difference between props and state?",
      "level": "medium",
      "topic": "Core Concepts",
      "keywords": ["props", "state", "immutable"],
      "points": 2
    },
    {
      "id": 7,
      "question": "What is Virtual DOM?",
      "level": "medium",
      "topic": "Core Concepts",
      "keywords": ["virtual", "dom", "efficient"],
      "points": 2
    },
    {
      "id": 8,
      "question": "What are controlled components?",
      "level": "medium",
      "topic": "Forms",
      "keywords": ["form", "state", "input"],
      "points": 2
    },
    {
      "id": 9,
      "question": "What is lifting state up?",
      "level": "medium",
      "topic": "State Management",
      "keywords": ["parent", "share state"],
      "points": 2
    },
    {
      "id": 10,
      "question": "What is key prop in React?",
      "level": "medium",
      "topic": "Lists",
      "keywords": ["unique", "list", "render"],
      "points": 2
    },
    {
      "id": 11,
      "question": "How do you prevent unnecessary re-renders?",
      "level": "hard",
      "topic": "Optimization",
      "keywords": ["memo", "usememo", "optimization"],
      "points": 3
    },
    {
      "id": 12,
      "question": "What is React.memo?",
      "level": "hard",
      "topic": "Optimization",
      "keywords": ["memo", "performance"],
      "points": 3
    },
    {
      "id": 13,
      "question": "What is useCallback?",
      "level": "hard",
      "topic": "Hooks",
      "keywords": ["function memoization"],
      "points": 3
    },
    {
      "id": 14,
      "question": "What is useRef?",
      "level": "medium",
      "topic": "Hooks",
      "keywords": ["reference", "dom"],
      "points": 2
    },
    {
      "id": 15,
      "question": "What is prop drilling?",
      "level": "medium",
      "topic": "State Management",
      "keywords": ["passing props", "deep"],
      "points": 2
    },
    {
      "id": 16,
      "question": "What is Context API?",
      "level": "hard",
      "topic": "State Management",
      "keywords": ["global state", "provider"],
      "points": 3
    },
    {
      "id": 17,
      "question": "Difference between class and functional components?",
      "level": "medium",
      "topic": "Components",
      "keywords": ["class", "function", "hooks"],
      "points": 2
    },
    {
      "id": 18,
      "question": "How does React handle events?",
      "level": "easy",
      "topic": "Events",
      "keywords": ["event handling", "synthetic"],
      "points": 1
    }
  ]
},
{
  "skill": "DSA",
  "questions": [
    {
      "id": 1,
      "question": "What is time complexity?",
      "level": "easy",
      "topic": "Complexity",
      "keywords": ["time", "efficiency", "big o"],
      "points": 1
    },
    {
      "id": 2,
      "question": "What is space complexity?",
      "level": "easy",
      "topic": "Complexity",
      "keywords": ["memory", "space"],
      "points": 1
    },
    {
      "id": 3,
      "question": "What is an array?",
      "level": "easy",
      "topic": "Arrays",
      "keywords": ["collection", "elements", "index"],
      "points": 1
    },
    {
      "id": 4,
      "question": "Difference between stack and queue?",
      "level": "medium",
      "topic": "Data Structures",
      "keywords": ["lifo", "fifo"],
      "points": 2
    },
    {
      "id": 5,
      "question": "What is a linked list?",
      "level": "easy",
      "topic": "Linked List",
      "keywords": ["nodes", "pointer"],
      "points": 1
    },
    {
      "id": 6,
      "question": "Explain binary search.",
      "level": "medium",
      "topic": "Searching",
      "keywords": ["sorted", "middle", "divide"],
      "points": 2
    },
    {
      "id": 7,
      "question": "What is recursion?",
      "level": "easy",
      "topic": "Recursion",
      "keywords": ["function calls itself"],
      "points": 1
    },
    {
      "id": 8,
      "question": "Find time complexity of binary search.",
      "level": "medium",
      "topic": "Complexity",
      "keywords": ["log n"],
      "points": 2
    },
    {
      "id": 9,
      "question": "What is a tree data structure?",
      "level": "medium",
      "topic": "Trees",
      "keywords": ["nodes", "hierarchy", "root"],
      "points": 2
    },
    {
      "id": 10,
      "question": "What is a graph?",
      "level": "medium",
      "topic": "Graphs",
      "keywords": ["vertices", "edges"],
      "points": 2
    },
    {
      "id": 11,
      "question": "Explain DFS and BFS.",
      "level": "hard",
      "topic": "Graphs",
      "keywords": ["depth", "breadth", "queue", "stack"],
      "points": 3
    },
    {
      "id": 12,
      "question": "What is a heap?",
      "level": "medium",
      "topic": "Heap",
      "keywords": ["priority", "tree"],
      "points": 2
    },
    {
      "id": 13,
      "question": "Find time complexity of quicksort.",
      "level": "hard",
      "topic": "Sorting",
      "keywords": ["n log n", "worst case"],
      "points": 3
    },
    {
      "id": 14,
      "question": "What is dynamic programming?",
      "level": "hard",
      "topic": "DP",
      "keywords": ["overlapping", "subproblems", "memoization"],
      "points": 3
    },
    {
      "id": 15,
      "question": "What is hashing?",
      "level": "medium",
      "topic": "Hashing",
      "keywords": ["hash function", "key", "value"],
      "points": 2
    },
    {
      "id": 16,
      "question": "Check if a number is palindrome using algorithm.",
      "level": "medium",
      "topic": "Problem Solving",
      "keywords": ["reverse", "compare"],
      "points": 2
    },
    {
      "id": 17,
      "question": "What is the difference between linear search and binary search?",
      "level": "medium",
      "topic": "Searching",
      "keywords": ["linear", "binary", "sorted"],
      "points": 2
    },
    {
      "id": 18,
      "question": "Explain merge sort.",
      "level": "hard",
      "topic": "Sorting",
      "keywords": ["divide", "merge", "n log n"],
      "points": 3
    }
  ]
},
{
  "skill": "SQL",
  "questions": [
    {
      "id": 1,
      "question": "What is a JOIN in SQL?",
      "level": "easy",
      "topic": "Joins",
      "keywords": ["combine", "tables"],
      "points": 1
    },
    {
      "id": 2,
      "question": "What is the difference between WHERE and HAVING?",
      "level": "medium",
      "topic": "Filtering",
      "keywords": ["where before", "having after", "group by"],
      "points": 2
    },
    {
      "id": 3,
      "question": "Write a query to find the second highest salary.",
      "level": "hard",
      "topic": "Subqueries",
      "keywords": ["subquery", "limit", "max"],
      "points": 3
    },
    {
      "id": 4,
      "question": "What is GROUP BY used for?",
      "level": "easy",
      "topic": "Aggregation",
      "keywords": ["group", "aggregate"],
      "points": 1
    },
    {
      "id": 5,
      "question": "Explain INNER JOIN vs LEFT JOIN.",
      "level": "medium",
      "topic": "Joins",
      "keywords": ["inner", "left", "all records"],
      "points": 2
    }
  ]
},
{
  "skill": "Django",
  "questions": [
    {
      "id": 1,
      "question": "What is Django?",
      "level": "easy",
      "topic": "Basics",
      "keywords": ["framework", "python", "web"],
      "points": 1
    },
    {
      "id": 2,
      "question": "What is MVT architecture?",
      "level": "easy",
      "topic": "Architecture",
      "keywords": ["model", "view", "template"],
      "points": 1
    },
    {
      "id": 3,
      "question": "What is a model in Django?",
      "level": "easy",
      "topic": "Models",
      "keywords": ["database", "table", "fields"],
      "points": 1
    },
    {
      "id": 4,
      "question": "What is a view in Django?",
      "level": "easy",
      "topic": "Views",
      "keywords": ["logic", "request", "response"],
      "points": 1
    },
    {
      "id": 5,
      "question": "What is a template in Django?",
      "level": "easy",
      "topic": "Templates",
      "keywords": ["html", "render"],
      "points": 1
    },
    {
      "id": 6,
      "question": "What is ORM in Django?",
      "level": "medium",
      "topic": "ORM",
      "keywords": ["object", "database", "query"],
      "points": 2
    },
    {
      "id": 7,
      "question": "What are migrations in Django?",
      "level": "medium",
      "topic": "Database",
      "keywords": ["schema", "changes", "database"],
      "points": 2
    },
    {
      "id": 8,
      "question": "What is Django admin?",
      "level": "easy",
      "topic": "Admin",
      "keywords": ["dashboard", "manage"],
      "points": 1
    },
    {
      "id": 9,
      "question": "What is URL routing in Django?",
      "level": "medium",
      "topic": "Routing",
      "keywords": ["url", "path", "mapping"],
      "points": 2
    },
    {
      "id": 10,
      "question": "Difference between function-based and class-based views?",
      "level": "medium",
      "topic": "Views",
      "keywords": ["function", "class", "reuse"],
      "points": 2
    },
    {
      "id": 11,
      "question": "What is middleware in Django?",
      "level": "medium",
      "topic": "Middleware",
      "keywords": ["request", "response", "process"],
      "points": 2
    },
    {
      "id": 12,
      "question": "What is Django REST Framework?",
      "level": "medium",
      "topic": "API",
      "keywords": ["api", "rest", "json"],
      "points": 2
    },
    {
      "id": 13,
      "question": "How do you handle forms in Django?",
      "level": "medium",
      "topic": "Forms",
      "keywords": ["form", "validation"],
      "points": 2
    },
    {
      "id": 14,
      "question": "What is CSRF protection?",
      "level": "hard",
      "topic": "Security",
      "keywords": ["csrf", "security", "token"],
      "points": 3
    },
    {
      "id": 15,
      "question": "What is authentication in Django?",
      "level": "medium",
      "topic": "Authentication",
      "keywords": ["login", "user", "auth"],
      "points": 2
    },
    {
      "id": 16,
      "question": "What is a serializer in Django REST Framework?",
      "level": "hard",
      "topic": "API",
      "keywords": ["serialize", "json", "convert"],
      "points": 3
    },
    {
      "id": 17,
      "question": "How do you optimize Django performance?",
      "level": "hard",
      "topic": "Optimization",
      "keywords": ["cache", "query", "optimize"],
      "points": 3
    },
    {
      "id": 18,
      "question": "What is difference between GET and POST in Django?",
      "level": "easy",
      "topic": "HTTP",
      "keywords": ["get", "post", "request"],
      "points": 1
    }
  ]
},
{
  "skill": "Python",
  "questions": [
    {
      "id": 1,
      "question": "What is Python?",
      "level": "easy",
      "topic": "Basics",
      "keywords": ["programming language", "interpreted"],
      "points": 1
    },
    {
      "id": 2,
      "question": "What are Python data types?",
      "level": "easy",
      "topic": "Basics",
      "keywords": ["int", "float", "list", "tuple", "dict"],
      "points": 1
    },
    {
      "id": 3,
      "question": "What is a list in Python?",
      "level": "easy",
      "topic": "Data Structures",
      "keywords": ["ordered", "mutable"],
      "points": 1
    },
    {
      "id": 4,
      "question": "Difference between list and tuple?",
      "level": "medium",
      "topic": "Data Structures",
      "keywords": ["mutable", "immutable"],
      "points": 2
    },
    {
      "id": 5,
      "question": "What is a dictionary in Python?",
      "level": "easy",
      "topic": "Data Structures",
      "keywords": ["key", "value"],
      "points": 1
    },
    {
      "id": 6,
      "question": "What is a function in Python?",
      "level": "easy",
      "topic": "Functions",
      "keywords": ["def", "function"],
      "points": 1
    },
    {
      "id": 7,
      "question": "What is a lambda function?",
      "level": "medium",
      "topic": "Functions",
      "keywords": ["anonymous", "lambda"],
      "points": 2
    },
    {
      "id": 8,
      "question": "What is list comprehension?",
      "level": "medium",
      "topic": "Advanced",
      "keywords": ["compact", "loop"],
      "points": 2
    },
    {
      "id": 9,
      "question": "What is OOP in Python?",
      "level": "medium",
      "topic": "OOP",
      "keywords": ["class", "object"],
      "points": 2
    },
    {
      "id": 10,
      "question": "What is inheritance?",
      "level": "medium",
      "topic": "OOP",
      "keywords": ["parent", "child"],
      "points": 2
    },
    {
      "id": 11,
      "question": "What is encapsulation?",
      "level": "medium",
      "topic": "OOP",
      "keywords": ["data hiding"],
      "points": 2
    },
    {
      "id": 12,
      "question": "What is polymorphism?",
      "level": "medium",
      "topic": "OOP",
      "keywords": ["multiple forms"],
      "points": 2
    },
    {
      "id": 13,
      "question": "What is exception handling?",
      "level": "easy",
      "topic": "Error Handling",
      "keywords": ["try", "except"],
      "points": 1
    },
    {
      "id": 14,
      "question": "What is a module in Python?",
      "level": "easy",
      "topic": "Modules",
      "keywords": ["file", "import"],
      "points": 1
    },
    {
      "id": 15,
      "question": "What is a package in Python?",
      "level": "medium",
      "topic": "Modules",
      "keywords": ["collection", "modules"],
      "points": 2
    },
    {
      "id": 16,
      "question": "What is a decorator?",
      "level": "hard",
      "topic": "Advanced",
      "keywords": ["function wrapper"],
      "points": 3
    },
    {
      "id": 17,
      "question": "What is multithreading?",
      "level": "hard",
      "topic": "Advanced",
      "keywords": ["threads", "parallel"],
      "points": 3
    },
    {
      "id": 18,
      "question": "Difference between deep copy and shallow copy?",
      "level": "hard",
      "topic": "Advanced",
      "keywords": ["copy", "reference"],
      "points": 3
    }
  ]
},
{
  "skill": "HTML_CSS",
  "questions": [
    {
      "id": 1,
      "question": "What is HTML?",
      "level": "easy",
      "topic": "HTML Basics",
      "keywords": ["markup", "structure", "web page"],
      "points": 1
    },
    {
      "id": 2,
      "question": "What is CSS?",
      "level": "easy",
      "topic": "CSS Basics",
      "keywords": ["style", "design"],
      "points": 1
    },
    {
      "id": 3,
      "question": "What is the difference between class and id?",
      "level": "easy",
      "topic": "Selectors",
      "keywords": ["class", "id", "unique"],
      "points": 1
    },
    {
      "id": 4,
      "question": "What is the box model in CSS?",
      "level": "medium",
      "topic": "Box Model",
      "keywords": ["margin", "padding", "border", "content"],
      "points": 2
    },
    {
      "id": 5,
      "question": "What is Flexbox?",
      "level": "medium",
      "topic": "Layout",
      "keywords": ["flex", "layout", "alignment"],
      "points": 2
    },
    {
      "id": 6,
      "question": "What is Grid in CSS?",
      "level": "medium",
      "topic": "Layout",
      "keywords": ["grid", "rows", "columns"],
      "points": 2
    },
    {
      "id": 7,
      "question": "What is responsive design?",
      "level": "easy",
      "topic": "Responsive",
      "keywords": ["mobile", "screen", "adapt"],
      "points": 1
    },
    {
      "id": 8,
      "question": "What are semantic HTML tags?",
      "level": "medium",
      "topic": "HTML",
      "keywords": ["semantic", "header", "footer", "section"],
      "points": 2
    },
    {
      "id": 9,
      "question": "Difference between inline, block and inline-block?",
      "level": "medium",
      "topic": "Display",
      "keywords": ["inline", "block", "display"],
      "points": 2
    },
    {
      "id": 10,
      "question": "What is z-index?",
      "level": "medium",
      "topic": "Positioning",
      "keywords": ["layer", "stack"],
      "points": 2
    },
    {
      "id": 11,
      "question": "What is position property in CSS?",
      "level": "easy",
      "topic": "Positioning",
      "keywords": ["relative", "absolute", "fixed"],
      "points": 1
    },
    {
      "id": 12,
      "question": "What is media query?",
      "level": "medium",
      "topic": "Responsive",
      "keywords": ["media", "screen", "breakpoint"],
      "points": 2
    },
    {
      "id": 13,
      "question": "What is difference between margin and padding?",
      "level": "easy",
      "topic": "Box Model",
      "keywords": ["outside", "inside"],
      "points": 1
    },
    {
      "id": 14,
      "question": "What is float and clear?",
      "level": "medium",
      "topic": "Layout",
      "keywords": ["float", "clear"],
      "points": 2
    },
    {
      "id": 15,
      "question": "How to center a div using CSS?",
      "level": "medium",
      "topic": "Layout",
      "keywords": ["center", "flex", "margin auto"],
      "points": 2
    },
    {
      "id": 16,
      "question": "What is difference between visibility:hidden and display:none?",
      "level": "hard",
      "topic": "Display",
      "keywords": ["hidden", "none", "space"],
      "points": 3
    },
    {
      "id": 17,
      "question": "What is specificity in CSS?",
      "level": "hard",
      "topic": "Selectors",
      "keywords": ["priority", "selector"],
      "points": 3
    },
    {
      "id": 18,
      "question": "How does browser render HTML and CSS?",
      "level": "hard",
      "topic": "Rendering",
      "keywords": ["parse", "dom", "cssom"],
      "points": 3
    }
  ]
},
{
  "skill": "JavaScript",
  "questions": [
    {
      "id": 1,
      "question": "What is JavaScript?",
      "level": "easy",
      "topic": "Basics",
      "keywords": ["programming", "web", "language"],
      "points": 1
    },
    {
      "id": 2,
      "question": "Difference between var, let, and const?",
      "level": "easy",
      "topic": "Variables",
      "keywords": ["scope", "block", "const"],
      "points": 1
    },
    {
      "id": 3,
      "question": "What is a function in JavaScript?",
      "level": "easy",
      "topic": "Functions",
      "keywords": ["function", "block", "code"],
      "points": 1
    },
    {
      "id": 4,
      "question": "What is closure?",
      "level": "medium",
      "topic": "Advanced",
      "keywords": ["scope", "outer function"],
      "points": 2
    },
    {
      "id": 5,
      "question": "What is callback function?",
      "level": "medium",
      "topic": "Functions",
      "keywords": ["function", "argument"],
      "points": 2
    },
    {
      "id": 6,
      "question": "What is promise in JavaScript?",
      "level": "medium",
      "topic": "Async",
      "keywords": ["resolve", "reject"],
      "points": 2
    },
    {
      "id": 7,
      "question": "What is async/await?",
      "level": "medium",
      "topic": "Async",
      "keywords": ["async", "await"],
      "points": 2
    },
    {
      "id": 8,
      "question": "Difference between == and ===?",
      "level": "easy",
      "topic": "Operators",
      "keywords": ["strict", "type"],
      "points": 1
    },
    {
      "id": 9,
      "question": "What is DOM?",
      "level": "easy",
      "topic": "DOM",
      "keywords": ["document", "object", "model"],
      "points": 1
    },
    {
      "id": 10,
      "question": "How do you select elements in DOM?",
      "level": "medium",
      "topic": "DOM",
      "keywords": ["getelementbyid", "queryselector"],
      "points": 2
    },
    {
      "id": 11,
      "question": "What is event bubbling?",
      "level": "medium",
      "topic": "Events",
      "keywords": ["bubble", "propagation"],
      "points": 2
    },
    {
      "id": 12,
      "question": "What is hoisting?",
      "level": "medium",
      "topic": "Advanced",
      "keywords": ["hoist", "top"],
      "points": 2
    },
    {
      "id": 13,
      "question": "What is arrow function?",
      "level": "easy",
      "topic": "Functions",
      "keywords": ["arrow", "=>"],
      "points": 1
    },
    {
      "id": 14,
      "question": "What is destructuring?",
      "level": "medium",
      "topic": "ES6",
      "keywords": ["array", "object"],
      "points": 2
    },
    {
      "id": 15,
      "question": "What is spread operator?",
      "level": "medium",
      "topic": "ES6",
      "keywords": ["spread", "..."],
      "points": 2
    },
    {
      "id": 16,
      "question": "What is debounce?",
      "level": "hard",
      "topic": "Optimization",
      "keywords": ["delay", "limit"],
      "points": 3
    },
    {
      "id": 17,
      "question": "What is throttling?",
      "level": "hard",
      "topic": "Optimization",
      "keywords": ["limit", "time"],
      "points": 3
    },
    {
      "id": 18,
      "question": "Explain event loop in JavaScript.",
      "level": "hard",
      "topic": "Async",
      "keywords": ["event loop", "call stack", "queue"],
      "points": 3
    }
  ]
},
{
  "skill": "NodeJS",
  "questions": [
    {
      "id": 1,
      "question": "What is Node.js?",
      "level": "easy",
      "topic": "Basics",
      "keywords": ["runtime", "javascript", "server"],
      "points": 1
    },
    {
      "id": 2,
      "question": "What is event-driven architecture in Node.js?",
      "level": "medium",
      "topic": "Architecture",
      "keywords": ["event", "non blocking"],
      "points": 2
    },
    {
      "id": 3,
      "question": "What is npm?",
      "level": "easy",
      "topic": "Tools",
      "keywords": ["package", "manager"],
      "points": 1
    },
    {
      "id": 4,
      "question": "What is Express.js?",
      "level": "easy",
      "topic": "Framework",
      "keywords": ["framework", "server"],
      "points": 1
    },
    {
      "id": 5,
      "question": "What is middleware in Express?",
      "level": "medium",
      "topic": "Middleware",
      "keywords": ["request", "response", "next"],
      "points": 2
    },
    {
      "id": 6,
      "question": "Difference between synchronous and asynchronous code?",
      "level": "easy",
      "topic": "Async",
      "keywords": ["sync", "async"],
      "points": 1
    },
    {
      "id": 7,
      "question": "What is callback function in Node.js?",
      "level": "medium",
      "topic": "Async",
      "keywords": ["callback", "function"],
      "points": 2
    },
    {
      "id": 8,
      "question": "What is REST API?",
      "level": "easy",
      "topic": "API",
      "keywords": ["rest", "api", "http"],
      "points": 1
    },
    {
      "id": 9,
      "question": "What is routing in Express?",
      "level": "medium",
      "topic": "Routing",
      "keywords": ["route", "url"],
      "points": 2
    },
    {
      "id": 10,
      "question": "What is JSON?",
      "level": "easy",
      "topic": "Data",
      "keywords": ["json", "data"],
      "points": 1
    },
    {
      "id": 11,
      "question": "What is the event loop in Node.js?",
      "level": "hard",
      "topic": "Async",
      "keywords": ["event loop", "call stack", "queue"],
      "points": 3
    },
    {
      "id": 12,
      "question": "What is non-blocking I/O?",
      "level": "medium",
      "topic": "Performance",
      "keywords": ["non blocking", "async"],
      "points": 2
    },
    {
      "id": 13,
      "question": "What is a stream in Node.js?",
      "level": "hard",
      "topic": "Streams",
      "keywords": ["stream", "data"],
      "points": 3
    },
    {
      "id": 14,
      "question": "What is error handling in Node.js?",
      "level": "medium",
      "topic": "Error Handling",
      "keywords": ["error", "try", "catch"],
      "points": 2
    },
    {
      "id": 15,
      "question": "What is CORS?",
      "level": "medium",
      "topic": "Security",
      "keywords": ["cors", "cross origin"],
      "points": 2
    },
    {
      "id": 16,
      "question": "What is JWT authentication?",
      "level": "hard",
      "topic": "Authentication",
      "keywords": ["jwt", "token"],
      "points": 3
    },
    {
      "id": 17,
      "question": "How do you handle file uploads in Node.js?",
      "level": "hard",
      "topic": "File Handling",
      "keywords": ["upload", "file"],
      "points": 3
    },
    {
      "id": 18,
      "question": "How do you optimize Node.js performance?",
      "level": "hard",
      "topic": "Optimization",
      "keywords": ["optimize", "performance"],
      "points": 3
    }
  ]
},
{
  "skill": "MongoDB",
  "questions": [
    {
      "id": 1,
      "question": "What is MongoDB?",
      "level": "easy",
      "topic": "Basics",
      "keywords": ["nosql", "document", "database"],
      "points": 1
    },
    {
      "id": 2,
      "question": "What is a document in MongoDB?",
      "level": "easy",
      "topic": "Basics",
      "keywords": ["json", "bson", "record"],
      "points": 1
    },
    {
      "id": 3,
      "question": "What is a collection?",
      "level": "easy",
      "topic": "Basics",
      "keywords": ["group", "documents"],
      "points": 1
    },
    {
      "id": 4,
      "question": "Difference between SQL and MongoDB?",
      "level": "medium",
      "topic": "Comparison",
      "keywords": ["table", "document", "nosql"],
      "points": 2
    },
    {
      "id": 5,
      "question": "What is BSON?",
      "level": "medium",
      "topic": "Data Format",
      "keywords": ["binary", "json"],
      "points": 2
    },
    {
      "id": 6,
      "question": "What is indexing in MongoDB?",
      "level": "medium",
      "topic": "Indexing",
      "keywords": ["index", "performance"],
      "points": 2
    },
    {
      "id": 7,
      "question": "What is aggregation in MongoDB?",
      "level": "medium",
      "topic": "Aggregation",
      "keywords": ["pipeline", "group"],
      "points": 2
    },
    {
      "id": 8,
      "question": "What is replication?",
      "level": "medium",
      "topic": "Replication",
      "keywords": ["replica", "copy"],
      "points": 2
    },
    {
      "id": 9,
      "question": "What is sharding?",
      "level": "hard",
      "topic": "Scaling",
      "keywords": ["shard", "distribution"],
      "points": 3
    },
    {
      "id": 10,
      "question": "What is the difference between embedded and referenced documents?",
      "level": "hard",
      "topic": "Schema Design",
      "keywords": ["embedded", "reference"],
      "points": 3
    },
    {
      "id": 11,
      "question": "How do you insert data in MongoDB?",
      "level": "easy",
      "topic": "CRUD",
      "keywords": ["insert", "document"],
      "points": 1
    },
    {
      "id": 12,
      "question": "How do you update data in MongoDB?",
      "level": "easy",
      "topic": "CRUD",
      "keywords": ["update", "set"],
      "points": 1
    },
    {
      "id": 13,
      "question": "How do you delete data in MongoDB?",
      "level": "easy",
      "topic": "CRUD",
      "keywords": ["delete", "remove"],
      "points": 1
    },
    {
      "id": 14,
      "question": "What is find() in MongoDB?",
      "level": "easy",
      "topic": "Queries",
      "keywords": ["find", "query"],
      "points": 1
    },
    {
      "id": 15,
      "question": "What is projection in MongoDB?",
      "level": "medium",
      "topic": "Queries",
      "keywords": ["select", "fields"],
      "points": 2
    },
    {
      "id": 16,
      "question": "What is $lookup in MongoDB?",
      "level": "hard",
      "topic": "Aggregation",
      "keywords": ["lookup", "join"],
      "points": 3
    },
    {
      "id": 17,
      "question": "How do you optimize MongoDB queries?",
      "level": "hard",
      "topic": "Optimization",
      "keywords": ["index", "optimize"],
      "points": 3
    },
    {
      "id": 18,
      "question": "What is the difference between capped collection and normal collection?",
      "level": "hard",
      "topic": "Advanced",
      "keywords": ["capped", "fixed size"],
      "points": 3
    }
  ]
},
{
  "skill": "Java",
  "questions": [
    {
      "id": 1,
      "question": "What is Java?",
      "level": "easy",
      "topic": "Basics",
      "keywords": ["programming language", "object oriented"],
      "points": 1
    },
    {
      "id": 2,
      "question": "What are features of Java?",
      "level": "easy",
      "topic": "Basics",
      "keywords": ["platform independent", "secure", "robust"],
      "points": 1
    },
    {
      "id": 3,
      "question": "What is JVM?",
      "level": "easy",
      "topic": "JVM",
      "keywords": ["java virtual machine"],
      "points": 1
    },
    {
      "id": 4,
      "question": "What is JDK and JRE?",
      "level": "medium",
      "topic": "JVM",
      "keywords": ["jdk", "jre", "runtime"],
      "points": 2
    },
    {
      "id": 5,
      "question": "What is a class and object?",
      "level": "easy",
      "topic": "OOP",
      "keywords": ["class", "object"],
      "points": 1
    },
    {
      "id": 6,
      "question": "What is inheritance?",
      "level": "medium",
      "topic": "OOP",
      "keywords": ["parent", "child"],
      "points": 2
    },
    {
      "id": 7,
      "question": "What is polymorphism?",
      "level": "medium",
      "topic": "OOP",
      "keywords": ["multiple forms"],
      "points": 2
    },
    {
      "id": 8,
      "question": "What is encapsulation?",
      "level": "medium",
      "topic": "OOP",
      "keywords": ["data hiding"],
      "points": 2
    },
    {
      "id": 9,
      "question": "What is abstraction?",
      "level": "medium",
      "topic": "OOP",
      "keywords": ["abstract", "hide implementation"],
      "points": 2
    },
    {
      "id": 10,
      "question": "What is interface in Java?",
      "level": "medium",
      "topic": "OOP",
      "keywords": ["interface", "implements"],
      "points": 2
    },
    {
      "id": 11,
      "question": "Difference between ArrayList and LinkedList?",
      "level": "medium",
      "topic": "Collections",
      "keywords": ["arraylist", "linkedlist"],
      "points": 2
    },
    {
      "id": 12,
      "question": "What is HashMap?",
      "level": "easy",
      "topic": "Collections",
      "keywords": ["key", "value"],
      "points": 1
    },
    {
      "id": 13,
      "question": "What is exception handling in Java?",
      "level": "easy",
      "topic": "Exception",
      "keywords": ["try", "catch"],
      "points": 1
    },
    {
      "id": 14,
      "question": "What is multithreading?",
      "level": "hard",
      "topic": "Threads",
      "keywords": ["thread", "parallel"],
      "points": 3
    },
    {
      "id": 15,
      "question": "What is synchronization?",
      "level": "hard",
      "topic": "Threads",
      "keywords": ["sync", "lock"],
      "points": 3
    },
    {
      "id": 16,
      "question": "What is garbage collection?",
      "level": "medium",
      "topic": "Memory",
      "keywords": ["memory", "gc"],
      "points": 2
    },
    {
      "id": 17,
      "question": "Difference between checked and unchecked exceptions?",
      "level": "hard",
      "topic": "Exception",
      "keywords": ["checked", "unchecked"],
      "points": 3
    },
    {
      "id": 18,
      "question": "What is Spring Framework?",
      "level": "hard",
      "topic": "Framework",
      "keywords": ["spring", "framework"],
      "points": 3
    }
  ]
}
]

with open('data/questions.json', 'w') as f:
    json.dump(data, f, indent=2)
print("Updated questions.json successfully.")

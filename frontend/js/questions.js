// ============================================================
// QUESTION BANK — Multi-Question Decision Tree
// Structure: { "Skill": { easy: [...], medium: [...], hard: [...] } }
// Each level has 5-8 questions. Each question has a "topic" field
// for weak-area identification.
// Questions are LEFT EMPTY — user will populate manually.
// ============================================================

const QUESTION_BANK = {
  "React": {
    "easy": [
      { "question": "What is JSX?", "options": ["JavaScript XML", "Java Syntax Extension", "JSON XML", "JavaScript Syntax"], "correct": "JavaScript XML", "topic": "JSX Basics" },
      { "question": "Which method is used to render a React element into the DOM?", "options": ["ReactDOM.render()", "React.mount()", "DOM.render()", "React.render()"], "correct": "ReactDOM.render()", "topic": "Components" },
      { "question": "What are props in React?", "options": ["Arguments passed to components", "Internal component state", "HTML properties", "CSS properties"], "correct": "Arguments passed to components", "topic": "Props" },
      { "question": "Which hook is used to add state to a functional component?", "options": ["useState", "useEffect", "useContext", "useReducer"], "correct": "useState", "topic": "State" },
      { "question": "How do you pass an event handler in React?", "options": ["onClick={handleClick}", "onclick=\"handleClick()\"", "on-click={handleClick}", "click={handleClick}"], "correct": "onClick={handleClick}", "topic": "Event Handling" }
    ],
    "medium": [
      { "question": "What is the purpose of useEffect?", "options": ["Perform side effects", "Manage complex state", "Create context", "Handle routing"], "correct": "Perform side effects", "topic": "useEffect" },
      { "question": "What is the Context API used for?", "options": ["Passing data deeply without prop drilling", "State management like Redux", "Form validation", "API requests"], "correct": "Passing data deeply without prop drilling", "topic": "Context API" },
      { "question": "How do you conditionally render an element?", "options": ["{condition && <Component />}", "<if condition={true}><Component /></if>", "<Component condition={true} />", "{condition ? Component : null}"], "correct": "{condition && <Component />}", "topic": "Conditional Rendering" },
      { "question": "Why are keys important in React lists?", "options": ["They help identifying items that have changed", "They style the list", "They encode data securely", "They track event listeners"], "correct": "They help identifying items that have changed", "topic": "Lists and Keys" },
      { "question": "What is a custom hook?", "options": ["A JavaScript function starting with 'use'", "A class extending React.Component", "A built-in React feature", "A third-party library"], "correct": "A JavaScript function starting with 'use'", "topic": "React Hooks" }
    ],
    "hard": [
      { "question": "What is the Virtual DOM?", "options": ["A lightweight copy of the actual DOM", "A browser's shadow DOM", "A string representation of HTML", "A React node"], "correct": "A lightweight copy of the actual DOM", "topic": "Virtual DOM" },
      { "question": "What is reconciliation in React?", "options": ["The algorithm to diff trees and update DOM", "Error handling boundary", "State lifting mechanism", "Context propagation"], "correct": "The algorithm to diff trees and update DOM", "topic": "Reconciliation" },
      { "question": "How can you optimize functional component re-renders?", "options": ["React.memo", "shouldComponentUpdate", "useSelector", "PureComponent"], "correct": "React.memo", "topic": "Performance Optimization" },
      { "question": "What is React Fiber?", "options": ["The new reconciliation engine in React 16", "A routing library", "A state management tool", "An animation library"], "correct": "The new reconciliation engine in React 16", "topic": "React Fiber" },
      { "question": "How do you implement code splitting in React?", "options": ["React.lazy and Suspense", "Webpack splitChunks", "Import() only", "Babel plugin"], "correct": "React.lazy and Suspense", "topic": "Code Splitting" }
    ]
  },

  "Node.js": {
    "easy": [
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Node Basics" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "NPM" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Modules" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "File System" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "HTTP Module" }
    ],
    "medium": [
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Express.js" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Middleware" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Async/Await" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Error Handling" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "REST APIs" }
    ],
    "hard": [
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Event Loop" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Streams" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Cluster Module" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Worker Threads" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Memory Leaks" }
    ]
  },

  "Python": {
    "easy": [
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Data Types" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Control Flow" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Functions" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Lists" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Dictionaries" }
    ],
    "medium": [
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "OOP" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "List Comprehensions" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Exception Handling" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "File I/O" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Lambda Functions" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Iterators" }
    ],
    "hard": [
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Decorators" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Generators" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Metaclasses" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "GIL" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Memory Management" }
    ]
  },

  "SQL": {
    "easy": [
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "SELECT Queries" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "WHERE Clause" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "INSERT/UPDATE" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Primary Keys" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "ORDER BY" }
    ],
    "medium": [
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "JOINs" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "GROUP BY" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Subqueries" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Indexes" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Aggregate Functions" }
    ],
    "hard": [
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Query Optimization" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Normalization" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Transactions" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Window Functions" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Stored Procedures" }
    ]
  },

  "Docker": {
    "easy": [
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Containers vs VMs" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Docker Images" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Dockerfile" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Docker CLI" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Port Mapping" }
    ],
    "medium": [
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Docker Compose" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Volumes" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Networking" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Multi-Stage Builds" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Environment Variables" }
    ],
    "hard": [
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Docker Swarm" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Container Orchestration" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Image Optimization" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Security Best Practices" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "CI/CD Integration" }
    ]
  },

  "JavaScript": {
    "easy": [
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Variables" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Data Types" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Functions" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Arrays" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "DOM Basics" }
    ],
    "medium": [
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Closures" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Promises" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Prototypes" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "ES6 Features" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Error Handling" }
    ],
    "hard": [
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Event Loop" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Generators" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Proxy/Reflect" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "WeakMap/WeakSet" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Memory Management" }
    ]
  },

  "Java": {
    "easy": [
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "OOP Basics" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Data Types" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Control Flow" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Arrays" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Strings" }
    ],
    "medium": [
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Collections" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Exception Handling" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Generics" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Multithreading" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Streams API" }
    ],
    "hard": [
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "JVM Internals" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Garbage Collection" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Design Patterns" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Concurrency" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Memory Model" }
    ]
  },

  "DSA": {
    "easy": [
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Arrays" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Linked Lists" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Stacks" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Queues" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Big-O Notation" }
    ],
    "medium": [
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Binary Trees" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Sorting Algorithms" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Hash Tables" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Recursion" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "BFS/DFS" }
    ],
    "hard": [
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Dynamic Programming" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Graphs" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Tries" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Greedy Algorithms" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Segment Trees" }
    ]
  },

  "AWS": {
    "easy": [
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "EC2" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "S3" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "IAM" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Regions/AZs" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "CloudWatch" }
    ],
    "medium": [
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Lambda" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "API Gateway" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "RDS" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "VPC" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "SQS/SNS" }
    ],
    "hard": [
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Auto Scaling" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "CloudFormation" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "ECS/EKS" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Cost Optimization" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Disaster Recovery" }
    ]
  },

  "TypeScript": {
    "easy": [
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Type Annotations" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Interfaces" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Enums" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Basic Types" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Type Inference" }
    ],
    "medium": [
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Generics" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Union Types" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Type Guards" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Utility Types" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Decorators" }
    ],
    "hard": [
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Mapped Types" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Conditional Types" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Template Literals" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Type Narrowing" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Module Augmentation" }
    ]
  },

  "MongoDB": {
    "easy": [
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Documents" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Collections" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "CRUD Operations" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Data Types" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "MongoDB Shell" }
    ],
    "medium": [
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Aggregation" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Indexing" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Schema Design" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Mongoose ODM" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Embedded vs Referenced" }
    ],
    "hard": [
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Sharding" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Replication" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Transactions" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Performance Tuning" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Change Streams" }
    ]
  },

  "Django": {
    "easy": [
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "MVT Architecture" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "URL Routing" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Templates" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Models" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Admin Panel" }
    ],
    "medium": [
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "ORM Queries" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Forms" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Class-Based Views" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Authentication" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Middleware" }
    ],
    "hard": [
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Custom Managers" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Signals" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Caching" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "REST Framework" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Query Optimization" }
    ]
  },

  "Flask": {
    "easy": [
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Flask Basics" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Routing" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Templates" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Request Object" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Static Files" }
    ],
    "medium": [
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Blueprints" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "SQLAlchemy" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Flask-WTF" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Session Management" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Error Handlers" }
    ],
    "hard": [
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Application Factory" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Flask-RESTful" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Custom Middleware" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "WebSockets" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Deployment" }
    ]
  },

  "Git": {
    "easy": [
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Basic Commands" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Staging Area" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Commits" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Branching" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Remote Repos" }
    ],
    "medium": [
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Merge vs Rebase" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Conflict Resolution" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Stashing" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Cherry-Pick" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Git Hooks" }
    ],
    "hard": [
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Interactive Rebase" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Reflog" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Bisect" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Submodules" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Worktrees" }
    ]
  },

  "C++": {
    "easy": [
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Syntax Basics" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Data Types" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Pointers" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Arrays" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Functions" }
    ],
    "medium": [
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "OOP" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "STL" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Templates" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Exception Handling" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "References" }
    ],
    "hard": [
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Smart Pointers" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Move Semantics" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "RAII" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Multithreading" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Memory Layout" }
    ]
  },

  "Kubernetes": {
    "easy": [
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Pods" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Nodes" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Clusters" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "kubectl" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Namespaces" }
    ],
    "medium": [
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Deployments" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Services" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "ConfigMaps" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Ingress" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Volumes" }
    ],
    "hard": [
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Helm Charts" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Custom Resources" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "RBAC" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Network Policies" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Operators" }
    ]
  },

  "TensorFlow": {
    "easy": [
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Tensors" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Keras Basics" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Sequential Model" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Layers" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Loss Functions" }
    ],
    "medium": [
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "CNNs" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Transfer Learning" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Callbacks" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Data Pipelines" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Regularization" }
    ],
    "hard": [
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Custom Training Loops" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "TF Serving" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Distributed Training" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Model Optimization" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "TFLite" }
    ]
  },

  "Pandas": {
    "easy": [
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "DataFrames" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Series" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Reading CSV" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Basic Selection" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Filtering" }
    ],
    "medium": [
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "GroupBy" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Merge/Join" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Pivot Tables" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Missing Data" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Apply Functions" }
    ],
    "hard": [
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "MultiIndex" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Window Functions" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Performance" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Custom Accessors" },
      { "question": "", "options": ["", "", "", ""], "correct": "", "topic": "Memory Optimization" }
    ]
  },

  "Bootstrap": { "easy": [], "medium": [], "hard": [] },
  "Dart": { "easy": [], "medium": [], "hard": [] },
  "Matplotlib": { "easy": [], "medium": [], "hard": [] },
  "OpenCV": { "easy": [], "medium": [], "hard": [] },
  "NLP": { "easy": [], "medium": [], "hard": [] },
  "Scikit-learn": { "easy": [], "medium": [], "hard": [] },
  "HTML_CSS": { "easy": [], "medium": [], "hard": [] },
  "JupyterNotebook": { "easy": [], "medium": [], "hard": [] },
  "NumPy": { "easy": [], "medium": [], "hard": [] },
  "NodeJS": { "easy": [], "medium": [], "hard": [] }
};

// ============================================================
// SCORING CONFIGURATION
// ============================================================
const SCORING_CONFIG = {
  weights: { easy: 1, medium: 2, hard: 3 },
  thresholds: { easy: 0.60, medium: 0.60, hard: 0.70 }
};

// ============================================================
// RESOURCE SUGGESTIONS for weak topics
// ============================================================
const RESOURCE_SUGGESTIONS = {
  "React": { youtube: "Traversy Media - React Crash Course", roadmap: "roadmap.sh/react", practice: "Build a Todo App" },
  "Node.js": { youtube: "Traversy Media - Node.js Crash Course", roadmap: "roadmap.sh/nodejs", practice: "Build a REST API" },
  "Python": { youtube: "Corey Schafer - Python Tutorials", roadmap: "roadmap.sh/python", practice: "LeetCode Easy" },
  "SQL": { youtube: "Programming with Mosh - SQL", roadmap: "roadmap.sh/sql", practice: "SQLZoo exercises" },
  "Docker": { youtube: "TechWorld with Nana - Docker", roadmap: "roadmap.sh/devops", practice: "Dockerize a web app" },
  "JavaScript": { youtube: "Traversy Media - JS Crash Course", roadmap: "roadmap.sh/javascript", practice: "LeetCode Easy" },
  "Java": { youtube: "Telusko - Java Tutorial", roadmap: "roadmap.sh/java", practice: "HackerRank Java" },
  "DSA": { youtube: "Abdul Bari - Algorithms", roadmap: "roadmap.sh/datastructures-and-algorithms", practice: "LeetCode" },
  "AWS": { youtube: "FreeCodeCamp - AWS Certified", roadmap: "roadmap.sh/aws", practice: "AWS Free Tier labs" },
  "TypeScript": { youtube: "Traversy Media - TypeScript", roadmap: "roadmap.sh/typescript", practice: "Type Challenges" },
  "MongoDB": { youtube: "Traversy Media - MongoDB", roadmap: "roadmap.sh/mongodb", practice: "MongoDB University" },
  "Django": { youtube: "Corey Schafer - Django", roadmap: "roadmap.sh/python", practice: "Build a blog" },
  "Git": { youtube: "Traversy Media - Git", roadmap: "roadmap.sh/git-github", practice: "Learn Git Branching" },
  "default": { youtube: "FreeCodeCamp", roadmap: "roadmap.sh", practice: "Practice projects" }
};

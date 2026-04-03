// ============================================================
// QUESTION BANK — Multi-Question Decision Tree
// Structure: { "Skill": { easy: [...], medium: [...], hard: [...] } }
// Each level has 5 questions with topic fields.
// ============================================================

const QUESTION_BANK = {
  "Node.js": {
    "easy": [
      {
        "question": "What is Node.js?",
        "options": [
          "A JavaScript runtime built on Chrome's V8",
          "A programming language",
          "A database",
          "A web browser"
        ],
        "correct": "A JavaScript runtime built on Chrome's V8",
        "topic": "Node Basics"
      },
      {
        "question": "What does npm stand for?",
        "options": [
          "Node Package Manager",
          "New Project Manager",
          "Node Process Module",
          "Network Protocol Manager"
        ],
        "correct": "Node Package Manager",
        "topic": "NPM"
      },
      {
        "question": "Which method is used to include modules in Node.js?",
        "options": [
          "require()",
          "import()",
          "include()",
          "load()"
        ],
        "correct": "require()",
        "topic": "Modules"
      },
      {
        "question": "Which module is used to handle file operations?",
        "options": [
          "fs",
          "http",
          "path",
          "os"
        ],
        "correct": "fs",
        "topic": "File System"
      },
      {
        "question": "Which method creates an HTTP server in Node.js?",
        "options": [
          "http.createServer()",
          "http.server()",
          "http.listen()",
          "http.init()"
        ],
        "correct": "http.createServer()",
        "topic": "HTTP Module"
      }
    ],
    "medium": [
      {
        "question": "What is Express.js?",
        "options": [
          "A web application framework for Node.js",
          "A database",
          "A template engine",
          "A testing library"
        ],
        "correct": "A web application framework for Node.js",
        "topic": "Express.js"
      },
      {
        "question": "What is middleware in Express?",
        "options": [
          "Functions that execute during request-response cycle",
          "Database connectors",
          "Template files",
          "Static assets"
        ],
        "correct": "Functions that execute during request-response cycle",
        "topic": "Middleware"
      },
      {
        "question": "Which keyword is used to pause execution until a promise resolves?",
        "options": [
          "await",
          "yield",
          "pause",
          "halt"
        ],
        "correct": "await",
        "topic": "Async/Await"
      },
      {
        "question": "How do you handle errors in Express middleware?",
        "options": [
          "Using next(err) with 4-parameter middleware",
          "Using try-catch only",
          "Using console.error",
          "Using process.exit"
        ],
        "correct": "Using next(err) with 4-parameter middleware",
        "topic": "Error Handling"
      },
      {
        "question": "Which HTTP method is used to update a resource?",
        "options": [
          "PUT",
          "POST",
          "GET",
          "DELETE"
        ],
        "correct": "PUT",
        "topic": "REST APIs"
      }
    ],
    "hard": [
      {
        "question": "What is the event loop in Node.js?",
        "options": [
          "A mechanism that handles async callbacks",
          "A for loop construct",
          "A database query loop",
          "A rendering engine"
        ],
        "correct": "A mechanism that handles async callbacks",
        "topic": "Event Loop"
      },
      {
        "question": "What are streams in Node.js?",
        "options": [
          "Objects for reading/writing data continuously",
          "Array methods",
          "Database connections",
          "HTTP headers"
        ],
        "correct": "Objects for reading/writing data continuously",
        "topic": "Streams"
      },
      {
        "question": "What does the cluster module do?",
        "options": [
          "Creates child processes sharing server ports",
          "Manages databases",
          "Handles file compression",
          "Controls memory allocation"
        ],
        "correct": "Creates child processes sharing server ports",
        "topic": "Cluster Module"
      },
      {
        "question": "What are Worker Threads used for?",
        "options": [
          "CPU-intensive tasks in parallel threads",
          "Database queries",
          "File reading",
          "HTTP requests"
        ],
        "correct": "CPU-intensive tasks in parallel threads",
        "topic": "Worker Threads"
      },
      {
        "question": "How can you detect memory leaks in Node.js?",
        "options": [
          "Using heap snapshots and process.memoryUsage()",
          "Using console.log",
          "Using npm install",
          "Using fs module"
        ],
        "correct": "Using heap snapshots and process.memoryUsage()",
        "topic": "Memory Leaks"
      }
    ]
  },
  "Python": {
    "easy": [
      {
        "question": "Which of these is a mutable data type?",
        "options": [
          "list",
          "tuple",
          "string",
          "frozenset"
        ],
        "correct": "list",
        "topic": "Data Types"
      },
      {
        "question": "What keyword is used for conditional statements?",
        "options": [
          "if",
          "for",
          "def",
          "class"
        ],
        "correct": "if",
        "topic": "Control Flow"
      },
      {
        "question": "How do you define a function in Python?",
        "options": [
          "def my_func():",
          "function my_func():",
          "fn my_func():",
          "define my_func():"
        ],
        "correct": "def my_func():",
        "topic": "Functions"
      },
      {
        "question": "How do you add an element to a list?",
        "options": [
          "append()",
          "add()",
          "push()",
          "insert_end()"
        ],
        "correct": "append()",
        "topic": "Lists"
      },
      {
        "question": "How do you access a value in a dictionary?",
        "options": [
          "dict[key]",
          "dict.get_value(key)",
          "dict->key",
          "dict(key)"
        ],
        "correct": "dict[key]",
        "topic": "Dictionaries"
      }
    ],
    "medium": [
      {
        "question": "What is __init__ in Python?",
        "options": [
          "Constructor method of a class",
          "A module",
          "A built-in function",
          "A loop"
        ],
        "correct": "Constructor method of a class",
        "topic": "OOP"
      },
      {
        "question": "What does [x**2 for x in range(5)] return?",
        "options": [
          "[0, 1, 4, 9, 16]",
          "[1, 4, 9, 16, 25]",
          "[0, 2, 4, 6, 8]",
          "Error"
        ],
        "correct": "[0, 1, 4, 9, 16]",
        "topic": "List Comprehensions"
      },
      {
        "question": "Which block handles exceptions in Python?",
        "options": [
          "try-except",
          "try-catch",
          "if-else",
          "do-while"
        ],
        "correct": "try-except",
        "topic": "Exception Handling"
      },
      {
        "question": "Which mode opens a file for reading in Python?",
        "options": [
          "'r'",
          "'w'",
          "'a'",
          "'x'"
        ],
        "correct": "'r'",
        "topic": "File I/O"
      },
      {
        "question": "What is a lambda function?",
        "options": [
          "An anonymous single-expression function",
          "A named function",
          "A class method",
          "A module"
        ],
        "correct": "An anonymous single-expression function",
        "topic": "Lambda Functions"
      }
    ],
    "hard": [
      {
        "question": "What is a decorator in Python?",
        "options": [
          "A function that modifies another function",
          "A class attribute",
          "A loop construct",
          "A data type"
        ],
        "correct": "A function that modifies another function",
        "topic": "Decorators"
      },
      {
        "question": "What does yield do in a function?",
        "options": [
          "Makes it a generator that produces values lazily",
          "Returns a value and exits",
          "Raises an exception",
          "Imports a module"
        ],
        "correct": "Makes it a generator that produces values lazily",
        "topic": "Generators"
      },
      {
        "question": "What are metaclasses?",
        "options": [
          "Classes that define behavior of other classes",
          "Subclasses",
          "Abstract classes",
          "Data classes"
        ],
        "correct": "Classes that define behavior of other classes",
        "topic": "Metaclasses"
      },
      {
        "question": "What is the GIL?",
        "options": [
          "A mutex that protects access to Python objects",
          "A garbage collector",
          "A loop optimizer",
          "A compiler flag"
        ],
        "correct": "A mutex that protects access to Python objects",
        "topic": "GIL"
      },
      {
        "question": "How does Python manage memory?",
        "options": [
          "Reference counting with cycle-detecting garbage collector",
          "Manual allocation",
          "Stack-only allocation",
          "No memory management"
        ],
        "correct": "Reference counting with cycle-detecting garbage collector",
        "topic": "Memory Management"
      }
    ]
  },
  "SQL": {
    "easy": [
      {
        "question": "Which SQL statement retrieves data?",
        "options": [
          "SELECT",
          "INSERT",
          "UPDATE",
          "DELETE"
        ],
        "correct": "SELECT",
        "topic": "SELECT Queries"
      },
      {
        "question": "Which clause filters rows?",
        "options": [
          "WHERE",
          "HAVING",
          "GROUP BY",
          "ORDER BY"
        ],
        "correct": "WHERE",
        "topic": "WHERE Clause"
      },
      {
        "question": "Which statement adds new data to a table?",
        "options": [
          "INSERT INTO",
          "ADD INTO",
          "PUT INTO",
          "CREATE INTO"
        ],
        "correct": "INSERT INTO",
        "topic": "INSERT/UPDATE"
      },
      {
        "question": "What uniquely identifies each row in a table?",
        "options": [
          "Primary Key",
          "Foreign Key",
          "Index",
          "Constraint"
        ],
        "correct": "Primary Key",
        "topic": "Primary Keys"
      },
      {
        "question": "Which clause sorts results?",
        "options": [
          "ORDER BY",
          "SORT BY",
          "GROUP BY",
          "ARRANGE BY"
        ],
        "correct": "ORDER BY",
        "topic": "ORDER BY"
      }
    ],
    "medium": [
      {
        "question": "Which JOIN returns matching rows from both tables?",
        "options": [
          "INNER JOIN",
          "LEFT JOIN",
          "RIGHT JOIN",
          "CROSS JOIN"
        ],
        "correct": "INNER JOIN",
        "topic": "JOINs"
      },
      {
        "question": "What does GROUP BY do?",
        "options": [
          "Groups rows with same values for aggregate functions",
          "Sorts rows",
          "Filters rows",
          "Joins tables"
        ],
        "correct": "Groups rows with same values for aggregate functions",
        "topic": "GROUP BY"
      },
      {
        "question": "What is a subquery?",
        "options": [
          "A query nested inside another query",
          "A stored procedure",
          "A view",
          "A trigger"
        ],
        "correct": "A query nested inside another query",
        "topic": "Subqueries"
      },
      {
        "question": "What is the purpose of an index?",
        "options": [
          "Speeds up data retrieval",
          "Stores data",
          "Creates tables",
          "Deletes duplicates"
        ],
        "correct": "Speeds up data retrieval",
        "topic": "Indexes"
      },
      {
        "question": "Which function returns the total number of rows?",
        "options": [
          "COUNT()",
          "SUM()",
          "TOTAL()",
          "NUM()"
        ],
        "correct": "COUNT()",
        "topic": "Aggregate Functions"
      }
    ],
    "hard": [
      {
        "question": "What is query optimization?",
        "options": [
          "Improving query performance using execution plans",
          "Writing shorter queries",
          "Adding more tables",
          "Using SELECT *"
        ],
        "correct": "Improving query performance using execution plans",
        "topic": "Query Optimization"
      },
      {
        "question": "What is 3NF (Third Normal Form)?",
        "options": [
          "No transitive dependencies on primary key",
          "All data in one table",
          "Using only primary keys",
          "Removing all indexes"
        ],
        "correct": "No transitive dependencies on primary key",
        "topic": "Normalization"
      },
      {
        "question": "What does ACID stand for in transactions?",
        "options": [
          "Atomicity Consistency Isolation Durability",
          "Add Create Insert Delete",
          "Async Concurrent Independent Distributed",
          "None of these"
        ],
        "correct": "Atomicity Consistency Isolation Durability",
        "topic": "Transactions"
      },
      {
        "question": "What are window functions?",
        "options": [
          "Functions that perform calculations across row sets",
          "Aggregate functions",
          "String functions",
          "Date functions"
        ],
        "correct": "Functions that perform calculations across row sets",
        "topic": "Window Functions"
      },
      {
        "question": "What is a stored procedure?",
        "options": [
          "Precompiled SQL statements stored in database",
          "A temporary table",
          "An index type",
          "A view"
        ],
        "correct": "Precompiled SQL statements stored in database",
        "topic": "Stored Procedures"
      }
    ]
  },
  "Docker": {
    "easy": [
      {
        "question": "What is the difference between a container and a VM?",
        "options": [
          "Containers share the host OS kernel, VMs have own OS",
          "No difference",
          "Containers are heavier",
          "VMs are faster"
        ],
        "correct": "Containers share the host OS kernel, VMs have own OS",
        "topic": "Containers vs VMs"
      },
      {
        "question": "What is a Docker image?",
        "options": [
          "A read-only template for creating containers",
          "A running process",
          "A virtual machine",
          "A configuration file"
        ],
        "correct": "A read-only template for creating containers",
        "topic": "Docker Images"
      },
      {
        "question": "What file defines a Docker image?",
        "options": [
          "Dockerfile",
          "docker-compose.yml",
          "package.json",
          "config.yaml"
        ],
        "correct": "Dockerfile",
        "topic": "Dockerfile"
      },
      {
        "question": "Which command lists running containers?",
        "options": [
          "docker ps",
          "docker list",
          "docker show",
          "docker running"
        ],
        "correct": "docker ps",
        "topic": "Docker CLI"
      },
      {
        "question": "How do you map port 8080 on host to 80 in container?",
        "options": [
          "docker run -p 8080:80",
          "docker run -port 8080:80",
          "docker run --map 8080:80",
          "docker run -P 8080"
        ],
        "correct": "docker run -p 8080:80",
        "topic": "Port Mapping"
      }
    ],
    "medium": [
      {
        "question": "What is Docker Compose used for?",
        "options": [
          "Defining and running multi-container applications",
          "Building images",
          "Managing Docker Hub",
          "Monitoring containers"
        ],
        "correct": "Defining and running multi-container applications",
        "topic": "Docker Compose"
      },
      {
        "question": "What are Docker volumes?",
        "options": [
          "Persistent data storage for containers",
          "Container logs",
          "Network interfaces",
          "Image layers"
        ],
        "correct": "Persistent data storage for containers",
        "topic": "Volumes"
      },
      {
        "question": "Which network driver is default in Docker?",
        "options": [
          "bridge",
          "host",
          "overlay",
          "none"
        ],
        "correct": "bridge",
        "topic": "Networking"
      },
      {
        "question": "What is a multi-stage build?",
        "options": [
          "Using multiple FROM statements to reduce image size",
          "Building multiple containers",
          "Running parallel builds",
          "Using Docker Compose"
        ],
        "correct": "Using multiple FROM statements to reduce image size",
        "topic": "Multi-Stage Builds"
      },
      {
        "question": "How do you pass environment variables to a container?",
        "options": [
          "Using -e flag or --env-file",
          "Using -v flag",
          "Using -p flag",
          "Using --config"
        ],
        "correct": "Using -e flag or --env-file",
        "topic": "Environment Variables"
      }
    ],
    "hard": [
      {
        "question": "What is Docker Swarm?",
        "options": [
          "Native clustering and orchestration for Docker",
          "A monitoring tool",
          "An image registry",
          "A build tool"
        ],
        "correct": "Native clustering and orchestration for Docker",
        "topic": "Docker Swarm"
      },
      {
        "question": "What is container orchestration?",
        "options": [
          "Automated management of containerized applications",
          "Manual container deployment",
          "Image building",
          "Log management"
        ],
        "correct": "Automated management of containerized applications",
        "topic": "Container Orchestration"
      },
      {
        "question": "How can you reduce Docker image size?",
        "options": [
          "Use alpine base images and multi-stage builds",
          "Add more layers",
          "Use Ubuntu base",
          "Include dev dependencies"
        ],
        "correct": "Use alpine base images and multi-stage builds",
        "topic": "Image Optimization"
      },
      {
        "question": "How do you scan Docker images for vulnerabilities?",
        "options": [
          "docker scout or Trivy",
          "docker ps",
          "docker logs",
          "docker inspect"
        ],
        "correct": "docker scout or Trivy",
        "topic": "Security Best Practices"
      },
      {
        "question": "How do you integrate Docker with CI/CD?",
        "options": [
          "Build and push images in pipeline stages",
          "Run docker manually",
          "Use Docker Desktop only",
          "Skip testing"
        ],
        "correct": "Build and push images in pipeline stages",
        "topic": "CI/CD Integration"
      }
    ]
  },
  "JavaScript": {
    "easy": [
      {
        "question": "Which keyword declares a block-scoped variable?",
        "options": [
          "let",
          "var",
          "global",
          "define"
        ],
        "correct": "let",
        "topic": "Variables"
      },
      {
        "question": "What is typeof null?",
        "options": [
          "object",
          "null",
          "undefined",
          "number"
        ],
        "correct": "object",
        "topic": "Data Types"
      },
      {
        "question": "What is a callback function?",
        "options": [
          "A function passed as argument to another function",
          "A recursive function",
          "A constructor",
          "An arrow function"
        ],
        "correct": "A function passed as argument to another function",
        "topic": "Functions"
      },
      {
        "question": "Which method adds an element to end of array?",
        "options": [
          "push()",
          "pop()",
          "shift()",
          "unshift()"
        ],
        "correct": "push()",
        "topic": "Arrays"
      },
      {
        "question": "What does document.getElementById() return?",
        "options": [
          "A DOM element or null",
          "An array",
          "A string",
          "A number"
        ],
        "correct": "A DOM element or null",
        "topic": "DOM Basics"
      }
    ],
    "medium": [
      {
        "question": "What is a closure?",
        "options": [
          "A function that retains access to outer scope variables",
          "A loop",
          "A class",
          "An error handler"
        ],
        "correct": "A function that retains access to outer scope variables",
        "topic": "Closures"
      },
      {
        "question": "What does a Promise represent?",
        "options": [
          "An eventual completion or failure of an async operation",
          "A synchronous value",
          "A callback function",
          "A timer"
        ],
        "correct": "An eventual completion or failure of an async operation",
        "topic": "Promises"
      },
      {
        "question": "What is prototypal inheritance?",
        "options": [
          "Objects inheriting directly from other objects",
          "Class-based inheritance",
          "No inheritance",
          "Copy-based inheritance"
        ],
        "correct": "Objects inheriting directly from other objects",
        "topic": "Prototypes"
      },
      {
        "question": "What does the spread operator (...) do?",
        "options": [
          "Expands an iterable into individual elements",
          "Compresses data",
          "Creates a loop",
          "Deletes elements"
        ],
        "correct": "Expands an iterable into individual elements",
        "topic": "ES6 Features"
      },
      {
        "question": "Which statement is used to handle errors?",
        "options": [
          "try...catch",
          "if...else",
          "for...in",
          "switch...case"
        ],
        "correct": "try...catch",
        "topic": "Error Handling"
      }
    ],
    "hard": [
      {
        "question": "What is the order of the event loop phases?",
        "options": [
          "Timers, I/O callbacks, idle, poll, check, close",
          "Random order",
          "Synchronous only",
          "Single phase"
        ],
        "correct": "Timers, I/O callbacks, idle, poll, check, close",
        "topic": "Event Loop"
      },
      {
        "question": "What does function* define?",
        "options": [
          "A generator function",
          "An async function",
          "A class",
          "A module"
        ],
        "correct": "A generator function",
        "topic": "Generators"
      },
      {
        "question": "What is a Proxy in JavaScript?",
        "options": [
          "An object that wraps another to intercept operations",
          "A network proxy",
          "A design pattern only",
          "A polyfill"
        ],
        "correct": "An object that wraps another to intercept operations",
        "topic": "Proxy/Reflect"
      },
      {
        "question": "When would you use WeakMap over Map?",
        "options": [
          "When keys should be garbage-collectible",
          "When you need iteration",
          "When keys are strings",
          "For better performance always"
        ],
        "correct": "When keys should be garbage-collectible",
        "topic": "WeakMap/WeakSet"
      },
      {
        "question": "What causes memory leaks in JavaScript?",
        "options": [
          "Uncleared timers, closures holding references, detached DOM",
          "Using const",
          "Using arrays",
          "Using functions"
        ],
        "correct": "Uncleared timers, closures holding references, detached DOM",
        "topic": "Memory Management"
      }
    ]
  },
  "Java": {
    "easy": [
      {
        "question": "What are the four pillars of OOP?",
        "options": [
          "Encapsulation, Inheritance, Polymorphism, Abstraction",
          "Variables, Functions, Classes, Objects",
          "Arrays, Lists, Maps, Sets",
          "None"
        ],
        "correct": "Encapsulation, Inheritance, Polymorphism, Abstraction",
        "topic": "OOP Basics"
      },
      {
        "question": "Which is a primitive data type in Java?",
        "options": [
          "int",
          "String",
          "Integer",
          "Array"
        ],
        "correct": "int",
        "topic": "Data Types"
      },
      {
        "question": "Which loop is entry-controlled?",
        "options": [
          "for",
          "do-while",
          "None",
          "All loops"
        ],
        "correct": "for",
        "topic": "Control Flow"
      },
      {
        "question": "What is the default value of an int array element?",
        "options": [
          "0",
          "null",
          "undefined",
          "1"
        ],
        "correct": "0",
        "topic": "Arrays"
      },
      {
        "question": "Which class is immutable in Java?",
        "options": [
          "String",
          "StringBuilder",
          "StringBuffer",
          "Array"
        ],
        "correct": "String",
        "topic": "Strings"
      }
    ],
    "medium": [
      {
        "question": "Which interface does ArrayList implement?",
        "options": [
          "List",
          "Set",
          "Map",
          "Queue"
        ],
        "correct": "List",
        "topic": "Collections"
      },
      {
        "question": "What is the difference between checked and unchecked exceptions?",
        "options": [
          "Checked must be handled at compile time",
          "No difference",
          "Unchecked must be caught",
          "Checked are runtime only"
        ],
        "correct": "Checked must be handled at compile time",
        "topic": "Exception Handling"
      },
      {
        "question": "What are generics used for?",
        "options": [
          "Type-safe collections and methods",
          "File handling",
          "Thread management",
          "Memory management"
        ],
        "correct": "Type-safe collections and methods",
        "topic": "Generics"
      },
      {
        "question": "Which method starts a thread?",
        "options": [
          "start()",
          "run()",
          "execute()",
          "begin()"
        ],
        "correct": "start()",
        "topic": "Multithreading"
      },
      {
        "question": "What does stream().filter() do?",
        "options": [
          "Returns elements matching a predicate",
          "Sorts elements",
          "Maps elements",
          "Counts elements"
        ],
        "correct": "Returns elements matching a predicate",
        "topic": "Streams API"
      }
    ],
    "hard": [
      {
        "question": "What does the JVM do?",
        "options": [
          "Executes bytecode on any platform",
          "Compiles source code",
          "Manages files",
          "Creates GUIs"
        ],
        "correct": "Executes bytecode on any platform",
        "topic": "JVM Internals"
      },
      {
        "question": "Which GC algorithm does G1 use?",
        "options": [
          "Region-based concurrent collector",
          "Reference counting",
          "Mark and sweep only",
          "Manual deallocation"
        ],
        "correct": "Region-based concurrent collector",
        "topic": "Garbage Collection"
      },
      {
        "question": "What is the Singleton pattern?",
        "options": [
          "Ensures only one instance of a class exists",
          "Creates multiple instances",
          "A factory method",
          "An observer pattern"
        ],
        "correct": "Ensures only one instance of a class exists",
        "topic": "Design Patterns"
      },
      {
        "question": "What does synchronized keyword do?",
        "options": [
          "Ensures only one thread accesses a block at a time",
          "Speeds up execution",
          "Creates threads",
          "Stops threads"
        ],
        "correct": "Ensures only one thread accesses a block at a time",
        "topic": "Concurrency"
      },
      {
        "question": "What is the Java Memory Model?",
        "options": [
          "Rules for how threads interact through memory",
          "RAM allocation",
          "Heap size config",
          "Disk storage"
        ],
        "correct": "Rules for how threads interact through memory",
        "topic": "Memory Model"
      }
    ]
  },
  "DSA": {
    "easy": [
      {
        "question": "What is the time complexity of array access by index?",
        "options": [
          "O(1)",
          "O(n)",
          "O(log n)",
          "O(n^2)"
        ],
        "correct": "O(1)",
        "topic": "Arrays"
      },
      {
        "question": "What is a linked list?",
        "options": [
          "A linear data structure with nodes pointing to next",
          "An array",
          "A tree",
          "A graph"
        ],
        "correct": "A linear data structure with nodes pointing to next",
        "topic": "Linked Lists"
      },
      {
        "question": "Which data structure uses LIFO?",
        "options": [
          "Stack",
          "Queue",
          "Array",
          "Tree"
        ],
        "correct": "Stack",
        "topic": "Stacks"
      },
      {
        "question": "Which data structure uses FIFO?",
        "options": [
          "Queue",
          "Stack",
          "Heap",
          "Graph"
        ],
        "correct": "Queue",
        "topic": "Queues"
      },
      {
        "question": "What does O(n) mean?",
        "options": [
          "Linear time complexity",
          "Constant time",
          "Quadratic time",
          "Logarithmic time"
        ],
        "correct": "Linear time complexity",
        "topic": "Big-O Notation"
      }
    ],
    "medium": [
      {
        "question": "What is the max number of children in a binary tree node?",
        "options": [
          "2",
          "1",
          "3",
          "Unlimited"
        ],
        "correct": "2",
        "topic": "Binary Trees"
      },
      {
        "question": "What is the time complexity of merge sort?",
        "options": [
          "O(n log n)",
          "O(n^2)",
          "O(n)",
          "O(log n)"
        ],
        "correct": "O(n log n)",
        "topic": "Sorting Algorithms"
      },
      {
        "question": "What is the average time complexity of hash table lookup?",
        "options": [
          "O(1)",
          "O(n)",
          "O(log n)",
          "O(n^2)"
        ],
        "correct": "O(1)",
        "topic": "Hash Tables"
      },
      {
        "question": "What is the base case in recursion?",
        "options": [
          "The condition that stops recursive calls",
          "The first call",
          "An infinite loop",
          "A return type"
        ],
        "correct": "The condition that stops recursive calls",
        "topic": "Recursion"
      },
      {
        "question": "What is BFS?",
        "options": [
          "Traversal exploring all neighbors before going deeper",
          "Depth-first traversal",
          "A sorting algorithm",
          "A search tree"
        ],
        "correct": "Traversal exploring all neighbors before going deeper",
        "topic": "BFS/DFS"
      }
    ],
    "hard": [
      {
        "question": "What is dynamic programming?",
        "options": [
          "Solving problems by breaking into overlapping subproblems",
          "A programming language",
          "A design pattern",
          "Random algorithm"
        ],
        "correct": "Solving problems by breaking into overlapping subproblems",
        "topic": "Dynamic Programming"
      },
      {
        "question": "What is Dijkstra's algorithm used for?",
        "options": [
          "Shortest path in weighted graph",
          "Sorting",
          "Searching",
          "Tree traversal"
        ],
        "correct": "Shortest path in weighted graph",
        "topic": "Graphs"
      },
      {
        "question": "What is a Trie used for?",
        "options": [
          "Efficient prefix-based string searching",
          "Number sorting",
          "Graph traversal",
          "Memory management"
        ],
        "correct": "Efficient prefix-based string searching",
        "topic": "Tries"
      },
      {
        "question": "What characterizes a greedy algorithm?",
        "options": [
          "Makes locally optimal choice at each step",
          "Explores all possibilities",
          "Uses random choices",
          "Always finds global optimum"
        ],
        "correct": "Makes locally optimal choice at each step",
        "topic": "Greedy Algorithms"
      },
      {
        "question": "What is a segment tree used for?",
        "options": [
          "Range queries and updates efficiently",
          "Sorting data",
          "String matching",
          "Graph coloring"
        ],
        "correct": "Range queries and updates efficiently",
        "topic": "Segment Trees"
      }
    ]
  },
  "AWS": {
    "easy": [
      {
        "question": "What is EC2?",
        "options": [
          "Virtual servers in the cloud",
          "A database service",
          "A storage service",
          "A networking service"
        ],
        "correct": "Virtual servers in the cloud",
        "topic": "EC2"
      },
      {
        "question": "What is S3 used for?",
        "options": [
          "Object storage",
          "Compute",
          "Networking",
          "Database"
        ],
        "correct": "Object storage",
        "topic": "S3"
      },
      {
        "question": "What does IAM stand for?",
        "options": [
          "Identity and Access Management",
          "Internet Access Module",
          "Integrated App Manager",
          "Internal Auth Method"
        ],
        "correct": "Identity and Access Management",
        "topic": "IAM"
      },
      {
        "question": "What is an AWS Region?",
        "options": [
          "A geographical area with multiple data centers",
          "A single server",
          "A virtual network",
          "An IP address"
        ],
        "correct": "A geographical area with multiple data centers",
        "topic": "Regions/AZs"
      },
      {
        "question": "What does CloudWatch do?",
        "options": [
          "Monitors AWS resources and applications",
          "Stores files",
          "Manages DNS",
          "Creates VPCs"
        ],
        "correct": "Monitors AWS resources and applications",
        "topic": "CloudWatch"
      }
    ],
    "medium": [
      {
        "question": "What is AWS Lambda?",
        "options": [
          "Serverless compute that runs code without servers",
          "A virtual machine",
          "A container service",
          "A database"
        ],
        "correct": "Serverless compute that runs code without servers",
        "topic": "Lambda"
      },
      {
        "question": "What is API Gateway?",
        "options": [
          "A service to create and manage APIs",
          "A firewall",
          "A load balancer",
          "A CDN"
        ],
        "correct": "A service to create and manage APIs",
        "topic": "API Gateway"
      },
      {
        "question": "What is RDS?",
        "options": [
          "A managed relational database service",
          "A file storage",
          "A compute service",
          "A messaging queue"
        ],
        "correct": "A managed relational database service",
        "topic": "RDS"
      },
      {
        "question": "What is a VPC?",
        "options": [
          "A virtual private network in AWS cloud",
          "A physical network",
          "A DNS service",
          "A CDN"
        ],
        "correct": "A virtual private network in AWS cloud",
        "topic": "VPC"
      },
      {
        "question": "What is the difference between SQS and SNS?",
        "options": [
          "SQS is a queue service, SNS is pub/sub notifications",
          "They are the same",
          "SQS is for email, SNS for SMS",
          "SQS is faster"
        ],
        "correct": "SQS is a queue service, SNS is pub/sub notifications",
        "topic": "SQS/SNS"
      }
    ],
    "hard": [
      {
        "question": "What is Auto Scaling?",
        "options": [
          "Automatically adjusts capacity based on demand",
          "Manual scaling",
          "Fixed server count",
          "Load balancing only"
        ],
        "correct": "Automatically adjusts capacity based on demand",
        "topic": "Auto Scaling"
      },
      {
        "question": "What is CloudFormation?",
        "options": [
          "Infrastructure as Code service for AWS",
          "A monitoring tool",
          "A database",
          "A CDN"
        ],
        "correct": "Infrastructure as Code service for AWS",
        "topic": "CloudFormation"
      },
      {
        "question": "What is the difference between ECS and EKS?",
        "options": [
          "ECS is AWS-native containers, EKS is managed Kubernetes",
          "They are identical",
          "ECS is for VMs",
          "EKS is serverless only"
        ],
        "correct": "ECS is AWS-native containers, EKS is managed Kubernetes",
        "topic": "ECS/EKS"
      },
      {
        "question": "How can you optimize AWS costs?",
        "options": [
          "Use Reserved Instances, right-sizing, and Spot Instances",
          "Use largest instances",
          "Never use auto-scaling",
          "Ignore unused resources"
        ],
        "correct": "Use Reserved Instances, right-sizing, and Spot Instances",
        "topic": "Cost Optimization"
      },
      {
        "question": "What is a multi-AZ deployment?",
        "options": [
          "Running instances across availability zones for HA",
          "Using one server",
          "A CDN setup",
          "A DNS config"
        ],
        "correct": "Running instances across availability zones for HA",
        "topic": "Disaster Recovery"
      }
    ]
  },
  "TypeScript": {
    "easy": [
      {
        "question": "How do you annotate a variable type?",
        "options": [
          "let x: number = 5",
          "let x = 5 as number",
          "var x number = 5",
          "type x = 5"
        ],
        "correct": "let x: number = 5",
        "topic": "Type Annotations"
      },
      {
        "question": "What is an interface in TypeScript?",
        "options": [
          "A contract that defines object shape",
          "A class",
          "A function",
          "A module"
        ],
        "correct": "A contract that defines object shape",
        "topic": "Interfaces"
      },
      {
        "question": "What are enums?",
        "options": [
          "Named constants for a set of values",
          "Arrays",
          "Objects",
          "Functions"
        ],
        "correct": "Named constants for a set of values",
        "topic": "Enums"
      },
      {
        "question": "Which is a basic type in TypeScript?",
        "options": [
          "string",
          "str",
          "text",
          "varchar"
        ],
        "correct": "string",
        "topic": "Basic Types"
      },
      {
        "question": "What is type inference?",
        "options": [
          "TypeScript automatically determines types",
          "Manual type assignment",
          "Type casting",
          "Type checking at runtime"
        ],
        "correct": "TypeScript automatically determines types",
        "topic": "Type Inference"
      }
    ],
    "medium": [
      {
        "question": "What are generics?",
        "options": [
          "Reusable components that work with multiple types",
          "Specific types",
          "Type aliases",
          "Enums"
        ],
        "correct": "Reusable components that work with multiple types",
        "topic": "Generics"
      },
      {
        "question": "What is a union type?",
        "options": [
          "A type that can be one of several types (A | B)",
          "A single type",
          "An intersection",
          "A tuple"
        ],
        "correct": "A type that can be one of several types (A | B)",
        "topic": "Union Types"
      },
      {
        "question": "What is a type guard?",
        "options": [
          "Runtime check that narrows a type within a scope",
          "A security feature",
          "An error handler",
          "A compiler flag"
        ],
        "correct": "Runtime check that narrows a type within a scope",
        "topic": "Type Guards"
      },
      {
        "question": "What does Partial<T> do?",
        "options": [
          "Makes all properties of T optional",
          "Makes all required",
          "Removes properties",
          "Adds properties"
        ],
        "correct": "Makes all properties of T optional",
        "topic": "Utility Types"
      },
      {
        "question": "What are decorators in TypeScript?",
        "options": [
          "Special declarations attached to classes/methods",
          "Comments",
          "Type annotations",
          "Import statements"
        ],
        "correct": "Special declarations attached to classes/methods",
        "topic": "Decorators"
      }
    ],
    "hard": [
      {
        "question": "What are mapped types?",
        "options": [
          "Types created by transforming properties of existing types",
          "Enum types",
          "Basic types",
          "Function types"
        ],
        "correct": "Types created by transforming properties of existing types",
        "topic": "Mapped Types"
      },
      {
        "question": "What is a conditional type?",
        "options": [
          "A type that selects one of two types based on condition",
          "An if statement",
          "A union type",
          "A generic"
        ],
        "correct": "A type that selects one of two types based on condition",
        "topic": "Conditional Types"
      },
      {
        "question": "What are template literal types?",
        "options": [
          "Types built from string literal combinations",
          "Regular strings",
          "Template strings",
          "Type aliases"
        ],
        "correct": "Types built from string literal combinations",
        "topic": "Template Literals"
      },
      {
        "question": "What is type narrowing?",
        "options": [
          "Refining types to more specific types using checks",
          "Type widening",
          "Type casting",
          "Type deletion"
        ],
        "correct": "Refining types to more specific types using checks",
        "topic": "Type Narrowing"
      },
      {
        "question": "What is module augmentation?",
        "options": [
          "Extending existing module declarations",
          "Creating new modules",
          "Deleting modules",
          "Renaming modules"
        ],
        "correct": "Extending existing module declarations",
        "topic": "Module Augmentation"
      }
    ]
  },
  "MongoDB": {
    "easy": [
      {
        "question": "What is a document in MongoDB?",
        "options": [
          "A JSON-like data record",
          "A SQL table row",
          "A file",
          "A collection"
        ],
        "correct": "A JSON-like data record",
        "topic": "Documents"
      },
      {
        "question": "What is a collection?",
        "options": [
          "A group of MongoDB documents",
          "A single document",
          "A database",
          "An index"
        ],
        "correct": "A group of MongoDB documents",
        "topic": "Collections"
      },
      {
        "question": "Which method inserts a document?",
        "options": [
          "insertOne()",
          "add()",
          "create()",
          "push()"
        ],
        "correct": "insertOne()",
        "topic": "CRUD Operations"
      },
      {
        "question": "What data format does MongoDB use?",
        "options": [
          "BSON (Binary JSON)",
          "XML",
          "CSV",
          "SQL"
        ],
        "correct": "BSON (Binary JSON)",
        "topic": "Data Types"
      },
      {
        "question": "Which tool is the MongoDB interactive shell?",
        "options": [
          "mongosh",
          "mysql",
          "psql",
          "redis-cli"
        ],
        "correct": "mongosh",
        "topic": "MongoDB Shell"
      }
    ],
    "medium": [
      {
        "question": "What is the aggregation pipeline?",
        "options": [
          "A framework for data processing through stages",
          "A simple query",
          "An index",
          "A backup tool"
        ],
        "correct": "A framework for data processing through stages",
        "topic": "Aggregation"
      },
      {
        "question": "Why are indexes important in MongoDB?",
        "options": [
          "They speed up query performance",
          "They store data",
          "They create backups",
          "They compress data"
        ],
        "correct": "They speed up query performance",
        "topic": "Indexing"
      },
      {
        "question": "When should you embed vs reference documents?",
        "options": [
          "Embed for 1:few, reference for 1:many",
          "Always embed",
          "Always reference",
          "Never embed"
        ],
        "correct": "Embed for 1:few, reference for 1:many",
        "topic": "Schema Design"
      },
      {
        "question": "What is Mongoose?",
        "options": [
          "An ODM library for MongoDB and Node.js",
          "A database",
          "A query language",
          "A driver"
        ],
        "correct": "An ODM library for MongoDB and Node.js",
        "topic": "Mongoose ODM"
      },
      {
        "question": "What is the difference between embedded and referenced?",
        "options": [
          "Embedded stores data within, referenced links via IDs",
          "No difference",
          "Embedded is slower",
          "Referenced is always better"
        ],
        "correct": "Embedded stores data within, referenced links via IDs",
        "topic": "Embedded vs Referenced"
      }
    ],
    "hard": [
      {
        "question": "What is sharding?",
        "options": [
          "Distributing data across multiple servers",
          "Creating indexes",
          "Backing up data",
          "Compressing data"
        ],
        "correct": "Distributing data across multiple servers",
        "topic": "Sharding"
      },
      {
        "question": "What is a replica set?",
        "options": [
          "A group of mongod instances maintaining same data",
          "A single server",
          "A collection",
          "An index"
        ],
        "correct": "A group of mongod instances maintaining same data",
        "topic": "Replication"
      },
      {
        "question": "Does MongoDB support multi-document transactions?",
        "options": [
          "Yes, since version 4.0",
          "No",
          "Only single document",
          "Only with SQL"
        ],
        "correct": "Yes, since version 4.0",
        "topic": "Transactions"
      },
      {
        "question": "How do you optimize slow MongoDB queries?",
        "options": [
          "Use explain(), proper indexes, and projection",
          "Add more data",
          "Remove indexes",
          "Use SELECT *"
        ],
        "correct": "Use explain(), proper indexes, and projection",
        "topic": "Performance Tuning"
      },
      {
        "question": "What are change streams?",
        "options": [
          "Real-time notifications of data changes",
          "Static reports",
          "Backup streams",
          "Log files"
        ],
        "correct": "Real-time notifications of data changes",
        "topic": "Change Streams"
      }
    ]
  },
  "Django": {
    "easy": [
      {
        "question": "What does MVT stand for?",
        "options": [
          "Model-View-Template",
          "Model-View-Table",
          "Main-View-Template",
          "Module-View-Type"
        ],
        "correct": "Model-View-Template",
        "topic": "MVT Architecture"
      },
      {
        "question": "Where are URL patterns defined?",
        "options": [
          "urls.py",
          "views.py",
          "models.py",
          "settings.py"
        ],
        "correct": "urls.py",
        "topic": "URL Routing"
      },
      {
        "question": "What template engine does Django use by default?",
        "options": [
          "Django Template Language (DTL)",
          "Jinja2",
          "Mako",
          "Handlebars"
        ],
        "correct": "Django Template Language (DTL)",
        "topic": "Templates"
      },
      {
        "question": "What does a Django model represent?",
        "options": [
          "A database table",
          "A URL pattern",
          "A template",
          "A view"
        ],
        "correct": "A database table",
        "topic": "Models"
      },
      {
        "question": "What is Django Admin?",
        "options": [
          "An auto-generated admin interface for models",
          "A CLI tool",
          "A testing framework",
          "A deployment tool"
        ],
        "correct": "An auto-generated admin interface for models",
        "topic": "Admin Panel"
      }
    ],
    "medium": [
      {
        "question": "How do you filter querysets?",
        "options": [
          "Model.objects.filter()",
          "Model.select()",
          "Model.query()",
          "Model.find()"
        ],
        "correct": "Model.objects.filter()",
        "topic": "ORM Queries"
      },
      {
        "question": "What is a ModelForm?",
        "options": [
          "A form automatically generated from a model",
          "A database model",
          "A template tag",
          "A URL pattern"
        ],
        "correct": "A form automatically generated from a model",
        "topic": "Forms"
      },
      {
        "question": "What are class-based views?",
        "options": [
          "Views implemented as Python classes",
          "Functions",
          "Templates",
          "Models"
        ],
        "correct": "Views implemented as Python classes",
        "topic": "Class-Based Views"
      },
      {
        "question": "Which module handles user authentication?",
        "options": [
          "django.contrib.auth",
          "django.auth",
          "django.users",
          "django.login"
        ],
        "correct": "django.contrib.auth",
        "topic": "Authentication"
      },
      {
        "question": "What is Django middleware?",
        "options": [
          "Hooks into request/response processing",
          "Database models",
          "Template tags",
          "URL patterns"
        ],
        "correct": "Hooks into request/response processing",
        "topic": "Middleware"
      }
    ],
    "hard": [
      {
        "question": "What is a custom model manager?",
        "options": [
          "A class that modifies default QuerySet behavior",
          "A view",
          "A template",
          "A form"
        ],
        "correct": "A class that modifies default QuerySet behavior",
        "topic": "Custom Managers"
      },
      {
        "question": "What are Django signals?",
        "options": [
          "Notifications sent when certain actions occur",
          "HTTP signals",
          "Database triggers",
          "Template events"
        ],
        "correct": "Notifications sent when certain actions occur",
        "topic": "Signals"
      },
      {
        "question": "How does Django implement caching?",
        "options": [
          "Using cache framework with multiple backends",
          "No caching support",
          "Only file caching",
          "Only memory caching"
        ],
        "correct": "Using cache framework with multiple backends",
        "topic": "Caching"
      },
      {
        "question": "What is Django REST Framework?",
        "options": [
          "A toolkit for building Web APIs",
          "A frontend library",
          "A database ORM",
          "A template engine"
        ],
        "correct": "A toolkit for building Web APIs",
        "topic": "REST Framework"
      },
      {
        "question": "How do you optimize Django queries?",
        "options": [
          "Using select_related, prefetch_related, and indexing",
          "Adding more models",
          "Removing views",
          "Using raw SQL only"
        ],
        "correct": "Using select_related, prefetch_related, and indexing",
        "topic": "Query Optimization"
      }
    ]
  },
  "Flask": {
    "easy": [
      {
        "question": "What is Flask?",
        "options": [
          "A lightweight Python web framework",
          "A database",
          "A frontend library",
          "An ORM"
        ],
        "correct": "A lightweight Python web framework",
        "topic": "Flask Basics"
      },
      {
        "question": "How do you define a route in Flask?",
        "options": [
          "@app.route('/path')",
          "@route('/path')",
          "app.url('/path')",
          "flask.path('/path')"
        ],
        "correct": "@app.route('/path')",
        "topic": "Routing"
      },
      {
        "question": "Which template engine does Flask use?",
        "options": [
          "Jinja2",
          "Django Template Language",
          "Mako",
          "Handlebars"
        ],
        "correct": "Jinja2",
        "topic": "Templates"
      },
      {
        "question": "How do you access form data in Flask?",
        "options": [
          "request.form['key']",
          "request.data['key']",
          "request.body['key']",
          "request.get('key')"
        ],
        "correct": "request.form['key']",
        "topic": "Request Object"
      },
      {
        "question": "Where are static files stored by default?",
        "options": [
          "static/ folder",
          "public/ folder",
          "assets/ folder",
          "files/ folder"
        ],
        "correct": "static/ folder",
        "topic": "Static Files"
      }
    ],
    "medium": [
      {
        "question": "What are Flask Blueprints?",
        "options": [
          "Modular components for organizing routes",
          "Database models",
          "Template files",
          "Configuration files"
        ],
        "correct": "Modular components for organizing routes",
        "topic": "Blueprints"
      },
      {
        "question": "What is SQLAlchemy in Flask context?",
        "options": [
          "An ORM for database operations",
          "A template engine",
          "A form library",
          "A testing tool"
        ],
        "correct": "An ORM for database operations",
        "topic": "SQLAlchemy"
      },
      {
        "question": "What is Flask-WTF?",
        "options": [
          "A forms library with CSRF protection",
          "A database tool",
          "A caching library",
          "An auth module"
        ],
        "correct": "A forms library with CSRF protection",
        "topic": "Flask-WTF"
      },
      {
        "question": "How are sessions managed in Flask?",
        "options": [
          "Using signed cookies by default",
          "Using database only",
          "Using files only",
          "No session support"
        ],
        "correct": "Using signed cookies by default",
        "topic": "Session Management"
      },
      {
        "question": "How do you create custom error handlers?",
        "options": [
          "@app.errorhandler(404)",
          "@app.error(404)",
          "@app.catch(404)",
          "app.on_error(404)"
        ],
        "correct": "@app.errorhandler(404)",
        "topic": "Error Handlers"
      }
    ],
    "hard": [
      {
        "question": "What is the application factory pattern?",
        "options": [
          "A function that creates and configures the Flask app",
          "A design pattern for models",
          "A testing pattern",
          "A deployment strategy"
        ],
        "correct": "A function that creates and configures the Flask app",
        "topic": "Application Factory"
      },
      {
        "question": "What is Flask-RESTful?",
        "options": [
          "An extension for building REST APIs quickly",
          "A database tool",
          "A template engine",
          "A form validator"
        ],
        "correct": "An extension for building REST APIs quickly",
        "topic": "Flask-RESTful"
      },
      {
        "question": "How do you add custom middleware in Flask?",
        "options": [
          "Using before_request/after_request decorators or WSGI middleware",
          "Using Django middleware",
          "Using Express middleware",
          "Not possible"
        ],
        "correct": "Using before_request/after_request decorators or WSGI middleware",
        "topic": "Custom Middleware"
      },
      {
        "question": "How to implement WebSockets in Flask?",
        "options": [
          "Using Flask-SocketIO extension",
          "Built-in support",
          "Using HTTP polling only",
          "Not possible"
        ],
        "correct": "Using Flask-SocketIO extension",
        "topic": "WebSockets"
      },
      {
        "question": "What is the recommended way to deploy Flask?",
        "options": [
          "Using Gunicorn/uWSGI behind Nginx",
          "Using flask run in production",
          "Using development server",
          "Using Apache only"
        ],
        "correct": "Using Gunicorn/uWSGI behind Nginx",
        "topic": "Deployment"
      }
    ]
  },
  "Git": {
    "easy": [
      {
        "question": "Which command initializes a Git repository?",
        "options": [
          "git init",
          "git start",
          "git create",
          "git new"
        ],
        "correct": "git init",
        "topic": "Basic Commands"
      },
      {
        "question": "What is the staging area?",
        "options": [
          "An intermediate area before committing changes",
          "The repository",
          "The working directory",
          "The remote"
        ],
        "correct": "An intermediate area before committing changes",
        "topic": "Staging Area"
      },
      {
        "question": "What does git commit do?",
        "options": [
          "Saves staged changes to local repository",
          "Pushes to remote",
          "Deletes files",
          "Creates a branch"
        ],
        "correct": "Saves staged changes to local repository",
        "topic": "Commits"
      },
      {
        "question": "How do you create a new branch?",
        "options": [
          "git branch branch-name",
          "git new branch-name",
          "git create branch-name",
          "git switch branch-name"
        ],
        "correct": "git branch branch-name",
        "topic": "Branching"
      },
      {
        "question": "What does git push do?",
        "options": [
          "Uploads local commits to remote repository",
          "Downloads from remote",
          "Merges branches",
          "Creates tags"
        ],
        "correct": "Uploads local commits to remote repository",
        "topic": "Remote Repos"
      }
    ],
    "medium": [
      {
        "question": "What is the difference between merge and rebase?",
        "options": [
          "Merge creates a merge commit, rebase rewrites history linearly",
          "No difference",
          "Merge is faster",
          "Rebase creates merge commits"
        ],
        "correct": "Merge creates a merge commit, rebase rewrites history linearly",
        "topic": "Merge vs Rebase"
      },
      {
        "question": "How do you resolve a merge conflict?",
        "options": [
          "Edit conflicted files, stage them, and commit",
          "Delete the branch",
          "Reset to origin",
          "Force push"
        ],
        "correct": "Edit conflicted files, stage them, and commit",
        "topic": "Conflict Resolution"
      },
      {
        "question": "What does git stash do?",
        "options": [
          "Temporarily saves uncommitted changes",
          "Deletes changes",
          "Commits changes",
          "Pushes changes"
        ],
        "correct": "Temporarily saves uncommitted changes",
        "topic": "Stashing"
      },
      {
        "question": "What is cherry-pick?",
        "options": [
          "Apply a specific commit from another branch",
          "Delete a commit",
          "Merge all commits",
          "Create a tag"
        ],
        "correct": "Apply a specific commit from another branch",
        "topic": "Cherry-Pick"
      },
      {
        "question": "What are Git hooks?",
        "options": [
          "Scripts that run on certain Git events",
          "Branches",
          "Tags",
          "Remote URLs"
        ],
        "correct": "Scripts that run on certain Git events",
        "topic": "Git Hooks"
      }
    ],
    "hard": [
      {
        "question": "What is interactive rebase?",
        "options": [
          "Rewriting commit history by editing, squashing, reordering",
          "A simple rebase",
          "A merge",
          "A cherry-pick"
        ],
        "correct": "Rewriting commit history by editing, squashing, reordering",
        "topic": "Interactive Rebase"
      },
      {
        "question": "What is git reflog?",
        "options": [
          "A log of all reference updates including deleted commits",
          "A commit log",
          "A branch list",
          "A tag list"
        ],
        "correct": "A log of all reference updates including deleted commits",
        "topic": "Reflog"
      },
      {
        "question": "What does git bisect do?",
        "options": [
          "Binary search through commits to find a bug",
          "Splits a branch",
          "Merges branches",
          "Creates tags"
        ],
        "correct": "Binary search through commits to find a bug",
        "topic": "Bisect"
      },
      {
        "question": "What are Git submodules?",
        "options": [
          "Repositories embedded inside other repositories",
          "Branches",
          "Tags",
          "Hooks"
        ],
        "correct": "Repositories embedded inside other repositories",
        "topic": "Submodules"
      },
      {
        "question": "What are Git worktrees?",
        "options": [
          "Multiple working directories for the same repo",
          "Branches",
          "Tags",
          "Remotes"
        ],
        "correct": "Multiple working directories for the same repo",
        "topic": "Worktrees"
      }
    ]
  },
  "C++": {
    "easy": [
      {
        "question": "Which operator is used for output in C++?",
        "options": [
          "<<",
          ">>",
          "->",
          "::"
        ],
        "correct": "<<",
        "topic": "Syntax Basics"
      },
      {
        "question": "What is the size of int in C++ (typically)?",
        "options": [
          "4 bytes",
          "2 bytes",
          "8 bytes",
          "1 byte"
        ],
        "correct": "4 bytes",
        "topic": "Data Types"
      },
      {
        "question": "What is a pointer?",
        "options": [
          "A variable that stores a memory address",
          "A data type",
          "A function",
          "An operator"
        ],
        "correct": "A variable that stores a memory address",
        "topic": "Pointers"
      },
      {
        "question": "How do you declare an array of 5 integers?",
        "options": [
          "int arr[5];",
          "array int[5];",
          "int[] arr = 5;",
          "arr = int(5);"
        ],
        "correct": "int arr[5];",
        "topic": "Arrays"
      },
      {
        "question": "What does void mean as a return type?",
        "options": [
          "The function returns nothing",
          "Returns null",
          "Returns 0",
          "Returns empty string"
        ],
        "correct": "The function returns nothing",
        "topic": "Functions"
      }
    ],
    "medium": [
      {
        "question": "What are the access specifiers in C++?",
        "options": [
          "public, private, protected",
          "open, closed, sealed",
          "read, write, execute",
          "static, dynamic, virtual"
        ],
        "correct": "public, private, protected",
        "topic": "OOP"
      },
      {
        "question": "What is the STL?",
        "options": [
          "Standard Template Library with containers and algorithms",
          "A compiler",
          "A debugger",
          "An IDE"
        ],
        "correct": "Standard Template Library with containers and algorithms",
        "topic": "STL"
      },
      {
        "question": "What are templates in C++?",
        "options": [
          "Generic programming with type parameters",
          "HTML files",
          "String literals",
          "Macro definitions"
        ],
        "correct": "Generic programming with type parameters",
        "topic": "Templates"
      },
      {
        "question": "How do you handle exceptions in C++?",
        "options": [
          "try-catch blocks",
          "if-else",
          "switch-case",
          "goto"
        ],
        "correct": "try-catch blocks",
        "topic": "Exception Handling"
      },
      {
        "question": "What is the difference between reference and pointer?",
        "options": [
          "References cannot be null or reassigned, pointers can",
          "No difference",
          "References are faster",
          "Pointers cannot be null"
        ],
        "correct": "References cannot be null or reassigned, pointers can",
        "topic": "References"
      }
    ],
    "hard": [
      {
        "question": "What are smart pointers?",
        "options": [
          "Objects that manage dynamic memory automatically",
          "Raw pointers",
          "Array pointers",
          "Function pointers"
        ],
        "correct": "Objects that manage dynamic memory automatically",
        "topic": "Smart Pointers"
      },
      {
        "question": "What is move semantics?",
        "options": [
          "Transferring resources instead of copying them",
          "Copying objects",
          "Deleting objects",
          "Creating objects"
        ],
        "correct": "Transferring resources instead of copying them",
        "topic": "Move Semantics"
      },
      {
        "question": "What is RAII?",
        "options": [
          "Resource Acquisition Is Initialization",
          "A design pattern",
          "A library",
          "A compiler flag"
        ],
        "correct": "Resource Acquisition Is Initialization",
        "topic": "RAII"
      },
      {
        "question": "How do you create a thread in C++11?",
        "options": [
          "std::thread t(function)",
          "pthread_create()",
          "fork()",
          "CreateThread()"
        ],
        "correct": "std::thread t(function)",
        "topic": "Multithreading"
      },
      {
        "question": "What are the segments of memory in C++?",
        "options": [
          "Stack, Heap, Code, Data, BSS",
          "Only Stack and Heap",
          "Only RAM",
          "Only Cache"
        ],
        "correct": "Stack, Heap, Code, Data, BSS",
        "topic": "Memory Layout"
      }
    ]
  },
  "Kubernetes": {
    "easy": [
      {
        "question": "What is a Pod?",
        "options": [
          "The smallest deployable unit in Kubernetes",
          "A node",
          "A cluster",
          "A service"
        ],
        "correct": "The smallest deployable unit in Kubernetes",
        "topic": "Pods"
      },
      {
        "question": "What is a Node in Kubernetes?",
        "options": [
          "A worker machine that runs pods",
          "A container",
          "A service",
          "A namespace"
        ],
        "correct": "A worker machine that runs pods",
        "topic": "Nodes"
      },
      {
        "question": "What is a Kubernetes cluster?",
        "options": [
          "A set of nodes running containerized applications",
          "A single container",
          "A database",
          "A network"
        ],
        "correct": "A set of nodes running containerized applications",
        "topic": "Clusters"
      },
      {
        "question": "What is kubectl?",
        "options": [
          "CLI tool to interact with Kubernetes",
          "A container runtime",
          "A web UI",
          "A monitoring tool"
        ],
        "correct": "CLI tool to interact with Kubernetes",
        "topic": "kubectl"
      },
      {
        "question": "What are namespaces used for?",
        "options": [
          "Isolating resources within a cluster",
          "Creating pods",
          "Managing storage",
          "Load balancing"
        ],
        "correct": "Isolating resources within a cluster",
        "topic": "Namespaces"
      }
    ],
    "medium": [
      {
        "question": "What is a Deployment?",
        "options": [
          "Manages ReplicaSets and provides declarative updates",
          "A single pod",
          "A service",
          "A volume"
        ],
        "correct": "Manages ReplicaSets and provides declarative updates",
        "topic": "Deployments"
      },
      {
        "question": "What is a Kubernetes Service?",
        "options": [
          "An abstraction to expose pods as a network service",
          "A deployment",
          "A container",
          "A namespace"
        ],
        "correct": "An abstraction to expose pods as a network service",
        "topic": "Services"
      },
      {
        "question": "What are ConfigMaps?",
        "options": [
          "Objects to store non-confidential configuration data",
          "Secrets",
          "Volumes",
          "Services"
        ],
        "correct": "Objects to store non-confidential configuration data",
        "topic": "ConfigMaps"
      },
      {
        "question": "What is an Ingress?",
        "options": [
          "Manages external HTTP/HTTPS access to services",
          "A pod type",
          "A volume",
          "A node"
        ],
        "correct": "Manages external HTTP/HTTPS access to services",
        "topic": "Ingress"
      },
      {
        "question": "What are Persistent Volumes?",
        "options": [
          "Storage resources provisioned independently of pods",
          "Temporary storage",
          "Memory",
          "CPU"
        ],
        "correct": "Storage resources provisioned independently of pods",
        "topic": "Volumes"
      }
    ],
    "hard": [
      {
        "question": "What are Helm Charts?",
        "options": [
          "Package manager for Kubernetes applications",
          "Docker images",
          "Pod templates",
          "Config files"
        ],
        "correct": "Package manager for Kubernetes applications",
        "topic": "Helm Charts"
      },
      {
        "question": "What are Custom Resource Definitions?",
        "options": [
          "Extensions of the Kubernetes API",
          "Built-in resources",
          "Node types",
          "Service types"
        ],
        "correct": "Extensions of the Kubernetes API",
        "topic": "Custom Resources"
      },
      {
        "question": "What is RBAC in Kubernetes?",
        "options": [
          "Role-Based Access Control for authorization",
          "A load balancer",
          "A storage class",
          "A network policy"
        ],
        "correct": "Role-Based Access Control for authorization",
        "topic": "RBAC"
      },
      {
        "question": "What are Network Policies?",
        "options": [
          "Rules controlling pod-to-pod communication",
          "Firewall rules",
          "DNS configs",
          "Load balancers"
        ],
        "correct": "Rules controlling pod-to-pod communication",
        "topic": "Network Policies"
      },
      {
        "question": "What is a Kubernetes Operator?",
        "options": [
          "Custom controller that manages complex applications",
          "A human operator",
          "A CLI tool",
          "A dashboard"
        ],
        "correct": "Custom controller that manages complex applications",
        "topic": "Operators"
      }
    ]
  },
  "TensorFlow": {
    "easy": [
      {
        "question": "What is a tensor?",
        "options": [
          "A multi-dimensional array of data",
          "A function",
          "A model",
          "A layer"
        ],
        "correct": "A multi-dimensional array of data",
        "topic": "Tensors"
      },
      {
        "question": "What is Keras?",
        "options": [
          "A high-level API for building neural networks",
          "A database",
          "A web framework",
          "A visualization tool"
        ],
        "correct": "A high-level API for building neural networks",
        "topic": "Keras Basics"
      },
      {
        "question": "What is a Sequential model?",
        "options": [
          "A linear stack of layers",
          "A graph model",
          "A random model",
          "A tree model"
        ],
        "correct": "A linear stack of layers",
        "topic": "Sequential Model"
      },
      {
        "question": "What is a Dense layer?",
        "options": [
          "A fully connected neural network layer",
          "A convolutional layer",
          "An input layer",
          "A dropout layer"
        ],
        "correct": "A fully connected neural network layer",
        "topic": "Layers"
      },
      {
        "question": "What does a loss function measure?",
        "options": [
          "The difference between predicted and actual values",
          "Model accuracy",
          "Training speed",
          "Data size"
        ],
        "correct": "The difference between predicted and actual values",
        "topic": "Loss Functions"
      }
    ],
    "medium": [
      {
        "question": "What is a CNN used for?",
        "options": [
          "Image recognition and classification",
          "Text processing only",
          "Audio only",
          "Tabular data only"
        ],
        "correct": "Image recognition and classification",
        "topic": "CNNs"
      },
      {
        "question": "What is transfer learning?",
        "options": [
          "Using a pre-trained model for a new task",
          "Training from scratch",
          "Data augmentation",
          "Hyperparameter tuning"
        ],
        "correct": "Using a pre-trained model for a new task",
        "topic": "Transfer Learning"
      },
      {
        "question": "What are callbacks in Keras?",
        "options": [
          "Functions called during training for monitoring/control",
          "Loss functions",
          "Optimizers",
          "Layers"
        ],
        "correct": "Functions called during training for monitoring/control",
        "topic": "Callbacks"
      },
      {
        "question": "What is tf.data used for?",
        "options": [
          "Building efficient input data pipelines",
          "Creating models",
          "Evaluating models",
          "Deploying models"
        ],
        "correct": "Building efficient input data pipelines",
        "topic": "Data Pipelines"
      },
      {
        "question": "What is dropout?",
        "options": [
          "A regularization technique that randomly deactivates neurons",
          "A layer type",
          "An optimizer",
          "A loss function"
        ],
        "correct": "A regularization technique that randomly deactivates neurons",
        "topic": "Regularization"
      }
    ],
    "hard": [
      {
        "question": "What is a custom training loop?",
        "options": [
          "Manually controlling forward pass, loss, and gradient updates",
          "Using model.fit()",
          "Using AutoML",
          "Using pre-trained models"
        ],
        "correct": "Manually controlling forward pass, loss, and gradient updates",
        "topic": "Custom Training Loops"
      },
      {
        "question": "What is TensorFlow Serving?",
        "options": [
          "A system for serving ML models in production",
          "A training tool",
          "A data pipeline",
          "A visualization tool"
        ],
        "correct": "A system for serving ML models in production",
        "topic": "TF Serving"
      },
      {
        "question": "What is distributed training?",
        "options": [
          "Training models across multiple GPUs/machines",
          "Training on one GPU",
          "Transfer learning",
          "Data augmentation"
        ],
        "correct": "Training models across multiple GPUs/machines",
        "topic": "Distributed Training"
      },
      {
        "question": "How do you optimize a TF model for production?",
        "options": [
          "Quantization, pruning, and graph optimization",
          "Adding more layers",
          "Using larger batches",
          "Increasing epochs"
        ],
        "correct": "Quantization, pruning, and graph optimization",
        "topic": "Model Optimization"
      },
      {
        "question": "What is TensorFlow Lite?",
        "options": [
          "A framework for deploying models on mobile/edge",
          "A smaller TensorFlow version",
          "A testing tool",
          "A data tool"
        ],
        "correct": "A framework for deploying models on mobile/edge",
        "topic": "TFLite"
      }
    ]
  },
  "Pandas": {
    "easy": [
      {
        "question": "What is a DataFrame?",
        "options": [
          "A 2D labeled data structure with columns",
          "A 1D array",
          "A dictionary",
          "A list"
        ],
        "correct": "A 2D labeled data structure with columns",
        "topic": "DataFrames"
      },
      {
        "question": "What is a Series?",
        "options": [
          "A 1D labeled array",
          "A 2D table",
          "A dictionary",
          "A list only"
        ],
        "correct": "A 1D labeled array",
        "topic": "Series"
      },
      {
        "question": "How do you read a CSV file?",
        "options": [
          "pd.read_csv('file.csv')",
          "pd.load('file.csv')",
          "pd.open('file.csv')",
          "pd.import('file.csv')"
        ],
        "correct": "pd.read_csv('file.csv')",
        "topic": "Reading CSV"
      },
      {
        "question": "How do you select a column?",
        "options": [
          "df['column_name']",
          "df.select('column_name')",
          "df.get('column_name')",
          "df.col('column_name')"
        ],
        "correct": "df['column_name']",
        "topic": "Basic Selection"
      },
      {
        "question": "How do you filter rows based on a condition?",
        "options": [
          "df[df['col'] > value]",
          "df.filter(col > value)",
          "df.where(col > value)",
          "df.select(col > value)"
        ],
        "correct": "df[df['col'] > value]",
        "topic": "Filtering"
      }
    ],
    "medium": [
      {
        "question": "What does groupby() do?",
        "options": [
          "Groups data by column values for aggregation",
          "Sorts data",
          "Filters data",
          "Merges data"
        ],
        "correct": "Groups data by column values for aggregation",
        "topic": "GroupBy"
      },
      {
        "question": "How do you merge two DataFrames?",
        "options": [
          "pd.merge(df1, df2, on='key')",
          "df1 + df2",
          "df1.add(df2)",
          "pd.join(df1, df2)"
        ],
        "correct": "pd.merge(df1, df2, on='key')",
        "topic": "Merge/Join"
      },
      {
        "question": "What does pivot_table() create?",
        "options": [
          "A spreadsheet-style pivot table",
          "A bar chart",
          "A new DataFrame",
          "A Series"
        ],
        "correct": "A spreadsheet-style pivot table",
        "topic": "Pivot Tables"
      },
      {
        "question": "How do you handle missing data?",
        "options": [
          "df.fillna() or df.dropna()",
          "df.remove_null()",
          "df.clean()",
          "df.fix()"
        ],
        "correct": "df.fillna() or df.dropna()",
        "topic": "Missing Data"
      },
      {
        "question": "What does df.apply() do?",
        "options": [
          "Applies a function along an axis of the DataFrame",
          "Filters data",
          "Sorts data",
          "Merges data"
        ],
        "correct": "Applies a function along an axis of the DataFrame",
        "topic": "Apply Functions"
      }
    ],
    "hard": [
      {
        "question": "What is a MultiIndex?",
        "options": [
          "A hierarchical index with multiple levels",
          "A single index",
          "A column name",
          "A data type"
        ],
        "correct": "A hierarchical index with multiple levels",
        "topic": "MultiIndex"
      },
      {
        "question": "What are rolling window functions?",
        "options": [
          "Functions computed over a sliding window of data",
          "Static calculations",
          "Group operations",
          "Filter operations"
        ],
        "correct": "Functions computed over a sliding window of data",
        "topic": "Window Functions"
      },
      {
        "question": "How do you optimize Pandas performance?",
        "options": [
          "Use vectorized ops, appropriate dtypes, and chunking",
          "Add more columns",
          "Use loops",
          "Use larger DataFrames"
        ],
        "correct": "Use vectorized ops, appropriate dtypes, and chunking",
        "topic": "Performance"
      },
      {
        "question": "What is a custom accessor?",
        "options": [
          "An extension method registered with @pd.api.extensions",
          "A built-in method",
          "A column type",
          "An index type"
        ],
        "correct": "An extension method registered with @pd.api.extensions",
        "topic": "Custom Accessors"
      },
      {
        "question": "How do you reduce DataFrame memory usage?",
        "options": [
          "Use category dtype, downcast numerics, sparse arrays",
          "Add more RAM",
          "Use larger dtypes",
          "Ignore memory"
        ],
        "correct": "Use category dtype, downcast numerics, sparse arrays",
        "topic": "Memory Optimization"
      }
    ]
  },
  "Bootstrap": {
    "easy": [],
    "medium": [],
    "hard": []
  },
  "Dart": {
    "easy": [],
    "medium": [],
    "hard": []
  },
  "Matplotlib": {
    "easy": [],
    "medium": [],
    "hard": []
  },
  "OpenCV": {
    "easy": [],
    "medium": [],
    "hard": []
  },
  "NLP": {
    "easy": [],
    "medium": [],
    "hard": []
  },
  "Scikit-learn": {
    "easy": [],
    "medium": [],
    "hard": []
  },
  "HTML_CSS": {
    "easy": [],
    "medium": [],
    "hard": []
  },
  "JupyterNotebook": {
    "easy": [],
    "medium": [],
    "hard": []
  },
  "NumPy": {
    "easy": [],
    "medium": [],
    "hard": []
  },
  "NodeJS": {
    "easy": [],
    "medium": [],
    "hard": []
  }
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
  "Flask": { youtube: "Corey Schafer - Flask", roadmap: "roadmap.sh/python", practice: "Build a REST API" },
  "Git": { youtube: "Traversy Media - Git", roadmap: "roadmap.sh/git-github", practice: "Learn Git Branching" },
  "C++": { youtube: "The Cherno - C++", roadmap: "roadmap.sh/cpp", practice: "LeetCode C++" },
  "Kubernetes": { youtube: "TechWorld with Nana - K8s", roadmap: "roadmap.sh/kubernetes", practice: "Minikube labs" },
  "TensorFlow": { youtube: "Sentdex - TensorFlow", roadmap: "roadmap.sh/ai-data-scientist", practice: "Kaggle competitions" },
  "Pandas": { youtube: "Corey Schafer - Pandas", roadmap: "roadmap.sh/python", practice: "Kaggle datasets" },
  "default": { youtube: "FreeCodeCamp", roadmap: "roadmap.sh", practice: "Practice projects" }
};
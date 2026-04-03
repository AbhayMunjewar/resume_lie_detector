
import json

Q = {}

def add(skill, level, items):
    if skill not in Q: Q[skill] = {"easy":[], "medium":[], "hard":[]}
    for q,opts,c,t in items:
        Q[skill][level].append({"question":q,"options":opts,"correct":c,"topic":t})

# React
add("React","easy",[
("What is JSX?",["JavaScript XML","Java Syntax Extension","JSON XML","JavaScript Syntax"],"JavaScript XML","JSX Basics"),
("What is a functional component?",["A JavaScript function that returns React elements","A class that extends React.Component","A database schema","An HTML tag"],"A JavaScript function that returns React elements","Components"),
("Which hook is used to manage state?",["useState","useEffect","useContext","useReducer"],"useState","Hooks"),
("What are props?",["Arguments passed into React components","State variables","HTML attributes","CSS styles"],"Arguments passed into React components","Props"),
("How do you render a list of items?",["Using the map() method","Using a for loop","Using while loop","Using filter()"],"Using the map() method","Lists & Keys"),
])
add("React","medium",[
("What is the Virtual DOM?",["A lightweight in-memory representation of the real DOM","A browser plugin","A database","A physical screen"],"A lightweight in-memory representation of the real DOM","Virtual DOM"),
("What does useEffect do?",["Handles side effects like data fetching or subscriptions","Creates new state variables","Renders the component","Handles CSS styling"],"Handles side effects like data fetching or subscriptions","Hooks - useEffect"),
("What is React Context?",["A way to pass data through the component tree without prop drilling","A state management library like Redux","A routing library","A CSS framework"],"A way to pass data through the component tree without prop drilling","Context API"),
("What is prop drilling?",["Passing props through intermediate components that don't need them","A way to fetch data","A CSS animation","A database query"],"Passing props through intermediate components that don't need them","Architecture"),
("How do you handle routing in React?",["Using libraries like React Router","Built-in React features","Using href completely","HTML anchor tags"],"Using libraries like React Router","Routing"),
])
add("React","hard",[
("What is memoization in React?",["Caching the results of expensive function calls (useMemo/React.memo)","Creating new components","Storing data in localStorage","Using CSS transitions"],"Caching the results of expensive function calls (useMemo/React.memo)","Performance Optimization"),
("What is the difference between useMemo and useCallback?",["useMemo memoizes a value, useCallback memoizes a function","No difference","useCallback is for API calls","useMemo is for CSS"],"useMemo memoizes a value, useCallback memoizes a function","Hooks Optimization"),
("What are Server Components in React 18+?",["Components that render exclusively on the server","Components that only run in the browser","Database models","API endpoints"],"Components that render exclusively on the server","React 18 Features"),
("How does React's reconciliation algorithm work?",["Diffing the virtual DOM representations to update only what changed","Reloading the whole page","Checking database changes","Updating all HTML elements"],"Diffing the virtual DOM representations to update only what changed","Reconciliation"),
("What is a Higher-Order Component (HOC)?",["A function that takes a component and returns a new component","A state variable","A CSS class","A database query"],"A function that takes a component and returns a new component","Advanced Patterns"),
])

# Node.js
add("Node.js","easy",[
("What is Node.js?",["A JavaScript runtime built on Chrome's V8","A programming language","A database","A web browser"],"A JavaScript runtime built on Chrome's V8","Node Basics"),
("What does npm stand for?",["Node Package Manager","New Project Manager","Node Process Module","Network Protocol Manager"],"Node Package Manager","NPM"),
("Which method is used to include modules in Node.js?",["require()","import()","include()","load()"],"require()","Modules"),
("Which module is used to handle file operations?",["fs","http","path","os"],"fs","File System"),
("Which method creates an HTTP server in Node.js?",["http.createServer()","http.server()","http.listen()","http.init()"],"http.createServer()","HTTP Module"),
])
add("Node.js","medium",[
("What is Express.js?",["A web application framework for Node.js","A database","A template engine","A testing library"],"A web application framework for Node.js","Express.js"),
("What is middleware in Express?",["Functions that execute during request-response cycle","Database connectors","Template files","Static assets"],"Functions that execute during request-response cycle","Middleware"),
("Which keyword is used to pause execution until a promise resolves?",["await","yield","pause","halt"],"await","Async/Await"),
("How do you handle errors in Express middleware?",["Using next(err) with 4-parameter middleware","Using try-catch only","Using console.error","Using process.exit"],"Using next(err) with 4-parameter middleware","Error Handling"),
("Which HTTP method is used to update a resource?",["PUT","POST","GET","DELETE"],"PUT","REST APIs"),
])
add("Node.js","hard",[
("What is the event loop in Node.js?",["A mechanism that handles async callbacks","A for loop construct","A database query loop","A rendering engine"],"A mechanism that handles async callbacks","Event Loop"),
("What are streams in Node.js?",["Objects for reading/writing data continuously","Array methods","Database connections","HTTP headers"],"Objects for reading/writing data continuously","Streams"),
("What does the cluster module do?",["Creates child processes sharing server ports","Manages databases","Handles file compression","Controls memory allocation"],"Creates child processes sharing server ports","Cluster Module"),
("What are Worker Threads used for?",["CPU-intensive tasks in parallel threads","Database queries","File reading","HTTP requests"],"CPU-intensive tasks in parallel threads","Worker Threads"),
("How can you detect memory leaks in Node.js?",["Using heap snapshots and process.memoryUsage()","Using console.log","Using npm install","Using fs module"],"Using heap snapshots and process.memoryUsage()","Memory Leaks"),
])

# Python
add("Python","easy",[
("Which of these is a mutable data type?",["list","tuple","string","frozenset"],"list","Data Types"),
("What keyword is used for conditional statements?",["if","for","def","class"],"if","Control Flow"),
("How do you define a function in Python?",["def my_func():","function my_func():","fn my_func():","define my_func():"],"def my_func():","Functions"),
("How do you add an element to a list?",["append()","add()","push()","insert_end()"],"append()","Lists"),
("How do you access a value in a dictionary?",["dict[key]","dict.get_value(key)","dict->key","dict(key)"],"dict[key]","Dictionaries"),
])
add("Python","medium",[
("What is __init__ in Python?",["Constructor method of a class","A module","A built-in function","A loop"],"Constructor method of a class","OOP"),
("What does [x**2 for x in range(5)] return?",["[0, 1, 4, 9, 16]","[1, 4, 9, 16, 25]","[0, 2, 4, 6, 8]","Error"],"[0, 1, 4, 9, 16]","List Comprehensions"),
("Which block handles exceptions in Python?",["try-except","try-catch","if-else","do-while"],"try-except","Exception Handling"),
("Which mode opens a file for reading in Python?",["'r'","'w'","'a'","'x'"],"'r'","File I/O"),
("What is a lambda function?",["An anonymous single-expression function","A named function","A class method","A module"],"An anonymous single-expression function","Lambda Functions"),
])
add("Python","hard",[
("What is a decorator in Python?",["A function that modifies another function","A class attribute","A loop construct","A data type"],"A function that modifies another function","Decorators"),
("What does yield do in a function?",["Makes it a generator that produces values lazily","Returns a value and exits","Raises an exception","Imports a module"],"Makes it a generator that produces values lazily","Generators"),
("What are metaclasses?",["Classes that define behavior of other classes","Subclasses","Abstract classes","Data classes"],"Classes that define behavior of other classes","Metaclasses"),
("What is the GIL?",["A mutex that protects access to Python objects","A garbage collector","A loop optimizer","A compiler flag"],"A mutex that protects access to Python objects","GIL"),
("How does Python manage memory?",["Reference counting with cycle-detecting garbage collector","Manual allocation","Stack-only allocation","No memory management"],"Reference counting with cycle-detecting garbage collector","Memory Management"),
])

# SQL
add("SQL","easy",[
("Which SQL statement retrieves data?",["SELECT","INSERT","UPDATE","DELETE"],"SELECT","SELECT Queries"),
("Which clause filters rows?",["WHERE","HAVING","GROUP BY","ORDER BY"],"WHERE","WHERE Clause"),
("Which statement adds new data to a table?",["INSERT INTO","ADD INTO","PUT INTO","CREATE INTO"],"INSERT INTO","INSERT/UPDATE"),
("What uniquely identifies each row in a table?",["Primary Key","Foreign Key","Index","Constraint"],"Primary Key","Primary Keys"),
("Which clause sorts results?",["ORDER BY","SORT BY","GROUP BY","ARRANGE BY"],"ORDER BY","ORDER BY"),
])
add("SQL","medium",[
("Which JOIN returns matching rows from both tables?",["INNER JOIN","LEFT JOIN","RIGHT JOIN","CROSS JOIN"],"INNER JOIN","JOINs"),
("What does GROUP BY do?",["Groups rows with same values for aggregate functions","Sorts rows","Filters rows","Joins tables"],"Groups rows with same values for aggregate functions","GROUP BY"),
("What is a subquery?",["A query nested inside another query","A stored procedure","A view","A trigger"],"A query nested inside another query","Subqueries"),
("What is the purpose of an index?",["Speeds up data retrieval","Stores data","Creates tables","Deletes duplicates"],"Speeds up data retrieval","Indexes"),
("Which function returns the total number of rows?",["COUNT()","SUM()","TOTAL()","NUM()"],"COUNT()","Aggregate Functions"),
])
add("SQL","hard",[
("What is query optimization?",["Improving query performance using execution plans","Writing shorter queries","Adding more tables","Using SELECT *"],"Improving query performance using execution plans","Query Optimization"),
("What is 3NF (Third Normal Form)?",["No transitive dependencies on primary key","All data in one table","Using only primary keys","Removing all indexes"],"No transitive dependencies on primary key","Normalization"),
("What does ACID stand for in transactions?",["Atomicity Consistency Isolation Durability","Add Create Insert Delete","Async Concurrent Independent Distributed","None of these"],"Atomicity Consistency Isolation Durability","Transactions"),
("What are window functions?",["Functions that perform calculations across row sets","Aggregate functions","String functions","Date functions"],"Functions that perform calculations across row sets","Window Functions"),
("What is a stored procedure?",["Precompiled SQL statements stored in database","A temporary table","An index type","A view"],"Precompiled SQL statements stored in database","Stored Procedures"),
])

# Docker
add("Docker","easy",[
("What is the difference between a container and a VM?",["Containers share the host OS kernel, VMs have own OS","No difference","Containers are heavier","VMs are faster"],"Containers share the host OS kernel, VMs have own OS","Containers vs VMs"),
("What is a Docker image?",["A read-only template for creating containers","A running process","A virtual machine","A configuration file"],"A read-only template for creating containers","Docker Images"),
("What file defines a Docker image?",["Dockerfile","docker-compose.yml","package.json","config.yaml"],"Dockerfile","Dockerfile"),
("Which command lists running containers?",["docker ps","docker list","docker show","docker running"],"docker ps","Docker CLI"),
("How do you map port 8080 on host to 80 in container?",["docker run -p 8080:80","docker run -port 8080:80","docker run --map 8080:80","docker run -P 8080"],"docker run -p 8080:80","Port Mapping"),
])
add("Docker","medium",[
("What is Docker Compose used for?",["Defining and running multi-container applications","Building images","Managing Docker Hub","Monitoring containers"],"Defining and running multi-container applications","Docker Compose"),
("What are Docker volumes?",["Persistent data storage for containers","Container logs","Network interfaces","Image layers"],"Persistent data storage for containers","Volumes"),
("Which network driver is default in Docker?",["bridge","host","overlay","none"],"bridge","Networking"),
("What is a multi-stage build?",["Using multiple FROM statements to reduce image size","Building multiple containers","Running parallel builds","Using Docker Compose"],"Using multiple FROM statements to reduce image size","Multi-Stage Builds"),
("How do you pass environment variables to a container?",["Using -e flag or --env-file","Using -v flag","Using -p flag","Using --config"],"Using -e flag or --env-file","Environment Variables"),
])
add("Docker","hard",[
("What is Docker Swarm?",["Native clustering and orchestration for Docker","A monitoring tool","An image registry","A build tool"],"Native clustering and orchestration for Docker","Docker Swarm"),
("What is container orchestration?",["Automated management of containerized applications","Manual container deployment","Image building","Log management"],"Automated management of containerized applications","Container Orchestration"),
("How can you reduce Docker image size?",["Use alpine base images and multi-stage builds","Add more layers","Use Ubuntu base","Include dev dependencies"],"Use alpine base images and multi-stage builds","Image Optimization"),
("How do you scan Docker images for vulnerabilities?",["docker scout or Trivy","docker ps","docker logs","docker inspect"],"docker scout or Trivy","Security Best Practices"),
("How do you integrate Docker with CI/CD?",["Build and push images in pipeline stages","Run docker manually","Use Docker Desktop only","Skip testing"],"Build and push images in pipeline stages","CI/CD Integration"),
])

# JavaScript
add("JavaScript","easy",[
("Which keyword declares a block-scoped variable?",["let","var","global","define"],"let","Variables"),
("What is typeof null?",["object","null","undefined","number"],"object","Data Types"),
("What is a callback function?",["A function passed as argument to another function","A recursive function","A constructor","An arrow function"],"A function passed as argument to another function","Functions"),
("Which method adds an element to end of array?",["push()","pop()","shift()","unshift()"],"push()","Arrays"),
("What does document.getElementById() return?",["A DOM element or null","An array","A string","A number"],"A DOM element or null","DOM Basics"),
])
add("JavaScript","medium",[
("What is a closure?",["A function that retains access to outer scope variables","A loop","A class","An error handler"],"A function that retains access to outer scope variables","Closures"),
("What does a Promise represent?",["An eventual completion or failure of an async operation","A synchronous value","A callback function","A timer"],"An eventual completion or failure of an async operation","Promises"),
("What is prototypal inheritance?",["Objects inheriting directly from other objects","Class-based inheritance","No inheritance","Copy-based inheritance"],"Objects inheriting directly from other objects","Prototypes"),
("What does the spread operator (...) do?",["Expands an iterable into individual elements","Compresses data","Creates a loop","Deletes elements"],"Expands an iterable into individual elements","ES6 Features"),
("Which statement is used to handle errors?",["try...catch","if...else","for...in","switch...case"],"try...catch","Error Handling"),
])
add("JavaScript","hard",[
("What is the order of the event loop phases?",["Timers, I/O callbacks, idle, poll, check, close","Random order","Synchronous only","Single phase"],"Timers, I/O callbacks, idle, poll, check, close","Event Loop"),
("What does function* define?",["A generator function","An async function","A class","A module"],"A generator function","Generators"),
("What is a Proxy in JavaScript?",["An object that wraps another to intercept operations","A network proxy","A design pattern only","A polyfill"],"An object that wraps another to intercept operations","Proxy/Reflect"),
("When would you use WeakMap over Map?",["When keys should be garbage-collectible","When you need iteration","When keys are strings","For better performance always"],"When keys should be garbage-collectible","WeakMap/WeakSet"),
("What causes memory leaks in JavaScript?",["Uncleared timers, closures holding references, detached DOM","Using const","Using arrays","Using functions"],"Uncleared timers, closures holding references, detached DOM","Memory Management"),
])

# Java
add("Java","easy",[
("What are the four pillars of OOP?",["Encapsulation, Inheritance, Polymorphism, Abstraction","Variables, Functions, Classes, Objects","Arrays, Lists, Maps, Sets","None"],"Encapsulation, Inheritance, Polymorphism, Abstraction","OOP Basics"),
("Which is a primitive data type in Java?",["int","String","Integer","Array"],"int","Data Types"),
("Which loop is entry-controlled?",["for","do-while","None","All loops"],"for","Control Flow"),
("What is the default value of an int array element?",["0","null","undefined","1"],"0","Arrays"),
("Which class is immutable in Java?",["String","StringBuilder","StringBuffer","Array"],"String","Strings"),
])
add("Java","medium",[
("Which interface does ArrayList implement?",["List","Set","Map","Queue"],"List","Collections"),
("What is the difference between checked and unchecked exceptions?",["Checked must be handled at compile time","No difference","Unchecked must be caught","Checked are runtime only"],"Checked must be handled at compile time","Exception Handling"),
("What are generics used for?",["Type-safe collections and methods","File handling","Thread management","Memory management"],"Type-safe collections and methods","Generics"),
("Which method starts a thread?",["start()","run()","execute()","begin()"],"start()","Multithreading"),
("What does stream().filter() do?",["Returns elements matching a predicate","Sorts elements","Maps elements","Counts elements"],"Returns elements matching a predicate","Streams API"),
])
add("Java","hard",[
("What does the JVM do?",["Executes bytecode on any platform","Compiles source code","Manages files","Creates GUIs"],"Executes bytecode on any platform","JVM Internals"),
("Which GC algorithm does G1 use?",["Region-based concurrent collector","Reference counting","Mark and sweep only","Manual deallocation"],"Region-based concurrent collector","Garbage Collection"),
("What is the Singleton pattern?",["Ensures only one instance of a class exists","Creates multiple instances","A factory method","An observer pattern"],"Ensures only one instance of a class exists","Design Patterns"),
("What does synchronized keyword do?",["Ensures only one thread accesses a block at a time","Speeds up execution","Creates threads","Stops threads"],"Ensures only one thread accesses a block at a time","Concurrency"),
("What is the Java Memory Model?",["Rules for how threads interact through memory","RAM allocation","Heap size config","Disk storage"],"Rules for how threads interact through memory","Memory Model"),
])

# DSA
add("DSA","easy",[
("What is the time complexity of array access by index?",["O(1)","O(n)","O(log n)","O(n^2)"],"O(1)","Arrays"),
("What is a linked list?",["A linear data structure with nodes pointing to next","An array","A tree","A graph"],"A linear data structure with nodes pointing to next","Linked Lists"),
("Which data structure uses LIFO?",["Stack","Queue","Array","Tree"],"Stack","Stacks"),
("Which data structure uses FIFO?",["Queue","Stack","Heap","Graph"],"Queue","Queues"),
("What does O(n) mean?",["Linear time complexity","Constant time","Quadratic time","Logarithmic time"],"Linear time complexity","Big-O Notation"),
])
add("DSA","medium",[
("What is the max number of children in a binary tree node?",["2","1","3","Unlimited"],"2","Binary Trees"),
("What is the time complexity of merge sort?",["O(n log n)","O(n^2)","O(n)","O(log n)"],"O(n log n)","Sorting Algorithms"),
("What is the average time complexity of hash table lookup?",["O(1)","O(n)","O(log n)","O(n^2)"],"O(1)","Hash Tables"),
("What is the base case in recursion?",["The condition that stops recursive calls","The first call","An infinite loop","A return type"],"The condition that stops recursive calls","Recursion"),
("What is BFS?",["Traversal exploring all neighbors before going deeper","Depth-first traversal","A sorting algorithm","A search tree"],"Traversal exploring all neighbors before going deeper","BFS/DFS"),
])
add("DSA","hard",[
("What is dynamic programming?",["Solving problems by breaking into overlapping subproblems","A programming language","A design pattern","Random algorithm"],"Solving problems by breaking into overlapping subproblems","Dynamic Programming"),
("What is Dijkstra's algorithm used for?",["Shortest path in weighted graph","Sorting","Searching","Tree traversal"],"Shortest path in weighted graph","Graphs"),
("What is a Trie used for?",["Efficient prefix-based string searching","Number sorting","Graph traversal","Memory management"],"Efficient prefix-based string searching","Tries"),
("What characterizes a greedy algorithm?",["Makes locally optimal choice at each step","Explores all possibilities","Uses random choices","Always finds global optimum"],"Makes locally optimal choice at each step","Greedy Algorithms"),
("What is a segment tree used for?",["Range queries and updates efficiently","Sorting data","String matching","Graph coloring"],"Range queries and updates efficiently","Segment Trees"),
])

# AWS
add("AWS","easy",[
("What is EC2?",["Virtual servers in the cloud","A database service","A storage service","A networking service"],"Virtual servers in the cloud","EC2"),
("What is S3 used for?",["Object storage","Compute","Networking","Database"],"Object storage","S3"),
("What does IAM stand for?",["Identity and Access Management","Internet Access Module","Integrated App Manager","Internal Auth Method"],"Identity and Access Management","IAM"),
("What is an AWS Region?",["A geographical area with multiple data centers","A single server","A virtual network","An IP address"],"A geographical area with multiple data centers","Regions/AZs"),
("What does CloudWatch do?",["Monitors AWS resources and applications","Stores files","Manages DNS","Creates VPCs"],"Monitors AWS resources and applications","CloudWatch"),
])
add("AWS","medium",[
("What is AWS Lambda?",["Serverless compute that runs code without servers","A virtual machine","A container service","A database"],"Serverless compute that runs code without servers","Lambda"),
("What is API Gateway?",["A service to create and manage APIs","A firewall","A load balancer","A CDN"],"A service to create and manage APIs","API Gateway"),
("What is RDS?",["A managed relational database service","A file storage","A compute service","A messaging queue"],"A managed relational database service","RDS"),
("What is a VPC?",["A virtual private network in AWS cloud","A physical network","A DNS service","A CDN"],"A virtual private network in AWS cloud","VPC"),
("What is the difference between SQS and SNS?",["SQS is a queue service, SNS is pub/sub notifications","They are the same","SQS is for email, SNS for SMS","SQS is faster"],"SQS is a queue service, SNS is pub/sub notifications","SQS/SNS"),
])
add("AWS","hard",[
("What is Auto Scaling?",["Automatically adjusts capacity based on demand","Manual scaling","Fixed server count","Load balancing only"],"Automatically adjusts capacity based on demand","Auto Scaling"),
("What is CloudFormation?",["Infrastructure as Code service for AWS","A monitoring tool","A database","A CDN"],"Infrastructure as Code service for AWS","CloudFormation"),
("What is the difference between ECS and EKS?",["ECS is AWS-native containers, EKS is managed Kubernetes","They are identical","ECS is for VMs","EKS is serverless only"],"ECS is AWS-native containers, EKS is managed Kubernetes","ECS/EKS"),
("How can you optimize AWS costs?",["Use Reserved Instances, right-sizing, and Spot Instances","Use largest instances","Never use auto-scaling","Ignore unused resources"],"Use Reserved Instances, right-sizing, and Spot Instances","Cost Optimization"),
("What is a multi-AZ deployment?",["Running instances across availability zones for HA","Using one server","A CDN setup","A DNS config"],"Running instances across availability zones for HA","Disaster Recovery"),
])

# TypeScript
add("TypeScript","easy",[
("How do you annotate a variable type?",["let x: number = 5","let x = 5 as number","var x number = 5","type x = 5"],"let x: number = 5","Type Annotations"),
("What is an interface in TypeScript?",["A contract that defines object shape","A class","A function","A module"],"A contract that defines object shape","Interfaces"),
("What are enums?",["Named constants for a set of values","Arrays","Objects","Functions"],"Named constants for a set of values","Enums"),
("Which is a basic type in TypeScript?",["string","str","text","varchar"],"string","Basic Types"),
("What is type inference?",["TypeScript automatically determines types","Manual type assignment","Type casting","Type checking at runtime"],"TypeScript automatically determines types","Type Inference"),
])
add("TypeScript","medium",[
("What are generics?",["Reusable components that work with multiple types","Specific types","Type aliases","Enums"],"Reusable components that work with multiple types","Generics"),
("What is a union type?",["A type that can be one of several types (A | B)","A single type","An intersection","A tuple"],"A type that can be one of several types (A | B)","Union Types"),
("What is a type guard?",["Runtime check that narrows a type within a scope","A security feature","An error handler","A compiler flag"],"Runtime check that narrows a type within a scope","Type Guards"),
("What does Partial<T> do?",["Makes all properties of T optional","Makes all required","Removes properties","Adds properties"],"Makes all properties of T optional","Utility Types"),
("What are decorators in TypeScript?",["Special declarations attached to classes/methods","Comments","Type annotations","Import statements"],"Special declarations attached to classes/methods","Decorators"),
])
add("TypeScript","hard",[
("What are mapped types?",["Types created by transforming properties of existing types","Enum types","Basic types","Function types"],"Types created by transforming properties of existing types","Mapped Types"),
("What is a conditional type?",["A type that selects one of two types based on condition","An if statement","A union type","A generic"],"A type that selects one of two types based on condition","Conditional Types"),
("What are template literal types?",["Types built from string literal combinations","Regular strings","Template strings","Type aliases"],"Types built from string literal combinations","Template Literals"),
("What is type narrowing?",["Refining types to more specific types using checks","Type widening","Type casting","Type deletion"],"Refining types to more specific types using checks","Type Narrowing"),
("What is module augmentation?",["Extending existing module declarations","Creating new modules","Deleting modules","Renaming modules"],"Extending existing module declarations","Module Augmentation"),
])

# MongoDB
add("MongoDB","easy",[
("What is a document in MongoDB?",["A JSON-like data record","A SQL table row","A file","A collection"],"A JSON-like data record","Documents"),
("What is a collection?",["A group of MongoDB documents","A single document","A database","An index"],"A group of MongoDB documents","Collections"),
("Which method inserts a document?",["insertOne()","add()","create()","push()"],"insertOne()","CRUD Operations"),
("What data format does MongoDB use?",["BSON (Binary JSON)","XML","CSV","SQL"],"BSON (Binary JSON)","Data Types"),
("Which tool is the MongoDB interactive shell?",["mongosh","mysql","psql","redis-cli"],"mongosh","MongoDB Shell"),
])
add("MongoDB","medium",[
("What is the aggregation pipeline?",["A framework for data processing through stages","A simple query","An index","A backup tool"],"A framework for data processing through stages","Aggregation"),
("Why are indexes important in MongoDB?",["They speed up query performance","They store data","They create backups","They compress data"],"They speed up query performance","Indexing"),
("When should you embed vs reference documents?",["Embed for 1:few, reference for 1:many","Always embed","Always reference","Never embed"],"Embed for 1:few, reference for 1:many","Schema Design"),
("What is Mongoose?",["An ODM library for MongoDB and Node.js","A database","A query language","A driver"],"An ODM library for MongoDB and Node.js","Mongoose ODM"),
("What is the difference between embedded and referenced?",["Embedded stores data within, referenced links via IDs","No difference","Embedded is slower","Referenced is always better"],"Embedded stores data within, referenced links via IDs","Embedded vs Referenced"),
])
add("MongoDB","hard",[
("What is sharding?",["Distributing data across multiple servers","Creating indexes","Backing up data","Compressing data"],"Distributing data across multiple servers","Sharding"),
("What is a replica set?",["A group of mongod instances maintaining same data","A single server","A collection","An index"],"A group of mongod instances maintaining same data","Replication"),
("Does MongoDB support multi-document transactions?",["Yes, since version 4.0","No","Only single document","Only with SQL"],"Yes, since version 4.0","Transactions"),
("How do you optimize slow MongoDB queries?",["Use explain(), proper indexes, and projection","Add more data","Remove indexes","Use SELECT *"],"Use explain(), proper indexes, and projection","Performance Tuning"),
("What are change streams?",["Real-time notifications of data changes","Static reports","Backup streams","Log files"],"Real-time notifications of data changes","Change Streams"),
])

# Django
add("Django","easy",[
("What does MVT stand for?",["Model-View-Template","Model-View-Table","Main-View-Template","Module-View-Type"],"Model-View-Template","MVT Architecture"),
("Where are URL patterns defined?",["urls.py","views.py","models.py","settings.py"],"urls.py","URL Routing"),
("What template engine does Django use by default?",["Django Template Language (DTL)","Jinja2","Mako","Handlebars"],"Django Template Language (DTL)","Templates"),
("What does a Django model represent?",["A database table","A URL pattern","A template","A view"],"A database table","Models"),
("What is Django Admin?",["An auto-generated admin interface for models","A CLI tool","A testing framework","A deployment tool"],"An auto-generated admin interface for models","Admin Panel"),
])
add("Django","medium",[
("How do you filter querysets?",["Model.objects.filter()","Model.select()","Model.query()","Model.find()"],"Model.objects.filter()","ORM Queries"),
("What is a ModelForm?",["A form automatically generated from a model","A database model","A template tag","A URL pattern"],"A form automatically generated from a model","Forms"),
("What are class-based views?",["Views implemented as Python classes","Functions","Templates","Models"],"Views implemented as Python classes","Class-Based Views"),
("Which module handles user authentication?",["django.contrib.auth","django.auth","django.users","django.login"],"django.contrib.auth","Authentication"),
("What is Django middleware?",["Hooks into request/response processing","Database models","Template tags","URL patterns"],"Hooks into request/response processing","Middleware"),
])
add("Django","hard",[
("What is a custom model manager?",["A class that modifies default QuerySet behavior","A view","A template","A form"],"A class that modifies default QuerySet behavior","Custom Managers"),
("What are Django signals?",["Notifications sent when certain actions occur","HTTP signals","Database triggers","Template events"],"Notifications sent when certain actions occur","Signals"),
("How does Django implement caching?",["Using cache framework with multiple backends","No caching support","Only file caching","Only memory caching"],"Using cache framework with multiple backends","Caching"),
("What is Django REST Framework?",["A toolkit for building Web APIs","A frontend library","A database ORM","A template engine"],"A toolkit for building Web APIs","REST Framework"),
("How do you optimize Django queries?",["Using select_related, prefetch_related, and indexing","Adding more models","Removing views","Using raw SQL only"],"Using select_related, prefetch_related, and indexing","Query Optimization"),
])

# Flask
add("Flask","easy",[
("What is Flask?",["A lightweight Python web framework","A database","A frontend library","An ORM"],"A lightweight Python web framework","Flask Basics"),
("How do you define a route in Flask?",["@app.route('/path')","@route('/path')","app.url('/path')","flask.path('/path')"],"@app.route('/path')","Routing"),
("Which template engine does Flask use?",["Jinja2","Django Template Language","Mako","Handlebars"],"Jinja2","Templates"),
("How do you access form data in Flask?",["request.form['key']","request.data['key']","request.body['key']","request.get('key')"],"request.form['key']","Request Object"),
("Where are static files stored by default?",["static/ folder","public/ folder","assets/ folder","files/ folder"],"static/ folder","Static Files"),
])
add("Flask","medium",[
("What are Flask Blueprints?",["Modular components for organizing routes","Database models","Template files","Configuration files"],"Modular components for organizing routes","Blueprints"),
("What is SQLAlchemy in Flask context?",["An ORM for database operations","A template engine","A form library","A testing tool"],"An ORM for database operations","SQLAlchemy"),
("What is Flask-WTF?",["A forms library with CSRF protection","A database tool","A caching library","An auth module"],"A forms library with CSRF protection","Flask-WTF"),
("How are sessions managed in Flask?",["Using signed cookies by default","Using database only","Using files only","No session support"],"Using signed cookies by default","Session Management"),
("How do you create custom error handlers?",["@app.errorhandler(404)","@app.error(404)","@app.catch(404)","app.on_error(404)"],"@app.errorhandler(404)","Error Handlers"),
])
add("Flask","hard",[
("What is the application factory pattern?",["A function that creates and configures the Flask app","A design pattern for models","A testing pattern","A deployment strategy"],"A function that creates and configures the Flask app","Application Factory"),
("What is Flask-RESTful?",["An extension for building REST APIs quickly","A database tool","A template engine","A form validator"],"An extension for building REST APIs quickly","Flask-RESTful"),
("How do you add custom middleware in Flask?",["Using before_request/after_request decorators or WSGI middleware","Using Django middleware","Using Express middleware","Not possible"],"Using before_request/after_request decorators or WSGI middleware","Custom Middleware"),
("How to implement WebSockets in Flask?",["Using Flask-SocketIO extension","Built-in support","Using HTTP polling only","Not possible"],"Using Flask-SocketIO extension","WebSockets"),
("What is the recommended way to deploy Flask?",["Using Gunicorn/uWSGI behind Nginx","Using flask run in production","Using development server","Using Apache only"],"Using Gunicorn/uWSGI behind Nginx","Deployment"),
])

# Git
add("Git","easy",[
("Which command initializes a Git repository?",["git init","git start","git create","git new"],"git init","Basic Commands"),
("What is the staging area?",["An intermediate area before committing changes","The repository","The working directory","The remote"],"An intermediate area before committing changes","Staging Area"),
("What does git commit do?",["Saves staged changes to local repository","Pushes to remote","Deletes files","Creates a branch"],"Saves staged changes to local repository","Commits"),
("How do you create a new branch?",["git branch branch-name","git new branch-name","git create branch-name","git switch branch-name"],"git branch branch-name","Branching"),
("What does git push do?",["Uploads local commits to remote repository","Downloads from remote","Merges branches","Creates tags"],"Uploads local commits to remote repository","Remote Repos"),
])
add("Git","medium",[
("What is the difference between merge and rebase?",["Merge creates a merge commit, rebase rewrites history linearly","No difference","Merge is faster","Rebase creates merge commits"],"Merge creates a merge commit, rebase rewrites history linearly","Merge vs Rebase"),
("How do you resolve a merge conflict?",["Edit conflicted files, stage them, and commit","Delete the branch","Reset to origin","Force push"],"Edit conflicted files, stage them, and commit","Conflict Resolution"),
("What does git stash do?",["Temporarily saves uncommitted changes","Deletes changes","Commits changes","Pushes changes"],"Temporarily saves uncommitted changes","Stashing"),
("What is cherry-pick?",["Apply a specific commit from another branch","Delete a commit","Merge all commits","Create a tag"],"Apply a specific commit from another branch","Cherry-Pick"),
("What are Git hooks?",["Scripts that run on certain Git events","Branches","Tags","Remote URLs"],"Scripts that run on certain Git events","Git Hooks"),
])
add("Git","hard",[
("What is interactive rebase?",["Rewriting commit history by editing, squashing, reordering","A simple rebase","A merge","A cherry-pick"],"Rewriting commit history by editing, squashing, reordering","Interactive Rebase"),
("What is git reflog?",["A log of all reference updates including deleted commits","A commit log","A branch list","A tag list"],"A log of all reference updates including deleted commits","Reflog"),
("What does git bisect do?",["Binary search through commits to find a bug","Splits a branch","Merges branches","Creates tags"],"Binary search through commits to find a bug","Bisect"),
("What are Git submodules?",["Repositories embedded inside other repositories","Branches","Tags","Hooks"],"Repositories embedded inside other repositories","Submodules"),
("What are Git worktrees?",["Multiple working directories for the same repo","Branches","Tags","Remotes"],"Multiple working directories for the same repo","Worktrees"),
])

# C++
add("C++","easy",[
("Which operator is used for output in C++?",["<<",">>","->","::"],"<<","Syntax Basics"),
("What is the size of int in C++ (typically)?",["4 bytes","2 bytes","8 bytes","1 byte"],"4 bytes","Data Types"),
("What is a pointer?",["A variable that stores a memory address","A data type","A function","An operator"],"A variable that stores a memory address","Pointers"),
("How do you declare an array of 5 integers?",["int arr[5];","array int[5];","int[] arr = 5;","arr = int(5);"],"int arr[5];","Arrays"),
("What does void mean as a return type?",["The function returns nothing","Returns null","Returns 0","Returns empty string"],"The function returns nothing","Functions"),
])
add("C++","medium",[
("What are the access specifiers in C++?",["public, private, protected","open, closed, sealed","read, write, execute","static, dynamic, virtual"],"public, private, protected","OOP"),
("What is the STL?",["Standard Template Library with containers and algorithms","A compiler","A debugger","An IDE"],"Standard Template Library with containers and algorithms","STL"),
("What are templates in C++?",["Generic programming with type parameters","HTML files","String literals","Macro definitions"],"Generic programming with type parameters","Templates"),
("How do you handle exceptions in C++?",["try-catch blocks","if-else","switch-case","goto"],"try-catch blocks","Exception Handling"),
("What is the difference between reference and pointer?",["References cannot be null or reassigned, pointers can","No difference","References are faster","Pointers cannot be null"],"References cannot be null or reassigned, pointers can","References"),
])
add("C++","hard",[
("What are smart pointers?",["Objects that manage dynamic memory automatically","Raw pointers","Array pointers","Function pointers"],"Objects that manage dynamic memory automatically","Smart Pointers"),
("What is move semantics?",["Transferring resources instead of copying them","Copying objects","Deleting objects","Creating objects"],"Transferring resources instead of copying them","Move Semantics"),
("What is RAII?",["Resource Acquisition Is Initialization","A design pattern","A library","A compiler flag"],"Resource Acquisition Is Initialization","RAII"),
("How do you create a thread in C++11?",["std::thread t(function)","pthread_create()","fork()","CreateThread()"],"std::thread t(function)","Multithreading"),
("What are the segments of memory in C++?",["Stack, Heap, Code, Data, BSS","Only Stack and Heap","Only RAM","Only Cache"],"Stack, Heap, Code, Data, BSS","Memory Layout"),
])

# Kubernetes
add("Kubernetes","easy",[
("What is a Pod?",["The smallest deployable unit in Kubernetes","A node","A cluster","A service"],"The smallest deployable unit in Kubernetes","Pods"),
("What is a Node in Kubernetes?",["A worker machine that runs pods","A container","A service","A namespace"],"A worker machine that runs pods","Nodes"),
("What is a Kubernetes cluster?",["A set of nodes running containerized applications","A single container","A database","A network"],"A set of nodes running containerized applications","Clusters"),
("What is kubectl?",["CLI tool to interact with Kubernetes","A container runtime","A web UI","A monitoring tool"],"CLI tool to interact with Kubernetes","kubectl"),
("What are namespaces used for?",["Isolating resources within a cluster","Creating pods","Managing storage","Load balancing"],"Isolating resources within a cluster","Namespaces"),
])
add("Kubernetes","medium",[
("What is a Deployment?",["Manages ReplicaSets and provides declarative updates","A single pod","A service","A volume"],"Manages ReplicaSets and provides declarative updates","Deployments"),
("What is a Kubernetes Service?",["An abstraction to expose pods as a network service","A deployment","A container","A namespace"],"An abstraction to expose pods as a network service","Services"),
("What are ConfigMaps?",["Objects to store non-confidential configuration data","Secrets","Volumes","Services"],"Objects to store non-confidential configuration data","ConfigMaps"),
("What is an Ingress?",["Manages external HTTP/HTTPS access to services","A pod type","A volume","A node"],"Manages external HTTP/HTTPS access to services","Ingress"),
("What are Persistent Volumes?",["Storage resources provisioned independently of pods","Temporary storage","Memory","CPU"],"Storage resources provisioned independently of pods","Volumes"),
])
add("Kubernetes","hard",[
("What are Helm Charts?",["Package manager for Kubernetes applications","Docker images","Pod templates","Config files"],"Package manager for Kubernetes applications","Helm Charts"),
("What are Custom Resource Definitions?",["Extensions of the Kubernetes API","Built-in resources","Node types","Service types"],"Extensions of the Kubernetes API","Custom Resources"),
("What is RBAC in Kubernetes?",["Role-Based Access Control for authorization","A load balancer","A storage class","A network policy"],"Role-Based Access Control for authorization","RBAC"),
("What are Network Policies?",["Rules controlling pod-to-pod communication","Firewall rules","DNS configs","Load balancers"],"Rules controlling pod-to-pod communication","Network Policies"),
("What is a Kubernetes Operator?",["Custom controller that manages complex applications","A human operator","A CLI tool","A dashboard"],"Custom controller that manages complex applications","Operators"),
])

# TensorFlow
add("TensorFlow","easy",[
("What is a tensor?",["A multi-dimensional array of data","A function","A model","A layer"],"A multi-dimensional array of data","Tensors"),
("What is Keras?",["A high-level API for building neural networks","A database","A web framework","A visualization tool"],"A high-level API for building neural networks","Keras Basics"),
("What is a Sequential model?",["A linear stack of layers","A graph model","A random model","A tree model"],"A linear stack of layers","Sequential Model"),
("What is a Dense layer?",["A fully connected neural network layer","A convolutional layer","An input layer","A dropout layer"],"A fully connected neural network layer","Layers"),
("What does a loss function measure?",["The difference between predicted and actual values","Model accuracy","Training speed","Data size"],"The difference between predicted and actual values","Loss Functions"),
])
add("TensorFlow","medium",[
("What is a CNN used for?",["Image recognition and classification","Text processing only","Audio only","Tabular data only"],"Image recognition and classification","CNNs"),
("What is transfer learning?",["Using a pre-trained model for a new task","Training from scratch","Data augmentation","Hyperparameter tuning"],"Using a pre-trained model for a new task","Transfer Learning"),
("What are callbacks in Keras?",["Functions called during training for monitoring/control","Loss functions","Optimizers","Layers"],"Functions called during training for monitoring/control","Callbacks"),
("What is tf.data used for?",["Building efficient input data pipelines","Creating models","Evaluating models","Deploying models"],"Building efficient input data pipelines","Data Pipelines"),
("What is dropout?",["A regularization technique that randomly deactivates neurons","A layer type","An optimizer","A loss function"],"A regularization technique that randomly deactivates neurons","Regularization"),
])
add("TensorFlow","hard",[
("What is a custom training loop?",["Manually controlling forward pass, loss, and gradient updates","Using model.fit()","Using AutoML","Using pre-trained models"],"Manually controlling forward pass, loss, and gradient updates","Custom Training Loops"),
("What is TensorFlow Serving?",["A system for serving ML models in production","A training tool","A data pipeline","A visualization tool"],"A system for serving ML models in production","TF Serving"),
("What is distributed training?",["Training models across multiple GPUs/machines","Training on one GPU","Transfer learning","Data augmentation"],"Training models across multiple GPUs/machines","Distributed Training"),
("How do you optimize a TF model for production?",["Quantization, pruning, and graph optimization","Adding more layers","Using larger batches","Increasing epochs"],"Quantization, pruning, and graph optimization","Model Optimization"),
("What is TensorFlow Lite?",["A framework for deploying models on mobile/edge","A smaller TensorFlow version","A testing tool","A data tool"],"A framework for deploying models on mobile/edge","TFLite"),
])

# Pandas
add("Pandas","easy",[
("What is a DataFrame?",["A 2D labeled data structure with columns","A 1D array","A dictionary","A list"],"A 2D labeled data structure with columns","DataFrames"),
("What is a Series?",["A 1D labeled array","A 2D table","A dictionary","A list only"],"A 1D labeled array","Series"),
("How do you read a CSV file?",["pd.read_csv('file.csv')","pd.load('file.csv')","pd.open('file.csv')","pd.import('file.csv')"],"pd.read_csv('file.csv')","Reading CSV"),
("How do you select a column?",["df['column_name']","df.select('column_name')","df.get('column_name')","df.col('column_name')"],"df['column_name']","Basic Selection"),
("How do you filter rows based on a condition?",["df[df['col'] > value]","df.filter(col > value)","df.where(col > value)","df.select(col > value)"],"df[df['col'] > value]","Filtering"),
])
add("Pandas","medium",[
("What does groupby() do?",["Groups data by column values for aggregation","Sorts data","Filters data","Merges data"],"Groups data by column values for aggregation","GroupBy"),
("How do you merge two DataFrames?",["pd.merge(df1, df2, on='key')","df1 + df2","df1.add(df2)","pd.join(df1, df2)"],"pd.merge(df1, df2, on='key')","Merge/Join"),
("What does pivot_table() create?",["A spreadsheet-style pivot table","A bar chart","A new DataFrame","A Series"],"A spreadsheet-style pivot table","Pivot Tables"),
("How do you handle missing data?",["df.fillna() or df.dropna()","df.remove_null()","df.clean()","df.fix()"],"df.fillna() or df.dropna()","Missing Data"),
("What does df.apply() do?",["Applies a function along an axis of the DataFrame","Filters data","Sorts data","Merges data"],"Applies a function along an axis of the DataFrame","Apply Functions"),
])
add("Pandas","hard",[
("What is a MultiIndex?",["A hierarchical index with multiple levels","A single index","A column name","A data type"],"A hierarchical index with multiple levels","MultiIndex"),
("What are rolling window functions?",["Functions computed over a sliding window of data","Static calculations","Group operations","Filter operations"],"Functions computed over a sliding window of data","Window Functions"),
("How do you optimize Pandas performance?",["Use vectorized ops, appropriate dtypes, and chunking","Add more columns","Use loops","Use larger DataFrames"],"Use vectorized ops, appropriate dtypes, and chunking","Performance"),
("What is a custom accessor?",["An extension method registered with @pd.api.extensions","A built-in method","A column type","An index type"],"An extension method registered with @pd.api.extensions","Custom Accessors"),
("How do you reduce DataFrame memory usage?",["Use category dtype, downcast numerics, sparse arrays","Add more RAM","Use larger dtypes","Ignore memory"],"Use category dtype, downcast numerics, sparse arrays","Memory Optimization"),
])

# Remaining simple skills
for sk in ["Bootstrap","Dart","Matplotlib","OpenCV","NLP","Scikit-learn","HTML","CSS","JupyterNotebook","NumPy","NodeJS"]:
    Q[sk] = {"easy":[],"medium":[],"hard":[]}

# Now write the file
lines = ['// ============================================================']
lines.append('// QUESTION BANK — Multi-Question Decision Tree')
lines.append('// Structure: { "Skill": { easy: [...], medium: [...], hard: [...] } }')
lines.append('// Each level has 5 questions with topic fields.')
lines.append('// ============================================================')
lines.append('')
lines.append('const QUESTION_BANK = ' + json.dumps(Q, indent=2, ensure_ascii=False) + ';')
lines.append('')
lines.append('// ============================================================')
lines.append('// SCORING CONFIGURATION')
lines.append('// ============================================================')
lines.append('const SCORING_CONFIG = {')
lines.append('  weights: { easy: 1, medium: 2, hard: 3 },')
lines.append('  thresholds: { easy: 0.60, medium: 0.60, hard: 0.70 }')
lines.append('};')
lines.append('')
lines.append('// ============================================================')
lines.append('// RESOURCE SUGGESTIONS for weak topics')
lines.append('// ============================================================')
lines.append('const RESOURCE_SUGGESTIONS = {')
lines.append('  "React": { youtube: "Traversy Media - React Crash Course", roadmap: "roadmap.sh/react", practice: "Build a Todo App" },')
lines.append('  "Node.js": { youtube: "Traversy Media - Node.js Crash Course", roadmap: "roadmap.sh/nodejs", practice: "Build a REST API" },')
lines.append('  "Python": { youtube: "Corey Schafer - Python Tutorials", roadmap: "roadmap.sh/python", practice: "LeetCode Easy" },')
lines.append('  "SQL": { youtube: "Programming with Mosh - SQL", roadmap: "roadmap.sh/sql", practice: "SQLZoo exercises" },')
lines.append('  "Docker": { youtube: "TechWorld with Nana - Docker", roadmap: "roadmap.sh/devops", practice: "Dockerize a web app" },')
lines.append('  "JavaScript": { youtube: "Traversy Media - JS Crash Course", roadmap: "roadmap.sh/javascript", practice: "LeetCode Easy" },')
lines.append('  "Java": { youtube: "Telusko - Java Tutorial", roadmap: "roadmap.sh/java", practice: "HackerRank Java" },')
lines.append('  "DSA": { youtube: "Abdul Bari - Algorithms", roadmap: "roadmap.sh/datastructures-and-algorithms", practice: "LeetCode" },')
lines.append('  "AWS": { youtube: "FreeCodeCamp - AWS Certified", roadmap: "roadmap.sh/aws", practice: "AWS Free Tier labs" },')
lines.append('  "TypeScript": { youtube: "Traversy Media - TypeScript", roadmap: "roadmap.sh/typescript", practice: "Type Challenges" },')
lines.append('  "MongoDB": { youtube: "Traversy Media - MongoDB", roadmap: "roadmap.sh/mongodb", practice: "MongoDB University" },')
lines.append('  "Django": { youtube: "Corey Schafer - Django", roadmap: "roadmap.sh/python", practice: "Build a blog" },')
lines.append('  "Flask": { youtube: "Corey Schafer - Flask", roadmap: "roadmap.sh/python", practice: "Build a REST API" },')
lines.append('  "Git": { youtube: "Traversy Media - Git", roadmap: "roadmap.sh/git-github", practice: "Learn Git Branching" },')
lines.append('  "C++": { youtube: "The Cherno - C++", roadmap: "roadmap.sh/cpp", practice: "LeetCode C++" },')
lines.append('  "Kubernetes": { youtube: "TechWorld with Nana - K8s", roadmap: "roadmap.sh/kubernetes", practice: "Minikube labs" },')
lines.append('  "TensorFlow": { youtube: "Sentdex - TensorFlow", roadmap: "roadmap.sh/ai-data-scientist", practice: "Kaggle competitions" },')
lines.append('  "Pandas": { youtube: "Corey Schafer - Pandas", roadmap: "roadmap.sh/python", practice: "Kaggle datasets" },')
lines.append('  "default": { youtube: "FreeCodeCamp", roadmap: "roadmap.sh", practice: "Practice projects" }')
lines.append('};')

with open(r'd:\Resume_lie_detector\frontend\js\questions.js', 'w', encoding='utf-8') as f:
    f.write('\n'.join(lines))

print(f"Generated questions.js with {len(Q)} skills")
for s in Q:
    e,m,h = len(Q[s]['easy']), len(Q[s]['medium']), len(Q[s]['hard'])
    if e+m+h > 0:
        print(f"  {s}: easy={e}, medium={m}, hard={h}")

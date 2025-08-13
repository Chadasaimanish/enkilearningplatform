

import React from 'react';
import { Language, LanguageCurriculum } from './types';
import { PythonIcon, JavaScriptIcon, JavaIcon } from './components/icons/Icons';

export const LANGUAGES: Language[] = [
  {
    id: 'python',
    name: 'Python',
    logo: <PythonIcon />,
    description: 'Master the versatile language of data science and web development.',
    color: 'from-blue-500 to-yellow-400',
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    logo: <JavaScriptIcon />,
    description: 'Become proficient in the language that powers the web.',
    color: 'from-yellow-400 to-orange-500',
  },
  {
    id: 'java',
    name: 'Java',
    logo: <JavaIcon />,
    description: 'Learn the robust, object-oriented language for enterprise-scale applications.',
    color: 'from-red-500 to-blue-400',
  },
];

export const CURRICULUM: LanguageCurriculum = {
  python: [
    {
      id: 'py_level_1',
      title: 'Level 1: Python Basics',
      description: 'Start your journey by learning the fundamental building blocks of Python programming, from printing text to working with variables and lists.',
      lessons: [
        { id: 'py1', title: 'Hello, World!', description: 'Your first step in Python. Use the `print()` function to display "Hello, World!" to the console.', xp: 10, initialCode: '# Your code here\nprint("Hello, World!")' },
        { id: 'py2', title: 'Variables and Data Types', description: 'Create variables of different types (string, integer, float) and print them.', xp: 15, initialCode: '# String\nname = "CodeQuest"\n# Integer\nage = 1\n# Float\nversion = 1.0\n\nprint(name)\nprint(age)\nprint(version)' },
        { id: 'py3', title: 'Working with Lists', description: 'Create a list of numbers. Append a new number to the list and then print the third element.', xp: 20, initialCode: 'numbers = [10, 20, 30, 40]\n\n# Append the number 50 to the list\nnumbers.append(50)\n\n# Print the third element (index 2)\nprint(numbers[2])' },
      ],
    },
    {
        id: 'py_level_2',
        title: 'Level 2: Logic and Functions',
        description: 'Control the flow of your code with conditional logic and loops, and learn to write reusable functions.',
        lessons: [
            { id: 'py4', title: 'Conditional Logic (if-else)', description: 'Write an if-else statement that checks if a number is positive or non-positive and prints a message.', xp: 20, initialCode: 'number = 5\n\n# Write your if-else statement here\nif number > 0:\n  print("The number is positive.")\nelse:\n  print("The number is not positive.")' },
            { id: 'py5', title: 'For Loops', description: 'Use a for loop to iterate through a list of fruits and print each one.', xp: 25, initialCode: 'fruits = ["Apple", "Banana", "Cherry"]\n\n# Write your for loop here\nfor fruit in fruits:\n  print(fruit)' },
            { id: 'py6', title: 'Defining Functions', description: 'Define a function called `add` that takes two numbers as arguments and returns their sum. Call it and print the result.', xp: 30, initialCode: '# Define the function `add`\ndef add(a, b):\n  return a + b\n\n# Call the function with 5 and 3, and print the result\nresult = add(5, 3)\nprint(result)' },
        ],
    },
    {
        id: 'py_level_3',
        title: 'Level 3: Advanced Data Structures',
        description: 'Explore more complex data types like dictionaries and learn the basics of object-oriented programming with classes.',
        lessons: [
            { id: 'py7', title: 'Understanding Dictionaries', description: 'Create a dictionary to store user information (name, age). Access and print the user\'s age.', xp: 30, initialCode: 'user = {\n  "name": "Alex",\n  "age": 25\n}\n\n# Access and print the age\nprint(user["age"])' },
            { id: 'py8', title: 'Basic Classes and Objects', description: 'Create a simple `Dog` class with a `bark` method that prints "Woof!". Create an instance of the class and call the method.', xp: 40, initialCode: '# Define the Dog class\nclass Dog:\n  def bark(self):\n    print("Woof!")\n\n# Create an instance of Dog\nmy_dog = Dog()\n\n# Call the bark method\nmy_dog.bark()' },
        ],
    },
    {
        id: 'py_level_4',
        title: 'Level 4: File I/O and Modules',
        description: 'Learn to interact with the filesystem and leverage powerful pre-built modules.',
        lessons: [
            { id: 'py9', title: 'Reading Files', description: 'Learn to read data from files. Use a `with` statement to open `note.txt` and print its contents. Assume `note.txt` contains "Python is powerful.".', xp: 35, initialCode: '# The \'with\' statement ensures the file is properly closed.\n# Our evaluator simulates a file for this exercise.\nwith open(\'note.txt\', \'r\') as file:\n    content = file.read()\n    print(content)' },
            { id: 'py10', title: 'Writing to Files', description: 'Learn how to write text to a file. Open `log.txt` in write mode (\'w\') and write "Mission accomplished.". Then, read it back to verify.', xp: 35, initialCode: 'text_to_write = "Mission accomplished."\nfile_name = "log.txt"\n\n# Write to the file\nwith open(file_name, \'w\') as file:\n    file.write(text_to_write)\n\n# Read it back to verify (for output)\nwith open(file_name, \'r\') as file:\n    print(file.read())' },
            { id: 'py11', title: 'Using Modules', description: 'Modules expand Python\'s power. Import the `math` module and use its `sqrt()` function to calculate and print the square root of 81.', xp: 40, initialCode: '# Import the math module\nimport math\n\n# Calculate the square root of 81\nsquare_root = math.sqrt(81)\n\nprint(square_root)' },
        ],
    },
    {
        id: 'py_level_5',
        title: 'Level 5: Advanced Topics',
        description: 'Master powerful Python features like list comprehensions, error handling, and object-oriented inheritance.',
        lessons: [
            { id: 'py12', title: 'List Comprehensions', description: 'Create a new list containing the square of each number from an existing list, using a concise list comprehension.', xp: 45, initialCode: 'numbers = [1, 2, 3, 4, 5]\n\n# Use a list comprehension to square each number\nsquares = [n**2 for n in numbers]\n\nprint(squares)' },
            { id: 'py13', title: 'Error Handling', description: 'Handle potential errors gracefully using try...except blocks. Catch the `ZeroDivisionError` when attempting to divide by zero.', xp: 45, initialCode: 'numerator = 10\ndenominator = 0\n\ntry:\n    result = numerator / denominator\n    print(result)\nexcept ZeroDivisionError:\n    print("Error: Cannot divide by zero!")' },
            { id: 'py14', title: 'Class Inheritance', description: 'Inheritance allows a class to inherit attributes and methods. Create a `Bird` class that inherits from a base `Animal` class and overrides a method.', xp: 50, initialCode: '# Base class\nclass Animal:\n    def __init__(self, name):\n        self.name = name\n\n    def speak(self):\n        print("Some generic animal sound")\n\n# Derived class\nclass Bird(Animal):\n    def speak(self):\n        print("Chirp Chirp")\n\nmy_bird = Bird("Sparrow")\nprint(my_bird.name)\nmy_bird.speak()' },
        ]
    }
  ],
  javascript: [
    {
      id: 'js_level_1',
      title: 'Level 1: JavaScript Fundamentals',
      description: 'Grasp the basics of the language of the web, including variables, console logging, and arrays.',
      lessons: [
        { id: 'js1', title: 'Hello, World!', description: 'Your first step in JavaScript. Use `console.log()` to display "Hello, World!".', xp: 10, initialCode: '// Your code here\nconsole.log("Hello, World!");' },
        { id: 'js2', title: 'Variables with let and const', description: 'Declare a variable `score` with `let` and a constant `playerName` with `const`. Log both to the console.', xp: 15, initialCode: 'let score = 100;\nconst playerName = "Hero";\n\n// Log the variables\nconsole.log(score);\nconsole.log(playerName);' },
        { id: 'js3', title: 'Arrays', description: 'Create an array of your favorite games. Use `push` to add a new game, then log the length of the array.', xp: 20, initialCode: 'const favoriteGames = ["Zelda", "Mario", "Metroid"];\n\n// Add a new game to the array\nfavoriteGames.push("Hades");\n\n// Log the array\'s length\nconsole.log(favoriteGames.length);' },
      ]
    },
    {
      id: 'js_level_2',
      title: 'Level 2: Logic and Functions',
      description: 'Dive into conditional logic, loops, and modern arrow functions to make your code dynamic and efficient.',
      lessons: [
        { id: 'js4', title: 'Conditional Logic (if-else)', description: 'Check if a variable `isLoggedIn` is true. If it is, log "Welcome back!". Otherwise, log "Please log in."', xp: 20, initialCode: 'const isLoggedIn = true;\n\n// Write your if-else statement here\nif (isLoggedIn) {\n  console.log("Welcome back!");\n} else {\n  console.log("Please log in.");\n}' },
        { id: 'js5', title: 'For Loops', description: 'Use a for loop to log the numbers 1 through 5 to the console.', xp: 25, initialCode: '// Write a for loop here\nfor (let i = 1; i <= 5; i++) {\n  console.log(i);\n}' },
        { id: 'js6', title: 'Arrow Functions', description: 'Create an arrow function `multiply` that takes two numbers, `a` and `b`, and returns their product. Log the result of `multiply(4, 7)`.', xp: 30, initialCode: '// Create the arrow function\nconst multiply = (a, b) => a * b;\n\n// Call the function and log the result\nconsole.log(multiply(4, 7));' },
      ]
    },
    {
      id: 'js_level_3',
      title: 'Level 3: Objects and Asynchronicity',
      description: 'Understand how to work with complex data using objects and get introduced to the asynchronous nature of JavaScript.',
      lessons: [
        { id: 'js7', title: 'Working with Objects', description: 'Create an object `car` with properties `make`, `model`, and `year`. Log the `model` property to the console.', xp: 30, initialCode: 'const car = {\n  make: "CodeQuest",\n  model: "Model-AI",\n  year: 2024\n};\n\n// Log the car\'s model\nconsole.log(car.model);' },
        { id: 'js8', title: 'Asynchronous JavaScript (setTimeout)', description: 'Use `setTimeout` to log the message "Task Complete!" to the console after a 1-second delay.', xp: 40, initialCode: 'console.log("Starting task...");\n\n// Use setTimeout to log a message after 1000ms\nsetTimeout(() => {\n  console.log("Task Complete!");\n}, 1000);' },
      ]
    },
    {
        id: 'js_level_4',
        title: 'Level 4: Modern JavaScript Features',
        description: 'Explore modern syntax and powerful array methods that make your code cleaner and more expressive.',
        lessons: [
            { id: 'js9', title: 'Template Literals', description: 'Use template literals (backticks) to create a dynamic string that includes variable values without concatenation.', xp: 35, initialCode: 'const user = "Alex";\nconst score = 125;\n\n// Create a greeting using template literals\nconst greeting = `Hello, ${user}! Your score is ${score}.`;\n\nconsole.log(greeting);' },
            { id: 'js10', title: 'Destructuring', description: 'Easily extract values from objects and arrays. Pull the `title` and `author` properties from the `book` object.', xp: 35, initialCode: 'const book = {\n  title: "The Hobbit",\n  author: "J.R.R. Tolkien",\n  year: 1937\n};\n\n// Destructure title and author from the book object\nconst { title, author } = book;\n\nconsole.log(title);\nconsole.log(author);' },
            { id: 'js11', title: 'Array Methods: .map()', description: 'The `.map()` method creates a new array by transforming every element in an old array. Create a new array that doubles every number.', xp: 40, initialCode: 'const numbers = [1, 2, 3, 4];\n\n// Use .map() to create a new array with doubled values\nconst doubled = numbers.map(num => num * 2);\n\nconsole.log(doubled);' },
        ],
    },
    {
        id: 'js_level_5',
        title: 'Level 5: Advanced Asynchronous JS',
        description: 'Master handling asynchronous operations with Promises and the elegant async/await syntax.',
        lessons: [
            { id: 'js12', title: 'Promises', description: 'Promises represent the eventual completion of an async operation. Create a simple promise that resolves after 1 second.', xp: 45, initialCode: 'const myPromise = new Promise((resolve, reject) => {\n  setTimeout(() => {\n    resolve("Promise resolved!");\n  }, 1000);\n});\n\nmyPromise.then((message) => {\n  console.log(message);\n});\n\nconsole.log("Promise created.");' },
            { id: 'js13', title: 'Async/Await', description: 'Async/await provides a cleaner syntax for working with promises. Rewrite a promise-based function to use async/await.', xp: 50, initialCode: 'function delayedMessage() {\n  return new Promise(resolve => {\n    setTimeout(() => resolve("Here is the message!"), 1000);\n  });\n}\n\nasync function getMessage() {\n  console.log("Waiting for message...");\n  const message = await delayedMessage();\n  console.log(message);\n}\n\ngetMessage();' },
            { id: 'js14', title: 'Array Methods: .reduce()', description: 'The `.reduce()` method executes a function on each array element to produce a single output value. Use it to sum all numbers in an array.', xp: 50, initialCode: 'const numbers = [10, 20, 30, 40];\n\n// Use .reduce() to sum up all the numbers\nconst sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);\n\nconsole.log(sum);' },
        ]
    }
  ],
  java: [
    {
      id: 'java_level_1',
      title: 'Level 1: Java Core Concepts',
      description: 'Build a solid foundation in Java by learning about its syntax, data types, and conditional statements.',
      lessons: [
        { id: 'java1', title: 'Hello, World!', description: 'Your first Java program. Use `System.out.println()` to print "Hello, World!".', xp: 10, initialCode: 'public class Main {\n  public static void main(String[] args) {\n    // Your code here\n    System.out.println("Hello, World!");\n  }\n}' },
        { id: 'java2', title: 'Variables and Data Types', description: 'Declare an `int` for age, a `double` for price, and a `String` for name. Print all of them.', xp: 15, initialCode: 'public class Main {\n  public static void main(String[] args) {\n    int age = 30;\n    double price = 19.99;\n    String name = "JavaFan";\n\n    System.out.println(name + " is " + age + " and bought something for $" + price);\n  }\n}' },
        { id: 'java3', title: 'Conditional Logic (if-else)', description: 'Write an if-else statement to check if a student\'s grade is a passing grade (>= 60).', xp: 20, initialCode: 'public class Main {\n  public static void main(String[] args) {\n    int grade = 75;\n\n    // Check if grade is passing\n    if (grade >= 60) {\n      System.out.println("Passing grade!");\n    } else {\n      System.out.println("Failing grade.");\n    }\n  }\n}' },
      ]
    },
    {
      id: 'java_level_2',
      title: 'Level 2: Methods and Control Structures',
      description: 'Learn how to handle collections of data with arrays and write your own reusable methods.',
      lessons: [
        { id: 'java4', title: 'Arrays', description: 'Create an array of integers. Use a loop to iterate through the array and print each element.', xp: 25, initialCode: 'public class Main {\n  public static void main(String[] args) {\n    int[] numbers = {1, 2, 3, 4, 5};\n\n    // Loop through the array and print each number\n    for (int number : numbers) {\n      System.out.println(number);\n    }\n  }\n}' },
        { id: 'java5', title: 'Methods', description: 'Create a static method `greetUser` that takes a `String` name and prints "Hello, [name]!". Call it from `main`.', xp: 30, initialCode: 'public class Main {\n  // Create your method here\n  public static void greetUser(String name) {\n    System.out.println("Hello, " + name + "!");\n  }\n\n  public static void main(String[] args) {\n    // Call the method\n    greetUser("Developer");\n  }\n}' },
      ]
    },
    {
      id: 'java_level_3',
      title: 'Level 3: Object-Oriented Programming',
      description: 'Dive into the core of Java: object-oriented programming. Learn to define classes, constructors, and methods.',
      lessons: [
        { id: 'java6', title: 'Creating a Class', description: 'Create a `Car` class with two String fields: `make` and `model`.', xp: 35, initialCode: 'class Car {\n  // Add fields for make and model\n  String make;\n  String model;\n}\n\npublic class Main {\n  public static void main(String[] args) {\n    // This class will be used to test your Car class\n    Car myCar = new Car();\n    myCar.make = "Tesla";\n    myCar.model = "Model S";\n    System.out.println("Created a " + myCar.make + " " + myCar.model);\n  }\n}' },
        { id: 'java7', title: 'Class Constructors', description: 'Add a constructor to your `Car` class that takes `make` and `model` as arguments and initializes the fields.', xp: 40, initialCode: 'class Car {\n  String make;\n  String model;\n\n  // Add your constructor here\n  public Car(String make, String model) {\n    this.make = make;\n    this.model = model;\n  }\n}\n\npublic class Main {\n  public static void main(String[] args) {\n    Car myCar = new Car("Ford", "Mustang");\n    System.out.println("Created a " + myCar.make + " " + myCar.model);\n  }\n}' },
        { id: 'java8', title: 'Class Methods', description: 'Add a method `displayInfo` to your `Car` class that prints the car\'s make and model.', xp: 40, initialCode: 'class Car {\n  String make;\n  String model;\n\n  public Car(String make, String model) {\n    this.make = make;\n    this.model = model;\n  }\n\n  // Add the displayInfo method here\n  public void displayInfo() {\n    System.out.println("Car: " + make + " " + model);\n  }\n}\n\npublic class Main {\n  public static void main(String[] args) {\n    Car myCar = new Car("Honda", "Civic");\n    // Call the displayInfo method\n    myCar.displayInfo();\n  }\n}' },
      ]
    },
    {
        id: 'java_level_4',
        title: 'Level 4: Collections and Generics',
        description: 'Work with powerful data structures from the Java Collections Framework like ArrayList and HashMap.',
        lessons: [
          { id: 'java9', title: 'ArrayList', description: 'Create an ArrayList of Strings, add names, and print the second name in the list.', xp: 45, initialCode: 'import java.util.ArrayList;\n\npublic class Main {\n  public static void main(String[] args) {\n    ArrayList<String> names = new ArrayList<>();\n    names.add("Alice");\n    names.add("Bob");\n    names.add("Charlie");\n    System.out.println(names.get(1));\n  }\n}' },
          { id: 'java10', title: 'HashMap', description: 'Use a HashMap to store player scores (name/score pairs) and retrieve a specific player\'s score.', xp: 45, initialCode: 'import java.util.HashMap;\n\npublic class Main {\n  public static void main(String[] args) {\n    HashMap<String, Integer> scores = new HashMap<>();\n    scores.put("PlayerOne", 100);\n    scores.put("PlayerTwo", 150);\n    System.out.println(scores.get("PlayerTwo"));\n  }\n}' },
          { id: 'java11', title: 'Looping Collections', description: 'Use an enhanced for loop to iterate over the elements in an ArrayList and print each one.', xp: 40, initialCode: 'import java.util.ArrayList;\n\npublic class Main {\n  public static void main(String[] args) {\n    ArrayList<String> languages = new ArrayList<>();\n    languages.add("Java");\n    languages.add("Python");\n    languages.add("JavaScript");\n    for (String lang : languages) {\n      System.out.println(lang);\n    }\n  }\n}' },
        ]
    },
    {
        id: 'java_level_5',
        title: 'Level 5: Advanced Java Concepts',
        description: 'Explore key advanced concepts including inheritance, interfaces, and robust error handling.',
        lessons: [
          { id: 'java12', title: 'Inheritance', description: 'Create a `Manager` class that extends an `Employee` class to inherit its properties and methods.', xp: 50, initialCode: 'class Employee {\n  String name = "John Doe";\n  public void work() {\n    System.out.println("Working...");\n  }\n}\n\nclass Manager extends Employee {\n  String department = "Engineering";\n  public void lead() {\n    System.out.println("Leading the team!");\n  }\n}\n\npublic class Main {\n  public static void main(String[] args) {\n    Manager mgr = new Manager();\n    mgr.work();\n    mgr.lead();\n    System.out.println("Manager name: " + mgr.name);\n  }\n}' },
          { id: 'java13', title: 'Interfaces', description: 'An interface is an abstract type used to group related methods. Implement a `Loggable` interface in a `Server` class.', xp: 50, initialCode: 'interface Loggable {\n  void logInfo(String message);\n}\n\nclass Server implements Loggable {\n  @Override\n  public void logInfo(String message) {\n    System.out.println("LOG: " + message);\n  }\n}\n\npublic class Main {\n  public static void main(String[] args) {\n    Server myServer = new Server();\n    myServer.logInfo("Server has started.");\n  }\n}' },
          { id: 'java14', title: 'Exception Handling', description: 'Use a `try...catch` block to handle errors. Catch an `ArrayIndexOutOfBoundsException`.', xp: 45, initialCode: 'public class Main {\n  public static void main(String[] args) {\n    try {\n      int[] numbers = {1, 2, 3};\n      System.out.println(numbers[5]); // This will cause an error\n    } catch (ArrayIndexOutOfBoundsException e) {\n      System.out.println("Error: Array index is out of bounds.");\n    }\n  }\n}' },
        ]
    }
  ],
};

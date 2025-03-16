/*📌 JavaScript Functions: Declaration, Expressions, and Arrow Functions (Explained with Examples)
Functions are reusable blocks of code that execute a specific task. JavaScript provides three ways to define functions:
1️⃣ Function Declarations
2️⃣ Function Expressions
3️⃣ Arrow Functions

1️⃣ Function Declaration
✅ Uses the function keyword with a name.
✅ Hoisted (can be called before its definition).

🔹 Syntax:
javascript
Copy
Edit
function functionName(parameters) {
  // Code to execute
  return result;
}
✅ Example 1: Function Declaration
javascript
Copy
Edit
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("Alice")); // Output: Hello, Alice!
✅ Example 2: Function with Default Parameters
javascript
Copy
Edit
function multiply(a, b = 2) { // 'b' has a default value of 2
  return a * b;
}

console.log(multiply(5));  // Output: 10 (5 * 2)
console.log(multiply(5, 3)); // Output: 15
🔹 Key Point: Function declarations are hoisted, meaning you can call them before they are defined.

javascript
Copy
Edit
console.log(add(4, 5)); // ✅ Works! Output: 9

function add(a, b) {
  return a + b;
}
2️⃣ Function Expression
✅ A function assigned to a variable.
✅ Not hoisted (cannot be called before its definition).

🔹 Syntax:
javascript
Copy
Edit
const functionName = function(parameters) {
  // Code to execute
  return result;
};
✅ Example 1: Function Expression
javascript
Copy
Edit
const subtract = function(a, b) {
  return a - b;
};

console.log(subtract(10, 3)); // Output: 7
✅ Example 2: Anonymous Function (No Name)
javascript
Copy
Edit
const square = function(n) {
  return n * n;
};

console.log(square(4)); // Output: 16
🔹 Key Point: Function expressions are not hoisted, meaning you cannot call them before they are defined.

javascript
Copy
Edit
console.log(multiply(3, 4)); // ❌ Error! Cannot access 'multiply' before initialization

const multiply = function(a, b) {
  return a * b;
};
3️⃣ Arrow Functions (ES6)
✅ A shorter syntax for writing functions.
✅ Does not have its own this context (inherits from surrounding scope).

🔹 Syntax:
javascript
Copy
Edit
const functionName = (parameters) => {
  // Code to execute
  return result;
};
✅ Example 1: Arrow Function with Multiple Parameters
javascript
Copy
Edit
const divide = (a, b) => a / b;

console.log(divide(10, 2)); // Output: 5
✅ Example 2: Arrow Function with One Parameter (No Parentheses Needed)
javascript
Copy
Edit
const double = x => x * 2;

console.log(double(5)); // Output: 10
✅ Example 3: Arrow Function with No Parameters
javascript
Copy
Edit
const greet = () => "Hello, World!";

console.log(greet()); // Output: Hello, World!
✅ Example 4: Arrow Function with Multiple Statements (Requires {} and return)
javascript
Copy
Edit
const addNumbers = (a, b) => {
  let sum = a + b;
  return sum;
};

console.log(addNumbers(3, 7)); // Output: 10
🔹 Key Point: Arrow functions do not have their own this. This makes them useful in callbacks.

javascript
Copy
Edit
const person = {
  name: "Alice",
  greet: function() {
    setTimeout(() => {
      console.log(`Hello, my name is ${this.name}`);
    }, 1000);
  }
};

person.greet(); // ✅ Works! Output: Hello, my name is Alice
🔥 Key Differences Between Function Types
Feature	Function Declaration	Function Expression	Arrow Function
Hoisted?	✅ Yes	❌ No	❌ No
Can be Anonymous?	❌ No	✅ Yes	✅ Yes
Uses this?	✅ Yes	✅ Yes	❌ No
Short Syntax?	❌ No	❌ No	✅ Yes
🎯 When to Use Which Function?
✅ Use Function Declarations when you need hoisting or want a named function.
✅ Use Function Expressions when you need an anonymous function (e.g., inside a callback).
✅ Use Arrow Functions for shorter syntax, especially for callbacks and functional programming.

🛠 Practice Tasks
🔹 Convert a function declaration into an arrow function.
🔹 Write a function expression that returns the square of a number.
🔹 Use an arrow function inside setTimeout().

Would you like some real-world projects using functions? 🚀😊







You said:
2
ChatGPT said:
Could you clarify what you mean by "2"? Are you asking for:

1️⃣ More examples of functions?
2️⃣ Two real-world projects using functions?
3️⃣ A simpler explanation of two function types?

Let me know so I can help you better! 😊*/
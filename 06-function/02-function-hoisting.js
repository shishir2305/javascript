// ==========================================
// FUNCTION HOISTING IN JAVASCRIPT
// ==========================================

// 1. Function declaration
// Function is available before its definition.
greet(); // Hello!

function greet() {
  console.log("Hello!");
}


// 2. Function expression with var
// var is initialized to undefined.
// Uncomment to see the TypeError.

// sayHi(); // TypeError

var sayHi = function () {
  console.log("Hi!");
};

sayHi(); // Hi!


// 3. Function expression with let
// let remains in the TDZ until initialized.
// Uncomment to see the ReferenceError.

// runTask(); // ReferenceError

let runTask = function () {
  console.log("Task running");
};

runTask(); // Task running


// 4. Function expression with const
// const also remains in the TDZ.
// Uncomment to see the ReferenceError.

// doWork(); // ReferenceError

const doWork = function () {
  console.log("Working");
};

doWork(); // Working


// 5. Arrow function with const
// Same hoisting behavior as a const function expression.
// Uncomment to see the ReferenceError.

// calculate(); // ReferenceError

const calculate = (a, b) => a + b;

console.log(calculate(2, 3)); // 5


// 6. Arrow function with var
// Uncomment to see the TypeError.

// execute(); // TypeError

var execute = () => {
  console.log("Executed");
};

execute(); // Executed


// 7. Named function expression
// The name "factorial" is the outer variable.
// "calculateFactorial" is available inside the function.
const factorial = function calculateFactorial(n) {
  if (n <= 1) return 1;
  return n * calculateFactorial(n - 1);
};

console.log(factorial(5)); // 120


// 8. IIFE
// Executes immediately when reached.
(function () {
  console.log("IIFE executed");
})();


// ==========================================
// INTERVIEW TAKEAWAY
// ==========================================
// Function declaration:
//   Callable before definition.
//
// var function expression / arrow function:
//   Variable initialized to undefined;
//   calling before assignment causes TypeError.
//
// let / const function expression / arrow function:
//   Access before initialization causes ReferenceError (TDZ).
//
// Hoisting does not mean JavaScript moves source code.
// It describes declaration setup before execution.
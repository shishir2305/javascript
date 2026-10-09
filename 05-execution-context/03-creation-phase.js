// CREATION PHASE AND EXECUTION PHASE

// During context setup:
// name -> initialized to undefined
// age  -> binding established but uninitialized (TDZ)
// greet -> function declaration available

console.log(name); // undefined

// console.log(age);
// ReferenceError: Cannot access 'age' before initialization

var name = "Shishir";
let age = 24;

function greet() {
  console.log("Hello!");
}

greet(); // Hello!
console.log(age); // 24

// HOISTING EXAMPLE

console.log(value); // undefined
var value = 100;

console.log(value); // 100

// `var` is initialized to undefined during setup;
// the assignment to 100 occurs during execution.

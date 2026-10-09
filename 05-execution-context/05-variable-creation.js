// VARIABLE CREATION IN JAVASCRIPT

// 1. var: created and initialized to undefined during setup.
console.log(a); // undefined

var a = 10;

console.log(a); // 10

// 2. let: binding exists during setup but remains uninitialized.
// console.log(b); // ReferenceError

let b = 20;

console.log(b); // 20

// 3. const: binding exists during setup but remains uninitialized.
// console.log(c); // ReferenceError

const c = 30;

console.log(c); // 30

// const must be initialized when declared.

// 4. Function declarations are available before their position.
greet(); // Hello

function greet() {
  console.log("Hello");
}

// KEY TAKEAWAY:
// var is initialized to undefined during setup.
// let and const remain in the Temporal Dead Zone until
// execution reaches their declarations.
// Function declarations are available before their position.

// FUNCTION CREATION IN JAVASCRIPT

// 1. Function declaration
// Available before its position in the code.
sayHello(); // Hello

function sayHello() {
    console.log("Hello");
}


// 2. Function expression
// The function object is created when this expression executes.
var greet = function () {
    console.log("Welcome");
};

greet(); // Welcome


// 3. Arrow function
// Also created when its expression executes.
const add = (a, b) => a + b;

console.log(add(10, 20)); // 30


// KEY TAKEAWAY:
// Function declarations are initialized during environment setup.
// Function expressions and arrow functions are evaluated when
// execution reaches their expressions.
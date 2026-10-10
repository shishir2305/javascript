// FUNCTIONS IN JAVASCRIPT

// 1. Function declaration
function add(a, b) {
    return a + b;
}
console.log(add(2, 3)); // 5

// 2. Function expression
const subtract = function (a, b) {
    return a - b;
};
console.log(subtract(5, 2)); // 3

// 3. Arrow function
const multiply = (a, b) => a * b;
console.log(multiply(3, 4)); // 12

// 4. Default parameters
function greet(name = "Guest") {
    return `Hello, ${name}`;
}
console.log(greet()); // Hello, Guest

// 5. Rest parameters
function sum(...numbers) {
    return numbers.reduce((total, n) => total + n, 0);
}
console.log(sum(1, 2, 3, 4)); // 10

// 6. Callback function
function process(callback) {
    return callback(10);
}
console.log(process(n => n * 2)); // 20

// 7. Recursion
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5)); // 120

// 8. IIFE
(() => {
    const message = "Executed immediately";
    console.log(message);
})();

// KEY TAKEAWAY:
// Functions package reusable behavior.
// They can accept inputs, return outputs, and be passed
// around as values in JavaScript.
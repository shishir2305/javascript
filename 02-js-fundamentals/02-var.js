// ==========================================
// var IN JAVASCRIPT
// ==========================================

// 1. FUNCTION SCOPED
// var ignores block scope.

{
    var x = 10;
}

console.log(x); // 10


// But functions create scope.

function example() {
    var y = 20;
}

console.log(typeof y); // "undefined"


// ==========================================
// 2. HOISTING
// ==========================================

// Declaration is hoisted.
// Initialization happens where the assignment appears.

console.log(a); // undefined

var a = 100;

// Conceptually:
// var a;
// console.log(a);
// a = 100;


// ==========================================
// 3. REDECLARATION
// ==========================================

var name = "Alice";
var name = "Bob";

console.log(name); // "Bob"


// ==========================================
// 4. REASSIGNMENT
// ==========================================

var count = 10;

count = 20;

console.log(count); // 20


// ==========================================
// 5. LOOP + CLOSURE
// ==========================================

for (var i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 100);
}

// Output:
// 3
// 3
// 3
//
// All callbacks refer to the same `i` binding.
// By the time they execute, the loop has finished
// and i has become 3.


// ==========================================
// 6. var vs let
// ==========================================

{
    var v = 10;
    let l = 20;
}

console.log(v); // 10
// console.log(l); // ReferenceError


// ==========================================
// 7. GLOBAL var IN CLASSIC BROWSER SCRIPTS
// ==========================================

var globalValue = 42;

// In a classic browser script:
console.log(window.globalValue); // 42

// let/const do not behave this way:
// let otherValue = 50;
// console.log(window.otherValue); // undefined


// ==========================================
// INTERVIEW SUMMARY
// ==========================================
//
// var:
// - Function scoped
// - NOT block scoped
// - Hoisted
// - Hoisted value is initially undefined
// - Can be redeclared
// - Can be reassigned
// - Important in closure + loop questions
// - Can become a window property in classic browser scripts
//
// Modern JavaScript:
// Prefer `const` by default.
// Use `let` when reassignment is required.
// Understand `var` because legacy code and interviews use it.
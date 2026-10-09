// SCOPE CHAINING IN JAVASCRIPT

// 1. JavaScript searches from the innermost scope outward.

let globalVar = "Global";

function outer() {
    let outerVar = "Outer";

    function inner() {
        let innerVar = "Inner";

        console.log(innerVar); // Inner: current scope
        console.log(outerVar); // Outer: outer function scope
        console.log(globalVar); // Global: global scope
    }

    inner();
}

outer();


// 2. JavaScript stops at the first matching variable.

let value = "Global value";

function outerFunction() {
    let value = "Outer value";

    function innerFunction() {
        let value = "Inner value";

        console.log(value); // Inner value
    }

    innerFunction();
}

outerFunction();


// 3. If a variable is not found anywhere, a ReferenceError occurs.

function checkVariable() {
    console.log(unknownVariable);
    // ReferenceError: unknownVariable is not defined
}

// checkVariable();


// 4. Inner scopes can access outer variables,
//    but outer scopes cannot access inner variables.

function parent() {
    let parentValue = 100;

    function child() {
        let childValue = 200;
        console.log(parentValue); // 100
    }

    child();

    // console.log(childValue); // ReferenceError
}

parent();


// KEY TAKEAWAY:
// Scope chaining follows the lexical nesting of scopes.
// JavaScript searches inward to outward and uses the first
// matching variable it finds.
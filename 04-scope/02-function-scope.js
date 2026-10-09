// FUNCTION SCOPE IN JAVASCRIPT

// 1. Variables declared inside a function are function-scoped
//    when declared using var, let, or const.

function greet() {
    var name = "Shishir";
    let age = 24;
    const language = "JavaScript";

    console.log(name);     // Shishir
    console.log(age);      // 24
    console.log(language); // JavaScript
}

greet();

// Variables declared inside greet() cannot be accessed outside it.
// console.log(name); // ReferenceError
// console.log(age);  // ReferenceError


// 2. Each function has its own local scope.

function first() {
    let message = "Hello";
    console.log(message); // Hello
}

function second() {
    let message = "Welcome";
    console.log(message); // Welcome
}

first();
second();

// The same variable name can exist in different function scopes.


// 3. Nested functions can access variables from outer functions.

function outer() {
    let outerMessage = "I am from outer()";

    function inner() {
        console.log(outerMessage);
        // I am from outer()
    }

    inner();
}

outer();


// 4. var is function-scoped, not block-scoped.

function checkScope() {
    if (true) {
        var x = 10;
        let y = 20;
    }

    console.log(x); // 10: var belongs to the function scope

    // console.log(y);
    // ReferenceError: y is limited to the if block
}

checkScope();


// KEY TAKEAWAY:
// Function scope restricts variables to the function in which
// they are declared. Nested functions can access outer variables,
// but outer functions cannot access variables inside inner functions.
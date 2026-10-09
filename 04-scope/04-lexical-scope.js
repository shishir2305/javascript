// LEXICAL SCOPE IN JAVASCRIPT

// 1. A function can access variables from its enclosing scope.

let globalMessage = "Hello from global scope";

function outer() {
    let outerMessage = "Hello from outer function";

    function inner() {
        let innerMessage = "Hello from inner function";

        console.log(innerMessage); // Hello from inner function
        console.log(outerMessage); // Hello from outer function
        console.log(globalMessage); // Hello from global scope
    }

    inner();

    // console.log(innerMessage);
    // ReferenceError: innerMessage is not accessible here
}

outer();


// 2. JavaScript searches from the current scope outward.

let value = "Global";

function showValue() {
    let value = "Local";

    console.log(value); // Local
    // The local variable shadows the global variable.
}

showValue();


// 3. Scope depends on where a function is defined,
//    not where it is called.

let message = "Global message";

function printMessage() {
    console.log(message);
}

function caller() {
    let message = "Caller message";

    printMessage(); // Global message
    // printMessage was defined in the global scope,
    // so it looks for message in its lexical environment.
}

caller();


// KEY TAKEAWAY:
// Lexical scope follows the source-code nesting of functions.
// Inner functions can access outer variables, and variable
// lookup proceeds outward through the scope chain.
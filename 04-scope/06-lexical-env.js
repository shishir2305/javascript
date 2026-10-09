// LEXICAL ENVIRONMENT IN JAVASCRIPT

// 1. The global environment contains global declarations.

let globalVar = "Global";

function outer() {
    // 2. The outer function has its own lexical environment.
    let outerVar = "Outer";

    function inner() {
        // 3. The inner function has its own lexical environment.
        let innerVar = "Inner";

        // JavaScript resolves these names through lexical environments.
        console.log(innerVar);  // Inner
        console.log(outerVar);  // Outer
        console.log(globalVar); // Global
    }

    inner();
}

outer();


// 4. Each environment has access to its own bindings
//    and can refer to an outer environment.

let message = "Global message";

function greet() {
    let message = "Local message";

    console.log(message); // Local message
    // The local binding shadows the global binding.
}

greet();


// 5. Lexical environments enable closures.

function createCounter() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}

const counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// createCounter() has returned, but the inner function
// retains access to its lexical environment containing count.


// KEY TAKEAWAY:
// A lexical environment stores scope-related bindings and
// references its outer environment. JavaScript uses these
// connections for variable lookup and closures.
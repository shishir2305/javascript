// EXECUTION CONTEXT IN JAVASCRIPT

// 1. Global execution context is established for top-level code.
const globalName = "Shishir";

function first() {
    // 3. A function execution context is established when called.
    const firstValue = 10;

    second();

    console.log(firstValue);
}

function second() {
    // 4. Another function execution context is established.
    const secondValue = 20;

    console.log(globalName); // Shishir
    console.log(secondValue); // 20
}

// 2. Global code calls first().
first();

// Output:
// Shishir
// 20
// 10

// Conceptual call-stack order:
//
// Global
//   └── first()
//         └── second()
//
// second() returns first, then first() returns to Global.


// 5. Each function call creates a new execution context.

function counter() {
    let count = 0;
    count++;
    console.log(count);
}

counter(); // 1
counter(); // 1

// Each call has its own local `count` binding,
// initialized to 0 every time.
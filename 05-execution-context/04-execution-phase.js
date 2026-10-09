// EXECUTION PHASE IN JAVASCRIPT

// Creation phase establishes the bindings first.
// Execution phase evaluates these statements in order.

var x = 10;
var y = 20;

function add(a, b) {
    var result = a + b;

    console.log(result); // 30
    return result;
}

console.log(x); // 10
console.log(y); // 20

const sum = add(x, y);

console.log(sum); // 30

// Execution flow:
// 1. Assign 10 to x.
// 2. Assign 20 to y.
// 3. Call add(10, 20).
// 4. Create the function execution context.
// 5. Calculate and return 30.
// 6. Assign the returned value to sum.
// 7. Print sum.
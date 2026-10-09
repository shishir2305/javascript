// CALL STACK IN JAVASCRIPT
// The call stack follows LIFO: Last In, First Out.

function first() {
    console.log("First starts");

    second();

    console.log("First ends");
}

function second() {
    console.log("Second starts");

    third();

    console.log("Second ends");
}

function third() {
    console.log("Third executes");
}

first();

// Output:
// First starts
// Second starts
// Third executes
// Second ends
// First ends


// RECURSION AND STACK OVERFLOW

function countDown(number) {
    if (number === 0) {
        console.log("Done");
        return;
    }

    countDown(number - 1);
}

countDown(3); // Done

// Each recursive call adds another active call frame.
// Excessive recursion can exceed the call stack's capacity
// and cause a RangeError: Maximum call stack size exceeded.


// BLOCKING THE CALL STACK

function blockingTask() {
    const start = Date.now();

    while (Date.now() - start < 2000) {
        // Blocks synchronous JavaScript execution for ~2 seconds.
    }

    console.log("Task finished");
}

// blockingTask();
// Other JavaScript callbacks cannot run on this thread
// while this synchronous loop is blocking execution.
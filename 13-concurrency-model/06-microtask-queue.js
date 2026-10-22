// Definition: The microtask queue stores callbacks scheduled by Promise handlers (.then(), .catch(), .finally()), queueMicrotask(), and MutationObserver.
// Execution: Microtasks run after the current synchronous code finishes, before the event loop processes the next task.
// Priority: The microtask queue is drained before the next task begins; newly scheduled microtasks are also processed during that drain.

console.log("Start");

setTimeout(() => console.log("Task"), 0);

Promise.resolve().then(() => console.log("Microtask 1"));

queueMicrotask(() => console.log("Microtask 2"));

console.log("End");

// Output:
// Start
// End
// Microtask 1
// Microtask 2
// Task

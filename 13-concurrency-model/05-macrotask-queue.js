// Definition: The macrotask queue (task queue) holds callbacks from operations such as setTimeout, setInterval, and DOM events, waiting to execute.
// Execution: After the current synchronous code finishes and microtasks are drained, the event loop can pick the next task.
// Priority: Microtasks, such as Promise .then() callbacks, generally run before the next macrotask is processed.

console.log("1: Start");

setTimeout(() => console.log("2: Macrotask"), 0);

Promise.resolve().then(() => console.log("3: Microtask"));

console.log("4: End");

// Output:
// 1: Start
// 4: End
// 3: Microtask
// 2: Macrotask
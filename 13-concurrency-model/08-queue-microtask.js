// queueMicrotask() is a JavaScript function that schedules a callback to run in the microtask queue, after the current synchronous JavaScript code finishes but before the event loop moves on to the next task.

// It is useful when you want some code to execute just after the current operation, without running it immediately or scheduling a timer.

console.log("Start");

setTimeout(() => {
  console.log("Timeout callback");
}, 0);

queueMicrotask(() => {
  console.log("Microtask callback");
});

console.log("End");

// Output:
// Start
// End
// Microtask callback
// Timeout callback

// Real world use cases:
// Consistent API callbacks: Use queueMicrotask() to defer cached results so callbacks execute after synchronous code finishes, ensuring consistent execution timing.

// Batching updates: Schedule one microtask to group multiple synchronous state changes and notify listeners once with the final state, reducing redundant updates.

// Deferred notifications: Notify subscribers after the current operation completes, so they receive fully updated data instead of observing intermediate states.

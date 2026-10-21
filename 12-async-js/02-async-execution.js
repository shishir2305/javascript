// Asynchronous execution allows an operation to be initiated without requiring the current execution flow to wait for its completion. Its result can be handled later.

// The timer callback runs after the current synchronous code.
console.log("Start");

setTimeout(() => {
  console.log("Timer completed");
}, 0);

console.log("End");

// Output:
// Start
// End
// Timer completed
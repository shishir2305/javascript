// Definition: setImmediate() is a Node.js API that schedules a callback to execute during the check phase of the event loop, after the poll phase.

console.log("Start");

setImmediate(() => {
  console.log("Immediate callback");
});

console.log("End");

// Output:
// Start
// End
// Immediate callback

// Real-World Use Cases:

// I/O follow-up: Schedule additional work after processing a file or network callback.
// Deferred execution: Execute a callback after the current synchronous code finishes.
// Chunked processing: Process work in small chunks, scheduling subsequent chunks with setImmediate() to give other callbacks a chance to execute.

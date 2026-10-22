// process.nextTick() is a Node.js-specific scheduling API. It queues a callback in the next-tick queue, which Node.js processes before proceeding to its next event-loop phase.

// It is not the same as a promise microtask, even though both have higher priority than ordinary event-loop tasks in common examples.

console.log("Start");

setTimeout(() => {
  console.log("Timer");
}, 0);

setImmediate(() => {
  console.log("Immediate");
});

Promise.resolve().then(() => {
  console.log("Promise microtask");
});

process.nextTick(() => {
  console.log("Next tick");
});

console.log("End");

// Expected output:
// Start
// End
// Next tick
// Promise microtask
// Timer
// Immediate

// Why does process.nextTick() exist?
// It allows Node.js to defer work until the current JavaScript operation finishes, without waiting for an ordinary event-loop phase.

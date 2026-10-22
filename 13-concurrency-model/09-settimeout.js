// setTimeout() schedules a callback to become eligible after a specified delay. It does not promise execution at the exact requested time.

setTimeout(() => {
  console.log("Timer callback");
}, 0);

// Keep the current thread busy for about 2 seconds.
const start = Date.now();

while (Date.now() - start < 2000) {}

console.log("Synchronous work finished");

// Output:
// Synchronous work finished
// Timer callback

// Common use cases
// - Deferring non-urgent work to a later task.
// - Implementing a debounce delay.
// - Scheduling retries.
// - Giving the current JavaScript execution a chance to finish.

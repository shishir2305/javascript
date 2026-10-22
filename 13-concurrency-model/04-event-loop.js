// The event loop coordinates the execution of queued work with the currently executing JavaScript.

// At a high level, the browser follows these rules:
// 1. Execute the current synchronous JavaScript until the stack is clear.
// 2. Drain the microtask queue, including microtasks added by other microtasks.
// 3. The browser may perform rendering work when appropriate.
// 4. Continue processing eligible tasks and other event-loop work.
// This is a simplified model. Browsers have multiple task sources, and rendering is not guaranteed after every task.
// Example: Synchronous code versus asynchronous code

console.log("1. Start");

setTimeout(() => {
  console.log("3. Timer callback");
}, 0);

console.log("2. End");

// Output:
// 1. Start
// 2. End
// 3. Timer callback

// Why?
// - console.log("1. Start") executes immediately.
// - The timer schedules a callback for later.
// - The current synchronous code continues, printing "2. End".
// - Once the callback is eligible and the JavaScript thread can run it, the timer callback executes.
// setTimeout(..., 0) does not mean “execute this callback immediately.” It means the timer has a zero-millisecond requested delay, subject to scheduling rules and possible clamping.

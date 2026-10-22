
const fs = require("node:fs");

/*
NODE.JS EVENT LOOP — COMPLETE GUIDE

1. SYNCHRONOUS EXECUTION
   JavaScript executes synchronous code line by line on the call stack.
   Node.js does not wait for timers or asynchronous I/O to finish.
*/

console.log("1. Synchronous: Start");

/*
2. process.nextTick()

   Schedules a callback in Node.js's next-tick queue.
   In CommonJS, at the relevant checkpoint, Node processes this queue
   before processing Promise and queueMicrotask callbacks.

   IMPORTANT: This is NOT an event loop phase.
*/

process.nextTick(() => {
  console.log("3. process.nextTick()");
});

/*
3. queueMicrotask()

   Schedules a callback in the microtask queue.
   Microtasks run after the current synchronous execution or callback.
*/

queueMicrotask(() => {
  console.log("4. queueMicrotask()");
});

/*
4. PROMISE CALLBACKS

   Promise.then(), catch(), and finally() schedule reactions as
   microtasks when their Promise settles.
*/

Promise.resolve().then(() => {
  console.log("5. Promise.then()");
});

/*
5. setTimeout()

   Schedules a timer callback after a minimum delay threshold.
   A delay of 0 does NOT mean that it runs immediately.

   Timer callbacks are processed in the Timers phase when eligible.
*/

setTimeout(() => {
  console.log("6. setTimeout() — Timers phase");
}, 0);

/*
6. setInterval()

   Schedules a callback to run repeatedly according to a timer interval.
   It does not guarantee exact timing or a fixed execution frequency.
*/

// Uncomment to experiment. This keeps the process alive until cleared.
// const interval = setInterval(() => {
//   console.log("Repeated timer");
// }, 1000);
//
// setTimeout(() => clearInterval(interval), 3000);

/*
7. setImmediate()

   Schedules a callback for the Check phase.
   This phase follows poll-phase processing.

   Its relative order with setTimeout(0), when both are scheduled
   from the main module, is not guaranteed.
*/

setImmediate(() => {
  console.log("7. setImmediate() — Check phase");
});

/*
8. ASYNCHRONOUS I/O

   readFile() starts an asynchronous file operation.
   JavaScript continues executing without waiting for the file.

   When the read completes, Node.js processes the callback as part
   of its I/O handling, commonly associated with the Poll phase.
*/

fs.readFile(__filename, () => {
  console.log("8. File I/O callback");

  /*
  The callback has started running.
  Its synchronous statements execute before it returns.
  */

  process.nextTick(() => {
    console.log("9. nextTick inside I/O");
  });

  queueMicrotask(() => {
    console.log("10. Microtask inside I/O");
  });

  Promise.resolve().then(() => {
    console.log("11. Promise inside I/O");
  });

  setImmediate(() => {
    console.log("12. setImmediate inside I/O");
  });
});

/*
9. SYNCHRONOUS EXECUTION CONTINUES

   Node finishes the current synchronous execution before processing
   the queued next-tick and microtask callbacks.
*/

console.log("2. Synchronous: End");

/*
10. EVENT LOOP PHASES

   A simplified representation of the event loop's phases:

   A. Timers
      Processes eligible setTimeout() and setInterval() callbacks.

   B. Pending callbacks
      Processes certain deferred system-level I/O callbacks.

   C. Idle / Prepare
      Internal libuv phases; application callbacks are not normally
      scheduled directly into these phases.

   D. Poll
      Processes eligible I/O events and callbacks. It may wait for
      I/O or timers when appropriate.

   E. Check
      Processes setImmediate() callbacks.

   F. Close callbacks
      Processes certain resource-close callbacks.

   The event loop repeats while the process has work that keeps it alive.
   Not every phase necessarily has work in every cycle.

11. EXECUTION ORDER — WHAT TO REMEMBER

   First:
     1. Synchronous code runs to completion.
     2. Node drains process.nextTick() callbacks at the relevant checkpoint.
     3. Node drains microtasks, including queueMicrotask() and Promise
        reactions. Newly queued microtasks are processed as well.

   Then:
     4. The event loop processes eligible callbacks in its phases.
     5. At appropriate checkpoints between callbacks, next-tick work
        and microtasks are processed again.

   Important exceptions and details:
     - setTimeout(0) and setImmediate() have no guaranteed relative
       order when both are scheduled from the main module.
     - Inside an I/O callback, setImmediate() typically runs before
       a newly scheduled zero-delay timer.
     - ES modules can produce a different initial nextTick/microtask
       order because module evaluation uses microtask machinery.
     - Recursive nextTick or microtask scheduling can starve the loop.

   FINAL MENTAL MODEL:

   Synchronous JavaScript
          ↓
   next-tick queue and microtasks at checkpoints
          ↓
   Event loop phases and eligible callbacks
          ↓
   Repeat while the process has work
*/


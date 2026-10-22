// Microtask starvation is subtler. The call stack repeatedly becomes empty, but each microtask schedules another microtask. Since the microtask checkpoint keeps draining, the environment may never get to another task or a rendering opportunity.

function starveMicrotasks() {
  queueMicrotask(() => {
    console.log("Microtask");

    // Schedules more work for the same microtask queue.
    starveMicrotasks();
  });
}

starveMicrotasks();

// This timer may never get a chance to run.
setTimeout(() => {
  console.log("Timer");
}, 0);

// How to prevent starvation
// - Avoid expensive synchronous work on the main thread.
// - Avoid recursively scheduling unlimited microtasks.
// - Break large jobs into bounded chunks.
// - Use task scheduling or a suitable yielding mechanism when other work must progress.
// - Move CPU-heavy, independent work into a Web Worker where appropriate.

// Blocking: An operation prevents the current thread from proceeding until the operation completes.
// Non-blocking: The current thread can continue other work while waiting for an operation to finish.

// Blocking: occupies the JavaScript thread.
function blockForOneSecond() {
  const end = Date.now() + 1000;
  while (Date.now() < end) {}
}

// Non-blocking: schedules work and returns immediately.
setTimeout(() => {
  console.log("Runs later");
}, 1000);
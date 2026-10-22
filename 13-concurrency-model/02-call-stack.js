// The call stack tracks which JavaScript functions are currently executing. It follows LIFO (Last In, First Out): the last function added is the first to finish.

function first() {
  console.log("First: start");
  second();
  console.log("First: end");
}

function second() {
  console.log("Second");
}

first();

// Output:
// First: start
// Second
// First: end

// Interview takeaway: The call stack determines what is executing now. Queues determine what may execute later.

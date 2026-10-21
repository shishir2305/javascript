// A callback is a function passed to another function to be invoked later or at a particular point in its execution.

// A callback lets the caller provide behavior.
function greet(name, callback) {
  callback(`Hello, ${name}`);
}

greet("Shishir", (message) => {
  console.log(message);
});

// Callbacks can be synchronous or asynchronous. For example, Array.prototype.map() invokes callbacks synchronously, while a timer callback runs asynchronously.

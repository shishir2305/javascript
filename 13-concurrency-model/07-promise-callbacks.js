// Creating a promise and executing its executor are two different things.
// - The promise executor passed to new Promise() runs synchronously.
// - Calling .then() registers a reaction.
// - When the promise settles, the reaction is scheduled as a microtask.
// - Even if a promise is already fulfilled, its .then() callback does not execute inline.

console.log("1. Start");

const promise = new Promise((resolve) => {
  // The executor runs synchronously.
  console.log("2. Promise executor");
  resolve("Success");
});

promise.then((value) => {
  // This reaction runs as a microtask.
  console.log("4.", value);
});

console.log("3. End");

// Output:
// 1. Start
// 2. Promise executor
// 3. End
// 4. Success

// chaining promises
console.log("Start");

Promise.resolve(10)
  .then((value) => {
    console.log("First:", value);
    return value * 2;
  })
  .then((value) => {
    console.log("Second:", value);
  });

console.log("End");

// Output:
// Start
// End
// First: 10
// Second: 20

// Each .then() creates a new promise. Returning a value fulfills the next promise with that value; returning a promise or thenable causes the next promise to adopt its eventual state.

// The second reaction becomes eligible only after the first reaction has run and settled the promise returned by the first .then().

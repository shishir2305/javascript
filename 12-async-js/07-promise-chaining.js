const promise = new Promise((resolve, reject) => {
  // Create a Promise and resolve it with the value 10.
  resolve(10);
});

promise
  .then((value) => {
    // The first .then() receives 10.
    console.log("Step 1:", value); // 10

    // Returning a normal value resolves the NEW Promise
    // returned by .then() with this value.
    return value * 2;
  })
  .then((value) => {
    // Receives 20, the result returned by the previous .then().
    console.log("Step 2:", value); // 20

    // Return a new, already-fulfilled Promise.
    // The next .then() waits for this Promise to settle
    // and receives its fulfillment value.
    return Promise.resolve(value + 5);
  })
  .then((value) => {
    // Receives 25, not the Promise object itself.
    console.log("Step 3:", value); // 25

    // Return another Promise that resolves asynchronously.
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(value * 2); // Resolve with 50 after 1 second.
      }, 1000);
    });
  })
  .then((value) => {
    // Receives 50 after the returned Promise fulfills.
    console.log("Step 4:", value); // 50

    // Returning nothing means the next Promise
    // fulfills with undefined.
  })
  .then((value) => {
    console.log("Step 5:", value); // undefined
  })
  .catch((error) => {
    // Handles a rejection or an error thrown anywhere
    // earlier in this chain, if not already handled.
    console.error("Error:", error.message);
  })
  .finally(() => {
    // Runs after the chain fulfills or rejects.
    console.log("Promise chain completed!");
  });

// output

// Step 1: 10
// Step 2: 20
// Step 3: 25
// (1-second delay)
// Step 4: 50
// Step 5: undefined
// Promise chain completed!

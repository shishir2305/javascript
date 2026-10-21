
/*
============================================================
              PROMISE FLATTENING IN JAVASCRIPT
============================================================

DEFINITION:
Promise flattening means that when a Promise handler returns
another Promise, JavaScript automatically adopts the inner
Promise's eventual state and value.

WHY IS IT NEEDED?
Without Promise flattening, chaining asynchronous operations
would produce nested Promises, making results difficult to use.

IMPORTANT RULE:
- Return a normal value  -> next .then() receives that value.
- Return a Promise      -> next .then() receives its outcome.
- Return nothing        -> next .then() receives undefined.
*/


// ============================================================
// 1. THE PROBLEM: FORGETTING TO RETURN A PROMISE
// ============================================================

console.log("PROBLEM:");

Promise.resolve(10)

  .then((value) => {
    // The current value is 10.
    console.log("First value:", value);

    // PROBLEM:
    // We create a Promise but do not return it.
    // This Promise is NOT connected to the outer chain.
    Promise.resolve(value * 2);
  })

  .then((result) => {
    // The previous callback returned nothing.
    // Therefore, its Promise fulfills with undefined.
    console.log("Next value:", result); // undefined
  });

/*
OUTPUT:
First value: 10
Next value: undefined

WHY?
The first .then() callback implicitly returns undefined.
The separately created Promise is ignored by the chain.
*/


// ============================================================
// 2. SOLUTION: RETURN THE PROMISE
// ============================================================

console.log("\nSOLUTION:");

Promise.resolve(10)

  .then((value) => {
    console.log("First value:", value); // 10

    // SOLUTION:
    // Return the Promise so that the chain adopts its outcome.
    return Promise.resolve(value * 2);
  })

  .then((result) => {
    // PROMISE FLATTENING:
    // JavaScript waits for the returned Promise to settle.
    // This handler receives 20, NOT Promise { 20 }.
    console.log("Next value:", result); // 20
  });

/*
OUTPUT:
First value: 10
Next value: 20

WHY?
The Promise returned by the first .then() adopts the
outcome of Promise.resolve(20).

The next .then() receives the fulfillment value, 20.
*/


// ============================================================
// 3. PROMISE FLATTENING WITH MULTIPLE CHAINED OPERATIONS
// ============================================================

console.log("\nMULTIPLE OPERATIONS:");

Promise.resolve(5)

  .then((value) => {
    // Step 1: Receive 5 and return a Promise for 10.
    console.log("Step 1:", value); // 5
    return Promise.resolve(value * 2);
  })

  .then((value) => {
    // Step 2: The inner Promise was automatically flattened.
    // We receive 10, not a Promise object.
    console.log("Step 2:", value); // 10

    // Return another Promise for 15.
    return Promise.resolve(value + 5);
  })

  .then((value) => {
    // Step 3: Receive the unwrapped value 15.
    console.log("Step 3:", value); // 15
  });

/*
OUTPUT:
Step 1: 5
Step 2: 10
Step 3: 15

MENTAL MODEL:
Promise(5)
    |
    v
.then() returns Promise(10)
    |
    v
Flattened -> next handler receives 10
    |
    v
.then() returns Promise(15)
    |
    v
Flattened -> next handler receives 15
*/


// ============================================================
// 4. PROMISE FLATTENING ALSO PROPAGATES ERRORS
// ============================================================

console.log("\nERROR HANDLING:");

Promise.resolve("Start")

  .then((value) => {
    console.log(value); // Start

    // Returning a rejected Promise makes the chain reject.
    return Promise.reject(new Error("Something failed"));
  })

  .then((value) => {
    // SKIPPED: the previous Promise rejected.
    console.log("Success:", value);
  })

  .catch((error) => {
    // The rejection propagates through the chain.
    console.log("Caught:", error.message);
    // Caught: Something failed
  });


// ============================================================
// 5. REAL-WORLD EXAMPLE: CHAINING API CALLS
// ============================================================

// Simulate an API request that returns a Promise.
function fetchUser() {
  return Promise.resolve({
    id: 1,
    name: "Shishir",
  });
}

// Simulate another API request that depends on the user ID.
function fetchProjects(userId) {
  return Promise.resolve([
    `Project A for user ${userId}`,
    `Project B for user ${userId}`,
  ]);
}

console.log("\nREAL-WORLD EXAMPLE:");

fetchUser()

  .then((user) => {
    console.log("User:", user.name);

    // Return the second API call's Promise.
    // Promise flattening connects it to the existing chain.
    return fetchProjects(user.id);
  })

  .then((projects) => {
    // Receives the resolved array, not a Promise object.
    console.log("Projects:", projects);
  })

  .catch((error) => {
    // Handles errors from either operation.
    console.error("Request failed:", error.message);
  });


// ============================================================
// FINAL REVISION
// ============================================================

/*
1. Every .then() returns a new Promise.

2. Returning a normal value fulfills that new Promise
   with the returned value.

3. Returning a Promise makes the new Promise adopt its
   eventual fulfillment value or rejection reason.

4. If you forget to return a Promise, it is not connected
   to the chain. The next handler may receive undefined.

5. Promise flattening lets us chain asynchronous operations
   without manually unwrapping nested Promises.

INTERVIEW TIP:
Always ask: "Did I return the Promise that the next step
depends on?"
*/

/*
========================================================
ASYNC AND AWAIT IN JAVASCRIPT
========================================================

DEFINITION:
async/await provides a cleaner way to work with Promises.
It makes asynchronous workflows easier to read and maintain.

KEY RULES:
1. An async function always returns a Promise.
2. await unwraps a fulfilled Promise's value.
3. await throws an error if the Promise rejects.
4. await can normally be used inside async functions.
5. await pauses the async function, not the entire JS thread.
*/

// ------------------------------------------------------
// 1. ASYNC FUNCTION
// ------------------------------------------------------

// Even though we return a normal string, JavaScript wraps
// the result in a fulfilled Promise.
async function greet() {
  return "Hello, JavaScript!";
}

greet().then((message) => {
  console.log(message);
});

// Output:
// Hello, JavaScript!

// Conceptually, the function above behaves like:
// function greet() {
//   return Promise.resolve("Hello, JavaScript!");
// }


// ------------------------------------------------------
// 2. AWAIT WITH A PROMISE
// ------------------------------------------------------

// Simulate an API request that completes after 1 second.
function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: "Alex" });
    }, 1000);
  });
}

async function displayUser() {
  console.log("Fetching user...");

  // The function pauses here until the Promise settles.
  // Other JavaScript work can continue while it waits.
  const user = await fetchUser();

  // Runs after the Promise fulfills.
  // user contains the resolved object, not the Promise itself.
  console.log("User:", user);
}

displayUser();

// Output:
// Fetching user...
// User: { id: 1, name: "Alex" }  (after about 1 second)


// ------------------------------------------------------
// 3. AWAIT EXECUTION ORDER
// ------------------------------------------------------

async function demonstrateOrder() {
  console.log("A: Before await");

  // Even awaiting an already-fulfilled Promise resumes
  // the async function asynchronously.
  await Promise.resolve();

  console.log("C: After await");
}

console.log("Start");

demonstrateOrder();

console.log("B: Outside async function");

// Output:
// Start
// A: Before await
// B: Outside async function
// C: After await

// WHY?
// await suspends the async function and schedules its
// continuation as a microtask. Synchronous code continues
// running before that continuation executes.


// ------------------------------------------------------
// 4. ERROR HANDLING WITH TRY/CATCH
// ------------------------------------------------------

function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Server unavailable"));
    }, 500);
  });
}

async function loadUser() {
  try {
    // If the Promise rejects, await throws the rejection reason.
    const user = await fetchUserData();

    // Skipped if fetchUserData() rejects.
    console.log("User:", user);
  } catch (error) {
    // Handles the rejection just like a synchronous exception.
    console.error("Failed to fetch user:", error.message);
  } finally {
    // Runs whether the operation succeeds or fails.
    console.log("Request finished");
  }
}

loadUser();

// Output after about 500 ms:
// Failed to fetch user: Server unavailable
// Request finished


// ------------------------------------------------------
// 5. SEQUENTIAL VS PARALLEL AWAIT
// ------------------------------------------------------

function fetchResource(name, delay) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`${name} loaded`), delay);
  });
}

async function sequentialRequests() {
  // The second request starts only after the first finishes.
  const user = await fetchResource("User", 1000);
  const orders = await fetchResource("Orders", 1000);

  console.log(user, orders);
  // Approximately 2 seconds total.
}

async function parallelRequests() {
  // Both requests start before we await their results.
  const userPromise = fetchResource("User", 1000);
  const ordersPromise = fetchResource("Orders", 1000);

  // Wait for both promises together.
  const [user, orders] = await Promise.all([
    userPromise,
    ordersPromise,
  ]);

  console.log(user, orders);
  // Approximately 1 second total.
}

// Uncomment to try either version:
// sequentialRequests();
// parallelRequests();

/*
========================================================
QUICK REVISION
========================================================

1. async makes a function return a Promise; await extracts
   the fulfillment value or throws the rejection reason.

2. await suspends only the surrounding async function, not
   the JavaScript thread; use try/catch for errors and
   Promise.all for independent operations.

FINAL MENTAL MODEL:
async = Promise-based function.
await = wait for a Promise's result inside that function.
*/

/*
========================================================
                  THENABLES IN JAVASCRIPT
========================================================

DEFINITION:
A thenable is any object or function that has a callable
"then" method.

A thenable behaves similarly to a Promise because JavaScript
can adopt its result when you pass it to Promise.resolve()
or return it from a Promise handler.

IMPORTANT:
- Every Promise is a thenable.
- Not every thenable is a Promise.
- A thenable can resolve, reject, or throw an error.
*/


// ========================================================
// 1. BASIC EXAMPLE OF A THENABLE
// ========================================================

const thenable = {
  // This makes the object a thenable.
  // JavaScript supplies resolve and reject callbacks.
  then(resolve, reject) {
    // Fulfill the thenable with the value 100.
    resolve(100);
  },
};

// Promise.resolve() converts the thenable's outcome
// into a native Promise result.
Promise.resolve(thenable)
  .then((value) => {
    console.log("Resolved value:", value); // 100
  });


// ========================================================
// 2. REAL-WORLD USE CASE: LEGACY CALLBACK API
// ========================================================

/*
Imagine an older library that uses callbacks instead of
returning Promises.

We want to integrate its result into modern Promise-based
code without changing the legacy library.
*/

// Simulate a legacy API that uses a callback.
function legacyFetchUser(callback) {
  setTimeout(() => {
    // Simulate a successful response from a server.
    callback(null, {
      id: 1,
      name: "Shishir",
    });
  }, 1000);
}

// Create a thenable adapter around the callback API.
const userThenable = {
  then(resolve, reject) {
    // Call the legacy API.
    legacyFetchUser((error, user) => {
      if (error) {
        // Convert callback errors into Promise rejection.
        reject(error);
      } else {
        // Convert the successful callback result into fulfillment.
        resolve(user);
      }
    });
  },
};

// Promise.resolve() adopts the thenable's eventual outcome.
// This lets us use standard Promise chaining.
Promise.resolve(userThenable)
  .then((user) => {
    console.log("User:", user.name); // User: Shishir

    // Return another value to continue the Promise chain.
    return `Welcome, ${user.name}!`;
  })
  .then((message) => {
    console.log(message); // Welcome, Shishir!
  })
  .catch((error) => {
    // Handle errors from the legacy API or previous handlers.
    console.error("Failed:", error.message);
  });


// ========================================================
// 3. PRACTICAL NOTE
// ========================================================

/*
In real applications, you usually do NOT need to manually
create a thenable adapter.

A simpler and safer approach is to wrap callback APIs
directly in a native Promise:

function fetchUser() {
  return new Promise((resolve, reject) => {
    legacyFetchUser((error, user) => {
      if (error) reject(error);
      else resolve(user);
    });
  });
}

Then use:
fetchUser().then(...).catch(...);

Use thenables mainly when integrating objects or libraries
that already expose a custom .then() method.
*/

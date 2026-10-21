/*
PROMISE ERROR PROPAGATION IN JAVASCRIPT

Definition:
Promise error propagation is the process by which an error thrown
inside a .then() callback or a rejected Promise travels down the
Promise chain until a .catch() handles it.

Key rules:
1. Throwing an error inside .then() rejects the returned Promise.
2. Subsequent .then() success callbacks are skipped while rejected.
3. The rejection propagates to the next available .catch().
4. A successful .catch() recovers the chain.
5. Throwing inside .catch() propagates a new rejection.
*/

Promise.resolve("Start")
  .then((value) => {
    console.log("Step 1:", value);

    // Throwing an error rejects the Promise returned by this .then().
    throw new Error("Database connection failed");
  })
  .then((value) => {
    // SKIPPED: The previous Promise is rejected.
    console.log("Step 2:", value);
  })
  .then(() => {
    // SKIPPED: The rejection continues down the chain.
    console.log("Step 3");
  })
  .catch((error) => {
    // Catches the error thrown in Step 1.
    console.log("Caught error:", error.message);

    // Throwing again creates a new rejection.
    throw new Error("Failed to recover from database error");
  })
  .then(() => {
    // SKIPPED: The previous .catch() threw another error.
    console.log("Success after catch");
  })
  .catch((error) => {
    // Catches the new error thrown by the previous .catch().
    console.log("Final error:", error.message);

    // No error is thrown here, so the chain recovers.
    return "Fallback data";
  })
  .then((value) => {
    // Executes because the previous .catch() returned successfully.
    console.log("Final result:", value);
  });

/*
OUTPUT:

Step 1: Start
Caught error: Database connection failed
Final error: Failed to recover from database error
Final result: Fallback data

EXECUTION FLOW:

Promise fulfilled
       |
     .then()
       |
  Error thrown
       |
Promise rejected
       |
Success .then() callbacks are skipped
       |
    .catch()
       |
  New error thrown
       |
Promise rejected again
       |
 Second .catch()
       |
 Returns fallback data
       |
Promise fulfilled again

QUICK REVISION:
- Errors propagate down the Promise chain until a rejection handler
  handles them; intermediate success callbacks are skipped.
- A .catch() that returns normally recovers the chain, while throwing
  or returning a rejected Promise propagates a new rejection.
*/
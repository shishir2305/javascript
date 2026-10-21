
/*
============================================================
             JAVASCRIPT PROMISE APIs — COMPLETE GUIDE
============================================================

DEFINITION:
A Promise is an object representing the eventual completion
(success) or failure of an asynchronous operation.

PROMISE STATES:
1. Pending   -> The operation has not settled yet.
2. Fulfilled -> The operation completed successfully.
3. Rejected  -> The operation failed.

IMPORTANT:
- A Promise can settle only once.
- .then(), .catch(), and .finally() return new Promises.
- Promise callbacks run asynchronously as microtasks.
- Promise APIs coordinate asynchronous results; they do not
  automatically run CPU-intensive JavaScript in parallel.
*/


// ============================================================
// 1. Promise.resolve()
// ============================================================

// DEFINITION:
// Creates a Promise that fulfills with the given value.
// If passed another Promise or thenable, it adopts its outcome.

async function exampleResolve() {
  const promise = Promise.resolve(100);

  // .then() receives the fulfilled value.
  promise.then((value) => {
    console.log("resolve:", value); // 100
  });

  // Promise.resolve() adopts an existing Promise's outcome.
  const anotherPromise = Promise.resolve(
    Promise.resolve("Hello")
  );

  console.log(await anotherPromise); // Hello
}


// ============================================================
// 2. Promise.reject()
// ============================================================

// DEFINITION:
// Creates a rejected Promise with the specified rejection reason.
// Use .catch() or try/catch with await to handle the rejection.

async function exampleReject() {
  const promise = Promise.reject(new Error("Request failed"));

  try {
    await promise;
  } catch (error) {
    console.log("reject:", error.message); // Request failed
  }
}


// ============================================================
// 3. Promise.all()
// ============================================================

// DEFINITION:
// Accepts an iterable of Promises/values and fulfills with an
// array of results once ALL inputs fulfill.
// Results preserve INPUT ORDER, not completion order.
// Rejects when an input rejection determines the outcome.
// Other operations are NOT automatically cancelled.

async function exampleAll() {
  const task1 = Promise.resolve("Profile");
  const task2 = Promise.resolve("Projects");
  const task3 = Promise.resolve("Notifications");

  const results = await Promise.all([
    task1,
    task2,
    task3,
  ]);

  console.log("all:", results);
  // ["Profile", "Projects", "Notifications"]
}


// ============================================================
// 4. Promise.allSettled()
// ============================================================

// DEFINITION:
// Waits until every input Promise settles, whether fulfilled
// or rejected. Fulfills with an array describing each outcome.

async function exampleAllSettled() {
  const results = await Promise.allSettled([
    Promise.resolve("Payment successful"),
    Promise.reject(new Error("Email failed")),
    Promise.resolve("Order created"),
  ]);

  results.forEach((result) => {
    if (result.status === "fulfilled") {
      // Fulfilled results have a "value" property.
      console.log("allSettled success:", result.value);
    } else {
      // Rejected results have a "reason" property.
      console.log("allSettled failure:", result.reason.message);
    }
  });
}


// ============================================================
// 5. Promise.race()
// ============================================================

// DEFINITION:
// Settles with the outcome of the FIRST input Promise to settle.
// The first outcome can be either fulfillment or rejection.
// Does NOT cancel losing Promises.

async function exampleRace() {
  const fast = new Promise((resolve) => {
    setTimeout(() => resolve("Fast operation won"), 500);
  });

  const slow = new Promise((resolve) => {
    setTimeout(() => resolve("Slow operation won"), 1500);
  });

  const result = await Promise.race([fast, slow]);

  console.log("race:", result);
  // Fast operation won
}


// ============================================================
// 6. Promise.any()
// ============================================================

// DEFINITION:
// Fulfills with the FIRST input Promise to fulfill.
// Rejections are ignored while other inputs may still fulfill.
// If ALL inputs reject, rejects with AggregateError.

async function exampleAny() {
  const failedServer = Promise.reject(
    new Error("Server A failed")
  );

  const backupServer = new Promise((resolve) => {
    setTimeout(() => resolve("Server B responded"), 500);
  });

  const result = await Promise.any([
    failedServer,
    backupServer,
  ]);

  console.log("any:", result);
  // Server B responded
}


// ============================================================
// 7. Promise.withResolvers()
// ============================================================

// DEFINITION:
// Returns an object containing:
// - promise: the Promise itself
// - resolve: function to fulfill it
// - reject: function to reject it
//
// Useful when the code that creates a Promise and the code that
// settles it are in different places.
// Available in modern JavaScript runtimes.

async function exampleWithResolvers() {
  const { promise, resolve, reject } = Promise.withResolvers();

  // Register handlers before resolving.
  promise.then((value) => {
    console.log("withResolvers:", value);
  }).catch((error) => {
    console.log("withResolvers error:", error.message);
  });

  // Another part of the program can settle the Promise.
  resolve("Task completed");

  // Calling reject() after resolve() has no effect:
  // the Promise has already been settled.
  reject(new Error("Too late"));
}


// ============================================================
// 8. Promise.prototype.then()
// ============================================================

// DEFINITION:
// Registers a fulfillment handler and optionally a rejection
// handler. Returns a NEW Promise.
//
// RETURN BEHAVIOR:
// - Return a normal value -> next Promise fulfills with it.
// - Return a Promise -> next Promise adopts its outcome.
// - Throw an error -> next Promise rejects.
// - Return nothing -> next Promise fulfills with undefined.

async function exampleThen() {
  const result = await Promise.resolve(10)
    .then((value) => {
      console.log("then input:", value); // 10

      // Pass 20 to the next .then().
      return value * 2;
    })
    .then((value) => {
      console.log("then next:", value); // 20

      // The next .then() receives the fulfilled value 25,
      // not the Promise object.
      return Promise.resolve(value + 5);
    });

  console.log("then result:", result); // 25
}


// ============================================================
// 9. Promise.prototype.catch()
// ============================================================

// DEFINITION:
// Handles a rejection in the Promise chain.
// Equivalent to .then(undefined, onRejected).
//
// Returning a value from catch() recovers the chain.
// Throwing an error or returning a rejected Promise keeps
// the chain rejected.

async function exampleCatch() {
  const result = await Promise.reject(
    new Error("Database unavailable")
  )
    .catch((error) => {
      console.log("catch:", error.message);

      // Recover from the error.
      return "Fallback data";
    });

  console.log("catch result:", result); // Fallback data
}


// ============================================================
// 10. Promise.prototype.finally()
// ============================================================

// DEFINITION:
// Runs after a Promise fulfills or rejects.
// Useful for cleanup, such as hiding a loading indicator.
//
// Normally preserves the original fulfillment value or
// rejection reason. If the finally callback throws or returns
// a rejected Promise, the resulting chain rejects instead.

async function exampleFinally() {
  const result = await Promise.resolve("Success")
    .finally(() => {
      console.log("finally: cleanup performed");
    });

  // The value is preserved because finally() returned normally.
  console.log("finally result:", result); // Success
}


// ============================================================
// 11. Promise CHAINING — CORE CONCEPT
// ============================================================

// DEFINITION:
// Promise chaining connects asynchronous steps sequentially.
// Each .then() returns a new Promise whose outcome depends on
// the value or Promise returned by its callback.
//
// ALWAYS RETURN a value or Promise if the next step needs it.

async function exampleChaining() {
  const result = await Promise.resolve(10)
    .then((value) => {
      return value * 2; // 20
    })
    .then((value) => {
      return Promise.resolve(value + 5); // 25
    })
    .then((value) => {
      // Simulate another asynchronous operation.
      return new Promise((resolve) => {
        setTimeout(() => resolve(value * 2), 300);
      });
    });

  console.log("chaining:", result); // 50
}


// ============================================================
// 12. Promise executor and resolve/reject
// ============================================================

// DEFINITION:
// The Promise constructor accepts an executor function.
// The executor runs synchronously.
// resolve(value) fulfills the Promise with a value or adopts
// a Promise/thenable's outcome.
// reject(reason) rejects the Promise.
//
// Use this constructor when wrapping callback-based or other
// asynchronous APIs that do not already return a Promise.

function exampleConstructor() {
  return new Promise((resolve, reject) => {
    const isSuccessful = true;

    // Simulate a successful operation.
    if (isSuccessful) {
      resolve("Operation successful");
    } else {
      reject(new Error("Operation failed"));
    }
  });
}


// ============================================================
// RUN ALL EXAMPLES
// ============================================================

// The async wrapper allows us to use await and run examples
// in a predictable sequence for easier learning.

async function main() {
  await exampleResolve();
  await exampleReject();
  await exampleAll();
  await exampleAllSettled();
  await exampleRace();
  await exampleAny();
  await exampleWithResolvers();
  await exampleThen();
  await exampleCatch();
  await exampleFinally();
  await exampleChaining();

  // The constructor returns a Promise that we can await.
  console.log("constructor:", await exampleConstructor());
}

main().catch((error) => {
  // Final safety net for unexpected errors in the examples.
  console.error("Unexpected error:", error);
});

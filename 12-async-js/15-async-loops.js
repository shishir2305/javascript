/*
========================================================
ASYNC LOOPS AND COMMON MISTAKES
========================================================

Definition:
Async loops iterate over collections while performing asynchronous
operations. Depending on the pattern used, operations may run
sequentially, concurrently, or without being properly awaited.

We will cover:
1. The for...of loop with await (sequential)
2. The common forEach + async mistake
3. Promise.all with map (concurrent)
4. Sequential execution when order matters
5. Error handling in async loops
6. Why await inside map alone is not enough
*/

// Simulate an API request that takes some time.
function fetchUser(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`User ${id}`);
    }, 500);
  });
}

const userIds = [1, 2, 3];


// ======================================================
// 1. CORRECT: for...of WITH await — SEQUENTIAL
// ======================================================

async function sequentialLoop() {
  console.log("\nSequential execution:");

  for (const id of userIds) {
    // Each iteration waits for the current request to finish.
    const user = await fetchUser(id);
    console.log(user);
  }

  console.log("All users fetched sequentially.");
}

// Expected duration: approximately 1500 ms.
// Output order: User 1, User 2, User 3.


// ======================================================
// 2. MISTAKE: forEach DOES NOT WAIT FOR ASYNC CALLBACKS
// ======================================================

async function incorrectForEach() {
  console.log("\nIncorrect forEach:");

  userIds.forEach(async (id) => {
    // forEach does not collect or await these returned Promises.
    const user = await fetchUser(id);
    console.log(user);
  });

  // This runs before the requests necessarily finish.
  console.log("Finished fetching users!");

  // The log above appears immediately, not after all users.
}

// Output begins with:
// Finished fetching users!
// User 1 / User 2 / User 3 appear later.

// WHY IS THIS A MISTAKE?
// Awaiting incorrectForEach() does not make it wait for the
// async callbacks started inside forEach.


// ======================================================
// 3. CORRECT: map + Promise.all — CONCURRENT OPERATIONS
// ======================================================

async function parallelLoop() {
  console.log("\nParallel execution:");

  // map calls fetchUser for every ID immediately and returns
  // an array of Promises.
  const userPromises = userIds.map((id) => fetchUser(id));

  // Promise.all waits until every Promise fulfills.
  const users = await Promise.all(userPromises);

  console.log(users);
  console.log("All users fetched concurrently.");
}

// Expected duration: approximately 500 ms.
// Result array preserves the original input order:
// ["User 1", "User 2", "User 3"]


// ======================================================
// 4. MISTAKE: await INSIDE map WITHOUT Promise.all
// ======================================================

async function incorrectMap() {
  console.log("\nIncorrect map:");

  // The async callback returns a Promise for each user.
  const users = userIds.map(async (id) => {
    return await fetchUser(id);
  });

  // users is an array of Promises, NOT resolved user strings.
  console.log(users);

  // Correct way to get the resolved values:
  const resolvedUsers = await Promise.all(users);
  console.log(resolvedUsers);
}


// ======================================================
// 5. WHEN SEQUENTIAL EXECUTION IS REQUIRED
// ======================================================

// Imagine each operation updates the same account balance.
// The next update must wait for the previous one to complete.
async function updateAccount(id) {
  console.log(`Updating account for user ${id}`);

  // Simulate an asynchronous database update.
  await new Promise((resolve) => setTimeout(resolve, 300));

  console.log(`Account updated for user ${id}`);
}

async function sequentialUpdates() {
  for (const id of userIds) {
    // Preserves order and waits for each update to finish.
    await updateAccount(id);
  }

  console.log("All account updates completed.");
}

// Do not blindly use Promise.all for dependent operations:
// concurrent updates may conflict or violate ordering requirements.
// Real database writes may also need transactions or locking.


// ======================================================
// 6. ERROR HANDLING IN ASYNC LOOPS
// ======================================================

async function loopWithErrorHandling() {
  console.log("\nError handling:");

  for (const id of userIds) {
    try {
      if (id === 2) {
        throw new Error("User 2 failed");
      }

      const user = await fetchUser(id);
      console.log("Success:", user);
    } catch (error) {
      // Handle this item's failure and continue to the next item.
      console.error(`Failed for ID ${id}:`, error.message);
    }
  }

  console.log("Loop completed despite an individual failure.");
}

// IMPORTANT:
// With Promise.all, one rejection rejects the combined Promise.
// Other already-started operations are not automatically cancelled.
// Use Promise.allSettled when you need every outcome.


// ======================================================
// RUN EXAMPLES
// ======================================================

async function main() {
  await sequentialLoop();
  await parallelLoop();
  await incorrectForEach();
  await incorrectMap();
  await sequentialUpdates();
  await loopWithErrorHandling();
}

main().catch((error) => {
  // Handles unexpected errors escaping main().
  console.error("Unexpected error:", error);
});

/*
========================================================
QUICK REVISION
========================================================

1. for...of + await = sequential; map + Promise.all = concurrent.
2. forEach does not await async callbacks; map alone returns
   Promises, so use Promise.all to collect their resolved values.

COMMON MISTAKES TO AVOID:
- Using forEach when you need to wait for every async operation.
- Using Promise.all for tasks that depend on each other.
- Forgetting that map(async ...) produces an array of Promises.
- Ignoring rejections from async callbacks.
- Assuming Promise.all cancels remaining operations on failure.

FINAL MENTAL MODEL:
Need order? Use for...of + await.
Independent tasks? Use Promise.all(items.map(...)).
Need every success or failure? Use Promise.allSettled(...).
*/
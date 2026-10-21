// Sequential execution means each asynchronous operation waits for the previous one to finish. 
// Parallel execution means multiple asynchronous operations are started without waiting for one another, allowing their waiting periods to overlap.

/*
SEQUENTIAL VS PARALLEL ASYNC OPERATIONS

Definition:
1. Sequential: Await each operation before starting the next.
2. Parallel: Start independent operations together and await their results.

Real-world example:
Fetching a user's profile, orders, and notifications from APIs.
*/

// Simulates an asynchronous API request.
function fetchData(name, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`${name} completed`);
      resolve(`${name} data`);
    }, delay);
  });
}

// --------------------------------------------------
// 1. SEQUENTIAL EXECUTION
// --------------------------------------------------

async function sequentialExecution() {
  console.log("\\nSequential execution started");

  // Each request starts only after the previous one finishes.
  const profile = await fetchData("Profile", 1000);
  const orders = await fetchData("Orders", 1000);
  const notifications = await fetchData("Notifications", 1000);

  console.log(profile, orders, notifications);
  // Total duration: approximately 3000 ms.
}

// --------------------------------------------------
// 2. PARALLEL EXECUTION
// --------------------------------------------------

async function parallelExecution() {
  console.log("\\nParallel execution started");

  // All three requests start immediately.
  // Promise.all waits until all fulfill, or rejects on the first rejection.
  const [profile, orders, notifications] = await Promise.all([
    fetchData("Profile", 1000),
    fetchData("Orders", 1000),
    fetchData("Notifications", 1000),
  ]);

  console.log(profile, orders, notifications);
  // Total duration: approximately 1000 ms.
}

// Run one at a time to compare their durations.
async function main() {
  console.time("Sequential");
  await sequentialExecution();
  console.timeEnd("Sequential");

  console.time("Parallel");
  await parallelExecution();
  console.timeEnd("Parallel");
}

main();

/*
EXPECTED TIMING:
Sequential: approximately 3000 ms
Parallel:   approximately 1000 ms

IMPORTANT:
- Parallel is appropriate when operations are independent.
- Sequential is necessary when a later operation depends on an earlier result.
- Promise.all does not make JavaScript CPU-bound work execute on multiple
  threads; it coordinates promises, and I/O waits can overlap.
*/
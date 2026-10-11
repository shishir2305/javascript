/*
Definition:
finally executes after try/catch completion, including
when control leaves through return or throw.

Why needed:
It provides a centralized place for cleanup that must
happen on both success and failure.
*/

function processRequest() {
  console.log("Start");

  try {
    console.log("Processing");
    throw new Error("Request failed");
  } catch (error) {
    console.log("Caught:", error.message);
  } finally {
    console.log("Cleanup completed");
  }

  console.log("Function continues");
}

processRequest();

// Output:
// Start
// Processing
// Caught: Request failed
// Cleanup completed
// Function continues

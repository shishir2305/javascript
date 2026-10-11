
/*
Definition:
Error propagation passes an unhandled exception up
through the call stack until a catch block handles it.

Why needed:
Lower-level functions can report failure while higher
layers decide how to respond appropriately.
*/

function repository() {
  throw new Error("Database connection failed");
}

function service() {
  // No catch: let the error propagate.
  return repository();
}

function controller() {
  try {
    return service();
  } catch (error) {
    console.error("Request failed:", error.message);
    return { status: 500, body: "Internal Server Error" };
  }
}

console.log(controller());
// Request failed: Database connection failed
// { status: 500, body: 'Internal Server Error' }

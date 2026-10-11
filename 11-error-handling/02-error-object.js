
/*
Definition:
Error is the built-in constructor used to create error objects.

Why needed:
It provides a message, a name, and usually a stack trace,
making failures easier to debug and handle.
*/

function loadUser() {
  throw new Error("Unable to load user");
}

try {
  loadUser();
} catch (error) {
  console.log(error instanceof Error); // true
  console.log(error.name);             // "Error"
  console.log(error.message);          // "Unable to load user"
  console.log(error.stack);            // Stack trace, if supported
}

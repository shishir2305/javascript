
/*
Definition:
A centralized error-handling boundary converts known
application errors into safe responses and preserves
unexpected errors for diagnosis.

Why needed:
It keeps business logic separate from transport-level
error responses and prevents internal details leaking.
*/

class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.name = "AppError";
    this.statusCode = statusCode;
  }
}

class NotFoundError extends AppError {
  constructor(message) {
    super(message, 404);
    this.name = "NotFoundError";
  }
}

function findUser(id) {
  if (id !== 1) {
    throw new NotFoundError("User not found");
  }

  return { id: 1, name: "Alex" };
}

function handleRequest(id) {
  try {
    const user = findUser(id);

    return {
      status: 200,
      body: user
    };
  } catch (error) {
    // Known application errors have intentional responses.
    if (error instanceof AppError) {
      return {
        status: error.statusCode,
        body: { message: error.message }
      };
    }

    // Unexpected failures need internal diagnostics.
    console.error("Unexpected failure:", error.stack);

    return {
      status: 500,
      body: { message: "Internal Server Error" }
    };
  }
}

console.log(handleRequest(1));
// { status: 200, body: { id: 1, name: "Alex" } }

console.log(handleRequest(99));
// { status: 404, body: { message: "User not found" } }


/*
Definition:
A custom error extends the built-in Error class to
represent a specific application failure.

Why needed:
It lets different layers distinguish expected business
errors from unexpected programming errors.
*/

class AppError extends Error {
  constructor(message, statusCode = 500, options = {}) {
    super(message, options);

    this.name = "AppError";
    this.statusCode = statusCode;
  }
}

class NotFoundError extends AppError {
  constructor(resource) {
    super(`${resource} not found`, 404);
    this.name = "NotFoundError";
  }
}

function getUser(id) {
  if (id !== 1) {
    throw new NotFoundError("User");
  }

  return { id: 1, name: "Alex" };
}

try {
  console.log(getUser(99));
} catch (error) {
  if (error instanceof NotFoundError) {
    console.log(error.statusCode); // 404
    console.log(error.message);    // "User not found"
  } else {
    throw error; // Do not hide unexpected failures.
  }
}


/*
Definition:
An async function converts a thrown exception into a
rejected Promise. Await rethrows that rejection as an
exception at the await expression.

Why needed:
It allows asynchronous failures to use familiar
try/catch control flow.
*/

async function loadUser() {
  throw new Error("User service unavailable");
}

async function main() {
  try {
    await loadUser();
  } catch (error) {
    console.log(error.message);
  }
}

main(); // Logs: User service unavailable

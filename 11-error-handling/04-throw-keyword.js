
/*
Definition:
throw raises an exception and transfers control to
the nearest applicable exception handler.

Why needed:
It prevents invalid operations from continuing and
communicates failures to the caller.
*/

function withdraw(balance, amount) {
  if (amount <= 0) {
    throw new RangeError("Amount must be positive");
  }

  if (amount > balance) {
    throw new Error("Insufficient balance");
  }

  return balance - amount;
}

try {
  const remaining = withdraw(1000, 1500);
  console.log(remaining); // Never executes
} catch (error) {
  console.log(error.message); // "Insufficient balance"
}


/*
Definition:
An error represents a failure that prevents an operation
from completing as expected.

Why needed:
Detect failures and handle them deliberately instead of
allowing unexpected behavior to spread.
*/

function divide(a, b) {
  // Explicitly reject an invalid operation.
  if (b === 0) {
    throw new Error("Division by zero is not allowed");
  }

  return a / b;
}

try {
  console.log(divide(10, 2)); // 5
  console.log(divide(10, 0)); // Throws an error
} catch (error) {
  console.error("Operation failed:", error.message);
}

// Output:
// 5
// Operation failed: Division by zero is not allowed

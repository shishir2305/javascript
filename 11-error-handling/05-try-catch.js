
// Definition: try...catch handles exceptions thrown while executing
// code in the try block, allowing the program to respond to failures.

// Use case 1: Handle invalid JSON.
try {
  const data = JSON.parse("{invalid}");
  console.log(data);
} catch (error) {
  console.log(error.name);    // SyntaxError
  console.log(error.message); // Explains the parsing error
}

// Use case 2: Throw and handle a custom error.
function withdraw(balance, amount) {
  if (amount > balance) {
    throw new Error("Insufficient balance");
  }

  return balance - amount;
}

try {
  console.log(withdraw(100, 150));
} catch (error) {
  console.log(error.message); // Insufficient balance
} finally {
  // Runs whether the operation succeeds or fails.
  console.log("Withdrawal attempt completed");
}

// Use case 3: Handle asynchronous failures.
async function fetchData() {
  try {
    const response = await fetch("/api/data");

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Request failed:", error.message);
    // Handle or rethrow the error as appropriate.
  }
}

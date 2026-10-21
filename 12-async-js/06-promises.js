// A Promise is a JavaScript object representing the eventual completion or failure of an asynchronous operation, along with its resulting value.

// Imagine your Node.js server requests a user profile from a database.
// - The request starts.
// - The database may take some time to respond.
// - Your server can perform other work while waiting.
// - Eventually, the query succeeds with data or fails with an error.


function fetchUser(userId) {
  // A Promise represents the future result of an asynchronous operation.
  // The executor function runs immediately when the Promise is created.
  return new Promise((resolve, reject) => {
    console.log("Fetching user...");

    // Simulate an API request that takes 2 seconds.
    // setTimeout does not block the JavaScript thread.
    setTimeout(() => {

      // If the user ID is valid, fulfill the Promise.
      if (userId > 0) {
        resolve({
          id: userId,
          name: "Shishir",
        });

        // resolve(value) supplies the successful result
        // to the next .then() handler.
      } else {
        // If the user ID is invalid, reject the Promise.
        reject(new Error("Invalid user ID"));

        // reject(error) sends the error to the next
        // applicable .catch() handler.
      }
    }, 2000);
  });
}

// Call the function and handle its eventual result.
fetchUser(1)

  // Runs when the Promise is fulfilled.
  // The user object is received as the callback argument.
  .then((user) => {
    console.log("User received:", user);

    // Return the user's name to pass it to the next .then().
    // Returning a value fulfills the next Promise with that value.
    return user.name;
  })

  // Receives the value returned by the previous .then().
  // Here, name is "Shishir".
  .then((name) => {
    console.log("Welcome,", name);
  })

  // Handles rejection or errors thrown by earlier handlers.
  // This runs if fetchUser rejects or an earlier .then() throws.
  .catch((error) => {
    console.error("Error:", error.message);
  })

  // Runs after the chain settles, whether it succeeds or fails.
  // Useful for cleanup, hiding loaders, or ending a request indicator.
  .finally(() => {
    console.log("Request completed.");
  });

// This line executes before the 2-second timer finishes.
// Promise-based asynchronous work does not block this log.
console.log("This runs immediately!");


// Fetching user...
// This runs immediately!
// (User request completes after 2 seconds)
// User received: { id: 1, name: 'Shishir' }
// Welcome, Shishir
// Request completed.
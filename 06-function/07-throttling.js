
/*
DEFINITION:
Throttling is a technique that limits how frequently a function
can execute.

Even if the function is called repeatedly, it executes at most
once during each specified time interval.
*/

function throttle(fn, delay) {
    let lastCall = 0; // Stores the time of the last execution

    return function (...args) {
        const now = Date.now(); // Get the current time

        // Execute only if the delay has passed
        if (now - lastCall >= delay) {
            lastCall = now; // Update the last execution time
            fn(...args);    // Call fn with the original arguments
        }
    };
}

// Example: Function to handle scrolling
function handleScroll() {
    console.log("Handling scroll...");
}

// Create a throttled function with a 1000ms interval
const throttledScroll = throttle(handleScroll, 1000);

// Simulate frequent calls
throttledScroll(); // Executes immediately
throttledScroll(); // Ignored
throttledScroll(); // Ignored

// After at least 1000ms:
throttledScroll(); // Executes again


/*
REAL-WORLD USE CASES:

1. Scroll events:
   Limit how often scroll-related calculations run.

2. Mouse movement:
   Limit frequent mouse-position updates.

3. Window resizing:
   Limit layout recalculations while resizing.

4. Button actions:
   Prevent an action from executing too frequently.

5. Game controls:
   Limit how frequently certain actions are processed.

6. API requests:
   Limit how frequently requests are initiated during rapid events.
*/
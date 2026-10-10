
/*
DEFINITION:
Debouncing is a technique that delays function execution until
a specified time has passed without another call.

Every new call resets the timer, so the function executes only
after the calls stop for the specified delay.
*/

function debounce(fn, delay) {
    let timer; // Stores the latest timer ID

    return function (...args) {
        clearTimeout(timer); // Cancel the previous timer

        // Execute fn only after calls stop for 'delay' milliseconds
        timer = setTimeout(() => {
            fn(...args); // Call fn with the original arguments
        }, delay);
    };
}

// Example: Function to search for a query
function search(query) {
    console.log("Searching for:", query);
}

// Create a debounced version with a 300ms delay
const debouncedSearch = debounce(search, 300);

// Simulate rapid typing
debouncedSearch("J");
debouncedSearch("Ja");
debouncedSearch("Java");
debouncedSearch("JavaScript");

// Output after 300ms without another call:
// Searching for: JavaScript


/*
REAL-WORLD USE CASES:

1. Search autocomplete:
   Call the search API after the user stops typing.

2. Form validation:
   Validate input after the user pauses typing.

3. Window resizing:
   Recalculate layouts after resizing stops.

4. Auto-save:
   Save a document after the user stops editing.

5. API-driven filters:
   Fetch filtered results after the user finishes changing filters.

6. Expensive calculations:
   Avoid repeating costly work during rapid user interactions.
*/
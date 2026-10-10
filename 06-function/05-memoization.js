function memoize(fn) {
  const cache = {};

  return function (n) {
    if (n in cache) {
      return cache[n]; // Return stored result
    }

    const result = fn(n); // Calculate result
    cache[n] = result; // Store result
    return result;
  };
}

function square(n) {
  console.log("Calculating...");
  return n * n;
}

const memoizedSquare = memoize(square);

console.log(memoizedSquare(5)); // Calculating... 25
console.log(memoizedSquare(5)); // 25 (from cache)
console.log(memoizedSquare(6)); // Calculating... 36

// Key concepts to remember

// Cache: Stores previously computed results.
// Cache hit: The input already exists in the cache, so the stored result is returned.
// Cache miss: The input is new, so the function executes and its result is stored.
// Time complexity: Repeated calls with cached inputs can avoid expensive computations, often reducing the work from O(n) to O(1) lookup time.

// When should you use memoization?

// Expensive mathematical calculations.
// Recursive algorithms, such as Fibonacci.
// Repeated computations with the same inputs.
// Pure functions whose output depends only on their inputs.

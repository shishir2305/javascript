function curry(fn) {
    // Return a function that collects arguments
    return function curried(...args) {

        // If enough arguments are collected, call the original function
        if (args.length >= fn.length) {
            return fn(...args);
        }

        // Otherwise, return a function to collect more arguments
        return (...nextArgs) => curried(...args, ...nextArgs);
    };
}

// Original function requiring 3 arguments
function add(a, b, c) {
    return a + b + c;
}

// Convert add into a curried function
const curriedAdd = curry(add);

// Each call supplies arguments until all 3 are collected
console.log(curriedAdd(2)(3)(4)); // 9
console.log(curriedAdd(2, 3)(4)); // 9
console.log(curriedAdd(2)(3, 4)); // 9
// Definition: The Iterator Protocol defines how an object produces values
// one at a time using next(), which returns { value, done }.

// Create a custom iterable object using Symbol.iterator.
const numbers = {
  start: 1,
  end: 3,

  [Symbol.iterator]() {
    let current = this.start;

    // Return an iterator object implementing the next() method.
    return {
      next: () => {
        if (current > this.end) {
          return { value: undefined, done: true }; // Iteration complete
        }

        return { value: current++, done: false }; // Return the next value
      }
    };
  }
};

// for...of automatically uses the custom iterator protocol.
for (const number of numbers) {
  console.log(number); // 1, 2, 3
}

// Manually consume the iterator.
const iterator = numbers[Symbol.iterator]();

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: undefined, done: true }
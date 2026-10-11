// Definition: An iterator is an object that produces values one at a time
// using next(), returning { value, done } to indicate the current value
// and whether the iteration has finished.

// Create a custom iterable object.
const numbers = {
  start: 1,
  end: 3,

  [Symbol.iterator]() {
    let current = this.start; // Maintains the iterator's state.

    return {
      next: () => {
        if (current > this.end) {
          return { value: undefined, done: true }; // Stop iteration.
        }

        return { value: current++, done: false }; // Produce the next value.
      }
    };
  }
};

// WHY USE ITERATORS?
// 1. Process values one at a time instead of creating another array.
// 2. Generate values on demand (lazy evaluation).
// 3. Define custom iteration logic for your own data structures.

// for...of automatically uses Symbol.iterator and next().
for (const number of numbers) {
  console.log(number); // 1, 2, 3
}

// You can also control iteration manually.
const iterator = numbers[Symbol.iterator]();

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: undefined, done: true }
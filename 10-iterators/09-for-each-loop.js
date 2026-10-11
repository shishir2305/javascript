// Definition: forEach() invokes a callback for each existing
// array element; it returns undefined.

const numbers = [10, 20, 30];

numbers.forEach((number, index) => {
  console.log(index, number);
  // 0 10
  // 1 20
  // 2 30
});

// You cannot use break or continue to control the forEach loop.
// Use for...of if you need early termination.

// Definition: A generator is a pausable function that produces values
// using yield and resumes execution whenever next() is called.

function* generateNumbers() {
  console.log("Started");

  yield 10; // Pause execution and produce 10
  yield 20; // Resume here, then pause and produce 20
  yield 30; // Resume here, then pause and produce 30
}

// Calling a generator function returns an iterator; it does not run the body.
const generator = generateNumbers();

console.log(generator.next()); // Logs "Started", then { value: 10, done: false }
console.log(generator.next()); // { value: 20, done: false }
console.log(generator.next()); // { value: 30, done: false }
console.log(generator.next()); // { value: undefined, done: true }
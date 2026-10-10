// ==========================================
// CURRYING IN JAVASCRIPT
// ==========================================

// 1. Normal function
function sum(a, b, c) {
  return a + b + c;
}

console.log(sum(2, 3, 4)); // 9

// 2. Basic currying
function curriedSum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(curriedSum(2)(3)(4)); // 9

// 3. Currying using arrow functions
const multiply = (a) => (b) => (c) => a * b * c;

console.log(multiply(2)(3)(4)); // 24

// 4. Practical example: reusable discount function
const discount = (percentage) => (price) => price - (price * percentage) / 100;

const tenPercentOff = discount(10);
const twentyPercentOff = discount(20);

console.log(tenPercentOff(1000)); // 900
console.log(twentyPercentOff(1000)); // 800

// 5. Generic curry function
function curry(fn) {
  function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    }

    return (...nextArgs) => curried(...args, ...nextArgs);
  }

  return curried;
}

function add(a, b, c) {
  return a + b + c;
}

const curriedAdd = curry(add);

console.log(curriedAdd(1)(2)(3)); // 6
console.log(curriedAdd(1, 2)(3)); // 6
console.log(curriedAdd(1)(2, 3)); // 6
console.log(curriedAdd(1, 2, 3)); // 6

// 6. Currying with string operations
const greet = (greeting) => (name) => `${greeting}, ${name}!`;

const sayHello = greet("Hello");
const sayWelcome = greet("Welcome");

console.log(sayHello("Alex")); // Hello, Alex!
console.log(sayWelcome("Sam")); // Welcome, Sam!

// 7. Currying with array filtering
const filterBy = (key) => (value) => (array) =>
  array.filter((item) => item[key] === value);

const filterByRole = filterBy("role");
const admins = filterByRole("admin");

const users = [
  { name: "Alex", role: "admin" },
  { name: "Sam", role: "user" },
  { name: "Riya", role: "admin" },
];

console.log(admins(users));
// [
//   { name: "Alex", role: "admin" },
//   { name: "Riya", role: "admin" }
// ]

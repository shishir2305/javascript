/*
DEFINITION:
1. Destructuring: Extract values from arrays or objects.
2. Rest (...): Collect multiple values into an array or object.
3. Spread (...): Expand an array or object into individual values
   or properties.
*/

// 1. OBJECT DESTRUCTURING IN PARAMETERS
function displayUser({ name, age }) {
  console.log(name, age);
}

displayUser({ name: "Shishir", age: 25 });
// Shishir 25

// 2. ARRAY DESTRUCTURING IN PARAMETERS
function displayCoordinates([x, y]) {
  console.log(x, y);
}

displayCoordinates([10, 20]);
// 10 20

// 3. DEFAULT VALUES WITH DESTRUCTURING
function greet({ name = "Guest" } = {}) {
  console.log(`Hello, ${name}`);
}

greet({ name: "Shishir" }); // Hello, Shishir
greet(); // Hello, Guest

// 4. REST SYNTAX: COLLECT REMAINING ARGUMENTS
function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}

console.log(sum(10, 20, 30)); // 60

// REST WITH OBJECT DESTRUCTURING
const user = { name: "Shishir", age: 25, role: "Engineer" };

const { name, ...otherDetails } = user;

console.log(name); // Shishir
console.log(otherDetails); // { age: 25, role: "Engineer" }

// 5. SPREAD SYNTAX: EXPAND VALUES
const first = [1, 2];
const second = [3, 4];

const combined = [...first, ...second];

console.log(combined); // [1, 2, 3, 4]

// SPREAD WITH OBJECTS
const updatedUser = { ...user, age: 26 };

console.log(updatedUser);
// { name: "Shishir", age: 26, role: "Engineer" }

// 6. REAL-WORLD USE CASES:

// Destructuring: Extract API response properties
function displayProfile({ name, email }) {
  console.log(name, email);
}

// Rest: Accept any number of arguments
function logMessages(...messages) {
  console.log(messages);
}

// Spread: Pass array elements as function arguments
const scores = [80, 90, 95];
console.log(Math.max(...scores)); // 95

// Spread: Create an updated object without mutating the original
const newProfile = { ...user, role: "Tech Lead" };

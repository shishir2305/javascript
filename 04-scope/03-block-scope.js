// BLOCK SCOPE IN JAVASCRIPT

// 1. let and const are accessible only inside their block.

{
  let age = 24;
  const name = "Shishir";

  console.log(age); // 24
  console.log(name); // Shishir
}

// Variables cannot be accessed outside the block.
// console.log(age);  // ReferenceError
// console.log(name); // ReferenceError

// 2. var ignores block scope.

{
  var city = "Kolkata";
  let country = "India";
}

console.log(city); // Kolkata: var is not block-scoped

// console.log(country); // ReferenceError: block-scoped

// 3. Block scope in if statements.

if (true) {
  let message = "Hello";
  const number = 100;

  console.log(message); // Hello
  console.log(number); // 100
}

// console.log(message); // ReferenceError
// console.log(number);  // ReferenceError

// 4. Block scope in loops.

for (let i = 0; i < 3; i++) {
  console.log(i); // 0, 1, 2
}

// console.log(i); // ReferenceError: i is block-scoped

// 5. Different blocks can declare the same variable name.

{
  let value = 10;
  console.log(value); // 10
}

{
  let value = 20;
  console.log(value); // 20
}

// KEY TAKEAWAY:
// let and const belong to the nearest enclosing block {}.
// var belongs to the nearest enclosing function, or the global
// environment when declared at the top level of a classic script.

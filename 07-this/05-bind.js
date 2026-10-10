
/*
DEFINITION:
bind() returns a new function with `this` fixed
to the object we provide. It does not execute immediately.
*/

const user = {
  name: "Shishir",

  greet() {
    console.log(`Hello, ${this.name}!`);
  }
};

// Extract the method from the object
const greetFn = user.greet;

// Fix `this` to user and create a new function
const boundGreet = greetFn.bind(user);

// Execute it later
boundGreet(); // Hello, Shishir!
boundGreet(); // Hello, Shishir!
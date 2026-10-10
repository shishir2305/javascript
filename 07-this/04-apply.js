
/*
DEFINITION:
apply() calls a function immediately, sets its `this`,
and passes arguments as an array.
*/

function introduce(city, role) {
  console.log(`${this.name} lives in ${city} and is a ${role}.`);
}

const user1 = { name: "Shishir" };
const user2 = { name: "Rahul" };

// Reuse the same function with different objects and data
introduce.apply(user1, ["Kolkata", "Developer"]);
introduce.apply(user2, ["Mumbai", "Designer"]);

// Output:
// Shishir lives in Kolkata and is a Developer.
// Rahul lives in Mumbai and is a Designer.

// You can also borrow an existing object's method
const person = {
  name: "Amit",
  greet() {
    console.log(`Hello, ${this.name}!`);
  }
};

person.greet.apply(user1); // Hello, Shishir!
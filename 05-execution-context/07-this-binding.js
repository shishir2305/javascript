// THIS BINDING IN JAVASCRIPT

"use strict";

// 1. IMPLICIT BINDING
// The object before the dot determines `this`.

const user = {
  name: "Shishir",

  greet() {
    console.log(this.name);
  },
};

user.greet(); // Shishir

// 2. DEFAULT BINDING
// A regular function called independently has undefined `this`
// in strict mode.

function showThis() {
  console.log(this);
}

showThis(); // undefined

// 3. EXPLICIT BINDING: call(), apply(), bind()

function introduce(city) {
  console.log(`${this.name} lives in ${city}`);
}

const person = { name: "Shishir" };

introduce.call(person, "Kolkata");
// Shishir lives in Kolkata

introduce.apply(person, ["Kolkata"]);
// Shishir lives in Kolkata

const boundIntroduce = introduce.bind(person, "Kolkata");
boundIntroduce();
// Shishir lives in Kolkata

// 4. CONSTRUCTOR BINDING
// `new` creates an instance and binds `this` to it.

function Person(name) {
  this.name = name;
}

const p1 = new Person("Shishir");

console.log(p1.name); // Shishir

// 5. ARROW FUNCTIONS
// Arrow functions inherit `this` from their surrounding scope.

const team = {
  name: "Engineering",

  showName() {
    const print = () => {
      console.log(this.name);
    };

    print();
  },
};

team.showName(); // Engineering

// 6. EXTRACTING A METHOD
// The original receiver is lost when the method is detached.

const greet = user.greet;

greet(); // undefined in strict mode

// Fix: explicitly bind the original object.
const boundGreet = user.greet.bind(user);
boundGreet(); // Shishir

// KEY TAKEAWAY:
// Regular function: `this` depends on how it is called.
// Arrow function: `this` comes from its lexical surroundings.
// call/apply: invoke immediately with a chosen `this`.
// bind: return a new function with a chosen `this`.
// new: bind `this` to a newly created instance.

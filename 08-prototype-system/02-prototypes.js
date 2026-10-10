
/*
====================================================
JAVASCRIPT PROTOTYPES — INTERVIEW NOTES
====================================================

Prototype = an object from which another object can
inherit properties and methods.

Why prototypes?
- Share methods between instances.
- Avoid creating duplicate method functions.
- Enable inheritance and property lookup.
*/


// 1. SHARED METHODS USING PROTOTYPES

function User(name) {
  this.name = name; // Own property: each user has its own name
}

// Shared method: stored once on the prototype
User.prototype.greet = function () {
  return `Hello, ${this.name}`;
};

const user1 = new User("Shishir");
const user2 = new User("Rahul");

console.log(user1.greet()); // Hello, Shishir
console.log(user2.greet()); // Hello, Rahul

// Both instances use the same function
console.log(user1.greet === user2.greet); // true


// 2. prototype vs [[Prototype]] vs __proto__

// User.prototype: prototype object used by `new User()`
// [[Prototype]]: internal link from an object to its prototype
// __proto__: legacy accessor for that link; avoid using it

console.log(Object.getPrototypeOf(user1) === User.prototype); // true


// 3. HOW `new` WORKS

// Conceptually, `new User("A")`:
// 1. Creates a new object.
// 2. Links it to User.prototype.
// 3. Calls User with `this` set to the new object.
// 4. Returns the object unless another object is returned.

const example = Object.create(User.prototype);
User.call(example, "Example");

console.log(example.greet()); // Hello, Example

// This is an illustration of the process, not a full replacement
// for `new` in all cases.


// 4. PROTOTYPE CHAIN

// user1 -> User.prototype -> Object.prototype -> null

console.log(user1.toString()); // Inherited from Object.prototype

// Property lookup searches the object, then its prototype chain.
console.log("greet" in user1); // true


// 5. OWN vs INHERITED PROPERTIES

console.log(Object.hasOwn(user1, "name"));  // true
console.log(Object.hasOwn(user1, "greet")); // false
console.log("greet" in user1);              // true

// hasOwn checks only own properties; `in` includes inherited ones.


// 6. PROPERTY SHADOWING

User.prototype.role = "Developer"; // Shared inherited property

console.log(user1.role); // Developer
console.log(user2.role); // Developer

// Assigning creates an own property that shadows the inherited one.
user1.role = "Designer";

console.log(user1.role); // Designer
console.log(user2.role); // Developer
console.log(Object.hasOwn(user1, "role")); // true


// 7. PROTOTYPE CHANGES AFFECT INSTANCES

User.prototype.sayHi = function () {
  return `Hi, ${this.name}`;
};

// Existing instances can access newly added prototype methods.
console.log(user1.sayHi()); // Hi, Shishir

// Avoid changing prototypes unnecessarily in production code.


// 8. OBJECT.create()

const parent = {
  greet() {
    return `Hi, ${this.name}`;
  }
};

const child = Object.create(parent);
child.name = "Amit";

console.log(child.greet()); // Hi, Amit
console.log(Object.getPrototypeOf(child) === parent); // true
console.log(Object.hasOwn(child, "greet")); // false

// Object.create(parent) does not copy parent.
// It makes parent the new object's prototype.


// 9. CLASS SYNTAX ALSO USES PROTOTYPES

class Employee {
  constructor(name) {
    this.name = name; // Own property
  }

  greet() {
    return `Hello, ${this.name}`; // Shared prototype method
  }
}

const employee1 = new Employee("Neha");
const employee2 = new Employee("Amit");

console.log(employee1.greet()); // Hello, Neha
console.log(employee1.greet === employee2.greet); // true
console.log(
  Object.getPrototypeOf(employee1) === Employee.prototype
); // true


// 10. INHERITANCE WITH CLASSES

class Developer extends Employee {
  code() {
    return `${this.name} is coding`;
  }
}

const dev = new Developer("Shishir");

console.log(dev.greet()); // Hello, Shishir (inherited)
console.log(dev.code());  // Shishir is coding

// Prototype chain:
// dev -> Developer.prototype -> Employee.prototype
//     -> Object.prototype -> null


// 11. CONSTRUCTOR vs PROTOTYPE

console.log(user1.constructor === User); // true

// constructor is an ordinary inherited property, not proof
// of an object's true origin; it can be changed or shadowed.


// 12. OBJECT WITHOUT A PROTOTYPE

const dictionary = Object.create(null);
dictionary.name = "Shishir";

console.log(dictionary.name); // Shishir
console.log(Object.getPrototypeOf(dictionary)); // null

// Useful for some dictionary use cases.
// It has no inherited methods like toString().


// 13. IMPORTANT EDGE CASES

// Object literals normally inherit from Object.prototype.
const ordinary = {};
console.log(Object.getPrototypeOf(ordinary) === Object.prototype); // true

// Arrays have Array.prototype in their prototype chain.
const arr = [];
console.log(Object.getPrototypeOf(arr) === Array.prototype); // true

// Functions have Function.prototype in their prototype chain.
function demo() {}
console.log(Object.getPrototypeOf(demo) === Function.prototype); // true

// Changing an object's prototype dynamically is usually discouraged.
// Prefer Object.create() or class/constructor patterns when designing
// inheritance from the beginning.


// 14. QUICK INTERVIEW SUMMARY

// - Prototypes enable shared behavior and inheritance.
// - Instances own their data; prototypes can hold shared methods.
// - `new` links an instance to Constructor.prototype.
// - Object.getPrototypeOf(obj) reads the actual prototype link.
// - `in` includes inherited properties; Object.hasOwn() does not.
// - Own properties can shadow inherited properties.
// - Classes use prototypes for instance methods.
// - Object.create(proto) sets a prototype without running a constructor.
// - Prototype lookup ends when a property is found or the chain hits null.
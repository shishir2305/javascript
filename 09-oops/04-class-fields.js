// ============================================
// CLASS FIELDS, PUBLIC FIELDS & INSTANCE METHODS
// ============================================

class User {
  // 1. PUBLIC CLASS FIELDS
  // Declared directly inside the class.
  // Each instance gets its own copy of these properties.
  name = "Guest";
  age = 18;

  // 2. CONSTRUCTOR
  // Runs when an object is created using `new`.
  // Used to initialize instance properties with custom values.
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // 3. INSTANCE METHOD
  // Defines behavior for instances.
  // Stored on User.prototype and shared by all instances.
  greet() {
    return `Hi, I'm ${this.name}, aged ${this.age}`;
  }

  // Another instance method
  haveBirthday() {
    this.age++; // Updates this instance's age
    return this.age;
  }
}

// Create two separate instances
const user1 = new User("Alex", 25);
const user2 = new User("Sam", 30);

// Each instance has its own public properties
console.log(user1.name); // "Alex"
console.log(user2.name); // "Sam"

// Call instance methods on objects
console.log(user1.greet()); // "Hi, I'm Alex, aged 25"
console.log(user2.greet()); // "Hi, I'm Sam, aged 30"

// Changing one instance does not change the other
user1.haveBirthday();

console.log(user1.age); // 26
console.log(user2.age); // 30

// Class fields are own properties of each instance
console.log(Object.hasOwn(user1, "name")); // true
console.log(Object.hasOwn(user1, "age"));  // true

// Instance methods are shared through the prototype
console.log(user1.greet === user2.greet); // true
console.log(Object.hasOwn(user1, "greet")); // false
console.log(Object.hasOwn(User.prototype, "greet")); // true

// ============================================
// QUICK REVISION
// ============================================
// Class fields: properties declared in the class body.
// Public fields: accessible directly from outside the class.
// Instance properties: own properties belonging to each object.
// Instance methods: shared functions stored on the prototype.
// `this`: refers to the instance when called as user1.greet().
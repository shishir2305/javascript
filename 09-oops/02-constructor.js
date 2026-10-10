// ============================================
// 1. CONSTRUCTOR FUNCTION AND `new` KEYWORD
// ============================================

function User(name, age) {
  // `this` refers to the new object created by `new`
  this.name = name;
  this.age = age;
}

// Add a method to the prototype so instances share it
User.prototype.greet = function () {
  return `Hello, ${this.name}`;
};

// `new` creates and initializes a new object
const user1 = new User("Alex", 25);

console.log(user1.name);    // "Alex"
console.log(user1.age);     // 25
console.log(user1.greet()); // "Hello, Alex"

// ============================================
// 2. WHAT `new` DOES INTERNALLY
// ============================================

// Conceptually, `new User("Sam", 30)` does the following:

// Step 1: Create an object whose prototype is User.prototype
const user2 = Object.create(User.prototype);

// Step 2: Execute the constructor with `this` set to user2
User.call(user2, "Sam", 30);

// Step 3: Return the initialized object
// (This simplified example assumes the constructor doesn't
// explicitly return another object.)

console.log(user2.name);    // "Sam"
console.log(user2.greet()); // "Hello, Sam"

// Verify the prototype relationship
console.log(Object.getPrototypeOf(user1) === User.prototype); // true

// ============================================
// 3. CONSTRUCTOR RETURN VALUES
// ============================================

function Person(name) {
  this.name = name;

  // Returning an object replaces the instance created by `new`
  return { name: "Sam" };
}

console.log(new Person("Alex").name); // "Sam"

function Employee(name) {
  this.name = name;

  // Returning a primitive does not replace the new instance
  return 100;
}

console.log(new Employee("Alex").name); // "Alex"

// ============================================
// 4. CONSTRUCTOR WITH CLASS
// ============================================

class Car {
  constructor(brand, model) {
    // Initializes the instance created by `new`
    this.brand = brand;
    this.model = model;
  }

  // Shared method on Car.prototype
  drive() {
    return `${this.brand} ${this.model} is driving`;
  }
}

const car1 = new Car("Toyota", "Corolla");

console.log(car1.brand); // "Toyota"
console.log(car1.drive()); // "Toyota Corolla is driving"

// Classes must be called with `new`
// Car("Toyota", "Corolla"); // TypeError

// ============================================
// QUICK REVISION
// ============================================
// constructor -> Initializes an object's properties.
// new         -> Creates an object, links its prototype,
//                calls the constructor with `this` set to
//                that object, then returns the instance
//                unless the constructor returns an object.
// prototype   -> Enables instances to share methods.
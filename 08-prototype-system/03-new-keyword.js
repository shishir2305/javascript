// ============================================
// THE `new` KEYWORD IN JAVASCRIPT
// ============================================

// 1. Constructor function
function User(name, age) {
  this.name = name; // `this` refers to the new object
  this.age = age;
}

// Add a shared method to the prototype
User.prototype.greet = function () {
  return `Hi, I'm ${this.name}`;
};

// 2. Using `new`
const user1 = new User("Alex", 25);

// Internally, `new User(...)` conceptually does this:
// Step 1: Create a new empty object.
// Step 2: Link its prototype to User.prototype.
// Step 3: Execute User with `this` pointing to that object.
// Step 4: Return the object (unless the constructor returns another object).

console.log(user1.name); // "Alex"
console.log(user1.age); // 25
console.log(user1.greet()); // "Hi, I'm Alex"

// 3. Verify the prototype connection
console.log(Object.getPrototypeOf(user1) === User.prototype); // true

// 4. Methods are shared through the prototype
const user2 = new User("Sam", 30);

console.log(user1.greet === user2.greet); // true
// Both objects reuse the same function instead of storing separate copies.

// 5. What if the constructor returns an object?
function Person() {
  this.name = "Alex";

  return { name: "Sam" }; // Explicit object replaces the new instance
}

console.log(new Person().name); // "Sam"

// Returning a primitive does NOT replace the instance.
function Employee() {
  this.name = "Alex";
  return 100;
}

console.log(new Employee().name); // "Alex"

// 6. Without `new`
function Product(name) {
  this.name = name;
}

// In strict mode, calling Product() without `new` throws a TypeError
// because `this` is undefined. With `new`, `this` is the new instance.

// 7. Classes also use `new`
class Car {
  constructor(brand) {
    this.brand = brand; // Initialize the new instance
  }

  drive() {
    return `${this.brand} is driving`;
  }
}

const car = new Car("Toyota");

console.log(car.drive()); // "Toyota is driving"

// Calling a class without `new` throws a TypeError:
// Car("Toyota"); // TypeError

// 8. Arrow functions cannot be used with `new`
const greet = () => "Hello";

// new greet(); // TypeError: greet is not a constructor

// ============================================
// QUICK REVISION
// ============================================
// `new` creates an object, links its prototype,
// runs the constructor with `this` set to that object,
// and returns it unless an object/function is returned
// explicitly by a regular constructor function.
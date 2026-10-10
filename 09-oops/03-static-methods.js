// ============================================
// STATIC METHODS IN JAVASCRIPT
// ============================================

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Instance method: called on an object
  greet() {
    return `Hello, ${this.name}`;
  }

  // Static method: belongs to the class itself
  static createGuest() {
    return new User("Guest", 0);
  }

  // Static method that accepts arguments
  static compareAge(user1, user2) {
    return user1.age - user2.age;
  }
}

const user1 = new User("Alex", 25);
const user2 = new User("Sam", 30);

// Call an instance method on an object
console.log(user1.greet()); // "Hello, Alex"

// Call a static method using the class name
const guest = User.createGuest();
console.log(guest.name); // "Guest"
console.log(guest.age);  // 0

// Static methods can operate on objects passed to them
console.log(User.compareAge(user1, user2)); // -5

// Static methods are not available directly on instances
// user1.createGuest(); // TypeError

// Check where the methods exist
console.log(Object.hasOwn(User.prototype, "greet")); // true
console.log(Object.hasOwn(User, "createGuest")); // true

// ============================================
// STATIC METHOD USING `this`
// ============================================

class Calculator {
  static add(a, b) {
    return a + b;
  }

  static multiply(a, b) {
    // `this` refers to the class when called as Calculator.multiply()
    return this.add(a, b) * 2;
  }
}

console.log(Calculator.add(3, 4));      // 7
console.log(Calculator.multiply(3, 4)); // 14

// ============================================
// QUICK REVISION
// ============================================
// Static methods belong to the class, not its instances.
// Call them using ClassName.method().
// They're useful for utility functions, factory methods,
// and operations that don't require a specific instance.
// ============================================
// JAVASCRIPT CLASSES AND THEIR PROPERTIES
// ============================================

// 1. CLASS AND CONSTRUCTOR
class User {
  constructor(name, age) {
    // Instance properties: each object gets its own values
    this.name = name;
    this.age = age;
  }

  // Instance method: shared through User.prototype
  greet() {
    return `Hello, ${this.name}`;
  }

  // Static property: belongs to the class, not its instances
  static count = 0;

  // Static method: called using the class name
  static getCount() {
    return User.count;
  }
}

const user1 = new User("Alex", 25);
const user2 = new User("Sam", 30);

console.log(user1.name); // "Alex" — instance property
console.log(user1.greet()); // "Hello, Alex" — instance method

console.log(user1.greet === user2.greet); // true — shared method
console.log(User.count); // 0 — static property
console.log(User.getCount()); // 0 — static method

// ============================================
// 2. PUBLIC AND PRIVATE PROPERTIES
// ============================================

class BankAccount {
  owner = "";       // Public instance field
  #balance = 0;     // Private instance field (# restricts access)

  constructor(owner, balance) {
    this.owner = owner;
    this.#balance = balance;
  }

  // Getter: read balance like a property
  get balance() {
    return this.#balance;
  }

  // Setter: validate a value before updating balance
  set balance(amount) {
    if (amount < 0) {
      throw new Error("Balance cannot be negative");
    }
    this.#balance = amount;
  }
}

const account = new BankAccount("Alex", 100);

console.log(account.owner); // "Alex" — public property
console.log(account.balance); // 100 — getter
account.balance = 200; // Calls the setter
console.log(account.balance); // 200

// console.log(account.#balance); // SyntaxError: private field

// ============================================
// 3. INHERITANCE AND SUPER
// ============================================

class Animal {
  constructor(name) {
    this.name = name; // Parent instance property
  }

  speak() {
    return `${this.name} makes a sound`;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Calls parent constructor
    this.breed = breed; // Child instance property
  }

  speak() {
    // Reuse the parent's method
    return `${super.speak()} — woof!`;
  }
}

const dog = new Dog("Bruno", "Labrador");

console.log(dog.name); // "Bruno" — inherited instance property
console.log(dog.breed); // "Labrador" — child instance property
console.log(dog.speak()); // "Bruno makes a sound — woof!"

// ============================================
// QUICK REVISION
// ============================================
// constructor()  -> Initializes a new instance.
// this.property  -> Instance property.
// method()       -> Shared on the class prototype.
// static        -> Property/method belongs to the class.
// get / set     -> Property-like access with custom logic.
// #property     -> Private class field.
// extends       -> Creates a subclass.
// super()       -> Calls the parent constructor.
// super.method() -> Calls a parent method.
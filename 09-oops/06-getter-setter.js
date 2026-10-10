// ============================================
// GETTERS AND SETTERS IN JAVASCRIPT
// ============================================

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // GETTER: runs when you read the property.
  // Access it like a property, without parentheses.
  get details() {
    return `${this.name}, age ${this.age}`;
  }

  // SETTER: runs when you assign a value to the property.
  // Useful for validating or transforming input.
  set userAge(value) {
    if (value < 0) {
      throw new Error("Age cannot be negative");
    }

    this.age = value;
  }
}

const user = new User("Alex", 25);

// Getter is accessed like a property, not a method.
console.log(user.details); // "Alex, age 25"

// Setter is triggered by assignment.
user.userAge = 30;
console.log(user.age); // 30

// Invalid values are rejected by the setter.
// user.userAge = -5; // Error: Age cannot be negative


// ============================================
// GETTER AND SETTER FOR THE SAME PROPERTY
// ============================================

class Temperature {
  constructor(celsius) {
    this.celsius = celsius; // Calls the setter below
  }

  get celsius() {
    return this._celsius;
  }

  set celsius(value) {
    if (typeof value !== "number" || !Number.isFinite(value)) {
      throw new TypeError("Temperature must be a finite number");
    }

    this._celsius = value; // Store in a different property
  }

  // Computed property derived from Celsius
  get fahrenheit() {
    return (this.celsius * 9) / 5 + 32;
  }
}

const temp = new Temperature(25);

console.log(temp.celsius);    // 25
console.log(temp.fahrenheit); // 77

temp.celsius = 100;            // Calls the setter
console.log(temp.fahrenheit); // 212


// ============================================
// GETTERS, SETTERS AND PRIVATE FIELDS
// ============================================

class BankAccount {
  #balance;

  constructor(balance) {
    this.#balance = balance;
  }

  // Getter provides controlled read access
  get balance() {
    return this.#balance;
  }

  // Setter validates before updating private data
  set balance(amount) {
    if (amount < 0) {
      throw new Error("Balance cannot be negative");
    }

    this.#balance = amount;
  }
}

const account = new BankAccount(500);

console.log(account.balance); // 500
account.balance = 800;        // Calls setter
console.log(account.balance); // 800

// account.#balance; // SyntaxError: private field


// ============================================
// QUICK REVISION
// ============================================
// Getter (`get`): runs when a property is read.
// Setter (`set`): runs when a property is assigned.
// Use them like properties: obj.value, obj.value = 10.
// Common uses: validation, computed values and encapsulation.
// Avoid calling the same getter/setter property internally
// in a way that recursively calls itself.
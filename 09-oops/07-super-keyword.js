// ============================================
// 1. super() — CALLING THE PARENT CONSTRUCTOR
// ============================================

class Animal {
  constructor(name) {
    this.name = name; // Initialize the parent's property
    console.log("Animal constructor called");
  }

  speak() {
    return `${this.name} makes a sound`;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Calls Animal's constructor with name
    // After super(), `this` can be used in the child constructor.

    this.breed = breed; // Initialize the child's own property
  }
}

const dog = new Dog("Bruno", "Labrador");

console.log(dog.name);  // "Bruno" — initialized by Animal
console.log(dog.breed); // "Labrador" — initialized by Dog


// ============================================
// 2. super.method() — CALLING A PARENT METHOD
// ============================================

class Parent {
  greet() {
    return "Hello from Parent";
  }
}

class Child extends Parent {
  greet() {
    // Call the parent's greet() method, then extend its result
    return super.greet() + " and Child";
  }
}

const child = new Child();

console.log(child.greet());
// "Hello from Parent and Child"


// ============================================
// 3. WHY super() MUST COME FIRST
// ============================================

class Person {
  constructor(name) {
    this.name = name;
  }
}

class Employee extends Person {
  constructor(name, role) {
    // `this` cannot be used before super() in a derived constructor
    super(name);

    this.role = role;
  }
}

const employee = new Employee("Alex", "Engineer");
console.log(employee.name); // "Alex"
console.log(employee.role); // "Engineer"

// Without super() in a derived constructor, returning normally
// causes a ReferenceError because `this` is not initialized.


// ============================================
// 4. super USES THE PARENT PROTOTYPE'S METHOD
// ============================================

class AnimalBase {
  speak() {
    return "Animal sound";
  }
}

class Cat extends AnimalBase {
  speak() {
    return super.speak() + " — meow!";
  }
}

const cat = new Cat();

console.log(cat.speak()); // "Animal sound — meow!"


// ============================================
// QUICK REVISION
// ============================================
// super()        -> Calls the parent constructor.
// super.method() -> Calls a parent method.
// extends        -> Establishes class inheritance.
// In a derived constructor, call super() before using `this`.
// super.method() invokes the parent method with the current
// instance as `this`; it does not create a separate parent object.
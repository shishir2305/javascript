// ============================================
// INHERITANCE OF PUBLIC AND PRIVATE FIELDS
// ============================================

// PARENT CLASS
class Animal {
  // Public field: accessible inside and outside the class
  name;

  // Private field: accessible only inside Animal's class body
  #energy;

  constructor(name, energy) {
    this.name = name;
    this.#energy = energy;
  }

  // Public instance method
  eat() {
    this.#energy += 10;
    return `${this.name} is eating`;
  }

  // Public method provides controlled access to private data
  getEnergy() {
    return this.#energy;
  }

  // Private method: accessible only inside Animal's class body
  #rest() {
    this.#energy += 20;
  }

  recover() {
    this.#rest(); // Allowed: called inside the declaring class
    return this.#energy;
  }
}

// CHILD CLASS
class Dog extends Animal {
  // Public field belonging to Dog instances
  breed;

  // Private field belonging to Dog instances
  #mood;

  constructor(name, energy, breed) {
    super(name, energy); // Initialize inherited Animal properties
    this.breed = breed;
    this.#mood = "happy";
  }

  play() {
    // Inherited public field is accessible
    console.log(`${this.name} is playing`);

    // Dog can use inherited public methods
    this.eat();

    // Dog cannot directly access Animal's private field
    // console.log(this.#energy); // SyntaxError

    // Dog cannot directly access Animal's private method
    // this.#rest(); // SyntaxError

    // Use the parent's public method to access private data
    console.log("Energy:", this.getEnergy());

    return this.#mood; // Dog can access its own private field
  }

  getMood() {
    return this.#mood;
  }
}

// CREATE AN INSTANCE OF DOG
const dog = new Dog("Bruno", 50, "Labrador");

// Inherited public field
console.log(dog.name);       // "Bruno"

// Dog's own public field
console.log(dog.breed);      // "Labrador"

// Inherited public method
console.log(dog.eat());      // "Bruno is eating"

// Access private Animal field through a public method
console.log(dog.getEnergy()); // 60

// Access Dog's private field through its public method
console.log(dog.getMood());  // "happy"

// Private fields cannot be accessed directly from outside
// console.log(dog.#mood);   // SyntaxError
// console.log(dog.#energy); // SyntaxError

// ============================================
// QUICK REVISION
// ============================================
// 1. `extends` establishes inheritance between classes.
// 2. `super()` calls the parent constructor.
// 3. Public fields and methods are accessible to subclasses.
// 4. Private fields (#field) belong to the class that declares
//    them; subclasses cannot access them directly.
// 5. A parent can expose controlled access through public or
//    protected-by-convention methods (JavaScript has no
//    special `protected` field keyword).
// 6. A child can declare its own private fields independently.
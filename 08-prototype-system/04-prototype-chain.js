// ============================================
// 1. PROTOTYPE CHAIN
// ============================================

const parent = {
  greet() {
    return "Hello from parent";
  },
};

const child = Object.create(parent); // parent becomes child's prototype

child.name = "Alex"; // Own property

console.log(child.name); // "Alex" — found directly on child
console.log(child.greet()); // "Hello from parent" — found on parent

// Check the prototype relationship
console.log(Object.getPrototypeOf(child) === parent); // true

// ============================================
// 2. PROPERTY LOOKUP IN THE PROTOTYPE CHAIN
// ============================================

console.log(child.toString()); 
// Works because toString() is inherited from Object.prototype.

console.log(Object.getPrototypeOf(parent) === Object.prototype); // true
console.log(Object.getPrototypeOf(Object.prototype)); // null

// ============================================
// 3. INHERITANCE USING CONSTRUCTOR FUNCTIONS
// ============================================

function Animal(name) {
  this.name = name; // Each instance gets its own name
}

Animal.prototype.speak = function () {
  return `${this.name} makes a sound`;
};

function Dog(name, breed) {
  Animal.call(this, name); // Initialize Animal's properties on this Dog
  this.breed = breed;
}

// Connect Dog.prototype to Animal.prototype
Dog.prototype = Object.create(Animal.prototype);

// Restore the constructor reference
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
  return `${this.name} barks`;
};

const dog = new Dog("Bruno", "Labrador");

console.log(dog.name); // "Bruno"
console.log(dog.breed); // "Labrador"
console.log(dog.speak()); // "Bruno makes a sound"
console.log(dog.bark()); // "Bruno barks"

// The inheritance chain:
// dog -> Dog.prototype -> Animal.prototype -> Object.prototype -> null

console.log(dog instanceof Dog); // true
console.log(dog instanceof Animal); // true

// ============================================
// 4. INHERITANCE USING CLASS AND EXTENDS
// ============================================

class Vehicle {
  constructor(brand) {
    this.brand = brand;
  }

  drive() {
    return `${this.brand} is moving`;
  }
}

class Car extends Vehicle {
  constructor(brand, model) {
    super(brand); // Call the parent constructor before using `this`
    this.model = model;
  }

  honk() {
    return `${this.model} honks`;
  }
}

const car = new Car("Toyota", "Corolla");

console.log(car.drive()); // "Toyota is moving" — inherited method
console.log(car.honk()); // "Corolla honks" — own class's prototype method

// ============================================
// 5. PROPERTY SHADOWING
// ============================================

const animal = { sound: "generic sound" };
const cat = Object.create(animal);

cat.sound = "meow"; // Creates an own property that shadows the inherited one

console.log(cat.sound); // "meow"
console.log(animal.sound); // "generic sound"

// ============================================
// 6. OWN PROPERTY VS INHERITED PROPERTY
// ============================================

console.log(Object.hasOwn(cat, "sound")); // true — cat owns sound
console.log("sound" in cat); // true — includes own and inherited properties

delete cat.sound; // Remove cat's own property

console.log(cat.sound); // "generic sound" — inherited value is visible again
console.log(Object.hasOwn(cat, "sound")); // false
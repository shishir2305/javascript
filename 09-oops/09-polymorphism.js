// ============================================
// METHOD OVERRIDING AND POLYMORPHISM
// ============================================

class Animal {
  speak() {
    return "Animal makes a sound";
  }
}

class Dog extends Animal {
  // Override the parent's speak() method
  speak() {
    return "Woof!";
  }
}

class Cat extends Animal {
  // Override the same method differently
  speak() {
    return "Meow!";
  }
}

// Each object uses its own implementation
const dog = new Dog();
const cat = new Cat();

console.log(dog.speak()); // "Woof!"
console.log(cat.speak()); // "Meow!"

// Polymorphism: one function handles different object types
function makeSound(animal) {
  return animal.speak();
}

console.log(makeSound(dog)); // "Woof!"
console.log(makeSound(cat)); // "Meow!"

// `super` can reuse the parent's implementation
class Puppy extends Dog {
  speak() {
    return super.speak() + " I'm a puppy!";
  }
}

console.log(new Puppy().speak()); // "Woof! I'm a puppy!"

// Duck typing: inheritance is not required
const robot = {
  speak() {
    return "Beep!";
  },
};

console.log(makeSound(robot)); // "Beep!"

// QUICK REVISION:
// Overriding = subclass redefines an inherited method.
// Polymorphism = same method call, different behavior.
// super.method() = reuse the parent's method implementation.
// Duck typing = an object qualifies by providing the needed behavior.
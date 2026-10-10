// Method overriding occurs when a child class defines a method with the same name as a method inherited from its parent class. When called on the child instance, the child's implementation takes precedence.

class Animal {
  speak() {
    return "Animal makes a sound";
  }
}

class Dog extends Animal {
  // Overrides the inherited speak() method
  speak() {
    return "Dog barks";
  }
}

const animal = new Animal();
const dog = new Dog();

console.log(animal.speak()); // "Animal makes a sound"
console.log(dog.speak()); // "Dog barks"

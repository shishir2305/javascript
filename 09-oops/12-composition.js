// DEFINITION:
// Composition builds an object by combining smaller,
// reusable behaviors instead of relying only on inheritance.

// ============================================
// 1. CREATE REUSABLE BEHAVIORS
// ============================================

// Each function provides one independent capability.
const canMove = (state) => ({
  move() {
    console.log(`${state.name} is moving`);
  },
});

const canSpeak = (state) => ({
  speak() {
    console.log(`${state.name} says hello`);
  },
});

const canCharge = (state) => ({
  charge() {
    console.log(`${state.name} is charging`);
  },
});

// ============================================
// 2. COMPOSE BEHAVIORS INTO OBJECTS
// ============================================

function createRobot(name) {
  const state = { name };

  // Robot combines movement, speech, and charging.
  return {
    ...canMove(state),
    ...canSpeak(state),
    ...canCharge(state),
  };
}

function createCar(name) {
  const state = { name };

  // Car only needs movement.
  return {
    ...canMove(state),
  };
}

// ============================================
// 3. USE THE COMPOSED OBJECTS
// ============================================

const robot = createRobot("Robo");
robot.move();   // "Robo is moving"
robot.speak();  // "Robo says hello"
robot.charge(); // "Robo is charging"

const car = createCar("Tesla");
car.move();     // "Tesla is moving"

// car.speak(); // TypeError: car has no speak method

// ============================================
// QUICK REVISION
// ============================================
// 1. Composition combines small, reusable behaviors.
// 2. Each object gets only the capabilities it needs.
// 3. Behaviors can be reused across unrelated object types.
// 4. Composition often avoids deep inheritance hierarchies.
// 5. In this example, spread syntax copies the behavior methods
//    into each returned object; the shared state is held in
//    the closure created for that object.
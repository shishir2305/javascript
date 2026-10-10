
/*
DEFINITION:
call() invokes a function immediately and explicitly sets
the value of `this`. Additional arguments are passed individually.
*/

// 1. The same function can work with different objects
function introduce(city, role) {
    console.log(
        `${this.name} lives in ${city} and works as a ${role}.`
    );
}

const user1 = { name: "Shishir" };
const user2 = { name: "Rahul" };

// call(object, arguments...)
introduce.call(user1, "Kolkata", "Developer");
// Shishir lives in Kolkata and works as a Developer.

introduce.call(user2, "Mumbai", "Designer");
// Rahul lives in Mumbai and works as a Designer.


// 2. Reuse a method from another object
const person = {
    name: "Shishir",

    greet() {
        console.log(`Hello, ${this.name}!`);
    }
};

const anotherPerson = { name: "Rahul" };

// Borrow person.greet() and set `this` to anotherPerson
person.greet.call(anotherPerson);
// Hello, Rahul!


// 3. Use call() to invoke a function with a specific context
function showName() {
    console.log(this.name);
}

showName.call(user1); // Shishir


/*
REAL-WORLD USE CASES:
1. Method borrowing: reuse methods across different objects.
2. Code reuse: avoid creating duplicate functions for each object.
3. Explicit context: control what `this` refers to.
4. Legacy JavaScript: invoke methods with a chosen receiver.
*/
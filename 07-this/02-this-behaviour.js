
/*
1. GLOBAL THIS

Browser classic script: window
Node.js CommonJS: module.exports
ES modules: undefined
*/
console.log("Global this:", this);


/*
2. REGULAR FUNCTION

Non-strict direct call:
Browser: window
Node.js: globalThis

Strict direct call: undefined
*/
function nonStrictFunction() {
    console.log("Non-strict:", this);
}

function strictFunction() {
    "use strict";
    console.log("Strict:", this);
}

nonStrictFunction();
strictFunction();


/*
3. OBJECT METHOD

`this` refers to the object before the dot.
*/
const user = {
    name: "Shishir",

    greet() {
        console.log(this.name);
    }
};

user.greet(); // Shishir


/*
4. CONSTRUCTOR

`new` binds `this` to the new instance.
*/
function Employee(name) {
    this.name = name;
}

const employee = new Employee("Shishir");
console.log(employee.name); // Shishir


/*
5. ARROW FUNCTION

Inherits `this` from the surrounding scope.
*/
const person = {
    name: "Shishir",

    greet() {
        const sayName = () => console.log(this.name);
        sayName();
    }
};

person.greet(); // Shishir

/*
DEFINITION:
`this` refers to the value associated with a function call.
Its value usually depends on how the function is called.
*/

// 1. OBJECT METHOD: `this` refers to the calling object
const user = {
    name: "Shishir",

    greet() {
        console.log(this.name);
    }
};

user.greet(); // Shishir


// 2. REGULAR FUNCTION: depends on the call and strict mode
function showThis() {
    console.log(this);
}

showThis();
// undefined in strict mode or ES modules
// Global object in a non-strict classic browser script


// 3. ARROW FUNCTION: inherits `this` from outer scope
const person = {
    name: "Shishir",

    greet() {
        const sayName = () => console.log(this.name);
        sayName();
    }
};

person.greet(); // Shishir


// 4. EXPLICIT BINDING: choose `this` using call()
function introduce() {
    console.log(this.name);
}

introduce.call(user); // Shishir


// 5. CONSTRUCTOR: `this` refers to the new instance
function Employee(name) {
    this.name = name;
}

const employee = new Employee("Shishir");
console.log(employee.name); // Shishir


// 6. NESTED REGULAR FUNCTION: gets its own `this`
const team = {
    name: "Engineering",

    show() {
        function print() {
            console.log(this); // Depends on how print() is called
        }

        print();
    }
};

team.show();
// undefined in strict mode or ES modules
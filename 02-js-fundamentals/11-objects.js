// ============================================================
// JAVASCRIPT OBJECTS
// ============================================================
//
// Object = collection of key-value pairs.
//
// Objects are:
// - Non-primitive
// - Reference values
// - Mutable
// ============================================================


// ============================================================
// CREATING OBJECTS
// ============================================================

const user = {
    name: "Shishir",
    age: 25,
    isDeveloper: true
};


// ============================================================
// ACCESSING PROPERTIES
// ============================================================

// Dot notation
console.log(user.name);

// Bracket notation
console.log(user["age"]);


// Dynamic property access
const key = "name";

console.log(user[key]);
// Shishir


// ============================================================
// ADD / UPDATE
// ============================================================

user.city = "Kolkata";

user.age = 26;

console.log(user);


// ============================================================
// DELETE
// ============================================================

delete user.isDeveloper;

console.log(user);


// ============================================================
// CHECK PROPERTY
// ============================================================

console.log("name" in user);
// true

console.log(Object.hasOwn(user, "name"));
// true


// ============================================================
// KEYS / VALUES / ENTRIES
// ============================================================

console.log(Object.keys(user));

console.log(Object.values(user));

console.log(Object.entries(user));


// ============================================================
// ITERATION
// ============================================================

for (const [key, value] of Object.entries(user)) {
    console.log(key, value);
}


// ============================================================
// DESTRUCTURING
// ============================================================

const person = {
    name: "Shishir",
    age: 25
};

const { name, age } = person;

console.log(name);
console.log(age);


// Rename
const { name: userName } = person;

console.log(userName);


// Default value
const { city = "Kolkata" } = person;

console.log(city);


// ============================================================
// SPREAD
// ============================================================

const copy = {
    ...person
};

console.log(copy);


// Merge objects
const job = {
    role: "Software Engineer"
};

const combined = {
    ...person,
    ...job
};

console.log(combined);


// ============================================================
// NESTED OBJECT
// ============================================================

const employee = {
    name: "Shishir",

    address: {
        city: "Kolkata",
        country: "India"
    }
};

console.log(employee.address.city);


// Optional chaining
console.log(employee.company?.name);
// undefined


// ============================================================
// METHODS
// ============================================================

const developer = {
    name: "Shishir",

    greet() {
        console.log(`Hello, ${this.name}`);
    }
};

developer.greet();
// Hello, Shishir


// ============================================================
// COMPUTED PROPERTY
// ============================================================

const propertyName = "username";

const account = {
    [propertyName]: "Shishir"
};

console.log(account.username);


// ============================================================
// OBJECT REFERENCES
// ============================================================

const a = {
    name: "Shishir"
};

const b = a;

b.name = "John";

console.log(a.name);
// John

console.log(a === b);
// true


// Different objects:

const x = {
    name: "Shishir"
};

const y = {
    name: "Shishir"
};

console.log(x === y);
// false


// ============================================================
// OBJECT.ASSIGN
// ============================================================

const first = {
    name: "Shishir"
};

const second = {
    age: 25
};

const result = Object.assign({}, first, second);

console.log(result);


// ============================================================
// FREEZE
// ============================================================

const config = {
    version: 1
};

Object.freeze(config);

// config.version = 2; // Cannot modify

console.log(config.version);
// 1


// ============================================================
// TYPE
// ============================================================

console.log(typeof {});
// "object"

console.log(typeof []);
// "object"

console.log(typeof null);
// "object" ← historical JavaScript behavior
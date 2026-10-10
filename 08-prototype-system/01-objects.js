
/*
====================================================
JAVASCRIPT OBJECTS — INTERVIEW QUICK REFERENCE
====================================================
*/

// 1. OBJECT CREATION
const user = { name: "Shishir", age: 24 }; // Object literal

const user2 = Object.create(user); // Prototype = user
user2.city = "Kolkata";

function User(name) { this.name = name; } // Constructor
const user3 = new User("Rahul");

class Person {
  constructor(name) { this.name = name; }
  greet() { return `Hi, ${this.name}`; } // Shared via prototype
}
const person = new Person("Amit");

const user4 = Object.fromEntries([["name", "Neha"], ["age", 22]]);


// 2. ACCESS, ADD, UPDATE, DELETE
console.log(user.name);       // Shishir
console.log(user["age"]);     // 24

user.city = "Kolkata";        // Add
user.age = 25;                // Update
delete user.city;             // Delete

console.log("name" in user);               // true
console.log(Object.hasOwn(user, "name")); // true


// 3. KEYS, VALUES, ENTRIES
const data = { a: 1, b: 2 };

console.log(Object.keys(data));   // ["a", "b"]
console.log(Object.values(data)); // [1, 2]
console.log(Object.entries(data)); // [["a", 1], ["b", 2]]

// Convert entries back to an object
console.log(Object.fromEntries(Object.entries(data))); // { a: 1, b: 2 }


// 4. PROPERTY NAMES, SHORTHAND, SYMBOLS
const key = "score";
const score = 100;
const id = Symbol("id");

const result = { score, [key]: 200, [id]: 123 };
// Both score properties use the same key; the later value wins
console.log(result.score); // 200
console.log(result[id]);   // 123
console.log(Object.keys(result)); // ["score"]


// 5. PROPERTY DESCRIPTORS
const settings = {};

Object.defineProperty(settings, "mode", {
  value: "dark",
  writable: false,     // Cannot reassign
  enumerable: true,    // Appears in Object.keys()
  configurable: false   // Cannot delete or reconfigure
});

console.log(settings.mode); // dark
console.log(Object.getOwnPropertyDescriptor(settings, "mode"));


// 6. GETTERS AND SETTERS
const account = {
  _balance: 100,

  get balance() { return this._balance; },
  set balance(value) {
    if (value >= 0) this._balance = value;
  }
};

account.balance = 250;
console.log(account.balance); // 250


// 7. OBJECT REFERENCES
const a = { count: 1 };
const b = a;               // Copies reference, not object
b.count = 5;

console.log(a.count); // 5
console.log(a === b); // true

const c = { count: 5 };
console.log(a === c); // false: different objects


// 8. SHALLOW COPY VS DEEP COPY
const original = { name: "Shishir", address: { city: "Kolkata" } };

const shallow = { ...original }; // Copies only the outer object
shallow.address.city = "Mumbai";
console.log(original.address.city); // Mumbai: nested object is shared

const deep = structuredClone(original); // Deep clone of supported values
deep.address.city = "Delhi";
console.log(original.address.city); // Mumbai: original is unchanged


// 9. SPREAD, REST, DESTRUCTURING
const { name, ...remaining } = original;
console.log(name);      // Shishir
console.log(remaining); // Remaining own enumerable properties

const updated = { ...original, age: 24 }; // Shallow copy + update
console.log(updated.age); // 24

console.log(original.address?.city); // Safe nested access


// 10. PROTOTYPES AND INHERITANCE
const parent = { greet() { return "Hello"; } };
const child = Object.create(parent);
child.name = "Shishir";

console.log(child.greet()); // Hello: inherited method
console.log(Object.hasOwn(child, "greet")); // false
console.log("greet" in child);              // true
console.log(Object.getPrototypeOf(child) === parent); // true

console.log(user3 instanceof User); // true


// 11. FREEZE, SEAL, PREVENT EXTENSIONS
const frozen = Object.freeze({ age: 24 });
// Cannot add, delete, or reassign ordinary own properties
// Nested objects would still be mutable unless frozen separately.

const sealed = Object.seal({ age: 24 });
// Cannot add/delete properties; writable properties can change.

const restricted = Object.preventExtensions({ age: 24 });
// Cannot add new own properties.

console.log(Object.isFrozen(frozen)); // true


// 12. ITERATION
const item = { x: 10, y: 20 };

for (const key of Object.keys(item)) {
  console.log(key, item[key]); // x 10, then y 20
}

for (const [key, value] of Object.entries(item)) {
  console.log(key, value);
}

// for...in includes inherited enumerable string keys too.
// Use Object.hasOwn(obj, key) if you only want own properties.


// 13. OBJECT ASSIGNMENT
const target = { a: 1 };
Object.assign(target, { b: 2 }); // Mutates target
console.log(target); // { a: 1, b: 2 }


// 14. EQUALITY
const pointA = { x: 1 };
const pointB = { x: 1 };
console.log(pointA === pointB); // false: different identities

console.log(Object.is(NaN, NaN)); // true
console.log(Object.is(0, -0));    // false


// 15. JSON CONVERSION
const json = JSON.stringify({ name: "Shishir" });
console.log(json); // '{"name":"Shishir"}'
console.log(JSON.parse(json).name); // Shishir


// 16. OBJECT VS MAP
const map = new Map();
map.set({ id: 1 }, "User"); // Map keys can be objects
console.log(map.size); // 1


// 17. THIS IN OBJECT METHODS
const profile = {
  name: "Shishir",
  greet() { return this.name; }
};

console.log(profile.greet()); // Shishir

const greet = profile.greet;
// greet() has no profile receiver; returns undefined in strict mode.
console.log(greet());


// 18. IMPORTANT SECURITY NOTE
// Avoid blindly merging untrusted input into sensitive objects.
// Validate keys and use Map or Object.create(null) when appropriate
// for dictionaries containing arbitrary user-controlled keys.
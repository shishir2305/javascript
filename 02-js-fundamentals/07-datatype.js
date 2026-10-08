// ============================================================
// JAVASCRIPT DATA TYPES
// ============================================================
//
// JavaScript has 8 data types:
//
// PRIMITIVE:
// 1. String
// 2. Number
// 3. BigInt
// 4. Boolean
// 5. Undefined
// 6. Symbol
// 7. Null
//
// NON-PRIMITIVE:
// 8. Object
//
// IMPORTANT:
// Variables do not have types.
// Values have types.
//
// JavaScript is dynamically typed.
// ============================================================


// ============================================================
// 1. STRING
// ============================================================
//
// Represents textual data.
//
// Can use:
// - Single quotes
// - Double quotes
// - Template literals

let name = "Shishir";
let message = 'Hello';
let greeting = `Hello, ${name}`;

console.log(name);      // Shishir
console.log(message);   // Hello
console.log(greeting);  // Hello, Shishir

console.log(typeof name); // "string"


// ============================================================
// 2. NUMBER
// ============================================================
//
// Represents both:
// - Integers
// - Floating-point numbers
//
// JavaScript uses IEEE 754 double-precision floating point
// for the Number type.

let age = 25;
let price = 99.99;
let negative = -10;

console.log(age);       // 25
console.log(price);     // 99.99
console.log(negative);  // -10

console.log(typeof age); // "number"

// Special Number values:

console.log(Infinity);  // Infinity
console.log(-Infinity); // -Infinity
console.log(NaN);       // NaN


// ============================================================
// 3. BIGINT
// ============================================================
//
// Used for integers larger than Number can safely represent.
//
// Add `n` at the end of an integer.

let bigNumber = 9007199254740993n;

console.log(bigNumber);
console.log(typeof bigNumber); // "bigint"

// BigInt and Number are different types.
//
// 10n + 10; // TypeError
//
// You generally need to explicitly convert between them.


// ============================================================
// 4. BOOLEAN
// ============================================================
//
// Represents a logical value:
//
// true
// false

let isLoggedIn = true;
let isAdmin = false;

console.log(isLoggedIn); // true
console.log(isAdmin);    // false

console.log(typeof isLoggedIn); // "boolean"


// ============================================================
// 5. UNDEFINED
// ============================================================
//
// Represents a variable that has been declared
// but has not been assigned a value.

let result;

console.log(result);        // undefined
console.log(typeof result); // "undefined"

// JavaScript can also explicitly assign undefined:

let value = undefined;

console.log(value); // undefined


// ============================================================
// 6. SYMBOL
// ============================================================
//
// Symbol creates a unique primitive value.
//
// Mainly useful when you need unique property keys.

let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 === id2); // false

console.log(typeof id1); // "symbol"

// Even though both have the same description,
// every Symbol is unique.


// ============================================================
// 7. NULL
// ============================================================
//
// Represents an intentional absence of a value.
//
// You use null when you explicitly want to say:
// "There is currently no value."

let user = null;

console.log(user);        // null
console.log(typeof user); // "object"
//
// `typeof null === "object"` is a historical
// JavaScript behavior/bug and is NOT because null
// is actually an object.


// ============================================================
// 8. OBJECT
// ============================================================
//
// Objects store collections of key-value pairs.
//
// Objects are non-primitive values.

let person = {
    name: "Shishir",
    age: 25
};

console.log(person.name); // Shishir
console.log(person.age);  // 25

console.log(typeof person); // "object"


// ============================================================
// ARRAYS
// ============================================================
//
// Arrays are objects in JavaScript.
//
// They are used to store ordered collections.

let numbers = [10, 20, 30];

console.log(numbers[0]); // 10

console.log(typeof numbers); // "object"


// ============================================================
// FUNCTIONS
// ============================================================
//
// Functions are callable objects.
//
// `typeof` gives a special result for functions.

function greet() {
    return "Hello";
}

console.log(greet());       // Hello
console.log(typeof greet);  // "function"


// ============================================================
// QUICK TYPE CHECK
// ============================================================

console.log(typeof "Hello");       // "string"
console.log(typeof 42);            // "number"
console.log(typeof 42n);           // "bigint"
console.log(typeof true);          // "boolean"
console.log(typeof undefined);     // "undefined"
console.log(typeof Symbol());      // "symbol"
console.log(typeof null);          // "object"  ← historical quirk
console.log(typeof {});            // "object"
console.log(typeof []);            // "object"
console.log(typeof function () {}); // "function"


// ============================================================
// COMPLETE DATA TYPE STRUCTURE
// ============================================================
//
// JavaScript
//     │
//     ├── Primitive
//     │      │
//     │      ├── String
//     │      ├── Number
//     │      ├── BigInt
//     │      ├── Boolean
//     │      ├── Undefined
//     │      ├── Symbol
//     │      └── Null
//     │
//     └── Object
//            │
//            ├── Object
//            ├── Array
//            ├── Function
//            ├── Date
//            ├── Map
//            ├── Set
//            └── ...
//
// IMPORTANT:
// Arrays, functions, dates, maps, sets, etc. are all
// built around JavaScript's object system.
//
// ============================================================
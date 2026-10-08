// ============================================
// TYPE CHECKING IN JAVASCRIPT
// ============================================


// JavaScript is dynamically typed.
//
// Types belong to VALUES, not variables.

let value = 10;

value = "hello";
value = true;


// ============================================
// 1. typeof
// ============================================

console.log(typeof "hello");
// "string"

console.log(typeof 42);
// "number"

console.log(typeof true);
// "boolean"

console.log(typeof undefined);
// "undefined"

console.log(typeof 123n);
// "bigint"

console.log(typeof Symbol());
// "symbol"

console.log(typeof {});
// "object"

console.log(typeof function () {});
// "function"


// ============================================
// 2. typeof null — IMPORTANT TRAP
// ============================================

console.log(typeof null);
// "object"
//
// Historical JavaScript behavior.
// Do NOT use typeof to identify null.

console.log(null === null);
// true


// ============================================
// 3. ARRAY CHECK
// ============================================

console.log(typeof []);
// "object"

console.log(Array.isArray([]));
// true

console.log(Array.isArray({}));
// false


// ============================================
// 4. instanceof
// ============================================

const numbers = [1, 2, 3];

console.log(numbers instanceof Array);
// true

console.log(numbers instanceof Object);
// true


// Prototype chain:
//
// numbers
//   ↓
// Array.prototype
//   ↓
// Object.prototype
//   ↓
// null


// ============================================
// 5. instanceof WITH PRIMITIVES
// ============================================

console.log("hello" instanceof String);
// false

console.log(42 instanceof Number);
// false

// Primitive values are NOT wrapper objects.

console.log(new String("hello") instanceof String);
// true


// ============================================
// 6. NaN
// ============================================

console.log(typeof NaN);
// "number"

console.log(Number.isNaN(NaN));
// true

console.log(Number.isNaN(10));
// false


// ============================================
// 7. NUMBER CHECKS
// ============================================

console.log(typeof 10 === "number");
// true

console.log(Number.isInteger(10));
// true

console.log(Number.isInteger(10.5));
// false

console.log(Number.isFinite(10));
// true

console.log(Number.isFinite(Infinity));
// false


// ============================================
// 8. OBJECT CHECK
// ============================================

function isObject(value) {
    return value !== null &&
           typeof value === "object";
}

console.log(isObject({}));
// true

console.log(isObject([]));
// true

console.log(isObject(null));
// false


// ============================================
// 9. NON-ARRAY OBJECT CHECK
// ============================================

function isPlainObject(value) {
    return value !== null &&
           typeof value === "object" &&
           !Array.isArray(value);
}

console.log(isPlainObject({}));
// true

console.log(isPlainObject([]));
// false

console.log(isPlainObject(null));
// false


// ============================================
// 10. FUNCTIONS
// ============================================

function greet() {}

const add = (a, b) => a + b;

console.log(typeof greet);
// "function"

console.log(typeof add);
// "function"


// ============================================
// 11. Object.prototype.toString
// ============================================

console.log(
    Object.prototype.toString.call([])
);
// [object Array]

console.log(
    Object.prototype.toString.call(null)
);
// [object Null]

console.log(
    Object.prototype.toString.call(new Date())
);
// [object Date]

console.log(
    Object.prototype.toString.call(/abc/)
);
// [object RegExp]


// ============================================
// QUICK REVISION
// ============================================

// typeof
// → primitive types + functions
//
// instanceof
// → prototype relationship
//
// Array.isArray()
// → array detection
//
// value === null
// → null detection
//
// Number.isNaN()
// → NaN detection
//
// Number.isFinite()
// → finite number detection
//
// Object.prototype.toString.call()
// → detailed built-in object classification
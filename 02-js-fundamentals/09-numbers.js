// ============================================================
// JAVASCRIPT NUMBER
// ============================================================
//
// Number is a primitive type.
//
// JavaScript uses Number for:
// - Integers
// - Floating-point numbers
//
// Number uses IEEE 754 double-precision floating point.
// ============================================================


// BASIC NUMBERS

const age = 25;
const price = 99.99;
const negative = -50;

console.log(typeof age); // "number"


// ============================================================
// SPECIAL VALUES
// ============================================================

console.log(Infinity);
console.log(-Infinity);

console.log(10 / 0);
// Infinity

console.log("hello" * 10);
// NaN

console.log(typeof NaN);
// "number"


// ============================================================
// NaN
// ============================================================

console.log(NaN === NaN);
// false

console.log(Number.isNaN(NaN));
// true

console.log(Number.isNaN("hello"));
// false


// ============================================================
// FLOATING-POINT PRECISION
// ============================================================

console.log(0.1 + 0.2);
// 0.30000000000000004


// ============================================================
// SAFE INTEGER RANGE
// ============================================================

console.log(Number.MAX_SAFE_INTEGER);
// 9007199254740991

console.log(Number.MIN_SAFE_INTEGER);
// -9007199254740991

console.log(
    Number.isSafeInteger(100)
);
// true


// ============================================================
// NUMBER CHECKING
// ============================================================

console.log(Number.isInteger(10));
// true

console.log(Number.isInteger(10.5));
// false

console.log(Number.isFinite(100));
// true

console.log(Number.isFinite(Infinity));
// false


// ============================================================
// STRING → NUMBER
// ============================================================

console.log(Number("123"));
// 123

console.log(Number("12.5"));
// 12.5

console.log(Number("hello"));
// NaN


// ============================================================
// parseInt
// ============================================================

console.log(parseInt("123px", 10));
// 123

console.log(parseInt("12.99", 10));
// 12

// Radix matters:
console.log(parseInt("101", 2));
// 5


// ============================================================
// parseFloat
// ============================================================

console.log(parseFloat("12.50px"));
// 12.5


// ============================================================
// NUMBER → STRING
// ============================================================

const n = 123;

console.log(n.toString());
// "123"

console.log(n.toString(2));
// "1111011"


// ============================================================
// FORMATTING
// ============================================================

const value = 12.3456;

console.log(value.toFixed(2));
// "12.35"

// IMPORTANT:
// toFixed() returns a STRING.


// ============================================================
// MATH
// ============================================================

console.log(Math.round(4.6)); // 5
console.log(Math.floor(4.9)); // 4
console.log(Math.ceil(4.1));  // 5
console.log(Math.trunc(4.9)); // 4

console.log(Math.abs(-10));   // 10

console.log(Math.max(10, 20, 5)); // 20
console.log(Math.min(10, 20, 5)); // 5

console.log(Math.sqrt(16)); // 4

console.log(Math.random());
// 0 <= value < 1
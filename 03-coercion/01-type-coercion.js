// ============================================
// TYPE COERCION
// ============================================

// JavaScript automatically converts types
// when required by an operation.

// --------------------------------------------
// IMPLICIT COERCION
// --------------------------------------------

console.log("10" + 5);
// "105"
// + with a string → string concatenation

console.log("10" - 5);
// 5
// - converts "10" → 10

console.log("10" * 2);
// 20

console.log("10" / 2);
// 5


// --------------------------------------------
// BOOLEAN COERCION
// --------------------------------------------

console.log(Boolean(1));
// true

console.log(Boolean(0));
// false

console.log(Boolean("hello"));
// true

console.log(Boolean(""));
// false


// Falsy values:
//
// false
// 0
// -0
// 0n
// ""
// null
// undefined
// NaN


// --------------------------------------------
// COERCION IN CONDITIONS
// --------------------------------------------

const value = "hello";

if (value) {
    console.log("Truthy");
}

// Conceptually:
//
// if (Boolean(value)) { }


// --------------------------------------------
// == VS ===
// --------------------------------------------

console.log(5 == "5");
// true
// == allows type coercion

console.log(5 === "5");
// false
// === does not perform this type coercion


// --------------------------------------------
// null vs undefined
// --------------------------------------------

console.log(null == undefined);
// true

console.log(null === undefined);
// false


// --------------------------------------------
// + IS SPECIAL
// --------------------------------------------

console.log(1 + 2);
// 3

console.log("1" + 2);
// "12"

console.log(1 + 2 + "3");
// "33"

console.log("1" + 2 + 3);
// "123"


// --------------------------------------------
// EXPLICIT CONVERSION
// --------------------------------------------

console.log(String(123));
// "123"

console.log(Number("123"));
// 123

console.log(Boolean(1));
// true


// Unary + converts to Number

console.log(+"123");
// 123

console.log(+"hello");
// NaN


// --------------------------------------------
// OBJECT COERCION
// --------------------------------------------

const obj = {
    valueOf() {
        return 10;
    }
};

console.log(obj + 5);
// 15
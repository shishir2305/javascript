// ============================================
// ABSTRACT vs STRICT EQUALITY
// ============================================

// ============================================
// STRICT EQUALITY: ===
// ============================================

// Checks type + value.
// Does NOT perform implicit type coercion.

console.log(5 === 5);
// true

console.log(5 === "5");
// false

console.log(true === 1);
// false

console.log(null === undefined);
// false

// ============================================
// ABSTRACT EQUALITY: ==
// ============================================

// Allows type coercion when required.

console.log(5 == "5");
// true

console.log(true == 1);
// true

console.log(true == "1");
// true

// ============================================
// NULL AND UNDEFINED
// ============================================

// Special rule of abstract equality:

console.log(null == undefined);
// true

console.log(null === undefined);
// false

// But null is NOT equal to 0 or false.

console.log(null == 0);
// false

console.log(null == false);
// false

console.log(undefined == 0);
// false

// ============================================
// NaN
// ============================================

console.log(NaN == NaN);
// false

console.log(NaN === NaN);
// false

console.log(Number.isNaN(NaN));
// true

// ============================================
// OBJECT REFERENCES
// ============================================

const a = {};
const b = {};

console.log(a === b);
// false
// Different objects

const c = a;

console.log(a === c);
// true
// Same object reference

// ============================================
// OBJECT → PRIMITIVE COERCION
// ============================================

const obj = {
  valueOf() {
    return 5;
  },
};

console.log(obj == 5);
// true

console.log(obj === 5);
// false

// ============================================
// INTERVIEW EXAMPLES
// ============================================

console.log(0 == false);
// true

console.log(0 === false);
// false

console.log("" == false);
// true

console.log("" === false);
// false

console.log("0" == false);
// true

console.log("0" === false);
// false

console.log([] == false);
// true

console.log(Boolean([]) === false);
// false

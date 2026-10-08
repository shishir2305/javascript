// ==========================================
// GLOBAL OBJECT & globalThis
// ==========================================


// 1. GLOBAL OBJECT
//
// The JavaScript runtime provides a global object.
//
// Browser:
//     window
//
// Node.js:
//     global
//
// Modern JavaScript:
//     globalThis


// ==========================================
// 2. globalThis
// ==========================================

// `globalThis` provides a standard way to access
// the global object across JavaScript environments.

console.log(globalThis);


// ==========================================
// 3. BROWSER
// ==========================================

// In a browser:

console.log(globalThis === window);
// true


// ==========================================
// 4. NODE.JS
// ==========================================

// In Node.js:

console.log(globalThis === global);
// true


// ==========================================
// 5. GLOBAL APIs
// ==========================================

// Many global APIs can be accessed through
// globalThis.

console.log(globalThis.setTimeout);
console.log(globalThis.console);


// ==========================================
// 6. CREATING A GLOBAL PROPERTY
// ==========================================

globalThis.myAppVersion = "1.0";

console.log(globalThis.myAppVersion);
// "1.0"


// ==========================================
// 7. var vs let/const
// ==========================================

// In a classic browser script:

var a = 10;

let b = 20;
const c = 30;

console.log(window.a);
// 10

console.log(window.b);
// undefined

console.log(window.c);
// undefined


// ==========================================
// 8. GLOBAL OBJECT ≠ GLOBAL SCOPE
// ==========================================

let value = 100;

console.log(globalThis.value);
// undefined

// `value` exists in the global lexical environment,
// but it is not necessarily a property of the
// global object.


// ==========================================
// 9. ENVIRONMENT-INDEPENDENT CODE
// ==========================================

// Instead of:

// if (typeof window !== "undefined") {
//     // browser
// }

// or:

// if (typeof global !== "undefined") {
//     // Node.js
// }

// Use:

const root = globalThis;

console.log(root);
// ==========================================
// let IN JAVASCRIPT
// ==========================================


// 1. BLOCK SCOPED
// let belongs to the nearest enclosing block.

{
    let x = 10;

    console.log(x); // 10
}

// console.log(x); // ReferenceError


// ==========================================
// 2. HOISTING + TEMPORAL DEAD ZONE (TDZ)
// ==========================================

// `x` is hoisted, but it is NOT initialized
// with undefined.

console.log(x); // ReferenceError

let x = 10;


// Conceptually:
//
// Scope begins
//      ↓
//    TDZ
//      ↓
// let x = 10
//      ↓
// x initialized


// ==========================================
// 3. REASSIGNMENT
// ==========================================

let count = 10;

count = 20;

console.log(count); // 20


// ==========================================
// 4. NO REDECLARATION IN SAME SCOPE
// ==========================================

let name = "Alice";

// let name = "Bob"; // SyntaxError


// ==========================================
// 5. SHADOWING
// ==========================================

let value = 10;

{
    let value = 20;

    console.log(value); // 20
}

console.log(value); // 10


// ==========================================
// 6. FOR LOOP + CLOSURE
// ==========================================

// Each iteration gets its own `i` binding.

for (let i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 100);
}

// Output:
// 0
// 1
// 2


// ==========================================
// 7. NOT A window PROPERTY
// ==========================================

// In a classic browser script:

let browserValue = 100;

console.log(window.browserValue); // undefined


// ==========================================
// let vs var
// ==========================================
//
// let:
// - Block scoped
// - Hoisted
// - Has Temporal Dead Zone
// - Cannot be accessed before declaration
// - Can be reassigned
// - Cannot be redeclared in same scope
// - Creates per-iteration bindings in loops
// - Does not become window property
//
// var:
// - Function scoped
// - Hoisted
// - Initialized as undefined during hoisting
// - Can be redeclared
// - Can be reassigned
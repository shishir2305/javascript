// ==========================================
// const IN JAVASCRIPT
// ==========================================


// 1. BLOCK SCOPED

{
    const x = 10;

    console.log(x); // 10
}

// console.log(x); // ReferenceError


// ==========================================
// 2. MUST BE INITIALIZED
// ==========================================

const age = 25;

// const score; // SyntaxError


// ==========================================
// 3. CANNOT BE REASSIGNED
// ==========================================

const name = "Alice";

// name = "Bob"; // TypeError


// ==========================================
// 4. OBJECTS ARE STILL MUTABLE
// ==========================================

const user = {
    name: "Alice",
    age: 25
};

// Modifying the object is allowed.
user.name = "Bob";
user.age = 30;

console.log(user);
// { name: "Bob", age: 30 }


// But replacing the object is NOT allowed.

// user = {
//     name: "Charlie"
// }; // TypeError


// ==========================================
// 5. ARRAYS ARE ALSO MUTABLE
// ==========================================

const numbers = [1, 2, 3];

numbers.push(4);

console.log(numbers); // [1, 2, 3, 4]

// numbers = [5, 6]; // TypeError


// ==========================================
// 6. HOISTING + TDZ
// ==========================================

console.log(value); // ReferenceError

const value = 100;


// ==========================================
// 7. SHADOWING
// ==========================================

const x = 10;

{
    const x = 20;

    console.log(x); // 20
}

console.log(x); // 10


// ==========================================
// const vs let vs var
// ==========================================
//
//                var       let       const
// ------------------------------------------------
// Scope          Function   Block     Block
// Hoisted        Yes        Yes       Yes
// TDZ            No         Yes       Yes
// Reassign       Yes        Yes       No
// Redeclare      Yes        No        No
// Initialization Optional   Optional  Required
//
//
// Modern recommendation:
//
// const → default choice
// let   → when reassignment is required
// var   → mainly legacy code
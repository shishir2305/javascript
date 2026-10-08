// ============================================
// JAVASCRIPT OPERATORS
// ============================================


// ============================================
// 1. ARITHMETIC
// ============================================

let a = 10;
let b = 3;

console.log(a + b);  // 13
console.log(a - b);  // 7
console.log(a * b);  // 30
console.log(a / b);  // 3.333...
console.log(a % b);  // 1
console.log(a ** b); // 1000


// Increment / decrement

let x = 5;

console.log(x++); // 5
console.log(x);   // 6

console.log(++x); // 7


// ============================================
// 2. ASSIGNMENT
// ============================================

let value = 10;

value = 20;
value += 5;
value -= 2;
value *= 2;
value /= 2;


// Logical assignment

let name = "";

name ||= "Guest";

let count = null;

count ??= 10;

let enabled = true;

enabled &&= false;


// ============================================
// 3. COMPARISON
// ============================================

console.log(10 > 5);   // true
console.log(10 < 5);   // false
console.log(10 >= 10); // true
console.log(10 <= 9);  // false

console.log(10 === 10); // true
console.log(10 !== 5);  // true


// ============================================
// 4. STRICT vs LOOSE EQUALITY
// ============================================

console.log(10 === "10");
// false

console.log(10 == "10");
// true
//
// == performs type coercion.
// Prefer === in normal code.


// ============================================
// 5. LOGICAL OPERATORS
// ============================================

// &&
// falsy → return left
// truthy → return right

console.log(true && "Hello");
// "Hello"

console.log(false && "Hello");
// false


// ||
// truthy → return left
// falsy → return right

console.log("Hello" || "World");
// "Hello"

console.log("" || "World");
// "World"


// !
// converts to boolean and reverses

console.log(!true);
// false

console.log(!0);
// true

console.log(!!"hello");
// true


// ============================================
// 6. NULLISH COALESCING
// ============================================

console.log(null ?? "Guest");
// Guest

console.log(undefined ?? "Guest");
// Guest

console.log(0 ?? 100);
// 0

console.log("" ?? "default");
// ""

//
// ?? checks ONLY null and undefined.
// || checks ALL falsy values.


// ============================================
// 7. TERNARY
// ============================================

const age = 20;

const status = age >= 18
    ? "Adult"
    : "Minor";

console.log(status);
// Adult


// ============================================
// 8. BITWISE
// ============================================

console.log(5 & 3);
console.log(5 | 3);
console.log(5 ^ 3);
console.log(~5);
console.log(5 << 1);
console.log(5 >> 1);
console.log(5 >>> 1);


// ============================================
// 9. typeof
// ============================================

console.log(typeof 42);
// "number"

console.log(typeof "hello");
// "string"

console.log(typeof true);
// "boolean"

console.log(typeof null);
// "object" ← historical quirk


// ============================================
// 10. instanceof
// ============================================

const numbers = [];

console.log(numbers instanceof Array);
// true

console.log(numbers instanceof Object);
// true


// ============================================
// 11. in
// ============================================

const user = {
    name: "Shishir"
};

console.log("name" in user);
// true

console.log("age" in user);
// false


// ============================================
// 12. delete
// ============================================

const person = {
    name: "Shishir",
    age: 25
};

delete person.age;

console.log(person);
// { name: "Shishir" }


// ============================================
// 13. new
// ============================================

class User {

    constructor(name) {
        this.name = name;
    }
}

const userObject = new User("Shishir");

console.log(userObject.name);
// Shishir


// ============================================
// 14. OPTIONAL CHAINING
// ============================================

const data = {};

console.log(data.user?.name);
// undefined


// ============================================
// 15. COMMA OPERATOR
// ============================================

const result = (1 + 2, 3 + 4);

console.log(result);
// 7


// ============================================
// 16. SPREAD
// ============================================

const nums = [1, 2, 3];

const copy = [...nums];

console.log(copy);
// [1, 2, 3]


// ============================================
// 17. REST
// ============================================

function sum(...numbers) {

    return numbers.reduce(
        (total, number) => total + number,
        0
    );
}

console.log(sum(1, 2, 3));
// 6
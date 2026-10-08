/*
===========================================================
       STATICALLY TYPED vs DYNAMICALLY TYPED
===========================================================

STATIC TYPING
-------------
A variable's type is checked/known before the program runs
(typically at compile time).

DYNAMIC TYPING
--------------
A variable's type is determined and checked while the
program is running (runtime).


===========================================================
1. STATICALLY TYPED LANGUAGE
===========================================================

Example: C++

    int age = 25;

Here:

    age → int

The variable is declared with a type.

This is an error:

    age = "Hello";

because:

    int ≠ string


Conceptually:

    Source Code
         ↓
    Type Checking
         ↓
    Compilation
         ↓
    Program


The compiler can catch many type errors before execution.


===========================================================
2. DYNAMICALLY TYPED LANGUAGE
===========================================================

JavaScript is dynamically typed.

Example:
*/

let value = 10;

console.log(value); // 10

value = "Hello";

console.log(value); // Hello

value = true;

console.log(value); // true

/*
The SAME variable can hold values of different types:

    value
      ↓
    Number
      ↓
    String
      ↓
    Boolean


The variable itself does NOT have a fixed type.

The VALUE has a type.


===========================================================
3. IMPORTANT DISTINCTION
===========================================================

In JavaScript:

    let x = 10;

The type is associated with:

    10 → Number

not permanently with:

    x → Number


Later:

    x = "Hello";

Now:

    "Hello" → String


So:

    JavaScript variables are not statically type-bound.


===========================================================
4. WHY IS JAVASCRIPT DYNAMICALLY TYPED?
===========================================================

Because JavaScript determines the type of values at
RUNTIME rather than requiring every variable to have a
fixed type known at compile time.

Example:
*/

let data = 100;

console.log(typeof data);
// "number"

data = "JavaScript";

console.log(typeof data);
// "string"

data = { name: "Shishir" };

console.log(typeof data);
// "object"

/*
The runtime determines what type of value is currently
stored in the variable.


===========================================================
5. VARIABLE vs VALUE
===========================================================

This is extremely important.

JavaScript:

    let x = 10;

Think:

    x ─────→ 10
              ↑
           Number


Then:

    x = "Hello";

Think:

    x ─────→ "Hello"
              ↑
           String


The variable `x` can point to values of different types.


Therefore:

    VARIABLE → does not have a fixed type
    VALUE    → has a type


===========================================================
6. FUNCTION EXAMPLE
===========================================================
*/

function add(a, b) {
    return a + b;
}

console.log(add(10, 20));
// 30

console.log(add("Hello ", "World"));
// Hello World

/*
The SAME function works with different types.

First:

    10 + 20
      ↓
    Number addition


Second:

    "Hello " + "World"
          ↓
    String concatenation


JavaScript determines the behavior at runtime.


===========================================================
7. TYPE CHECKING HAPPENS AT RUNTIME
===========================================================

Example:
*/

function multiply(a, b) {
    return a * b;
}

console.log(multiply(10, 20));

/*
When this executes, JavaScript's runtime determines
how the values should be handled.

This is fundamentally different from a statically typed
language where the compiler can perform extensive
type checking before execution.


===========================================================
8. STATIC vs DYNAMIC
===========================================================

STATICALLY TYPED:

    int age = 25;

    age = "Hello"; // Type error


    Type is checked primarily before runtime.


DYNAMICALLY TYPED:

    let age = 25;

    age = "Hello"; // Valid JavaScript


    Type is determined/checked during runtime.


===========================================================
9. JAVASCRIPT IS ALSO STRONGLY TYPED IN AN IMPORTANT SENSE
===========================================================

Don't confuse:

    STATIC/DYNAMIC TYPING

with:

    STRONG/WEAK TYPING


They describe different properties.

JavaScript is generally described as:

    DYNAMICALLY TYPED

and it does NOT freely treat every type as every other
type.

For example:
*/

console.log("5" - 2);
// 3

console.log("5" + 2);
// "52"

/*
JavaScript performs type coercion in many operations.

This is one reason understanding JavaScript's type
conversion rules is important.


===========================================================
10. DYNAMIC TYPING + TYPE COERCION
===========================================================

Example:
*/

const number = 5;
const string = "10";

console.log(number + string);
// "510"

/*
Why?

    number → 5
    string → "10"

The + operator with a string causes string concatenation
in this case.


Another example:
*/

console.log("10" - 5);
// 5

/*
The - operator requires numeric conversion here.


This is why JavaScript developers need to understand:

    Type coercion
    Type conversion
    Operators
    Equality
    typeof
    Truthy/falsy values


===========================================================
11. typeof
===========================================================

JavaScript provides `typeof` to inspect the type of a value.
*/

console.log(typeof 10);
// "number"

console.log(typeof "Hello");
// "string"

console.log(typeof true);
// "boolean"

console.log(typeof undefined);
// "undefined"

console.log(typeof 10n);
// "bigint"

console.log(typeof Symbol("id"));
// "symbol"

console.log(typeof {});
// "object"

console.log(typeof function () {});
// "function"


/*
===========================================================
12. STATIC TYPING BENEFIT
===========================================================

Static typing can catch many errors earlier.

Example:

    int age = "Hello";

The compiler can reject the program before it runs.

Benefits:

    - Earlier error detection
    - Better tooling
    - Easier refactoring
    - Clearer contracts
    - Often easier to reason about large codebases


===========================================================
13. DYNAMIC TYPING BENEFIT
===========================================================

Dynamic typing provides flexibility.

Example:
*/

let result = 10;

result = "Success";

result = { status: "done" };

/*
You don't need to explicitly declare a new type every time.

Benefits:

    - Flexible
    - Less boilerplate
    - Fast prototyping
    - Concise code


Tradeoff:

    More type-related errors can appear at runtime.


===========================================================
14. JAVASCRIPT + TYPESCRIPT
===========================================================

JavaScript:

    let age = 25;

    age = "Hello"; // Valid


TypeScript:

    let age: number = 25;

    age = "Hello";
    // Type error


TypeScript adds a static type system on top of JavaScript.


IMPORTANT:

TypeScript itself is NOT executed directly by browsers.

Typically:

    TypeScript
        ↓
    Type Checking / Compilation
        ↓
    JavaScript
        ↓
    JavaScript Runtime


===========================================================
15. COMMON INTERVIEW TRAP
===========================================================

Question:

    "Does JavaScript have types?"


YES.

JavaScript absolutely has types.

Examples:

    Number
    String
    Boolean
    Undefined
    Null
    BigInt
    Symbol
    Object


The important point is:

    JavaScript is dynamically typed.


It does NOT mean:

    "JavaScript has no types."


It means:

    "Types are associated with values and determined
     during runtime rather than requiring variables to
     have fixed types checked before execution."


===========================================================
16. SIMPLE COMPARISON
===========================================================

STATIC:

    Variable
       ↓
    Fixed type
       ↓
    Type checking before runtime


DYNAMIC:

    Variable
       ↓
    Can reference different types of values
       ↓
    Type determined/checked during runtime


===========================================================
17. EASY ANALOGY
===========================================================

STATIC TYPING:

Think of labeled boxes.

    ┌──────────────┐
    │ INT          │
    │      25      │
    └──────────────┘

The box is designed for integers.

You cannot put a string into it.


DYNAMIC TYPING:

Think of a flexible box.

    ┌──────────────┐
    │              │
    │      25      │
    └──────────────┘

Later:

    ┌──────────────┐
    │              │
    │    "Hello"   │
    └──────────────┘

Later:

    ┌──────────────┐
    │              │
    │    true      │
    └──────────────┘


The variable can reference values of different types.


===========================================================
18. MAANG INTERVIEW ANSWER
===========================================================

Question:

    Why is JavaScript dynamically typed?


Answer:

    "JavaScript is dynamically typed because variables
     are not required to have a fixed type. Types are
     associated with values and are determined and
     checked during runtime. Therefore, the same variable
     can reference values of different types during its
     lifetime."


===========================================================
19. ONE-LINE NOTES
===========================================================

STATICALLY TYPED:

    Variable types are checked/known before runtime.


DYNAMICALLY TYPED:

    Value types are determined and checked at runtime.


JAVASCRIPT:

    JavaScript is dynamically typed.


VERY IMPORTANT:

    Dynamic typing ≠ no types.

    JavaScript HAS types.

    The types belong to VALUES, not permanently to
    VARIABLES.


===========================================================
FINAL MENTAL MODEL
===========================================================

        STATIC TYPING

    let age: number
          ↓
    age → Number
          ↓
    Type checked before execution


        DYNAMIC TYPING

    let age = 25
          ↓
    age → Number

    age = "Hello"
          ↓
    age → String

    age = true
          ↓
    age → Boolean


The variable can reference different types of values,
which is the core idea behind JavaScript's dynamic typing.

===========================================================
*/
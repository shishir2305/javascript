// CLOSURES IN JAVASCRIPT
//
// A closure is a function together with its access to the
// lexical environment in which it was created.

// --------------------------------------------------
// 1. BASIC CLOSURE
// --------------------------------------------------

function outer() {
    let message = "Hello from outer";

    function inner() {
        console.log(message);
    }

    return inner;
}

const greet = outer();
greet(); // Hello from outer

// outer() has returned, but inner() retains access
// to the outer lexical environment.


// --------------------------------------------------
// 2. CLOSURES REMEMBER VARIABLE BINDINGS
// --------------------------------------------------

function createCounter() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}

const counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// The same count binding is updated on every call.


// --------------------------------------------------
// 3. INDEPENDENT CLOSURES
// --------------------------------------------------

const counterA = createCounter();
const counterB = createCounter();

console.log(counterA()); // 1
console.log(counterA()); // 2
console.log(counterB()); // 1

// Each createCounter() call creates independent state.


// --------------------------------------------------
// 4. PRIVATE STATE
// --------------------------------------------------

function createAccount(initialBalance) {
    let balance = initialBalance;

    return {
        deposit(amount) {
            if (amount <= 0) {
                throw new Error("Amount must be positive");
            }

            balance += amount;
        },

        getBalance() {
            return balance;
        }
    };
}

const account = createAccount(1000);
account.deposit(500);

console.log(account.getBalance()); // 1500
console.log(account.balance);      // undefined

// The returned methods close over the private balance binding.


// --------------------------------------------------
// 5. CLOSURES WITH ASYNCHRONOUS CALLBACKS
// --------------------------------------------------

function greetLater(name) {
    setTimeout(() => {
        console.log(`Hello, ${name}!`);
    }, 1000);
}

greetLater("Shishir");

// The callback can access name after greetLater() returns.


// --------------------------------------------------
// 6. FUNCTION FACTORIES
// --------------------------------------------------

function multiplyBy(factor) {
    return number => number * factor;
}

const double = multiplyBy(2);
const triple = multiplyBy(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15


// --------------------------------------------------
// 7. var VS let IN LOOPS
// --------------------------------------------------

// var shares one function-scoped binding.
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log("var:", i), 0);
}

// Outputs: var: 3 three times.

// let creates a distinct per-iteration binding.
for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log("let:", j), 0);
}

// Outputs: let: 0, let: 1, let: 2.


// --------------------------------------------------
// FINAL TAKEAWAY
// --------------------------------------------------
//
// A closure allows a function to retain access to bindings
// from its defining lexical environment.
//
// Common uses:
// 1. Private state and encapsulation.
// 2. Independent counters and state.
// 3. Callbacks and asynchronous operations.
// 4. Function factories and configuration.
// 5. Event handlers and UI logic.
//
// Remember: closures retain access to bindings, not frozen
// snapshots of values. Keep captured state and object references
// manageable to avoid unnecessary complexity and memory retention.
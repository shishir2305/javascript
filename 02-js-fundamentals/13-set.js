// ============================================
// SET IN JAVASCRIPT
// ============================================

// Set stores UNIQUE values.
//
// Mental model:
//
// Set
//  ├── value
//  ├── value
//  └── value
//
// Duplicates are automatically ignored.


// --------------------------------------------
// 1. CREATE
// --------------------------------------------

const numbers = new Set();


// Initialize from an iterable

const values = new Set([10, 20, 30, 20, 10]);

console.log(values);
// Set { 10, 20, 30 }


// --------------------------------------------
// 2. add()
// --------------------------------------------

values.add(40);
values.add(50);

// Duplicate → ignored
values.add(40);

console.log(values);
// 10, 20, 30, 40, 50


// add() returns the Set → chaining

values
    .add(60)
    .add(70);


// --------------------------------------------
// 3. has()
// --------------------------------------------

console.log(values.has(40));
// true

console.log(values.has(100));
// false


// --------------------------------------------
// 4. delete()
// --------------------------------------------

values.delete(70);

console.log(values.has(70));
// false


// --------------------------------------------
// 5. size
// --------------------------------------------

console.log(values.size);


// --------------------------------------------
// 6. ITERATION
// --------------------------------------------

for (const value of values) {
    console.log(value);
}


// --------------------------------------------
// 7. keys()
// --------------------------------------------

// For Set, keys() returns the same values.

for (const value of values.keys()) {
    console.log(value);
}


// --------------------------------------------
// 8. values()
// --------------------------------------------

for (const value of values.values()) {
    console.log(value);
}


// --------------------------------------------
// 9. entries()
// --------------------------------------------

// Set has no separate key/value.
// Both values are the same.

for (const [value1, value2] of values.entries()) {
    console.log(value1, value2);
}


// --------------------------------------------
// 10. forEach()
// --------------------------------------------

values.forEach((value) => {
    console.log(value);
});


// --------------------------------------------
// 11. clear()
// --------------------------------------------

const temp = new Set([1, 2, 3]);

temp.clear();

console.log(temp.size);
// 0


// --------------------------------------------
// 12. REMOVE DUPLICATES
// --------------------------------------------

const nums = [1, 2, 2, 3, 3, 4, 4];

const uniqueNums = [...new Set(nums)];

console.log(uniqueNums);
// [1, 2, 3, 4]


// --------------------------------------------
// 13. OBJECT IDENTITY
// --------------------------------------------

const user = { id: 1 };

const users = new Set();

users.add(user);

console.log(users.has(user));
// true

console.log(users.has({ id: 1 }));
// false
//
// Different object reference.


// --------------------------------------------
// 14. NaN
// --------------------------------------------

const special = new Set();

special.add(NaN);

console.log(special.has(NaN));
// true
//
// Set uses SameValueZero equality.
//
// NaN is considered equal to NaN by Set.


// --------------------------------------------
// 15. GRAPH / VISITED EXAMPLE
// --------------------------------------------

const visited = new Set();

function visit(node) {

    // Already visited?
    if (visited.has(node)) {
        return;
    }

    visited.add(node);

    console.log("Visiting:", node);
}

visit("A");
visit("B");
visit("A");
// A is not processed twice


// --------------------------------------------
// QUICK REVISION
// --------------------------------------------

// new Set(iterable) → create Set
// add(value)        → add value
// has(value)        → check existence
// delete(value)     → remove value
// clear()           → remove everything
// size              → number of unique values
// keys()            → values
// values()          → values
// entries()         → [value, value]
//
// IMPORTANT:
//
// Set stores UNIQUE values.
//
// No index-based access.
//
// Maintains insertion order.
//
// Primitive values → value equality
// Objects/functions → reference identity
//
// Common uses:
// - Remove duplicates
// - Fast membership checking
// - Visited nodes
// - Tracking unique items
// - Set operations
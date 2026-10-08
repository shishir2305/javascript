// ============================================
// MAP IN JAVASCRIPT
// ============================================

// Map stores key-value pairs.
//
// Mental model:
//
// key → value
// key → value
// key → value
//
// Unlike Object, Map allows keys of ANY type.


// --------------------------------------------
// 1. CREATE
// --------------------------------------------

const users = new Map();


// Initialize with entries

const userMap = new Map([
    ["u1", "Shishir"],
    ["u2", "Rahul"],
]);


// --------------------------------------------
// 2. set()
// --------------------------------------------

userMap.set("u3", "Amit");

// Existing key → updates value
userMap.set("u3", "Amit Kumar");


// Chaining

userMap
    .set("u4", "John")
    .set("u5", "Alex");


// --------------------------------------------
// 3. get()
// --------------------------------------------

console.log(userMap.get("u3"));
// Amit Kumar

console.log(userMap.get("unknown"));
// undefined


// --------------------------------------------
// 4. has()
// --------------------------------------------

console.log(userMap.has("u3"));
// true

console.log(userMap.has("unknown"));
// false


// --------------------------------------------
// 5. delete()
// --------------------------------------------

userMap.delete("u5");

console.log(userMap.has("u5"));
// false


// --------------------------------------------
// 6. size
// --------------------------------------------

console.log(userMap.size);


// --------------------------------------------
// 7. ANY TYPE CAN BE A KEY
// --------------------------------------------

const map = new Map();

map.set("name", "Shishir");
map.set(10, "number");
map.set(true, "boolean");

const obj = {};
const fn = () => {};

map.set(obj, "object");
map.set(fn, "function");

console.log(map.get(obj));
console.log(map.get(fn));


// --------------------------------------------
// 8. OBJECT KEYS USE REFERENCE IDENTITY
// --------------------------------------------

const key = { id: 1 };

map.set(key, "User");

console.log(map.get(key));
// User

console.log(map.get({ id: 1 }));
// undefined
//
// Different object → different key


// --------------------------------------------
// 9. ITERATION
// --------------------------------------------

const data = new Map([
    ["a", 10],
    ["b", 20],
    ["c", 30],
]);


// Default iteration → entries

for (const [key, value] of data) {
    console.log(key, value);
}


// Keys

for (const key of data.keys()) {
    console.log(key);
}


// Values

for (const value of data.values()) {
    console.log(value);
}


// Entries

for (const [key, value] of data.entries()) {
    console.log(key, value);
}


// --------------------------------------------
// 10. forEach()
// --------------------------------------------

data.forEach((value, key) => {
    console.log(key, value);
});


// --------------------------------------------
// 11. clear()
// --------------------------------------------

data.clear();

console.log(data.size);
// 0


// --------------------------------------------
// 12. FREQUENCY COUNTING
// --------------------------------------------

const nums = [1, 2, 2, 3, 3, 3];

const frequency = new Map();

for (const num of nums) {
    frequency.set(
        num,
        (frequency.get(num) ?? 0) + 1
    );
}

console.log(frequency);


// --------------------------------------------
// 13. MAP AS A CACHE
// --------------------------------------------

const cache = new Map();

function square(n) {

    // Return cached result
    if (cache.has(n)) {
        return cache.get(n);
    }

    const result = n * n;

    // Store result
    cache.set(n, result);

    return result;
}

console.log(square(10));
console.log(square(10)); // Cached


// ============================================
// QUICK REVISION
// ============================================

// new Map()       → create Map
// set(key, value) → add/update
// get(key)        → retrieve
// has(key)        → check key
// delete(key)     → remove key
// clear()         → remove everything
// size            → number of entries
// keys()          → iterator of keys
// values()        → iterator of values
// entries()       → iterator of [key, value]
//
// IMPORTANT:
//
// Map keys can be ANY type.
//
// Object keys are compared by REFERENCE IDENTITY.
//
// Map maintains insertion order.
//
// Map is ideal for:
// - Frequency counting
// - Fast lookups
// - Caching
// - Graphs
// - Dynamic key-value data

/*
DEFINITION:
Default parameters provide fallback values when an argument
is missing or explicitly passed as undefined.
*/

function greet(name = "Guest", greeting = "Hello") {
    console.log(`${greeting}, ${name}!`);
}

greet("Shishir", "Hi"); // Hi, Shishir!
greet("Shishir");       // Hello, Shishir!
greet();                // Hello, Guest!

// 1. undefined uses the default; null does not
function show(value = "Default") {
    console.log(value);
}

show(undefined); // Default
show(null);      // null
show(0);         // 0
show(false);     // false
show("");        // ""


// 2. Defaults can be expressions
function createUser(name = "Guest", id = Date.now()) {
    return { name, id };
}

console.log(createUser()); // Guest + current timestamp


// 3. Defaults can use earlier parameters
function multiply(a, b = a * 2) {
    return a * b;
}

console.log(multiply(5));    // 50
console.log(multiply(5, 3)); // 15


// 4. function.length excludes parameters starting
//    from the first default parameter
function example(a, b, c = 10) {}

console.log(example.length); // 2


/*
REAL-WORLD USE CASES:
1. API calls:       fetchData(url, timeout = 5000)
2. Pagination:      getUsers(page = 1, limit = 20)
3. UI components:   createButton(color = "blue")
4. Logging:         log(message, level = "info")
5. Formatting:      formatDate(date, locale = "en-US")
*/
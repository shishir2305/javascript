// ============================================================
// JAVASCRIPT STRINGS
// ============================================================

// String = textual data
// Strings are primitive and immutable.


// ============================================================
// CREATING STRINGS
// ============================================================

const a = "Hello";
const b = 'World';
const c = `JavaScript`;


// ============================================================
// LENGTH
// ============================================================

const str = "Hello";

console.log(str.length); // 5


// ============================================================
// CHARACTER ACCESS
// ============================================================

console.log(str[0]);     // H
console.log(str.at(0));  // H
console.log(str.at(-1)); // o


// ============================================================
// CASE CONVERSION
// ============================================================

console.log("hello".toUpperCase()); // HELLO
console.log("HELLO".toLowerCase()); // hello


// ============================================================
// TRIMMING
// ============================================================

const input = "   Hello   ";

console.log(input.trim());      // "Hello"
console.log(input.trimStart()); // "Hello   "
console.log(input.trimEnd());   // "   Hello"


// ============================================================
// SEARCHING
// ============================================================

const text = "JavaScript is awesome";

console.log(text.includes("JavaScript")); // true
console.log(text.startsWith("Java"));     // true
console.log(text.endsWith("awesome"));    // true

console.log(text.indexOf("is"));      // 11
console.log(text.lastIndexOf("e"));   // position of last e


// ============================================================
// EXTRACTING
// ============================================================

const language = "JavaScript";

console.log(language.slice(0, 4)); // Java
console.log(language.slice(4));    // Script
console.log(language.slice(-6));   // Script

console.log(language.substring(0, 4)); // Java


// ============================================================
// REPLACING
// ============================================================

const sentence = "I like Java. Java is popular.";

console.log(sentence.replace("Java", "JavaScript"));
// I like JavaScript. Java is popular.

console.log(sentence.replaceAll("Java", "JavaScript"));
// I like JavaScript. JavaScript is popular.


// ============================================================
// SPLIT
// ============================================================

const csv = "apple,banana,mango";

console.log(csv.split(","));
// ["apple", "banana", "mango"]

console.log("hello".split(""));
// ["h", "e", "l", "l", "o"]


// ============================================================
// CONCAT
// ============================================================

const firstName = "Shishir";
const lastName = "Kumar";

console.log(firstName.concat(" ", lastName));
// Shishir Kumar

// Usually prefer:
// `${firstName} ${lastName}`


// ============================================================
// REPEAT
// ============================================================

console.log("ha".repeat(3));
// hahaha


// ============================================================
// CHARACTER / UNICODE
// ============================================================

console.log("A".charAt(0));     // A
console.log("A".charCodeAt(0)); // 65
console.log("A".codePointAt(0)); // 65


// ============================================================
// STRING CONVERSION
// ============================================================

console.log(String(100));       // "100"
console.log(String(true));      // "true"
console.log(String(null));      // "null"
console.log(String(undefined)); // "undefined"


// ============================================================
// TEMPLATE LITERALS
// ============================================================

const name = "Shishir";
const age = 25;

const message = `My name is ${name} and I am ${age}.`;

console.log(message);


// ============================================================
// IMMUTABILITY
// ============================================================

let word = "Hello";

// Strings cannot be modified directly.
word[0] = "Y";

console.log(word); // Hello

// Create a new string instead.
word = "Y" + word.slice(1);

console.log(word); // Yello


// ============================================================
// COMPARISON
// ============================================================

console.log("hello" === "hello"); // true
console.log("hello" === "Hello"); // false

console.log("apple" < "banana");   // true
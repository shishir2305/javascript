// MODULE SCOPE IN JAVASCRIPT
// Each ES module has its own scope.
// Top-level declarations are not automatically global.

// utils.js
const appName = "My App";

export function greet() {
    console.log(`Welcome to ${appName}`);
}

// main.js
import { greet } from "./utils.js";

greet(); // Welcome to My App

// appName is not directly accessible in main.js
// because it was not exported.

// KEY TAKEAWAY:
// Use export and import to share declarations between modules.
// Module-scoped variables do not automatically become globals.
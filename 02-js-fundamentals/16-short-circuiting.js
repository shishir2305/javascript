// ============================================
// SHORT-CIRCUITING IN JAVASCRIPT
// ============================================

// Short-circuiting means:
// JavaScript stops evaluating an expression
// when the final result is already known.

// ============================================
// 1. &&
// ============================================

// If left side is falsy,
// right side is NOT evaluated.

false && console.log("Hello");
// Nothing printed

// If left side is truthy,
// right side is evaluated.

true && console.log("Hello");
// Hello

// Mental model:
//
// A && B
//
// A falsy  → return A
// A truthy → evaluate and return B

// ============================================
// 2. ||
// ============================================

// If left side is truthy,
// right side is NOT evaluated.

true || console.log("Hello");
// Nothing printed

// If left side is falsy,
// right side is evaluated.

false || console.log("Hello");
// Hello

// Mental model:
//
// A || B
//
// A truthy → return A
// A falsy  → evaluate and return B

// ============================================
// 3. ?? (NULLISH COALESCING)
// ============================================

// Right side runs only when
// left side is null or undefined.

const name = null;

console.log(name ?? "Guest");
// Guest

const username = "Shishir";

console.log(username ?? "Guest");
// Shishir

// ============================================
// 4. && WITH OBJECTS
// ============================================

const user = null;

console.log(user && user.name);
// null

// user.name is NOT evaluated
// because user is falsy.

// ============================================
// 5. PRACTICAL DEFAULT VALUES
// ============================================

const userName = "";

const displayName = userName || "Guest";

console.log(displayName);
// Guest

// Be careful:
//
// || treats ALL falsy values as missing.

console.log(0 || 100);
// 100

console.log(false || true);
// true

console.log("" || "Default");
// Default

// ?? only treats null and undefined
// as missing.

console.log(0 ?? 100);
// 0

console.log(false ?? true);
// false

console.log("" ?? "Default");
// ""

// ============================================
// QUICK REVISION
// ============================================

// &&
// falsy → stop
// truthy → continue
//
// ||
// truthy → stop
// falsy → continue
//
// ??
// value exists (not null/undefined) → stop
// null/undefined → continue
//
// IMPORTANT:
// These operators return VALUES,
// not necessarily true/false.

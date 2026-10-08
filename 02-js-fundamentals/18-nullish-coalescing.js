// ============================================
// NULLISH COALESCING (??)
// ============================================

// Only null and undefined trigger the fallback.

console.log(null ?? "Default");
// "Default"

console.log(undefined ?? "Default");
// "Default"

console.log(0 ?? 100);
// 0

console.log(false ?? true);
// false

console.log("" ?? "Default");
// ""


// ============================================
// OPTIONAL CHAINING (?.)
// ============================================

const user = null;

console.log(user?.name);
// undefined

console.log(user?.profile?.name);
// undefined


// Array access

const users = ["A", "B"];

console.log(users?.[0]);
// "A"


// Function call

const obj = {};

obj.sayHello?.();
// No error


// ============================================
// OPTIONAL CHAINING + NULLISH COALESCING
// ============================================

const data = {};

const username =
    data?.user?.profile?.name ?? "Guest";

console.log(username);
// "Guest"


// ============================================
// IMPORTANT DIFFERENCE
// ============================================

const count = 0;

console.log(count || 10);
// 10

console.log(count ?? 10);
// 0


// ============================================
// MAANG TRAP
// ============================================

// ?. only short-circuits on null/undefined.
// It does NOT mean "if falsy".

const obj2 = {
    value: 0
};

console.log(obj2?.value);
// 0
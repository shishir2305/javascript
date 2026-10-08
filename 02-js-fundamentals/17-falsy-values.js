// ============================================
// FALSY VALUES IN JAVASCRIPT
// ============================================

Boolean(false); // false
Boolean(0); // false
Boolean(-0); // false
Boolean(0n); // false
Boolean(""); // false
Boolean(null); // false
Boolean(undefined); // false
Boolean(NaN); // false

//Note: the below values are all truthy values in JavaScript.
Boolean([]); // true
Boolean({}); // true
Boolean(" "); // true  ← contains a space

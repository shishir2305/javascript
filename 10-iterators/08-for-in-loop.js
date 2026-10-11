// Definition: for...in iterates over enumerable property keys,
// including inherited enumerable keys.

const user = {
  name: "Shishir",
  age: 25,
  role: "Engineer",
};

for (const key in user) {
  console.log(key, user[key]);
  // name Shishir
  // age 25
  // role Engineer
}

// For arrays, prefer for...of when you need values.
// for...in may include inherited keys and is not a reliable
// way to iterate array elements in sequence.

// The heap is an area of memory used for objects, functions and other dynamically allocated data. It is different from the call stack, which tracks active function calls and their execution contexts.

function createUser() {
  // The object is allocated in memory, typically on the heap.
  const user = {
    name: "Shishir",
    skills: ["JavaScript", "Node.js"],
  };

  return user;
}

const user1 = createUser();
const user2 = user1;

// Both variables refer to the same object.
user2.name = "Alex";

console.log(user1.name); // "Alex"
console.log(user1 === user2); // true

// Stack
// - Stores function calls, execution contexts, and local primitive values (conceptually).
// - Follows LIFO (Last In, First Out) for function call management.
// - Fast allocation and automatic cleanup when function calls return.

// Heap
// - Stores dynamically allocated objects, arrays, and functions.
// - Memory is managed by the JavaScript engine, including garbage collection.
// - Supports data that can outlive a single function call when still reachable.

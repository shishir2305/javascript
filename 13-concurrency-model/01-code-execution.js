// How JavaScript executes code ?
// JavaScript is often described as single-threaded because, in a typical execution context, one call stack executes JavaScript code at a time. However, JavaScript environments can perform asynchronous operations without blocking that stack.

// Think of a restaurant:
// - Call stack: The chef's current work.
// - Heap: Storage for ingredients and objects.
// - Web APIs / Node.js APIs: Other staff handling timers, network requests, and I/O.
// - Task queues: Lists of work waiting for the chef.
// - Event loop: The coordinator deciding when queued work can run.
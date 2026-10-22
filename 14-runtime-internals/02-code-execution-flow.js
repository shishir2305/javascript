// JAVASCRIPT CODE EXECUTION — MENTAL MODEL

// 1. Source Code
//    The JavaScript code written in a .js file.

// 2. Parsing
//    The parser checks syntax and creates an Abstract Syntax Tree (AST).

// 3. AST (Abstract Syntax Tree)
//    A tree representation of the structure of the JavaScript code.

// 4. Bytecode
//    An intermediate instruction format that the engine can execute.

// 5. Interpreter
//    Executes bytecode or other intermediate instructions.

// 6. JIT Compiler
//    Compiles frequently executed code into optimized machine code.

// 7. Deoptimization
//    Returns optimized code to a less optimized execution path when
//    its assumptions become invalid.

// 8. Execution Context
//    Tracks the environment in which JavaScript code executes, including
//    its bindings, scope, and execution state.

// 9. Call Stack
//    Tracks active function calls and their execution order.

// 10. Heap
//     Memory used to store objects and other dynamically allocated data.

// 11. Garbage Collection
//     Reclaims memory occupied by objects that are no longer reachable.

// 12. Host APIs
//     Browser or Node.js capabilities such as timers, networking,
//     and file I/O.

// 13. Callback Queues
//     Hold callbacks waiting for their scheduled opportunity to execute.
//     Examples include task queues, microtasks, and Node.js next-tick work.

// 14. Event Loop
//     Coordinates the processing of eligible callbacks and asynchronous
//     work while JavaScript execution remains available.

// OVERALL FLOW

// Source Code
//     ↓
// Parsing
//     ↓
// AST
//     ↓
// Bytecode / Executable Representation
//     ↓
// Interpreter + JIT Compiler
//     ↓
// JavaScript Execution
//     ↓
// Call Stack + Execution Contexts + Heap
//     ↓
// Host APIs + Callback Queues + Event Loop
//     ↓
// Asynchronous Callbacks Execute

// IMPORTANT NOTES

// - Modern JavaScript engines may compile and execute code incrementally.
// - The exact compilation pipeline depends on the engine.
// - The call stack tracks function calls; the heap stores dynamically
//   allocated data.
// - The event loop does not execute JavaScript simultaneously on the
//   same main thread; callbacks execute when the stack is available.
// - Browser and Node.js runtimes provide different host APIs and
//   asynchronous scheduling mechanisms.
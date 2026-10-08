// Now put everything together

//                          JavaScript
//                              │
//                              ▼
//                     ECMAScript Language
//                              │
//                     standardized by TC39
//                              │
//                              ▼
//                     JavaScript Engine
//                  ┌───────────┼───────────┐
//                  ▼           ▼           ▼
//                 V8       SpiderMonkey   JSC
//                  │           │           │
//                  └───────────┼───────────┘
//                              │
//                              ▼
//                       Host Environment
//                        ┌─────┴─────┐
//                        ▼           ▼
//                     Browser      Node.js
//                        │           │
//                   Web APIs      Node APIs
//                        │           │
//                        └─────┬─────┘
//                              ▼
//                      Your Application

// And underneath the engine:

// JavaScript Source
//        ↓
//     Parsing
//        ↓
// Internal representation
//        ↓
// Execution
//        ↓
// Profiling
//        ↓
// JIT optimization
//        ↓
// Machine code
//        ↓
// Garbage collection
//        ↓
// Runtime execution
//

// and for asynchronous behaviour

//              JavaScript
//                  │
//                  ▼
//             Call Stack
//                  │
//                  ▼
//         Host async facilities
//                  │
//                  ▼
//           Queues / Tasks
//                  │
//                  ▼
//             Event Loop
//                  │
//                  ▼
//             Call Stack

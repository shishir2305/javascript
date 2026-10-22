// ORINOCO — V8 GARBAGE COLLECTION

// Definition:
// Orinoco is V8's garbage collection system designed to reduce
// JavaScript execution pauses by parallelizing and overlapping GC work.

// IMPORTANT GC ALGORITHMS AND TECHNIQUES

// 1. Minor GC (Young Generation)
//    - Collects recently allocated objects.
//    - Uses a copying/scavenging approach.
//    - Surviving objects may be promoted to the old generation.

// 2. Major GC (Old Generation)
//    - Collects long-lived objects.
//    - Uses marking and sweeping, with compaction when needed.
//    - Reclaims unreachable objects and may reduce fragmentation.

// 3. Parallel GC
//    - Multiple worker threads perform GC work simultaneously.
//    - Reduces the time needed for certain collection tasks.

// 4. Incremental GC
//    - Splits marking work into smaller steps.
//    - Allows JavaScript execution between steps to reduce long pauses.

// 5. Concurrent GC
//    - Performs some GC work on background threads while JavaScript runs.
//    - Reduces work that must block the main JavaScript thread.

// 6. Compaction
//    - Moves surviving objects together to reduce memory fragmentation.
//    - Updates references as necessary.

// TRADE-OFFS

// Advantages:
// - Reduces long garbage-collection pauses.
// - Uses multiple CPU cores for some GC work.
// - Improves responsiveness in long-running applications.

// Disadvantages:
// - Background work consumes CPU resources.
// - Concurrent collection requires coordination with JavaScript execution.
// - Moving objects and maintaining references add overhead.

// MENTAL MODEL

// Young objects → Minor GC / Scavenging
// Long-lived objects → Old generation / Major GC
// Parallel → Multiple threads do GC work together
// Incremental → GC work split into smaller steps
// Concurrent → GC work overlaps with JavaScript execution
// Compaction → Moves live objects to reduce fragmentation

// KEY DISTINCTION

// Orinoco is not a single garbage-collection algorithm.
// It is V8's GC system, combining multiple algorithms and execution
// techniques to balance throughput, memory usage, and pause time.
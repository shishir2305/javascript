// JIT (JUST-IN-TIME) COMPILATION

// Definition:
// JIT compiles frequently executed JavaScript code into optimized machine
// code at runtime to improve execution performance.

// How It Works:
// 1. The engine initially executes code using an interpreter or baseline compiler.
// 2. It identifies frequently executed code (hot paths).
// 3. The optimizing compiler generates faster machine code using assumptions.
// 4. If assumptions become invalid, the engine may deoptimize and return
//    to a less optimized execution path.

// Example:
// A function called thousands of times with the same data types may be
// optimized because the engine detects a predictable execution pattern.

// JIT TRADE-OFFS

// Advantages:
// 1. Performance: Hot code can execute faster than interpreted code.
// 2. Runtime Optimization: Uses observed types and execution patterns.
// 3. Adaptive: Can optimize frequently executed functions dynamically.

// Disadvantages:
// 1. Startup Overhead: Compilation and optimization consume time.
// 2. Memory Usage: Machine code and optimization metadata require memory.
// 3. CPU Overhead: Profiling and compilation consume CPU resources.
// 4. Deoptimization: Invalid assumptions can force execution to fall back
//    to less optimized code.
// 5. Unpredictable Performance: Compilation and deoptimization can cause
//    latency variations.

// WHEN JIT HELPS
// - Long-running applications.
// - CPU-intensive JavaScript.
// - Functions executed repeatedly with predictable inputs.

// WHEN JIT MAY NOT HELP MUCH
// - Tiny scripts that finish quickly.
// - Code executed only once.
// - Workloads dominated by network, disk, or other I/O delays.

// MENTAL MODEL
// Interpreter / Baseline Compiler = Start executing quickly.
// JIT Optimizing Compiler = Spend extra work to make hot code faster.
// Deoptimization = Fall back when optimization assumptions become invalid.

/*
===========================================================
              JAVASCRIPT JIT COMPILATION
===========================================================

JIT = Just-In-Time Compilation

Simple definition:

JIT compilation means the JavaScript engine observes code
while it is running and compiles frequently executed
("hot") code into optimized machine code.

Instead of compiling everything upfront, the engine can
optimize important code during runtime.

Mental model:

    JavaScript Source
          ↓
        Parse
          ↓
      Bytecode / IR
          ↓
    Initial Execution
          ↓
    Runtime Profiling
          ↓
      Hot Code?
       ↙       ↘
     NO         YES
     ↓           ↓
  Continue     JIT Compiler
                ↓
        Optimized Machine Code
                ↓
               CPU


===========================================================
1. WHY DO WE NEED JIT?
===========================================================

Consider this function:
*/

function add(a, b) {
    return a + b;
}

console.log(add(10, 20));
console.log(add(20, 30));
console.log(add(30, 40));

/*
Initially, the JavaScript engine doesn't necessarily know
exactly how this function will be used.

It observes the code while the program runs.

For example:

    add(10, 20)
    add(20, 30)
    add(30, 40)

The engine notices:

    a → Number
    b → Number
    operation → Number + Number

If this function keeps getting called, the engine may
decide:

    "This function is HOT.
     Let's optimize it."


===========================================================
2. WHAT IS HOT CODE?
===========================================================

HOT CODE = code that executes frequently.

Example:
*/

function square(number) {
    return number * number;
}

for (let i = 0; i < 1_000_000; i++) {
    square(i);
}

/*
Here:

    square()
       ↓
    called many times
       ↓
    frequently executed
       ↓
    HOT CODE

The engine can identify this and decide that optimizing
square() is worthwhile.


===========================================================
3. WITHOUT JIT — SIMPLIFIED MODEL
===========================================================

A traditional interpreter model can be visualized as:

    JavaScript
        ↓
    Interpreter
        ↓
    Execute
        ↓
    Interpreter
        ↓
    Execute
        ↓
    Interpreter
        ↓
    Execute


The same code may need to be interpreted repeatedly.


===========================================================
4. WITH JIT
===========================================================

JIT changes the picture:

    JavaScript
        ↓
    Parse
        ↓
    Bytecode
        ↓
    Execute
        ↓
    Observe runtime behavior
        ↓
    Detect HOT code
        ↓
    JIT Compiler
        ↓
    Machine Code
        ↓
    Execute optimized code


The important part is:

    COMPILATION HAPPENS DURING RUNTIME.


That's why:

    JIT = Just-In-Time


===========================================================
5. SIMPLE EXAMPLE
===========================================================
*/

function multiply(a, b) {
    return a * b;
}

// The function is called repeatedly.

multiply(10, 20);
multiply(20, 30);
multiply(30, 40);
multiply(40, 50);

/*
The engine may observe:

    multiply()
         ↓
    called repeatedly
         ↓
    a and b are Numbers
         ↓
    operation is predictable
         ↓
    HOT CODE
         ↓
    JIT optimization


Conceptually:

    multiply(10, 20)
    multiply(20, 30)
    multiply(30, 40)
             ↓
      Runtime profiling
             ↓
        JIT Compiler
             ↓
     Optimized machine code


The exact internal implementation differs between
JavaScript engines.


===========================================================
6. JAVASCRIPT IS DYNAMICALLY TYPED
===========================================================

JavaScript allows different types to be passed to the
same function.

Example:
*/

function addValues(a, b) {
    return a + b;
}

console.log(addValues(10, 20));       // 30
console.log(addValues("Hello ", "JS")); // Hello JS

/*
The engine therefore cannot always make permanent
assumptions about types.

But if runtime behavior is consistent, the engine can
often optimize based on observed behavior.


===========================================================
7. OPTIMIZATION
===========================================================

Suppose we repeatedly do:

*/

function calculate(a, b) {
    return a * b + 10;
}

for (let i = 0; i < 1_000_000; i++) {
    calculate(i, 2);
}

/*
The engine may observe:

    calculate()
         ↓
    called many times
         ↓
    a → Number
    b → Number
         ↓
    predictable behavior
         ↓
    optimize


The goal:

    Reduce the work required to execute this hot code.


===========================================================
8. DEOPTIMIZATION
===========================================================

JIT optimization is based on runtime assumptions.

Suppose the engine observes:

    add(10, 20)
    add(20, 30)
    add(30, 40)

It may optimize for:

    Number + Number


But later:

*/

function sum(a, b) {
    return a + b;
}

sum(10, 20);
sum(20, 30);
sum(30, 40);

// Later:
sum("Hello ", "World");

/*
Now the behavior changed.

Previously:

    Number + Number

Now:

    String + String


The previous optimization may no longer be appropriate.

The engine can perform:

    DEOPTIMIZATION

Meaning:

    Optimized code
          ↓
    Assumption becomes invalid
          ↓
    Deoptimize
          ↓
    Use another execution path
          ↓
    Possibly optimize again later


This is called:

    DEOPT


===========================================================
9. JIT IS NOT "COMPILE EVERYTHING"
===========================================================

Imagine an application contains:

    function login() {}
    function logout() {}
    function search() {}
    function calculate() {}
    function render() {}

But during execution:

    calculate()
        ↓
    called 10 million times


The engine doesn't necessarily need to aggressively
optimize every function.

Instead:

    login()       → rarely used
    logout()      → rarely used
    search()      → normal
    calculate()   → HOT → optimize
    render()      → normal


This saves:

    CPU
    Memory
    Startup time
    Compilation work


===========================================================
10. JIT HAS A TRADEOFF
===========================================================

JIT compilation itself costs resources.

The engine has to spend:

    CPU
    Memory
    Compilation time

Therefore:

    More compilation
          ↓
    Potentially slower startup


But:

    Better optimization
          ↓
    Faster long-running execution


So the engine tries to balance:

    STARTUP PERFORMANCE
             +
    RUNTIME PERFORMANCE


===========================================================
11. V8 EXAMPLE
===========================================================

V8 is the JavaScript engine used by:

    Google Chrome
    Node.js
    Chromium-based environments


A simplified V8 mental model is:

    JavaScript
         ↓
      Parser
         ↓
        AST
         ↓
      Ignition
         ↓
      Bytecode
         ↓
    Execute + Profile
         ↓
    Hot code detected
         ↓
     TurboFan
         ↓
    Optimized Machine Code


IMPORTANT:

This is a simplified conceptual model.

JavaScript engine internals evolve over time and are
more complicated than this diagram.


===========================================================
12. JIT AND CPU
===========================================================

The CPU ultimately executes machine code.

So the simplified journey is:

    JavaScript
         ↓
    Engine understands code
         ↓
    Bytecode / intermediate representation
         ↓
    JIT compiler
         ↓
    Machine code
         ↓
    CPU


Machine code is much closer to what the CPU directly
understands than JavaScript source code.


===========================================================
13. JIT VS AHEAD-OF-TIME COMPILATION
===========================================================

Traditional AOT compilation:

    Source Code
         ↓
      Compiler
         ↓
    Machine Code
         ↓
    Run Program


JIT compilation:

    Source Code
         ↓
    Start execution
         ↓
    Observe behavior
         ↓
    Find hot code
         ↓
    Compile hot code
         ↓
    Execute optimized code


AOT:

    Compile BEFORE execution.


JIT:

    Compile DURING execution.


===========================================================
14. WHY JIT IS POWERFUL FOR JAVASCRIPT
===========================================================

JavaScript is dynamic.

The engine can observe REAL runtime behavior.

For example:

*/

function processUser(user) {
    return user.age + 10;
}

processUser({ age: 20 });
processUser({ age: 30 });
processUser({ age: 40 });

/*
The engine can observe things such as:

    What types are being used?
    What object structures are common?
    Which functions are called frequently?
    Which operations are repeated?

It can use this runtime information for optimization.

This is one of the major strengths of JIT compilation.


===========================================================
15. JIT + RUNTIME PROFILING
===========================================================

Think of the engine as continuously observing:

    ┌───────────────────────────────┐
    │       JavaScript Program     │
    └───────────────┬───────────────┘
                    ↓
             Runtime Profiling
                    ↓
       ┌────────────┴────────────┐
       ↓                         ↓
   Cold code                 Hot code
       ↓                         ↓
   Execute normally          Optimize
                                 ↓
                            JIT Compile
                                 ↓
                         Machine Code


This is the core idea.


===========================================================
16. IMPORTANT: JIT DOES NOT MAKE JS MULTI-THREADED
===========================================================

This is a common misconception.

JIT:

    Makes frequently executed code faster.

It does NOT mean:

    JavaScript suddenly gets multiple
    JavaScript execution threads.


Remember:

    Single-threaded
          +
    JIT compilation
          +
    Asynchronous runtime
          +
    Event Loop

are different concepts.


===========================================================
17. JIT AND EVENT LOOP ARE DIFFERENT
===========================================================

JIT:

    Optimizes JavaScript execution.


Event Loop:

    Coordinates asynchronous tasks and
    when callbacks can execute.


For example:

    JIT
      ↓
    "How can I execute this JavaScript faster?"

    Event Loop
      ↓
    "When can this callback execute?"


They solve different problems.


===========================================================
18. COMPLETE JAVASCRIPT EXECUTION MODEL
===========================================================

A simplified modern JavaScript execution model:

             JavaScript Source
                    ↓
                 Parser
                    ↓
                   AST
                    ↓
              Bytecode / IR
                    ↓
             Initial Execution
                    ↓
            Runtime Profiling
                    ↓
               Is code HOT?
                 /       \
               NO         YES
               ↓           ↓
          Continue      JIT Compiler
                        ↓
                 Optimized Code
                        ↓
                  Machine Code
                        ↓
                       CPU

If assumptions become invalid:

              Optimized Code
                    ↓
             Assumption breaks
                    ↓
               Deoptimization
                    ↓
            Another execution path


===========================================================
19. INTERVIEW ANSWER
===========================================================

Question:

    What is JIT compilation?


Answer:

    "JIT, or Just-In-Time compilation, is a runtime
     optimization technique where a JavaScript engine
     observes code execution, identifies frequently
     executed hot code, and compiles it into optimized
     machine code. If the assumptions used for
     optimization become invalid, the engine can
     deoptimize the code."


===========================================================
20. ONE-LINE NOTE
===========================================================

JIT:

    Execute → Observe → Find hot code → Compile →
    Optimize → Execute faster → Deoptimize if needed.


===========================================================
FINAL MENTAL MODEL
===========================================================

DO NOT THINK:

    JavaScript
        ↓
    Compile everything
        ↓
    Execute


Instead think:

    JavaScript
        ↓
    Parse
        ↓
    Bytecode / IR
        ↓
    Execute
        ↓
    Observe runtime behavior
        ↓
    Find hot code
        ↓
    JIT compile
        ↓
    Optimized machine code
        ↓
    Execute faster


The key idea:

    JIT = Runtime compilation + runtime profiling
          + optimization
          + possible deoptimization


===========================================================
*/
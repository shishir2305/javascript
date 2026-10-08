/*
===========================================================
        JAVASCRIPT: COMPILED OR INTERPRETED?
===========================================================

SHORT ANSWER:

JavaScript is BOTH compiled and interpreted.

Modern JavaScript engines primarily use:

    JIT (Just-In-Time) COMPILATION

So saying only:

    "JavaScript is interpreted"

is outdated/incomplete.

And saying:

    "JavaScript is compiled"

is also incomplete.

The better answer is:

    "JavaScript is executed using a combination of
     parsing, interpretation, and JIT compilation,
     depending on the JavaScript engine."


===========================================================
1. COMPILED LANGUAGE
===========================================================

In a traditional compiled language like C++:

    Source Code
        ↓
    Compiler
        ↓
    Machine Code
        ↓
    CPU


Example:

    main.cpp
        ↓
    Compiler
        ↓
    executable
        ↓
    CPU


The program is generally compiled BEFORE execution.


===========================================================
2. INTERPRETED LANGUAGE
===========================================================

A traditional interpreted model looks like:

    Source Code
        ↓
    Interpreter
        ↓
    Execute


The interpreter reads and executes the program
during runtime.

Conceptually:

    Code → Interpret → Execute
    Code → Interpret → Execute
    Code → Interpret → Execute


There is no traditional "compile the entire program
before running it" step.


===========================================================
3. WHERE DOES JAVASCRIPT FIT?
===========================================================

JavaScript doesn't fit perfectly into either traditional
category.

Modern JavaScript engines use a mixture of techniques.

Simplified:

    JavaScript Source Code
            ↓
         Parsing
            ↓
       AST / Bytecode
            ↓
       Interpretation
            ↓
       Code executes
            ↓
      Frequently used code
            ↓
       JIT Compilation
            ↓
    Optimized Machine Code


This is why modern JavaScript is best understood as
a JIT-compiled language/runtime execution model.


===========================================================
4. JAVASCRIPT ENGINE
===========================================================

Different environments use different JavaScript engines.

Browser examples:

    Chrome / Edge
        → V8

    Firefox
        → SpiderMonkey

    Safari
        → JavaScriptCore

Node.js:

    → V8


The exact internal implementation differs between engines,
but the general idea is similar.


===========================================================
5. WHAT HAPPENS WHEN JAVASCRIPT RUNS?
===========================================================

Consider:

*/

const x = 10;
const y = 20;

console.log(x + y);


/*
The engine doesn't simply do:

    Source Code
        ↓
    Interpreter
        ↓
    CPU

Modern engines perform multiple stages.


===========================================================
6. STEP 1 — PARSING
===========================================================

The engine first parses the source code.

Example:

    const x = 10;

The engine determines the structure and meaning of
the JavaScript code.

Conceptually:

    Source Code
         ↓
      Parser
         ↓
       AST


AST = Abstract Syntax Tree


For:

    const x = 10;

The AST represents concepts such as:

    Variable Declaration
          ↓
        x = 10


The AST allows the engine to understand the structure
of the program.


===========================================================
7. STEP 2 — BYTECODE / INITIAL EXECUTION
===========================================================

Modern engines often convert JavaScript into an
intermediate representation such as bytecode.

For example, V8 uses:

    Ignition
        ↓
    Bytecode interpreter


Conceptually:

    JavaScript
        ↓
      Parser
        ↓
        AST
        ↓
      Bytecode
        ↓
    Interpreter
        ↓
     Execution


This allows code to start executing relatively quickly.


===========================================================
8. STEP 3 — JIT COMPILATION
===========================================================

JIT = Just-In-Time compilation.

While the program runs, the engine observes how the
code behaves.

Suppose:

*/

function add(a, b) {
    return a + b;
}

add(10, 20);
add(30, 40);
add(50, 60);


/*
The engine may notice:

    add()
      ↓
    frequently called
      ↓
    arguments are consistently numbers
      ↓
    optimize the function


The engine can compile frequently executed code into
optimized machine code.

Conceptually:

    JavaScript
        ↓
    Bytecode
        ↓
    Execute
        ↓
    Detect "hot" code
        ↓
    JIT Compiler
        ↓
    Optimized Machine Code
        ↓
    CPU


This is called:

    JIT COMPILATION


===========================================================
9. WHAT IS "HOT CODE"?
===========================================================

Hot code means code that executes frequently.

Example:

*/

function calculate(a, b) {
    return a * b + 10;
}

for (let i = 0; i < 1_000_000; i++) {
    calculate(i, 2);
}


/*
The engine may recognize:

    calculate()
        ↓
    called many times
        ↓
    HOT CODE
        ↓
    Optimize it


The goal is to make frequently executed code faster.


===========================================================
10. WHY NOT COMPILE EVERYTHING IMMEDIATELY?
===========================================================

Because compilation itself has a cost.

Imagine:

    function A()
    function B()
    function C()
    function D()
    function E()

But your application only calls:

    function A()


Compiling everything aggressively upfront could waste:

    CPU
    Memory
    Startup time


Instead, engines can:

    Start execution quickly
          ↓
    Observe runtime behavior
          ↓
    Identify important code
          ↓
    Optimize hot code


This gives a good balance between:

    STARTUP PERFORMANCE
            +
    RUNTIME PERFORMANCE


===========================================================
11. OPTIMIZATION
===========================================================

Suppose:

*/

function add(a, b) {
    return a + b;
}

add(10, 20);
add(20, 30);
add(50, 60);


/*
The engine may observe:

    a → number
    b → number

Therefore it can make assumptions that allow
optimized machine code to be generated.


Conceptually:

    add(10, 20)
    add(20, 30)
    add(50, 60)
          ↓
    Stable behavior detected
          ↓
    Optimize
          ↓
    Machine Code


===========================================================
12. WHAT IF OUR ASSUMPTION BECOMES WRONG?
===========================================================

JavaScript is dynamically typed.

Consider:

*/

function add(a, b) {
    return a + b;
}

add(10, 20);
add(30, 40);

// Later:
add("Hello ", "World");


/*
Initially the engine may optimize for:

    number + number


But later it sees:

    string + string


The previous optimization may no longer be valid.

The engine can:

    Deoptimize
        ↓
    Fall back to a less optimized execution path
        ↓
    Continue execution


This is called:

    DEOPTIMIZATION


This dynamic optimization/deoptimization behavior is
one reason JavaScript engines are sophisticated.


===========================================================
13. COMPILER VS INTERPRETER
===========================================================

Traditional compiler:

    Source
      ↓
    Compile
      ↓
    Machine Code
      ↓
    Execute


Traditional interpreter:

    Source
      ↓
    Interpret
      ↓
    Execute


Modern JavaScript engine:

    Source
      ↓
    Parse
      ↓
    Intermediate representation / Bytecode
      ↓
    Execute
      ↓
    Identify hot code
      ↓
    JIT compile
      ↓
    Optimized machine code
      ↓
    Execute


Therefore:

    JavaScript is NOT simply "interpreted".

And:

    JavaScript is NOT simply "compiled beforehand".

Modern JavaScript engines use JIT compilation
along with interpretation and other execution techniques.


===========================================================
14. IMPORTANT: ECMASCRIPT VS JAVASCRIPT ENGINE
===========================================================

ECMAScript is the LANGUAGE SPECIFICATION.

For example, ECMAScript defines concepts such as:

    let
    const
    Promise
    async/await
    classes
    modules


A JavaScript engine implements the language.

Examples:

    V8
    SpiderMonkey
    JavaScriptCore


Therefore:

    ECMAScript
        ↓
    Specification

    V8 / SpiderMonkey / JavaScriptCore
        ↓
    Implementations


The specification does NOT dictate:

    "You must use JIT."

An engine is free to choose its implementation strategy
as long as it follows the language specification.


===========================================================
15. IMPORTANT INTERVIEW ANSWER
===========================================================

Question:

    "Is JavaScript compiled or interpreted?"


Good answer:

    "Modern JavaScript is neither purely compiled nor
     purely interpreted. JavaScript engines typically
     parse the source, execute it through an intermediate
     representation such as bytecode, and use JIT
     compilation to optimize frequently executed code
     into machine code."


===========================================================
16. ONE-LINE VERSION
===========================================================

For quick notes:

    JavaScript uses a hybrid execution model where
    modern engines interpret initial code and use
    JIT compilation to optimize hot code into
    machine code.


===========================================================
17. FINAL MENTAL MODEL
===========================================================

Think of a modern JavaScript engine like this:

                 JS SOURCE
                     │
                     ↓
                  PARSER
                     │
                     ↓
                    AST
                     │
                     ↓
              BYTECODE / IR
                     │
                     ↓
              INITIAL EXECUTION
                     │
                     ↓
            ┌──────────────────┐
            │ Runtime profiling│
            └────────┬─────────┘
                     │
               Hot code?
                /        \
              NO          YES
              │            │
              ↓            ↓
          Continue       JIT
          execution      compile
                            │
                            ↓
                    Optimized Machine
                         Code
                            │
                            ↓
                           CPU


KEY TERMS TO REMEMBER:

    Parser
    AST
    Bytecode
    Interpreter
    JIT
    Machine Code
    Optimization
    Deoptimization
    Hot Code
    JavaScript Engine


===========================================================
FINAL TAKEAWAY
===========================================================

JavaScript started with a much simpler interpretation
model, but modern engines such as V8 have evolved into
highly sophisticated execution systems.

The most accurate modern mental model is:

    JavaScript Source
          ↓
       Parsing
          ↓
      Bytecode / IR
          ↓
     Initial execution
          ↓
     Runtime profiling
          ↓
     JIT compilation
          ↓
    Optimized machine code
          ↓
          CPU

Therefore:

    JavaScript = dynamically typed language
               + interpreted/initial execution
               + JIT compilation
               + runtime optimization


===========================================================
*/
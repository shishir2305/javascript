/*
===========================================================
        JAVASCRIPT: SINGLE-THREADED & NON-BLOCKING
===========================================================

CORE IDEA:

JavaScript executes your code on a SINGLE main thread.

But JavaScript can perform asynchronous operations without
blocking that thread because the RUNTIME handles those
operations and later puts their callbacks/continuations
back into a queue.

In short:

    Single-threaded
        ↓
    One JS execution thread

    Non-blocking
        ↓
    Don't wait synchronously for slow operations

    Event Loop
        ↓
    Coordinates when async work can run
===========================================================
*/


/*
===========================================================
1. WHAT DOES "SINGLE-THREADED" MEAN?
===========================================================

JavaScript has one main thread for executing JavaScript.

Therefore, two pieces of JavaScript code do NOT execute
simultaneously on that same thread.

Example:
*/

console.log("A");
console.log("B");
console.log("C");

/*
Output:

A
B
C

Execution:

    console.log("A")
            ↓
    console.log("B")
            ↓
    console.log("C")

One operation finishes before the next one starts.

Think of the JavaScript thread as:

    ┌──────────────────────────────┐
    │       JS MAIN THREAD         │
    │                              │
    │   A → B → C → D → E         │
    │                              │
    └──────────────────────────────┘

Only one JavaScript operation is being executed at a time.
*/


/*
===========================================================
2. THE CALL STACK
===========================================================

JavaScript uses a Call Stack to keep track of functions
currently executing.

Example:
*/

function first() {
    second();
}

function second() {
    console.log("Hello");
}

first();

/*
Conceptually:

            CALL STACK

        ┌───────────────┐
        │   console.log │
        ├───────────────┤
        │    second()   │
        ├───────────────┤
        │    first()    │
        └───────────────┘

Functions are added to the stack when they start executing
and removed when they finish.

The stack follows:

    LIFO
    Last In → First Out
*/


/*
===========================================================
3. THE PROBLEM WITH SINGLE-THREADED JAVASCRIPT
===========================================================

What happens if we perform a huge computation?
*/

function heavyTask() {
    for (let i = 0; i < 10_000_000_000; i++) {
        // Expensive CPU work
    }
}

console.log("Start");

// heavyTask();

console.log("End");

/*
If heavyTask() executes:

    Start
      ↓
    heavyTask()
      ↓
    █████████████████████
       CPU WORK
    █████████████████████
      ↓
    End

During heavyTask():

    JavaScript cannot execute other JavaScript code
    on the same main thread.

This is called:

    BLOCKING

This can cause:

    - Frozen UI
    - Slow interactions
    - Delayed event handlers
    - Dropped animations
    - Poor responsiveness
*/


/*
===========================================================
4. WHAT DOES "NON-BLOCKING" MEAN?
===========================================================

Non-blocking means:

    JavaScript does not synchronously WAIT for a slow
    asynchronous operation to finish.

Example:
*/

console.log("Start");

setTimeout(() => {
    console.log("Timer finished");
}, 2000);

console.log("End");

/*
Output:

Start
End
Timer finished


Notice:

JavaScript did NOT do:

    Start
      ↓
    WAIT 2 seconds
      ↓
    Timer finished
      ↓
    End


Instead:

    Start
      ↓
    Register timer
      ↓
    Continue immediately
      ↓
    End
      ↓
    ...later...
      ↓
    Timer callback executes


This is NON-BLOCKING behavior.
*/


/*
===========================================================
5. BUT JAVASCRIPT IS SINGLE-THREADED...

HOW CAN setTimeout() WORK IN THE BACKGROUND?
===========================================================

This is where the JavaScript RUNTIME comes in.

JavaScript itself is single-threaded.

But the runtime provides additional capabilities.

Browser:

    JavaScript Engine
          +
    Web APIs
          +
    Event Loop
          +
    Queues


Node.js:

    JavaScript Engine
          +
    Node.js APIs
          +
    libuv
          +
    Event Loop
          +
    Queues


Simplified architecture:

                 JAVASCRIPT RUNTIME
                        │
                        ↓
              ┌──────────────────┐
              │ JavaScript Engine│
              │                  │
              │   Call Stack     │
              └────────┬─────────┘
                       │
                       ↓
                 Runtime APIs
                       │
             ┌─────────┼─────────┐
             ↓         ↓         ↓
          Timers    Network     I/O
             │         │         │
             └─────────┼─────────┘
                       ↓
                    Queues
                       ↓
                   Event Loop
                       ↓
                  Call Stack


IMPORTANT:

    JavaScript execution = single-threaded

    Runtime = can use other system resources/threads
*/


/*
===========================================================
6. HOW setTimeout() ACTUALLY WORKS
===========================================================

Code:
*/

console.log("A");

setTimeout(() => {
    console.log("B");
}, 2000);

console.log("C");

/*
Execution:

STEP 1:

console.log("A")

    Call Stack
        ↓
    console.log("A")
        ↓
    Output A


STEP 2:

setTimeout(...)

The runtime registers the timer.

Conceptually:

    JS Thread
        │
        ↓
    setTimeout()
        │
        ↓
    Runtime Timer
        │
        │ 2 seconds
        ↓
    Callback becomes ready


JavaScript does NOT wait here.


STEP 3:

JavaScript continues:

console.log("C")

Output:

A
C


STEP 4:

After the timer finishes:

    Timer
      ↓
    Callback
      ↓
    Queue
      ↓
    Event Loop
      ↓
    Call Stack
      ↓
    Execute callback


Finally:

B


Final output:

A
C
B
*/


/*
===========================================================
7. THE EVENT LOOP
===========================================================

The Event Loop is responsible for coordinating when
asynchronous callbacks can execute.

Simplified:

              ┌─────────────────┐
              │   Call Stack    │
              └────────┬────────┘
                       │
                       │
                 Is stack empty?
                       │
                ┌──────┴──────┐
                │             │
               NO            YES
                │             │
                ↓             ↓
             Continue     Check queues
                          │
                          ↓
                       Move ready
                       work to stack
                          │
                          ↓
                     JS executes


IMPORTANT:

The Event Loop does NOT execute JavaScript itself.

The JavaScript engine executes JavaScript.

The Event Loop decides when queued work can be
given back to the JavaScript engine.
*/


/*
===========================================================
8. PROMISES AND THE MICROTASK QUEUE
===========================================================

Promises use a special queue called the Microtask Queue.

Example:
*/

console.log("A");

Promise.resolve().then(() => {
    console.log("B");
});

console.log("C");

/*
Output:

A
C
B


Why?

    console.log("A")
          ↓
          A

    Promise.then()
          ↓
    Microtask Queue

    console.log("C")
          ↓
          C

    Current JS finishes
          ↓
    Microtasks execute
          ↓
          B


Simplified:

    Call Stack
        ↓
    Current JavaScript finishes
        ↓
    Microtask Queue
        ↓
    Promise callback executes
*/


/*
===========================================================
9. TASK QUEUE VS MICROTASK QUEUE
===========================================================

Simplified mental model:

                 EVENT LOOP
                     │
          ┌──────────┴──────────┐
          ↓                     ↓
    Microtask Queue          Task Queue
          │                     │
          ↓                     ↓
      Promises               Timers
      queueMicrotask()       Events
          │
          └──────────┬──────────┘
                     ↓
                 Call Stack


A useful simplified rule:

    After the current JavaScript task finishes,
    microtasks are processed before moving to another
    normal task.


Example:

console.log("1");

setTimeout(() => {
    console.log("2");
}, 0);

Promise.resolve().then(() => {
    console.log("3");
});

console.log("4");


Output:

1
4
3
2


Why?

    1 → synchronous
    4 → synchronous
    3 → microtask
    2 → task


Remember:

    Promise callbacks generally have higher scheduling
    priority than timer callbacks.
*/


/*
===========================================================
10. ASYNCHRONOUS DOES NOT MEAN MULTI-THREADED
===========================================================

This is VERY important.

ASYNC:

    Work can finish later.

MULTI-THREADED:

    Multiple threads can execute work concurrently.

They are NOT the same thing.

Example:

    fetch()
        ↓
    asynchronous operation
        ↓
    Promise resolves later

This does NOT mean:

    "JavaScript suddenly has two JavaScript threads."


The JavaScript execution thread is still one thread.


===========================================================
11. async / await
===========================================================

async/await is also NOT multi-threading.

Example:
*/

async function getData() {
    const response = await fetch("/api/users");

    console.log(response);
}

/*
Conceptually:

    getData()
       ↓
    fetch()
       ↓
    await
       ↓
    Function pauses
       ↓
    JavaScript can do other work
       ↓
    Network response arrives
       ↓
    Promise settles
       ↓
    Function resumes


Therefore:

    await ≠ blocking the entire JavaScript thread


Instead:

    await = pause this async function until the Promise
            settles, while the runtime can continue
            other work.
*/


/*
===========================================================
12. NETWORK REQUEST EXAMPLE
===========================================================

Consider:
*/

console.log("Start");

fetch("/api/users")
    .then(response => response.json())
    .then(users => {
        console.log(users);
    });

console.log("End");

/*
Conceptually:

                 JavaScript
                     │
                     ↓
                   fetch()
                     │
                     ↓
              Runtime / Network
                     │
                     │
                     │ Network request
                     │
                     ↓
              JavaScript continues
                     │
                     ↓
                    End


Later:

              Network response
                     │
                     ↓
              Promise settles
                     │
                     ↓
             Microtask Queue
                     │
                     ↓
                Event Loop
                     │
                     ↓
                Call Stack
                     │
                     ↓
              .then() executes


Output:

Start
End
[users]


This is NON-BLOCKING I/O.
*/


/*
===========================================================
13. WHY NODE.JS IS GOOD FOR I/O-HEAVY APPLICATIONS
===========================================================

Imagine a server receives:

    Request A → Database
    Request B → API
    Request C → File
    Request D → Database


With asynchronous I/O:

              Node.js
                 │
       ┌─────────┼─────────┐
       ↓         ↓         ↓
   Request A  Request B  Request C
       │         │         │
       ↓         ↓         ↓
      DB        API       File
      I/O       I/O       I/O


While Request A waits for the database:

    Node.js can work on B, C, D.

That's the power of non-blocking I/O.


IMPORTANT:

This does NOT mean one CPU core is executing
four JavaScript functions simultaneously.

It means the JavaScript thread doesn't waste time
WAITING for I/O to finish.
*/


/*
===========================================================
14. I/O-BOUND VS CPU-BOUND
===========================================================

I/O-BOUND:

    - Database queries
    - HTTP requests
    - Network operations
    - File operations

These are excellent candidates for asynchronous,
non-blocking execution.


CPU-BOUND:

    - Huge loops
    - Image processing
    - Video encoding
    - Complex calculations
    - Heavy data processing

These can block the JavaScript thread.


Example:

    while (hugeCalculationIsRunning) {
        // CPU is busy
    }


Even though JavaScript supports asynchronous programming,
this CPU work is still blocking.


===========================================================
15. HOW TO HANDLE CPU-HEAVY WORK
===========================================================

When true parallel computation is required, use mechanisms
such as:

Browser:

    Web Workers


Node.js:

    Worker Threads
    Child Processes
    Multiple Processes


Conceptually:

                 Main Thread
                     │
          ┌──────────┼──────────┐
          ↓          ↓          ↓
       Worker 1   Worker 2   Worker 3
          │          │          │
          ↓          ↓          ↓
       CPU Work   CPU Work   CPU Work


Now actual parallel computation can happen.


===========================================================
16. BLOCKING VS NON-BLOCKING
===========================================================


BLOCKING:

    Start operation
         ↓
       WAIT
         ↓
    Operation finishes
         ↓
    Continue


NON-BLOCKING:

    Start operation
         ↓
    Continue immediately
         ↓
    Do other work
         ↓
    Operation finishes
         ↓
    Callback / Promise continuation
         ↓
    Handle result


This distinction is one of the most important ideas
behind JavaScript and Node.js.
*/


/*
===========================================================
17. THE COMPLETE MENTAL MODEL
===========================================================

Remember this diagram:

                     JAVASCRIPT RUNTIME
                            │
                            ↓
                  ┌───────────────────┐
                  │  JavaScript Engine│
                  │                   │
                  │    Call Stack     │
                  └─────────┬─────────┘
                            │
                            ↓
                     Runtime APIs
                            │
              ┌─────────────┼─────────────┐
              ↓             ↓             ↓
           Timers        Network        I/O
              │             │             │
              └─────────────┼─────────────┘
                            ↓
                         Queues
                            │
                 ┌──────────┴──────────┐
                 ↓                     ↓
          Microtask Queue          Task Queue
                 │                     │
                 └──────────┬──────────┘
                            ↓
                       Event Loop
                            │
                            ↓
                       Call Stack
                            │
                            ↓
                     JavaScript runs


===========================================================
18. THE MOST IMPORTANT DISTINCTIONS
===========================================================

SINGLE-THREADED
    ↓
One main JavaScript execution thread.

ASYNCHRONOUS
    ↓
Work can complete later.

NON-BLOCKING
    ↓
JavaScript doesn't synchronously wait for certain
slow operations.

EVENT LOOP
    ↓
Coordinates when asynchronous callbacks/continuations
can execute.

CALL STACK
    ↓
Where JavaScript execution happens.

MICROTASK QUEUE
    ↓
Promise callbacks and other microtasks.

TASK QUEUE
    ↓
Timers, events, and other tasks.

RUNTIME
    ↓
Provides APIs and mechanisms for asynchronous operations.


===========================================================
19. ONE-LINE INTERVIEW ANSWER
===========================================================

"JavaScript is single-threaded because its main execution
model uses a single Call Stack, but it achieves non-blocking
behavior by delegating asynchronous operations to the host
runtime and using the Event Loop and task queues to execute
their callbacks or Promise continuations when the stack is
available."


===========================================================
20. FINAL MENTAL MODEL
===========================================================

Do NOT think:

    JavaScript
        ↓
    Multiple things execute simultaneously


Think:

    JavaScript
        ↓
    One thing executes at a time
        ↓
    Slow I/O is handled by the runtime
        ↓
    JavaScript continues doing other work
        ↓
    I/O completes
        ↓
    Callback / Promise continuation enters a queue
        ↓
    Event Loop
        ↓
    Call Stack
        ↓
    JavaScript handles the result


THE KEY IDEA:

    JavaScript is SINGLE-THREADED
            +
    Runtime provides ASYNCHRONOUS capabilities
            +
    Event Loop coordinates execution
            =
    NON-BLOCKING JAVASCRIPT
===========================================================
*/
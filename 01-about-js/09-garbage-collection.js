/*
===========================================================
        JAVASCRIPT GARBAGE COLLECTION
===========================================================

Garbage Collection (GC) is the automatic process by which
the JavaScript engine identifies objects that are no longer
reachable by the program and reclaims their memory.

IMPORTANT:

    Garbage Collection is automatic.

    We don't manually free objects like:

        free(object);   // C/C++ style

    Instead, JavaScript's engine determines when memory can
    be reclaimed.
*/


/*
===========================================================
1. WHY DO WE NEED GARBAGE COLLECTION?
===========================================================

When we create objects, they consume memory.
*/

let user = {
    name: "Shishir",
    age: 25
};

/*
Conceptually:

    user
      |
      v
    Object
    {
        name: "Shishir",
        age: 25
    }

The object is reachable through the `user` variable.

Therefore, the garbage collector must KEEP it.
*/


/*
===========================================================
2. MAKING AN OBJECT UNREACHABLE
===========================================================

Now we remove the reference to the object.
*/

user = null;

/*
Conceptually:

    user
      |
      v
    null


    Object
    {
        name: "Shishir",
        age: 25
    }

The object is no longer reachable through `user`.

Therefore:

    Object → eligible for garbage collection

IMPORTANT:

    `user = null` does NOT immediately delete the object.

It simply removes one reference to the object.

The garbage collector decides WHEN to actually reclaim
the memory.
*/


/*
===========================================================
3. REACHABILITY
===========================================================

The most important concept in Garbage Collection is:

                REACHABILITY

The garbage collector essentially asks:

    "Can this object still be reached from a GC root?"

If YES:
    Keep the object.

If NO:
    Object can eventually be collected.
*/


let person = {
    name: "Alice"
};

/*
Conceptually:

    GC Root
       |
       v
    person
       |
       v
    Object

The object is reachable.
*/


person = null;

/*
Now:

    GC Root
       |
       v
    person → null


    Object

The object is unreachable.

Therefore:

    Object → eligible for GC
*/


/*
===========================================================
4. GARBAGE COLLECTION DOES NOT MEAN IMMEDIATE DELETION
===========================================================

This is a very important interview point.

Consider:

    object becomes unreachable
                |
                v
        eligible for GC
                |
                v
       GC runs at some point
                |
                v
        memory is reclaimed

NOT:

    object becomes unreachable
                |
                v
        immediately deleted
*/


/*
===========================================================
5. GC ROOTS
===========================================================

Garbage collectors start from special references called
GC ROOTS and follow references from them.

Conceptually, roots can include things such as:

    - Global objects
    - Active execution contexts
    - Local variables
    - Function parameters
    - Other runtime/engine references

Example:
*/


let employee = {
    name: "John",
    address: {
        city: "Mumbai"
    }
};

/*
Conceptually:

    GC Root
       |
       v
    employee
       |
       v
    Employee Object
       |
       v
    Address Object


Both objects are reachable.

Therefore:

    Employee Object → KEEP
    Address Object  → KEEP
*/


/*
===========================================================
6. REMOVING THE ROOT REFERENCE
===========================================================

Now:
*/

employee = null;

/*
Conceptually:

    GC Root
       |
       v
    employee → null


    Employee Object
          |
          v
    Address Object


Neither object is reachable anymore.

Therefore:

    Employee Object → eligible for GC
    Address Object  → eligible for GC
*/


/*
===========================================================
7. MARK-AND-SWEEP
===========================================================

A fundamental garbage collection concept is:

                MARK AND SWEEP

STEP 1:
    Start from GC roots.

STEP 2:
    Follow all reachable references.

STEP 3:
    MARK reachable objects.

STEP 4:
    Objects that were NOT marked are garbage.

STEP 5:
    Reclaim their memory.

Example concept:

        Root
         |
         v
         A
        / \
       B   C

       D
       |
       E


A, B and C are reachable.

D and E are unreachable.

Therefore:

    A → KEEP
    B → KEEP
    C → KEEP

    D → COLLECT
    E → COLLECT
*/


/*
===========================================================
8. CIRCULAR REFERENCES
===========================================================

A common misconception:

    "If two objects reference each other,
     garbage collection cannot remove them."

This is NOT true for modern tracing garbage collectors.
*/


let objectA = {};
let objectB = {};

objectA.other = objectB;
objectB.other = objectA;

/*
Conceptually:

    objectA ───────► objectB
       ▲                |
       |                |
       └────────────────┘

There is a circular reference.
*/


objectA = null;
objectB = null;

/*
Now:

    objectA → null
    objectB → null


But the two objects still reference each other internally:

    Object A ◄──────► Object B


However, neither object can be reached from a GC root.

Therefore:

    Object A → unreachable
    Object B → unreachable

Both can eventually be garbage collected.

IMPORTANT:

    GC is based on REACHABILITY,
    not simply on whether references form a cycle.
*/


/*
===========================================================
9. REFERENCE COUNTING VS TRACING GC
===========================================================

REFERENCE COUNTING:

Each object keeps track of how many references point to it.

Example:

    A ─────► B
    C ─────► B

B has two references.

If the count becomes 0:

    B → garbage


PROBLEM:

Circular references can cause problems.

    A ─────► B
    ▲        |
    |        |
    └────────┘

A and B reference each other.

Their reference counts are not zero.

But the entire cycle might be unreachable from the program.

Modern JavaScript engines use tracing-based garbage collection
techniques rather than relying on simple reference counting.
*/


/*
===========================================================
10. FUNCTIONS AND GARBAGE COLLECTION
===========================================================
*/

function createUser() {

    let user = {
        name: "Shishir"
    };

    return user;
}

let currentUser = createUser();

/*
After createUser() finishes:

    currentUser
        |
        v
    User Object


The object is STILL reachable.

Therefore:

    KEEP IT
*/


currentUser = null;

/*
Now:

    currentUser → null

If nothing else references the object:

    User Object → unreachable

Therefore:

    User Object → eligible for GC
*/


/*
===========================================================
11. CLOSURES AND GARBAGE COLLECTION
===========================================================

Closures are very important when discussing memory.
*/

function createCounter() {

    let count = 0;

    return function () {

        count++;

        return count;
    };
}

let counter = createCounter();

/*
createCounter() has finished executing.

Normally, local variables disappear after a function
execution finishes.

But `count` is still needed because the returned function
uses it.

Conceptually:

    counter
       |
       v
    Function
       |
       | closure
       v
    count = 0


The closure keeps `count` reachable.
*/


console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3


/*
Now remove the reference to the function:
*/

counter = null;

/*
If nothing else references that function or its closure:

    Function → unreachable
        |
        v
    count → unreachable

They become eligible for garbage collection.
*/


/*
===========================================================
12. MEMORY LEAK
===========================================================

A memory leak occurs when your program unintentionally keeps
objects reachable even though they are no longer needed.

Example:
*/

const users = [];

function addUser(user) {
    users.push(user);
}

addUser({
    name: "Alice"
});

addUser({
    name: "Bob"
});

addUser({
    name: "Charlie"
});

/*
Conceptually:

    users
      |
      +----> Alice
      |
      +----> Bob
      |
      +----> Charlie


All objects are reachable through `users`.

Therefore GC cannot remove them.

If your application keeps adding objects forever:

    users
      |
      +----> Object
      +----> Object
      +----> Object
      +----> Object
      +----> Object
      +----> ...
      
Memory usage can continuously grow.

This can become a MEMORY LEAK.
*/


/*
===========================================================
13. COMMON CAUSES OF MEMORY LEAKS
===========================================================

1. Unnecessary global references
2. Growing arrays/maps/caches
3. Event listeners that are never removed
4. Timers that continue running
5. Closures unintentionally retaining large objects
6. Long-lived objects holding references to short-lived objects
*/


/*
===========================================================
14. EVENT LISTENER EXAMPLE
===========================================================

Example concept:

*/

function handleClick() {
    console.log("Clicked");
}

// element.addEventListener("click", handleClick);

/*
If the listener is no longer needed, it may need to be
removed:

    element.removeEventListener("click", handleClick);

Otherwise, depending on what remains referenced and the
lifetime of the DOM/runtime objects, unnecessary references
can be retained.
*/


/*
===========================================================
15. TIMERS AND MEMORY
===========================================================

Consider:
*/

// const intervalId = setInterval(() => {
//     console.log("Running...");
// }, 1000);

/*
If the timer is no longer required, clear it:

    clearInterval(intervalId);

Long-lived timers can keep callbacks and anything they
actually retain reachable for longer than intended.
*/


/*
===========================================================
16. `delete` IS NOT GARBAGE COLLECTION
===========================================================

This:
*/

let product = {
    name: "Laptop",
    price: 100000
};

delete product.price;

/*
means:

    Remove the `price` property.

It does NOT mean:

    "Run garbage collection."

Similarly:
*/

product = null;

/*
This only removes the reference from `product`.

It does not guarantee immediate memory reclamation.
*/


/*
===========================================================
17. GENERATIONAL GARBAGE COLLECTION
===========================================================

Modern JavaScript engines use sophisticated GC strategies.

One important idea is:

                GENERATIONAL GC

The basic observation:

    Most newly created objects die young.

Conceptually:

    New Objects
         |
         v
    Young Generation
         |
         | survive collection
         v
    Older Generation


Short-lived objects can therefore be handled differently
from objects that survive for a long time.

This can improve garbage collection performance.
*/


/*
===========================================================
18. GARBAGE COLLECTION HAS A PERFORMANCE COST
===========================================================

GC is automatic, but it is NOT free.

The engine needs CPU time to:

    1. Find reachable objects
    2. Identify garbage
    3. Reclaim memory
    4. Potentially reorganize/compact memory


Therefore:

    Excessive allocations
            |
            v
      More GC pressure
            |
            v
       More GC work
            |
            v
    Potential performance impact
*/


/*
Example of creating many temporary objects:
*/

function createTemporaryObjects() {

    for (let i = 0; i < 100000; i++) {

        const data = {
            id: i,
            value: i * 2
        };

        // Use data...
    }
}

createTemporaryObjects();

/*
Many temporary objects may become unreachable after they
are no longer needed.

The engine will manage them automatically, but excessive
allocation in hot code can increase GC pressure.

IMPORTANT:

    Do NOT avoid objects blindly.

    Optimize only when profiling shows a real problem.
*/


/*
===========================================================
19. GARBAGE COLLECTION AND PERFORMANCE
===========================================================

As a developer, the goal is NOT:

    "Manually control garbage collection."

Instead:

    "Avoid unnecessary allocations and unnecessary
     long-lived references."

Good practices:

    - Remove unused event listeners
    - Clear unnecessary timers
    - Limit unbounded caches
    - Avoid retaining huge objects unnecessarily
    - Release references when they are genuinely no longer needed
    - Profile memory when investigating leaks
*/


/*
===========================================================
20. IMPORTANT DISTINCTION
===========================================================

These statements are DIFFERENT:

    Object is unreachable
            ↓
    Object is eligible for GC
            ↓
    Garbage collector runs
            ↓
    Memory may be reclaimed


Do NOT assume:

    unreachable === immediately deleted


That is incorrect.
*/


/*
===========================================================
21. COMPLETE GARBAGE COLLECTION MODEL
===========================================================


                    JavaScript Program
                           |
                           v
                    Objects created
                           |
                           v
                         Memory
                           |
                           v
                  Can object be reached
                    from a GC root?
                       /       \
                     YES        NO
                      |          |
                      v          v
                    KEEP      Eligible
                              for GC
                                 |
                                 v
                         Garbage Collector
                                 |
                                 v
                          Memory reclaimed


The key question is:

        "Is the object reachable?"
*/


/*
===========================================================
22. INTERVIEW-LEVEL SUMMARY
===========================================================

Q: What is garbage collection in JavaScript?

A:

    Garbage collection is JavaScript's automatic memory
    management mechanism that identifies objects that are
    no longer reachable from GC roots and eventually
    reclaims the memory occupied by those objects.


Q: Does setting an object to null immediately free memory?

A:

    No.

    It removes that reference. If no other references exist,
    the object becomes eligible for garbage collection.
    The engine decides when to actually reclaim the memory.


Q: How does JavaScript identify garbage?

A:

    Modern JavaScript engines primarily use tracing-based
    garbage collection. They start from GC roots, trace
    reachable objects, and identify unreachable objects
    as garbage.


Q: Can circular references cause memory leaks?

A:

    Circular references alone do not prevent modern tracing
    garbage collectors from collecting objects.

    The important factor is reachability from GC roots.


Q: What is a memory leak?

A:

    A memory leak occurs when an application unintentionally
    keeps objects reachable even though they are no longer
    needed, causing memory usage to grow.


===========================================================
FINAL MENTAL MODEL
===========================================================

                OBJECT CREATED
                      |
                      v
                 Stored in memory
                      |
                      v
                Is it reachable?
                  /         \
                YES          NO
                 |            |
                 v            v
               KEEP       Eligible for GC
                              |
                              v
                     Garbage Collector
                              |
                              v
                       Memory reclaimed


ONE-LINE INTERVIEW ANSWER:

"JavaScript uses automatic garbage collection to reclaim
memory occupied by objects that are no longer reachable
from garbage-collection roots."


MOST IMPORTANT WORD:

                REACHABILITY


Remember:

    Reachable      → Keep
    Unreachable    → Eligible for GC
    Eligible       → NOT necessarily immediately collected
*/
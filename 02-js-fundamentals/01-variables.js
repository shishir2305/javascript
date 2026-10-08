/*
==================================================
              JAVASCRIPT VARIABLES
==================================================

A variable is a named reference used to access a value.

Example:
*/

let age = 25;

/*
Here:

    age → variable
    25  → value


IMPORTANT:

JavaScript variables themselves do NOT have types.

VALUES have types.

So we can think of it as:

    age
     |
     v
    25
   Number


If we reassign it:

*/

age = "Hello";

/*
Now:

    age
     |
     v
   "Hello"
    String


The variable `age` itself did not become a String.

Instead, the variable now refers to a different value
whose type is String.


This is one of the reasons JavaScript is dynamically typed.


Another example:
*/

let value = 100;       // value is a Number
value = "JavaScript";  // value is a String
value = true;          // value is a Boolean

/*
The SAME variable can refer to values of different types.

Mental model:

    variable
       |
       v
     value
       |
       v
     type


IMPORTANT INTERVIEW POINT:

    Variables do not have types;
    the values they reference have types.
*/
// Definition: A do...while loop executes the body first,
// then checks the condition.

let count = 5;

do {
  console.log(count); // Prints 5 even though the condition is false
  count++;
} while (count <= 3);

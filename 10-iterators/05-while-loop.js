// Definition: A while loop checks its condition before each iteration.

let count = 1;

while (count <= 3) {
  console.log(count); // Prints 1, 2, 3
  count++; // Update the condition variable to avoid an infinite loop
}

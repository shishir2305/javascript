// Definition: continue skips the rest of the current iteration
// and proceeds to the next one.

for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;

  console.log(i); // Prints 1, 2, 4, 5
}

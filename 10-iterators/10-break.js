// Definition: break immediately terminates the nearest enclosing loop.

for (let i = 1; i <= 5; i++) {
  if (i === 3) break;

  console.log(i); // Prints 1, 2
}

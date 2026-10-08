// Shadowing occurs when an inner scope declares a variable with the same name.

let x = 10;

{
  let x = 20;

  console.log(x); // 20
}

console.log(x); // 10

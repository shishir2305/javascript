// setInterval() requests repeated callback execution at a specified interval.

let count = 0;

const intervalId = setInterval(() => {
  count++;

  console.log("Tick:", count);

  if (count === 3) {
    clearInterval(intervalId);
    console.log("Interval stopped");
  }
}, 1000);

// Typical output, approximately one second apart:
// Tick: 1
// Tick: 2
// Tick: 3
// Interval stopped
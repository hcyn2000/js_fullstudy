console.log(1); // 1

setTimeout(() => {
  console.log(2); // 8
});

process.nextTick(() => {
  console.log(3); // 4
});

setImmediate(() => {
  console.log(4); // 9
});

new Promise((resolve) => {
  console.log(5); // 2
  resolve();
  console.log(6); // 3
}).then(() => {
  console.log(7); // 5
});

Promise.resolve().then(() => {
  console.log(8); // 6
  process.nextTick(() => {
    console.log(9); // 7
  });
});

// 1 5 6 3 7 8 9 2 4
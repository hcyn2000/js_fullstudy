// setTimeout(() => {
//     console.log(1);
// }, 0);

// new Promise((resolve, reject) => {
//     console.log(2);    
// })

// 先输出2再输出1




console.log('script start');    // 1

async function async1() {
  console.log(123);   // 2
  await async2()  // 让出线程
  console.log('async1 end');  // 6
}

async function async2() {
  console.log('async2 end');  // 3
}
async1()

setTimeout(function () {
  console.log('setTimeout');  // 9
}, 0)

new Promise(resolve => {
  console.log('Promise'); // 4
  resolve()
})
  .then(() => {
    console.log('promise1'); // 7
  })
  .then(() => {
    console.log('promise2');  // 8
  })

console.log('script end');   // 5

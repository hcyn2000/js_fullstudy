// var name = "张三"
// var obj = {}
// console.log(name);


// 会报错   使用let 变量不会提升
// console.log(name);
// let name = "红尘"


// 会出现 i is not defined
// for (let i = 0; i < 10; i++) {
//     // console.log(i);
// }
// console.log(i)


// var a = []
// for (let i = 0; i < 10; i++) {
//     a[i] = function () {
//         console.log(i);
//     }
// }
// a[6]()


// for (let i = 0; i < 3; i++) {   //父作用域
//     let i = "abc"   //子作用域
//     console.log(i);
// }


// 暂时性死区
// var tmp = 123

// if (true) {
//     tmp = 'qwe'
//     let tmp
// }


var a = 'a'
var a = 'aa'
console.log(a);

// let 不允许重复声明变量
let b = 'b'
let b = 'bb'
console.log(b);
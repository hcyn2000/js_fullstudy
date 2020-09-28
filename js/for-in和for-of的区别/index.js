// const obj = {
//     a: 1,
//     b: 2,
//     c: 3,
// }

// for (let i in obj) {
//     console.log(i);     // a,b,c
// }
// for (let i of obj) {    // 报错
//     console.log(i);
// }




// const arr = ['a', 'b', 'c']
// for (let i in arr) {
//     console.log(i);     // 0,1,2    返回不是数组下标,是key值
// }
// for (let i of arr) {
//     console.log(i);     // a,b,c
// }




// const arr = ['a', 'b']
// arr.name = 'yn'

// Object.prototype.c = 3
// const obj = {
//     a: 1,
//     b: 2
// }
// for (let i of arr) {
//     console.log(i);     // a,b
// }

// for (let i in arr) {
//     console.log(i);     // 0, 1, name
// }
// for (let i in obj) {
//     console.log(i);     // a, b, c
// }


// 区别
// for...in 
// 1. 循环返回的都是数据结构的键值名
// 2. 遍历数组返回的是数组的下标
// 3. 不仅可以遍历数组键名，还会遍历原型上的值和手动添加的其他键
// 特殊情况下，for...in 遍历的顺序不会按照对象到的顺序进行

// for...of
// 1. 不能遍历对象
// 2. 返回的是数组的元素



// Symbol.iterator  迭代器
// 只有具备这个属性才能被for...of遍历
// 具备迭代器的数据结构有：数组，Map， Set，String，arguments 对象，Nodelist对象
// let str = 'abcd'
// for (let i of str) {
//     console.log(i);     // a,b,c,d
// }



// 对象中的常规属性和排序属性

//for...in
// 对象中的数字属性会被优先遍历，且按照顺序遍历
// ECMAScript 这个规范中定义了：数字属性(排序属性)应该按照索引值的大小升序，字符串属性(常规属性)根据创建时的顺序升序排列

function Foo() {
    this[100] = 'test-100'
    this[1] = 'test-1'
    this['b'] = 'bar-B'
    this[50] = 'test-50'
    this[9] = 'test-9'
    this[8] = 'test-8'
    this[3] = 'test-3'
    this[5] = 'test-5'
    this['A'] = 'bar-A'
    this['C'] = 'bar-C'
}

let bar = new Foo
// console.log(bar);

for (let key in bar) {
    console.log(`index:${key} value:${bar[key]}`);
}
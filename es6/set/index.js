
// const s = new Set()     //类数组
// const arr = new Array()     ==const arr = []
// console.log(s);     //Set(0) {}
// let arr = [2, 3, 4, 5, 3, 4, 8]
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let item of arr) {
//     console.log(item);
// }

// arr.forEach((x) => {    //.forEach()遍历数组
//     s.add(x)
// })


// const set = new Set([1, 2, 3, 4, 4])
// console.log(set);   //Set(4) { 1, 2, 3, 4 }

// const set = new Set([1, 2, 3, 4, 4, 5, 5])
// console.log(set.size);   // 5

// const set = new Set(document.querySelectorAll('div'))   //假如有两个div
// console.log(set.size);      // 2


//数组去掉重复
// let arr = [2, 3, 4, 5, 3, 4, 8]
// console.log([...new Set(arr)]);     //[ 2, 3, 4, 5, 8 ]


// let arr = [2, 3, 4, 5, 3, 4, 8]//splice() 方法向/从数组中添加/删除项目，然后返回被删除的项目
// console.log(arr.splice(3, 1));      //[5]


// let arr = [2, 3, 4, 5, 3, 4, 8]
// console.log(arr.indexOf(5));    //下标为3


//字符串去掉重复
// console.log([...new Set('qweqweqwe')]);     //[ 'q', 'w', 'e' ]


// const set = new Set()
// set.add(5)
// set.add('5')
// console.log(set); Set(2) { 5, '5' }

// const set = new Set()
// let a = NaN
// let b = NaN
// set.add(a)
// set.add(b)
// console.log(set);   //Set(1) { NaN }

// const set = new Set()
// set.add({ name: 'hh' })
// set.add({ name: 'hh' })
// console.log(set);       // Set(2) { { name: 'hh' }, { name: 'hh' } }


// const set = new Set()
// set.add(1).add(2).add(3)
// set.delete(2)    删除元素为2
// console.log(set);   //Set(2) { 1, 3 }
// console.log(set.has(3));   //true    查看set里有没有元素3
// set.clear()     //清空所有成员
// console.log(set);   //Set(0) {}


// Array.from(['a', 'b', 'c']).forEach(e => {
//     console.log(e);
// })

// const set = new Set([1, 2, 3, 4])
// const array = Array.from(set)
// array.forEach(e => {
//     console.log(e);
// })

// 数组去除重复
// function de(array) {
//     return Array.from(new Set(array))
// }
// console.log(de([1, 1, 2, 2, 3, 3]));

// set遍历
let set = new Set(['qwe', 'rty', 'tyu'])
// keys()是set结构中返回键名得遍历器
for (let i of set.keys()) {
    // console.log(i);
}
// values()是set结构中返回值得遍历器
for (let i of set.values()) {
    // console.log(i);
}
// entries()是set结构中返回键值对遍历器
for (let i of set.entries()) {
    console.log(i);
}
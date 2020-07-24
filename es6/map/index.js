// let obj = {
//     name: '红尘',
//     age: 18,
//     sex: 'man'
// }
// obj.height = '111cm'
// const m = new Map()
// console.log(m);      //Map{}
// m.set(obj, 'content')
// console.log(m); //Map(1) { { name: '红尘', age: 18, sex: 'man' } => 'content' }

// console.log(m.get(obj));    //content

// console.log(m.has(obj));    //true  查看是否存在obj

// m.delete(obj)   //删除obj


// const map = new Map([
//     ['name', '哈哈哈'],
//     ['age', '14']
// ])
// console.log(map);   //Map(2) { 'name' => '哈哈哈', 'age' => '14' }
// console.log(map.has('name'));       //true
// console.log(map.get('name'));       //哈哈哈
// const items = [
//     ['name', '哈哈哈'],
//     ['age', '14']
// ]
// const map = new Map()
// items.forEach(([key, walue]) => {
//     map.set(key, walue)
// })
// console.log(map);   //Map(2) { 'name' => '哈哈哈', 'age' => '14' }


// const set = new Set([
//     ['foo', 1],
//     ['bar', 2]
// ])
// const m1 = new Map(set)
// // console.log(set);   //Set(2) { [ 'foo', 1 ], [ 'bar', 2 ] }
// console.log(m1);    //Map(2) { 'foo' => 1, 'bar' => 2 }


// const m = new Map()
// const k1 = ['a']
// const k2 = ['a']
// m.set(k1, 111).set(k2, 222)   //k1和k2值相同，在Map中也被认为是两个键
// console.log(m);     //Map(2) { [ 'a' ] => 111, [ 'a' ] => 222 }


// const m = new Map()
// //0和-0 默认就是一个键
// m.set(+0, 123)
// m.set(-0, 123)
// console.log(m); //Map(1) { 0 => 123 }


// const map = new Map()
// map.set(true, 1)
// map.set('true', 2)
// map.set(undefined, 3)
// map.set(null, 4)
// map.set(NaN, 5)     //NaN默认就是一个键
// map.set(NaN, 6)
// console.log(map);   //Map(5) { true => 1, 'true' => 2, undefined => 3, null => 4, NaN => 6 }


const map = new Map([
    ['foo', 'no'],
    ['bar', 'yes']
])
//keys() 返回键名的遍历器
for (let key of map.keys()) {
    // console.log(key);
}
//values() 返回键值的遍历器
for (let key of map.values()) {
    // console.log(key);
}
//entries() 返回成员的遍历器
for (let key of map.entries()) {
    // console.log(key);
}

map.forEach((e) => {
    // console.log(e);
})

let k = [...map.keys()]
let val = [...map.values()]
let m2 = [...map]
console.log(k);     //[ 'foo', 'bar' ]
console.log(val);   //[ 'no', 'yes' ]
console.log(m2);    //[ [ 'foo', 'no' ], [ 'bar', 'yes' ] ]
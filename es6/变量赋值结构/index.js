let a = 1
let b = 2
let c = 3

数组的结构
let [a, b, c] = [1, 2, 3]
let [foo, [[bar], baz]] = [1, [[2], 3]]
console.log(baz);   //3

let [, , third] = ['a', 'b', 'c']
console.log(third);     //c

let [x, y] = [1, 2, 3]
console.log(y);     //2

let [hedd, ...tail] = [1, 2, 3, 4]
console.log(hedd, tail);    //1 , [ 2, 3, 4 ]

let [a, b, ...c] = ['hello']
console.log(a, b, c);       //hello ,undefined ,[]

let [foo, bar] = [1]
console.log(bar);   //undefined

let [foo] = 1 //false NaN undefined null
console.log(foo);   //报错

let [foo = true] = []
console.log(foo);   //true
let [x, y = 'aaa'] = ['a', undefined]   //undefined 结构出来默认赋值不成功
console.log(x, y);   //a aaa
let [x, y = 'aaa'] = ['a', null]
console.log(x, y);   //a nuull

let [x = 1, y = x] = []
console.log(x, y);  //1 1
let [x = 1, y = x] = [2]
console.log(x, y);  //2 2
let [x = 1, y = x] = [2, 3]
console.log(x, y);  //2 3

let { foo, bar } = { foo: 'aaa', bar: 'bbb' }
console.log(foo, bar);      //aaa bbb
let { foo, bar } = { b: 'aaa', bb: 'bbb' }
console.log(foo, bar);      //undefined undefined

let obj = {
    name: '红尘',
    age: 8
}
let { name, age } = obj
console.log(name, age);     //红尘 8

let { foo: baz } = { foo: 'aaa', bar: 'bbb' }
console.log(foo);   //报错
console.log(baz);   //aaa   foo是匹配模式，baz才是变量
console.log(bar);   //报错

let obj = {
    name: '一诺',
    desc: {
        alone: false,
        age: 18,
        sanwei: [50, 100, 120]
    }
}
let { name, desc: { alone, age, sanwei: [x, y, z] } } = obj
console.log(name, alone, age, x, y, z)       //一诺 false 18 50 100 120

let { x = 3 } = { x: undefined }
console.log(x);     //3
let { x = 3 } = { x: null }
console.log(x);     //null

// 注意！！
let x
({ x } = { x: 1 })  //已经声明好的变量再结构赋值需要加括号括起来
console.log(x);     //1


字符串结构
let [a, b, c, d, e] = 'hello'
console.log(a, b, c, d, e);     //h ,e ,l ,l ,o

let { length: len } = 'hello'
console.log(len);   //5


数值和布尔值的解构赋值
let { toString: s } = 123
console.log(s === Number.prototype.toString);     //true    s是字符串类型
let { toString: s } = true
console.log(s === Boolean.prototype.toString);     //true    s是字符串类型
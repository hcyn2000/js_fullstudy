// function identify(context) {
//     return context.toUpperCase()
// }
// function speak(context) {
//     let greeting = "Hello, I'm" + identify(context)
//     console.log(greeting);
// }
// speak('me')


// function identify() {
//     return this.name.toUpperCase()
// }
// function speak() {
//     let greeting = "Hello, I'm" + identify.call(this)
//     console.log(greeting);
// }

// let me = {
//     name: 'hc'
// }
// speak.call(me)

// this所处的词法作用域在哪里生效了，this作用域就指向哪里
// function foo() {
//     let person = {
//         name: 'wn',
//         age: 18
//     }
//     console.log(this);
// }

// function bar() {
//     let person = {
//         name: 'hc',
//         age: '20'
//     }
//     foo()
// }
// bar()


// function foo() {
//     // "use strict"
//     console.log(this.a);
// }
// var a = 2;
// (function () {
//     "use strict"
//     foo()   // 严格模式下的foo调用与位置无关
// })()


// function foo() {
//     console.log(this.a);    //
// }
// var obj2 = {
//     a: 3,
//     foo: foo
// }

// var obj1 = {
//     a: 2,
//     obj2: obj2
// }
// obj1.obj2.foo()   //foo此刻被obj所拥有


// function foo() {
//     console.log(this.a);
// }
// function doFoo(fn) {    //参数传递其实又称为隐式赋值
//     fn()
// }
// var obj = {
//     a: 2,
//     foo: foo
// }
// // var bar = obj.foo;
// var a = 'hello'
// // bar()
// // doFoo(obj.foo)


// function foo() {
//     console.log(this.a);
// }

// var obj = {
//     a: 2,
//     foo: foo
// }
// var bar = obj.foo
// console.log(bar());



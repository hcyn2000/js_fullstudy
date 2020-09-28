
// let _this = this

// Person.prototype.naem = 'hc'
// function Person() {
//     // var this = {
//     //     __proto__: Person.prototype
//     // }
// }
// var person = new Person()
// // console.log(person);


// var obj = {
//     name: '红尘'
// }
// // console.log(person.__proto__);  //{name: 'hc'}
// person.__proto__ = obj
// console.log(person.__proto__);



Person.prototype.name = 'hc'
function Person() {

}
var person = new Person()
// Person.prototype.name = 'yn'
Person.prototype = {    //把原型重新赋值
    name: 'yn'
}
console.log(person.name);
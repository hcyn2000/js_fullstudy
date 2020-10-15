function Person() { }   // prototype    Function

Person.prototype = {
    name: '小花',
    constructor: Person
}
// 拦截Person.prototype把constructor变成不可枚举
Object.defineProperty(Person.prototype, 'constructor', {
    enumerable: false,
    value: Person
})

var p2 = new Person()
console.log(p2.constructor);    // [Function: Person]
Object.prototype.a = 'Object';
Function.prototype.a = 'Function';
function Person() { };
var child = new Person();
console.log(Person.a);
console.log(child.a);
console.log(child.__proto__.__proto__.constructor.constructor.constructor);
// child.__proto__ = Person.prototype
// Person.prototype.__proto__ = Object.prototype
// Object.prototype.constructor = Object
// Object 是内置的函数
// Object.constructor = Function
// Function.constructor = Function

// Person.prototype --> Person的原型
// Person.prototype    函数被定义出来就天生具备的一个属性，prototype是一个{}

Person.prototype.name = 'yn'
Person.prototype.say = function () {
    console.log('giao');
}

function Person() {
    this.name = 'hc'
}
var person = new Person()
console.log(person.name);   // 从原型上继承来的

var person1 = new Person()
console.log(person1.name);

persons.say()
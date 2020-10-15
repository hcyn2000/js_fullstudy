function SuperType(name) {
    this.name = name
    this.color = ['red', 'blue', 'green']
}

SuperType.prototype.sayName = function () {
    console.log(this.name);
}

function SubType(name, age) {
    SuperType.call(this, name)
    this.age = age
}

// SubType.prototype = new SuperType()
SubType.prototype = Object.create(SuperType.prototype)  // 寄生组合继承
SubType.prototype.constructor = SubType
SubType.prototype.sayAge = function () {
    console.log(this.age);
}

let instance1 = new SubType('hc', 20)
instance1.color.push('pink')
console.log(instance1.color);
instance1.sayAge()
instance1.sayName()
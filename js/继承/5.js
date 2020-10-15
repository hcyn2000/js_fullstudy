function SuperType() {
    this.color = ['red', 'blue', 'green']
}

function SubType() {
    SuperType.call(this)
}

let instance1 = new SubType()
instance1.color.push('pink')
console.log(instance1.color);   // ['red','blue','green','pink']

let instance2 = new SubType()
console.log(instance2.color);   // ['red','blue','green']
function newFunc(Fn) {
    let o = {}
    o.__prtot__ = Fn.prototype
    Fn.call(o, arguments)
    return o
}

function Fn(name, age) {
    this.name = name
    this.age = age
}
let fn = new Fn()
// new Fn() --->  {}
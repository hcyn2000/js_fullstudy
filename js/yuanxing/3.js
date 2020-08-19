
// Person.prototype.lastName = 'Wu'

// function Person(name) {
//     this.name = name
// }
// var person = new Person('long')
// // console.log(person.lastName);
// // person.lastName = 'hong'
// // Person.prototype.lastName = 'hong'
// // console.log(person);


// // 删除
// delete person.lastName
// console.log(person.lastName); 'Wu'



function Bus() {

}
Car.prototype = {
    constructor: Bus
}

function Car() {

}
var car = new Car()
// console.log(car.constructor);   //构造器    就是function Car(){}
// console.log(Car.prototype);
// constructor 为了让Car()构造出的所有的对象都能找到他自己的构造器

console.log(car.constructor);
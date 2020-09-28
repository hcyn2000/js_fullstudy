
Person.prototype = {
    // name: 'hc',
    // sayName: function () {
    //     console.log(this.name);
    // }
    heigth: 100
}
function Person() {
    // this.name = 'yn'
    this.eat = function () {
        this.heigth++
    }
}

let person = new Person()
// console.log(person.sayNames());   // hc
// console.log(person.sayNames());   // yn

person.eat()
console.log(person.heigth);
console.log(Person.prototype.heigth);
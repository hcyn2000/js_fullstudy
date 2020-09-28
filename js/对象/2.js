// 构造函数
function Student(name, age, sex) {
    // var this = {
    //     name: '',
    //     age:''
    // }
    this.name = name
    this.age = age
    this.sex = sex
    this.grade = 2017
    return 123
    // return this
}

var student = new Student('hc', 18, 'boy')
console.log(student);



// function Person(name, age) {
//     var that = {}
//     that.name = name
//     that.age = age
//     return that
// }
// var person = Person('lll', 18)
// console.log(person);
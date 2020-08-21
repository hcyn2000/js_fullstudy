var num = 213
// num.toString() ---> new Number(num).toString()
console.log(num.toString());    // '213'


// 方法重写
Object.prototype.toString = function () {
    return 'lalala'
}

function person() {

}
var person = new Person()
console.log(person.toString());     // 'lalala'
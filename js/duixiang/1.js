// 对象
var hc = {
    name: 'hongC',
    age: '18',
    sex: 'boy',
    health: 100,
    smoke: function () {
        console.log('I am cool');
        this.health--
    },
    drink: function () {
        console.log('I am drink');
        this.health++
    }
}
// hc.smoke()
// hc.drink()
// console.log(hc.health);



// 增
// hc.boy = 'yn'
// console.log(hc);

// 查
// console.log(hc.sex);

// 修改
// hc.sex = 'girl'
// console.log(hc.sex);

// 删除
// delete hc.name
// delete hc.sex
// console.log(hc.sex);



// 对象创建
// var obj = {}    // 1.对象字面量 | 对象直接量

// 2. 构造函数
// 1)
// let a = new Object()    //var obj = {}   //两者没有区别
// let b = new Object()

// 2)
function Car(color) {
    this.color = color
    this.name = 'BMW'
    this.height = '1400'
    this.lang = '4900'
    this.weight = 1000
    this.health = 100
    this.run = function () {
        this.health--
    }
}
var car = new Car('black')
var car1 = new Car('blue')

car.name = '红旗'
car1.name = '劳斯莱斯'

car.run()
car1.run()

console.log(car);
console.log(car1);
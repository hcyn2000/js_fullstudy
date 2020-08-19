
// Car.prototype.height = 1400
// Car.prototype.lang = 4900
// Car.prototype.carName = '兰博基尼'

Car.prototype = {
    height = 1400,
    lang = 4900,
    carName = '兰博基尼'
}

function Car(color, owner) {
    this.color = color
    this.owner = owner
    //this.carName = '兰博基尼'     //耦合度高（重复性高）
    //this.lang = 4900
    //this.height = 1400
}

var car = new Car('blue', 'yn')
var car1 = new Car('green', 'long')
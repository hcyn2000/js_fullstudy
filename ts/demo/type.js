var _a;
var isDone = false; // Boolean类型
// isDone = 123 // 报错
var count = 10; // 数字类型
var nickname = 'yn'; // 字符串类型
var people = Symbol('hc'); //symbol类型
var sym = Symbol();
var obj = (_a = {},
    _a[sym] = 'yn',
    _a);
console.log(obj[sym]);
// Array
// let list: number[] = [1, 2, 3]  // 规定数组里面是数字类型(写法一)
var list = [1, 2, 3]; // 泛型定义(写法二)
// Enum
// 数字枚举
var Direction;
(function (Direction) {
    Direction[Direction["EAST"] = 3] = "EAST";
    Direction[Direction["SOUTH"] = 4] = "SOUTH";
    Direction[Direction["WEST"] = 5] = "WEST";
    Direction[Direction["NORTH"] = 6] = "NORTH";
})(Direction || (Direction = {}));
var dir = Direction.NORTH; // 6

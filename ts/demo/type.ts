import { dir } from "console"

let isDone: boolean = false // Boolean类型
// isDone = 123 // 报错

let count: number = 10  // 数字类型

let nickname: string = 'yn' // 字符串类型

let people: symbol = Symbol('hc') //symbol类型

const sym = Symbol()
let obj = {
  [sym]: 'yn'
}
console.log(obj[sym]);

// Array
// let list: number[] = [1, 2, 3]  // 规定数组里面是数字类型(写法一)
let list: Array<number> = [1, 2, 3]   // 泛型定义(写法二)


// Enum
// 数字枚举
// enum Direction {
//   EAST = 3,
//   SOUTH,
//   WEST,
//   NORTH
// }

// let dir: Direction = Direction.NORTH  // 6
console.log(dir);


// 字符串枚举
enum Direction {
  EAST = 'EAST',
  SOUTH = 'SOUTH',
  WEST = 'WEST',
  NORTH = 'NORTH'
}

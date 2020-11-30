
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
enum Direction {
  EAST,
  SOUTH,
  WEST,
  NORTH
}

let dir: Direction = Direction.NORTH  // 3
let dirVal = Direction[0] // EAST
console.log(dir, dirVal);


// 字符串枚举
// enum Direction {
//   EAST = 'EAST',
//   SOUTH = 'SOUTH',
//   WEST = 'WEST',
//   NORTH = 'NORTH'
// }


// 异构枚举
enum Enum {
  A,
  B,
  C = 'c',
  D = 'd',
  E = 8,
  F
}


// any  可以被任何类型赋值，可以被赋值成任何类型  不确定是什么类型的时候可以用any 尽量不要用
let notSuer: any = 666
notSuer = 'hello'

let test: number = notSuer


// unKnown  可以被任何类型赋值，不可以被赋值成任何类型，
let value: unknown
value = true
value = 123
value = 'hello'

let value1: unknown = value
let value2: any = value
// let value3:number = value // 报错
// let value4:string = value // 报错


// tuple类型  元组
let tupleType: [string, boolean]
tupleType = ['yn', true]


// void类型
function User(): void {
  console.log('hello');
}


// null undefined
let u: undefined = undefined
let n: null = null

let num: number = u
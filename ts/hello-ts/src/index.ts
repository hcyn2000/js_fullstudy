// function greeter(person: string) {
//     return "hello" + person
// }
// // greeter(user)
// const user = "hc"



// // 类型
// // let isLoading: boolean = false
// // isLoading = 123

// // let num = 6
// // num = '8'

// // let book: string = "图解"

// // void 空值    (ts新增)
// function warnUser(): void {

// }
// let a: void = undefined     //特例（undefined可以赋值给void类型）

// let aa: undefined = undefined

// Symbol 唯一值(es6新增)
let sym1 = Symbol('key1')
let sym2 = Symbol('key1')

// BigInt
let max = BigInt(Number.MAX_SAFE_INTEGER)
let max1 = max + 1n
let max2 = max + 2n
console.log(max1 === max2);

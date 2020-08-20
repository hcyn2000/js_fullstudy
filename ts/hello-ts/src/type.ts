// 其他常见的类型

// any
// let notSure: any = 4
// notSure = 'abc'

// let value: any;
// value = true
// value = 1
// value = 'hello'
// value = Symbol('type')
// value = {}
// value = []
// value.foo.bar
// value()
// new value()
// value[1][2]

// unknown
// let value2: unknown;
// value2 = true
// value2 = 1
// value2 = 'hello'
// value2 = Symbol('type')
// value2 = {}
// value2 = []
// 以下都会报错
// value2.foo.bar
// value2()
// new value2()
// value2[1][2]


// never
// let empty: never[] = []
// // empty.push(1)
// function error(message: string): never {
//     throw new Error(message)
// }


// 数组
let list: string[] = ['1', '2']
let list1: Array<number> = [1, 2, 3]   // 泛型
// 元组
let list2: (string | number)[] = ['1', 2]


// 对象
let obj: object
obj = [1]
obj = [1, '2']
obj = {}
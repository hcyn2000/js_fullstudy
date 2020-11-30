// 可变 (mutable)
// 不可变 (immutable)

let a = { a: 1 }
let b = a
b.a = 2 // 会影响a

let b1 = {
  ...a
}
b1.a = 2  // 不会影响a


let c = [123]
c.push(4)
c.concat(5) // 不可变
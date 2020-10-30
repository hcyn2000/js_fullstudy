
function curry(fn, len = fn.length) {
  return _curry.call(this, fn, len)
}
function _curry(fn, len, ...args) {
  // console.log(...args, '----');
  return function (...params) {
    let _args = [...args, ...params]
    if (_args.length >= len) {
      return fn.apply(this, _args)
    } else {
      return _curry.call(this, fn, len, ..._args)
    }
  }
  // return function (b) { 
  //   return function (c) { 
  //     return function (d) { 
  //       return function (e) { 
  //         console.log(a, b, c, d, e);
  //       }
  //     }
  //   }
  // }
}


function fn(a, b, c, d, e) {
  console.log(a, b, c, d, e);
}
let _fn = curry(fn)
// _fn(1, 2, 3, 4, 5)
_fn(1)(2)(3, 4, 5)
// _fn(1, 2)(3, 4)(5)
// _curry(1)(2)(3)(4)(5)


// function sum(a, b, c) {
//   console.log(a + b + c);
// }
// let _sum = curry(sum)
// let a = _sum(1)
// let b = a(2)
// b(3)




// 降低函数的通用性，提高函数的适用性
// function checkByRegExp(regExp, string) {
//   return regExp.test(string)
// }

// let _check = curry(checkByRegExp)
// let checkCellPhone = _check(/^1\d{10}$/)
// let checkEmail = _check(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/)
// checkByRegExp(/^1\d{10}$/, '17826864511')
// checkByRegExp(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/, '652501825@qq.com')




// let list = [
//   {
//     name: 'hc'
//   },
//   {
//     name: 'yn'
//   }
// ]

// let _names = list.map(function (item) {
//   return item.name
// })
// // 柯里化
// let prop = curry(function (key, obj) {
//   return obj[key]
// })

// let namese = list.map(prop('name'))
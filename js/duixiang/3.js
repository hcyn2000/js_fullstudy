// 包装类
// var num = 123    // 创建字面量
// num.abc = 'abc'
// console.log(num);   //123


// var num = new Number(123)   // 创建Number对象
// num.abc = 'abc'
// console.log(num.abc);   //abc
// console.log(num * 2);   //246
// num 参与运算又变回了数字，不参与运算它还能当做对象来使用
// 能有属性和方法，同理字符串和布尔也一样
// 但是 null 和 undefined 不行


// var str = '1234'
// console.log(str.length);    //4

// var num = 4
// num.len = 3
// console.log(num.len);   //undefined


// 包装类
// var num = 4
// num.len = 3
// console.log(num.len);
// 隐式过程
// new Number(4).len = 3
// delete len
// new Number(4).len



// 考点
// var arr = [1, 2, 3, 4, 5]
// arr.length = 2
// console.log(arr);

var str = 'abcd'
str.length = 2
console.log(str.length);
// 隐式过程
// new String('abcd').length = 2
// delete length
// new String('abcd').length
// 这是一个字符串对象，天生就具备length属性



// 面试题
var str = 'abc'
str += 1
var test = typeof (str)
if (test.length == 6) {
    test.sign = 'typeOf的返回结果可能为String'
}
console.log(test.sign);
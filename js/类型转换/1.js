// String Boolean Number Undefined Null Object

// var a = 1
// var b = new Number(1)

//原始值转布尔
// console.log(Boolean());         //false
// console.log(Boolean(false));    //false
// console.log(Boolean(undefined));//false
// console.log(Boolean(null));     //false
// console.log(Boolean(+0));       //false
// console.log(Boolean(-0));       //false
// console.log(Boolean(''));       //false


// 原始值转数字
// console.log(Number());          //0
// console.log(Number(undefined)); //NaN
// console.log(Number(null));      //0
// console.log(Number(false));     //0
// console.log(Number(true));      //1
// console.log(Number('123'));     //123
// console.log(Number('-123'));    //-123
// console.log(Number('000123'));  //123
// console.log(Number('-000123')); //-123
// console.log(Number(0x11));      //17
// console.log(Number(''));        //0
// console.log(Number('123 123')); //NaN
// console.log(Number('hc'));      //NaN
// console.log(Number('100a'));    //NaN
// console.log(parseInt('3 abc')); //3
// console.log(parseInt('3.14 abc')); //3
// console.log(parseFloat('3.14 abc'));    //3.14


// 原始值转字符串
// var a = 'aaa'
// var b = new String('bbb')
// console.log(String());              //''
// console.log(String(undefined));     //undefined
// console.log(String(null));          //null
// console.log(String(false));            //false
// console.log(String(true));             //true
// console.log(String(-0));               //0
// console.log(String(NaN));              //NaN
// console.log(String(1));                //1



// 原始值转对象
// 原始值通过调用 String() Number() 或者 Boolean() 构造函数 转化为它们
// var a = 'aaa'
// console.log(typeof a);      ///String
// var b = new Number(a)
// console.log(typeof b);      //Object


// 对象转布尔值
// console.log(Boolean(new Boolean(false)));   //true

// 对象转字符串和数字
// toString    valuOf

var a = {
    b: 1
}
// console.log(Object.prototype.toString.call(a));//判断数据类型
// a.toString() == Object.prototype.toString.call(a)
console.log(a.toString())                   //[object Object]
console.log([].toString())                  //空  
console.log([1, 2, 3].toString())           //1,2,3
console.log([0].toString())                 //0
console.log((function () { var a = 1 }).toString())     //function () { var a = 1 }
console.log(new Date().toString())             //Wed Aug 12 2020 12:15:02 GMT+0800 (新加坡标准时间)
console.log(new Date().valueOf())              //1597205702020

var a = 10
function foo(a) {
    var b = a + 2
    function bar(c) {
        console.log(window.a, b, c);    //10,4,12
    }
    bar(b * 3)
}
foo(2)
// console.log(b);  报错

//全局作用域下面只有一个 foo
// foo作用域下面有 a, b, bar
// bar作用域下面有 c

// 隐藏内部实现

// var b
// function foo(a) {
//     b = a + bar(a * 2)
//     console.log(b * 3);
// }
// function bar(a) {
//     return a - 1
// }
// foo(2)

// //更优雅

// function foo(a) {
//     var b
//     function bar(a) {
//         return a - 1
//     }
//     b = a + bar(a * 2)
//     console.log(b * 3);
// }

// foo(2)

//规避冲突
function foo() {

    function bar(a) {
        i = 3
    }
}
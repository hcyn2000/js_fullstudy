// 显示绑定
// function foo() {
//     console.log(this.a);
// }

// var obj = {
//     a: 2,
//     foo: foo
// }
// foo.call(obj)

// call
// var a = {
//     user: '哈哈哈',
//     fn: function (q, w) {
//         console.log(this.user);
//         console.log(q + w);
//     }
// }
// var b = a.fn
// b.call(a, 1, 2)



// apply
// var a = {
//     user: '哈哈哈',
//     fn: function (q, w) {
//         console.log(this.user);
//         console.log(q + w);
//     }
// }
// var b = a.fn
// b.apply(a, [10, 11])
// // var arr = [100, 200]
// // b.apply(a, arr)
// // b.apply(null)   //指向window



var a = {
    user: '哈哈哈',
    fn: function (q, w, e) {
        console.log(this.user);     //哈哈哈
        console.log(q, w, e);       //10,20,30
    }
}
var b = a.fn
var c = b.bind(a, 10, 20, 30)
c(1, 2, 3)
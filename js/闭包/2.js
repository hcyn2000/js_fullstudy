function a() {
    function b() {
        var bbb = 234
        console.log(aaa);   //看上去报错，实际上有值，这就是闭包
    }
    var aaa = 123
    return b    //b出生在a里面，但是被保存出去了
}
var glob = 100
var demo = a()
demo()
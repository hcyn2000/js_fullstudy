// js是单线程的

function a() {
    console.log('一诺');
}

function b() {
    setTimeout(() => {
        console.log('红尘');
    }, 1000)

}
function c() {
    console.log('哈哈哈');
}

b()
a()
c()
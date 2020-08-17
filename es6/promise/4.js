function a() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log('aaa');
            resolve('ok')
        }, 1000)
    })
}
function b() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log('bbb');
            resolve('yes')
        }, 1500)
    })
}
function c() {
    setTimeout(() => {
        console.log('ccc');
    }, 500)
}
function d() {
    setTimeout(() => {
        console.log('ddd');
    }, 3000)
}

function e() {
    console.log('eee');
}

// Promise pending(进行中)  resolve(已成功)  reject(已失败)

// finally  不管promise最后是个什么状态，都能走进finally里
// a().then(b).catch(c).finally(d)

// all  a和b执行完了执行e
// Promise.all([a(), b()]).then(e)

// race a和b谁执行的速度快谁先执行，然后执行e，再执行a和b慢的那个
Promise.race([a(), b()]).then(e)
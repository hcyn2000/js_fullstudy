let xq = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log('蜗牛哥开始相亲了！！！');
        resolve('相亲成功了！嘿嘿')
    }, 2000)
})

xq
    .then((res) => {
        // console.log(res);
        return marry()
    }).then((res) => {
        // console.log(res);
        return baby1()
    }).then((res) => {
        if (res == '小') {
            baby2()
        }
    })

function marry() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log('蜗牛哥终于结婚了！！！');
            resolve('蜗牛结婚顺利')
        }, 1000)
    })

}


function baby1() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log('小蜗牛出生了');
            resolve('小')
        }, 500)
    })
}

function baby2() {
    setTimeout(() => {
        console.log('小小蜗牛出生了');
    }, 400)
}

// xq()
// marry()
// baby1()
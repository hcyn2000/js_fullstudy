Function.prototype.myCall = function (context) {
    // 判断this指向调用call的是不是对象
    if (typeof this !== 'function') {
        // 调用call的不是函数
        throw new TypeError('Error')
    }


    const args = arguments[1]
    context = context || window
    const fn = Symbol('fn')
    context[fn] = this
    const result = context[fn](...args)
    delete context[fn]
    return result
}

let obj = {
    name: 'yn',

}

fn.apply(obj, [1, 2, 3])
Function.prototype.myCall = function (context) {
    // 判断this指向调用call的是不是对象
    if (typeof this !== 'function') {
        // 调用call的不是函数
        throw new TypeError('Error')
    }

    const fn = Symbol('fn')
    const args = [...arguments].slice(1)
    // 写了就代表谁，没写代表window
    context = context || window
    // 将调用call函数的对象添加到context的属性中
    context[fn] = this
    // 执行该属性
    const result = context[fn](...args)
    // 删除该属性
    delete context[fn]
    // 返回执行结果
    return result
}
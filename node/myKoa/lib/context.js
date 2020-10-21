let proto = {}

function defineGetter(prop, name) {  // prop 代表对象    name 代表对象上的属性
  proto.__defineGetter__(name, function () {  // 每个对象都有__defineGetter__方法，用它实现代理
    return this[prop][name]   // url === 
  })
}

function defineSetter(prop, name) {
  proto.__defineSetter__(name, function (val) {  // 每个对象都有__defineGetter__方法，用它实现代理
    this[prop][name] = val
  })
}

defineGetter('request', 'url')
defineGetter('request', 'path')
defineGetter('response', 'body')

defineSetter('response', 'body')

module.exports = proto
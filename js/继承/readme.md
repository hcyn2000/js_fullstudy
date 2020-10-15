# new 实现原理      1.js


# 输出了什么？      2.js
函数一定有prototype，该属性一定会指向函数的原型对象(Function),默认情况下，所有的原型对象都自动获得一个constructor属性,这个属性指向了prototype所在的函数

p2的Person.prototype的值已经变成{ name: '小花' }。它是没有constructor属性的，所以Person会让你向上委托找到 Object


# 修改了prototype后，仍想让p2.constructor指向person     3.js
手动加一个constructor属性


# 原型链继承    4.js
缺点: 
  1. 现有的实例会继承多余的属性，且这些属性是共享的
  2. 子类型实例无法向超类型函数传递参数


# 解决原型链继承的缺点  5.js
借用构造函数继承
- 在子类的构造函数中调用超类的构造函数  (注意绑定this)
缺点:
  1. 超类中的方法无法复用
  2. 无法继承超类原型上的属性


# 组合继承    6.js

# 寄生组合继承
const mod = require('./a')
// 导入基本数据类型的值就是把导出的值复制(拷贝)一份过来
// 导入对象是引用传递
// 如果一个模块被require了两次，他会把上一次的结果缓存起来
console.log(mod.c, mod.obj);   // 3
mod.inc()
console.log(mod.c, mod.obj);   // 3
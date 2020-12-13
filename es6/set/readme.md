# set
1. set类似于数组，但是不一样的地方是set这种数据结构内部的成员是唯一值
2. 
  通过add()方法向内部添加成员, 
  通过delete()删除成员,
  通过has判断是否存在某一个元素,
  通过clear清空所有成员
3. 通过size属性获取长度
4. 向Set加入值得时候，不会默认做类型转换，所以 5 和 '5' 是不相等的
5. NaN === NaN  => false 但是Set中认为是全等
6. 对象{} 对于Set来说也是不全等的

## 遍历操作
  Set 结构的实例有四个遍历方法，可以用于遍历成员:
    Set.prototype.keys()：返回键名的遍历器
    Set.prototype.values()：返回键值的遍历器
    Set.prototype.entries()：返回键值对的遍历器
    Set.prototype.forEach()：使用回调函数遍历每个成员
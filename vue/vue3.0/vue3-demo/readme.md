# vue3.0 与vue2.0的差别

1. template里面不再需要根节点，减少了没意义的dom
2. 使用Composition API    (2.0使用的是options API)
3. 完美支持treeshaking, 用不上的不打包



组件: 
  fragment: 不在需要一个无用的根节点
  teleport: 可以透明dom节点插入
  suspense: 更好的实现异步组件
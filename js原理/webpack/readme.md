 hook 生命周期: 
  compole 开始编译
  make 从入口分析依赖以及间接依赖模块，创建模块对象
  build-module 把不同的模块打包在一起
  emit 输入到 dist 目录
  done完成
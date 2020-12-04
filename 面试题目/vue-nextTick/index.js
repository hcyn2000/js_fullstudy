// 在下次DOM更新循环结束后执行延迟回调，再修改数据之后立即使用这个方法，获得更新后的DOM

// 1. DOM更新循环是指的什么？
// 2. 下次更新是什么时候？
// 3. 修改数据使用之后，是加快了数据更新的进度吗？
// 4. 什么时候使用？


vm.massage = 'yn'

Vue.nextTick(function () {
  console.log(vm.$el.textContent);
})


import Vue from 'vue'
import App from './App.vue'

// 导出一个工厂函数
export function createApp() {
  const app = new Vue({
    render: h => h(App)
  })
  return { app }
}
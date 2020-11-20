import { createApp } from './app'

const { app } = createApp()

app.$mount('#app')   // 渲染在浏览器上面

// 同构(服务端渲染) 一份代码即在服务端运行，也可以在客户端运行
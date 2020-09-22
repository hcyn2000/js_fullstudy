
// document.getElementById('app').innerHTML = 'hello world'
// let str = 'babel'
// let func = s => {
//     document.getElementById('app').innerHTML = `hello ${s}`
// }
// func(str)

import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount("#app")
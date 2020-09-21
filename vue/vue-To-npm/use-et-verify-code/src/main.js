import Vue from 'vue'
import App from './App.vue'
import EtVerifyCode from 'yn-verify-code'

Vue.use(EtVerifyCode)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

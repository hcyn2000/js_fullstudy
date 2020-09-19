import Vue from 'vue'
import Vuex from 'vuex'

import com from './com.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    com
  }
})

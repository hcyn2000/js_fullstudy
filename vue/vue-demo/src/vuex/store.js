import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 1
}

const getters = { //计算属性
  count: (state) => {
    return state.count += 100
  }
}

const mutations = {
  add(state) {
    state.count++
  },
  reduce(state) {
    state.count--
  }
}

const actions = { // 提交mutations里面的方法
  addAction(context) {
    context.commit('add')
    // setTimeout(() => {
    // context.commit('add')
    // }, 2000)

    // console.log('我先执行了');
  }
}

const moduleA = {
  tate,
  mutations,
  getters,
  actions
}

export default new Vuex.Store({
  modules: {
    a: moduleA
  }
})
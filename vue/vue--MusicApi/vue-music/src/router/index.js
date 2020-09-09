import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const search = () => import('@/views/search')

const routes = [
  {
    path: '/search',
    name: 'search',
    component: search
  }
]

const router = new VueRouter({
  linkActiveClass: 'active',  //linkActive 添加的类名
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

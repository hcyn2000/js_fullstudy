import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'StarNotes',
    component: () => import('@/views/StarNotes.vue'),
    meta: {
      title: '舔🐶日记'
    }
  },
  {
    path: '/StarBanner',
    name: 'StarBanner',
    component: () => import('@/views/StarBanner.vue'),
    meta: {
      title: '欢迎来到舔🐶日记'
    }
  },
  {
    path: '/StarLogin',
    name: 'StarLogin',
    component: () => import('@/views/StarLogin.vue'),
    meta: {
      title: '登录界面'
    }
  },
  {
    path: '/StarRegister',
    name: 'StarRegister',
    component: () => import('@/views/StarRegister.vue'),
    meta: {
      title: '注册界面'
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

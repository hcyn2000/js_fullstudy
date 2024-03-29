import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/HelloWorld'
import Hi from '@/components/Hi.vue'
// import Hi1 from '@/components/Hi1.vue'
import Hi2 from '@/components/Hi2.vue'
import Error from '@/components/Error'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Hello',
            component: Hello
            // alias: 'yn'
        },
        {
            path: '*',
            component: Error
        },
        {
            path: '/hi',
            name: 'Hi',
            component: Hi,
            children: [
                {
                    path: 'hi1',
                    name: 'hi1',
                    // component: Hi1
                    redirect: '/'   //点击hi1会跳到'/'
                }, {
                    path: 'hi2',
                    component: Hi2,
                    alias: 'hc'     //输入hc也能访问页面
                }
            ]
        },
        {
            path: '/abc',
            name: 'abc',
            component: Error,
            beforeEnter: (to, from, next) => {
                console.log('进入404页面');
                console.log(to);
                console.log(from);
                next()
            }
        }
    ]
})
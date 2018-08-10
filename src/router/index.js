import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import Home from '@/views/home'// 首页相关
Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    base: '/',
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    },
    routes: [{
        path: '/',
        name: 'home',
        redirect: '/home',
        component: Home,
        meta: {
            requiresAuth: true
        },
        children: [
             {
             path: '/home',         
             component: resolve => require(['../assets/home/'], resolve),
             }, 
             {
             path: '/test',         
             component: resolve => require(['../assets/test/'], resolve),
             }, 
        ]
    }]
})

// 导航钩子(router拦截、验证是否登录)
// router.beforeEach((to, from, next) => {
//     // 检查登录状态，判断该路由是否需要登录权限
//     if (to.matched.some(record => record.meta.requiresAuth)) {
//         // 通过session判断用户是否登录，新标签页打开则进入登录页自动重新登录
//         if (window.sessionStorage.IS_USER_LOGINED == 'Y') {
//             next()
//         } else {
//             next({
//                 path: '/login'
//             })
//         }
//     } else {
//         next()
//     }
// })

export default router
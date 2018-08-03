import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

// 首页相关
import Home from '@/views/home'


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
             path: '/details',         
             component: resolve => require(['../assets/details/'], resolve),
             }, 
             {
            path: '/test',         
             component: resolve => require(['../assets/test/'], resolve),
            //  children: [
            //           {
            //               path:'/dashboard', //主页
            //               component: resolve => require(['../assets/home/dashboard'], resolve),
            //            }]
             }, 
        ]
    }]
})

// 导航钩子
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
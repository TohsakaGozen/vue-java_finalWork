import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
let router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/login',
            name: 'login',
            component: () => import("@/pages/Login"),
        },
        {
            path: '/home',
            name: 'home',
            component: () => import("@/pages/Home"),
        },
        {
            path: '/success:code?',
            name: 'success',
            component: () => import("@/pages/Success"),
        },
        {
            path: '/',
            redirect: '/home'
        },
    ]
})

export default router
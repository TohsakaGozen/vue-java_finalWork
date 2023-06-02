import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import store from '../store'
let router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/login',
            name: 'login',
            component: () => import("@/pages/Login"),
            meta: { headerShow: true }
        },
        {
            path: '/home',
            name: 'home',
            component: () => import("@/pages/Home"),
        },
        {
            path: '/details:path1?',
            name: 'details',
            component: () => import("@/pages/Details"),
        },
        {
            path: '/success:code?',
            name: 'success',
            component: () => import("@/pages/Success"),
        },
        {
            path: '/shopCar',
            name: 'shopCar',
            component: () => import("@/pages/ShopCar"),
        },
        {
            path: '/trade',
            name: 'trade',
            component: () => import("@/pages/Trade"),
        },
        {
            path: '/orderCenter',
            name: 'orderCenter',
            component: () => import("@/pages/OrderCenter"),
        },
        {
            path: '/',
            redirect: '/home'
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
})

//重复触发了同一个路由。
//这个错误是 vur - router更新以后新出现的错误,以下代码可抛出该错误
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}


//配置路由守卫(全局前置守卫)
router.beforeEach(async (to, from, next) => {
    console.log(store.state.user.token, '11111')
    let username = store.state.user.token
    if (username) {//登录
        if (to.path == '/login') {
            next('/home')
        }
    } else {//未登录
        if (to.path == '/home' || to.name == 'details' || to.path == '/login') {
            next()
        } else {
            next('/login')
            alert('请先登录')
        }
    }
})

export default router
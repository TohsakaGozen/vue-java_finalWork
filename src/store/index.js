import Vue from "vue";
import Vuex from 'vuex'
//需要使用插件一次
Vue.use(Vuex)

import user from './user'
import shopCar from './shopCar'
//对外暴露Store类的一个实例
export default new Vuex.Store({
    //实现Vuex仓库模块式开发存储数据
    modules: {
        user,
        shopCar
    }
})
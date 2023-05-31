import axios from "axios"
import { login_git, reqUserInfo, login, register } from "@/api"

const state = {
    token: JSON.parse(localStorage.getItem('token')) || '',
    username: ''
}
const actions = {
    async getToken({ commit }, code) {
        let data = {
            grant_type: "authorization_code",
            code: code,
            client_id: "11932fab08db243baeb357860a3bd7d86989ea43dc9dafdee185e4ee077afd2a",
            redirect_uri: "http://10.131.119.37:8080/success",
            client_secret: "f958cfe9e181e66cffd95256f90ae0ae75bff34e7a396097f5363fbb70e6715a"
        }
        let result = await login_git(data)
        commit("GETTOKEN", result)
    },
    async login({ commit }, data) {
        let result = await login(data)
        console.log(result)
        commit("LOGIN", result)
    },
    async getUserInfo({ commit, state }) {
        try {
            let result = await reqUserInfo(state.token)
            console.log(result)
            commit("GETUSERINFO", result)
        } catch (error) {
            console.log(error)
        }

    },
    async register({ commit }, data) {
        let result = await register(data)
        console.log(result)
        if (result.data == "此账号与密码已重复") {
            return Promise.reject(new Error(result.data))
        } else {
            return Promise.resolve("注册成功")
        }

    },
    exitLogin({ commit }) {
        commit('EXITLOGIN')
    }

}
const mutations = {
    GETTOKEN(state, result) {
        console.log(result)
        state.token = result.data.access_token
        localStorage.setItem('token', JSON.stringify(state.token))
    },
    GETUSERINFO(state, result) {
        state.username = result.data.name
    },
    LOGIN(state, result) {
        state.username = result.data.username
    },
    EXITLOGIN() {
        localStorage.removeItem('token')
        state.token = ''
        state.username = ''
    }
}
const getters = {}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
}
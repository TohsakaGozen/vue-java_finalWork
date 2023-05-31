import requset from './request'
import axios from 'axios'
export const login_git = (data) => axios.post(`https://gitee.com/oauth/token`, data)

export const reqUserInfo = (token) => axios.get(`https://gitee.com/api/v5/user?access_token=${token}`)

export const login = (data) => requset.post(`/login`, data)

export const register = (data) => requset.post('/save', data)
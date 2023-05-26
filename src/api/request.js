import axios from "axios";

let request = axios.create({
    baseURL: '/api',
    timeout: 30000,
})

export default request
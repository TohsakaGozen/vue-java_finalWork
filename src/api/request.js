import axios from "axios";

let request = axios.create({
    baseURL: '/api',
    timeout: 3000,
})

export default request
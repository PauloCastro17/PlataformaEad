import axios from 'axios';

export const key = '137c24b1ea919bfdee796660f1df243d533628d5'

const api = axios.create({
    baseURL: 'http://localhost:3004/'
})

export default api;
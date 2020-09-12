import axios from 'axios'

const api = axios.create({
    baseURL:"http://localhost:1264"
})

export default api;
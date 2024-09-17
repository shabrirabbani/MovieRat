import axios from 'axios'


const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {
        'accept': 'application/json'
    }
})

axiosInstance.interceptors.request.use(
    (config) => {
        config.params = {
            ...config.params,
            api_key: import.meta.env.VITE_API_KEY
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default axiosInstance



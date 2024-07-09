import axios from 'axios'
import { API_URL } from '../api/APIUrl'

const axiosInstance = axios.create({
    baseURL: API_URL,
})


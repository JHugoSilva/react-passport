import Axios from 'axios'

export const rootUrl = 'http://127.0.0.1:8000/'
export const baseUrl = 'http://127.0.0.1:3000/'

export const Http = Axios.create({
    baseURL: rootUrl
})
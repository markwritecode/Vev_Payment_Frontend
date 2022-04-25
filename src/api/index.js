import axios from 'axios'

export const liveAxios = axios.create({
    baseURL: 'http://api.getyournin.com/api/',
})

const token = localStorage.getItem('ichor-token-key')

export const poster = async (url, { data } = { data: {} }) => {
    liveAxios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    const response = await liveAxios.post(url, data)
    return response;
}

export const getter = async url => {
    liveAxios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    const response = await liveAxios.get(url)
    return response;
}
import axios from 'axios'

export const liveAxios = axios.create({
    baseURL: 'http://api.getyournin.com/api/',
})

export const poster = async (url, { data } = { data: {} }) => {
    // liveAxios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    const response = await liveAxios.post(url, data, {
        headers: { Authorization: `Bearer ${localStorage.getItem('ichor-token-key')}` }
    })
    return response;
}

export const getter = async url => {
    // liveAxios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    const response = await liveAxios.get(url, {
        headers: { Authorization: `Bearer ${localStorage.getItem('ichor-token-key')}` }
    })
    return response;
}
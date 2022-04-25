import { createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { liveAxios } from '../api'
import { queryClient } from '../App'

const authContext = createContext()

const AuthProvider = ({ children }) => {

    const navigate = useNavigate()

    const token = localStorage.getItem('ichor-token-key')

    const [auth, setAuth] = useState(() => token ? true : false)

    const signin = (key, data) => {
        queryClient.clear()
        localStorage.setItem('ichor-token-key', key)
        localStorage.setItem('ichor-user-data', JSON.stringify(data))
        setAuth(true)
    }
    const signout = () => {
        // localStorage.removeItem('ichor-token-key')
        queryClient.clear()
        localStorage.clear()
        delete liveAxios.defaults.headers.common["Authorization"]
        setAuth(false)
        navigate('/')
    }

    const action = (type, key, data) => {
        if (type === 'signin') signin(key, data)
        else if (type === 'signout') signout()
    }

    return (
        <authContext.Provider value={[auth, action]}>
            {children}
        </authContext.Provider>
    )
}

export default AuthProvider

export const useAuth = () => useContext(authContext)
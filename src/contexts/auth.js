import { createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { liveAxios } from '../api'
import { queryClient } from '../App'

const authContext = createContext()

const AuthProvider = ({ children }) => {

    const navigate = useNavigate()

    const token = localStorage.getItem('ichor-token-key')

    const [auth, setAuth] = useState(() => token ? true : false)
    const [signup, setSignUp] = useState(false)

    const signin = (key, data, signup) => {
        localStorage.setItem('ichor-token-key', key)
        localStorage.setItem('ichor-user-data', JSON.stringify(data))
        setAuth(true)
        signup && setSignUp(true)
        navigate('/')
    }
    const signout = () => {
        // localStorage.removeItem('ichor-token-key')
        queryClient.clear()
        localStorage.clear()
        delete liveAxios.defaults.headers.common["Authorization"]
        setAuth(false)
        navigate('/')
    }

    const action = (type, key, data, signup) => {
        if (type === 'signin') signin(key, data, signup)
        else if (type === 'signout') signout()
    }

    return (
        <authContext.Provider value={{ auth, signup, setSignUp, action }}>
            {children}
        </authContext.Provider>
    )
}

export default AuthProvider

export const useAuth = () => useContext(authContext)
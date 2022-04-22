import { createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const authContext = createContext()

const AuthProvider = ({ children }) => {

    const navigate = useNavigate()

    const token = localStorage.getItem('ichor-token-key')

    const [auth, setAuth] = useState(() => token ? true : false)

    const signin = key => {
        localStorage.setItem('ichor-token-key', key)
        setAuth(true)
    }
    const signout = () => {
        // localStorage.removeItem('ichor-token-key')
        localStorage.clear()
        setAuth(false)
        navigate('/')
    }

    const action = (type, key) => {
        if (type === 'signin') signin(key)
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
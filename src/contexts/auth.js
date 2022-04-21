import { createContext, useContext, useState } from 'react'

const authContext = createContext()

const AuthProvider = ({ children }) => {

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
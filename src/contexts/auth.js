import { createContext, useContext, useState } from 'react'

const authContext = createContext()

const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState(false)

    const signin = () => setAuth(true)
    const signout = () => setAuth(false)

    const action = type => {
        if (type === 'signin') signin()
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
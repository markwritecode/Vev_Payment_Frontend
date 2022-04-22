import { useMutation } from 'react-query'
import { poster } from '../../api'
import { useAuth } from '../../contexts/auth'
import useHandleNotifications from '../notifications'

export const useCreateUser = callback => {

    const handleNotify = useHandleNotifications()

    return useMutation(data =>
        poster(`user/create`, {
            data
        }), {
        onSuccess: async response => {
            if (response.data?.status === 'ok') {
                callback()
                handleNotify('success', 'User created successfully, please sign in.')
            } else {
                handleNotify('error')
            }
        },
        onError: error => {
            handleNotify('error', error.message)
        },
    })
}

export const useSignIn = () => {

    const handleNotify = useHandleNotifications()
    const [, action] = useAuth()

    return useMutation(data =>
        poster(`user/login`, {
            data
        }), {
        onSuccess: async response => {
            if (response.data?.status === 'ok') {
                action('signin', response?.data?.token)
                handleNotify('success', 'Sign in successful')
            } else {
                handleNotify('error')
            }
        },
        onError: error => {
            handleNotify('error', error.message)
        },
    })
}
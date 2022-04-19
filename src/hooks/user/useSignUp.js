import { useMutation } from 'react-query'
import { poster } from '../invoice/useInvoice'
import useHandleNotifications from '../notifications/useHandleNotifications'

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

export const useSignIn = callback => {

    const handleNotify = useHandleNotifications()

    return useMutation(data =>
        poster(`user/login`, {
            data
        }), {
        onSuccess: async response => {
            if (response.data?.status === 'ok') {
                callback()
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
import { useMutation } from 'react-query'
import { poster } from '../../api'
import { queryClient } from '../../App'
import { useAuth } from '../../contexts/auth'
import { endpoints } from '../../utils/helperVariables'
import useHandleNotifications from '../utilities/useHandleNotifications'

export const usePoster = (url, success, invalidate, callback) => {

    const handleNotify = useHandleNotifications()

    return useMutation(data =>
        poster(url, {
            data
        }), {
        onSuccess: async response => {
            if (response.data?.status === 'ok') {
                invalidate && await queryClient.invalidateQueries(invalidate)
                callback && callback(response?.data)
                success && handleNotify('success', success)
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
        poster(endpoints.USER_LOGIN, {
            data
        }), {
        onSuccess: async response => {
            if (response.data?.status === 'ok') {
                action('signin', response?.data?.token, response?.data?.user)
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
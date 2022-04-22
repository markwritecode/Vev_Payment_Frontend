import { useMutation } from 'react-query'
import { poster } from '../../api'
import useHandleNotifications from '../notifications'

export const useCreateTransactions = callback => {

    const handleNotify = useHandleNotifications()

    return useMutation(data =>
        poster(`transaction/invoice/payment`, {
            data
        }), {
        onSuccess: async response => {
            if (response.data?.status === 'ok') {
                callback()
                handleNotify('success', 'Transaction logged')
            } else {
                handleNotify('error')
            }
        },
        onError: error => {
            handleNotify('error', error.message)
        },
    })
}
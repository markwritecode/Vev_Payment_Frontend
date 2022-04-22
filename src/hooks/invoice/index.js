import { useMutation, useQuery } from 'react-query'
import { getter, poster } from '../../api'
import { queryClient } from '../../App'
import useHandleNotifications from '../notifications'

export const useCreateInvoice = callback => {

    const handleNotify = useHandleNotifications()

    return useMutation(data =>
        poster(`invoice/create`, {
            data
        }), {
        onSuccess: async response => {
            if (response.data?.status === 'ok') {
                await queryClient.invalidateQueries(['invoice', 'show'])
                callback()
                handleNotify('success', 'Invoice created successfully')
            } else {
                handleNotify('error')
            }
        },
        onError: error => {
            handleNotify('error', error.message)
        },
    })
}

export const useDeleteInvoice = () => {

    const handleNotify = useHandleNotifications()

    return useMutation(data =>
        poster(`invoice/delete`, {
            data
        }), {
        onSuccess: async response => {
            if (response.data?.status === 'ok') {
                await queryClient.invalidateQueries(['invoice', 'show'])
                handleNotify('success', 'Invoice deleted successfully')
            } else {
                handleNotify('error')
            }
        },
        onError: (error) => {
            handleNotify('error', error)
        },
    })
}

export const useUpdateInvoice = callback => {

    const handleNotify = useHandleNotifications()

    return useMutation(data =>
        poster(`invoice/update`, {
            data
        }), {
        onSuccess: async response => {
            if (response.data?.status === 'ok') {
                await queryClient.invalidateQueries(['invoice', 'show'])
                callback()
                handleNotify('success', 'Invoice updated successfully')
            } else {
                handleNotify('error')
            }
        },
        onError: (error) => {
            handleNotify('error', error)
        },
    })
}

export const useQueryEmail = callback => {

    const handleNotify = useHandleNotifications()

    return useMutation(data =>
        poster(`user/show`, {
            data
        }), {
        onSuccess: async response => {
            if (response.data?.status === 'ok') {
                // await queryClient.invalidateQueries(['invoice', 'show'])
                // handleNotify('success', 'Invoice updated successfully')
            } else {
                handleNotify('error')
            }
        },
        onError: (error) => {
            handleNotify('error', error)
        },
    })
}

export const usePullInvoice = () => {

    const url = `invoice/show/0/100`

    const { isLoading, data } = useQuery(['invoice', 'show'], () => getter(url).then((response) => {
        return response?.data?.invoices
    }), {
        refetchOnMount: false,
    })

    return { pullInvoiceLoading: isLoading, pulledInvoice: data }
}

export const usePullInvoiceById = ref => {

    const url = `invoice/showbyid?invoice_ref=${ref}`

    const { isLoading, data } = useQuery(['invoice', 'showbyid', ref], () => getter(url).then((response) => {
        return response?.data
    }), {
        refetchOnMount: false,
    })

    return { pullInvoiceByIdLoading: isLoading, pulledInvoiceById: data }
    
}
import axios from 'axios'
import { useMutation, useQuery } from 'react-query'
import useHandleNotifications from '../notifications/useHandleNotifications';

export const liveAxios = axios.create({
    baseURL: 'http://api.getyournin.com/api/',
});

export const poster = async (url, { data } = { data: {} }) => {
    const response = await liveAxios.post(url, data)
    return response;
}

export const getter = async url => {
    const response = await liveAxios.get(url)
    return response;
}

export const useCreateInvoice = callback => {

    const handleNotify = useHandleNotifications()

    return useMutation(data =>
        poster(`invoice/create`, {
            data
        }), {
        onSuccess: response => {
            if (response.data?.status === 'ok') {
                callback()
                handleNotify('success', 'Invoice created successfully')
            } else {
                handleNotify('error')
            }
        },
        onError: error => {
            handleNotify('error', error)
        },
    })
}

export const useDeleteInvoice = () => {

    const handleNotify = useHandleNotifications()

    return useMutation(data =>
        poster(`invoice/delete`, {
            data
        }), {
        onSuccess: response => {
            if (response.data?.status === 'ok') {
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

export const usePullInvoice = () => {

    const url = `invoice/show`

    const { isLoading, data } = useQuery(['invoice', 'show'], () => getter(url).then((response) => {
        return response?.data?.invoices
    }), {
        refetchOnMount: false,
    })

    return { pullInvoiceLoading: isLoading, pulledInvoice: data }
}

export const usePullInvoiceById = ref => {

    const url = `invoice/showbyid?invoice_ref=${ref}`

    const { isLoading, data } = useQuery(['invoice', 'showbyid'], () => getter(url).then((response) => {
        return response?.data
    }), {
        refetchOnMount: false,
    })

    return { pullInvoiceByIdLoading: isLoading, pulledInvoiceById: data }
    
}
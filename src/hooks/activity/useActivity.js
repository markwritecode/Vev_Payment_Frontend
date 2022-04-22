import { useQuery } from 'react-query'
import { getter } from '../invoice/useInvoice'

export const usePullActivity = () => {

    const url = `activity/show`

    const { isLoading, data, refetch } = useQuery(['activity', 'show'], () => getter(url).then((response) => {
        return response?.data?.activity
    }), {
        refetchOnMount: false,
    })

    return { pullActivityLoading: isLoading, pulledActivity: data, refetch }
}

export const usePullActivityDetails = ref => {

    const url = `activity/details/${ref}`

    const { isLoading, data, refetch, isRefetching } = useQuery(['activity', 'details', ref], () => getter(url).then((response) => {
        return response?.data
    }), {
        refetchOnMount: false,
    })

    return { pullActivityDetailsLoading: isLoading, pullActivityDetails: data, refetch, isRefetching }
    
}
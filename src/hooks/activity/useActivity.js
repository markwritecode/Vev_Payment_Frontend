import { useQuery } from 'react-query'
import { getter } from '../invoice/useInvoice'

export const usePullActivity = () => {

    const url = `activity/show`

    const { isLoading, data } = useQuery(['activity', 'show'], () => getter(url).then((response) => {
        return response?.data?.activity
    }), {
        refetchOnMount: false,
    })

    return { pullActivityLoading: isLoading, pulledActivity: data }
}
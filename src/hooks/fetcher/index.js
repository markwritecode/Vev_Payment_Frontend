import { useQuery } from 'react-query'
import { getter } from '../../api'

export const useFetcher = url => {
    return useQuery(url.split('/'), () =>
        getter(url).then((response) => response?.data)
    )
}

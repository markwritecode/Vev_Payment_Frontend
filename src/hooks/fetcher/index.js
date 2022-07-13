import { useQuery } from 'react-query'
import { getter } from '../../api'
import { useAuth } from '../../contexts/auth'

export const useFetcher = url => {

    const { action } = useAuth()

    return useQuery(url.split('/'), () =>
        getter(url)
            .then((response) => response?.data)
            .catch(error => {
                error?.response?.status === Number(401) && action('signout')
            })
    )
}

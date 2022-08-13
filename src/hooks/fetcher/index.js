import { useQuery } from 'react-query'
import { getter } from '../../api'
import { useAuth } from '../../contexts/auth'

export const useFetcher = url => {

    const { signout } = useAuth()

    return useQuery(url.split('/'), () =>
        url && getter(url)
            .then((response) => response?.data)
            .catch(error => {
                error?.response?.status === Number(401) && signout()
            })
    )
}

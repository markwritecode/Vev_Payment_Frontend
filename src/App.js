import { useNavigate } from 'react-router-dom'
import './App.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import Authenticated from './components/AuthMode/Authenticated'
import UnAuthenticated from './components/AuthMode/UnAuthenticated'
import { useAuth } from './contexts/auth'
import { useEffect } from 'react'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: 30000,
    },
  },
})

const App = () => {

  const [auth] = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth])

  return (
    <QueryClientProvider client={queryClient}>
      {auth ? <Authenticated /> : <UnAuthenticated />}
    </QueryClientProvider>
  )
}

export default App
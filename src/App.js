import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import Authenticated from './components/AuthMode/Authenticated'
import UnAuthenticated from './components/AuthMode/UnAuthenticated'
import { useAuth } from './contexts/auth'

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

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        {auth ? <Authenticated /> : <UnAuthenticated />}
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
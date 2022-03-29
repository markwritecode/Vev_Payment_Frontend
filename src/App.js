import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Invoice from './pages/Invoice'
import './App.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import Transactions from './pages/Transactions'

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
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='invoice' element={<Invoice />} />
          <Route path='transactions' element={<Transactions />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
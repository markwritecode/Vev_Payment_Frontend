import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Invoice from './pages/Invoice'
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='invoice' element={<Invoice />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
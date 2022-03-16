import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Invoice from './pages/Invoice'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Invoice />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
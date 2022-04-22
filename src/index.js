import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'antd/dist/antd.min.css'
import './index.css'
import AuthProvider from './contexts/auth'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
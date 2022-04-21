import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'antd/lib/avatar/style/index.css'
import 'antd/lib/drawer/style/index.css'
import 'antd/lib/modal/style/index.css'
import 'antd/lib/message/style/index.css'
import 'antd/lib/notification/style/index.css'
import 'antd/lib/form/style/index.css'
import 'antd/lib/input/style/index.css'
import 'antd/lib/input-number/style/index.css'
import 'antd/lib/select/style/index.css'
import 'antd/lib/dropdown/style/index.css'
// import 'antd/lib/button/style/index.css'
import 'antd/lib/menu/style/index.css'
import 'antd/lib/popconfirm/style/index.css'
import 'antd/lib/table/style/index.css'
import 'antd/lib/style/index.css'
import './index.css'
import AuthProvider from './contexts/auth'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
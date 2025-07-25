import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.NODE_ENV === 'production' ? '/' : '/'}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)

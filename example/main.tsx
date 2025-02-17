import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '../src/styles/globals.css'  // Make sure this path is correct

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'



//  temporally import demo project as app.jsx from TodolistV2
import App from './TodolistV2/app.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { CardProvider } from './context/CardContex'


ReactDOM.createRoot(document.getElementById('root')).render(
    <CardProvider>
         <App />
    </CardProvider>
)

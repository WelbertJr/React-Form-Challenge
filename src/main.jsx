import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/global.css'
import Home from "./pages/home/Home"
import Sucess from './pages/sucess/Sucess'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home/>
    <Sucess/>
  </React.StrictMode>
)


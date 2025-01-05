
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { StrictMode } from 'react'
import Navbar from './components/custom/Navbar'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
  <App/>
    </StrictMode>
  ,
)

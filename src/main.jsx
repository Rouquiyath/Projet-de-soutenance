import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import favicon from './assets/Images/Favicon.png'

const faviconLink = document.querySelector('link[rel="icon"]')
if (faviconLink) faviconLink.href = favicon

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

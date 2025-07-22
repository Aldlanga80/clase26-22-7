import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Home } from './pages/Home'
import { RouterApp } from './router/RouterApp'
import "./index.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterApp />
  </StrictMode>,
)

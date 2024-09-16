import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './challenges/challenge3/App.tsx'
// import App from './challenges/challenge1/App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)

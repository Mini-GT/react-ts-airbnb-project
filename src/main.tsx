import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './challenges/challenge3/App.tsx'
// import App from './challenges/challenge1/App.tsx'
// import App from './challenges/PracticingProps/App'
// import App from './challenges/passingPropsToCard/App'
// import { App } from './challenges/renderArrays/App'
import App from './challenges/mappingJokes/App'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)

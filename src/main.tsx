import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Los estilos globales primero, para que los de cada componente puedan sobrescribirlos
import './presentation/styles/global.css'
import { App } from './presentation/App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

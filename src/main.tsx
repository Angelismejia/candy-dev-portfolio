import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Los estilos globales primero, para que los de cada componente puedan sobrescribirlos
import './presentation/styles/global.css'
import { App } from './presentation/App'
import { LanguageProvider } from './presentation/i18n/LanguageProvider'

// Activa las fuentes de Google (en index.html cargan sin bloquear la página)
document.getElementById('fuentes')?.setAttribute('media', 'all')

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>,
)

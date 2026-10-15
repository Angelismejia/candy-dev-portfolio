import { useEffect, useMemo, useState, type ReactNode } from 'react'
import type { Language } from '../../domain/entities/Portfolio'
import { LANGUAGE_KEY, LanguageContext } from './language'
import { ui } from './ui'

function savedLanguage(): Language {
  try {
    return localStorage.getItem(LANGUAGE_KEY) === 'en' ? 'en' : 'es'
  } catch {
    return 'es'
  }
}

// Guarda el idioma elegido para la próxima visita y lo marca en <html lang>
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(savedLanguage)

  useEffect(() => {
    document.documentElement.lang = language
    document.title = ui[language].meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', ui[language].meta.description)
    try {
      localStorage.setItem(LANGUAGE_KEY, language)
    } catch {
      // sin almacenamiento (modo privado): solo dura esta visita
    }
  }, [language])

  const value = useMemo(() => ({ language, setLanguage, t: ui[language] }), [language])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

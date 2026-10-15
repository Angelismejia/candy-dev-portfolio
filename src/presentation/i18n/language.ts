import { createContext, useContext } from 'react'
import type { Language } from '../../domain/entities/Portfolio'
import { ui, type UiText } from './ui'

export const LANGUAGE_KEY = 'idioma'

export interface LanguageState {
  language: Language
  setLanguage: (language: Language) => void
  t: UiText
}

export const LanguageContext = createContext<LanguageState>({
  language: 'es',
  setLanguage: () => {},
  t: ui.es,
})

// Idioma actual + textos de la interfaz en ese idioma
export function useLanguage() {
  return useContext(LanguageContext)
}

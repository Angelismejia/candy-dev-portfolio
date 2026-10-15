import { useEffect, useState } from 'react'

// Temas de color del sitio (los valores están en global.css, en :root[data-theme='...'])
export const THEMES = ['claro', 'oscuro', 'lavanda', 'rosa'] as const
export type Theme = (typeof THEMES)[number]

// index.html lee esta misma clave antes de pintar, para que no parpadee el tema
const THEME_KEY = 'tema'

function savedTheme(): Theme {
  try {
    const value = localStorage.getItem(THEME_KEY)
    return THEMES.includes(value as Theme) ? (value as Theme) : 'claro'
  } catch {
    return 'claro'
  }
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(savedTheme)

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'claro') root.removeAttribute('data-theme')
    else root.setAttribute('data-theme', theme)
    try {
      localStorage.setItem(THEME_KEY, theme)
    } catch {
      // sin almacenamiento (modo privado): solo dura esta visita
    }
  }, [theme])

  return { theme, setTheme }
}

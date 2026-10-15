import { useEffect, useRef, useState } from 'react'
import { THEMES, useTheme } from '../hooks/useTheme'
import { GlobeIcon, PaletteIcon } from './Icons'
import { useLanguage } from '../i18n/language'
import styles from './Preferences.module.css'

// Botones del navbar: paleta para elegir el tema de color y cambio de idioma
export function Preferences() {
  const { theme, setTheme } = useTheme()
  const { language, setLanguage, t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  // se cierra al tocar afuera o con Escape
  useEffect(() => {
    if (!isOpen) return
    const onPointer = (event: PointerEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) setIsOpen(false)
    }
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false)
    }
    document.addEventListener('pointerdown', onPointer)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onPointer)
      document.removeEventListener('keydown', onKey)
    }
  }, [isOpen])

  return (
    <div className={styles.preferences}>
      <div className={styles.themeMenu} ref={menuRef}>
        <button
          type="button"
          className={styles.button}
          aria-label={t.prefs.theme}
          title={t.prefs.theme}
          aria-expanded={isOpen}
          aria-haspopup="true"
          onClick={() => setIsOpen((open) => !open)}
        >
          <PaletteIcon size={20} />
        </button>

        {isOpen && (
          <ul className={styles.options} role="menu">
            {THEMES.map((option) => (
              <li key={option} role="none">
                <button
                  type="button"
                  role="menuitemradio"
                  aria-checked={theme === option}
                  className={`${styles.option} ${theme === option ? styles.active : ''}`}
                  onClick={() => {
                    setTheme(option)
                    setIsOpen(false)
                  }}
                >
                  <span className={styles.swatch} data-theme-swatch={option} aria-hidden="true" />
                  {t.prefs.themes[option]}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <button
        type="button"
        className={`${styles.button} ${styles.language}`}
        aria-label={t.prefs.language}
        title={t.prefs.language}
        onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
      >
        <GlobeIcon size={18} />
        {/* muestra el idioma al que se cambia */}
        <span>{language === 'es' ? 'EN' : 'ES'}</span>
      </button>
    </div>
  )
}

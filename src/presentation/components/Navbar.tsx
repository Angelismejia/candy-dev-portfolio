import { useEffect, useState } from 'react'
import { Logo } from './Logo'
import styles from './Navbar.module.css'

const links = [
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#formacion', label: 'Formación' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Con el menú del celular abierto: no se mueve la página de fondo y Escape lo cierra
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen])

  const close = () => setIsOpen(false)

  return (
    <header className={`${styles.header} ${isScrolled || isOpen ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <a href="#inicio" onClick={close} aria-label="Candy.dev, ir al inicio">
          <Logo />
        </a>

        <nav
          id="menu-principal"
          className={`${styles.nav} ${isOpen ? styles.open : ''}`}
          aria-label="Menú principal"
        >
          <ul className={styles.links}>
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={close}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a className={`btn btn-sm ${styles.cta}`} href="#contacto" onClick={close}>
            Hablemos
          </a>
        </nav>

        <button
          type="button"
          className={`${styles.toggle} ${isOpen ? styles.toggleOpen : ''}`}
          aria-expanded={isOpen}
          aria-controls="menu-principal"
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}

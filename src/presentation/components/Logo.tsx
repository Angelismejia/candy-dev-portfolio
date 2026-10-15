import { useId } from 'react'
import styles from './Logo.module.css'

interface LogoProps {
  light?: boolean
}

// Ícono: cuadrado redondeado con una C geométrica y ":" (guiño a la programación)
export function LogoMark({ light = false, size = 42 }: LogoProps & { size?: number }) {
  // id único: en la página hay dos logos (navbar y footer) y cada uno necesita su degradado
  const gradientId = useId()
  const paint = light ? 'currentColor' : `url(#${gradientId})`

  return (
    <svg className={styles.mark} width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      {!light && (
        <defs>
          <linearGradient id={gradientId} x1="2" y1="2" x2="38" y2="38" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#8317FF" />
            <stop offset="1" stopColor="#D414D8" />
          </linearGradient>
        </defs>
      )}
      <rect x="2" y="2" width="36" height="36" rx="10" stroke={paint} strokeWidth="3" />
      <path d="M22.14 13.87A8 8 0 1 0 22.14 26.13" stroke={paint} strokeWidth="3.2" strokeLinecap="round" />
      <circle cx="28.5" cy="16.5" r="1.9" fill={paint} />
      <circle cx="28.5" cy="23.5" r="1.9" fill={paint} />
    </svg>
  )
}

export function Logo({ light = false }: LogoProps) {
  return (
    <span className={`${styles.logo} ${light ? styles.light : ''}`}>
      <LogoMark light={light} />
      <span className={styles.text}>
        Candy<span>.dev</span>
      </span>
    </span>
  )
}

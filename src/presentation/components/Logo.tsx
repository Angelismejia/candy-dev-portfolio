import styles from './Logo.module.css'

interface LogoProps {
  light?: boolean
}

export function Logo({ light = false }: LogoProps) {
  return (
    <span className={`${styles.logo} ${light ? styles.light : ''}`}>
      <span className={styles.mark} aria-hidden="true">
        C
      </span>
      <span className={styles.text}>
        Candy<span>.dev</span>
      </span>
    </span>
  )
}

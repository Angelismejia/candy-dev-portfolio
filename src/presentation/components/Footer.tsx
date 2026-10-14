import type { SocialLinks } from '../../domain/entities/Profile'
import { GitHubIcon, LinkedInIcon, MailIcon } from './Icons'
import { Logo } from './Logo'
import styles from './Footer.module.css'

interface FooterProps {
  social: SocialLinks
}

export function Footer({ social }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <Logo light />
        <p className={styles.tagline}>
          Aprendiendo, creciendo y construyendo,
          <br />
          un día a la vez.
        </p>

        <ul className={styles.socials}>
          <li>
            <a href={social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <GitHubIcon size={20} />
            </a>
          </li>
          <li>
            <a href={social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <LinkedInIcon size={20} />
            </a>
          </li>
          <li>
            <a href={`mailto:${social.email}`} aria-label="Enviar email">
              <MailIcon size={20} />
            </a>
          </li>
        </ul>

        <p className={styles.copy}>Hecho por mí © {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}

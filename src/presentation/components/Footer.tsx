import type { SocialLinks } from '../../domain/entities/Profile'
import { GitHubIcon, InstagramIcon, LinkedInIcon, MailIcon } from './Icons'
import { Logo } from './Logo'
import styles from './Footer.module.css'

const currentYear = new Date().getFullYear()

interface FooterProps {
  social: SocialLinks
}

export function Footer({ social }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <Logo light />
        <p className={styles.tagline}>Junior Software Developer</p>

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
            <a href={social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <InstagramIcon size={20} />
            </a>
          </li>
          <li>
            <a href={`mailto:${social.email}`} aria-label="Enviar email">
              <MailIcon size={20} />
            </a>
          </li>
        </ul>

        <p className={styles.copy}>© {currentYear} Candy Angelis Mejía Soriano</p>
      </div>
    </footer>
  )
}

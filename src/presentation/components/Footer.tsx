import type { SocialLinks } from '../../domain/entities/Profile'
import { GitHubIcon, InstagramIcon, LinkedInIcon, MailIcon, WhatsAppIcon } from './Icons'
import { Logo } from './Logo'
import { useLanguage } from '../i18n/language'
import styles from './Footer.module.css'

const currentYear = new Date().getFullYear()

// Herramientas con las que está hecho este portafolio
const builtWith = ['React', 'TypeScript', 'Vite', 'CSS Modules']

interface FooterProps {
  social: SocialLinks
}

export function Footer({ social }: FooterProps) {
  const { t } = useLanguage()
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
          {social.whatsapp && (
            <li>
              <a
                href={`https://wa.me/${social.whatsapp}?text=${encodeURIComponent(t.whatsapp.greeting)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.whatsapp.label}
              >
                <WhatsAppIcon size={20} />
              </a>
            </li>
          )}
          <li>
            <a href={`mailto:${social.email}`} aria-label={t.footer.email}>
              <MailIcon size={20} />
            </a>
          </li>
        </ul>

        <div className={styles.credits}>
          <p className={styles.madeBy}>
            {t.footer.madeBy} <strong>Candy Angelis Mejía</strong>
          </p>
          <p className={styles.builtWith}>{t.footer.builtWith} {builtWith.join(' · ')}</p>
          <p className={styles.copy}>
            © {currentYear} Candy Angelis Mejía Soriano. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  )
}

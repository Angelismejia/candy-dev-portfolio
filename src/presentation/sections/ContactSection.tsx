import type { Contact } from '../../domain/entities/Portfolio'
import type { SocialLinks } from '../../domain/entities/Profile'
import { ContactForm } from '../components/ContactForm'
import { useLanguage } from '../i18n/language'
import styles from './ContactSection.module.css'

interface ContactSectionProps {
  contact: Contact
  social: SocialLinks
}

export function ContactSection({ contact, social }: ContactSectionProps) {
  const { t } = useLanguage()

  return (
    <section id="contacto" className={`section-divider ${styles.section}`}>
      <div className="container">
        <h2 className="section-title" data-reveal>
          {t.contact.title}
        </h2>
        <p className="section-intro" data-reveal>
          {contact.message}
        </p>

        <ContactForm
          email={social.email}
          linkedin={social.linkedin}
          github={social.github}
          accessKey={contact.formAccessKey}
        />
      </div>
    </section>
  )
}

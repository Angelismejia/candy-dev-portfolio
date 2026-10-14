import type { Contact } from '../../domain/entities/Portfolio'
import type { SocialLinks } from '../../domain/entities/Profile'
import styles from './ContactSection.module.css'

interface ContactSectionProps {
  contact: Contact
  social: SocialLinks
}

export function ContactSection({ contact, social }: ContactSectionProps) {
  return (
    <section id="contacto" className={styles.section}>
      <div className="container">
        <h2 className="section-title">Trabajemos juntos</h2>
        <p className="section-intro">{contact.message}</p>

        <p className={styles.label}>Me interesan oportunidades como:</p>
        <p className={styles.roles}>{contact.desiredRoles.join(' · ')}</p>
        <p className={styles.note}>{contact.extraNote}</p>

        {/* Caja oscura que se monta sobre el footer, como en mattfarley.ca */}
        <div className={styles.cta}>
          <h3>¿Tienes una oportunidad o proyecto en mente?</h3>
          <p>Me encantaría escucharte. Escríbeme y hablemos.</p>
          <a className="btn btn-light" href={`mailto:${social.email}`}>
            Hablemos
          </a>
        </div>
      </div>
    </section>
  )
}

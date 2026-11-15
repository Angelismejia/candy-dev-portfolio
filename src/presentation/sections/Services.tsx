import type { ReactNode } from 'react'
import type { Service } from '../../domain/entities/Service'
import { AppIcon, CatalogIcon, MonitorIcon, ServerIcon } from '../components/Icons'
import { revealDelay } from '../hooks/useRevealOnScroll'
import { useLanguage } from '../i18n/language'
import styles from './Services.module.css'

const icons: Record<string, ReactNode> = {
  web: <MonitorIcon size={28} />,
  catalog: <CatalogIcon size={28} />,
  apps: <AppIcon size={28} />,
  api: <ServerIcon size={28} />,
}

interface ServicesProps {
  services: Service[]
}

// "¿En qué puedo ayudarte?": lo que ofrezco a clientes, con un botón para escribirme
export function Services({ services }: ServicesProps) {
  const { t } = useLanguage()
  return (
    <section id="servicios" className={`section section-divider ${styles.section}`} aria-labelledby="servicios-titulo">
      <div className="container">
        <h2 id="servicios-titulo" className="section-title" data-reveal>
          {t.services.title}
        </h2>
        <p className="section-intro" data-reveal>
          {t.services.intro}
        </p>

        <ul className={styles.grid}>
          {services.map((service, index) => (
            <li key={service.id} className={styles.card} data-reveal style={revealDelay(index)}>
              {/* número grande de fondo: 01, 02, 03... */}
              <span className={styles.number} aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className={styles.icon}>{icons[service.id] ?? <MonitorIcon size={28} />}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </li>
          ))}
        </ul>

        <div className={styles.cta} data-reveal>
          <h3>{t.services.ctaText}</h3>
          <p>{t.services.ctaDetail}</p>
          <a className="btn btn-solid" href="#hablemos">
            {t.services.cta}
          </a>
        </div>
      </div>
    </section>
  )
}

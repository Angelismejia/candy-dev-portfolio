import type { Certification, Education } from '../../domain/entities/Education'
import { revealDelay } from '../hooks/useRevealOnScroll'
import { ExternalLinkIcon } from '../components/Icons'
import { publicAsset } from '../hooks/usePortfolio'
import { useLanguage } from '../i18n/language'
import styles from './EducationSection.module.css'

interface EducationSectionProps {
  education: Education[]
  certifications: Certification[]
}

export function EducationSection({ education, certifications }: EducationSectionProps) {
  const { t } = useLanguage()
  return (
    <section id="formacion" className="section section-divider">
      <div className="container">
        <h2 className={`section-title ${styles.title}`} data-reveal>
          {t.education.title}
        </h2>

        {education.map((item) => (
          <article key={item.id} className={styles.education} data-reveal>
            <span className={styles.period}>{item.period}</span>
            <h3>{item.degree}</h3>
            <p className={styles.institution}>
              {item.institutionUrl ? (
                <a href={item.institutionUrl} target="_blank" rel="noopener noreferrer">
                  {item.institution}
                </a>
              ) : (
                item.institution
              )}
            </p>
            <p className={styles.text}>{item.description}</p>
          </article>
        ))}

        <h3 className={styles.subtitle} data-reveal>
          {t.education.certifications}
        </h3>
        <ul className={styles.certifications}>
          {certifications.map((certification, index) => (
            <li key={certification.id} className={styles.certification} data-reveal style={revealDelay(index % 3)}>
              <span className={styles.year}>{certification.year}</span>
              <h4>{certification.name}</h4>
              <p className={styles.text}>{certification.description}</p>
              {certification.certificatePath && (
                <a
                  className={styles.certificateLink}
                  href={publicAsset(certification.certificatePath)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.education.viewCertificate}
                  <ExternalLinkIcon size={16} />
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

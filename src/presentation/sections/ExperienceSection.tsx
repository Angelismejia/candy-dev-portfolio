import type { Experience } from '../../domain/entities/Experience'
import { TechChips } from '../components/ProjectLinks'
import { revealDelay } from '../hooks/useRevealOnScroll'
import { useLanguage } from '../i18n/language'
import styles from './ExperienceSection.module.css'

interface ExperienceSectionProps {
  experiences: Experience[]
}

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
  const { t } = useLanguage()
  return (
    <section id="experiencia" className="section section-divider">
      <div className="container">
        <h2 className={`section-title ${styles.title}`} data-reveal>
          {t.experience.title}
        </h2>

        <div className={styles.grid}>
          {experiences.map((experience, index) => (
            <article key={experience.id} className={styles.card} data-reveal style={revealDelay(index, 0.15)}>
              <header className={styles.header}>
                <h3>
                  {experience.companyUrl ? (
                    <a href={experience.companyUrl} target="_blank" rel="noopener noreferrer">
                      {experience.company}
                    </a>
                  ) : (
                    experience.company
                  )}
                </h3>
                <p>{experience.position}</p>
                <p className={styles.meta}>
                  {experience.period} · {experience.location}
                </p>
              </header>

              <p className={styles.description}>{experience.description}</p>

              <p className={styles.label}>{t.experience.highlights}</p>
              <ul className={styles.achievements}>
                {experience.achievements.map((achievement) => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </ul>

              <div className={styles.technologies}>
                <TechChips technologies={experience.technologies} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

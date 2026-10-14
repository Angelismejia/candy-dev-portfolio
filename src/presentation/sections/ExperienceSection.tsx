import type { Experience } from '../../domain/entities/Experience'
import styles from './ExperienceSection.module.css'

interface ExperienceSectionProps {
  experiences: Experience[]
}

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <section id="experiencia" className="section">
      <div className="container">
        <h2 className="section-title">Mi experiencia</h2>
        <p className="section-intro">
          <strong>8 meses</strong> de experiencia práctica en desarrollo de software, en dos empresas.
        </p>

        <div className={styles.grid}>
          {experiences.map((experience) => (
            <article key={experience.id} className={styles.card}>
              <header className={styles.header}>
                <h3>{experience.company}</h3>
                <p>{experience.position}</p>
              </header>

              <p className={styles.description}>{experience.description}</p>

              <p className={styles.label}>Principales experiencias:</p>
              <ul className={styles.achievements}>
                {experience.achievements.map((achievement) => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </ul>

              <p className={styles.label}>Tecnologías:</p>
              <p className={styles.technologies}>{experience.technologies.join(', ')}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

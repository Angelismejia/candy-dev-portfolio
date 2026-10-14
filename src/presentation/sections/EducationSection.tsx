import type { Certification, Education } from '../../domain/entities/Education'
import styles from './EducationSection.module.css'

interface EducationSectionProps {
  education: Education[]
  certifications: Certification[]
}

export function EducationSection({ education, certifications }: EducationSectionProps) {
  return (
    <section id="formacion" className="section">
      <div className="container">
        <h2 className={`section-title ${styles.title}`}>Educación</h2>

        {education.map((item) => (
          <article key={item.id} className={styles.education}>
            <span className={styles.period}>{item.period}</span>
            <h3>{item.degree}</h3>
            <p className={styles.institution}>{item.institution}</p>
            <p className={styles.text}>{item.description}</p>
          </article>
        ))}

        <h3 className={styles.subtitle}>Certificaciones y cursos</h3>
        <ul className={styles.certifications}>
          {certifications.map((certification) => (
            <li key={certification.id} className={styles.certification}>
              <span className={styles.year}>{certification.year}</span>
              <h4>{certification.name}</h4>
              <p className={styles.text}>{certification.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

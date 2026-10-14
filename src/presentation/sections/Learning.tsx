import type { Learning as LearningContent } from '../../domain/entities/Portfolio'
import styles from './Learning.module.css'

interface LearningProps {
  learning: LearningContent
}

export function Learning({ learning }: LearningProps) {
  return (
    <section id="aprendizaje" className={styles.section}>
      <div className={`container ${styles.content}`}>
        <h2 className="section-title">Siempre aprendiendo</h2>
        <p className={styles.text}>{learning.intro}</p>
        <ul className={styles.areas}>
          {learning.focusAreas.map((area) => (
            <li key={area}>{area}</li>
          ))}
        </ul>
        <p className={styles.text}>{learning.closing}</p>
      </div>
    </section>
  )
}

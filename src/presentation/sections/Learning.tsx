import type { Learning as LearningContent } from '../../domain/entities/Portfolio'
import { GitHubCalendar } from '../components/GitHubCalendar'
import { revealDelay } from '../hooks/useRevealOnScroll'
import { useLanguage } from '../i18n/language'
import styles from './Learning.module.css'

interface LearningProps {
  learning: LearningContent
  githubUrl: string
}

// el usuario de GitHub sale del link del perfil: github.com/<usuario>
const githubUser = (url: string) => url.replace(/\/+$/, '').split('/').pop() ?? ''

export function Learning({ learning, githubUrl }: LearningProps) {
  const { t } = useLanguage()
  return (
    <section id="aprendizaje" className={`section-divider ${styles.section}`}>
      <div className={`container ${styles.content}`}>
        <h2 className="section-title" data-reveal>
          {t.learning.title}
        </h2>
        <p className={styles.text} data-reveal>
          {learning.intro}
        </p>
        <ul className={styles.areas}>
          {learning.focusAreas.map((area, index) => (
            <li key={area} data-reveal style={revealDelay(index, 0.06)}>
              {area}
            </li>
          ))}
        </ul>
        <p className={styles.text} data-reveal>
          {learning.closing}
        </p>
      </div>

      {/* más ancho que el texto: el calendario necesita espacio */}
      <div className={`container ${styles.github}`} data-reveal>
        <h3 className={styles.githubTitle}>
          {t.github.titleBefore} <span>GitHub</span> {t.github.titleAfter}
        </h3>
        <GitHubCalendar username={githubUser(githubUrl)} profileUrl={githubUrl} />
      </div>
    </section>
  )
}

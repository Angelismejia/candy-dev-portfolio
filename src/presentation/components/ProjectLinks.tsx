import type { Project } from '../../domain/entities/Project'
import { ExternalLinkIcon, GitHubIcon } from './Icons'
import { useLanguage } from '../i18n/language'
import styles from './ProjectLinks.module.css'

interface ProjectLinksProps {
  project: Project
  small?: boolean
}

// "Ver demo" + botón redondo de GitHub. Sin demo publicada se muestra "Demo pronto"
export function ProjectLinks({ project, small = false }: ProjectLinksProps) {
  const { t } = useLanguage()
  const size = small ? 'btn-sm' : ''

  return (
    <div className={styles.links}>
      {project.demoUrl ? (
        <a className={`btn btn-solid ${size}`} href={project.demoUrl} target="_blank" rel="noopener noreferrer">
          <ExternalLinkIcon size={small ? 16 : 18} />
          {t.projects.demo}
        </a>
      ) : (
        <span className={`btn ${size} ${styles.soon}`}>{t.projects.demoSoon}</span>
      )}

      {project.repositoryUrl && (
        <a
          className={`${styles.github} ${small ? styles.githubSmall : ''}`}
          href={project.repositoryUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t.projects.codeOf(project.name)}
          title={t.projects.codeOnGithub}
        >
          <GitHubIcon size={small ? 18 : 22} />
        </a>
      )}
    </div>
  )
}

// Tecnologías como chips: se acomodan solas en filas sin cortarse
export function TechChips({ technologies }: { technologies: string[] }) {
  const { t } = useLanguage()
  return (
    <ul className={styles.chips} aria-label={t.projects.technologies}>
      {technologies.map((technology) => (
        <li key={technology}>{technology}</li>
      ))}
    </ul>
  )
}

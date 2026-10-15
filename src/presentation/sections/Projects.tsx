import type { FeaturedProject as FeaturedProjectContent, Project } from '../../domain/entities/Project'
import { ProjectLinks, TechChips } from '../components/ProjectLinks'
import { revealDelay } from '../hooks/useRevealOnScroll'
import { FeaturedProject } from './FeaturedProject'
import { useLanguage } from '../i18n/language'
import styles from './Projects.module.css'

interface ProjectsProps {
  featured: FeaturedProjectContent
  projects: Project[]
}

export function Projects({ featured, projects }: ProjectsProps) {
  const { t } = useLanguage()
  return (
    <section id="proyectos" className={`section-divider ${styles.section}`} aria-label={t.projects.section}>
      {/* ocupa todo el ancho: el círculo de fondo se recorta en los bordes de la sección */}
      <FeaturedProject project={featured} />

      {/* segundo círculo, abajo a la izquierda (el otro está a la derecha del proyecto destacado) */}
      <div className={styles.circle} data-reveal="zoom" aria-hidden="true" />

      <div className={`container ${styles.more}`}>
        <h2 className={`section-title ${styles.subtitle}`} data-reveal>
          {t.projects.more}
        </h2>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <article key={project.id} className={styles.project} data-reveal style={revealDelay(index, 0.15)}>
              <div className={styles.cover} data-variant={index % 3} aria-hidden="true">
                <span>{project.name}</span>
              </div>

              <div className={styles.body}>
                <p className={styles.tagline}>{project.tagline}</p>
                <h3>{project.name}</h3>

                <div className={styles.description}>
                  {project.description.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                <div className={styles.technologies}>
                  <TechChips technologies={project.technologies} />
                </div>

                <div className={styles.actions}>
                  <ProjectLinks project={project} small />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

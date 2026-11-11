import { useState, type CSSProperties } from 'react'
import type { FeaturedProject as FeaturedProjectContent, Project } from '../../domain/entities/Project'
import { ArrowRightIcon, GitHubIcon } from '../components/Icons'
import { ProjectLinks, TechChips } from '../components/ProjectLinks'
import { revealDelay } from '../hooks/useRevealOnScroll'
import { publicAsset } from '../hooks/usePortfolio'
import { FeaturedProject } from './FeaturedProject'
import { useLanguage } from '../i18n/language'
import styles from './Projects.module.css'

interface ProjectsProps {
  featured: FeaturedProjectContent
  projects: Project[]
  extraProjects: Project[]
  githubUrl: string
}

export function Projects({ featured, projects, extraProjects, githubUrl }: ProjectsProps) {
  const { t } = useLanguage()
  const [showExtra, setShowExtra] = useState(false)

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
            <ProjectCard key={project.id} project={project} index={index} reveal style={revealDelay(index, 0.15)} />
          ))}
        </div>

        {extraProjects.length > 0 && (
          <>
            {/* la flecha muestra los proyectos extra, que entran deslizándose desde la izquierda */}
            <div className={styles.toggleRow} data-reveal>
              <button
                type="button"
                className={`${styles.arrow} ${showExtra ? styles.arrowOpen : ''}`}
                aria-expanded={showExtra}
                aria-controls="proyectos-extra"
                onClick={() => setShowExtra((open) => !open)}
              >
                <span className={styles.arrowIcon}>
                  <ArrowRightIcon size={22} />
                </span>
                {showExtra ? t.projects.hideExtra : t.projects.showExtra}
              </button>
            </div>

            <div id="proyectos-extra" className={`${styles.grid} ${styles.extraGrid}`} hidden={!showExtra}>
              {showExtra &&
                extraProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={projects.length + index}
                    className={styles.slideIn}
                    style={revealDelay(index, 0.15)}
                  />
                ))}
            </div>
          </>
        )}

        {/* el resto de proyectos está en GitHub: lleva directo a la pestaña de repositorios */}
        <div className={styles.seeMore} data-reveal>
          <a className="btn" href={`${githubUrl}?tab=repositories`} target="_blank" rel="noopener noreferrer">
            <GitHubIcon size={20} />
            {t.projects.seeMore}
          </a>
        </div>
      </div>
    </section>
  )
}

interface ProjectCardProps {
  project: Project
  index: number
  className?: string
  style?: CSSProperties
  /** aparece con animación al hacer scroll (ver useRevealOnScroll) */
  reveal?: boolean
}

// Tarjeta de proyecto: captura (o el nombre sobre un color) + texto, tecnologías y botones
function ProjectCard({ project, index, className = '', style, reveal = false }: ProjectCardProps) {
  const { t } = useLanguage()
  return (
    <article className={`${styles.project} ${className}`} data-reveal={reveal ? '' : undefined} style={style}>
      {project.coverImage ? (
        <div className={styles.shot}>
          <img
            src={publicAsset(project.coverImage)}
            alt={t.projects.coverOf(project.name)}
            width={1280}
            height={720}
            loading="lazy"
            decoding="async"
          />
        </div>
      ) : (
        <div className={styles.cover} data-variant={index % 3} aria-hidden="true">
          <span>{project.name}</span>
        </div>
      )}

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
  )
}

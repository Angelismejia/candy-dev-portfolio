import { useCallback, useLayoutEffect, useRef, useState } from 'react'
import type { FeaturedProject as FeaturedProjectContent, Project } from '../../domain/entities/Project'
import { ChevronIcon, GitHubIcon } from '../components/Icons'
import { ProjectLinks, TechChips } from '../components/ProjectLinks'
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

        <ProjectCarousel projects={projects} extraProjects={extraProjects} />

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

interface ProjectCarouselProps {
  projects: Project[]
  extraProjects: Project[]
}

// Carrusel: los proyectos extra van al final, a la DERECHA, fuera de la vista.
// Al abrir se ven los principales; la flechita de la derecha desliza y trae los extra.
// Con el dedo (o el trackpad) también se desliza, gracias a scroll-snap.
function ProjectCarousel({ projects, extraProjects }: ProjectCarouselProps) {
  const { t } = useLanguage()
  const trackRef = useRef<HTMLUListElement>(null)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(false)
  const all = [...projects, ...extraProjects]

  // ¿queda algo por ver a cada lado? (margen de 4 px por los redondeos del navegador)
  const updateArrows = useCallback(() => {
    const track = trackRef.current
    if (!track) return
    setCanPrev(track.scrollLeft > 4)
    setCanNext(track.scrollLeft + track.clientWidth < track.scrollWidth - 4)
  }, [])

  // al cargar (y al cambiar el tamaño de la ventana) decide qué flechas se muestran
  useLayoutEffect(() => {
    updateArrows()
    window.addEventListener('resize', updateArrows)
    return () => window.removeEventListener('resize', updateArrows)
  }, [updateArrows])

  // avanza o retrocede una tarjeta
  const slide = (direction: -1 | 1) => {
    const track = trackRef.current
    const card = track?.firstElementChild as HTMLElement | null
    if (!track || !card) return
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0
    track.scrollBy({ left: direction * (card.offsetWidth + gap), behavior: 'smooth' })
  }

  return (
    <div className={styles.carousel} data-reveal>
      <button
        type="button"
        className={`${styles.nav} ${styles.prev}`}
        onClick={() => slide(-1)}
        disabled={!canPrev}
        aria-label={t.projects.previous}
        aria-controls="carrusel-proyectos"
      >
        <ChevronIcon size={18} direction="left" />
      </button>

      <ul id="carrusel-proyectos" ref={trackRef} className={styles.track} onScroll={updateArrows}>
        {all.map((project, index) => (
          <li key={project.id} className={styles.slide}>
            <ProjectCard project={project} index={index} />
          </li>
        ))}
      </ul>

      <button
        type="button"
        className={`${styles.nav} ${styles.next}`}
        onClick={() => slide(1)}
        disabled={!canNext}
        aria-label={t.projects.next}
        aria-controls="carrusel-proyectos"
      >
        <ChevronIcon size={18} direction="right" />
      </button>
    </div>
  )
}

interface ProjectCardProps {
  project: Project
  index: number
}

// Tarjeta de proyecto: captura (o el nombre sobre un color) + texto, tecnologías y botones
function ProjectCard({ project, index }: ProjectCardProps) {
  const { t } = useLanguage()
  return (
    <article className={styles.project}>
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

import type { Project } from '../../domain/entities/Project'
import styles from './Projects.module.css'

interface ProjectsProps {
  projects: Project[]
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <section id="proyectos" className={`section ${styles.section}`}>
      <div className="container">
        <h2 className={`section-title ${styles.title}`}>Proyectos destacados</h2>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <article key={project.id} className={styles.project}>
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

                <p className={styles.technologies}>{project.technologies.join(' · ')}</p>

                <div className={styles.actions}>
                  {project.demoUrl && (
                    <a className="btn btn-solid btn-sm" href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      Ver proyecto
                    </a>
                  )}
                  {project.repositoryUrl && (
                    <a className="btn btn-sm" href={project.repositoryUrl} target="_blank" rel="noopener noreferrer">
                      Ver código
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

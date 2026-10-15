import type { CSSProperties, ReactNode } from 'react'
import type { FeaturedProject as FeaturedProjectContent } from '../../domain/entities/Project'
import { CodeIcon, ExternalLinkIcon, GitHubIcon } from '../components/Icons'
import { TechChips } from '../components/ProjectLinks'
import { publicAsset } from '../hooks/usePortfolio'
import { useLanguage } from '../i18n/language'
import styles from './FeaturedProject.module.css'

// Mientras no haya capturas se muestran 9 marcos de ejemplo
const PLACEHOLDER_COUNT = 9

const delay = (seconds: number) => ({ '--d': `${seconds}s` }) as CSSProperties

interface FeaturedProjectProps {
  project: FeaturedProjectContent
}

// Proyecto principal, igual que el "Featured Project" del portafolio modelo
export function FeaturedProject({ project }: FeaturedProjectProps) {
  const { t } = useLanguage()
  const shots = project.screenshots.length > 0 ? project.screenshots : Array.from({ length: PLACEHOLDER_COUNT }, () => '')
  // reparte las capturas en 3 columnas: 1,4,7 / 2,5,8 / 3,6,9
  const columns = [0, 1, 2].map((column) => shots.filter((_, index) => index % 3 === column))

  return (
    // data-reveal="group": se activa una sola vez y cada parte entra con su propio retraso
    <div className={styles.featured} data-reveal="group">
      <div className={styles.circle} aria-hidden="true" />

      <div className={`container ${styles.grid}`}>
        {/* título aparte: en el celular va primero, luego las capturas y después el resto */}
        <div className={styles.head}>
          <p className={`${styles.eyebrow} ${styles.fade}`}>{t.projects.featured}</p>
          <h2 className={`${styles.name} ${styles.rise}`} style={delay(0.1)}>
            {project.name}
          </h2>
          <p className={`${styles.tagline} ${styles.rise}`} style={delay(0.2)}>
            {project.tagline}
          </p>
        </div>

        <div className={styles.info}>

          {project.description.map((paragraph) => (
            <p key={paragraph} className={`${styles.description} ${styles.rise}`} style={delay(0.3)}>
              {paragraph}
            </p>
          ))}

          <div className={`${styles.block} ${styles.rise}`} style={delay(0.4)}>
            <h3 className={styles.subtitle}>{t.projects.canDo}</h3>
            <ul className={styles.highlights}>
              {project.highlights.map((highlight, index) => (
                <li key={highlight} className={styles.slide} style={delay(0.5 + index * 0.1)}>
                  <span className={styles.dot} />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={`${styles.note} ${styles.rise}`} style={delay(0.8)}>
            <CodeIcon size={20} />
            <div>
              <p className={styles.noteTitle}>{project.note.title}</p>
              <p className={styles.noteText}>{project.note.text}</p>
            </div>
          </div>

          <div className={`${styles.block} ${styles.rise}`} style={delay(0.85)}>
            <TechChips technologies={project.technologies} />
          </div>

          <div className={`${styles.actions} ${styles.rise}`} style={delay(0.9)}>
            {project.demoUrl ? (
              <>
                <MagicButton href={project.demoUrl} icon={<ExternalLinkIcon size={18} />} label={t.projects.demo} />
                {project.repositoryUrl && (
                  <a
                    className={styles.github}
                    href={project.repositoryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t.projects.codeOf(project.name)}
                    title={t.projects.codeOnGithub}
                  >
                    <GitHubIcon size={22} />
                  </a>
                )}
              </>
            ) : (
              // sin demo publicada todavía: el botón principal lleva a GitHub
              project.repositoryUrl && (
                <MagicButton href={project.repositoryUrl} icon={<GitHubIcon size={18} />} label={t.projects.code} />
              )
            )}
          </div>

        </div>

        <div className={styles.gallery} role="img" aria-label={t.projects.screenshots(project.name)}>
          <div className={styles.stage}>
            <div className={styles.group}>
              {columns.map((column, columnIndex) => (
                <div key={columnIndex} className={styles.column}>
                  {column.map((shot, index) => (
                    <div key={index} className={styles.phone}>
                      {shot ? (
                        <img src={publicAsset(shot)} alt="" loading="lazy" />
                      ) : (
                        <div className={styles.placeholder}>
                          <span>{project.name}</span>
                          <small>
                            {t.projects.screenshot} {columnIndex + 1 + index * 3}
                          </small>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* debajo de todo y a lo ancho de la página */}
        <div className={`${styles.story} ${styles.rise}`} style={delay(1)}>
          <h3 className={styles.storyTitle}>{t.projects.why}</h3>
          <p className={styles.storyText}>{project.motivation}</p>
        </div>
      </div>
    </div>
  )
}

interface MagicButtonProps {
  href: string
  icon: ReactNode
  label: string
}

// Botón oscuro con estrellitas que salen al pasar el mouse (como el "Try it Live" del modelo)
function MagicButton({ href, icon, label }: MagicButtonProps) {
  return (
    <a className={styles.magic} href={href} target="_blank" rel="noopener noreferrer">
      <span className={styles.magicGlow} aria-hidden="true" />
      {[0, 1, 2, 3].map((star) => (
        <svg key={star} className={styles.star} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
      {icon}
      <span className={styles.magicLabel}>{label}</span>
    </a>
  )
}

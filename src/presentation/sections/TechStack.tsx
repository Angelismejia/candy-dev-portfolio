import type { ReactNode } from 'react'
import type { SkillGroup } from '../../domain/entities/SkillGroup'
import { CodeIcon, DatabaseIcon, ServerIcon, ToolIcon } from '../components/Icons'
import { revealDelay } from '../hooks/useRevealOnScroll'
import { useLanguage } from '../i18n/language'
import styles from './TechStack.module.css'

const icons: Record<string, ReactNode> = {
  backend: <ServerIcon size={28} />,
  frontend: <CodeIcon size={28} />,
  databases: <DatabaseIcon size={28} />,
  tools: <ToolIcon size={28} />,
}

interface TechStackProps {
  skillGroups: SkillGroup[]
}

// Tarjeta que "flota" encima de la franja de color, igual que en mattfarley.ca
export function TechStack({ skillGroups }: TechStackProps) {
  const { t } = useLanguage()
  return (
    <section id="tecnologias" className={styles.section} aria-labelledby="tecnologias-titulo">
      <div className="container">
        <h2 id="tecnologias-titulo" className={styles.srOnly}>
          Tech Stack
        </h2>
        <div className={styles.card}>
          {skillGroups.map((group, index) => (
            <article key={group.id} className={styles.column} data-reveal style={revealDelay(index)}>
              <span className={styles.icon}>{icons[group.id] ?? <CodeIcon size={28} />}</span>
              <h3>{group.title}</h3>
              <p className={styles.description}>{group.description}</p>
              <p className={styles.label}>{t.tech.using}</p>
              <ul className={styles.skills}>
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

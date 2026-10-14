import { useState } from 'react'
import type { Profile } from '../../domain/entities/Profile'
import { DownloadIcon } from '../components/Icons'
import { publicAsset } from '../hooks/usePortfolio'
import styles from './Hero.module.css'

interface HeroProps {
  profile: Profile
}

export function Hero({ profile }: HeroProps) {
  const [photoFailed, setPhotoFailed] = useState(false)

  return (
    <section id="inicio" className={styles.hero}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.content}>
          <p className={styles.hello}>Hola, soy {profile.name}</p>
          <h1 className={styles.title}>{profile.role}</h1>

          {profile.summary.map((paragraph) => (
            <p key={paragraph} className={styles.summary}>
              {paragraph}
            </p>
          ))}

          <p className={styles.skills}>{profile.highlightedSkills.join(' · ')}</p>

          <div className={styles.actions}>
            <a className="btn btn-solid" href="#proyectos">
              Ver proyectos
            </a>
            <a className="btn" href={publicAsset(profile.cvPath)} download>
              <DownloadIcon size={18} />
              Descargar CV
            </a>
          </div>
        </div>
        <div className={styles.visual}>
          {photoFailed ? (
            <div className={styles.initials} aria-hidden="true">
              {profile.initials}
            </div>
          ) : (
            <img
              className={styles.photo}
              src={publicAsset(profile.photoPath)}
              alt={`Caricatura de ${profile.name} con su laptop`}
              width={433}
              height={505}
              onError={() => setPhotoFailed(true)}
            />
          )}
        </div>

      </div>
    </section>
  )
}

import { useState } from 'react'
import type { Profile } from '../../domain/entities/Profile'
import { publicAsset } from '../hooks/usePortfolio'
import styles from './About.module.css'

interface AboutProps {
  profile: Profile
}

export function About({ profile }: AboutProps) {
  const [showIllustration, setShowIllustration] = useState(true)

  return (
    <section id="sobre-mi" className={styles.about}>
      {showIllustration && (
        <div className={`container ${styles.illustration}`}>
          <img
            src={publicAsset(profile.illustrationPath)}
            alt=""
            width={1254}
            height={1254}
            loading="lazy"
            onError={() => setShowIllustration(false)}
          />
        </div>
      )}

      <div className={styles.band}>
        <div className={`container ${styles.content}`}>
          <h2>
            Hola, soy {profile.shortName}. <span>Mucho gusto.</span>
          </h2>
          {profile.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  )
}

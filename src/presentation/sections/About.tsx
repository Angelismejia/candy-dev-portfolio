import { useState } from 'react'
import type { Profile } from '../../domain/entities/Profile'
import { publicAsset } from '../hooks/usePortfolio'
import { revealDelay } from '../hooks/useRevealOnScroll'
import { useLanguage } from '../i18n/language'
import styles from './About.module.css'

interface AboutProps {
  profile: Profile
}

export function About({ profile }: AboutProps) {
  const { t } = useLanguage()
  const [showIllustration, setShowIllustration] = useState(true)

  return (
    <section id="sobre-mi" className={styles.about}>
      {showIllustration && (
        <div className={styles.illustration}>
          <img
            data-reveal="zoom"
            src={publicAsset(profile.illustrationPath)}
            alt=""
            width={800}
            height={670}
            loading="lazy"
            onError={() => setShowIllustration(false)}
          />
        </div>
      )}

      <div className={styles.band}>
        <div className={`container ${styles.content}`}>
          <h2 data-reveal>
            {t.about.hello} {profile.shortName}. <span>{t.about.niceToMeet}</span>
          </h2>
          {profile.about.map((paragraph, index) => (
            <p key={paragraph} data-reveal style={revealDelay(index, 0.08)}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}

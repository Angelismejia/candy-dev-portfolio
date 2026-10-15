import { useRef, useState, type FormEvent } from 'react'
import { GitHubIcon, LinkedInIcon, MailIcon } from './Icons'
import { useLanguage } from '../i18n/language'
import styles from './ContactForm.module.css'

const ENDPOINT = 'https://api.web3forms.com/submit'

// muestra el link sin https://www. ni la barra final, y con acentos legibles (%C3%AD → í)
const shortUrl = (url: string) => decodeURI(url).replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')

type Status = 'idle' | 'sending' | 'sent' | 'error' | 'invalid' | 'wait'

// Límites de cada campo (también los revisa Web3Forms del lado del servidor)
const LIMITS = { name: 80, email: 120, message: 2000, minMessage: 10 }
// Tiempo mínimo entre un envío y otro, para frenar el spam
const COOLDOWN_MS = 60_000
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

interface ContactFormProps {
  email: string
  linkedin: string
  github: string
  accessKey: string
}

// Recuadro de contacto: formulario a la izquierda, mensaje y correo a la derecha.
// Los botones "Hablemos" llevan aquí (#hablemos).
export function ContactForm({ email, linkedin, github, accessKey }: ContactFormProps) {
  const { t } = useLanguage()
  const [status, setStatus] = useState<Status>('idle')
  const lastSent = useRef(0)

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const { botcheck, ...fields } = Object.fromEntries(new FormData(form)) as Record<string, string>
    // Casilla invisible: si viene marcada, lo llenó un bot
    if (botcheck) return

    // sin espacios de más, y con datos que tengan sentido
    const name = fields.name.trim()
    const message = fields.message.trim()
    const replyTo = fields.email.trim()
    if (!name || message.length < LIMITS.minMessage || !EMAIL_PATTERN.test(replyTo)) {
      setStatus('invalid')
      return
    }
    if (Date.now() - lastSent.current < COOLDOWN_MS) {
      setStatus('wait')
      return
    }
    Object.assign(fields, { name, message, email: replyTo })

    const subject = t.form.subject(fields.name)

    // Sin llave del servicio todavía: abre el correo con el mensaje ya escrito
    if (!accessKey) {
      const body = `${fields.message}\n\n— ${fields.name} · ${fields.email}`
      window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      return
    }

    setStatus('sending')
    try {
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          subject,
          from_name: 'Portafolio Candy.dev',
          replyto: fields.email,
          ...fields,
        }),
      })
      const result = await response.json()
      if (!response.ok || !result.success) throw new Error(result.message)
      form.reset()
      lastSent.current = Date.now()
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div id="hablemos" className={styles.box} data-reveal="zoom">
      <h3 className={styles.title}>{t.form.title}</h3>

      <div className={styles.columns}>
        {status === 'sent' ? (
          <div className={styles.done} role="status">
            <span className={styles.doneIcon} aria-hidden="true">
              ✓
            </span>
            <p className={styles.doneTitle}>{t.form.sentTitle}</p>
            <p className={styles.doneText}>{t.form.sentText}</p>
            <button type="button" className="btn btn-light btn-sm" onClick={() => setStatus('idle')}>
              {t.form.another}
            </button>
          </div>
        ) : (
          <form className={styles.form} onSubmit={onSubmit}>
            <label className={styles.field}>
              <span className={styles.srOnly}>{t.form.name}</span>
              <input name="name" required maxLength={LIMITS.name} autoComplete="name" placeholder={t.form.namePlaceholder} />
            </label>
            <label className={styles.field}>
              <span className={styles.srOnly}>{t.form.email}</span>
              <input
                type="email"
                name="email"
                required
                maxLength={LIMITS.email}
                autoComplete="email"
                placeholder={t.form.emailPlaceholder}
              />
            </label>
            <label className={styles.field}>
              <span className={styles.srOnly}>{t.form.message}</span>
              <textarea
                name="message"
                rows={4}
                required
                minLength={LIMITS.minMessage}
                maxLength={LIMITS.message}
                placeholder={t.form.messagePlaceholder}
              />
            </label>

            <input type="checkbox" name="botcheck" className={styles.honeypot} tabIndex={-1} aria-hidden="true" />

            {status === 'invalid' && (
              <p className={styles.error} role="alert">
                {t.form.invalid}
              </p>
            )}
            {status === 'wait' && (
              <p className={styles.error} role="alert">
                {t.form.wait}
              </p>
            )}
            {status === 'error' && (
              <p className={styles.error} role="alert">
                {t.form.error} <a href={`mailto:${email}`}>{email}</a>.
              </p>
            )}

            <button type="submit" className={`btn btn-light ${styles.submit}`} disabled={status === 'sending'}>
              {status === 'sending' ? t.form.sending : t.form.send}
            </button>
          </form>
        )}

        <div className={styles.aside}>
          <p className={styles.asideText}>{t.form.intro}</p>
          <ul className={styles.links}>
            <li>
              <a href={`mailto:${email}`}>
                <MailIcon size={22} />
                {email}
              </a>
            </li>
            <li>
              <a href={linkedin} target="_blank" rel="noopener noreferrer">
                <LinkedInIcon size={22} />
                {shortUrl(linkedin)}
              </a>
            </li>
            <li>
              <a href={github} target="_blank" rel="noopener noreferrer">
                <GitHubIcon size={22} />
                {shortUrl(github)}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

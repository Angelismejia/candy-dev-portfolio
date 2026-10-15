import { useEffect, useMemo, useRef, useState } from 'react'
import { useLanguage } from '../i18n/language'
import styles from './GitHubCalendar.module.css'

// API pública que lee las contribuciones del perfil de GitHub (la misma que usa react-github-calendar)
const API = 'https://github-contributions-api.jogruber.de/v4'

interface Day {
  date: string
  count: number
  level: 0 | 1 | 2 | 3 | 4
}

interface GitHubCalendarProps {
  username: string
  profileUrl: string
}

// Calendario de contribuciones del último año, con los colores del tema
export function GitHubCalendar({ username, profileUrl }: GitHubCalendarProps) {
  const { language, t } = useLanguage()
  const [days, setDays] = useState<Day[] | null>(null)
  const [total, setTotal] = useState(0)
  const [failed, setFailed] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const controller = new AbortController()
    fetch(`${API}/${username}?y=last`, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error(String(response.status))
        return response.json()
      })
      .then((data: { total: { lastYear: number }; contributions: Day[] }) => {
        setDays(data.contributions)
        setTotal(data.total.lastYear)
      })
      .catch((error: unknown) => {
        if (!controller.signal.aborted) {
          console.warn('No se pudo cargar el calendario de GitHub', error)
          setFailed(true)
        }
      })
    return () => controller.abort()
  }, [username])

  // semanas de domingo a sábado; la primera se rellena para que cada día caiga en su fila
  const weeks = useMemo(() => {
    if (!days) return []
    const firstWeekday = new Date(`${days[0].date}T00:00:00`).getDay()
    const padded: (Day | null)[] = [...Array<null>(firstWeekday).fill(null), ...days]
    const result: (Day | null)[][] = []
    for (let i = 0; i < padded.length; i += 7) result.push(padded.slice(i, i + 7))
    return result
  }, [days])

  const monthFormat = useMemo(() => new Intl.DateTimeFormat(language, { month: 'short' }), [language])
  const dayFormat = useMemo(() => new Intl.DateTimeFormat(language, { day: 'numeric', month: 'long', year: 'numeric' }), [language])

  // nombre del mes encima de la semana donde empieza ese mes
  const monthLabels = weeks.map((week, index) => {
    const first = week.find((day) => day && day.date.endsWith('-01')) ?? (index === 0 ? week.find(Boolean) : null)
    return first ? monthFormat.format(new Date(`${first.date}T00:00:00`)) : ''
  })

  // en el celular arranca mostrando lo más reciente (a la derecha)
  useEffect(() => {
    const element = scrollRef.current
    if (element) element.scrollLeft = element.scrollWidth
  }, [weeks])

  if (failed) {
    return (
      <p className={styles.fallback}>
        <a href={profileUrl} target="_blank" rel="noopener noreferrer">
          {t.github.fallback}
        </a>
      </p>
    )
  }

  return (
    <div className={styles.calendar}>
      <div className={styles.scroll} ref={scrollRef}>
        <div className={styles.grid} style={{ gridTemplateColumns: `repeat(${weeks.length || 53}, var(--cell))` }}>
          {days
            ? weeks.map((week, weekIndex) => (
                <div key={weekIndex} className={styles.week}>
                  <span className={styles.month}>{monthLabels[weekIndex]}</span>
                  {week.map((day, dayIndex) =>
                    day ? (
                      <span
                        key={day.date}
                        className={styles.day}
                        data-level={day.level}
                        title={t.github.day(day.count, dayFormat.format(new Date(`${day.date}T00:00:00`)))}
                      />
                    ) : (
                      <span key={`empty-${dayIndex}`} className={styles.empty} />
                    ),
                  )}
                </div>
              ))
            : // mientras carga: cuadritos grises que laten
              Array.from({ length: 53 }, (_, weekIndex) => (
                <div key={weekIndex} className={styles.week}>
                  <span className={styles.month} />
                  {Array.from({ length: 7 }, (_, dayIndex) => (
                    <span key={dayIndex} className={`${styles.day} ${styles.loading}`} data-level={0} />
                  ))}
                </div>
              ))}
        </div>
      </div>

      <div className={styles.footer}>
        <a href={profileUrl} target="_blank" rel="noopener noreferrer" className={styles.total}>
          {days ? t.github.total(total) : t.github.loading}
        </a>
        <div className={styles.legend} aria-hidden="true">
          {t.github.less}
          {[0, 1, 2, 3, 4].map((level) => (
            <span key={level} className={styles.day} data-level={level} />
          ))}
          {t.github.more}
        </div>
      </div>
    </div>
  )
}

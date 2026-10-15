export interface Experience {
  id: string
  company: string
  /** Página de la empresa: el nombre se vuelve un link */
  companyUrl?: string
  position: string
  /** Ej: 'Abr. 2026 – Jul. 2026 · 4 meses' */
  period: string
  /** Ej: 'Santo Domingo · Presencial' */
  location: string
  description: string
  achievements: string[]
  technologies: string[]
}

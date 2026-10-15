export interface SocialLinks {
  github: string
  linkedin: string
  instagram: string
  email: string
  /** Número con código de país y solo dígitos, ej: 18095551234. Vacío = sin botón de WhatsApp */
  whatsapp: string
}

export interface Stat {
  value: string
  label: string
}

export interface Profile {
  name: string
  shortName: string
  initials: string
  role: string
  summary: string[]
  about: string[]
  stats: Stat[]
  photoPath: string
  illustrationPath: string
  cvPath: string
  social: SocialLinks
}

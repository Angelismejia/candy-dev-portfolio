import type { Certification, Education } from './Education'
import type { Experience } from './Experience'
import type { Profile } from './Profile'
import type { FeaturedProject, Project } from './Project'
import type { SkillGroup } from './SkillGroup'

export interface Learning {
  intro: string
  focusAreas: string[]
  closing: string
}

export interface Contact {
  message: string
  /** Llave pública de Web3Forms: envía los mensajes del formulario a tu correo. Vacía = abre el correo */
  formAccessKey: string
}

// Idiomas en los que está escrito el portafolio
export type Language = 'es' | 'en'

// El agregado completo: todo lo que muestra el portafolio
export interface Portfolio {
  profile: Profile
  experiences: Experience[]
  skillGroups: SkillGroup[]
  featuredProject: FeaturedProject
  projects: Project[]
  education: Education[]
  certifications: Certification[]
  learning: Learning
  contact: Contact
}

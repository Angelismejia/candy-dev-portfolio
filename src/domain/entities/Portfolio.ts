import type { Certification, Education } from './Education'
import type { Experience } from './Experience'
import type { Profile } from './Profile'
import type { Project } from './Project'
import type { SkillGroup } from './SkillGroup'

export interface Learning {
  intro: string
  focusAreas: string[]
  closing: string
}

export interface Contact {
  message: string
  desiredRoles: string[]
  extraNote: string
}

// El agregado completo: todo lo que muestra el portafolio
export interface Portfolio {
  profile: Profile
  experiences: Experience[]
  skillGroups: SkillGroup[]
  projects: Project[]
  education: Education[]
  certifications: Certification[]
  learning: Learning
  contact: Contact
}

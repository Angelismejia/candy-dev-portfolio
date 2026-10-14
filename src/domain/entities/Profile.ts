export interface SocialLinks {
  github: string
  linkedin: string
  instagram: string
  email: string
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
  highlightedSkills: string[]
  stats: Stat[]
  photoPath: string
  illustrationPath: string
  cvPath: string
  social: SocialLinks
}

export interface SocialLinks {
  github: string
  linkedin: string
  email: string
}

export interface Stat {
  value: string
  label: string
}

export interface Strength {
  title: string
  description: string
}

export interface Profile {
  name: string
  shortName: string
  initials: string
  role: string
  summary: string[]
  about: string[]
  highlightedSkills: string[]
  strengths: Strength[]
  stats: Stat[]
  photoPath: string
  illustrationPath: string
  cvPath: string
  social: SocialLinks
  isOpenToWork: boolean
}

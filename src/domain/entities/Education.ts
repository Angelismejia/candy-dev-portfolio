export interface Education {
  id: string
  degree: string
  institution: string
  /** Página de la institución: el nombre se vuelve un link */
  institutionUrl?: string
  description: string
  period: string
}

export interface Certification {
  id: string
  name: string
  description: string
  year: string
  /** PDF dentro de public/, ej: 'certificados/angular.pdf' */
  certificatePath?: string
}

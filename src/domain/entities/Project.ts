export interface Project {
  id: string
  name: string
  tagline: string
  description: string[]
  technologies: string[]
  demoUrl?: string
  repositoryUrl?: string
  /** Captura horizontal (16:9) dentro de public/ para la portada de la tarjeta. Sin ella se muestra el nombre sobre un color */
  coverImage?: string
}

// Proyecto principal: se presenta en grande, con capturas que se desplazan
export interface FeaturedProject extends Project {
  highlights: string[]
  note: {
    title: string
    text: string
  }
  motivation: string
  /** Capturas verticales (vista de celular) dentro de public/. Vacío = se muestran marcos de ejemplo */
  screenshots: string[]
}

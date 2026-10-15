import type { Language, Portfolio } from '../../domain/entities/Portfolio'
import type { PortfolioRepository } from '../../domain/repositories/PortfolioRepository'
import { portfolioContentEn } from '../content/portfolio.content.en'
import { portfolioContent } from '../content/portfolio.content'

const contentByLanguage: Record<Language, Portfolio> = {
  es: portfolioContent,
  en: portfolioContentEn,
}

// Implementación concreta del contrato: lee el contenido desde archivos locales (uno por idioma).
export class StaticPortfolioRepository implements PortfolioRepository {
  getPortfolio(language: Language): Portfolio {
    return contentByLanguage[language]
  }
}

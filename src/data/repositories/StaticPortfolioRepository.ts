import type { Portfolio } from '../../domain/entities/Portfolio'
import type { PortfolioRepository } from '../../domain/repositories/PortfolioRepository'
import { portfolioContent } from '../content/portfolio.content'

// Implementación concreta del contrato: lee el contenido desde un archivo local.
export class StaticPortfolioRepository implements PortfolioRepository {
  getPortfolio(): Portfolio {
    return portfolioContent
  }
}

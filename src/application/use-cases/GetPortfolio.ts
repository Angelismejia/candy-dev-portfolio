import type { Language, Portfolio } from '../../domain/entities/Portfolio'
import type { PortfolioRepository } from '../../domain/repositories/PortfolioRepository'

// Caso de uso: "obtener el portafolio".
// Depende de la INTERFAZ, no de la implementación (inversión de dependencias).
export class GetPortfolio {
  private readonly repository: PortfolioRepository

  constructor(repository: PortfolioRepository) {
    this.repository = repository
  }

  execute(language: Language): Portfolio {
    return this.repository.getPortfolio(language)
  }
}

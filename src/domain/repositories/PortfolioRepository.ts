import type { Language, Portfolio } from '../entities/Portfolio'

// Contrato: el dominio dice QUÉ necesita, no DE DÓNDE viene.
// Hoy los datos están en un archivo .ts; mañana podrían venir de una API
// y solo habría que crear otra implementación de esta interfaz.
export interface PortfolioRepository {
  getPortfolio(language: Language): Portfolio
}

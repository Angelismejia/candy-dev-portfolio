import { GetPortfolio } from '../../application/use-cases/GetPortfolio'
import { StaticPortfolioRepository } from '../../data/repositories/StaticPortfolioRepository'

// Composición: aquí se conecta la implementación concreta con el caso de uso.
const getPortfolio = new GetPortfolio(new StaticPortfolioRepository())

export function usePortfolio() {
  return getPortfolio.execute()
}

// Arma rutas a archivos de /public respetando la base de GitHub Pages
export function publicAsset(path: string) {
  return `${import.meta.env.BASE_URL}${path}`
}

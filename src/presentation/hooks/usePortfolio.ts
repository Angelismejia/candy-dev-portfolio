import { GetPortfolio } from '../../application/use-cases/GetPortfolio'
import { StaticPortfolioRepository } from '../../data/repositories/StaticPortfolioRepository'
import { useLanguage } from '../i18n/language'

// Composición: aquí se conecta la implementación concreta con el caso de uso.
const getPortfolio = new GetPortfolio(new StaticPortfolioRepository())

// Contenido del portafolio en el idioma elegido
export function usePortfolio() {
  const { language } = useLanguage()
  return getPortfolio.execute(language)
}

// Arma rutas a archivos de /public respetando la base de Vite (BASE_URL)
export function publicAsset(path: string) {
  return `${import.meta.env.BASE_URL}${path}`
}

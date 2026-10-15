// Pantalla de carga: el HTML está en index.html (se ve desde el primer pintado, sin esperar a React)
// y aquí solo se decide cuándo quitarla.

/** Tiempo mínimo en pantalla, para que la animación se alcance a ver aunque todo cargue al instante */
const MIN_MS = 900
/** Pase lo que pase, a los 3 s se quita: nunca bloquea la entrada al portafolio */
const MAX_MS = 3000
/** Lo que dura el fade-out en splash.css (más un margen por si no llega transitionend) */
const FADE_MS = 600

// performance.now() cuenta desde que se abrió la página, no desde que llegó el JavaScript
const waitUntil = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, Math.max(0, ms - performance.now())))

export function hideSplashWhenReady() {
  const splash = document.getElementById('splash')
  if (!splash) return
  const html = document.documentElement

  // "listo" = imágenes iniciales cargadas (evento load) y fuentes aplicadas
  const pageLoaded =
    document.readyState === 'complete'
      ? Promise.resolve()
      : new Promise<void>((resolve) => window.addEventListener('load', () => resolve(), { once: true }))
  const ready = Promise.all([pageLoaded, document.fonts.ready, waitUntil(MIN_MS)])

  Promise.race([ready, waitUntil(MAX_MS)]).then(() => {
    html.classList.add('splash-saliendo')

    const remove = () => {
      splash.remove()
      html.classList.remove('con-splash', 'splash-saliendo')
    }
    splash.addEventListener('transitionend', remove, { once: true })
    setTimeout(remove, FADE_MS)
  })
}

import { useEffect, type CSSProperties } from 'react'

// Muestra con animación cada elemento con data-reveal cuando entra en pantalla.
// `watch` cambia cuando se vuelve a pintar el contenido (por ejemplo, al cambiar de idioma)
// para observar también los elementos nuevos.
export function useRevealOnScroll(watch?: unknown) {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return

    // Solo se ocultan los elementos si el JS está activo (ver global.css)
    document.documentElement.classList.add('reveal-ready')

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px' },
    )

    document.querySelectorAll('[data-reveal]:not(.is-visible)').forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [watch])
}

// Retraso escalonado para listas: cada elemento aparece un poquito después del anterior
export function revealDelay(index: number, step = 0.1): CSSProperties {
  return { '--reveal-delay': `${index * step}s` } as CSSProperties
}

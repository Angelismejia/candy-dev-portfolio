import { createHash } from 'node:crypto'
import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'

// Content Security Policy (recomendada por OWASP): el navegador solo carga scripts, estilos,
// fuentes y conexiones de los orígenes de esta lista. Va como <meta> dentro del HTML
// y solo en el build (en desarrollo rompería la recarga de Vite).
function contentSecurityPolicy(): Plugin {
  return {
    name: 'content-security-policy',
    apply: 'build',
    transformIndexHtml: {
      order: 'post',
      handler(html) {
        // el script del tema va en línea: se permite solo ese, por su huella (hash).
        // El navegador convierte los saltos \r\n (Windows) en \n antes de calcularla, así que aquí también
        const inlineScripts = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(
          ([, code]) => `'sha256-${createHash('sha256').update(code.replace(/\r\n?/g, '\n')).digest('base64')}'`,
        )

        const policy = [
          "default-src 'self'",
          `script-src 'self' ${inlineScripts.join(' ')}`,
          "style-src 'self' https://fonts.googleapis.com",
          // React pone algunos estilos en el atributo style (retrasos de animación)
          "style-src-attr 'unsafe-inline'",
          'font-src https://fonts.gstatic.com',
          "img-src 'self' data:",
          // formulario (Web3Forms) y calendario de GitHub
          "connect-src 'self' https://api.web3forms.com https://github-contributions-api.jogruber.de",
          "object-src 'none'",
          "base-uri 'self'",
          "form-action 'self'",
          'upgrade-insecure-requests',
        ].join('; ')

        // justo después del charset (el charset debe ir en los primeros bytes del documento)
        return html.replace(
          '<meta charset="UTF-8">',
          `<meta charset="UTF-8">\n    <meta http-equiv="Content-Security-Policy" content="${policy}">`,
        )
      },
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), contentSecurityPolicy()],
  // Netlify publica en la raíz del dominio: candy-dev-portfolio.netlify.app/
  base: '/',
})

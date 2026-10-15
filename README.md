# Candy's Portfolio 💻✨

Portafolio personal donde comparto quién soy, mis habilidades, mi experiencia
y los proyectos que voy construyendo.

🔗 **En vivo:** [candy-dev-portfolio.netlify.app](https://candy-dev-portfolio.netlify.app)

## ✨ Qué incluye

- Presentación, "Sobre mí" y stack técnico
- Experiencia, proyectos (con uno destacado), educación y certificaciones
- Lo que estoy aprendiendo ahora, con mi calendario de contribuciones de GitHub
- Formulario de contacto (Web3Forms) y botón de WhatsApp
- Español e inglés, tema claro y oscuro
- Diseño adaptado a móvil, accesible con teclado y animaciones al hacer scroll
- Metadatos SEO, imagen para compartir en redes y Content Security Policy

## 🛠️ Tecnologías

| Tecnología | Para qué |
|-----------|----------|
| **React 19 + TypeScript** | Interfaz por componentes, con tipos |
| **Vite** | Servidor de desarrollo y build |
| **CSS Modules** | Estilos aislados por componente |
| **oxlint** | Revisión del código |
| **Netlify** | Publicación del sitio |

El proyecto empezó en HTML y CSS puros y después lo reconstruí en React.
El diseño lo boceté primero en Canva.

## 🗂️ Estructura

El código sigue una arquitectura por capas (Clean Architecture):

```
src/
├── domain/         # entidades (Profile, Project, Experience...) e interfaces
├── application/    # casos de uso (GetPortfolio)
├── data/           # contenido en español e inglés y su repositorio
└── presentation/   # componentes, secciones, hooks, i18n y estilos
```

Para cambiar textos, proyectos o experiencia solo hay que editar
`src/data/content/`.

## 🚀 Ejecutarlo en local

Necesitas [Node.js](https://nodejs.org/) instalado.

```bash
npm install       # instala las dependencias
npm run dev       # servidor de desarrollo
npm run build     # build de producción en dist/
npm run preview   # sirve el build para probarlo
npm run lint      # revisa el código
```

## 📄 Licencia

[MIT](LICENSE) © 2026 Candy Angelis Mejia Soriano

---

Hecho con mucho cariño mientras aprendo. 🚀

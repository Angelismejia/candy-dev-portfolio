import type { Portfolio } from '../../domain/entities/Portfolio'

// ✏️ Aquí está TODO el texto del portafolio en español.
// La versión en inglés está en portfolio.content.en.ts: si cambias algo aquí, cámbialo también allá.
export const portfolioContent: Portfolio = {
  profile: {
    name: 'Candy Angelis Mejía Soriano',
    shortName: 'Candy',
    initials: 'CM',
    role: 'Junior Software Developer',
    summary: [
      'Desarrolladora de Software egresada del ITLA, con experiencia en frontend y backend.',
      'Me apasiona transformar ideas en soluciones digitales, crear aplicaciones funcionales y seguir creciendo profesionalmente.',
    ],
    about: [
      'Soy Desarrolladora de Software Junior egresada del Instituto Tecnológico de Las Américas (ITLA), con 8 meses de experiencia práctica adquirida en dos empresas.',
      'He trabajado tanto en frontend como en backend utilizando tecnologías como C#, .NET, React, TypeScript, SQL Server y MongoDB.',
      'Disfruto trabajar en equipo, aprender de otras personas, conocer nuevas tecnologías y fortalecer mis conocimientos mediante la práctica constante.',
      'Mi objetivo es seguir creciendo como desarrolladora y participar en proyectos donde pueda aprender, aportar y enfrentar nuevos retos.',
    ],
    stats: [
      { value: '8', label: 'meses de experiencia' },
      { value: '2', label: 'empresas' },
      { value: '3', label: 'proyectos destacados' },
    ],
    photoPath: 'images/portada-sin-fondo.webp',
    illustrationPath: 'images/escritorio-sin-fondo.webp',
    cvPath: 'cv-candy-mejia.pdf',
    social: {
      github: 'https://github.com/Angelismejia',
      linkedin: 'https://www.linkedin.com/in/candy-angelis-mej%C3%ADa/',
      instagram: 'https://www.instagram.com/mejia_angelis/',
      email: 'angelismejia06@gmail.com',
      // código de país (1, República Dominicana) + número, solo dígitos
      whatsapp: '18099777238',
    },
  },

  experiences: [
    {
      id: 'banreservas',
      company: 'CTB Banreservas',
      companyUrl: 'https://www.banreservas.com/',
      position: 'Desarrolladora de Software · Prácticas',
      period: 'Abr. 2026 – Jul. 2026 · 4 meses',
      location: 'Santo Domingo · Presencial',
      description: 'Mantenimiento y mejora de aplicaciones internas en la Gerencia de Desarrollo Apoyo Core.',
      achievements: [
        'Interfaces en React y TypeScript: formularios, dashboards y validaciones.',
        'Carga masiva de archivos Excel con validación de datos y manejo de errores.',
        'Integración de servicios en C#/.NET y mejoras en filtros, exportaciones y fechas.',
      ],
      technologies: ['React', 'TypeScript', 'C#', '.NET', 'Docker', 'Keycloak'],
    },
    {
      id: 'tectrics',
      company: 'TECTRICS SRL',
      position: 'Desarrolladora de Software · Prácticas',
      period: 'Ene. 2026 – Abr. 2026 · 4 meses',
      location: 'Santo Domingo · Remoto',
      description: 'Desarrollo frontend en un equipo ágil que trabajaba con Scrum.',
      achievements: [
        'Mejora de interfaces de usuario e integración con servicios backend.',
        'Funcionalidades con C#, SQL Server y MongoDB bajo Clean Architecture.',
        'Trabajo en equipo con control de versiones (Git) y buenas prácticas de desarrollo.',
      ],
      technologies: ['C#', 'SQL Server', 'MongoDB', 'Clean Architecture', 'Git', 'Scrum'],
    },
  ],

  skillGroups: [
    {
      id: 'backend',
      title: 'Backend',
      description: 'Construyo APIs y lógica de negocio con buenas prácticas y arquitectura limpia.',
      skills: ['C#', '.NET / ASP.NET Core', 'REST APIs', 'Entity Framework Core', 'Clean Architecture', 'SignalR'],
    },
    {
      id: 'frontend',
      title: 'Frontend',
      description: 'Creo interfaces claras y funcionales, pensando en la persona que las usa.',
      skills: ['Angular', 'React', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
    },
    {
      id: 'databases',
      title: 'Bases de datos',
      description: 'Conocimientos básicos en bases de datos relacionales y NoSQL.',
      skills: ['SQL Server', 'MongoDB', 'Firebase / Firestore'],
    },
    {
      id: 'tools',
      title: 'Herramientas',
      description: 'Lo que uso día a día para construir, colaborar y desplegar.',
      skills: ['Git', 'GitHub', 'Netlify', 'Azure', 'Canva'],
    },
  ],

  services: [
    {
      id: 'web',
      title: 'Páginas web',
      description: 'Sitios modernos, adaptables a celulares y computadoras, para negocios, emprendimientos y profesionales.',
    },
    {
      id: 'catalog',
      title: 'Catálogos digitales',
      description: 'Menús y catálogos online para mostrar productos, precios y facilitar el contacto con clientes.',
    },
    {
      id: 'apps',
      title: 'Aplicaciones web',
      description: 'Sistemas personalizados para organizar información, gestionar procesos y automatizar tareas.',
    },
    {
      id: 'api',
      title: 'Backend y APIs',
      description: 'Desarrollo e integración de APIs, bases de datos y funcionalidades para aplicaciones web.',
    },
  ],

  featuredProject: {
    id: 'betterme',
    name: 'BetterMe',
    tagline: 'Tu compañero para crecer un poquito cada día',
    description: [
      'BetterMe es una aplicación full-stack para organizar objetivos, tareas y hábitos, y ver tu progreso con el tiempo. Además tiene un lado social: perfiles, seguidores y chat en tiempo real para motivarse entre amigos.',
    ],
    highlights: [
      'Objetivos, tareas y hábitos con seguimiento de progreso',
      'Diario personal para registrar cómo te va',
      'Insignias y rachas que mantienen la motivación',
      'Perfiles, seguidores y chat en tiempo real con SignalR',
      'Inicio de sesión seguro con JWT',
    ],
    note: {
      title: 'Full-stack con Clean Architecture',
      text: 'Angular en el frontend y ASP.NET Core + PostgreSQL en el backend.',
    },
    motivation:
      'BetterMe nació de una necesidad personal: organizar mi día y mantener mis metas siempre visibles. Comprobé que cuando mis objetivos y tareas están escritos y a la vista, mi compromiso con cumplirlos aumenta. Quise llevar esa experiencia más allá de lo individual e incorporé funciones sociales para compartir el progreso con amigos y motivarnos mutuamente, convirtiendo la productividad en una experiencia más cercana y constante.',
    technologies: ['Angular', 'ASP.NET Core', 'C#', 'PostgreSQL', 'Entity Framework Core', 'SignalR', 'JWT'],
    // 9 capturas verticales tipo celular; la galería las reparte en 3 columnas
    screenshots: [
      'images/betterme/betterme-1-landing.webp',
      'images/betterme/betterme-2-dashboard.webp',
      'images/betterme/betterme-3-objetivos.webp',
      'images/betterme/betterme-4-tareas.webp',
      'images/betterme/betterme-5-estadisticas.webp',
      'images/betterme/betterme-6-perfil.webp',
      'images/betterme/betterme-7-chat.webp',
      'images/betterme/betterme-8-calendario.webp',
      'images/betterme/betterme-9-insignias.webp',
    ],
    demoUrl: 'https://better-me-d6gugua2dnhucpfg.centralus-01.azurewebsites.net/',
    repositoryUrl: 'https://github.com/Angelismejia/SeguimientoDeObjetivos',
  },

  projects: [
    {
      id: 'burger-cravvy',
      name: 'Burger Cravvy',
      tagline: 'Hamburguesería retro full-stack',
      description: [
        'Web de una hamburguesería ficticia donde el cliente ve el menú, hace su pedido y sigue su estado en tiempo real.',
        'Incluye un panel de cocina con roles de empleado y administrador para gestionar pedidos y productos. Construida con Clean Architecture en el frontend y el backend, con pruebas automatizadas e integración continua.',
      ],
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'ASP.NET Core', 'C#', 'SQL Server', 'Entity Framework Core', 'SignalR', 'JWT'],
      demoUrl: 'https://burger-cravvy-fullstack.pages.dev/',
      repositoryUrl: 'https://github.com/Angelismejia/burger-cravvy-fullstack',
      coverImage: 'images/proyectos/burger-cravvy.webp',
    },
    {
      id: 'kapicua',
      name: 'Kapicua',
      tagline: 'Gestión de partidas de dominó',
      description: [
        'Aplicación para gestionar partidas de dominó, jugadores, resultados y estadísticas.',
        'Permite registrar partidas y rondas, consultar historiales, visualizar estadísticas, seleccionar campeones y sincronizar información entre dispositivos.',
      ],
      technologies: ['Flutter', 'Dart', 'Firebase Authentication', 'Firestore', 'Provider', 'Clean Architecture'],
      demoUrl: 'https://kapicua.web.app/',
      repositoryUrl: 'https://github.com/Angelismejia/kapicua',
      coverImage: 'images/proyectos/kapicua.webp',
    },
    {
      id: 'dulce-encargo',
      name: 'Dulce Encargo',
      tagline: 'Pedidos para una repostería artesanal',
      description: [
        'App de pedidos para una repostería: catálogo de 62 postres con búsqueda y filtros, carrito, cupones de descuento, favoritos e historial de pedidos.',
        'El pedido se envía listo por WhatsApp. Funciona sin conexión gracias a Hive y se adapta a celular, tablet y escritorio.',
      ],
      technologies: ['Flutter', 'Dart', 'Provider', 'Hive', 'Material 3', 'Firebase Hosting'],
      demoUrl: 'https://dulce-encargo.web.app/',
      repositoryUrl: 'https://github.com/Angelismejia/dulce_encargo_app',
      coverImage: 'images/proyectos/dulce-encargo.webp',
    },
    {
      id: 'coolant-proniw',
      name: 'Coolant Proniw',
      tagline: 'Cliente real · Sitio en producción',
      description: [
        'Sitio web corporativo para Coolant Proniw, empresa dominicana que fabrica y distribuye refrigerantes para vehículos.',
        'Muestra el catálogo de productos, la información de la empresa y contacto directo por WhatsApp para cotizar, con mapa, horario y diseño adaptado a celular.',
      ],
      technologies: ['ASP.NET Core MVC', 'C#', 'Razor', 'Bootstrap 5', 'JavaScript', 'SEO'],
      // el repositorio es privado por confidencialidad del cliente: solo se enlaza el sitio
      demoUrl: 'https://coolantproniw.com/',
      coverImage: 'images/proyectos/coolant-proniw.webp',
    },
    {
      id: 'islaride-pr',
      name: 'IslaRide PR',
      tagline: 'Landing page para transporte privado',
      description: [
        'Landing page para un servicio de transporte en Puerto Rico: traslados al aeropuerto, hoteles, playas y recorridos turísticos.',
        'El formulario de reserva valida los datos y abre WhatsApp con el mensaje ya escrito. Pensada para celular, con botones rápidos para llamar, escribir o reservar.',
      ],
      technologies: ['HTML', 'Tailwind CSS', 'JavaScript', 'Netlify'],
      demoUrl: 'https://islaride-pr.netlify.app/',
      coverImage: 'images/proyectos/islaride-pr.webp',
    },
  ],

  // Aparecen al tocar la flecha de "Más proyectos"
  extraProjects: [
    {
      id: 'prediccion-texto',
      name: 'Sistema de Predicción de Texto Especulativo',
      tagline: 'Proyecto en equipo · Líder',
      description: [
        'Proyecto desarrollado en equipo para la asignatura de Programación Paralela del ITLA, donde desempeñé el rol de líder del equipo.',
        'El sistema analiza documentos y utiliza procesamiento paralelo para predecir posibles palabras mientras el usuario escribe.',
      ],
      technologies: [
        'C#',
        '.NET',
        'ASP.NET Core',
        'Task Parallel Library',
        'OpenXML',
        'iText7',
        'HTML',
        'CSS',
        'JavaScript',
      ],
      repositoryUrl: 'https://github.com/Angelismejia/buscador-paralelo-especulativo',
      coverImage: 'images/proyectos/prediccion-texto.webp',
    },
  ],

  education: [
    {
      id: 'itla',
      degree: 'Técnico Superior en Desarrollo de Software',
      institution: 'Instituto Tecnológico de Las Américas — ITLA',
      institutionUrl: 'https://educapermanente.itla.edu.do/',
      description:
        'Formación en desarrollo frontend y backend, programación orientada a objetos, bases de datos, APIs, arquitectura de software y desarrollo de aplicaciones.',
      period: '2023 – 2026',
    },
  ],

  // 📄 Los PDF van en public/certificados/ con estos nombres (angular.pdf, indotel.pdf, scrum.pdf, cisco.pdf)
  certifications: [
    {
      id: 'angular',
      name: 'Desarrollo Web Front-End con Angular — ITLA',
      description: 'Curso de 40 horas: desarrollo de aplicaciones web con Angular y TypeScript.',
      year: '2026',
      certificatePath: 'certificados/angular.pdf',
    },
    {
      id: 'indotel',
      name: 'Desarrollo Web Full Stack (Intermedio) — INDOTEL',
      description: 'Programa Talento Digital de INDOTEL y el BID, 80 horas: desarrollo frontend y backend.',
      year: '2026',
      certificatePath: 'certificados/indotel.pdf',
    },
    {
      id: 'scrum',
      name: 'Fundamentos de Scrum — soylíder.net',
      description: 'Fundamentos de Scrum, metodologías ágiles y trabajo colaborativo.',
      year: '2025',
      certificatePath: 'certificados/scrum.pdf',
    },
    {
      id: 'cisco',
      name: 'IT Essentials: PC Hardware and Software — Cisco',
      description: 'Cisco Networking Academy: hardware, software, componentes de computadoras y soporte técnico.',
      year: '2023',
      certificatePath: 'certificados/cisco.pdf',
    },
  ],

  learning: {
    intro:
      'Una de las cosas que más disfruto del desarrollo de software es que siempre existe algo nuevo por aprender. Actualmente continúo fortaleciendo mis conocimientos en:',
    focusAreas: ['C#', '.NET', 'Angular', 'Clean Architecture', 'Desarrollo Full Stack'],
    closing: 'Me gusta practicar constantemente, explorar nuevas tecnologías y aprender de otros desarrolladores.',
  },

  contact: {
    message:
      'Me interesa formar parte de proyectos donde pueda aportar mis conocimientos, asumir nuevos retos y seguir creciendo profesionalmente.',
    // TODO: pegar la access key de https://web3forms.com (se pide gratis con el Gmail donde quieres recibir los mensajes)
    formAccessKey: '',
  },
}

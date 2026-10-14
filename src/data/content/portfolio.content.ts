import type { Portfolio } from '../../domain/entities/Portfolio'

// ✏️ Aquí está TODO el texto del portafolio.
// Para cambiar algo (un proyecto, un link, una tecnología) solo se edita este archivo.
export const portfolioContent: Portfolio = {
  profile: {
    name: 'Candy Angelis Mejía Soriano',
    shortName: 'Candy',
    initials: 'CM',
    role: 'Junior Software Developer',
    summary: [
      'Desarrolladora de Software egresada del ITLA, con experiencia en desarrollo frontend y backend.',
      'Me gusta aprender, trabajar en equipo, conocer nuevas tecnologías y convertir ideas en soluciones reales.',
    ],
    about: [
      'Soy Desarrolladora de Software Junior egresada del Instituto Tecnológico de Las Américas (ITLA), con 8 meses de experiencia práctica adquirida en dos empresas.',
      'He trabajado tanto en frontend como en backend utilizando tecnologías como C#, .NET, React, TypeScript, SQL Server y MongoDB.',
      'Disfruto trabajar en equipo, aprender de otras personas, conocer nuevas tecnologías y fortalecer mis conocimientos mediante la práctica constante.',
      'Mi objetivo es seguir creciendo como desarrolladora y participar en proyectos donde pueda aprender, aportar y enfrentar nuevos retos.',
    ],
    highlightedSkills: ['C#', '.NET', 'Angular', 'React', 'TypeScript'],
    stats: [
      { value: '8', label: 'meses de experiencia' },
      { value: '2', label: 'empresas' },
      { value: '3', label: 'proyectos destacados' },
    ],
    photoPath: 'images/portada.png',
    illustrationPath: 'images/escritorio.png',
    cvPath: 'cv-candy-mejia.pdf',
    social: {
      github: 'https://github.com/Angelismejia',
      linkedin: 'https://www.linkedin.com/in/candyangelismejia/',
      instagram: 'https://www.instagram.com/mejia_angelis/',
      email: 'angelismejia06@gmail.com',
    },
  },

  experiences: [
    {
      id: 'banreservas',
      company: 'Banreservas',
      position: 'Pasante de Desarrollo de Software',
      description:
        'Participé en el desarrollo y mantenimiento de aplicaciones internas, trabajando tanto en frontend como en backend.',
      achievements: [
        'Desarrollo con React y TypeScript.',
        'Desarrollo de funcionalidades con C# y .NET.',
        'Procesos de carga masiva mediante archivos Excel.',
        'Uso de Docker y Keycloak.',
        'Trabajo colaborativo dentro de un equipo de desarrollo.',
      ],
      technologies: ['React', 'TypeScript', 'C#', '.NET', 'Docker', 'Keycloak'],
    },
    {
      id: 'tectrics',
      company: 'TECTRICS SRL',
      position: 'Pasante de Desarrollo de Software',
      description:
        'Participé en proyectos de desarrollo backend trabajando con bases de datos, APIs y arquitectura de software.',
      achievements: [
        'Desarrollo con C# y .NET.',
        'Desarrollo y trabajo con APIs.',
        'SQL Server y MongoDB.',
        'Clean Architecture.',
        'Git y trabajo bajo metodología Scrum.',
      ],
      technologies: ['C#', '.NET', 'SQL Server', 'MongoDB', 'Git', 'Scrum'],
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
      description: 'Diseño y consulto datos relacionales y NoSQL.',
      skills: ['SQL Server', 'MongoDB', 'Firebase / Firestore'],
    },
    {
      id: 'tools',
      title: 'Herramientas',
      description: 'Lo que uso día a día para construir, colaborar y desplegar.',
      skills: ['Git', 'GitHub', 'Docker', 'Keycloak', 'Azure', 'Figma', 'Canva'],
    },
  ],

  projects: [
    {
      id: 'betterme',
      name: 'BetterMe',
      tagline: 'Seguimiento de objetivos',
      description: [
        'Aplicación full-stack para organizar objetivos, tareas y hábitos, permitiendo a los usuarios registrar y visualizar su progreso.',
        'Incluye perfiles, diario personal, insignias, rachas, seguidores y chat en tiempo real.',
      ],
      technologies: [
        'Angular',
        'ASP.NET Core',
        'C#',
        'SQL Server',
        'Entity Framework Core',
        'SignalR',
        'JWT',
        'Clean Architecture',
      ],
      // demoUrl: 'https://...',  ← pon aquí el link cuando la app esté publicada
      repositoryUrl: 'https://github.com/Angelismejia/BetterMe',
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
      repositoryUrl: 'https://github.com/Angelismejia/Kapicua',
    },
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
      repositoryUrl: 'https://github.com/Angelismejia/Sistema-de-Prediccion-de-Texto-Especulativo',
    },
  ],

  education: [
    {
      id: 'itla',
      degree: 'Técnico Superior en Desarrollo de Software',
      institution: 'Instituto Tecnológico de Las Américas — ITLA',
      description:
        'Formación en desarrollo frontend y backend, programación orientada a objetos, bases de datos, APIs, arquitectura de software y desarrollo de aplicaciones.',
      period: '2023 – 2026',
    },
  ],

  certifications: [
    {
      id: 'angular',
      name: 'Desarrollo Web con Angular',
      description: 'Desarrollo de aplicaciones web utilizando Angular y TypeScript.',
      year: '2026',
    },
    {
      id: 'indotel',
      name: 'Desarrollo Full Stack — INDOTEL',
      description: 'Tecnologías y conceptos de desarrollo frontend y backend.',
      year: '2026',
    },
    {
      id: 'scrum',
      name: 'Scrum Fundamentals Certified',
      description: 'Fundamentos de Scrum, metodologías ágiles y trabajo colaborativo.',
      year: '2023',
    },
    {
      id: 'cisco',
      name: 'PC Hardware — Cisco',
      description: 'Fundamentos de hardware, componentes de computadoras y soporte técnico.',
      year: '2023',
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
      'Estoy abierta a nuevas oportunidades donde pueda seguir creciendo profesionalmente, aportar mis conocimientos y adquirir nuevas experiencias.',
    desiredRoles: [
      'Junior Software Developer',
      '.NET Developer',
      'Backend Developer',
      'Frontend Developer',
      'Full Stack Developer',
    ],
    extraNote: 'También estoy abierta a posiciones relacionadas con QA técnico.',
  },
}

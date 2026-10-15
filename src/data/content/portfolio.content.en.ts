import type { Portfolio } from '../../domain/entities/Portfolio'
import { portfolioContent as es } from './portfolio.content'

// ✏️ Texto del portafolio en inglés.
// Solo se traducen los textos: links, imágenes, PDFs y demos se toman de la versión en español.
export const portfolioContentEn: Portfolio = {
  profile: {
    ...es.profile,
    cvPath: 'cv-candy-mejia-en.pdf',
    summary: [
      'Software Developer graduated from ITLA, with experience in frontend and backend development.',
      'I enjoy learning, working as part of a team, exploring new technologies and turning ideas into real solutions.',
    ],
    about: [
      "I'm a Junior Software Developer graduated from the Instituto Tecnológico de Las Américas (ITLA), with 8 months of hands-on experience gained at two companies.",
      "I've worked on both frontend and backend using technologies such as C#, .NET, React, TypeScript, SQL Server and MongoDB.",
      'I enjoy teamwork, learning from others, exploring new technologies and strengthening my skills through constant practice.',
      'My goal is to keep growing as a developer and take part in projects where I can learn, contribute and take on new challenges.',
    ],
    stats: [
      { value: '8', label: 'months of experience' },
      { value: '2', label: 'companies' },
      { value: '3', label: 'featured projects' },
    ],
  },

  experiences: [
    {
      ...es.experiences[0],
      position: 'Software Developer · Internship',
      period: 'Apr 2026 – Jul 2026 · 4 months',
      location: 'Santo Domingo · On-site',
      description: 'Maintained and improved internal applications in the Core Support Development department.',
      achievements: [
        'Interfaces with React and TypeScript: forms, dashboards and validations.',
        'Bulk Excel file uploads with data validation and error handling.',
        'Service integration in C#/.NET and improvements to filters, exports and dates.',
      ],
    },
    {
      ...es.experiences[1],
      position: 'Software Developer · Internship',
      period: 'Jan 2026 – Apr 2026 · 4 months',
      location: 'Santo Domingo · Remote',
      description: 'Frontend development in an agile team working with Scrum.',
      achievements: [
        'Improved user interfaces and integrated them with backend services.',
        'Built features with C#, SQL Server and MongoDB following Clean Architecture.',
        'Teamwork with version control (Git) and development best practices.',
      ],
    },
  ],

  skillGroups: [
    {
      ...es.skillGroups[0],
      description: 'I build APIs and business logic following best practices and clean architecture.',
    },
    {
      ...es.skillGroups[1],
      description: 'I create clear, functional interfaces, designed around the people who use them.',
    },
    {
      ...es.skillGroups[2],
      title: 'Databases',
      description: 'Basic knowledge of relational and NoSQL databases.',
    },
    {
      ...es.skillGroups[3],
      title: 'Tools',
      description: 'What I use every day to build, collaborate and deploy.',
    },
  ],

  featuredProject: {
    ...es.featuredProject,
    tagline: 'Your companion to grow a little every day',
    description: [
      'BetterMe is a full-stack app to organize goals, tasks and habits, and track your progress over time. It also has a social side: profiles, followers and real-time chat to keep each other motivated.',
    ],
    highlights: [
      'Goals, tasks and habits with progress tracking',
      'Personal journal to record how things are going',
      'Badges and streaks that keep you motivated',
      'Profiles, followers and real-time chat with SignalR',
      'Secure sign-in with JWT',
    ],
    note: {
      title: 'Full-stack with Clean Architecture',
      text: 'Angular on the frontend and ASP.NET Core + SQL Server on the backend.',
    },
    motivation:
      'BetterMe was born from a personal need: organizing my day and keeping my goals always in sight. I found that when my goals and tasks are written down and visible, my commitment to achieving them grows. I wanted to take that experience beyond the individual, so I added social features to share progress with friends and motivate each other, turning productivity into a closer and more consistent experience.',
  },

  projects: [
    {
      ...es.projects[0],
      tagline: 'Full-stack retro burger joint',
      description: [
        'Website for a fictional burger joint where customers browse the menu, place an order and follow its status in real time.',
        'Includes a kitchen panel with employee and admin roles to manage orders and products. Built with Clean Architecture on both frontend and backend, with automated tests and continuous integration.',
      ],
    },
    {
      ...es.projects[1],
      tagline: 'Domino game management',
      description: [
        'An app to manage domino games, players, results and statistics.',
        'Lets you record games and rounds, browse history, view statistics, pick champions and sync data across devices.',
      ],
    },
    {
      ...es.projects[2],
      name: 'Speculative Text Prediction System',
      tagline: 'Team project · Team lead',
      description: [
        "A team project for ITLA's Parallel Programming course, where I served as team lead.",
        'The system analyzes documents and uses parallel processing to predict possible words while the user types.',
      ],
    },
  ],

  education: [
    {
      ...es.education[0],
      degree: 'Associate Degree in Software Development',
      description:
        'Training in frontend and backend development, object-oriented programming, databases, APIs, software architecture and application development.',
    },
  ],

  certifications: [
    {
      ...es.certifications[0],
      name: 'Front-End Web Development with Angular — ITLA',
      description: '40-hour course: building web applications with Angular and TypeScript.',
    },
    {
      ...es.certifications[1],
      name: 'Full Stack Web Development (Intermediate) — INDOTEL',
      description: 'Talento Digital program by INDOTEL and the IDB, 80 hours: frontend and backend development.',
    },
    {
      ...es.certifications[2],
      name: 'Scrum Fundamentals — soylíder.net',
      description: 'Scrum fundamentals, agile methodologies and collaborative work.',
    },
    {
      ...es.certifications[3],
      description: 'Cisco Networking Academy: hardware, software, computer components and technical support.',
    },
  ],

  learning: {
    intro:
      "One of the things I enjoy most about software development is that there's always something new to learn. I'm currently strengthening my skills in:",
    focusAreas: ['C#', '.NET', 'Angular', 'Clean Architecture', 'Full Stack Development'],
    closing: 'I like to practice constantly, explore new technologies and learn from other developers.',
  },

  contact: {
    ...es.contact,
    message:
      "I'm interested in joining projects where I can contribute my knowledge, take on new challenges and keep growing professionally.",
  },
}

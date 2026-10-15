import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { WhatsAppButton } from './components/WhatsAppButton'
import { usePortfolio } from './hooks/usePortfolio'
import { useRevealOnScroll } from './hooks/useRevealOnScroll'
import { useLanguage } from './i18n/language'
import { About } from './sections/About'
import { ContactSection } from './sections/ContactSection'
import { EducationSection } from './sections/EducationSection'
import { ExperienceSection } from './sections/ExperienceSection'
import { Hero } from './sections/Hero'
import { Learning } from './sections/Learning'
import { Projects } from './sections/Projects'
import { TechStack } from './sections/TechStack'

export function App() {
  const portfolio = usePortfolio()
  const { t } = useLanguage()
  useRevealOnScroll(portfolio)

  return (
    <>
      {/* para quien navega con teclado: salta el menú y va directo al contenido */}
      <a className="skip-link" href="#contenido">
        {t.meta.skip}
      </a>
      <Navbar />
      <main id="contenido">
        <Hero profile={portfolio.profile} />
        <About profile={portfolio.profile} />
        <TechStack skillGroups={portfolio.skillGroups} />
        <ExperienceSection experiences={portfolio.experiences} />
        <Projects featured={portfolio.featuredProject} projects={portfolio.projects} />
        <EducationSection education={portfolio.education} certifications={portfolio.certifications} />
        <Learning learning={portfolio.learning} githubUrl={portfolio.profile.social.github} />
        <ContactSection contact={portfolio.contact} social={portfolio.profile.social} />
      </main>
      <Footer social={portfolio.profile.social} />
      <WhatsAppButton phone={portfolio.profile.social.whatsapp} />
    </>
  )
}

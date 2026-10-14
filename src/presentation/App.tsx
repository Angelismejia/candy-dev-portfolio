import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { usePortfolio } from './hooks/usePortfolio'
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

  return (
    <>
      <Navbar />
      <main>
        <Hero profile={portfolio.profile} />
        <About profile={portfolio.profile} />
        <TechStack skillGroups={portfolio.skillGroups} />
        <ExperienceSection experiences={portfolio.experiences} />
        <Projects projects={portfolio.projects} />
        <EducationSection education={portfolio.education} certifications={portfolio.certifications} />
        <Learning learning={portfolio.learning} />
        <ContactSection contact={portfolio.contact} social={portfolio.profile.social} />
      </main>
      <Footer social={portfolio.profile.social} />
    </>
  )
}

import { HeroSection } from "@/components/hero-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { ExperienceSection } from "@/components/experience-section"
import { CertificatesSection } from "@/components/certificates-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { ServicesSection } from "@/components/services-section"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <SkillsSection />
        <ServicesSection />
        <ProjectsSection />
        <CertificatesSection />
        <ExperienceSection />
        <ContactSection />
        <ScrollToTop />
      </main>
      <Footer />
    </div>
  )
}

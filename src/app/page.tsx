import { AboutSection } from "@/components/about/about-section";
import { ContactSection } from "@/components/contact/contact-section";
import { EngineeringPrinciplesSection } from "@/components/engineering-principles/engineering-principles-section";
import { ExperienceSection } from "@/components/experience/experience-section";
import { Hero } from "@/components/hero/hero";
import { ProjectsSection } from "@/components/projects/projects-section";
import { SelectedProject } from "@/components/selected-project/selected-project";
import { SkillsSection } from "@/components/skills/skills-section";

export default function Home() {
  return (
    <>
      <Hero />
      <SelectedProject />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <EngineeringPrinciplesSection />
      <ContactSection />
    </>
  );
}

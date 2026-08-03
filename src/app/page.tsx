import { AboutSection } from "@/components/about/about-section";
import { ContactSection } from "@/components/contact/contact-section";
import { EngineeringPrinciplesSection } from "@/components/engineering-principles/engineering-principles-section";
import { ExperienceSection } from "@/components/experience/experience-section";
import { Hero } from "@/components/hero/hero";
import {
  EditorialPage,
  SectionDivider,
} from "@/components/layout/editorial-layout";
import { ProfessionalExperienceSection } from "@/components/projects/professional-experience-section";
import { ProjectsSection } from "@/components/projects/projects-section";
import { SkillsSection } from "@/components/skills/skills-section";

export default function Home() {
  return (
    <EditorialPage>
      <Hero />
      <SectionDivider />
      <ProfessionalExperienceSection />
      <SectionDivider />
      <AboutSection />
      <SectionDivider />
      <ExperienceSection />
      <SectionDivider />
      <SkillsSection />
      <SectionDivider />
      <ProjectsSection />
      <SectionDivider />
      <EngineeringPrinciplesSection />
      <SectionDivider />
      <ContactSection />
    </EditorialPage>
  );
}

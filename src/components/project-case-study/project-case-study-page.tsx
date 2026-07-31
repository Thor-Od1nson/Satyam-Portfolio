import { getProjectCaseStudyVariant } from "@/lib/neon-card";
import type { ProjectCaseStudyContent } from "@/lib/project-case-studies";

import { ProjectCaseStudyGallerySection } from "./project-case-study-gallery-section";
import { ProjectCaseStudyHero } from "./project-case-study-hero";
import { ProjectCaseStudyLinksSection } from "./project-case-study-links-section";
import { ProjectCaseStudyRichSection } from "./project-case-study-rich-section";

type ProjectCaseStudyPageProps = {
  content: ProjectCaseStudyContent;
};

export function ProjectCaseStudyPage({ content }: ProjectCaseStudyPageProps) {
  const variant = getProjectCaseStudyVariant(content.slug);

  return (
    <div className="space-y-[var(--space-12)] md:space-y-[var(--space-16)]">
      <ProjectCaseStudyHero content={content} variant={variant} />
      <ProjectCaseStudyRichSection section={content.overview} variant={variant} />
      <ProjectCaseStudyRichSection section={content.problemStatement} variant={variant} />
      <ProjectCaseStudyRichSection section={content.solution} variant={variant} />
      <ProjectCaseStudyRichSection section={content.architecture} variant={variant} />
      <ProjectCaseStudyRichSection section={content.keyFeatures} variant={variant} />
      <ProjectCaseStudyRichSection section={content.engineeringChallenges} variant={variant} />
      <ProjectCaseStudyRichSection section={content.lessonsLearned} variant={variant} />
      {content.timeline ? <ProjectCaseStudyRichSection section={content.timeline} variant={variant} /> : null}
      <ProjectCaseStudyGallerySection gallery={content.screenshots} variant={variant} />
      <ProjectCaseStudyLinksSection links={content.links} variant={variant} />
    </div>
  );
}

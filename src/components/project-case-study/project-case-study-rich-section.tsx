import { CardContent } from "@/components/ui/card";
import { NeonCard } from "@/components/ui/neon-card";
import type { NeonCardVariant } from "@/lib/neon-card";
import type { ProjectCaseStudySection as ProjectCaseStudySectionContent } from "@/lib/project-case-studies";

import { ProjectCaseStudySection } from "./project-case-study-section";

type ProjectCaseStudyRichSectionProps = {
  section: ProjectCaseStudySectionContent;
  variant: NeonCardVariant;
};

export function ProjectCaseStudyRichSection({
  section,
  variant,
}: ProjectCaseStudyRichSectionProps) {
  const hasParagraphs = Boolean(section.paragraphs?.length);
  const hasBullets = Boolean(section.bullets?.length);
  const hasNote = Boolean(section.note);

  if (!hasParagraphs && !hasBullets && !hasNote) {
    return null;
  }

  return (
    <ProjectCaseStudySection title={section.title}>
      <div className="grid gap-[var(--space-4)]">
        {hasParagraphs
          ? section.paragraphs?.map((paragraph) => (
              <p
                key={paragraph}
                className="max-w-[var(--layout-copy)] text-sm leading-relaxed tracking-[var(--tracking-copy)] text-muted-foreground sm:text-base"
              >
                {paragraph}
              </p>
            ))
          : null}

        {hasBullets ? (
          <NeonCard variant={variant}>
            <CardContent className="pt-[var(--space-5)]">
              <ul className="grid gap-3" aria-label={section.title}>
                {section.bullets?.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="mt-2 inline-flex size-2.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    <span className="text-sm leading-relaxed tracking-[var(--tracking-copy)] text-foreground/92 sm:text-base">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </NeonCard>
        ) : null}

        {hasNote ? (
          <NeonCard dashed variant={variant}>
            <CardContent className="pt-[var(--space-5)]">
              <p className="text-sm leading-relaxed tracking-[var(--tracking-copy)] text-muted-foreground sm:text-base">
                {section.note}
              </p>
            </CardContent>
          </NeonCard>
        ) : null}
      </div>
    </ProjectCaseStudySection>
  );
}

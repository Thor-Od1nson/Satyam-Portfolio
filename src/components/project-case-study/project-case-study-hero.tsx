import { Badge } from "@/components/ui/badge";
import { CardContent } from "@/components/ui/card";
import type { NeonCardVariant } from "@/lib/neon-card";
import {
  NeonCard,
  neonCardChipClassName,
  neonCardInteractiveChipClassName,
} from "@/components/ui/neon-card";
import type { ProjectCaseStudyContent } from "@/lib/project-case-studies";

type ProjectCaseStudyHeroProps = {
  content: ProjectCaseStudyContent;
  variant: NeonCardVariant;
};

export function ProjectCaseStudyHero({ content, variant }: ProjectCaseStudyHeroProps) {
  return (
    <section aria-labelledby="project-case-study-heading" className="space-y-[var(--space-8)]">
      <div className="max-w-[var(--layout-reading)] space-y-[var(--space-4)]">
        <p className="text-sm font-medium uppercase tracking-[var(--tracking-widest)] text-primary">
          {content.heroLabel}
        </p>

        <h1
          id="project-case-study-heading"
          className="max-w-[16ch] text-3xl font-semibold tracking-[var(--tracking-heading)] text-foreground sm:text-4xl xl:text-5xl"
        >
          {content.project.name}
        </h1>

        <p className="max-w-[var(--layout-copy)] text-base leading-relaxed tracking-[var(--tracking-copy)] text-muted-foreground sm:text-lg">
          {content.project.summary}
        </p>
      </div>

      <div className="grid gap-[var(--space-4)] xl:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)]">
        <NeonCard variant={variant}>
          <CardContent className="space-y-[var(--space-4)] pt-[var(--space-5)]">
            <h2 className="text-xs font-medium uppercase tracking-[var(--tracking-widest)] text-muted-foreground">
              Engineering Highlights
            </h2>

            <ul className="grid gap-3" aria-label="Project highlights">
              {content.project.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3">
                  <span className="mt-2 inline-flex size-2.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  <span className="text-sm leading-relaxed tracking-[var(--tracking-copy)] text-foreground/92 sm:text-base">
                    {highlight}
                  </span>
                </li>
              ))}
            </ul>
          </CardContent>
        </NeonCard>

        <NeonCard variant={variant}>
          <CardContent className="space-y-[var(--space-4)] pt-[var(--space-5)]">
            <h2 className="text-xs font-medium uppercase tracking-[var(--tracking-widest)] text-muted-foreground">
              Technology Stack
            </h2>

            <ul className="flex flex-wrap gap-2" aria-label="Project technology stack">
              {content.project.stack.map((technology) => (
                <li key={technology}>
                  <Badge
                    variant="outline"
                    className={`h-7 rounded-full px-3 text-xs font-medium tracking-[var(--tracking-copy)] text-foreground ${neonCardChipClassName} ${neonCardInteractiveChipClassName}`}
                  >
                    {technology}
                  </Badge>
                </li>
              ))}
            </ul>
          </CardContent>
        </NeonCard>
      </div>
    </section>
  );
}

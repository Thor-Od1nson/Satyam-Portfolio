import Link from "next/link";

import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { NeonCard } from "@/components/ui/neon-card";
import type { NeonCardVariant } from "@/lib/neon-card";
import type { ProjectCaseStudyLinks } from "@/lib/project-case-studies";

import { ProjectCaseStudySection } from "./project-case-study-section";

type ProjectCaseStudyLinksSectionProps = {
  links: ProjectCaseStudyLinks;
  variant: NeonCardVariant;
};

export function ProjectCaseStudyLinksSection({
  links,
  variant,
}: ProjectCaseStudyLinksSectionProps) {
  const visibleLinks = links.items.filter((item) => Boolean(item.href));
  const hasNote = Boolean(links.note);

  if (visibleLinks.length === 0 && !hasNote) {
    return null;
  }

  return (
    <ProjectCaseStudySection title={links.title}>
      <div className="grid gap-[var(--space-4)]">
        {visibleLinks.length > 0 ? (
          <div className="flex flex-wrap gap-3">
            {visibleLinks.map((link) => {
              if (!link.href) {
                return null;
              }

              if (link.external) {
                return (
                  <Button asChild key={link.label} className="h-11 rounded-full px-5 text-sm shadow-xs">
                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                      {link.label}
                    </a>
                  </Button>
                );
              }

              return (
                <Button asChild key={link.label} className="h-11 rounded-full px-5 text-sm shadow-xs">
                  <Link href={link.href}>{link.label}</Link>
                </Button>
              );
            })}
          </div>
        ) : null}

        {hasNote ? (
          <NeonCard dashed variant={variant}>
            <CardContent className="pt-[var(--space-5)]">
              <p className="text-sm leading-relaxed tracking-[var(--tracking-copy)] text-muted-foreground sm:text-base">
                {links.note}
              </p>
            </CardContent>
          </NeonCard>
        ) : null}
      </div>
    </ProjectCaseStudySection>
  );
}

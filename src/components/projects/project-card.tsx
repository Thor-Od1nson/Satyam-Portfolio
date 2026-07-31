import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  NeonCard,
  neonCardChipClassName,
  neonCardInteractiveChipClassName,
} from "@/components/ui/neon-card";
import { getProjectSurfaceVariant } from "@/lib/neon-card";
import type { ContentLink, ProjectEntry } from "@/lib/portfolio-content";

type ProjectCardProps = {
  project: ProjectEntry;
};

const statusLabels: Record<NonNullable<ProjectEntry["status"]>, string> = {
  production: "Production",
  active: "Active",
  learning: "Learning",
  archived: "Archived",
};

const statusClasses: Record<NonNullable<ProjectEntry["status"]>, string> = {
  production: "border-success/20 bg-success/10 text-success",
  active: "border-primary/20 bg-primary/10 text-primary",
  learning: "border-warning/20 bg-warning/10 text-warning-foreground",
  archived: "border-border-subtle bg-muted text-muted-foreground",
};

function ProjectLink({ link }: { link: ContentLink }) {
  if (!link.href) {
    return null;
  }

  if (link.external) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-sm text-sm font-medium tracking-[var(--tracking-copy)] text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        {link.label}
      </a>
    );
  }

  return (
    <Link
      href={link.href}
      className="rounded-sm text-sm font-medium tracking-[var(--tracking-copy)] text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      {link.label}
    </Link>
  );
}

export function ProjectCard({ project }: ProjectCardProps) {
  const visibleLinks = project.links.filter((link) => Boolean(link.href));
  const variant = getProjectSurfaceVariant(project.name);

  return (
    <article className="h-full">
      <NeonCard className="h-full" variant={variant}>
        <CardHeader className="gap-[var(--space-4)]">
          <div className="flex items-start justify-between gap-[var(--space-4)]">
            <div className="space-y-2">
              <p className="text-xs font-medium uppercase tracking-[var(--tracking-widest)] text-primary">
                {project.category}
              </p>

              <CardTitle className="text-xl tracking-[var(--tracking-heading)] text-foreground sm:text-2xl">
                {project.name}
              </CardTitle>
            </div>

            {project.status ? (
              <Badge
                variant="outline"
                className={statusClasses[project.status]}
              >
                {statusLabels[project.status]}
              </Badge>
            ) : null}
          </div>

          <CardDescription className="line-clamp-3 text-sm leading-relaxed tracking-[var(--tracking-copy)] text-muted-foreground sm:text-base">
            {project.summary}
          </CardDescription>
        </CardHeader>

        <CardContent className="mt-auto space-y-[var(--space-5)]">
          <div className="space-y-[var(--space-3)]">
            <h3 className="text-xs font-medium uppercase tracking-[var(--tracking-widest)] text-muted-foreground">
              Technology
            </h3>

            <ul className="flex flex-wrap gap-2" aria-label={`${project.name} technology stack`}>
              {project.stack.map((technology) => (
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
          </div>

          <div className="space-y-[var(--space-3)]">
            <h3 className="text-xs font-medium uppercase tracking-[var(--tracking-widest)] text-muted-foreground">
              Engineering highlights
            </h3>

            <ul className="grid gap-3" aria-label={`${project.name} engineering highlights`}>
              {project.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3">
                  <span
                    className="mt-2 inline-flex size-2 shrink-0 rounded-full bg-primary"
                    aria-hidden="true"
                  />
                  <span className="text-sm leading-relaxed tracking-[var(--tracking-copy)] text-foreground/92">
                    {highlight}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {visibleLinks.length > 0 ? (
            <div className="flex flex-wrap gap-x-4 gap-y-2 pt-[var(--space-1)]">
              {visibleLinks.map((link) => (
                <ProjectLink key={`${project.name}-${link.label}`} link={link} />
              ))}
            </div>
          ) : null}
        </CardContent>
      </NeonCard>
    </article>
  );
}

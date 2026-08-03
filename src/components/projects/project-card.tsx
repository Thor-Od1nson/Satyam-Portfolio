import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";

import { NeonCard } from "@/components/ui/neon-card";
import { getProjectSurfaceVariant } from "@/lib/neon-card";
import {
  projectShowcaseVisuals,
  type ProjectShowcaseVisual,
} from "@/lib/project-visuals";
import type { ContentLink, ProjectEntry } from "@/lib/portfolio-content";
import { cn } from "@/lib/utils";

import styles from "./project-card.module.css";

export type ProjectCardEmphasis = "large" | "medium" | "compact";

type ProjectCardProps = {
  project: ProjectEntry;
  emphasis?: ProjectCardEmphasis;
};

const statusLabels: Record<NonNullable<ProjectEntry["status"]>, string> = {
  production: "Production",
  active: "Active",
  learning: "Learning",
  archived: "Archived",
};

const titleClassNames: Record<ProjectCardEmphasis, string> = {
  large: "text-2xl sm:text-[2rem]",
  medium: "text-xl sm:text-2xl",
  compact: "text-xl sm:text-[1.35rem]",
};

const previewClassNames: Record<ProjectCardEmphasis, string> = {
  large: styles.previewMediaLarge,
  medium: styles.previewMediaMedium,
  compact: styles.previewMediaCompact,
};

const previewSizes: Record<ProjectCardEmphasis, string> = {
  large: "(min-width: 1280px) 30vw, (min-width: 1024px) 46vw, 100vw",
  medium: "(min-width: 1280px) 22vw, (min-width: 1024px) 32vw, 100vw",
  compact: "(min-width: 1280px) 18vw, (min-width: 1024px) 32vw, 100vw",
};

function ProjectLink({ link }: { link: ContentLink }) {
  if (!link.href) {
    return null;
  }

  const className =
    "group/project-link inline-flex items-center gap-2 rounded-sm text-sm font-medium tracking-[var(--tracking-copy)] text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

  if (link.external) {
    return (
      <a href={link.href} target="_blank" rel="noopener noreferrer" className={className}>
        <span>{link.label}</span>
        <ArrowUpRightIcon className="size-3.5 transition-transform duration-[var(--duration-fast)] ease-[var(--ease-standard)] group-hover/project-link:translate-x-0.5 group-hover/project-link:-translate-y-0.5 group-focus-visible/project-link:translate-x-0.5 group-focus-visible/project-link:-translate-y-0.5" aria-hidden="true" />
      </a>
    );
  }

  return (
    <Link href={link.href} className={className}>
      <span>{link.label}</span>
      <ArrowUpRightIcon className="size-3.5 transition-transform duration-[var(--duration-fast)] ease-[var(--ease-standard)] group-hover/project-link:translate-x-0.5 group-hover/project-link:-translate-y-0.5 group-focus-visible/project-link:translate-x-0.5 group-focus-visible/project-link:-translate-y-0.5" aria-hidden="true" />
    </Link>
  );
}

function getStackPreview(project: ProjectEntry, emphasis: ProjectCardEmphasis) {
  const limit = emphasis === "compact" ? 2 : 3;
  return project.stack.slice(0, limit).join(" / ");
}

function getProjectShowcaseVisual(projectName: string): ProjectShowcaseVisual {
  return projectShowcaseVisuals[projectName];
}

export function ProjectCard({ project, emphasis = "medium" }: ProjectCardProps) {
  const visibleLinks = project.links.filter((link) => Boolean(link.href));
  const variant = getProjectSurfaceVariant(project.name);
  const visual = getProjectShowcaseVisual(project.name);
  const stackPreview = getStackPreview(project, emphasis);

  return (
    <article className="h-full">
      <NeonCard
        className="group h-full rounded-[calc(var(--radius-2xl)+0.125rem)] p-[var(--space-4)] sm:p-[var(--space-5)]"
        variant={variant}
      >
        <div className={cn(styles.card, styles[emphasis])}>
          <div className={styles.previewColumn}>
            <div className={styles.previewFrame}>
              <div className={styles.previewHeader}>
                <p className={styles.metaLabel}>{visual.imageLabel}</p>
              </div>

              <div className={cn(styles.previewMedia, previewClassNames[emphasis])}>
                <div className={styles.previewMediaInset}>
                  <Image
                    src={visual.image.src}
                    alt={visual.image.alt}
                    fill
                    unoptimized
                    sizes={previewSizes[emphasis]}
                    className={styles.previewImage}
                  />
                </div>
                <div className={styles.previewOverlay} aria-hidden="true" />
              </div>
            </div>
          </div>

          <div className={styles.copyColumn}>
            <div className="space-y-3">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="space-y-2">
                  <p className={styles.category}>{project.category}</p>
                  <h3
                    className={cn(
                      "font-semibold tracking-[var(--tracking-heading)] text-foreground",
                      titleClassNames[emphasis]
                    )}
                  >
                    {project.name}
                  </h3>
                </div>

                {project.status ? (
                  <span className={styles.statusLabel}>{statusLabels[project.status]}</span>
                ) : null}
              </div>

              <p className={styles.summary}>{project.summary}</p>
            </div>

            <div className={styles.metaRow}>
              <span className={styles.metaLabel}>Stack</span>
              <span className={styles.metaValue}>{stackPreview}</span>
            </div>

            <div className={styles.artifact}>
              <p className={styles.metaLabel}>{visual.artifact.label}</p>
              <div className={cn(styles.artifactGrid, emphasis === "compact" ? styles.compactArtifactGrid : undefined)}>
                {visual.artifact.items.map((item) => (
                  <div key={`${project.name}-${item}`} className={styles.artifactStep}>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {visibleLinks.length > 0 ? (
              <div className={styles.linkRow}>
                {visibleLinks.map((link) => (
                  <ProjectLink key={`${project.name}-${link.label}`} link={link} />
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </NeonCard>
    </article>
  );
}

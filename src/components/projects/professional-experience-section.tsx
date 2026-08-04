"use client";

import { motion, useReducedMotion } from "framer-motion";

import {
  NeonCard,
  neonCardChipClassName,
} from "@/components/ui/neon-card";
import {
  professionalProjectsContent,
  type ProfessionalProjectEntry,
  type ProfessionalProjectsContent,
} from "@/lib/portfolio-content";
import { cn } from "@/lib/utils";

const motionEase = [0.22, 1, 0.36, 1] as const;

const professionalCardVariants = ["hero", "a", "b", "d"] as const;

function ProfessionalProjectCard({
  project,
  variant,
}: {
  project: ProfessionalProjectEntry;
  variant: (typeof professionalCardVariants)[number];
}) {
  return (
    <NeonCard
      variant={variant}
      className="h-full rounded-[calc(var(--radius-2xl)+0.125rem)] p-[var(--space-4)] sm:p-[var(--space-5)]"
    >
      <div className="flex h-full flex-col gap-[var(--space-5)]">
        <div className="space-y-3">
          <p className="text-2xs font-medium uppercase tracking-[0.16em] text-primary">
            Professional Experience
          </p>

          <div className="flex flex-wrap items-center gap-2.5">
            <h3 className="max-w-[22ch] text-xl font-semibold tracking-[var(--tracking-heading)] text-foreground sm:text-2xl">
              {project.name}
            </h3>

            {project.status ? (
              <span
                className={cn(
                  neonCardChipClassName,
                  "inline-flex items-center rounded-full px-2.5 py-1 text-[0.65rem] font-medium uppercase tracking-[0.14em] text-muted-foreground"
                )}
              >
                {project.status}
              </span>
            ) : null}
          </div>

          <p className="max-w-[34rem] text-sm leading-[1.74] tracking-[var(--tracking-copy)] text-muted-foreground sm:text-base">
            {project.description}
          </p>
        </div>

        <div className="space-y-[var(--space-4)]">
          <div className="space-y-2.5">
            <p className="text-2xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
              Technologies used
            </p>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={`${project.name}-${technology}`}
                  className={cn(
                    neonCardChipClassName,
                    "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium tracking-[var(--tracking-copy)] text-foreground"
                  )}
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-2.5 border-t border-border-subtle/70 pt-[var(--space-4)]">
            <p className="text-2xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
              My responsibilities
            </p>

            <ul className="grid gap-2.5" aria-label={`${project.name} responsibilities`}>
              {project.responsibilities.map((responsibility) => (
                <li key={responsibility} className="grid grid-cols-[auto_1fr] gap-3">
                  <span className="pt-[0.45rem] text-sm text-primary" aria-hidden="true">
                    /
                  </span>
                  <span className="text-sm leading-[1.7] tracking-[var(--tracking-copy)] text-muted-foreground">
                    {responsibility}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-2.5 border-t border-border-subtle/70 pt-[var(--space-4)]">
            <p className="text-2xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
              Skills demonstrated
            </p>

            <div className="flex flex-wrap gap-2">
              {project.skills.map((skill) => (
                <span
                  key={`${project.name}-${skill}`}
                  className={cn(
                    neonCardChipClassName,
                    "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium tracking-[var(--tracking-copy)] text-foreground"
                  )}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {project.notice ? (
            <div className="border-t border-border-subtle/70 pt-[var(--space-4)]">
              <p className="text-xs leading-[1.7] tracking-[var(--tracking-copy)] text-muted-foreground/82">
                {project.notice}
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </NeonCard>
  );
}

type ProfessionalExperienceSectionProps = {
  content: ProfessionalProjectsContent;
};

export function ProfessionalExperienceSection() {
  return <ProfessionalExperienceSectionContent content={professionalProjectsContent} />;
}

export function ProfessionalExperienceSectionContent({
  content,
}: ProfessionalExperienceSectionProps) {
  const prefersReducedMotion = useReducedMotion();

  const containerMotion = prefersReducedMotion
    ? {}
    : {
        initial: "hidden" as const,
        whileInView: "visible" as const,
        viewport: { once: true, amount: 0.2 },
        variants: {
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.05,
              delayChildren: 0.02,
            },
          },
        },
      };

  const itemMotion = prefersReducedMotion
    ? {}
    : {
        variants: {
          hidden: {
            opacity: 0,
            y: 14,
          },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.48,
              ease: motionEase,
            },
          },
        },
      };

  return (
    <section aria-labelledby="professional-experience-projects-heading">
      <motion.div
        {...containerMotion}
        className="mx-auto w-full max-w-[var(--layout-hero)] px-[var(--space-gutter)] pb-[var(--space-section)] pt-[clamp(1rem,2vw,1.75rem)] md:pt-[clamp(1.25rem,2vw,2rem)]"
      >
        <div className="space-y-[clamp(2.5rem,4vw,4rem)]">
          <motion.div
            {...itemMotion}
            className="grid gap-[var(--space-5)] xl:grid-cols-[minmax(0,0.64fr)_minmax(0,0.36fr)] xl:items-end"
          >
            <div className="max-w-[48rem] space-y-[var(--space-4)]">
              <p className="text-sm font-medium uppercase tracking-[var(--tracking-widest)] text-primary">
                {content.label}
              </p>

              <h2
                id="professional-experience-projects-heading"
                className="max-w-[18ch] scroll-mt-[calc(var(--space-16)+var(--space-4))] text-2xl font-semibold tracking-[var(--tracking-heading)] text-foreground sm:text-3xl xl:text-4xl"
              >
                {content.heading}
              </h2>
            </div>

            <p className="max-w-[36rem] text-sm leading-[1.74] tracking-[var(--tracking-copy)] text-muted-foreground sm:text-base xl:justify-self-end xl:text-right">
              {content.introduction}
            </p>
          </motion.div>

          <div className="grid gap-[clamp(1rem,2vw,1.5rem)] md:grid-cols-2">
            {content.entries.map((project, index) => (
              <motion.div key={project.name} {...itemMotion} className="h-full">
                <ProfessionalProjectCard
                  project={project}
                  variant={professionalCardVariants[index] ?? "a"}
                />
              </motion.div>
            ))}
          </div>

          {content.notice ? (
            <motion.div
              {...itemMotion}
              className="border-t border-border-subtle/70 pt-[var(--space-5)]"
            >
              <p className="max-w-[48rem] text-sm leading-[1.72] tracking-[var(--tracking-copy)] text-muted-foreground/88">
                {content.notice}
              </p>
            </motion.div>
          ) : null}
        </div>
      </motion.div>
    </section>
  );
}

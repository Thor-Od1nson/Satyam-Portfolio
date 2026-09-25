"use client";

import { ArrowUpRightIcon } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import {
  professionalProjectsContent,
  type ProfessionalProjectEntry,
  type ProfessionalProjectsContent,
} from "@/lib/portfolio-content";

const motionEase = [0.22, 1, 0.36, 1] as const;

function ProfessionalProjectCard({
  project,
  index,
}: {
  project: ProfessionalProjectEntry;
  index: number;
}) {
  const sequence = String(index + 1).padStart(2, "0");

  return (
    <article className="group relative py-[clamp(1.2rem,2vw,1.6rem)] transition-transform [transition-duration:var(--duration-fast)] [transition-timing-function:var(--ease-standard)] hover:translate-x-[2px]">
      <div className="grid gap-x-[clamp(1rem,2vw,2rem)] gap-y-3 sm:grid-cols-[auto_1fr] lg:grid-cols-[clamp(2.5rem,4vw,3.5rem)_minmax(0,1.15fr)_minmax(12rem,0.85fr)_auto] lg:items-start">
        <p className="text-[clamp(1.3rem,2.6vw,2rem)] font-semibold leading-none tracking-[calc(var(--tracking-display)-0.03em)] text-muted-foreground/62 transition-colors [transition-duration:var(--duration-fast)] [transition-timing-function:var(--ease-standard)] group-hover:text-primary/92">
          {sequence}
        </p>

        <div className="space-y-1.5">
          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
            <h3 className="text-lg font-semibold tracking-[var(--tracking-heading)] text-foreground/88 transition-colors [transition-duration:var(--duration-fast)] [transition-timing-function:var(--ease-standard)] group-hover:text-foreground sm:text-[1.28rem]">
              {project.name}
            </h3>

            {project.status ? (
              <span className="text-[0.72rem] font-medium tracking-[var(--tracking-copy)] text-muted-foreground/82">
                · {project.status}
              </span>
            ) : null}
          </div>

          <p className="text-sm leading-[1.66] tracking-[var(--tracking-copy)] text-muted-foreground sm:text-[0.96rem]">
            {project.description}
          </p>
        </div>

        <p className="text-sm leading-[1.66] tracking-[var(--tracking-copy)] text-foreground/82 sm:text-[0.95rem] lg:justify-self-end lg:text-right">
          {project.technologies.join(" · ")}
        </p>

        <span className="hidden items-center justify-self-end pt-0.5 text-muted-foreground/0 opacity-0 transition-all [transition-duration:var(--duration-fast)] [transition-timing-function:var(--ease-standard)] group-hover:text-primary/85 group-hover:opacity-100 lg:inline-flex">
          <ArrowUpRightIcon className="size-4" aria-hidden="true" />
        </span>
      </div>
    </article>
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
    <section aria-labelledby="enterprise-products-heading">
      <motion.div
        {...containerMotion}
        className="mx-auto w-full max-w-[var(--layout-hero)] px-[var(--space-gutter)] pb-[var(--space-section)] pt-[clamp(1rem,2vw,1.75rem)] md:pt-[clamp(1.25rem,2vw,2rem)]"
      >
        <div className="space-y-[clamp(2.5rem,4vw,4rem)]">
          <motion.div
            {...itemMotion}
            className="grid gap-[var(--space-5)] xl:grid-cols-[minmax(0,0.58fr)_minmax(0,0.42fr)] xl:items-end"
          >
            <div className="max-w-[48rem] space-y-[var(--space-4)]">
              <p className="text-sm font-medium uppercase tracking-[var(--tracking-widest)] text-primary">
                {content.label}
              </p>

              <h2
                id="enterprise-products-heading"
                className="max-w-[16ch] scroll-mt-[calc(var(--space-16)+var(--space-4))] text-2xl font-semibold tracking-[var(--tracking-heading)] text-foreground sm:text-3xl xl:text-[2.6rem]"
              >
                {content.heading}
              </h2>
            </div>

            <p className="max-w-[34rem] text-sm leading-[1.74] tracking-[var(--tracking-copy)] text-muted-foreground sm:text-base xl:justify-self-end xl:text-right">
              {content.introduction}
            </p>
          </motion.div>

          <ol className="border-y border-border-subtle/72" aria-label="Enterprise product index">
            {content.entries.map((project, index) => (
              <motion.li
                key={project.name}
                {...itemMotion}
                className="border-b border-border-subtle/72 transition-colors [transition-duration:var(--duration-fast)] [transition-timing-function:var(--ease-standard)] last:border-b-0 hover:border-primary/28"
              >
                <ProfessionalProjectCard project={project} index={index} />
              </motion.li>
            ))}
          </ol>
        </div>
      </motion.div>
    </section>
  );
}

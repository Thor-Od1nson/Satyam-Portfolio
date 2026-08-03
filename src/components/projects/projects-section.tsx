"use client";

import { motion, useReducedMotion } from "framer-motion";

import {
  ProjectCard,
  type ProjectCardEmphasis,
} from "@/components/projects/project-card";
import { featuredProjectsContent, type ProjectsContent } from "@/lib/portfolio-content";
import { cn } from "@/lib/utils";

const motionEase = [0.22, 1, 0.36, 1] as const;

const projectLayout: Record<
  string,
  {
    className: string;
    emphasis: ProjectCardEmphasis;
  }
> = {
  "IRCTC Tatkal Assistant": {
    className: "lg:col-span-4",
    emphasis: "large",
  },
  "Salon Management System": {
    className: "lg:col-span-2",
    emphasis: "medium",
  },
  NCollect: {
    className: "lg:col-span-6",
    emphasis: "large",
  },
};

type ProjectsSectionProps = {
  content: ProjectsContent;
};

export function ProjectsSection() {
  return <ProjectsSectionContent content={featuredProjectsContent} />;
}

export function ProjectsSectionContent({ content }: ProjectsSectionProps) {
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
    <section aria-labelledby="featured-projects-heading">
      <motion.div
        {...containerMotion}
        className="mx-auto w-full max-w-[var(--layout-hero)] px-[var(--space-gutter)] pb-[var(--space-section)] pt-[clamp(1rem,2vw,1.75rem)] md:pt-[clamp(1.25rem,2vw,2rem)]"
      >
        <div className="space-y-[clamp(2.5rem,4vw,4rem)]">
          <motion.div
            {...itemMotion}
            className="grid gap-[var(--space-5)] xl:grid-cols-[minmax(0,0.68fr)_minmax(0,0.32fr)] xl:items-end"
          >
            <div className="max-w-[48rem] space-y-[var(--space-4)]">
              <p className="text-sm font-medium uppercase tracking-[var(--tracking-widest)] text-primary">
                {content.label}
              </p>

              <h2
                id="featured-projects-heading"
                className="max-w-[18ch] scroll-mt-[calc(var(--space-16)+var(--space-4))] text-2xl font-semibold tracking-[var(--tracking-heading)] text-foreground sm:text-3xl xl:text-4xl"
              >
                {content.heading}
              </h2>
            </div>

            <p className="max-w-[34rem] text-sm leading-[1.74] tracking-[var(--tracking-copy)] text-muted-foreground sm:text-base xl:justify-self-end xl:text-right">
              {content.introduction}
            </p>
          </motion.div>

          <div className="grid gap-[clamp(1rem,2vw,1.5rem)] md:grid-cols-2 lg:auto-rows-fr lg:grid-cols-6">
            {content.entries.map((project) => {
              const layout = projectLayout[project.name] ?? {
                className: "lg:col-span-2",
                emphasis: "medium" as const,
              };

              return (
                <motion.div
                  key={project.name}
                  {...itemMotion}
                  className={cn("h-full", layout.className)}
                >
                  <ProjectCard project={project} emphasis={layout.emphasis} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

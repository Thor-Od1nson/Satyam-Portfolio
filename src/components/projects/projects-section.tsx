"use client";

import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import {
  featuredProjectsContent,
  type ContentLink,
  type ProjectEntry,
  type ProjectsContent,
} from "@/lib/portfolio-content";

const motionEase = [0.22, 1, 0.36, 1] as const;

const featuredProjectOrder = [
  "Enterprise Social Media Publishing Platform",
  "IRCTC Tatkal Assistant",
  "Salon Management System",
] as const;

const statusLabels = {
  "under-development": "Under Development",
} as const;

function getOrderedProjects(content: ProjectsContent) {
  return featuredProjectOrder
    .map((name) => content.entries.find((entry) => entry.name === name))
    .filter((project): project is ProjectEntry => Boolean(project));
}

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
        <ArrowUpRightIcon
          className="size-3.5 transition-transform duration-[var(--duration-fast)] ease-[var(--ease-standard)] group-hover/project-link:translate-x-0.5 group-hover/project-link:-translate-y-0.5 group-focus-visible/project-link:translate-x-0.5 group-focus-visible/project-link:-translate-y-0.5"
          aria-hidden="true"
        />
      </a>
    );
  }

  return (
    <Link href={link.href} className={className}>
      <span>{link.label}</span>
      <ArrowUpRightIcon
        className="size-3.5 transition-transform duration-[var(--duration-fast)] ease-[var(--ease-standard)] group-hover/project-link:translate-x-0.5 group-hover/project-link:-translate-y-0.5 group-focus-visible/project-link:translate-x-0.5 group-focus-visible/project-link:-translate-y-0.5"
        aria-hidden="true"
      />
    </Link>
  );
}

function FeaturedProjectRow({
  project,
  prefersReducedMotion,
}: {
  project: ProjectEntry;
  prefersReducedMotion: boolean;
}) {
  const statusLabel = project.status ? statusLabels[project.status as keyof typeof statusLabels] : null;
  const visibleLinks = project.links.filter((link) => Boolean(link.href));

  return (
    <motion.article
      whileHover={prefersReducedMotion ? undefined : { y: -2 }}
      transition={{ duration: 0.24, ease: motionEase }}
      className="group relative py-[clamp(1.35rem,2.2vw,1.85rem)]"
    >
      <div className="grid gap-x-[clamp(1rem,2vw,2.25rem)] gap-y-4 lg:grid-cols-[minmax(0,1.05fr)_minmax(13rem,0.52fr)] lg:items-start">
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.72rem] font-medium uppercase tracking-[0.16em] text-muted-foreground/82">
            <span className="text-primary/88">{project.category}</span>
            {statusLabel ? <span>· {statusLabel}</span> : null}
          </div>

          <h3 className="max-w-[18ch] text-[clamp(1.55rem,3.2vw,2.15rem)] font-semibold leading-[1.04] tracking-[var(--tracking-heading)] text-foreground/90 transition-colors [transition-duration:var(--duration-fast)] [transition-timing-function:var(--ease-standard)] group-hover:text-foreground">
            {project.name}
          </h3>

          <p className="max-w-[42rem] text-sm leading-[1.72] tracking-[var(--tracking-copy)] text-muted-foreground sm:text-base">
            {project.summary}
          </p>
        </div>

        <div className="space-y-4 lg:justify-self-end lg:text-right">
          <p className="text-sm leading-[1.72] tracking-[var(--tracking-copy)] text-foreground/82 sm:text-[0.98rem]">
            {project.stack.join(" · ")}
          </p>

          {visibleLinks.length > 0 ? (
            <div className="flex flex-wrap gap-3 lg:justify-end">
              {visibleLinks.map((link) => (
                <ProjectLink key={`${project.name}-${link.label}`} link={link} />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}

type ProjectsSectionProps = {
  content: ProjectsContent;
};

export function ProjectsSection() {
  return <ProjectsSectionContent content={featuredProjectsContent} />;
}

export function ProjectsSectionContent({ content }: ProjectsSectionProps) {
  const prefersReducedMotion = useReducedMotion() ?? false;
  const orderedProjects = getOrderedProjects(content);

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

          {orderedProjects.length > 0 ? (
            <ol className="border-y border-border-subtle/72" aria-label="Featured project index">
              {orderedProjects.map((project) => (
                <motion.li
                  key={project.name}
                  {...itemMotion}
                  className="border-b border-border-subtle/72 transition-colors [transition-duration:var(--duration-fast)] [transition-timing-function:var(--ease-standard)] last:border-b-0 hover:border-primary/28"
                >
                  <FeaturedProjectRow project={project} prefersReducedMotion={prefersReducedMotion} />
                </motion.li>
              ))}
            </ol>
          ) : null}
        </div>
      </motion.div>
    </section>
  );
}

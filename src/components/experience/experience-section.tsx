"use client";

import { motion, useReducedMotion } from "framer-motion";

import { experienceContent, type ExperienceContent, type ExperienceEntry } from "@/lib/portfolio-content";

const motionEase = [0.22, 1, 0.36, 1] as const;

type ExperienceSectionProps = {
  content: ExperienceContent;
};

type ExperienceRowProps = {
  entry: ExperienceEntry;
  prefersReducedMotion: boolean;
};

function ExperienceRow({ entry, prefersReducedMotion }: ExperienceRowProps) {
  return (
    <motion.article
      whileHover={prefersReducedMotion ? undefined : { y: -2 }}
      transition={{ duration: 0.24, ease: motionEase }}
      className="group relative py-[clamp(1.35rem,2.1vw,1.8rem)]"
    >
      <div className="absolute left-0 top-[1.75rem] bottom-[1.75rem] w-px bg-[linear-gradient(180deg,color-mix(in_oklch,var(--primary)_28%,transparent)_0%,color-mix(in_oklch,var(--border-subtle)_88%,transparent)_100%)] opacity-70" aria-hidden="true" />

      <div className="relative pl-5 sm:pl-6">
        <span
          className="absolute left-[-0.28rem] top-[0.35rem] inline-flex size-2.5 rounded-full bg-primary shadow-[0_0_0_4px_color-mix(in_oklch,var(--background)_94%,transparent)]"
          aria-hidden="true"
        />

        <div className="grid gap-x-[clamp(1rem,2vw,2rem)] gap-y-3 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start">
          <div className="space-y-2.5">
            <p className="text-[0.72rem] font-medium uppercase tracking-[0.16em] text-primary/88">
              {entry.company}
            </p>

            <h3 className="text-lg font-semibold tracking-[var(--tracking-heading)] text-foreground sm:text-[1.28rem]">
              {entry.role}
            </h3>
          </div>

          <p className="text-sm tracking-[var(--tracking-copy)] text-muted-foreground lg:text-right">
            {entry.period}
          </p>

          <div className="space-y-3 lg:col-span-2">
            <p className="max-w-[42rem] text-sm leading-[1.72] tracking-[var(--tracking-copy)] text-muted-foreground sm:text-base">
              {entry.overview}
            </p>

            <p className="text-sm leading-[1.68] tracking-[var(--tracking-copy)] text-foreground/82 sm:text-[0.98rem]">
              {entry.stack.join(" · ")}
            </p>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function ExperienceSection() {
  return <ExperienceSectionContent content={experienceContent} />;
}

export function ExperienceSectionContent({ content }: ExperienceSectionProps) {
  const prefersReducedMotion = useReducedMotion() ?? false;

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
    <section aria-labelledby="experience-heading">
      <motion.div
        {...containerMotion}
        className="mx-auto w-full max-w-[var(--layout-hero)] px-[var(--space-gutter)] py-[clamp(4.25rem,6vw,6.25rem)] md:py-[clamp(4.75rem,6vw,7rem)]"
      >
        <div className="grid gap-[clamp(2rem,4vw,3.5rem)] xl:grid-cols-[minmax(0,0.34fr)_minmax(0,0.66fr)] xl:items-start xl:gap-[clamp(2.75rem,3.6vw,4.75rem)]">
          <motion.div {...itemMotion} className="max-w-[26rem] space-y-[var(--space-4)] xl:sticky xl:top-28">
            <p className="text-sm font-medium uppercase tracking-[var(--tracking-widest)] text-primary">
              {content.label}
            </p>

            <h2
              id="experience-heading"
              className="max-w-[13ch] scroll-mt-[calc(var(--space-16)+var(--space-4))] text-2xl font-semibold leading-[1.04] tracking-[var(--tracking-heading)] text-foreground sm:text-3xl xl:text-[2.45rem]"
            >
              {content.heading}
            </h2>
          </motion.div>

          <motion.ol
            {...itemMotion}
            className="border-y border-border-subtle/72"
            aria-label="Experience index"
          >
            {content.entries.map((entry) => (
              <li
                key={`${entry.company}-${entry.role}`}
                className="border-b border-border-subtle/72 last:border-b-0"
              >
                <ExperienceRow entry={entry} prefersReducedMotion={prefersReducedMotion} />
              </li>
            ))}
          </motion.ol>
        </div>
      </motion.div>
    </section>
  );
}

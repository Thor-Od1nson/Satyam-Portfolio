"use client";

import { motion, useReducedMotion } from "framer-motion";

import { ExperienceCard } from "@/components/experience/experience-card";
import { experienceContent, type ExperienceContent } from "@/lib/portfolio-content";

const motionEase = [0.22, 1, 0.36, 1] as const;

type ExperienceSectionProps = {
  content: ExperienceContent;
};

export function ExperienceSection() {
  return <ExperienceSectionContent content={experienceContent} />;
}

export function ExperienceSectionContent({ content }: ExperienceSectionProps) {
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
              staggerChildren: 0.08,
              delayChildren: 0.04,
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
            y: 18,
          },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.55,
              ease: motionEase,
            },
          },
        },
      };

  return (
    <section aria-labelledby="experience-heading">
      <motion.div
        {...containerMotion}
        className="mx-auto w-full max-w-[var(--layout-hero)] px-[var(--space-gutter)] pb-[var(--space-section)] pt-[var(--space-6)] md:pt-[var(--space-8)]"
      >
        <div className="space-y-[var(--space-8)]">
          <motion.div {...itemMotion} className="max-w-[var(--layout-reading)] space-y-[var(--space-3)]">
            <p className="text-sm font-medium uppercase tracking-[var(--tracking-widest)] text-primary">
              {content.label}
            </p>

            <h2
              id="experience-heading"
              className="max-w-[20ch] text-2xl font-semibold tracking-[var(--tracking-heading)] text-foreground sm:text-3xl xl:text-4xl"
            >
              {content.heading}
            </h2>

            <p className="max-w-[var(--layout-copy)] text-sm leading-relaxed tracking-[var(--tracking-copy)] text-muted-foreground sm:text-base">
              {content.introduction}
            </p>
          </motion.div>

          <div className="grid gap-[var(--space-4)]">
            {content.entries.map((entry) => (
              <motion.div key={`${entry.company}-${entry.role}`} {...itemMotion}>
                <ExperienceCard entry={entry} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

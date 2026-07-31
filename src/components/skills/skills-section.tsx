"use client";

import { motion, useReducedMotion } from "framer-motion";

import { SkillCategoryCard } from "@/components/skills/skill-category-card";
import { skillsContent, type SkillsContent } from "@/lib/portfolio-content";

const motionEase = [0.22, 1, 0.36, 1] as const;

type SkillsSectionProps = {
  content: SkillsContent;
};

export function SkillsSection() {
  return <SkillsSectionContent content={skillsContent} />;
}

export function SkillsSectionContent({ content }: SkillsSectionProps) {
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
              staggerChildren: 0.06,
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
    <section aria-labelledby="skills-heading">
      <motion.div
        {...containerMotion}
        className="mx-auto w-full max-w-[var(--layout-hero)] px-[var(--space-gutter)] pb-[var(--space-section)] pt-[var(--space-6)] md:pt-[var(--space-8)]"
      >
        <div className="space-y-[var(--space-8)]">
          <motion.div
            {...itemMotion}
            className="max-w-[var(--layout-reading)] space-y-[var(--space-3)]"
          >
            <p className="text-sm font-medium uppercase tracking-[var(--tracking-widest)] text-primary">
              {content.label}
            </p>

            <h2
              id="skills-heading"
              className="max-w-[18ch] text-2xl font-semibold tracking-[var(--tracking-heading)] text-foreground sm:text-3xl xl:text-4xl"
            >
              {content.heading}
            </h2>

            <p className="max-w-[var(--layout-copy)] text-sm leading-relaxed tracking-[var(--tracking-copy)] text-muted-foreground sm:text-base">
              {content.introduction}
            </p>
          </motion.div>

          <div className="grid auto-rows-fr gap-[var(--space-4)] md:grid-cols-2 xl:grid-cols-3">
            {content.categories.map((category) => (
              <motion.div key={category.title} {...itemMotion} className="h-full">
                <SkillCategoryCard category={category} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

"use client";

import { motion, useReducedMotion } from "framer-motion";

import {
  ContentColumn,
  EditorialSection,
  SectionHeader,
} from "@/components/layout/editorial-layout";
import {
  aboutContent,
  type AboutContent,
} from "@/lib/portfolio-content";
import { cn } from "@/lib/utils";

const motionEase = [0.22, 1, 0.36, 1] as const;

type AboutSectionProps = {
  content: AboutContent;
};

export function AboutSection() {
  return <AboutSectionContent content={aboutContent} />;
}

export function AboutSectionContent({ content }: AboutSectionProps) {
  const prefersReducedMotion = useReducedMotion();

  const containerMotion = prefersReducedMotion
    ? {}
    : {
        initial: "hidden" as const,
        whileInView: "visible" as const,
        viewport: { once: true, amount: 0.25 },
        variants: {
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.06,
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
    <EditorialSection aria-labelledby="about-heading">
      <motion.div
        {...containerMotion}
        className="grid gap-[clamp(2rem,4vw,3.5rem)] xl:grid-cols-[minmax(0,0.52fr)_minmax(0,0.48fr)] xl:items-start xl:gap-[clamp(2.75rem,3.6vw,4.75rem)]"
      >
        <ContentColumn className="space-y-[var(--space-6)]">
          <motion.div {...itemMotion}>
            <SectionHeader
              eyebrow={content.label}
              title={content.heading}
              titleId="about-heading"
              titleClassName="max-w-[14ch]"
              description={content.summary}
              descriptionClassName="max-w-[38rem] text-lg leading-[1.76]"
            />
          </motion.div>

          <motion.div
            {...itemMotion}
            className="space-y-3 border-t border-border-subtle/80 pt-[var(--space-5)]"
          >
            <p className="text-2xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
              Experience areas
            </p>
            <p className="max-w-[42rem] text-sm leading-relaxed tracking-[var(--tracking-copy)] text-muted-foreground sm:text-base">
              {content.focusAreas.join(" • ")}
            </p>
          </motion.div>
        </ContentColumn>

        <motion.div
          {...itemMotion}
          className="border-y border-border-subtle/80"
          aria-label="About principles"
        >
          {content.principles.map((principle, index) => (
            <div
              key={principle.title}
              className={cn(
                "space-y-2.5 py-[var(--space-6)]",
                index > 0 ? "border-t border-border-subtle/80" : undefined
              )}
            >
              <h3 className="text-lg font-semibold tracking-[var(--tracking-heading)] text-foreground sm:text-xl">
                {principle.title}
              </h3>
              <p className="max-w-[38rem] text-sm leading-[1.72] tracking-[var(--tracking-copy)] text-muted-foreground sm:text-base">
                {principle.description}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </EditorialSection>
  );
}

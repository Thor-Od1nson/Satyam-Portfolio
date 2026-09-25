"use client";

import { motion, useReducedMotion } from "framer-motion";

import { ContentColumn, EditorialSection, SectionHeader } from "@/components/layout/editorial-layout";
import { aboutContent, type AboutContent } from "@/lib/portfolio-content";

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
        className="grid gap-[clamp(2rem,4vw,3.5rem)] xl:grid-cols-[minmax(0,0.44fr)_minmax(0,0.56fr)] xl:items-start xl:gap-[clamp(2.75rem,3.6vw,4.75rem)]"
      >
        <motion.div
          {...itemMotion}
          className="grid gap-x-[clamp(1.25rem,2.5vw,2.5rem)] gap-y-[clamp(1.5rem,2.5vw,2.25rem)] sm:grid-cols-2"
          aria-label="About metrics"
        >
          {content.metrics.map((metric) => (
            <div key={metric.label} className="space-y-3 border-t border-border-subtle/80 pt-[var(--space-5)]">
              <p className="text-[clamp(2.4rem,7vw,4rem)] font-semibold leading-none tracking-[calc(var(--tracking-display)-0.03em)] text-foreground">
                {metric.value}
              </p>
              <p className="max-w-[12ch] text-xs font-medium uppercase leading-[1.45] tracking-[0.16em] text-muted-foreground sm:text-[0.8rem]">
                {metric.label}
              </p>
            </div>
          ))}
        </motion.div>

        <ContentColumn className="max-w-[36rem]">
          <motion.div {...itemMotion}>
            <SectionHeader
              eyebrow={content.label}
              title={content.heading}
              titleId="about-heading"
              titleClassName="max-w-[16ch] text-2xl sm:text-3xl xl:text-[2.2rem]"
              description={
                <div className="space-y-4">
                  {content.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              }
              descriptionClassName="max-w-[34rem] text-base leading-[1.76] sm:text-[1.02rem]"
            />
          </motion.div>
        </ContentColumn>
      </motion.div>
    </EditorialSection>
  );
}

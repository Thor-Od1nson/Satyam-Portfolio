"use client";

import { motion, useReducedMotion } from "framer-motion";

import { ExperienceTimelineItem } from "@/components/experience/experience-timeline-item";
import {
  ContentColumn,
  EditorialSection,
  SectionHeader,
} from "@/components/layout/editorial-layout";
import { experienceContent, type ExperienceContent } from "@/lib/portfolio-content";
import { cn } from "@/lib/utils";

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
    <EditorialSection aria-labelledby="experience-heading">
      <motion.div
        {...containerMotion}
        className="grid gap-[clamp(2rem,4vw,3.5rem)] xl:grid-cols-[minmax(0,0.38fr)_minmax(0,0.62fr)] xl:items-start xl:gap-[clamp(2.75rem,3.6vw,4.75rem)]"
      >
        <ContentColumn>
          <motion.div {...itemMotion}>
            <SectionHeader
              eyebrow={content.label}
              title={content.heading}
              titleId="experience-heading"
              titleClassName="max-w-[15ch]"
              description={content.introduction}
            />
          </motion.div>
        </ContentColumn>

        <ol className="relative" aria-label="Experience timeline">
          {content.entries.map((entry, index) => {
            const isLast = index === content.entries.length - 1;

            return (
              <li
                key={`${entry.company}-${entry.role}`}
                className={cn("relative pl-8 sm:pl-9", !isLast ? "pb-[var(--space-12)]" : undefined)}
              >
                {!isLast ? (
                  <span
                    className="absolute left-[0.48rem] top-[1.05rem] bottom-[0.25rem] w-px bg-border-subtle/90"
                    aria-hidden="true"
                  />
                ) : null}

                <span
                  className="absolute left-0 top-[0.72rem] inline-flex size-3 rounded-full border-[3px] border-background bg-primary shadow-[0_0_0_1px_var(--border-subtle)]"
                  aria-hidden="true"
                />

                <motion.div {...itemMotion}>
                  <ExperienceTimelineItem entry={entry} />
                </motion.div>
              </li>
            );
          })}
        </ol>
      </motion.div>
    </EditorialSection>
  );
}

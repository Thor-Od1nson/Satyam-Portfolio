"use client";

import { motion, useReducedMotion } from "framer-motion";

import { EditorialSection } from "@/components/layout/editorial-layout";
import { skillsContent, type SkillsContent } from "@/lib/portfolio-content";

const motionEase = [0.22, 1, 0.36, 1] as const;

type SkillsSectionProps = {
  content: SkillsContent;
};

export function SkillsSection() {
  return <SkillsSectionContent content={skillsContent} />;
}

export function SkillsSectionContent({ content }: SkillsSectionProps) {
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
    <EditorialSection aria-labelledby="technologies-heading">
      <motion.div {...containerMotion} className="space-y-[clamp(2.5rem,4vw,4rem)]">
        <motion.div
          {...itemMotion}
          className="grid gap-[var(--space-5)] xl:grid-cols-[minmax(0,0.58fr)_minmax(0,0.42fr)] xl:items-end"
        >
          <div className="max-w-[48rem] space-y-[var(--space-4)]">
            <p className="text-sm font-medium uppercase tracking-[var(--tracking-widest)] text-primary">
              {content.label}
            </p>

            <h2
              id="technologies-heading"
              className="max-w-[14ch] scroll-mt-[calc(var(--space-16)+var(--space-4))] text-2xl font-semibold tracking-[var(--tracking-heading)] text-foreground sm:text-3xl xl:text-4xl"
            >
              {content.heading}
            </h2>
          </div>

          <p className="max-w-[34rem] text-sm leading-[1.74] tracking-[var(--tracking-copy)] text-muted-foreground sm:text-base xl:justify-self-end xl:text-right">
            {content.introduction}
          </p>
        </motion.div>

        <ol className="border-y border-border-subtle/72" aria-label="Technology groups">
          {content.groups.map((group, index) => (
            <motion.li
              key={group.title}
              {...itemMotion}
              className="group border-b border-border-subtle/72 transition-colors [transition-duration:var(--duration-fast)] [transition-timing-function:var(--ease-standard)] last:border-b-0 hover:border-primary/28"
            >
              <article className="grid gap-x-[clamp(1rem,2vw,2rem)] gap-y-3 py-[clamp(1.2rem,2vw,1.6rem)] transition-transform [transition-duration:var(--duration-fast)] [transition-timing-function:var(--ease-standard)] hover:translate-x-[2px] sm:grid-cols-[auto_1fr] lg:grid-cols-[clamp(2.5rem,4vw,3.5rem)_minmax(0,12rem)_minmax(0,1fr)] lg:items-start">
                <p className="text-[clamp(1.3rem,2.6vw,2rem)] font-semibold leading-none tracking-[calc(var(--tracking-display)-0.03em)] text-muted-foreground/62 transition-colors [transition-duration:var(--duration-fast)] [transition-timing-function:var(--ease-standard)] group-hover:text-primary/92">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <div className="space-y-2 lg:contents">
                  <h3 className="text-lg font-semibold tracking-[var(--tracking-heading)] text-foreground/90 transition-colors [transition-duration:var(--duration-fast)] [transition-timing-function:var(--ease-standard)] group-hover:text-foreground sm:text-[1.28rem]">
                    {group.title}
                  </h3>

                  <p className="max-w-[44rem] text-sm leading-[1.7] tracking-[var(--tracking-copy)] text-muted-foreground transition-transform [transition-duration:var(--duration-fast)] [transition-timing-function:var(--ease-standard)] group-hover:translate-x-[2px] sm:text-[0.96rem]">
                    {group.technologies.join(" · ")}
                  </p>
                </div>
              </article>
            </motion.li>
          ))}
        </ol>
      </motion.div>
    </EditorialSection>
  );
}

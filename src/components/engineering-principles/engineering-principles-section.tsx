"use client";

import { motion, useReducedMotion } from "framer-motion";

import {
  ContentColumn,
  EditorialSection,
  SectionHeader,
} from "@/components/layout/editorial-layout";
import {
  engineeringPrinciplesContent,
  type EngineeringPrinciplesContent,
} from "@/lib/portfolio-content";
import { cn } from "@/lib/utils";

const motionEase = [0.22, 1, 0.36, 1] as const;

type EngineeringPrinciplesSectionProps = {
  content: EngineeringPrinciplesContent;
};

export function EngineeringPrinciplesSection() {
  return <EngineeringPrinciplesSectionContent content={engineeringPrinciplesContent} />;
}

export function EngineeringPrinciplesSectionContent({
  content,
}: EngineeringPrinciplesSectionProps) {
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
    <EditorialSection aria-labelledby="engineering-principles-heading">
      <motion.div {...containerMotion} className="space-y-[clamp(2.5rem,4vw,4rem)]">
        <ContentColumn>
          <motion.div {...itemMotion}>
            <SectionHeader
              eyebrow={content.label}
              title={content.heading}
              titleId="engineering-principles-heading"
              titleClassName="max-w-[15ch]"
              description={content.introduction}
            />
          </motion.div>
        </ContentColumn>

        <div className="max-w-[56rem] border-y border-border-subtle/80">
          {content.items.map((principle, index) => (
            <motion.article
              key={principle.title}
              {...itemMotion}
              className={cn(
                "grid gap-3 py-[var(--space-6)] md:grid-cols-[minmax(0,18rem)_1fr] md:gap-[var(--space-6)]",
                index > 0 ? "border-t border-border-subtle/80" : undefined
              )}
            >
              <h3 className="text-lg font-semibold tracking-[var(--tracking-heading)] text-foreground sm:text-xl">
                {principle.title}
              </h3>
              <p className="max-w-[36rem] text-sm leading-[1.72] tracking-[var(--tracking-copy)] text-muted-foreground sm:text-base">
                {principle.description}
              </p>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </EditorialSection>
  );
}

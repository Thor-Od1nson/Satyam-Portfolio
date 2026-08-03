"use client";

import { motion, useReducedMotion } from "framer-motion";

import {
  ContentColumn,
  EditorialSection,
  SectionHeader,
} from "@/components/layout/editorial-layout";
import { EngineeringCapabilityRow } from "@/components/skills/engineering-capability-row";
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
    <EditorialSection aria-labelledby="capabilities-heading">
      <motion.div {...containerMotion} className="space-y-[clamp(2.5rem,4vw,4rem)]">
        <ContentColumn>
          <motion.div {...itemMotion}>
            <SectionHeader
              eyebrow={content.label}
              title={content.heading}
              titleId="capabilities-heading"
              titleClassName="max-w-[15ch]"
              description={content.introduction}
            />
          </motion.div>
        </ContentColumn>

        <div className="border-b border-border-subtle/80">
          {content.capabilities.map((capability) => (
            <motion.div key={capability.title} {...itemMotion}>
              <EngineeringCapabilityRow capability={capability} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </EditorialSection>
  );
}

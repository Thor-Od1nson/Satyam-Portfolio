"use client";

import { motion, useReducedMotion } from "framer-motion";

import { ContactCard } from "@/components/contact/contact-card";
import { contactContent, type ContactContent } from "@/lib/portfolio-content";

const motionEase = [0.22, 1, 0.36, 1] as const;

type ContactSectionProps = {
  content: ContactContent;
};

export function ContactSection() {
  return <ContactSectionContent content={contactContent} />;
}

export function ContactSectionContent({ content }: ContactSectionProps) {
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
    <section aria-labelledby="contact-heading">
      <motion.div
        {...containerMotion}
        className="mx-auto w-full max-w-[var(--layout-hero)] px-[var(--space-gutter)] pb-[var(--space-section)] pt-[var(--space-6)] md:pt-[var(--space-8)]"
      >
        <div className="space-y-[var(--space-8)]">
          <div className="grid gap-[var(--space-8)] xl:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] xl:items-start">
            <motion.div
              {...itemMotion}
              className="max-w-[var(--layout-reading)] space-y-[var(--space-4)]"
            >
              <p className="text-sm font-medium uppercase tracking-[var(--tracking-widest)] text-primary">
                {content.label}
              </p>

              <h2
                id="contact-heading"
                className="max-w-[18ch] scroll-mt-[calc(var(--space-16)+var(--space-4))] text-2xl font-semibold tracking-[var(--tracking-heading)] text-foreground sm:text-3xl xl:text-4xl"
              >
                {content.heading}
              </h2>

              <p className="max-w-[var(--layout-copy)] text-sm leading-relaxed tracking-[var(--tracking-copy)] text-muted-foreground sm:text-base">
                {content.introduction}
              </p>

              <p className="max-w-[var(--layout-copy)] text-sm leading-relaxed tracking-[var(--tracking-copy)] text-foreground/88 sm:text-base">
                {content.availability}
              </p>
            </motion.div>

            <div className="grid auto-rows-fr gap-[var(--space-4)] sm:grid-cols-2">
              {content.methods.map((method) => (
                <motion.div key={method.label} {...itemMotion} className="h-full">
                  <ContactCard method={method} />
                </motion.div>
              ))}
            </div>
          </div>

          <motion.p
            {...itemMotion}
            className="text-sm leading-relaxed tracking-[var(--tracking-copy)] text-muted-foreground sm:text-base"
          >
            {content.closingLine}
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}

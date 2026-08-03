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
    <section aria-labelledby="contact-heading">
      <motion.div
        {...containerMotion}
        className="mx-auto w-full max-w-[var(--layout-hero)] px-[var(--space-gutter)] pb-[clamp(3.75rem,5.8vw,6rem)] pt-[clamp(0.85rem,1.75vw,1.5rem)] md:pt-[clamp(1rem,1.8vw,1.75rem)]"
      >
        <div className="space-y-[clamp(2rem,3.2vw,3.25rem)]">
          <div className="grid gap-[clamp(2rem,4vw,3.5rem)] xl:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] xl:items-start">
            <motion.div
              {...itemMotion}
              className="max-w-[var(--layout-reading)] space-y-[var(--space-5)] xl:self-center"
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

              <p className="max-w-[34rem] text-sm leading-[1.74] tracking-[var(--tracking-copy)] text-muted-foreground sm:text-base">
                {content.introduction}
              </p>

              {content.availability || content.closingLine ? (
                <div className="space-y-2.5">
                  {content.availability ? (
                    <p className="max-w-[34rem] text-sm leading-[1.68] tracking-[var(--tracking-copy)] text-muted-foreground/90 sm:text-base">
                      {content.availability}
                    </p>
                  ) : null}

                  {content.closingLine ? (
                    <p className="text-sm leading-[1.65] tracking-[var(--tracking-copy)] text-muted-foreground/75">
                      {content.closingLine}
                    </p>
                  ) : null}
                </div>
              ) : null}
            </motion.div>

            <div className="grid auto-rows-fr content-start gap-[clamp(1rem,2vw,1.5rem)] sm:grid-cols-2">
              {content.methods.map((method) => (
                <motion.div key={method.label} {...itemMotion} className="h-full">
                  <ContactCard method={method} />
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}

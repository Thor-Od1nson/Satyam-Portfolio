"use client";

import { motion, useReducedMotion } from "framer-motion";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  aboutContent,
  type AboutContent,
  type AboutSupportingCard,
} from "@/lib/portfolio-content";

const motionEase = [0.22, 1, 0.36, 1] as const;

type AboutSectionProps = {
  content: AboutContent;
};

type AboutSupportingCardProps = {
  card: AboutSupportingCard;
};

function AboutSupportingCard({ card }: AboutSupportingCardProps) {
  const isListLayout = card.layout === "list";

  return (
    <Card
      size="sm"
      className="border border-border bg-elevated shadow-sm ring-1 ring-border/60"
    >
      <CardHeader className="gap-2">
        <CardTitle className="text-lg tracking-[var(--tracking-heading)] text-foreground sm:text-xl">
          {card.title}
        </CardTitle>
      </CardHeader>

      <CardContent>
        {isListLayout ? (
          <ul className="grid gap-3" aria-label={card.title}>
            {card.items.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-foreground/92">
                <span
                  className="mt-2 inline-flex size-2 shrink-0 rounded-full bg-primary"
                  aria-hidden="true"
                />
                <span className="leading-relaxed tracking-[var(--tracking-copy)]">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <ul className="grid gap-2 sm:grid-cols-2" aria-label={card.title}>
            {card.items.map((item) => (
              <li
                key={item}
                className="rounded-full border border-border-subtle bg-background px-3 py-2 text-sm font-medium tracking-[var(--tracking-copy)] text-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}

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
    <section aria-labelledby="about-heading">
      <motion.div
        {...containerMotion}
        className="mx-auto w-full max-w-[var(--layout-hero)] px-[var(--space-gutter)] pb-[var(--space-section)] pt-[var(--space-6)] md:pt-[var(--space-8)]"
      >
        <div className="grid gap-[var(--space-8)] xl:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)] xl:items-start xl:gap-[var(--space-8)]">
          <div className="max-w-[var(--layout-reading)] space-y-[var(--space-5)]">
            <motion.div {...itemMotion} className="space-y-[var(--space-3)]">
              <p className="text-sm font-medium uppercase tracking-[var(--tracking-widest)] text-primary">
                {content.label}
              </p>

              <h2
                id="about-heading"
                className="max-w-[18ch] text-2xl font-semibold tracking-[var(--tracking-heading)] text-foreground sm:text-3xl xl:text-4xl"
              >
                {content.heading}
              </h2>
            </motion.div>

            <motion.div {...itemMotion} className="space-y-[var(--space-4)]">
              {content.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="max-w-[var(--layout-copy)] text-sm leading-relaxed tracking-[var(--tracking-copy)] text-muted-foreground sm:text-base"
                >
                  {paragraph}
                </p>
              ))}
            </motion.div>
          </div>

          <motion.aside
            {...itemMotion}
            className="space-y-[var(--space-4)]"
            aria-label="About highlights"
          >
            {content.supportingCards.map((card) => (
              <AboutSupportingCard key={card.title} card={card} />
            ))}
          </motion.aside>
        </div>
      </motion.div>
    </section>
  );
}

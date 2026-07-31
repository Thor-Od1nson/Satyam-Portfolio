"use client";

import Link from "next/link";
import {
  ArrowRightIcon,
  BriefcaseBusinessIcon,
  SparklesIcon,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { NeonCard } from "@/components/ui/neon-card";
import { heroContent, type HeroContent } from "@/lib/hero";
import { cn } from "@/lib/utils";

import styles from "./hero.module.css";

const motionEase = [0.22, 1, 0.36, 1] as const;

const ctaIcons = {
  "View Projects": ArrowRightIcon,
} as const;

type CtaIconProps = {
  label: string;
};

function CtaIcon({ label }: CtaIconProps) {
  const Icon = ctaIcons[label as keyof typeof ctaIcons] ?? ArrowRightIcon;

  return <Icon aria-hidden="true" />;
}

function HeroStatusPill({ label }: { label: string }) {
  return (
    <span className="inline-flex h-11 items-center gap-2 rounded-full border border-border bg-elevated px-5 text-sm text-muted-foreground shadow-xs">
      <CtaIcon label={label} />
      {label}
      <span className="text-2xs uppercase tracking-[var(--tracking-widest)] text-muted-foreground">
        Soon
      </span>
    </span>
  );
}

function getButtonClassName(kind: HeroContent["ctas"][number]["kind"]) {
  if (kind === "default") {
    return "h-12 rounded-full px-6 text-sm shadow-glow";
  }

  if (kind === "secondary") {
    return "rounded-full px-5 text-sm shadow-xs";
  }

  return "rounded-full border-border bg-elevated px-5 text-sm text-foreground shadow-xs";
}

export function Hero() {
  return <HeroSection content={heroContent} />;
}

type HeroSectionProps = {
  content: HeroContent;
};

export function HeroSection({ content }: HeroSectionProps) {
  const prefersReducedMotion = useReducedMotion();

  const containerMotion = prefersReducedMotion
    ? {}
    : {
        initial: "hidden" as const,
        animate: "visible" as const,
        variants: {
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.12,
              delayChildren: 0.08,
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
            y: 24,
            filter: "blur(10px)",
          },
          visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
              duration: 0.7,
              ease: motionEase,
            },
          },
        },
      };

  return (
    <section
      className={cn(styles.section, "relative")}
      aria-labelledby="hero-heading"
    >
      <div className={styles.backdrop} aria-hidden="true">
        <div className={styles.grid} />
        <div className={styles.glow} />
      </div>

      <motion.div
        {...containerMotion}
        className="relative z-[var(--z-base)] mx-auto flex min-h-[85svh] w-full max-w-[var(--layout-hero)] items-center px-[var(--space-gutter)] py-[var(--space-section)]"
      >
        <div className="grid w-full gap-[var(--space-8)] xl:grid-cols-[minmax(0,1.05fr)_minmax(20rem,0.95fr)] xl:items-center xl:gap-[var(--space-10)]">
          <div className="max-w-[var(--layout-reading)] space-y-[var(--space-6)] md:space-y-[var(--space-8)]">
            <motion.div {...itemMotion} className="space-y-[var(--space-3)]">
              <p className="text-sm font-medium uppercase tracking-[var(--tracking-widest)] text-primary sm:text-base">
                {content.name}
              </p>

              <h1
                id="hero-heading"
                className="max-w-[15ch] text-3xl font-semibold tracking-[var(--tracking-heading)] text-foreground sm:text-4xl xl:text-5xl 2xl:text-display-xs"
              >
                {content.title}
              </h1>
            </motion.div>

            <motion.p
              {...itemMotion}
              className="max-w-[var(--layout-copy)] text-base leading-relaxed tracking-[var(--tracking-copy)] text-muted-foreground sm:text-lg"
            >
              {content.introduction}
            </motion.p>

            <motion.div
              {...itemMotion}
              className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap"
            >
              {content.ctas.map((cta) => {
                if (!cta.href) {
                  return <HeroStatusPill key={cta.label} label={cta.label} />;
                }

                return (
                  <Button asChild key={cta.label} size="lg" variant={cta.kind} className={getButtonClassName(cta.kind)}>
                    {cta.external ? (
                      <a href={cta.href} target="_blank" rel="noopener noreferrer">
                        <CtaIcon label={cta.label} />
                        {cta.label}
                      </a>
                    ) : (
                      <Link href={cta.href}>
                        <CtaIcon label={cta.label} />
                        {cta.label}
                      </Link>
                    )}
                  </Button>
                );
              })}
            </motion.div>

            <motion.p
              {...itemMotion}
              className="text-sm tracking-[var(--tracking-copy)] text-muted-foreground"
            >
              {content.availabilityNote}
            </motion.p>
          </div>

          <motion.aside
            {...itemMotion}
            className="w-full xl:justify-self-end"
            aria-label="Hero highlights"
          >
            <div className="mx-auto flex max-w-[31rem] flex-col gap-[var(--space-3)] xl:max-w-[34rem]">
              <section
                className={cn(
                  styles.glassCard,
                  "rounded-[calc(var(--radius-2xl)+0.25rem)] px-[var(--space-4)] py-[var(--space-4)] sm:px-[var(--space-5)] sm:py-[var(--space-5)]"
                )}
                aria-labelledby="opportunities-heading"
              >
                <div className="relative flex items-start gap-3">
                  <span
                    className={cn(
                      styles.statusDot,
                      "mt-1 inline-flex size-3 shrink-0 rounded-full bg-success"
                    )}
                    aria-hidden="true"
                  />

                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-sm font-medium uppercase tracking-[var(--tracking-widest)] text-success">
                      <BriefcaseBusinessIcon className="size-4" aria-hidden="true" />
                      <span>{content.availability.label}</span>
                    </div>

                    <h2
                      id="opportunities-heading"
                      className="max-w-[30ch] text-lg font-semibold tracking-[var(--tracking-heading)] text-foreground sm:text-xl"
                    >
                      {content.availability.title}
                    </h2>

                    <p className="max-w-[34ch] text-sm leading-relaxed tracking-[var(--tracking-copy)] text-muted-foreground">
                      {content.availability.description}
                    </p>
                  </div>
                </div>
              </section>

              <section aria-labelledby="featured-project-heading">
                <NeonCard
                  className="rounded-3xl px-[var(--space-4)] py-[var(--space-4)] sm:px-[var(--space-5)] sm:py-[var(--space-5)]"
                  variant="hero"
                >
                  <div className="relative space-y-[var(--space-4)]">
                    <div className="space-y-[var(--space-2)]">
                      <div className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-background/40 px-2.5 py-1 text-[0.7rem] font-medium uppercase tracking-[var(--tracking-widest)] text-primary">
                        <SparklesIcon className="size-3.5" aria-hidden="true" />
                        <span>{content.featuredProject.label}</span>
                      </div>

                      <div className="space-y-1.5">
                        <h2
                          id="featured-project-heading"
                          className="text-xl font-semibold tracking-[var(--tracking-heading)] text-foreground sm:text-2xl"
                        >
                          {content.featuredProject.title}
                        </h2>

                        <p className="text-sm leading-relaxed tracking-[var(--tracking-copy)] text-muted-foreground">
                          {content.featuredProject.description}
                        </p>
                      </div>
                    </div>

                    <ul className="flex flex-wrap gap-1.5" aria-label="Project highlights">
                      {content.featuredProject.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="rounded-full border border-border-subtle bg-background/34 px-2.5 py-1 text-xs font-medium tracking-[var(--tracking-copy)] text-foreground"
                        >
                          {highlight}
                        </li>
                      ))}
                    </ul>

                    <div className="rounded-[calc(var(--radius-2xl)+0.125rem)] border border-border-subtle bg-background/30 p-[var(--space-3)] sm:p-[var(--space-4)]">
                      <div className="space-y-1.5">
                        <p className="text-xs font-medium uppercase tracking-[var(--tracking-widest)] text-muted-foreground">
                          Preview focus
                        </p>
                        <p className="text-sm leading-relaxed tracking-[var(--tracking-copy)] text-foreground/90">
                          Problem framing, system boundaries, implementation tradeoffs, and current project status.
                        </p>
                      </div>
                    </div>

                    <p className="text-sm tracking-[var(--tracking-copy)] text-muted-foreground">
                      {content.featuredProject.note}
                    </p>
                  </div>
                </NeonCard>
              </section>
            </div>
          </motion.aside>
        </div>
      </motion.div>
    </section>
  );
}

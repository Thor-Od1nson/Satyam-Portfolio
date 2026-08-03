"use client";

import Link from "next/link";
import {
  ArrowDownIcon,
  ArrowRightIcon,
  MailIcon,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import {
  ContentColumn,
  EditorialSection,
  SectionHeader,
} from "@/components/layout/editorial-layout";
import { Button } from "@/components/ui/button";
import { heroContent, type HeroContent } from "@/lib/hero";
import { cn } from "@/lib/utils";

import styles from "./hero.module.css";

const motionEase = [0.22, 1, 0.36, 1] as const;

const ctaIcons = {
  "View Work": ArrowRightIcon,
  Email: MailIcon,
  Experience: ArrowDownIcon,
} as const;

type CtaIconProps = {
  label: string;
};

function CtaIcon({ label }: CtaIconProps) {
  const Icon = ctaIcons[label as keyof typeof ctaIcons] ?? ArrowRightIcon;

  return <Icon aria-hidden="true" />;
}

function getButtonClassName(kind: HeroContent["ctas"][number]["kind"]) {
  if (kind === "default") {
    return "h-12 rounded-full px-6 text-sm shadow-sm";
  }

  return "h-12 rounded-full border-border bg-elevated/88 px-5 text-sm text-foreground shadow-2xs";
}

function getTextLinkClassName() {
  return "inline-flex h-12 items-center gap-2 rounded-full px-1 text-sm font-medium tracking-[var(--tracking-copy)] text-muted-foreground transition-colors [transition-duration:var(--duration-fast)] [transition-timing-function:var(--ease-standard)] [&_svg]:transition-transform [&_svg]:duration-[var(--duration-fast)] [&_svg]:ease-[var(--ease-standard)] hover:text-foreground hover:[&_svg]:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:[&_svg]:scale-105";
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
            filter: "blur(8px)",
          },
          visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
              duration: 0.62,
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

      <EditorialSection size="hero" className="relative z-[var(--z-base)]">
        <motion.div
          {...containerMotion}
          className="grid min-h-[64svh] gap-[clamp(2rem,4vw,3.25rem)] xl:min-h-[min(42rem,68svh)] xl:grid-cols-[minmax(0,0.94fr)_minmax(18rem,0.56fr)] xl:items-end xl:gap-[clamp(2.25rem,3vw,4rem)]"
        >
          <ContentColumn className="max-w-[44rem] space-y-[clamp(1.5rem,2.6vw,2.4rem)]">
            <motion.div {...itemMotion}>
              <SectionHeader
                eyebrow={content.name}
                title={content.title}
                titleId="hero-heading"
                titleAs="h1"
                eyebrowClassName="text-xs font-medium tracking-[0.18em] sm:text-sm"
                titleClassName="max-w-[14ch] text-[clamp(2.5rem,7vw,3rem)] leading-[0.96] sm:text-[clamp(3rem,6vw,3.5rem)] lg:text-[clamp(4rem,4.2vw,4.5rem)] 2xl:text-[clamp(4.5rem,4vw,5rem)]"
                description={content.introduction}
                descriptionClassName="max-w-[38rem] text-base leading-[1.72] sm:text-lg xl:text-[1.1875rem]"
              />
            </motion.div>

            <motion.div
              {...itemMotion}
              className="flex flex-col gap-3 pt-1 sm:flex-row sm:flex-wrap sm:items-center"
            >
              {content.ctas.map((cta) => {
                if (!cta.href) {
                  return null;
                }

                if (cta.kind === "outline") {
                  return cta.external ? (
                    <a
                      key={cta.label}
                      href={cta.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={getTextLinkClassName()}
                    >
                      <CtaIcon label={cta.label} />
                      {cta.label}
                    </a>
                  ) : (
                    <Link key={cta.label} href={cta.href} className={getTextLinkClassName()}>
                      <CtaIcon label={cta.label} />
                      {cta.label}
                    </Link>
                  );
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
              className="max-w-[36rem] text-sm leading-[1.68] tracking-[var(--tracking-copy)] text-muted-foreground"
            >
              {content.footnote}
            </motion.p>
          </ContentColumn>

          <motion.aside
            {...itemMotion}
            className="w-full xl:justify-self-end xl:pl-[clamp(1.75rem,2.2vw,2.75rem)]"
            aria-label="Hero summary"
          >
            <dl className="border-y border-border-subtle/90">
              {content.signals.map((signal, index) => (
                <div
                  key={signal.label}
                  className={cn(
                    "grid gap-3 py-[var(--space-5)] md:grid-cols-[7.5rem_1fr] md:gap-[var(--space-5)]",
                    index > 0 ? "border-t border-border-subtle/90" : undefined
                  )}
                >
                  <dt className="text-2xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                    {signal.label}
                  </dt>
                  <dd className="max-w-[31rem] text-sm leading-[1.68] tracking-[var(--tracking-copy)] text-foreground/92 sm:text-[1rem]">
                    {signal.value}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.aside>
        </motion.div>
      </EditorialSection>
    </section>
  );
}

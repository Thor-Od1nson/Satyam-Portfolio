"use client";

import Link from "next/link";
import { ArrowRightIcon, DownloadIcon } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { ContentColumn, EditorialSection } from "@/components/layout/editorial-layout";
import { Button } from "@/components/ui/button";
import { heroContent, type HeroContent } from "@/lib/hero";
import { cn } from "@/lib/utils";

import styles from "./hero.module.css";

const motionEase = [0.22, 1, 0.36, 1] as const;

const architectureLayers: ReadonlyArray<{
  label: string;
  value: string;
  tag?: string;
}> = [
  {
    label: "Interface",
    value: "React product surfaces",
  },
  {
    label: "Gateway",
    value: "Auth, APIs, and orchestration",
    tag: "REST",
  },
  {
    label: "Services",
    value: "Spring Boot and Node.js workflows",
    tag: "Webhooks",
  },
  {
    label: "Data",
    value: "PostgreSQL, jobs, and observability",
    tag: "Queues",
  },
] as const;

const architectureSignals = [
  {
    value: "170+",
    label: "Integration Tests",
  },
  {
    value: "OAuth 2.0",
    label: "Authorization",
  },
  {
    value: "JWT",
    label: "Authentication",
  },
] as const;

const ctaIcons = {
  "View Projects": ArrowRightIcon,
  "Download Resume": DownloadIcon,
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
    return "h-11 w-full justify-center rounded-full px-5 text-sm shadow-sm sm:h-12 sm:min-w-[12.25rem] sm:w-auto sm:px-6";
  }

  return "h-11 w-full justify-center rounded-full border-border bg-elevated/88 px-5 text-sm text-foreground shadow-2xs sm:h-12 sm:min-w-[12.25rem] sm:w-auto sm:px-6";
}

function HeroVisual() {
  return (
    <div className={styles.visualShell}>
      <div className={styles.visualHalo} aria-hidden="true" />

      <div className={styles.visualPanel}>
        <div className={styles.visualHeader}>
          <div className="space-y-1">
            <p className={styles.visualEyebrow}>Production Architecture</p>
            <p className={styles.visualTitle}>Enterprise delivery flow</p>
          </div>

          <span className={styles.visualStatus}>
            <span className={styles.statusDot} aria-hidden="true" />
            Live
          </span>
        </div>

        <div className={styles.canvas}>
          <div className={styles.flowColumn}>
            {architectureLayers.map((layer, index) => (
              <div key={layer.label} className={styles.flowRow}>
                <span className={styles.flowIndex}>{String(index + 1).padStart(2, "0")}</span>

                <div className={styles.flowCard}>
                  <p className={styles.flowLabel}>{layer.label}</p>
                  <p className={styles.flowValue}>{layer.value}</p>
                </div>

                <div className={styles.flowTagRail}>
                  {layer.tag ? <span className={styles.flowTag}>{layer.tag}</span> : null}
                </div>
              </div>
            ))}
          </div>

          <div className={styles.metrics}>
            {architectureSignals.map((signal) => (
              <div key={signal.value} className={styles.metricCard}>
                <span className={styles.metricValue}>{signal.value}</span>
                <span className={styles.metricLabel}>{signal.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
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

      <EditorialSection size="default" className="relative z-[var(--z-base)]">
        <motion.div
          {...containerMotion}
          className="grid gap-[clamp(2.5rem,4vw,4rem)] xl:grid-cols-[minmax(0,0.88fr)_minmax(20rem,0.8fr)] xl:items-center xl:gap-[clamp(3rem,4vw,5rem)]"
        >
          <ContentColumn className="max-w-[35rem] space-y-[clamp(1.25rem,2vw,1.75rem)]">
            <motion.div {...itemMotion} className="space-y-[clamp(1.35rem,2.2vw,2rem)]">
              <div className="space-y-3">
                <h1
                  id="hero-heading"
                  className="max-w-[10ch] text-[clamp(2.75rem,7.2vw,4.3rem)] font-semibold leading-[0.94] tracking-[calc(var(--tracking-display)-0.02em)] text-foreground"
                >
                  {content.name}
                </h1>

                <p className="text-[clamp(1.1rem,2vw,1.55rem)] font-medium tracking-[var(--tracking-copy)] text-primary/92 sm:text-[clamp(1.2rem,1.8vw,1.65rem)]">
                  {content.role}
                </p>
              </div>

              <p className="max-w-[34rem] text-base leading-[1.76] tracking-[var(--tracking-copy)] text-muted-foreground sm:text-lg">
                {content.valueProposition}
              </p>
            </motion.div>

            <motion.ul {...itemMotion} className={styles.stack} aria-label="Technology stack">
              {content.technologies.map((technology, index) => (
                <li key={technology} className={styles.stackItem}>
                  {index > 0 ? <span className={styles.stackDot} aria-hidden="true" /> : null}
                  <span>{technology}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div
              {...itemMotion}
              className="flex flex-col gap-3 pt-1 sm:flex-row sm:flex-wrap sm:items-center"
            >
              {content.ctas.map((cta) => {
                return (
                  <Button
                    asChild
                    key={cta.label}
                    size="lg"
                    variant={cta.kind}
                    className={getButtonClassName(cta.kind)}
                  >
                    {cta.external || cta.download ? (
                      <a
                        href={cta.href}
                        target={cta.external ? "_blank" : undefined}
                        rel={cta.external ? "noopener noreferrer" : undefined}
                        download={cta.download ? true : undefined}
                      >
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
          </ContentColumn>

          <motion.aside
            {...itemMotion}
            className="w-full max-w-[34rem] xl:justify-self-end"
            aria-label="Enterprise architecture visualization"
          >
            <HeroVisual />
          </motion.aside>
        </motion.div>
      </EditorialSection>
    </section>
  );
}

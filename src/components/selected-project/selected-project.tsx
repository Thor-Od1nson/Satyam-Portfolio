"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRightIcon, Layers3Icon } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { Button } from "@/components/ui/button";
import type { NeonCardVariant } from "@/lib/neon-card";
import { featuredProjectPreviewVisuals, type ProjectVisualAsset } from "@/lib/project-visuals";
import {
  NeonCard,
  neonCardChipClassName,
  neonCardInteractiveChipClassName,
} from "@/components/ui/neon-card";
import {
  featuredProjectContent,
  type ContentLink,
  type FeaturedProjectContent,
} from "@/lib/portfolio-content";
import { cn } from "@/lib/utils";

import styles from "./selected-project.module.css";

const motionEase = [0.22, 1, 0.36, 1] as const;

function ProjectStatus({ link }: { link: ContentLink }) {
  return (
    <div className="flex min-h-11 flex-col justify-center rounded-[1.375rem] border border-border-subtle bg-elevated px-4 py-2 text-sm shadow-2xs">
      <span className="font-medium tracking-[var(--tracking-copy)] text-foreground">{link.label}</span>
      {link.note ? (
        <span className="text-xs tracking-[var(--tracking-copy)] text-muted-foreground">
          {link.note}
        </span>
      ) : null}
    </div>
  );
}

function ProjectAction({ link }: { link: ContentLink }) {
  const href = link.href;
  const isUnavailable = !href || link.availability !== "available";
  const isRepository = link.label === "View Repository";

  const className = cn(
    "h-11 rounded-full px-5 text-sm shadow-xs",
    isRepository ? "border-border bg-elevated text-foreground" : undefined
  );

  if (isUnavailable) {
    return <ProjectStatus link={link} />;
  }

  if (link.external) {
    return (
      <Button asChild variant={isRepository ? "outline" : "default"} className={className}>
        <a href={href} target="_blank" rel="noopener noreferrer">
          {link.label}
        </a>
      </Button>
    );
  }

  return (
    <Button asChild variant={isRepository ? "outline" : "default"} className={className}>
      <Link href={href}>{link.label}</Link>
    </Button>
  );
}

function PreviewFrame({
  icon,
  label,
  description,
  aspectClassName,
  variant,
  image,
}: {
  icon: ReactNode;
  label: string;
  description: string;
  aspectClassName: string;
  variant: NeonCardVariant;
  image?: ProjectVisualAsset;
}) {
  return (
    <NeonCard
      className="rounded-[calc(var(--radius-2xl)+0.125rem)] p-[var(--space-3)]"
      variant={variant}
    >
      <div className={cn(styles.frame, aspectClassName, "p-[var(--space-4)] sm:p-[var(--space-5)]")}>
        {image ? (
          <>
            <div className={styles.media}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                unoptimized
                sizes="(min-width: 1280px) 30vw, 100vw"
                className={styles.mediaImage}
              />
            </div>
            <div className={styles.mediaOverlay} aria-hidden="true" />
          </>
        ) : null}
        <div className="relative z-[var(--z-raised)] flex h-full flex-col justify-between">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border-subtle bg-background/66 px-3 py-1 text-[0.7rem] font-medium uppercase tracking-[var(--tracking-widest)] text-muted-foreground">
            {icon}
            <span>{label}</span>
          </div>

          <div className="max-w-[22rem] space-y-1">
            <p className="text-sm font-medium tracking-[var(--tracking-heading)] text-foreground">
              {label}
            </p>
            <p className="text-sm leading-relaxed tracking-[var(--tracking-copy)] text-muted-foreground">
              {description}
            </p>
          </div>
        </div>
      </div>
    </NeonCard>
  );
}

export function SelectedProject() {
  return <SelectedProjectSection content={featuredProjectContent} />;
}

type SelectedProjectSectionProps = {
  content: FeaturedProjectContent;
};

export function SelectedProjectSection({ content }: SelectedProjectSectionProps) {
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
    <section aria-labelledby="selected-project-heading">
      <motion.div
        {...containerMotion}
        className="mx-auto w-full max-w-[var(--layout-hero)] px-[var(--space-gutter)] pb-[var(--space-section)] pt-[var(--space-6)] md:pt-[var(--space-8)]"
      >
        <div className="grid gap-[var(--space-8)] xl:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)] xl:items-start xl:gap-[var(--space-8)]">
          <div className="max-w-[var(--layout-reading)] space-y-[var(--space-5)]">
            <motion.div {...itemMotion} className="space-y-[var(--space-3)]">
              <p className="text-sm font-medium uppercase tracking-[var(--tracking-widest)] text-primary">
                {content.label}
              </p>

              <h2
                id="selected-project-heading"
                className="max-w-[16ch] text-2xl font-semibold tracking-[var(--tracking-heading)] text-foreground sm:text-3xl xl:text-4xl"
              >
                {content.name}
              </h2>

              <p className="max-w-[var(--layout-copy)] text-sm leading-relaxed tracking-[var(--tracking-copy)] text-muted-foreground sm:text-base">
                {content.summary}
              </p>
            </motion.div>

            <motion.div {...itemMotion} className="space-y-[var(--space-3)]">
              <h3 className="text-xs font-medium uppercase tracking-[var(--tracking-widest)] text-muted-foreground">
                Technology
              </h3>

              <ul className="flex flex-wrap gap-2" aria-label="Technology stack">
                {content.stack.map((technology) => (
                  <li
                    key={technology}
                    className={`rounded-full px-3 py-1.5 text-xs font-medium tracking-[var(--tracking-copy)] text-foreground sm:text-sm ${neonCardChipClassName} ${neonCardInteractiveChipClassName}`}
                  >
                    {technology}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div {...itemMotion} className="space-y-[var(--space-3)]">
              <h3 className="text-xs font-medium uppercase tracking-[var(--tracking-widest)] text-muted-foreground">
                Engineering highlights
              </h3>

              <ul className="grid gap-3" aria-label="Engineering highlights">
                {content.outcomes.map((highlight) => (
                  <li key={highlight} className="flex gap-3">
                    <span
                      className="mt-2 inline-flex size-2.5 shrink-0 rounded-full bg-primary"
                      aria-hidden="true"
                    />
                    <span className="text-sm leading-relaxed tracking-[var(--tracking-copy)] text-foreground/92 sm:text-base">
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div {...itemMotion} className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {content.links.map((link) => (
                <ProjectAction key={link.label} link={link} />
              ))}
            </motion.div>
          </div>

          <motion.aside {...itemMotion} className="space-y-[var(--space-4)]" aria-label="Selected project previews">
            <PreviewFrame
              icon={<ArrowUpRightIcon className="size-3.5" aria-hidden="true" />}
              label={content.previewFrames.productSurface}
              description="Visual reference for the featured project's product surface."
              aspectClassName="aspect-[16/10]"
              variant="a"
              image={featuredProjectPreviewVisuals.productSurface}
            />

            <PreviewFrame
              icon={<Layers3Icon className="size-3.5" aria-hidden="true" />}
              label={content.previewFrames.architecture}
              description="High-level architecture view for the featured project's implementation."
              aspectClassName="aspect-[16/9]"
              variant="b"
              image={featuredProjectPreviewVisuals.architecture}
            />
          </motion.aside>
        </div>
      </motion.div>
    </section>
  );
}

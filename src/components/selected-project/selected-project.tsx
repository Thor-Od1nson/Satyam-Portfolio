"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

import {
  EditorialSection,
  SectionHeader,
} from "@/components/layout/editorial-layout";
import { Button } from "@/components/ui/button";
import { NeonCard } from "@/components/ui/neon-card";
import {
  featuredProjectPreviewVisuals,
  type ProjectVisualAsset,
} from "@/lib/project-visuals";
import {
  featuredProjectContent,
  type ContentLink,
  type FeaturedProjectContent,
} from "@/lib/portfolio-content";
import { cn } from "@/lib/utils";

import styles from "./selected-project.module.css";

const motionEase = [0.22, 1, 0.36, 1] as const;

const architectureSteps = [
  { title: "React.js", detail: "Restaurant interface" },
  { title: "Express.js", detail: "Integration API" },
  { title: "OAuth 2.0", detail: "Secure access" },
  { title: "Deliveroo", detail: "Orders and events" },
] as const;

const capabilityBlocks = [
  {
    title: "Deliveroo API integration",
    description: "Connected restaurant workflows directly to Deliveroo services.",
  },
  {
    title: "OAuth 2.0 authorization",
    description: "Established secure authentication between the platform and restaurant accounts.",
  },
  {
    title: "Webhook processing",
    description: "Handled event-driven updates for incoming delivery and order activity.",
  },
  {
    title: "Order synchronization",
    description: "Kept operational state aligned across dashboards and backend services.",
  },
] as const;

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

  if (isUnavailable) {
    return <ProjectStatus link={link} />;
  }

  if (link.external) {
    return (
      <Button asChild className="h-11 rounded-full px-5 text-sm shadow-xs">
        <a href={href} target="_blank" rel="noopener noreferrer">
          {link.label}
        </a>
      </Button>
    );
  }

  return (
    <Button asChild className="h-11 rounded-full px-5 text-sm shadow-xs">
      <Link href={href}>{link.label}</Link>
    </Button>
  );
}

function VisualFrame({
  eyebrow,
  title,
  description,
  image,
  variant,
  imageClassName,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image: ProjectVisualAsset;
  variant: "hero" | "a";
  imageClassName: string;
}) {
  return (
    <NeonCard
      className="rounded-[calc(var(--radius-2xl)+0.125rem)] p-[var(--space-3)] sm:p-[var(--space-4)]"
      variant={variant}
    >
      <div className={styles.visualFrame}>
        <div className={cn(styles.visualMedia, imageClassName)}>
          <div className={styles.visualMediaInset}>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              unoptimized
              sizes="(min-width: 1280px) 42vw, 100vw"
              className={styles.visualImage}
            />
          </div>
          <div className={styles.visualMediaOverlay} aria-hidden="true" />
        </div>

        <div className={styles.visualPanel}>
          <p className={styles.frameEyebrow}>{eyebrow}</p>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold tracking-[var(--tracking-heading)] text-foreground sm:text-xl">
              {title}
            </h3>
            <p className="max-w-[42rem] text-sm leading-relaxed tracking-[var(--tracking-copy)] text-muted-foreground sm:text-base">
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
        viewport: { once: true, amount: 0.22 },
        variants: {
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.06,
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

  const stackGroups = [
    {
      label: "Interface",
      items: content.stack.filter((item) => item === "React.js"),
    },
    {
      label: "Services",
      items: content.stack.filter((item) => ["Node.js", "Express.js", "Supabase"].includes(item)),
    },
    {
      label: "Integration",
      items: content.stack.filter((item) => ["REST APIs", "OAuth 2.0"].includes(item)),
    },
    {
      label: "Delivery",
      items: content.stack.filter((item) => item === "Git"),
    },
  ].filter((group) => group.items.length > 0);

  return (
    <EditorialSection aria-labelledby="selected-project-heading" containerClassName="pt-0">
      <motion.div {...containerMotion} className="space-y-[clamp(3rem,4vw,4.5rem)]">
        <motion.div {...itemMotion}>
          <SectionHeader
            eyebrow={content.label}
            title={content.name}
            titleId="selected-project-heading"
            titleClassName="max-w-[12ch]"
          />
        </motion.div>

        <motion.div
          {...itemMotion}
          className="grid gap-[clamp(1.25rem,3vw,2rem)] xl:grid-cols-[minmax(0,1.08fr)_minmax(20rem,0.92fr)] xl:items-start"
        >
          <div className="space-y-[clamp(1rem,2vw,1.5rem)]">
            <NeonCard
              className="rounded-[calc(var(--radius-2xl)+0.125rem)] p-[var(--space-3)] sm:p-[var(--space-4)]"
              variant="hero"
            >
              <div className={styles.visualFrame}>
                <div className={cn(styles.visualMedia, styles.primaryVisualMedia)}>
                  <div className={styles.visualMediaInset}>
                    <Image
                      src={featuredProjectPreviewVisuals.architecture.src}
                      alt={featuredProjectPreviewVisuals.architecture.alt}
                      fill
                      unoptimized
                      sizes="(min-width: 1280px) 46vw, 100vw"
                      className={styles.visualImage}
                    />
                  </div>
                  <div className={styles.visualMediaOverlay} aria-hidden="true" />
                </div>

                <div className={styles.visualPanel}>
                  <div className="space-y-2">
                    <p className={styles.frameEyebrow}>Architecture</p>
                    <h3 className="text-xl font-semibold tracking-[var(--tracking-heading)] text-foreground sm:text-2xl">
                      {content.previewFrames.architecture}
                    </h3>
                    <p className="max-w-[40rem] text-sm leading-relaxed tracking-[var(--tracking-copy)] text-muted-foreground sm:text-base">
                      Restaurant operations move from the product surface through secure services into Deliveroo integrations and event flows.
                    </p>
                  </div>

                  <ol className={styles.architectureRail} aria-label="Architecture flow">
                    {architectureSteps.map((step) => (
                      <li key={step.title} className={styles.architectureStep}>
                        <span className={styles.architectureTitle}>{step.title}</span>
                        <span className={styles.architectureDetail}>{step.detail}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </NeonCard>
          </div>

          <div className="space-y-[clamp(1rem,2vw,1.5rem)] xl:pt-[var(--space-2)]">
            <div className={styles.supportBlock}>
              <p className={styles.supportEyebrow}>Product summary</p>
              <p className="text-sm leading-relaxed tracking-[var(--tracking-copy)] text-foreground/92 sm:text-base">
                {content.summary}
              </p>
            </div>

            <div className={styles.supportBlock}>
              <p className={styles.supportEyebrow}>Technology</p>
              <dl className={styles.stackGrid}>
                {stackGroups.map((group) => (
                  <div key={group.label} className={styles.stackRow}>
                    <dt className={styles.stackLabel}>{group.label}</dt>
                    <dd className={styles.stackValue}>{group.items.join(" / ")}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className={styles.supportBlock}>
              <p className={styles.supportEyebrow}>Capabilities</p>
              <div className={styles.capabilityGrid}>
                {capabilityBlocks.map((capability) => (
                  <div key={capability.title} className={styles.capabilityCard}>
                    <h3 className="text-sm font-medium tracking-[var(--tracking-heading)] text-foreground sm:text-base">
                      {capability.title}
                    </h3>
                    <p className="text-sm leading-relaxed tracking-[var(--tracking-copy)] text-muted-foreground">
                      {capability.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <motion.div {...itemMotion} className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {content.links.map((link) => (
                <ProjectAction key={link.label} link={link} />
              ))}
            </motion.div>

            <VisualFrame
              eyebrow="Product surface"
              title={content.previewFrames.productSurface}
              description="A secondary look at the operational dashboard used to monitor sync health, webhook activity, and service status."
              image={featuredProjectPreviewVisuals.productSurface}
              variant="a"
              imageClassName={styles.secondaryVisualMedia}
            />
          </div>
        </motion.div>
      </motion.div>
    </EditorialSection>
  );
}

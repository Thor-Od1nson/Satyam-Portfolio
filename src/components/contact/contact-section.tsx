"use client";

import type { FormEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";

import { Button } from "@/components/ui/button";
import {
  contactContent,
  type ContactContent,
} from "@/lib/portfolio-content";

const motionEase = [0.22, 1, 0.36, 1] as const;

type ContactSectionProps = {
  content: ContactContent;
};

export function ContactSection() {
  return <ContactSectionContent content={contactContent} />;
}

function getEmailMethod(content: ContactContent) {
  return content.methods.find((method) => method.label === "Email") ?? null;
}

function getLinkedInMethod(content: ContactContent) {
  return content.methods.find((method) => method.label === "LinkedIn") ?? null;
}

function handleContactSubmit(event: FormEvent<HTMLFormElement>, emailHref: string | null) {
  event.preventDefault();

  if (!emailHref) {
    return;
  }

  const form = event.currentTarget;
  const formData = new FormData(form);
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  const subject = encodeURIComponent(`Project inquiry from ${name || "Portfolio visitor"}`);
  const body = encodeURIComponent(
    [
      "Hi Satyam,",
      "",
      `Name: ${name || "Not provided"}`,
      `Email: ${email || "Not provided"}`,
      "",
      message || "I would like to discuss a project.",
    ].join("\n")
  );

  window.location.href = `${emailHref}?subject=${subject}&body=${body}`;
  form.reset();
}

export function ContactSectionContent({ content }: ContactSectionProps) {
  const prefersReducedMotion = useReducedMotion() ?? false;
  const emailMethod = getEmailMethod(content);
  const linkedIn = getLinkedInMethod(content);

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
              delayChildren: 0.03,
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
            y: 16,
          },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.52,
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
        <div className="relative overflow-hidden rounded-[calc(var(--radius-3xl)+0.25rem)] border border-border-subtle/72 bg-[linear-gradient(180deg,color-mix(in_oklch,var(--background),transparent_4%)_0%,color-mix(in_oklch,var(--surface),transparent_10%)_100%)] px-[clamp(1.25rem,3vw,2rem)] py-[clamp(2rem,5vw,3.5rem)] shadow-[0_32px_84px_-48px_rgba(0,0,0,0.78)]">
          <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent_0%,color-mix(in_oklch,var(--primary)_32%,transparent)_50%,transparent_100%)]" aria-hidden="true" />

          <div className="relative z-10 mx-auto max-w-[42rem] space-y-[clamp(1.75rem,3.5vw,2.75rem)] text-center">
            <motion.div {...itemMotion} className="space-y-4">
              <h2
                id="contact-heading"
                className="scroll-mt-[calc(var(--space-16)+var(--space-4))] text-[clamp(2.35rem,5.5vw,3.6rem)] font-semibold leading-[0.96] tracking-[var(--tracking-display)] text-foreground"
              >
                {content.heading}
              </h2>

              <p className="mx-auto max-w-[34rem] text-[clamp(1rem,1.75vw,1.15rem)] font-medium leading-[1.72] tracking-[var(--tracking-copy)] text-primary/92">
                {content.introduction}
              </p>
            </motion.div>

            <motion.div
              {...itemMotion}
              className="flex items-center justify-center gap-3.5"
              aria-label="Direct contact options"
            >
              {emailMethod?.href ? (
                <a
                  href={emailMethod.href}
                  aria-label="Email"
                  title="Email"
                  className="group flex size-12 items-center justify-center rounded-2xl border border-border/72 bg-background/28 text-muted-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-[transform,border-color,background-color,color,box-shadow] [transition-duration:var(--duration-fast)] [transition-timing-function:var(--ease-standard)] hover:-translate-y-0.5 hover:border-primary/26 hover:bg-background/40 hover:text-primary hover:shadow-[0_18px_48px_-34px_rgba(0,0,0,0.72)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-5 transition-transform duration-[var(--duration-fast)] ease-[var(--ease-standard)] group-hover:scale-110"
                    aria-hidden="true"
                  >
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
                  </svg>
                </a>
              ) : null}

              {linkedIn?.href ? (
                <a
                  href={linkedIn.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                  className="group flex size-12 items-center justify-center rounded-2xl border border-border/72 bg-background/28 text-muted-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-[transform,border-color,background-color,color,box-shadow] [transition-duration:var(--duration-fast)] [transition-timing-function:var(--ease-standard)] hover:-translate-y-0.5 hover:border-primary/26 hover:bg-background/40 hover:text-primary hover:shadow-[0_18px_48px_-34px_rgba(0,0,0,0.72)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-5 transition-transform duration-[var(--duration-fast)] ease-[var(--ease-standard)] group-hover:scale-110"
                    aria-hidden="true"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              ) : null}
            </motion.div>

            <motion.form
              {...itemMotion}
              className="mx-auto w-full max-w-[38rem] space-y-4 text-left"
              onSubmit={(event) => handleContactSubmit(event, emailMethod?.href ?? null)}
            >
              <p className="text-center text-sm font-medium tracking-[var(--tracking-copy)] text-muted-foreground sm:text-base">
                Get in touch using the form
              </p>

              <div className="space-y-4">
                <div>
                  <label htmlFor="contact-name" className="sr-only">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    required
                    className="h-14 w-full rounded-[calc(var(--radius-xl)+0.125rem)] border border-border/72 bg-background/24 px-4 text-sm tracking-[var(--tracking-copy)] text-foreground outline-none transition-[border-color,background-color,box-shadow] [transition-duration:var(--duration-fast)] [transition-timing-function:var(--ease-standard)] placeholder:text-muted-foreground/72 focus:border-primary/34 focus:bg-background/36 focus:ring-2 focus:ring-ring/30 sm:px-5 sm:text-base"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="sr-only">
                    Your Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    required
                    className="h-14 w-full rounded-[calc(var(--radius-xl)+0.125rem)] border border-border/72 bg-background/24 px-4 text-sm tracking-[var(--tracking-copy)] text-foreground outline-none transition-[border-color,background-color,box-shadow] [transition-duration:var(--duration-fast)] [transition-timing-function:var(--ease-standard)] placeholder:text-muted-foreground/72 focus:border-primary/34 focus:bg-background/36 focus:ring-2 focus:ring-ring/30 sm:px-5 sm:text-base"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    placeholder="Send a message to get started."
                    required
                    rows={6}
                    className="min-h-[11.5rem] w-full resize-y rounded-[calc(var(--radius-xl)+0.125rem)] border border-border/72 bg-background/24 px-4 py-4 text-sm leading-[1.7] tracking-[var(--tracking-copy)] text-foreground outline-none transition-[border-color,background-color,box-shadow] [transition-duration:var(--duration-fast)] [transition-timing-function:var(--ease-standard)] placeholder:text-muted-foreground/72 focus:border-primary/34 focus:bg-background/36 focus:ring-2 focus:ring-ring/30 sm:px-5 sm:text-base"
                  />
                </div>
              </div>

              <div className="flex justify-center pt-1">
                <Button
                  type="submit"
                  size="lg"
                  className="h-11 min-w-[10rem] rounded-full px-6 text-sm tracking-[0.12em] uppercase shadow-sm"
                >
                  Submit
                </Button>
              </div>
            </motion.form>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

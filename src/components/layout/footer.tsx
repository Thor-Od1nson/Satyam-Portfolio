import Link from "next/link";

import { footerConfig } from "@/lib/footer";
import { navigationConfig } from "@/lib/navigation";
import { siteConfig } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  const visibleSocialLinks = footerConfig.socialLinks.filter(
    (item) => Boolean(item.href && item.value)
  );

  return (
    <footer className="border-t border-border-subtle bg-background" aria-labelledby="footer-title">
      <div className="mx-auto flex w-full max-w-[var(--layout-page)] flex-col gap-[var(--space-8)] px-[var(--space-gutter)] py-[var(--space-section)] md:gap-[var(--space-10)]">
        <div className="grid gap-[var(--space-8)] md:grid-cols-[minmax(0,1.35fr)_minmax(0,0.65fr)_minmax(0,0.85fr)] md:items-start">
          <section className="space-y-[var(--space-4)]">
            <div className="space-y-[var(--space-2)]">
              <p
                id="footer-title"
                className="font-heading text-lg font-semibold tracking-[var(--tracking-heading)] text-foreground"
              >
                {siteConfig.creator}
              </p>
              <p className="max-w-[var(--layout-copy)] text-sm leading-relaxed tracking-[var(--tracking-copy)] text-muted-foreground sm:text-base">
                {footerConfig.tagline}
              </p>
            </div>
          </section>

          <nav aria-label="Footer navigation" className="space-y-[var(--space-3)]">
            <h2 className="text-sm font-medium uppercase tracking-[var(--tracking-widest)] text-muted-foreground">
              Navigation
            </h2>

            <ul className="space-y-[var(--space-2)]">
              {navigationConfig.primary.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex rounded-xl px-1 py-1 text-sm tracking-[var(--tracking-copy)] text-foreground transition-colors [transition-duration:var(--duration-fast)] [transition-timing-function:var(--ease-standard)] hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <section aria-labelledby="footer-socials" className="space-y-[var(--space-3)]">
            <div className="space-y-[var(--space-2)]">
              <h2
                id="footer-socials"
                className="text-sm font-medium uppercase tracking-[var(--tracking-widest)] text-muted-foreground"
              >
                Social
              </h2>
              <p className="text-sm tracking-[var(--tracking-copy)] text-muted-foreground">
                {footerConfig.socialNote}
              </p>
            </div>

            <ul className="flex flex-wrap gap-2">
              {visibleSocialLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex rounded-full border border-border bg-elevated px-4 py-1.5 text-sm tracking-[var(--tracking-copy)] text-muted-foreground shadow-2xs transition-colors [transition-duration:var(--duration-fast)] [transition-timing-function:var(--ease-standard)] hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="flex flex-col gap-[var(--space-3)] border-t border-border-subtle pt-[var(--space-6)] text-sm tracking-[var(--tracking-copy)] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {year} {siteConfig.creator}. All rights reserved.</p>
          <p>Designed and built with a product-first engineering mindset.</p>
        </div>
      </div>
    </footer>
  );
}

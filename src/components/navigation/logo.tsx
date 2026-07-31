import Link from "next/link";

import { navigationConfig } from "@/lib/navigation";

export function Logo() {
  return (
    <Link
      href={navigationConfig.homeHref}
      className="inline-flex items-center gap-3 rounded-xl px-1 py-1 text-foreground transition-colors [transition-duration:var(--duration-fast)] [transition-timing-function:var(--ease-standard)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      aria-label={`${navigationConfig.branding.name} home`}
    >
      <span className="flex size-10 items-center justify-center rounded-2xl border border-border bg-elevated text-sm font-semibold tracking-[var(--tracking-heading)] text-foreground shadow-xs">
        <span className="text-primary">{navigationConfig.branding.initials}</span>
      </span>

      <span className="flex min-w-0 flex-col leading-tight">
        <span className="font-heading text-sm font-semibold tracking-[var(--tracking-heading)] text-foreground sm:text-base">
          {navigationConfig.branding.name}
        </span>
        <span className="max-w-[12rem] text-2xs text-muted-foreground sm:max-w-none">
          {navigationConfig.branding.tagline}
        </span>
      </span>
    </Link>
  );
}

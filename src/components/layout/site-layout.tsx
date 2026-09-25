import type { ReactNode } from "react";

import { GlobalBackground } from "@/components/layout/global-background";

type SiteLayoutProps = {
  children: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
};

export function SiteLayout({ children, header, footer }: SiteLayoutProps) {
  return (
    <div className="relative isolate flex min-h-dvh flex-col overflow-x-clip bg-background text-foreground">
      <GlobalBackground />

      <a
        href="#main-content"
        className="sr-only focus:absolute focus:left-4 focus:top-4 focus:not-sr-only focus:z-50 focus:rounded-md focus:bg-background focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
      >
        Skip to content
      </a>

      {header ? <header className="relative z-[var(--z-raised)]">{header}</header> : null}

      <main
        id="main-content"
        className="relative z-[var(--z-base)] flex-1 scroll-mt-[calc(var(--space-16)+var(--space-4))]"
      >
        {children}
      </main>

      {footer ? <div className="relative z-[var(--z-base)]">{footer}</div> : null}
    </div>
  );
}

"use client";

import type { ReactNode } from "react";
import { ThemeProvider } from "next-themes";

import { TooltipProvider } from "@/components/ui/tooltip";

type ProvidersProps = {
  children: ReactNode;
};

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      disableTransitionOnChange
      enableSystem={false}
      storageKey="satyamdev-theme"
    >
      <TooltipProvider delayDuration={150} skipDelayDuration={200}>
        {children}
      </TooltipProvider>
    </ThemeProvider>
  );
}

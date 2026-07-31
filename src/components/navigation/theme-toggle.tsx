"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ThemeToggleProps = {
  className?: string;
};

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme !== "light";
  const nextTheme = isDark ? "light" : "dark";

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon-sm"
      className={cn("relative", className)}
      aria-label={`Switch to ${nextTheme} theme`}
      aria-pressed={isDark}
      onClick={() => setTheme(nextTheme)}
    >
      <SunIcon
        className="size-4 scale-100 text-foreground transition-transform [transition-duration:var(--duration-fast)] [transition-timing-function:var(--ease-standard)] dark:scale-0"
        aria-hidden="true"
      />
      <MoonIcon
        className="absolute size-4 scale-0 text-foreground transition-transform [transition-duration:var(--duration-fast)] [transition-timing-function:var(--ease-standard)] dark:scale-100"
        aria-hidden="true"
      />
    </Button>
  );
}

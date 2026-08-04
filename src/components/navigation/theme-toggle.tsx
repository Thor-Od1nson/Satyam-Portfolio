"use client";

import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ThemeToggleProps = {
  className?: string;
};

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const mountTimer = window.setTimeout(() => {
      setMounted(true);
    }, 0);

    return () => {
      window.clearTimeout(mountTimer);
    };
  }, []);

  if (!mounted) {
    return (
      <Button
        type="button"
        variant="ghost"
        size="icon-sm"
        className={cn("relative", className)}
        aria-label="Toggle theme"
        aria-pressed={false}
        disabled
      >
        <SunIcon className="size-4 text-foreground" aria-hidden="true" />
      </Button>
    );
  }

  const isDark = resolvedTheme === "dark";
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

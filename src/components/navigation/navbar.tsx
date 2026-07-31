"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { MenuIcon } from "lucide-react";
import { usePathname } from "next/navigation";

import { Logo } from "@/components/navigation/logo";
import { ThemeToggle } from "@/components/navigation/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  isNavigationItemActive,
  navigationConfig,
  type NavigationItem,
} from "@/lib/navigation";
import { cn } from "@/lib/utils";

type NavigationLinkProps = {
  item: NavigationItem;
  pathname: string;
  mobile?: boolean;
};

function NavigationLink({ item, pathname, mobile = false }: NavigationLinkProps) {
  const isActive = isNavigationItemActive(pathname, item.href);

  return (
    <Link
      href={item.href}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "inline-flex items-center rounded-full text-sm font-medium tracking-[var(--tracking-copy)] outline-none transition-colors [transition-duration:var(--duration-fast)] [transition-timing-function:var(--ease-standard)] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        mobile
          ? "min-h-11 w-full justify-between rounded-2xl border border-transparent px-4 py-3"
          : "min-h-10 px-4",
        isActive
          ? mobile
            ? "border-border bg-elevated text-foreground shadow-xs"
            : "bg-secondary text-foreground shadow-2xs"
          : mobile
            ? "text-muted-foreground hover:border-border-subtle hover:bg-surface hover:text-foreground"
            : "text-muted-foreground hover:bg-secondary hover:text-foreground"
      )}
    >
      <span>{item.label}</span>
      {mobile ? (
        <span className="text-2xs uppercase tracking-[var(--tracking-widest)] text-muted-foreground">
          {isActive ? "Current" : "Open"}
        </span>
      ) : null}
    </Link>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateScrollState = () => {
      setIsScrolled(window.scrollY > 12);
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateScrollState);
    };
  }, []);

  return (
    <div
      className={cn(
        "sticky top-0 z-[var(--z-sticky)] border-b transition-[background-color,border-color,box-shadow,backdrop-filter] [transition-duration:var(--duration-moderate)] [transition-timing-function:var(--ease-standard)]",
        isScrolled
          ? "border-border bg-background/82 shadow-xs supports-backdrop-filter:bg-background/72 supports-backdrop-filter:backdrop-blur-xl"
          : "border-transparent bg-transparent supports-backdrop-filter:backdrop-blur-md"
      )}
    >
      <nav aria-label="Primary" className="mx-auto flex min-h-16 w-full max-w-[var(--layout-page)] items-center gap-4 px-[var(--space-gutter)] py-3">
        <div className="flex min-w-0 flex-1 items-center">
          <Logo />
        </div>

        <ul className="hidden items-center gap-2 md:flex">
          {navigationConfig.primary.map((item) => (
            <li key={item.href}>
              <NavigationLink item={item} pathname={pathname} />
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle className="relative border border-border bg-elevated text-muted-foreground shadow-2xs hover:bg-surface hover:text-foreground" />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle className="relative border border-border bg-elevated text-muted-foreground shadow-2xs hover:bg-surface hover:text-foreground" />

          <Sheet>
            <SheetTrigger asChild>
              <Button
                type="button"
                variant="ghost"
                size="icon-sm"
                className="border border-border bg-elevated text-foreground shadow-2xs hover:bg-surface"
                aria-label="Open navigation menu"
              >
                <MenuIcon aria-hidden="true" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-full max-w-[var(--layout-copy)] border-border bg-background/96 p-0 supports-backdrop-filter:backdrop-blur-2xl"
            >
              <SheetHeader className="border-b border-border px-6 py-5">
                <SheetTitle>{navigationConfig.mobile.title}</SheetTitle>
                <SheetDescription>
                  {navigationConfig.mobile.description}
                </SheetDescription>
              </SheetHeader>

              <div className="flex flex-1 flex-col gap-8 px-6 py-6">
                <nav aria-label="Mobile primary" className="flex flex-col gap-2">
                  {navigationConfig.primary.map((item) => (
                    <SheetClose asChild key={item.href}>
                      <NavigationLink item={item} pathname={pathname} mobile />
                    </SheetClose>
                  ))}
                </nav>

                <div className="mt-auto rounded-3xl border border-border bg-surface p-4 shadow-xs">
                  <div className="flex items-center justify-between gap-4">
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-foreground">Theme</p>
                      <p className="text-xs text-muted-foreground">
                        Switch between dark and light mode.
                      </p>
                    </div>

                    <ThemeToggle className="relative border border-border bg-elevated text-muted-foreground shadow-2xs hover:bg-background hover:text-foreground" />
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </div>
  );
}

import { siteIdentity } from "@/lib/site";

export type NavigationItem = {
  href: string;
  label: string;
};

export const navigationConfig = {
  homeHref: "/",
  branding: {
    name: siteIdentity.name,
    tagline: siteIdentity.navigationTagline,
    initials: siteIdentity.initials,
  },
  primary: [
    {
      href: "/",
      label: "Home",
    },
  ] satisfies readonly NavigationItem[],
  mobile: {
    title: "Navigation",
    description: "Browse the portfolio sections and site controls.",
  },
} as const;

export function isNavigationItemActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

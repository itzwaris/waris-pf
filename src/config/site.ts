import { USER } from "@/features/portfolio/data/user";
import type { NavItem } from "@/types/nav";

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.APP_URL || "https://waris.wtf",
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
};

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
};

export const MAIN_NAV: NavItem[] = [
  {
    title: "Portfolio",
    href: "/",
  },
  // {
  //   title: "Sponsors",
  //   href: "/sponsors",
  // },
];

export const GITHUB_USERNAME = "itzwaris";
export const SOURCE_CODE_GITHUB_REPO = "itzwaris/portfolio"; // Assuming portfolio repo, or just linking to profile? User said "everywhere github acc used use this acc https://github.com/notwaris"
export const SOURCE_CODE_GITHUB_URL = "https://github.com/itzwaris";

export const SPONSORSHIP_URL = "https://github.com/sponsors/itzwaris";

export const UTM_PARAMS = {
  utm_source: "waris.wtf",
  utm_medium: "referral",
  utm_campaign: "portfolio",
};

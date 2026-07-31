import {
  deliverooCaseStudySlug,
  featuredProjectContent,
  ndialCaseStudySlug,
  projectsContent,
  type ContentLink,
} from "@/lib/portfolio-content";
import { projectCaseStudyGalleryVisuals, type ProjectVisualAsset } from "@/lib/project-visuals";

export type ProjectCaseStudySlug =
  | typeof deliverooCaseStudySlug
  | typeof ndialCaseStudySlug;

export type ProjectCaseStudySection = {
  title: string;
  paragraphs?: readonly string[];
  bullets?: readonly string[];
  note?: string;
};

export type ProjectCaseStudyGalleryItem = {
  title: string;
  description: string;
  image?: ProjectVisualAsset;
  note?: string;
};

export type ProjectCaseStudyGallery = {
  title: string;
  introduction?: string;
  items: readonly ProjectCaseStudyGalleryItem[];
  note?: string;
};

export type ProjectCaseStudyLinks = {
  title: string;
  items: readonly ContentLink[];
  note?: string;
};

export type ProjectCaseStudyContent = {
  slug: ProjectCaseStudySlug;
  heroLabel: string;
  project: {
    name: string;
    summary: string;
    highlights: readonly string[];
    stack: readonly string[];
  };
  overview: ProjectCaseStudySection;
  problemStatement: ProjectCaseStudySection;
  solution: ProjectCaseStudySection;
  architecture: ProjectCaseStudySection;
  keyFeatures: ProjectCaseStudySection;
  engineeringChallenges: ProjectCaseStudySection;
  lessonsLearned: ProjectCaseStudySection;
  screenshots: ProjectCaseStudyGallery;
  timeline?: ProjectCaseStudySection;
  links: ProjectCaseStudyLinks;
};

function requireProjectEntry(projectName: string) {
  const entry = projectsContent.entries.find((project) => project.name === projectName);

  if (!entry) {
    throw new Error(`Missing project entry for case study: ${projectName}`);
  }

  return entry;
}

const deliverooCaseStudy = {
  slug: deliverooCaseStudySlug,
  heroLabel: "Project Case Study",
  project: {
    name: featuredProjectContent.name,
    summary: featuredProjectContent.summary,
    highlights: featuredProjectContent.outcomes,
    stack: [
      "Frontend: React.js",
      "Backend: Node.js, Express.js",
      "Data & Services: Supabase",
      "Integration: REST APIs, OAuth 2.0",
      "Tooling: Git",
    ],
  },
  overview: {
    title: "Project Overview",
    paragraphs: [
      "This project was built as a full-stack platform integrating restaurant operations with Deliveroo services.",
      "The work included responsive dashboards, Deliveroo API integrations, OAuth 2.0, webhook processing, RESTful APIs for order synchronization and real-time operational workflows, and secure backend services with Supabase.",
    ],
  },
  problemStatement: {
    title: "Problem Statement",
  },
  solution: {
    title: "Solution",
    paragraphs: [
      "The solution centered on a full-stack platform that connected restaurant operations with Deliveroo services through responsive dashboards and backend integrations.",
    ],
    bullets: [
      "Built responsive dashboards and integrated Deliveroo APIs with OAuth 2.0 and webhook processing.",
      "Developed RESTful APIs for order synchronization and real-time operational workflows.",
      "Implemented secure backend services with Supabase and optimized application performance.",
    ],
  },
  architecture: {
    title: "Architecture",
    paragraphs: [
      "The verified repository content describes the project as a full-stack platform organized across a React.js frontend, a Node.js and Express.js backend, Deliveroo integrations, and Supabase-backed services.",
    ],
    bullets: [
      "React.js frontend.",
      "Node.js and Express.js backend.",
      "Deliveroo integrations.",
      "Supabase-backed services.",
      "RESTful APIs for order synchronization and real-time operational workflows.",
    ],
  },
  keyFeatures: {
    title: "Key Features",
    bullets: [
      "Responsive dashboards for restaurant operations.",
      "Deliveroo API integration.",
      "OAuth 2.0 and webhook processing.",
      "Order synchronization workflows.",
      "Real-time operational workflows.",
      "Secure backend services with Supabase.",
    ],
  },
  engineeringChallenges: {
    title: "Engineering Challenges",
  },
  lessonsLearned: {
    title: "Lessons Learned",
  },
  screenshots: {
    title: "Screenshots / Gallery",
    introduction: "Simplified mock product visuals based on the verified project scope, using dummy operational data only.",
    items: projectCaseStudyGalleryVisuals[deliverooCaseStudySlug],
  },
  links: {
    title: "Links",
    items: [],
  },
} satisfies ProjectCaseStudyContent;

const ndialProjectEntry = requireProjectEntry("NDial");

const ndialCaseStudy = {
  slug: ndialCaseStudySlug,
  heroLabel: "Project Case Study",
  project: {
    name: ndialProjectEntry.name,
    summary: ndialProjectEntry.summary,
    highlights: ndialProjectEntry.highlights,
    stack: ndialProjectEntry.stack,
  },
  overview: {
    title: "Project Overview",
    paragraphs: [
      "NDial is presented here as an enterprise SaaS project in contact center automation.",
      "The verified scope covers campaign management, call monitoring, reporting dashboards, administrative modules, Dialer Agent Panel interfaces, and REST API-connected operational workflows.",
    ],
  },
  problemStatement: {
    title: "Problem Statement",
  },
  solution: {
    title: "Solution",
    paragraphs: [
      "The work focused on building the NDial frontend for a contact center automation product with reusable UI components and REST API-connected modules.",
    ],
    bullets: [
      "Built the NDial frontend for campaign management, call monitoring, reporting dashboards, and administrative modules.",
      "Implemented Dialer Agent Panel interfaces for managing calls, customer information, call dispositions, and real-time campaign activities.",
      "Connected frontend modules to REST APIs for authentication, user management, campaigns, reports, and real-time operational data.",
    ],
  },
  architecture: {
    title: "Architecture",
  },
  keyFeatures: {
    title: "Key Features",
    bullets: [
      "Campaign management.",
      "Call monitoring.",
      "Reporting dashboards.",
      "Administrative modules.",
      "Dialer Agent Panel interfaces.",
      "REST API-connected authentication, user management, campaigns, reports, and operational data workflows.",
    ],
  },
  engineeringChallenges: {
    title: "Engineering Challenges",
  },
  lessonsLearned: {
    title: "Lessons Learned",
  },
  screenshots: {
    title: "Screenshots / Gallery",
    introduction: "Simplified mock enterprise screens showing the verified feature areas with anonymized dummy data.",
    items: projectCaseStudyGalleryVisuals[ndialCaseStudySlug],
  },
  links: {
    title: "Links",
    items: [],
  },
} satisfies ProjectCaseStudyContent;

const projectCaseStudies = {
  [deliverooCaseStudySlug]: deliverooCaseStudy,
  [ndialCaseStudySlug]: ndialCaseStudy,
} satisfies Record<ProjectCaseStudySlug, ProjectCaseStudyContent>;

export function getAllProjectCaseStudySlugs() {
  return Object.keys(projectCaseStudies) as ProjectCaseStudySlug[];
}

export function getProjectCaseStudyBySlug(slug: string) {
  return projectCaseStudies[slug as ProjectCaseStudySlug] ?? null;
}

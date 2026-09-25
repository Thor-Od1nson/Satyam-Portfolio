import { siteContactDefinitions } from "@/lib/site";

export type ContentAvailability = "available" | "coming-soon";

export const deliverooCaseStudySlug = "deliveroo-restaurant-integration-platform";
export const ndialCaseStudySlug = "ndial";

export type ContentLink = {
  label: string;
  href: string | null;
  availability: ContentAvailability;
  external?: boolean;
  note?: string;
};

export type AboutMetric = {
  value: string;
  label: string;
};

export type AboutContent = {
  label: string;
  heading: string;
  paragraphs: readonly string[];
  metrics: readonly AboutMetric[];
};

export type ExperienceEntry = {
  company: string;
  role: string;
  period: string;
  location?: string;
  overview: string;
  highlights: readonly string[];
  stack: readonly string[];
};

export type ExperienceContent = {
  label: string;
  heading: string;
  introduction: string;
  entries: readonly ExperienceEntry[];
};

export type TechnologyGroup = {
  title: string;
  technologies: readonly string[];
};

export type SkillsContent = {
  label: string;
  heading: string;
  introduction: string;
  groups: readonly TechnologyGroup[];
};

export type FeaturedProjectContent = {
  label: string;
  name: string;
  summary: string;
  outcomes: readonly string[];
  stack: readonly string[];
  previewFrames: {
    productSurface: string;
    architecture: string;
  };
  links: readonly ContentLink[];
};

export type ProjectEntry = {
  name: string;
  category: string;
  status?: "production" | "active" | "learning" | "archived" | "under-development";
  summary: string;
  highlights: readonly string[];
  stack: readonly string[];
  links: readonly ContentLink[];
};

export type ProjectsContent = {
  label: string;
  heading: string;
  introduction: string;
  entries: readonly ProjectEntry[];
};

export type ProfessionalProjectEntry = {
  name: string;
  status?: string;
  description: string;
  technologies: readonly string[];
};

export type ProfessionalProjectsContent = {
  label: string;
  heading: string;
  introduction: string;
  entries: readonly ProfessionalProjectEntry[];
};

export type EngineeringPrinciple = {
  title: string;
  description: string;
};

export type EngineeringPrinciplesContent = {
  label: string;
  heading: string;
  introduction: string;
  items: readonly EngineeringPrinciple[];
};

export type ContactMethod = {
  label: string;
  value: string | null;
  href: string | null;
  note?: string;
};

export type ContactContent = {
  label: string;
  heading: string;
  introduction: string;
  availability: string;
  closingLine: string;
  methods: readonly ContactMethod[];
};

export const aboutContent = {
  label: "About",
  heading: "Credibility, built through production delivery.",
  paragraphs: [
    "I'm a Full-Stack Developer building enterprise software, production-ready backend systems, and scalable web applications.",
    "My experience spans CRM platforms, collections systems, AI-powered contact centers, and distributed backend architecture.",
  ],
  metrics: [
    {
      value: "1+",
      label: "Years Experience",
    },
    {
      value: "4",
      label: "Enterprise Products",
    },
    {
      value: "170+",
      label: "Integration Tests",
    },
    {
      value: "6+",
      label: "Production Projects",
    },
  ],
} satisfies AboutContent;

export const experienceContent = {
  label: "Experience",
  heading: "Building enterprise software across products, platforms, and teams.",
  introduction: "A compact index of verified roles, delivery contexts, and core technologies.",
  entries: [
    {
      company: "NextBit Digitech Pvt. Ltd.",
      role: "Software Developer",
      period: "Feb, 2026 - Present",
      overview:
        "Leading frontend delivery across NDial, NCollect, and a License Management System, translating contact center and operations workflows into production SaaS interfaces.",
      highlights: [
        "Built NDial and NCollect product surfaces for campaign management, call monitoring, collections workflows, reporting dashboards, and administrative modules.",
        "Implemented role-based access control, protected routes, and REST integrations across authentication, user management, campaigns, reports, collections, and operational data.",
        "Built license management workflows and improved maintainability through reusable components, code splitting, lazy loading, and cross-functional delivery.",
      ],
      stack: [
        "React.js",
        "Next.js",
        "JavaScript (ES6+)",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "REST APIs",
        "Git",
      ],
    },
    {
      company: "Herbal Energy",
      role: "Frontend Developer",
      period: "Oct, 2025 - Jan, 2026",
      overview:
        "Built a CRM product surface for customer, lead, sales, and employee workflows with a focus on responsive, data-heavy interfaces.",
      highlights: [
        "Built dashboards, tables, forms, filters, and data visualization components for customers, leads, sales activities, and employee workflows.",
        "Connected frontend modules to REST APIs and implemented authentication, protected routes, and role-based UI rendering.",
        "Improved consistency and performance through reusable components, efficient rendering, and close collaboration with backend developers and stakeholders.",
      ],
      stack: [
        "React.js",
        "Next.js",
        "JavaScript (ES6+)",
        "HTML5",
        "CSS3",
        "Bootstrap",
        "Tailwind CSS",
        "REST APIs",
        "Git",
      ],
    },
    {
      company: "SG Webapp Techniques Pvt. Ltd.",
      role: "Frontend Developer",
      period: "Aug, 2024 - Sep, 2025",
      overview:
        "Delivered responsive, API-driven web interfaces and reusable React components for client-facing product experiences.",
      highlights: [
        "Converted UI/UX designs into reusable React components and responsive layouts for desktop, tablet, and mobile devices.",
        "Integrated REST APIs to surface dynamic content, service information, and enquiry data across product interfaces.",
        "Improved performance through component optimization, lazy loading, efficient state management, and collaborative delivery within Agile cycles.",
      ],
      stack: [
        "React.js",
        "JavaScript (ES6+)",
        "HTML5",
        "CSS3",
        "Bootstrap",
        "REST APIs",
        "Git",
      ],
    },
  ],
} satisfies ExperienceContent;

export const skillsContent = {
  label: "Technology Index",
  heading: "Technologies",
  introduction:
    "Tools and technologies I use to build modern, scalable software.",
  groups: [
    {
      title: "Backend",
      technologies: [
        "Java",
        "Spring Boot",
        "Node.js",
        "Express",
      ],
    },
    {
      title: "Frontend",
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Bootstrap",
        "Redux",
        "Vite",
      ],
    },
    {
      title: "Data & Infrastructure",
      technologies: [
        "PostgreSQL",
        "MySQL",
        "Redis",
        "Prisma",
        "Supabase",
      ],
    },
    {
      title: "Engineering",
      technologies: [
        "REST APIs",
        "Microservices",
        "OAuth 2.0",
        "BullMQ",
        "JWT Authentication",
        "Git",
        "GitHub",
        "Maven",
      ],
    },
  ],
} satisfies SkillsContent;

export const featuredProjectContent = {
  label: "Featured Project",
  name: "Deliveroo Restaurant Integration Platform",
  summary:
    "Built a full-stack platform that integrated restaurant operations with Deliveroo through responsive dashboards, Deliveroo API integrations, OAuth 2.0, webhook processing, and secure backend services.",
  outcomes: [
    "Built responsive dashboards and integrated Deliveroo APIs with OAuth 2.0 and webhook processing.",
    "Developed RESTful APIs for order synchronization and real-time operational workflows.",
    "Implemented secure backend services with Supabase and optimized application performance.",
    "Organized the platform across a React.js frontend, Node.js and Express.js backend, Deliveroo integrations, and Supabase-backed services.",
  ],
  stack: ["React.js", "Node.js", "Express.js", "Supabase", "REST APIs", "OAuth 2.0", "Git"],
  previewFrames: {
    productSurface: "Restaurant Operations Dashboard",
    architecture: "Integration Architecture",
  },
  links: [
    {
      label: "View Case Study",
      href: `/projects/${deliverooCaseStudySlug}`,
      availability: "available",
    },
  ],
} satisfies FeaturedProjectContent;

export const projectsContent = {
  label: "Additional Projects",
  heading: "Product work across automation, SaaS, and operational systems.",
  introduction:
    "A curated mix of browser automation, enterprise workflows, and operational software presented as compact product showcases.",
  entries: [
    {
      name: "IRCTC Tatkal Assistant",
      category: "Chrome extension",
      summary:
        "Built a Chrome extension that automates the IRCTC Tatkal booking process with intelligent form autofill and a React.js interface for passenger profiles, journey preferences, and application settings.",
      highlights: [
        "Built a React.js interface for managing passenger profiles, journey preferences, and application settings.",
        "Implemented page detection, validation logic, and secure local storage with Chrome Extension APIs.",
        "Optimized automation workflows for reliable performance on dynamic IRCTC webpages.",
      ],
      stack: ["React.js", "TypeScript", "Vite", "Chrome Extension APIs", "HTML5", "CSS3", "JavaScript", "Git"],
      links: [],
    },
    {
      name: "Salon Management System",
      category: "Microservices system",
      summary:
        "Built a microservices-based salon management system with a React.js frontend and Spring Boot backend for appointment scheduling, customer management, employee management, and billing.",
      highlights: [
        "Built REST APIs for appointment scheduling, customer management, employee management, and billing.",
        "Implemented role-based authentication and integrated PostgreSQL.",
        "Built responsive user interfaces and followed a modular architecture with Git-based version control.",
      ],
      stack: ["Java", "Spring Boot", "PostgreSQL", "React.js", "REST APIs", "Maven", "Git"],
      links: [],
    },
    {
      name: "NDial",
      category: "Enterprise SaaS",
      summary:
        "Built the NDial frontend for campaign management, call monitoring, reporting dashboards, and administrative modules in a contact center automation product.",
      highlights: [
        "Implemented Dialer Agent Panel interfaces for managing calls, customer information, call dispositions, and real-time campaign activities.",
        "Connected frontend modules to REST APIs for authentication, user management, campaigns, reports, and real-time operational data.",
        "Built reusable and scalable UI components for consistency across enterprise products.",
       ],
       stack: ["React.js", "Next.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "REST APIs", "Git"],
      links: [
        {
          label: "View Case Study",
          href: `/projects/${ndialCaseStudySlug}`,
          availability: "available",
        },
      ],
    },
    {
      name: "License Management System",
      category: "SaaS operations",
      summary:
        "Built a License Management System for customer subscriptions, license allocation, activation, expiry tracking, renewals, and tenant administration.",
      highlights: [
        "Implemented role-based access control and protected routes for Super Admin, Admin, Team Leaders, and Agents.",
        "Connected frontend modules to REST APIs for authentication, user management, and operational workflows.",
        "Improved application performance through code splitting, lazy loading, and component reusability.",
      ],
      stack: ["React.js", "Next.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "REST APIs", "Git"],
      links: [],
    },
    {
      name: "CRM",
      category: "CRM dashboard",
      summary:
        "Built a responsive CRM dashboard for managing customers, leads, sales activities, and employee workflows.",
      highlights: [
        "Built reusable UI components to improve scalability and maintain a consistent user experience.",
        "Connected frontend modules to REST APIs for real-time data retrieval and updates.",
        "Implemented authentication flows, role-based UI rendering, protected routes, and interactive dashboards, tables, forms, filters, and data visualization components.",
      ],
      stack: [
        "React.js",
        "Next.js",
        "JavaScript (ES6+)",
        "HTML5",
        "CSS3",
        "Bootstrap",
        "Tailwind CSS",
        "REST APIs",
        "Git",
      ],
      links: [],
    },
  ],
} satisfies ProjectsContent;

export const professionalProjectsContent = {
  label: "Product Index",
  heading: "Enterprise Products",
  introduction:
    "Enterprise platforms built for real-world business operations.",
  entries: [
    {
      name: "NDial",
      description: "AI Contact Center Platform",
      technologies: ["React", "Next.js", "REST APIs"],
    },
    {
      name: "NCollect",
      status: "Under Development",
      description: "Enterprise Collections Platform",
      technologies: ["React", "Redux", "Tailwind"],
    },
    {
      name: "Enterprise CRM",
      description: "Customer Relationship Platform",
      technologies: ["React", "Next.js", "Bootstrap"],
    },
    {
      name: "License Management System",
      description: "Operational License Platform",
      technologies: ["React", "Next.js", "REST APIs"],
    },
  ],
} satisfies ProfessionalProjectsContent;

export const featuredProjectsContent = {
  label: "Public Work",
  heading: "Featured Projects",
  introduction:
    "A focused selection of public projects that show product thinking, systems design, and full-stack execution.",
  entries: [
    {
      name: "IRCTC Tatkal Assistant",
      category: "Chrome extension",
      summary:
        "Chrome extension for automating IRCTC booking workflows with passenger and journey autofill.",
      highlights: [
        "Built a React.js interface for managing passenger profiles, journey preferences, and application settings.",
        "Implemented page detection, validation logic, and secure local storage with Chrome Extension APIs.",
        "Optimized automation workflows for reliable performance on dynamic IRCTC webpages.",
      ],
      stack: ["React", "TypeScript", "Vite"],
      links: [],
    },
    {
      name: "Enterprise Social Media Publishing Platform",
      category: "Backend engineering project",
      status: "under-development",
      summary:
        "Production-ready backend for multi-platform social publishing across LinkedIn, Facebook, and Instagram.",
      highlights: [
        "Designed a modular backend architecture for multi-platform publishing and scheduled content delivery.",
        "Built idempotent publishing workflows with BullMQ-backed background job orchestration and distributed locking.",
        "Implemented fault-tolerant processing, retry recovery, and race-condition prevention across publish pipelines.",
        "Integrated OAuth 2.0 platform connections and secure API flows for LinkedIn, Facebook, and Instagram publishing.",
        "Added Redis-backed authentication protections, JWT-based access control, and SSRF protection for media processing.",
        "Prepared the platform for production hardening, CI/CD readiness, and operational visibility.",
        "Built automated test coverage with 170+ integration tests for publishing, security, and reliability-critical flows.",
      ],
      stack: [
        "Node.js",
        "TypeScript",
        "Express",
        "PostgreSQL",
        "Prisma",
        "Redis",
        "BullMQ",
      ],
      links: [],
    },
    {
      name: "Salon Management System",
      category: "Microservices system",
      summary:
        "Microservices-based platform for appointments, customers, staff, and billing.",
      highlights: [
        "Built REST APIs for appointment scheduling, customer management, employee management, and billing.",
        "Implemented role-based authentication and integrated PostgreSQL.",
        "Built responsive user interfaces and followed a modular architecture with Git-based version control.",
      ],
      stack: ["Java", "Spring Boot", "PostgreSQL"],
      links: [],
    },
  ],
} satisfies ProjectsContent;

export const engineeringPrinciplesContent = {
  label: "Engineering Principles",
  heading: "Working rules I use when implementation details start shaping the product.",
  introduction:
    "A minimal set of principles that keeps product work grounded in delivery reality.",
  items: [
    {
      title: "Name the boundary before building the feature",
      description:
        "Clear service, component, and data boundaries reduce rework later and make ownership easier to reason about.",
    },
    {
      title: "Prefer explicit data flow",
      description:
        "Inputs, state changes, and side effects should be easy to trace without reading the whole codebase in your head.",
    },
    {
      title: "Build the simplest version that stays extensible",
      description:
        "Avoid overdesign, but do not trap the next iteration behind shortcuts that guarantee a rewrite.",
    },
    {
      title: "Treat failure paths as part of the feature",
      description:
        "Retries, loading states, empty states, and degraded behavior are product work, not cleanup after the happy path ships.",
    },
    {
      title: "Leave the tradeoff readable",
      description:
        "A short note, an honest name, or a small comment around a constraint is better than forcing the next person to rediscover it.",
    },
  ],
} satisfies EngineeringPrinciplesContent;

export const contactContent = {
  label: "Contact",
  heading: "Contact",
  introduction:
    "Ready to get started on your project? Contact me now for a free consultation.",
  availability: "New Delhi, India",
  closingLine: "Available for opportunities.",
  methods: [
    siteContactDefinitions.email,
    siteContactDefinitions.linkedin,
  ],
} satisfies ContactContent;

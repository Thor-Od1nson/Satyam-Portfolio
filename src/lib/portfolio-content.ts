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

export type AboutSupportingCard = {
  title: string;
  layout: "grid" | "list";
  items: readonly string[];
};

export type AboutContent = {
  label: string;
  heading: string;
  paragraphs: readonly string[];
  supportingCards: readonly AboutSupportingCard[];
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

export type SkillCategory = {
  title: string;
  description: string;
  skills: readonly string[];
};

export type SkillsContent = {
  label: string;
  heading: string;
  introduction: string;
  categories: readonly SkillCategory[];
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
  status?: "production" | "active" | "learning" | "archived";
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
  heading: "Full-stack developer focused on enterprise web applications, secure services, and API-driven products.",
  paragraphs: [
    "I build scalable, enterprise-grade web applications across the frontend and backend with React.js, JavaScript, TypeScript, Node.js, Express.js, Spring Boot, Java, Python, SQL, and RESTful APIs.",
    "My work covers responsive UI, secure backend services, third-party API integration, scalable application architecture, authentication and authorization, microservices, and performance optimization across SaaS and CRM products.",
  ],
  supportingCards: [
    {
      title: "Experience Areas",
      layout: "grid",
      items: [
        "Enterprise SaaS",
        "Contact Center Platforms",
        "Banking CRM",
        "Loan Recovery Systems",
        "License Management Systems",
        "Custom CRM Applications",
      ],
    },
    {
      title: "Core Work",
      layout: "list",
      items: [
        "Responsive UI",
        "Secure backend services",
        "API integration",
        "Authentication and authorization",
        "Microservices architecture",
        "Performance optimization",
      ],
    },
  ],
} satisfies AboutContent;

export const experienceContent = {
  label: "Experience",
  heading: "Experience across enterprise SaaS, CRM, and frontend-led product delivery.",
  introduction:
    "Each role below follows the resume and keeps the same projects, responsibilities, and verified technology stacks.",
  entries: [
    {
      company: "NextBit Digitech Pvt. Ltd.",
      role: "Software Developer",
      period: "Feb, 2026 - Present",
      overview:
        "Building enterprise-grade SaaS applications for contact center automation, payment collections, and license management across NDial, NCollect, and the License Management System.",
      highlights: [
        "Built and maintained responsive web applications with React.js, JavaScript, HTML5, CSS3, and Tailwind CSS.",
        "Created reusable UI components that kept multiple enterprise products consistent.",
        "Built the NDial frontend for campaign management, call monitoring, reporting dashboards, and administrative modules.",
        "Implemented Dialer Agent Panel interfaces for call handling, customer information, call dispositions, and real-time campaign activity.",
        "Connected frontend modules to REST APIs for authentication, user management, campaigns, reports, collections, and real-time operational data.",
        "Contributed to NCollect by building dashboards for payment collections, customer management, payment tracking, and reporting.",
        "Built a License Management System for customer subscriptions, license allocation, activation, expiry tracking, renewals, and tenant administration.",
        "Implemented role-based access control and protected routes for Super Admin, Admin, Team Leaders, and Agents.",
        "Improved application performance through code splitting, lazy loading, and component reusability.",
        "Worked with backend developers, UI/UX designers, and product stakeholders in an Agile development environment.",
        "Used Git and participated in code reviews, testing, debugging, and production deployments.",
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
        "Built a responsive CRM dashboard for customers, leads, sales activities, and employee workflows.",
      highlights: [
        "Built a responsive React.js CRM dashboard for customers, leads, sales activities, and employee workflows.",
        "Created reusable UI components to improve scalability and keep the experience consistent across the application.",
        "Connected frontend modules to REST APIs for real-time data retrieval and updates.",
        "Implemented authentication flows, role-based UI rendering, and protected routes for different user roles.",
        "Built dashboards, tables, forms, filters, and data visualization components for business insights.",
        "Improved responsiveness and performance through code optimization and efficient component rendering.",
        "Worked with backend developers and business stakeholders to implement user-centric CRM features.",
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
        "Built responsive, API-driven web interfaces with React.js, JavaScript, HTML5, CSS3, and Bootstrap.",
      highlights: [
        "Built responsive web interfaces with React.js, JavaScript, HTML5, CSS3, and Bootstrap.",
        "Converted UI/UX designs into reusable React components to improve consistency and maintainability.",
        "Integrated REST APIs to surface dynamic content, service information, and enquiry data.",
        "Implemented responsive layouts for desktop, tablet, and mobile devices.",
        "Improved application performance through component optimization, lazy loading, and efficient state management.",
        "Worked with designers and backend developers to deliver features within Agile development cycles.",
        "Used Git and participated in testing, debugging, and deployment activities.",
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
  label: "Skills",
  heading: "Skills taken directly from the resume's verified technology list.",
  introduction:
    "These categories follow the resume's skills section so the portfolio stays aligned with the public source of truth.",
  categories: [
    {
      title: "Programming Languages",
      description: "Languages listed in the resume skills section.",
      skills: ["Python", "Java", "JavaScript (ES6+)", "TypeScript", "SQL", "Rust"],
    },
    {
      title: "Frontend",
      description: "Frontend frameworks, styling tools, and interface skills from the resume.",
      skills: [
        "React.js",
        "React Native",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Bootstrap",
        "Responsive Web Design",
      ],
    },
    {
      title: "Backend",
      description: "Backend technologies and service patterns listed in the resume.",
      skills: ["Spring Boot", "Node.js", "Express.js", "Flask", "RESTful APIs", "JWT Authentication"],
    },
    {
      title: "State Management & Routing",
      description: "State and routing tools from the resume.",
      skills: ["Redux Toolkit", "Zustand", "React Router"],
    },
    {
      title: "API & Data Fetching",
      description: "API integration and data-fetching tools listed in the resume.",
      skills: ["Axios", "TanStack Query"],
    },
    {
      title: "Databases",
      description: "Databases used across the resume's projects and experience.",
      skills: ["PostgreSQL", "MySQL", "Supabase", "MongoDB"],
    },
    {
      title: "Tools & Technologies",
      description: "Tools and delivery technologies listed in the resume.",
      skills: ["Git", "GitHub", "Docker", "Postman", "Visual Studio Code", "Maven", "npm", "Yarn", "Vite"],
    },
    {
      title: "Concepts",
      description: "Engineering concepts explicitly listed in the resume.",
      skills: [
        "Responsive Web Design",
        "API Integration",
        "Microservices",
        "OAuth 2.0",
        "Webhooks",
        "JWT Authentication",
        "Role-Based Access Control (RBAC)",
        "CI/CD",
        "Agile Development",
      ],
    },
  ],
} satisfies SkillsContent;

export const featuredProjectContent = {
  label: "Selected Project",
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
  label: "More Projects",
  heading: "Additional projects mapped directly from the resume.",
  introduction:
    "Deliveroo leads the section. The remaining projects use the same verified descriptions from the resume without adding unverified details.",
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
      name: "NCollect",
      category: "Collections platform",
      summary:
        "Built dashboards in NCollect for payment collections, customer management, payment tracking, and reporting.",
      highlights: [
        "Connected frontend modules to REST APIs for collections, reports, and operational data.",
        "Built reusable UI components that kept multiple enterprise products consistent.",
        "Worked with backend developers, designers, and product stakeholders in an Agile environment.",
      ],
      stack: ["React.js", "Next.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "REST APIs", "Git"],
      links: [],
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

export const engineeringPrinciplesContent = {
  label: "Engineering Principles",
  heading: "Working rules I actually use when building software.",
  introduction:
    "Short principles that keep product work grounded in implementation reality.",
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
  heading: "Resume-verified contact details.",
  introduction:
    "The portfolio contact section is synchronized with the resume and includes only the contact information that appears there.",
  availability:
    "Use phone, email, or LinkedIn for professional contact. GitHub and public resume links are not displayed because they are not present in the resume.",
  closingLine: "Based in New Delhi.",
  methods: [
    siteContactDefinitions.phone,
    siteContactDefinitions.email,
    siteContactDefinitions.linkedin,
  ],
} satisfies ContactContent;

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

export type AboutPrinciple = {
  title: string;
  description: string;
};

export type AboutContent = {
  label: string;
  heading: string;
  summary: string;
  principles: readonly AboutPrinciple[];
  focusAreas: readonly string[];
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

export type EngineeringCapability = {
  title: string;
  description: string;
  technologies: readonly string[];
};

export type SkillsContent = {
  label: string;
  heading: string;
  introduction: string;
  capabilities: readonly EngineeringCapability[];
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

export type ProfessionalProjectEntry = {
  name: string;
  description: string;
  technologies: readonly string[];
  responsibilities: readonly string[];
  skills: readonly string[];
};

export type ProfessionalProjectsContent = {
  label: string;
  heading: string;
  introduction: string;
  notice: string;
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
  heading: "A concise engineering profile shaped by product systems, not isolated features.",
  summary:
    "I build enterprise-grade web applications across the frontend and backend, with experience in responsive UI, secure services, API integration, scalable application architecture, authentication, and performance optimization.",
  principles: [
    {
      title: "Full-stack ownership",
      description:
        "I work across React.js interfaces, backend services, and API-driven workflows instead of treating frontend and backend as separate handoffs.",
    },
    {
      title: "Enterprise product context",
      description:
        "Most of my work sits inside SaaS, contact center, CRM, collections, and license management products where roles, workflows, and operational clarity matter.",
    },
    {
      title: "Implementation that scales",
      description:
        "Reusable components, secure access control, service boundaries, and performance optimization are part of delivery from the start, not cleanup after launch.",
    },
  ],
  focusAreas: [
    "Enterprise SaaS",
    "Contact Center Platforms",
    "Banking CRM",
    "Loan Recovery Systems",
    "License Management Systems",
    "Custom CRM Applications",
  ],
} satisfies AboutContent;

export const experienceContent = {
  label: "Experience",
  heading: "A timeline of product work across enterprise SaaS, CRM, and operational software.",
  introduction:
    "The same verified roles and technologies, rewritten as a shorter engineering story instead of resume blocks.",
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
  label: "Engineering Capabilities",
  heading: "How I contribute across interface, backend, data, and system design.",
  introduction:
    "The same verified stack, grouped around the kind of engineering work it supports instead of resume-style keyword buckets.",
  capabilities: [
    {
      title: "Frontend",
      description:
        "Building performant, responsive interfaces with modern React tooling, reusable components, and predictable client-side state.",
      technologies: [
        "React.js",
        "Next.js",
        "React Native",
        "JavaScript (ES6+)",
        "TypeScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Bootstrap",
        "Redux Toolkit",
        "Zustand",
        "React Router",
        "Axios",
        "TanStack Query",
      ],
    },
    {
      title: "Backend",
      description:
        "Designing APIs, authentication flows, business logic, and service layers for operational product workflows.",
      technologies: [
        "Spring Boot",
        "Node.js",
        "Express.js",
        "Flask",
        "Java",
        "Python",
      ],
    },
    {
      title: "Data",
      description:
        "Working with transactional systems, application data models, operational reporting, and persistence across product environments.",
      technologies: ["PostgreSQL", "MySQL", "MongoDB", "Supabase", "SQL"],
    },
    {
      title: "Infrastructure",
      description:
        "Supporting delivery through version control, local tooling, build systems, debugging workflows, and deployment-ready development habits.",
      technologies: ["Docker", "Git", "GitHub", "Postman", "Maven", "npm", "Yarn", "Vite"],
    },
    {
      title: "Engineering",
      description:
        "Applying architectural patterns and engineering practices that keep API-driven product systems maintainable as they grow.",
      technologies: [
        "Responsive Web Design",
        "API Integration",
        "RESTful APIs",
        "Microservices",
        "OAuth 2.0",
        "JWT Authentication",
        "Role-Based Access Control (RBAC)",
        "CI/CD",
        "Agile Development",
        "Rust",
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

export const professionalProjectsContent = {
  label: "Enterprise Work",
  heading: "Professional Experience",
  introduction:
    "Selected production systems from company and client environments, presented around business context, responsibilities, and engineering capability rather than confidential implementation details.",
  notice:
    "Project visuals, source code, production URLs, and implementation details cannot be shared publicly due to confidentiality agreements.",
  entries: [
    {
      name: "Enterprise CRM Platform",
      description:
        "Delivered a production CRM platform for customer, lead, sales, and employee workflows, helping internal teams operate from a single data-driven product surface.",
      technologies: ["React.js", "Next.js", "Tailwind CSS", "Bootstrap", "REST APIs", "Authentication"],
      responsibilities: [
        "Built dashboards, tables, forms, filters, and reporting-oriented interfaces for daily business workflows.",
        "Integrated secure frontend modules with backend APIs for customers, leads, sales activity, and employee operations.",
        "Maintained reusable UI patterns and collaborated with backend developers and stakeholders on production delivery.",
      ],
      skills: ["Enterprise UI systems", "Role-aware workflows", "Data-heavy interfaces", "API integration"],
    },
    {
      name: "Payment Gateway",
      description:
        "Built internal payment and collections workflows for repayment tracking, account status visibility, reporting, and operator productivity across sensitive transaction processes.",
      technologies: ["React.js", "Next.js", "Tailwind CSS", "REST APIs", "Reporting", "Git"],
      responsibilities: [
        "Developed payment tracking dashboards, account queues, and operational reporting modules.",
        "Connected frontend workflows to collections and payment APIs for synchronized status updates.",
        "Structured maintainable components for business-critical interfaces used by operations teams.",
      ],
      skills: ["Operational dashboards", "Transaction workflows", "Secure data handling", "Workflow optimization"],
    },
    {
      name: "Internal Operations Platform",
      description:
        "Delivered internal operations software for campaign administration, access control, licensing workflows, and multi-role team coordination in production SaaS environments.",
      technologies: ["React.js", "Next.js", "Tailwind CSS", "REST APIs", "RBAC", "Git"],
      responsibilities: [
        "Built administrative modules, reporting surfaces, and configuration-heavy internal workflows.",
        "Implemented role-based access control, protected routes, and maintainable interface architecture.",
        "Supported ongoing product improvements with reusable components and performance-focused frontend delivery.",
      ],
      skills: ["RBAC", "Admin tooling", "Scalable component systems", "Performance optimization"],
    },
  ],
} satisfies ProfessionalProjectsContent;

export const featuredProjectsContent = {
  label: "Public Work",
  heading: "Featured Projects",
  introduction:
    "Independent projects that can be discussed with visuals, technical decisions, and implementation depth while still matching the same product-minded delivery approach.",
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
      name: "NCollect",
      category: "Collections workflow platform",
      summary:
        "Built dashboards in NCollect for payment collections, customer management, payment tracking, and reporting.",
      highlights: [
        "Connected frontend modules to REST APIs for collections, reports, and operational data.",
        "Built reusable UI components that kept multiple enterprise products consistent.",
        "Worked with backend developers, designers, and product stakeholders in an Agile environment.",
      ],
      stack: ["React.js", "Next.js", "JavaScript (ES6+)", "Tailwind CSS", "REST APIs", "Reporting", "Git"],
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
  heading: "Get in touch.",
  introduction:
    "I'm always open to discussing new opportunities, interesting projects, and collaborations.",
  availability: "New Delhi, India",
  closingLine: "Available for opportunities.",
  methods: [
    siteContactDefinitions.phone,
    siteContactDefinitions.email,
    siteContactDefinitions.linkedin,
  ],
} satisfies ContactContent;

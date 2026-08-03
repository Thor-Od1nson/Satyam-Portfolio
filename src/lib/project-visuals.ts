export type ProjectVisualAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type ProjectShowcaseVisual = {
  imageLabel: string;
  image: ProjectVisualAsset;
  artifact: {
    label: string;
    items: readonly string[];
  };
};

export const featuredProjectPreviewVisuals = {
  productSurface: {
    src: "/images/projects/deliveroo/dashboard-overview.svg",
    alt: "Mock restaurant operations dashboard showing order sync health, webhook success, and service status widgets with dummy data.",
    width: 1600,
    height: 1000,
  },
  architecture: {
    src: "/images/projects/deliveroo/integration-architecture.svg",
    alt: "Architecture diagram showing a restaurant operations UI, integration API, OAuth gateway, webhook processor, Supabase, and Deliveroo API connections.",
    width: 1600,
    height: 900,
  },
} satisfies Record<string, ProjectVisualAsset>;

export const projectCaseStudyGalleryVisuals = {
  "deliveroo-restaurant-integration-platform": [
    {
      title: "Restaurant Operations Dashboard",
      description:
        "Simplified mock dashboard based on the verified project scope, showing order sync health, webhook delivery status, and operational summaries with dummy data.",
      image: {
        src: "/images/projects/deliveroo/dashboard-overview.svg",
        alt: "Mock restaurant operations dashboard with generic metrics cards, status panels, and delivery trend charts using dummy operational data.",
        width: 1600,
        height: 1000,
      },
    },
    {
      title: "Order Synchronization Workspace",
      description:
        "Mock orchestration view for order intake, validation, retry handling, and webhook acknowledgements with no customer or merchant data.",
      image: {
        src: "/images/projects/deliveroo/order-sync-workspace.svg",
        alt: "Mock order synchronization workspace showing event timelines, retry queues, and integration checkpoints with dummy labels.",
        width: 1600,
        height: 1000,
      },
    },
  ],
  ndial: [
    {
      title: "Campaign Command Center",
      description:
        "Mock NDial operations surface showing live campaign pacing, queue health, and reporting widgets with redacted sample metrics.",
      image: {
        src: "/images/projects/ndial/campaign-command-center.svg",
        alt: "Mock contact center dashboard showing campaign pacing, queue health, and performance charts with dummy data.",
        width: 1600,
        height: 1000,
      },
    },
    {
      title: "Agent Activity Workspace",
      description:
        "Mock agent panel showing queue state, call controls, disposition workflow, and activity details with all sensitive information removed.",
      image: {
        src: "/images/projects/ndial/agent-activity-workspace.svg",
        alt: "Mock agent activity workspace with queue cards, active call controls, and disposition panels using anonymized dummy data.",
        width: 1600,
        height: 1000,
      },
    },
  ],
} satisfies Record<string, readonly { title: string; description: string; image: ProjectVisualAsset }[]>;

export const projectShowcaseVisuals: Record<string, ProjectShowcaseVisual> = {
  "IRCTC Tatkal Assistant": {
    imageLabel: "Automation interface",
    image: {
      src: "/images/projects/irctc/tatkal-automation-surface.svg",
      alt: "Mock browser automation interface showing passenger profiles, route selection, readiness indicators, and booking controls with dummy data.",
      width: 1600,
      height: 1000,
    },
    artifact: {
      label: "Booking workflow",
      items: ["Profiles", "Journey", "Autofill", "Validation"],
    },
  },
  "Salon Management System": {
    imageLabel: "Operations board",
    image: {
      src: "/images/projects/salon/operations-board.svg",
      alt: "Mock salon operations dashboard showing appointments, customer activity, staff schedules, and billing widgets with dummy data.",
      width: 1600,
      height: 1000,
    },
    artifact: {
      label: "System modules",
      items: ["Bookings", "Customers", "Staff", "Billing"],
    },
  },
  NCollect: {
    imageLabel: "Collections dashboard",
    image: {
      src: "/images/projects/ncollect/collections-dashboard.svg",
      alt: "Mock collections dashboard showing payment tracking, account queues, promise status, and reporting panels with dummy data.",
      width: 1600,
      height: 1000,
    },
    artifact: {
      label: "Collections workflow",
      items: ["Accounts", "Promises", "Payments", "Reports"],
    },
  },
};

import { blogPosts } from "@/lib/blog-data"

export interface SearchItem {
  id: string
  title: string
  description: string
  category: "Navigation" | "Articles" | "Experience" | "Credentials"
  href: string
  keywords?: string[]
}

export const SEARCH_ITEMS: SearchItem[] = [
  // Navigation pages
  {
    id: "nav-home",
    title: "Home",
    description: "Welcome page, quick facts, philosophy, and overview of Martin Lužák",
    category: "Navigation",
    href: "/",
    keywords: ["overview", "main", "start", "cv", "portfolio"],
  },
  {
    id: "nav-about",
    title: "About Me & CV",
    description: "Full professional background, detailed career timeline, and core values",
    category: "Navigation",
    href: "/introduction",
    keywords: ["curriculum vitae", "experience", "bio", "education", "mentoring"],
  },
  {
    id: "nav-projects",
    title: "Projects & Side Work",
    description: "Enterprise milestones, side projects, video editing, and web applications",
    category: "Navigation",
    href: "/projects",
    keywords: ["portfolio", "work", "apps", "code", "side projects"],
  },
  {
    id: "nav-certs",
    title: "Certificates & Badges",
    description: "Verified global credentials in Agile, Project Management, and Negotiation",
    category: "Navigation",
    href: "/certificates",
    keywords: ["certifications", "atlassian", "jira", "ani", "diploma"],
  },
  {
    id: "nav-blog",
    title: "Blog & Technical Notes",
    description: "Articles on Next.js 16, LLMs, MCP protocol, and modern systems engineering",
    category: "Navigation",
    href: "/blog",
    keywords: ["writing", "articles", "tutorials", "posts"],
  },
  {
    id: "nav-workbench",
    title: "Workbench & Lab",
    description: "Interactive playgrounds, utilities, and experimental prototypes",
    category: "Navigation",
    href: "/workbench",
    keywords: ["lab", "tools", "playground", "experiments"],
  },

  // Career Milestones & Experience
  {
    id: "exp-marlink",
    title: "Marlink — Maritime Satellite & Starlink Support",
    description: "Tier 2 enterprise satellite networks, VSAT terminal debugging, and Starlink fleet operations",
    category: "Experience",
    href: "/projects#marlink",
    keywords: ["satellite", "starlink", "vsat", "maritime", "networking", "tier 2", "sla", "router"],
  },
  {
    id: "exp-dpd",
    title: "ForesServices / DPD — Logistics Monitoring & API Testing",
    description: "Zabbix system health monitoring across 4 European countries and Insomnia regression testing",
    category: "Experience",
    href: "/projects#dpd",
    keywords: ["dpd", "zabbix", "monitoring", "api", "insomnia", "logistics", "servers"],
  },
  {
    id: "exp-rcpc",
    title: "RCPC — Banking Terminals & Croatia Euro Transition",
    description: "High-availability payment terminals, Oracle SQL configurations, and Raiffeisen to KBC acquisition",
    category: "Experience",
    href: "/projects#rcpc",
    keywords: ["banking", "kbc", "raiffeisen", "oracle", "sql", "euro", "pos terminals"],
  },
  {
    id: "exp-diatyrnavia",
    title: "DIATYRNAVIA — Senior Friendly 2023 Award",
    description: "M365 administration, digital skills enablement for seniors, and national award-winning media production",
    category: "Experience",
    href: "/projects#diatyrnavia",
    keywords: ["senior friendly", "award", "m365", "ngo", "executive assistant", "video"],
  },

  // Verified Credentials
  {
    id: "cert-agile",
    title: "Atlassian Agile Project Management",
    description: "Professional Certificate covering Agile methodologies, sprint planning, and Jira architecture",
    category: "Credentials",
    href: "/certificates",
    keywords: ["atlassian", "jira", "agile", "scrum", "sprint", "kanban"],
  },
  {
    id: "cert-negotiation",
    title: "Negotiation Professional Certificate",
    description: "American Negotiation Institute (ANI) credential in de-escalation and strategic resolution",
    category: "Credentials",
    href: "/certificates",
    keywords: ["negotiation", "ani", "communication", "de-escalation", "conflict"],
  },

  // Blog posts dynamic integration
  ...blogPosts.map((post) => ({
    id: `blog-${post.slug}`,
    title: post.title,
    description: post.excerpt,
    category: "Articles" as const,
    href: `/blog/${post.slug}`,
    keywords: [...post.tags, post.category],
  })),
]

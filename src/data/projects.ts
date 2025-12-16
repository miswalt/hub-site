export type Project = {
  slug: string;
  title: string;
  description: string;
  href: string;
  platform: "Streamlit" | "Replit";
  tags?: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "urban-agent",
    title: "Urban Agent",
    description:
      "An urban planning assistant for exploration, engagement, and scenario thinking.",
    href: "https://urban-agent--mikeiswalt.replit.app/",
    platform: "Replit",
    featured: true,
    tags: ["planning", "AI", "engagement"],
  },
  {
    slug: "microtransit-insights",
    title: "Microtransit Insights",
    description:
      "A microtransit simulation and optimization tool using Nextmv with route visualization.",
    href: "https://microtransit-insights.streamlit.app/",
    platform: "Streamlit",
    tags: ["microtransit", "VRP", "Nextmv"],
  },
  {
    slug: "ntd-transit-ai",
    title: "NTD Transit AI",
    description:
      "Ask natural-language questions of National Transit Database performance data.",
    href: "https://ntd-transit-ai.streamlit.app/",
    platform: "Streamlit",
    tags: ["NTD", "analytics", "AI"],
  },
  {
    slug: "bikeshare-monitor",
    title: "Bikeshare Monitor",
    description:
      "Live monitoring and analytics for bikeshare systems with maps and system metrics.",
    href: "https://bikeshare-monitor.streamlit.app/",
    platform: "Streamlit",
    tags: ["bikeshare", "GBFS", "ops"],
  },
  {
    slug: "gtfs-validator",
    title: "GTFS Validator",
    description:
      "Validate GTFS feeds, explore routes, and inspect service coverage interactively.",
    href: "https://gtfs-validator.streamlit.app/",
    platform: "Streamlit",
    tags: ["GTFS", "QA", "maps"],
  },
];

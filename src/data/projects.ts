export type ProjectGroup = "microtransit" | "transit" | "planning" | "micromobility";
export type ProjectSpan = "half" | "full";
export type ProjectPlatform = "Streamlit" | "Replit" | "Vercel";

export type Project = {
  slug: string;
  title: string;
  description: string;
  href: string;
  platform: ProjectPlatform;
  tags?: string[];

  // Grouping + layout
  group: ProjectGroup;
  span?: ProjectSpan;
};

// NEW: featured hero config (keeps Project type clean)
export const featuredProject = {
  title: "Moda Tool",
  subtitle: "Microtransit simulation + dispatch sandbox",
  description:
    "A fast, interactive microtransit tool for exploring demand, service design, and routing workflows — built on Replit.",
  href: "https://moda-tool.com",
  platform: "Replit" as const,

  // Put these images in /public (recommended)
  iconSrc: "/moda-icon.png",
  screenshotSrc: "/moda-screenshot.png",
  screenshotAlt: "Moda Tool screenshot",
};

/**
 * NEW: Mobility Safari hero config (for the 2-up featured row)
 * Put these assets in:
 *  - /public/img/icons/mobility-safari-icon.webp
 *  - /public/img/screens/mobility-safari-app.webp
 */
export const mobilitySafariProject = {
  title: "Mobility Safari",
  subtitle: "Travel demand model + scenario analysis platform",
  description:
    "A planning-level modeling and scenario analysis tool for exploring travel demand patterns and visualizing network/market dynamics.",
  href: "https://mobility-safari.replit.app/",
  platform: "Replit" as const,

  iconSrc: "/mobility-safari-icon.png",
  screenshotSrc: "/mobility-safari-app.png",
  screenshotAlt: "Mobility Safari app screenshot",
};

export const projects: Project[] = [
  // ── Microtransit
  {
    slug: "microtransit-insights",
    title: "Microtransit Insights",
    description:
      "A microtransit simulation and optimization tool using Nextmv's solver and deployed to Streamlit. This was developed as an MVP for MODA-Tool.",
    href: "https://microtransit-insights.streamlit.app/",
    platform: "Streamlit",
    group: "microtransit",
    tags: ["microtransit", "VRP", "Nextmv"],
  },

  // (Optional) If you want Moda Tool to ALSO appear as a card, keep this.
  // If you want it ONLY as the hero, delete this block.
  {
    slug: "moda-tool",
    title: "Moda Tool",
    description:
      "An interactive microtransit tool for exploring demand, service design, and dispatch workflows — built on Replit.",
    href: "https://moda-tool.com",
    platform: "Replit",
    group: "microtransit",
    tags: ["microtransit", "routing", "dispatch"],
  },

  // ── Transit analytics
  {
    slug: "ntd-transit-ai",
    title: "NTD Transit AI",
    description:
      "Summary of National Transit Database performance data with an AI to ask natural language questions.",
    href: "https://ntd-transit-ai.streamlit.app/",
    platform: "Streamlit",
    group: "transit",
    tags: ["NTD", "analytics", "AI"],
  },
  {
    slug: "gtfs-validator",
    title: "GTFS Validator",
    description:
      "Validate GTFS feeds, explore routes, and inspect service coverage interactively.",
    href: "https://gtfs-validator.streamlit.app/",
    platform: "Streamlit",
    group: "transit",
    tags: ["GTFS", "QA", "maps"],
  },

  // ── Planning experiments
  {
    slug: "mobility-safari",
    title: "Mobility Safari",
    description: "Travel demand model and scenario analysis platform.",
    href: "https://YOUR-MOBILITY-SAFARI-URL",
    platform: "Replit",
    group: "planning",
    tags: ["travel demand", "scenario analysis", "maps"],
  },
  {
    slug: "urban-agent",
    title: "Urban Agent",
    description:
      "A demonstration AI-agent app for urban planners to process, track, and review building applications.",
    href: "https://urban-agent--mikeiswalt.replit.app/",
    platform: "Replit",
    group: "planning",
    tags: ["planning", "AI", "engagement"],
  },
  {
    slug: "urban-massing",
    title: "Urban Massing",
    description:
      "A quick urban massing study tool for sketching scenarios and visualizing building form.",
    href: "https://urban-massing.vercel.app/",
    platform: "Vercel",
    group: "planning",
    tags: ["planning", "3D", "scenarios"],
  },

  // ── Micromobility (single, full-width)
  {
    slug: "bikeshare-monitor",
    title: "Bikeshare Monitor",
    description:
      "Live monitoring and analytics for bikeshare systems with maps and system metrics.",
    href: "https://bikeshare-monitor.streamlit.app/",
    platform: "Streamlit",
    group: "micromobility",
    span: "full",
    tags: ["bikeshare", "GBFS", "ops"],
  },
];
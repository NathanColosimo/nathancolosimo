import { ExternalLink } from "lucide-react";
import type { ExperienceItemProps } from "./experience-item";
import { Button } from "./ui/button";

// Surface the structured data so the main page can render it alongside other sections
export const experienceItems: ExperienceItemProps[] = [
  {
    company: "Tenex.co",
    dateRange: "June - July 2025",
    description:
      "Built an MVP for an AI medical startup and onboarded their first major customer.\nBuilt a mobile app that launched as a top-30 app on the iOS App Store.",
    href: "https://www.tenex.co/",
    position: "Forward Deployed Engineer",
  },
  {
    company: "Sharpsenders.com",
    dateRange: "September 2024 - August 2025",
    description:
      "Launched AI SaaS to help cold outreach agencies manage campaigns and replies, securing early paying users from cold outbound communities, decreasing response times from 2+ days → 30 seconds.",
    href: "https://www.sharpsenders.com/",
    position: "Co-Founder, CTO",
  },
  {
    company: "Opskings.com",
    dateRange: "July 2023 - August 2024",
    description:
      "Helped agencies and other online businesses scale operations through implementing custom internal technology and automations.",
    href: "https://www.opskings.com/",
    position: "Software Developer",
  },
  {
    company: "Viralabs",
    dateRange: "September 2022 - May 2023",
    description:
      "Developed a system for short-form content distribution and brand growth on Instagram and TikTok for business owners that wanted to scale their online presence but lacked a structured content strategy.",
    position: "Co-founder; CTO",
  },
];

export default function ExperienceSection() {
  return (
    <Button asChild className="gap-2" size="sm" variant="outline">
      <a
        href="https://www.linkedin.com/in/nathancolosimo/"
        rel="noopener noreferrer"
        target="_blank"
      >
        {/* Provide a quick way to jump out to the full experience profile */}
        <span>Open Experience</span>
        <ExternalLink className="size-4" />
      </a>
    </Button>
  );
}

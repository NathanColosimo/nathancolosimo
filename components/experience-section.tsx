import { ExperienceItem } from "./experience-item";
import { ItemGroup, ItemSeparator } from "./ui/item";

export default function ExperienceSection() {
  return (
    <section className="flex flex-col gap-6">
      <h2 className="w-fit border-accent border-b-2 pb-2 font-heading font-semibold text-2xl">
        Experience
      </h2>
      <ItemGroup className="max-w-2xl">
        {/* Example experience items - replace with your actual data */}
        <ExperienceItem
          company="Tenex.co"
          dateRange="June - July 2025"
          description={`Built an MVP for an AI medical startup and onboarded their first major customer. 
Built a mobile app that launched as a top-30 app on the iOS App Store.
`}
          href="https://www.tenex.co/"
          position="Forward Deployed Engineer"
        />
        <ItemSeparator className="my-4" />
        <ExperienceItem
          company="Sharpsenders.com"
          dateRange="September 2024 - August 2025"
          description={`
Launched AI SaaS to help cold outreach agencies manage campaigns and replies, securing early paying users from cold outbound communities, decreasing response times from 2+ days → 30 seconds.
`}
          href="https://www.sharpsenders.com/"
          position="Co-Founder, CTO"
        />
        <ItemSeparator className="my-4" />
        <ExperienceItem
          company="Opskings.com"
          dateRange="July 2023 - August 2024"
          description={`
Helped agencies and other online businesses scale operations through implementing custom internal technology and automations.
`}
          href="https://www.opskings.com/"
          position="Software Developer"
        />
        <ItemSeparator className="my-4" />
        <ExperienceItem
          company="Viralabs"
          dateRange="September 2022 - May 2023"
          description={`
Developed a system for short-form content distribution and brand growth on Instagram and TikTok for business owners that wanted to scale their online presence but lacked a structured content strategy.
`}
          position="Co-founder; CTO"
        />
      </ItemGroup>
    </section>
  );
}

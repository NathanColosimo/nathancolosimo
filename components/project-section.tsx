import { ProjectItem } from "./project-item";
import { ItemGroup, ItemSeparator } from "./ui/item";

export default function ProjectSection() {
  return (
    <section className="flex flex-col gap-6">
      <h2 className="w-fit border-accent border-b-2 pb-2 font-heading font-semibold text-2xl">
        Projects
      </h2>
      <ItemGroup className="max-w-2xl">
        {/* Example project items - replace with your actual data */}
        <ProjectItem
          description="Minimal primitives for Substack content in React, served via custom Shadcn registry."
          githubUrl="https://github.com/NathanColosimo/substack-react"
          siteUrl="https://substack-react.nathancolosimo.com/"
          status="Completed"
          technologies={["React", "Shadcn"]}
          title="Substack-React"
        />
        <ItemSeparator className="my-4" />
        <ProjectItem
          description="Online realtime poker client for playing games with in real life cards but no chips."
          githubUrl="https://github.com/NathanColosimo/poker"
          siteUrl="https://poker.nathancolosimo.com/"
          status="Completed"
          technologies={["React", "Convex"]}
          title="Poker"
        />
      </ItemGroup>
    </section>
  );
}

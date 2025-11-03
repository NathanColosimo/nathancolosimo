import { ProjectItem } from "./project-item";
import { ItemGroup } from "./ui/item";

export default function ProjectSection() {
  return (
    <ItemGroup className="max-w-2xl">
      {/* Showcase projects without separators so cards feel cohesive inside the tab */}
      <ProjectItem
        description="Minimal primitives for Substack content in React, served via custom Shadcn registry."
        githubUrl="https://github.com/NathanColosimo/substack-react"
        siteUrl="https://substack-react.nathancolosimo.com/"
        status="Completed"
        technologies={["React", "Shadcn"]}
        title="Substack-React"
      />
      <ProjectItem
        description="Online realtime poker client for playing games with in real life cards but no chips."
        githubUrl="https://github.com/NathanColosimo/poker"
        siteUrl="https://poker.nathancolosimo.com/"
        status="Completed"
        technologies={["React", "Convex"]}
        title="Poker"
      />
    </ItemGroup>
  );
}

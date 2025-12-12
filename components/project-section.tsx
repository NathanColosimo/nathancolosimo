import { Book, Brain, Spade } from "lucide-react";
import { ProjectItem } from "./project-item";
import { ItemGroup } from "./ui/item";

export default function ProjectSection() {
  return (
    <ItemGroup className="max-w-2xl">
      {/* Showcase projects without separators so cards feel cohesive inside the tab */}
      <ProjectItem
        description="Minimal primitives for Substack content in React, served via custom Shadcn registry."
        githubUrl="https://github.com/NathanColosimo/substack-react"
        icon={<Book />}
        siteUrl="https://substack-react.nathancolosimo.com/"
        status="Completed"
        technologies={["React", "NextJS", "Shadcn Registry"]}
        title="Substack-React"
      />
      <ProjectItem
        description="Online realtime poker client for playing games with in real life cards but no chips."
        githubUrl="https://github.com/NathanColosimo/poker"
        icon={<Spade />}
        siteUrl="https://poker.nathancolosimo.com/"
        status="Completed"
        technologies={["React", "Convex"]}
        title="Poker"
      />
      <ProjectItem
        description="Prototype for running LLM-as-judge evals"
        githubUrl="https://github.com/NathanColosimo/judge-ai"
        icon={<Brain />}
        siteUrl="judge-ai.nathancolosimo.com"
        status="completed"
        technologies={[
          "React",
          "Hono",
          "Turborepo",
          "Vercel AI SDK",
          "Openrouter",
        ]}
        title="Judge AI"
      />
    </ItemGroup>
  );
}

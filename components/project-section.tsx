import { ProjectItem } from "./project-item";
import { ItemGroup } from "./ui/item";
import { Book, Brain, Spade } from "lucide-react";

export default function ProjectSection() {
  return (
    <ItemGroup className="max-w-2xl">
      {/* Showcase projects without separators so cards feel cohesive inside the tab */}
      <ProjectItem
        icon={<Book />}
        description="Minimal primitives for Substack content in React, served via custom Shadcn registry."
        githubUrl="https://github.com/NathanColosimo/substack-react"
        siteUrl="https://substack-react.nathancolosimo.com/"
        status="Completed"
        technologies={["React", "NextJS", "Shadcn Registry"]}
        title="Substack-React"
      />
      <ProjectItem
        icon={<Spade />}
        description="Online realtime poker client for playing games with in real life cards but no chips."
        githubUrl="https://github.com/NathanColosimo/poker"
        siteUrl="https://poker.nathancolosimo.com/"
        status="Completed"
        technologies={["React", "Convex"]}
        title="Poker"
      />
      <ProjectItem 
        icon={<Brain />}
        description="Prototype for running LLM-as-judge evals"
        githubUrl="https://github.com/NathanColosimo/judge-ai"
        siteUrl="judge-ai.nathancolosimo.com"
        status="completed"
        technologies={["React", "Hono", "Turborepo", "Vercel AI SDK", "Openrouter"]}
        title="Judge AI"/>
    </ItemGroup>
  );
}

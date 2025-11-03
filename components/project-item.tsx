import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { cn } from "@/lib/utils";

type ProjectItemProps = {
  // Project title
  title: string;
  // Project description
  description: string;
  // Technologies used (optional)
  technologies?: string[];
  // GitHub repository URL (optional)
  githubUrl?: string;
  // Live demo URL (optional)
  siteUrl?: string;
  // Project icon or image (optional)
  icon?: React.ReactNode;
  // Status badge (e.g., "In Progress", "Completed", optional)
  status?: string;
  // Additional className for styling
  className?: string;
};

/**
 * ProjectItem component for displaying project entries.
 * Uses shadcn Item component for consistent styling.
 */
export function ProjectItem({
  title,
  description,
  technologies,
  githubUrl,
  siteUrl,
  icon,
  status,
  className,
}: ProjectItemProps) {
  return (
    <Item className={cn("group", className)} role="listitem" variant="outline">
      {/* Icon/Image media */}
      {icon && <ItemMedia variant="icon">{icon}</ItemMedia>}

      {/* Main content */}
      <ItemContent>
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-col gap-1">
            <ItemTitle className="text-base">{title}</ItemTitle>
            {status && (
              <span className="w-fit rounded-full bg-accent/10 px-2 py-0.5 font-medium text-accent text-xs">
                {status}
              </span>
            )}
          </div>
        </div>
        <ItemDescription className="mt-2">{description}</ItemDescription>
        {technologies && technologies.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                className="rounded-md bg-muted px-2 py-1 text-muted-foreground text-xs"
                key={tech}
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </ItemContent>

      {/* Action buttons */}
      {(githubUrl || siteUrl) && (
        <ItemActions>
          {githubUrl && (
            <Button asChild className="gap-1.5" size="sm" variant="outline">
              <a
                aria-label={`View ${title} on GitHub`}
                href={githubUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Github className="size-3.5" />
                <span className="hidden sm:inline">Code</span>
              </a>
            </Button>
          )}
          {siteUrl && (
            <Button asChild className="gap-1.5" size="sm" variant="outline">
              <a
                aria-label={`View ${title} site`}
                href={siteUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                <ExternalLink className="size-3.5" />
                <span className="hidden sm:inline">Site</span>
              </a>
            </Button>
          )}
        </ItemActions>
      )}
    </Item>
  );
}

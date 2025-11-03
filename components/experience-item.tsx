import { Building2, Calendar } from "lucide-react";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { cn } from "@/lib/utils";

export type ExperienceItemProps = {
  // Company/organization name
  company: string;
  // Job title/position
  position: string;
  // Date range (e.g., "Jan 2020 - Present" or "2020 - 2022")
  dateRange: string;
  // Job description
  description?: string;
  // Location (optional)
  location?: string;
  // Company logo or icon (optional)
  logo?: React.ReactNode;
  // Link to company website (optional)
  href?: string;
  // Additional className for styling
  className?: string;
};

/**
 * ExperienceItem component for displaying work experience entries.
 * Uses shadcn Item component for consistent styling.
 */
export function ExperienceItem({
  company,
  position,
  dateRange,
  description,
  location,
  logo,
  href,
  className,
}: ExperienceItemProps) {
  const formattedDescription = description?.trim();
  const content = (
    <>
      {/* Logo/Icon media */}
      {logo && <ItemMedia variant="icon">{logo}</ItemMedia>}

      {/* Main content */}
      <ItemContent>
        <div className="flex flex-col gap-1">
          <ItemTitle className="text-base">{position}</ItemTitle>
          <div className="flex flex-wrap items-center gap-2 text-muted-foreground text-sm">
            <div className="flex items-center gap-1">
              <Building2 className="size-3.5" />
              <span>{company}</span>
            </div>
            {location && (
              <>
                <span>•</span>
                <span>{location}</span>
              </>
            )}
          </div>
          <div className="flex items-center gap-1 text-muted-foreground text-xs">
            <Calendar className="size-3" />
            <span>{dateRange}</span>
          </div>
        </div>
        {formattedDescription && (
          <ItemDescription className="mt-2 line-clamp-none whitespace-pre-line text-wrap text-left">
            {formattedDescription}
          </ItemDescription>
        )}
      </ItemContent>
    </>
  );

  if (href) {
    return (
      <Item asChild className={cn("hover:bg-muted/30", className)}>
        <a href={href} rel="noopener noreferrer" target="_blank">
          {content}
        </a>
      </Item>
    );
  }

  return (
    <Item className={cn("hover:bg-muted/30", className)} role="listitem">
      {content}
    </Item>
  );
}

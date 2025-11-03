import { Calendar, GraduationCap, MapPin } from "lucide-react";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { cn } from "@/lib/utils";

type EducationItemProps = {
  // Institution name
  institution: string;
  // Degree or qualification
  degree: string;
  // Field of study (optional)
  field?: string;
  // Date range (e.g., "2020 - 2024" or "2020")
  dateRange: string;
  // Location (optional)
  location?: string;
  // Additional details or achievements (optional)
  details?: string;
  // Institution logo or icon (optional)
  logo?: React.ReactNode;
  // GPA or grade (optional)
  grade?: string;
  // Link to institution website (optional)
  href?: string;
  // Additional className for styling
  className?: string;
};

/**
 * EducationItem component for displaying education entries.
 * Uses shadcn Item component for consistent styling.
 */
export function EducationItem({
  institution,
  degree,
  field,
  dateRange,
  location,
  details,
  logo,
  grade,
  href,
  className,
}: EducationItemProps) {
  const content = (
    <>
      {/* Logo/Icon media */}
      {logo ? (
        <ItemMedia variant="icon">{logo}</ItemMedia>
      ) : (
        <ItemMedia variant="icon">
          <GraduationCap className="size-4" />
        </ItemMedia>
      )}

      {/* Main content */}
      <ItemContent>
        <div className="flex flex-col gap-1">
          <ItemTitle className="text-base">{degree}</ItemTitle>
          {field && (
            <span className="text-muted-foreground text-sm">{field}</span>
          )}
          <div className="flex flex-wrap items-center gap-2 text-muted-foreground text-sm">
            <span>{institution}</span>
            {location && (
              <>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <MapPin className="size-3" />
                  <span>{location}</span>
                </div>
              </>
            )}
          </div>
          <div className="flex items-center gap-3 text-muted-foreground text-xs">
            <div className="flex items-center gap-1">
              <Calendar className="size-3" />
              <span>{dateRange}</span>
            </div>
            {grade && (
              <>
                <span>•</span>
                <span>{grade}</span>
              </>
            )}
          </div>
        </div>
        {details && (
          <ItemDescription className="mt-2">{details}</ItemDescription>
        )}
      </ItemContent>
    </>
  );

  if (href) {
    return (
      <Item
        asChild
        className={cn("transition-colors hover:border-accent/30", className)}
        variant="outline"
      >
        <a href={href} rel="noopener noreferrer" target="_blank">
          {content}
        </a>
      </Item>
    );
  }

  return (
    <Item className={className} role="listitem" variant="outline">
      {content}
    </Item>
  );
}

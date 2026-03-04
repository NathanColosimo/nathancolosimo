import {
  ExternalLink,
  GitPullRequest,
  MessageCircle,
  Star,
} from "lucide-react";
import { cacheLife, cacheTag } from "next/cache";
import {
  type MergedPullRequest,
  mergedOpenSourcePullRequests,
} from "@/lib/github";

type GitHubPRTimelineProps = {
  username: string;
  minimumStars?: number;
  limit?: number;
};

function formatShortDate(value: string): string {
  const date = new Date(value);
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
  }).format(date);
}

export default async function GitHubPRTimeline({
  username,
  minimumStars = 500,
  limit = 8,
}: GitHubPRTimelineProps) {
  "use cache";

  cacheTag("github-prs", `github-prs-${username.toLowerCase()}`);
  cacheLife({
    stale: 86_400,
    revalidate: 172_800,
    expire: 1_209_600,
  });

  let pullRequests: MergedPullRequest[] = [];

  try {
    pullRequests = await mergedOpenSourcePullRequests({
      username,
      minimumStars,
      limit,
    });
  } catch {
    return (
      <div className="w-full max-w-md rounded-xl border border-border/70 bg-background/70 p-4 text-muted-foreground text-sm">
        GitHub activity is temporarily unavailable. Please check back shortly.
      </div>
    );
  }

  if (pullRequests.length === 0) {
    return (
      <div className="w-full max-w-md rounded-xl border border-border/70 bg-background/70 p-4 text-muted-foreground text-sm">
        No merged pull requests were found for repositories with at least{" "}
        {minimumStars.toLocaleString()} stars.
      </div>
    );
  }

  return (
    <div className="w-full max-w-md">
      <ol className="space-y-6">
        {pullRequests.map((pullRequest, index) => {
          const isLastItem = index === pullRequests.length - 1;

          return (
            <li className="relative pl-11" key={pullRequest.id}>
              {!isLastItem && (
                <span
                  aria-hidden="true"
                  className="-bottom-6 absolute top-9 left-3.5 w-px bg-border/70"
                />
              )}

              <span
                aria-hidden="true"
                className="absolute top-1 left-0 flex size-7 items-center justify-center rounded-full border border-border bg-muted/40 text-accent"
              >
                <GitPullRequest className="size-4" />
              </span>

              <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                <p className="text-muted-foreground text-sm">
                  Merged a pull request in{" "}
                  <a
                    className="font-medium text-foreground underline underline-offset-2 hover:text-primary"
                    href={pullRequest.repoUrl}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {pullRequest.repoName}
                  </a>
                </p>
                <a
                  className="text-muted-foreground text-sm hover:text-foreground"
                  href={pullRequest.url}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {formatShortDate(pullRequest.mergedAt)}
                </a>
              </div>

              <article className="rounded-xl border border-border/70 bg-background/80 p-4 shadow-sm">
                <a
                  className="group/title inline-flex items-start gap-1.5 font-heading font-semibold text-xl leading-tight underline decoration-foreground/30 underline-offset-4 transition-colors hover:text-primary"
                  href={pullRequest.url}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>{pullRequest.title}</span>
                  <ExternalLink className="mt-0.5 size-4 shrink-0 opacity-70 transition-opacity group-hover/title:opacity-100" />
                </a>

                {pullRequest.excerpt && (
                  <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                    {pullRequest.excerpt}
                  </p>
                )}

                <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-muted-foreground text-xs">
                  <span className="inline-flex items-center gap-1">
                    <MessageCircle className="size-3.5" />
                    {pullRequest.comments.toLocaleString()} comments
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Star className="size-3.5" />
                    {pullRequest.repoStars.toLocaleString()} stars
                  </span>
                </div>
              </article>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

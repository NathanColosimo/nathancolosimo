import { z } from "zod";

const DEFAULT_PER_PAGE = 30;
const MAX_SEARCH_PAGES = 3;
const GITHUB_API_BASE_URL = "https://api.github.com";

const GitHubRepositorySchema = z.object({
  html_url: z.string(),
  full_name: z.string(),
  stargazers_count: z.number(),
});

const GitHubSearchItemSchema = z.object({
  id: z.number(),
  number: z.number(),
  title: z.string(),
  body: z.string().nullable(),
  comments: z.number(),
  html_url: z.string(),
  repository_url: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
  closed_at: z.string().nullable(),
  pull_request: z.object({
    url: z.string(),
  }),
});

const GitHubSearchResponseSchema = z.object({
  items: z.array(GitHubSearchItemSchema),
});

type GitHubSearchItem = z.infer<typeof GitHubSearchItemSchema>;

export type MergedPullRequest = {
  id: number;
  title: string;
  url: string;
  repoName: string;
  repoUrl: string;
  repoStars: number;
  comments: number;
  mergedAt: string;
  excerpt?: string;
};

function githubHeaders(): HeadersInit {
  const token = process.env.GITHUB_TOKEN;
  const headers: HeadersInit = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  };

  if (token) {
    return {
      ...headers,
      Authorization: `Bearer ${token}`,
    };
  }

  return headers;
}

async function fetchGitHubResource<T>(
  url: string,
  schema: z.ZodSchema<T>
): Promise<T> {
  const response = await fetch(url, {
    headers: githubHeaders(),
  });

  if (!response.ok) {
    throw new Error(`GitHub request failed (${response.status}) for ${url}`);
  }

  const payload = await response.json();
  return schema.parse(payload);
}

function toExcerpt(body: string | null): string | undefined {
  const content = body?.trim();
  if (!content) {
    return;
  }

  if (content.length <= 160) {
    return content;
  }

  return `${content.slice(0, 157).trimEnd()}...`;
}

async function getMergedPullRequestsForPage(
  username: string,
  page: number
): Promise<GitHubSearchItem[]> {
  const searchParams = new URLSearchParams({
    q: `type:pr author:${username} is:merged is:public`,
    sort: "updated",
    order: "desc",
    per_page: String(DEFAULT_PER_PAGE),
    page: String(page),
  });

  const url = `${GITHUB_API_BASE_URL}/search/issues?${searchParams.toString()}`;
  const result = await fetchGitHubResource(url, GitHubSearchResponseSchema);
  return result.items;
}

export async function mergedOpenSourcePullRequests(params: {
  username: string;
  minimumStars?: number;
  limit?: number;
}): Promise<MergedPullRequest[]> {
  const minimumStars = params.minimumStars ?? 500;
  const limit = params.limit ?? 8;
  const searchItems: GitHubSearchItem[] = [];

  for (let page = 1; page <= MAX_SEARCH_PAGES; page += 1) {
    const pageItems = await getMergedPullRequestsForPage(params.username, page);
    searchItems.push(...pageItems);

    if (pageItems.length < DEFAULT_PER_PAGE) {
      break;
    }
  }

  if (searchItems.length === 0) {
    return [];
  }

  const uniqueRepositoryUrls = Array.from(
    new Set(searchItems.map((pr) => pr.repository_url))
  );

  const repositoryResponses = await Promise.all(
    uniqueRepositoryUrls.map(async (repositoryUrl) => {
      try {
        const repository = await fetchGitHubResource(
          repositoryUrl,
          GitHubRepositorySchema
        );
        return [repositoryUrl, repository] as const;
      } catch {
        return [repositoryUrl, null] as const;
      }
    })
  );

  const repositoryByUrl = new Map(repositoryResponses);

  const eligiblePullRequests = searchItems
    .filter((pr) => {
      const repository = repositoryByUrl.get(pr.repository_url);
      if (!repository) {
        return false;
      }
      return repository.stargazers_count >= minimumStars;
    })
    .sort((a, b) => {
      const aTime = Date.parse(a.closed_at ?? a.updated_at);
      const bTime = Date.parse(b.closed_at ?? b.updated_at);
      return bTime - aTime;
    })
    .slice(0, limit);

  if (eligiblePullRequests.length === 0) {
    return [];
  }

  const mappedPullRequests: MergedPullRequest[] = [];

  for (const pr of eligiblePullRequests) {
    const repository = repositoryByUrl.get(pr.repository_url);
    if (!repository) {
      continue;
    }

    const mergedAt = pr.closed_at ?? pr.updated_at;
    if (!mergedAt) {
      continue;
    }

    const excerpt = toExcerpt(pr.body);

    mappedPullRequests.push({
      id: pr.id,
      title: pr.title,
      url: pr.html_url,
      repoName: repository.full_name,
      repoUrl: repository.html_url,
      repoStars: repository.stargazers_count,
      comments: pr.comments,
      mergedAt,
      ...(excerpt ? { excerpt } : {}),
    });
  }

  return mappedPullRequests.sort(
    (a, b) => Date.parse(b.mergedAt) - Date.parse(a.mergedAt)
  );
}

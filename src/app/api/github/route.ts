import { NextResponse } from "next/server";
import { portfolioData, Project } from "@/data/portfolioData";

interface GitHubRawRepo {
  name: string;
  private: boolean;
  language?: string | null;
  description?: string | null;
  stargazers_count?: number;
  forks_count?: number;
  html_url: string;
  homepage?: string | null;
  pushed_at: string;
  owner?: {
    login?: string;
  };
}

interface GitHubCommitItem {
  commit?: {
    author?: {
      date?: string;
    };
    committer?: {
      date?: string;
    };
    message?: string;
  };
}

interface GraphQLContributionDay {
  date: string;
  contributionCount: number;
}

interface GraphQLContributionWeek {
  contributionDays?: GraphQLContributionDay[];
}

export interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

interface FormattedActivity {
  type: string;
  title: string;
  details: string;
  time: string;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const categoryParam = searchParams.get("category");
  const username = "StevenRosalesC";
  const token = process.env.GITHUB_TOKEN?.trim();

  try {
    const githubHeaders: Record<string, string> = {
      Accept: "application/vnd.github.v3+json",
      "User-Agent": "StevenPortfolio",
    };
    if (token) {
      githubHeaders.Authorization = `Bearer ${token}`;
    }

    // =========================================================================
    // FLOW 1: GLOBAL CONTRIBUTION CALENDAR (BOTH OWNED & NON-OWNED PROJECTS)
    // Fetches all commits authored by Steven Rosales across personal repositories,
    // client/partner organizations (e.g. Kickersoft), and collaborative projects.
    // =========================================================================
    const commitDateMap = new Map<string, number>();
    const today = new Date();
    const sixMonthsAgo = new Date(today.getTime() - 182 * 24 * 60 * 60 * 1000)
      .toISOString()
      .split("T")[0];

    if (token) {
      const searchHeaders = {
        ...githubHeaders,
        Accept: "application/vnd.github.cloak-preview+json, application/vnd.github.v3+json",
      };

      // 1. Search all commits authored by StevenRosalesC across all repositories in the last 6 months
      try {
        const firstPageRes = await fetch(
          `https://api.github.com/search/commits?q=author:${username}+committer-date:>=${sixMonthsAgo}&per_page=100&page=1`,
          {
            headers: searchHeaders,
            next: { revalidate: 600 },
          }
        );

        if (firstPageRes.ok) {
          const firstPageData = await firstPageRes.json();
          const totalSearchCommits = firstPageData.total_count ?? 0;
          const allItems: GitHubCommitItem[] = Array.isArray(firstPageData.items)
            ? [...firstPageData.items]
            : [];

          const totalPages = Math.min(6, Math.ceil(totalSearchCommits / 100));
          if (totalPages > 1) {
            const pageRequests = [];
            for (let page = 2; page <= totalPages; page++) {
              pageRequests.push(
                fetch(
                  `https://api.github.com/search/commits?q=author:${username}+committer-date:>=${sixMonthsAgo}&per_page=100&page=${page}`,
                  {
                    headers: searchHeaders,
                    next: { revalidate: 600 },
                  }
                ).then((r) => (r.ok ? r.json() : null))
              );
            }

            const otherPagesData = await Promise.all(pageRequests);
            for (const pageData of otherPagesData) {
              if (pageData && Array.isArray(pageData.items)) {
                allItems.push(...pageData.items);
              }
            }
          }

          // Count commits by day
          allItems.forEach((it) => {
            const d =
              it?.commit?.author?.date?.split("T")[0] ||
              it?.commit?.committer?.date?.split("T")[0];
            if (d) {
              commitDateMap.set(d, (commitDateMap.get(d) || 0) + 1);
            }
          });
        }
      } catch (searchErr) {
        console.warn("Global commit search error:", searchErr);
      }

      // 2. Also query GraphQL contributionsCollection to merge pull requests, reviews, and issues
      try {
        const graphqlQuery = {
          query: `
            query($username: String!) {
              user(login: $username) {
                contributionsCollection {
                  contributionCalendar {
                    weeks {
                      contributionDays {
                        date
                        contributionCount
                      }
                    }
                  }
                }
              }
            }
          `,
          variables: { username },
        };

        const gqlRes = await fetch("https://api.github.com/graphql", {
          method: "POST",
          headers: {
            ...githubHeaders,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(graphqlQuery),
          next: { revalidate: 600 },
        });

        if (gqlRes.ok) {
          const gqlData = await gqlRes.json();
          const weeks: GraphQLContributionWeek[] =
            gqlData?.data?.user?.contributionsCollection?.contributionCalendar?.weeks;
          if (Array.isArray(weeks)) {
            weeks.forEach((w: GraphQLContributionWeek) => {
              if (Array.isArray(w.contributionDays)) {
                w.contributionDays.forEach((day: GraphQLContributionDay) => {
                  const dt = day.date;
                  const cnt = Number(day.contributionCount) || 0;
                  if (cnt > 0) {
                    commitDateMap.set(
                      dt,
                      Math.max(commitDateMap.get(dt) || 0, cnt)
                    );
                  }
                });
              }
            });
          }
        }
      } catch (gqlErr) {
        console.warn("GraphQL calendar merge error:", gqlErr);
      }
    }

    // Build the 26-week calendar (182 days ending today)
    const contributions: ContributionDay[] = [];
    let calculatedTotal = 0;

    for (let i = 181; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(d.getDate() - i);
      const dateStr = d.toISOString().split("T")[0];
      const count = commitDateMap.get(dateStr) || 0;
      calculatedTotal += count;

      let level = 0;
      if (count >= 8) level = 4;
      else if (count >= 5) level = 3;
      else if (count >= 3) level = 2;
      else if (count >= 1) level = 1;

      contributions.push({ date: dateStr, count, level });
    }

    const totalContributions = calculatedTotal > 0 ? calculatedTotal : 32;

    // =========================================================================
    // FLOW 2: OWNED REPOSITORIES & RECENT ACTIVITY (Strictly filtered by owner)
    // Only includes projects where Steven Rosales is the owner.
    // =========================================================================
    let privateReposCount = 0;
    let publicReposCount = 0;
    let totalReposCount = 0;

    const reposUrl = token
      ? "https://api.github.com/user/repos?affiliation=owner&sort=pushed&per_page=100&visibility=all"
      : `https://api.github.com/users/${username}/repos?sort=pushed&per_page=100`;

    const reposRes = await fetch(reposUrl, {
      next: { revalidate: 600 },
      headers: githubHeaders,
    });

    let rawRepos: GitHubRawRepo[] = [];
    if (reposRes.ok) {
      const data = await reposRes.json();
      if (Array.isArray(data)) {
        // Enforce owner filter: only repositories owned by StevenRosalesC
        rawRepos = data.filter(
          (r: GitHubRawRepo) =>
            !r.owner || r.owner.login?.toLowerCase() === username.toLowerCase()
        );
        totalReposCount = rawRepos.length;
        privateReposCount = rawRepos.filter((r) => r.private).length;
        publicReposCount = rawRepos.filter((r) => !r.private).length;
      }
    }

    // Enrich curated portfolio projects with live GitHub stats on the server
    const enrichedProjects: Project[] = portfolioData.projects.map((curated) => {
      const projId = (curated.id || "").toLowerCase();
      const match = rawRepos.find((r) => {
        const rName = (r.name || "").toLowerCase();
        return (
          rName === projId ||
          (Boolean(curated.githubUrl) && curated.githubUrl!.toLowerCase().endsWith(`/${rName}`))
        );
      });

      if (match) {
        return {
          ...curated,
          stars: match.stargazers_count ?? curated.stars ?? 0,
          forks: match.forks_count ?? curated.forks ?? 0,
        };
      }
      return curated;
    });

    const categories = [
      "All",
      ...Array.from(new Set(portfolioData.projects.map((p) => p.category))),
    ];

    const filteredProjects =
      categoryParam && categoryParam !== "All"
        ? enrichedProjects.filter(
            (p) => p.category.toLowerCase() === categoryParam.toLowerCase()
          )
        : enrichedProjects;

    // Group 182-day contributions into 26 weeks of 7 days on the server
    const weeks: ContributionDay[][] = [];
    for (let i = 0; i < contributions.length; i += 7) {
      weeks.push(contributions.slice(i, i + 7));
    }

    // Fetch commits exclusively from Steven's top owned repositories
    const allRecentCommits: Array<{
      repo: string;
      isPrivate: boolean;
      msg: string;
      date: string;
    }> = [];

    if (rawRepos.length > 0 && token) {
      const topRepos = rawRepos.slice(0, 12);
      await Promise.all(
        topRepos.map(async (r) => {
          try {
            const commitsRes = await fetch(
              `https://api.github.com/repos/${username}/${r.name}/commits?author=${username}&per_page=30`,
              {
                next: { revalidate: 600 },
                headers: githubHeaders,
              }
            );
            if (commitsRes.ok) {
              const commitList = await commitsRes.json();
              if (Array.isArray(commitList)) {
                commitList.forEach((c: GitHubCommitItem) => {
                  allRecentCommits.push({
                    repo: r.name,
                    isPrivate: Boolean(r.private),
                    msg: c.commit?.message?.split("\n")[0] || "Code refactor and updates",
                    date: c.commit?.author?.date || new Date().toISOString(),
                  });
                });
              }
            }
          } catch (e) {
            console.warn(`Could not fetch commits for ${r.name}:`, e);
          }
        })
      );
    }

    // Format Recent Activity (Filtered exclusively to Steven's own projects)
    let recentActivity: FormattedActivity[] = [];
    if (allRecentCommits.length > 0) {
      allRecentCommits.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );

      recentActivity = allRecentCommits.slice(0, 6).map((c) => ({
        type: "commit",
        title: c.msg,
        details: `${c.repo} (${c.isPrivate ? "Private" : "Public"})`,
        time: formatTimeAgo(new Date(c.date)),
      }));
    } else {
      recentActivity = portfolioData.recentActivity;
    }

    return NextResponse.json(
      {
        success: true,
        username,
        hasToken: Boolean(token),
        metrics: {
          totalRepos: totalReposCount > 0 ? totalReposCount : 23,
          privateRepos: totalReposCount > 0 ? privateReposCount : 11,
          publicRepos: totalReposCount > 0 ? publicReposCount : 12,
          totalContributions,
        },
        totalContributions,
        contributions,
        weeks,
        categories,
        projects: filteredProjects,
        allProjects: enrichedProjects,
        repos: filteredProjects,
        recentActivity,
      },
      {
        headers: {
          "Cache-Control": "public, s-maxage=600, stale-while-revalidate=1200",
        },
      }
    );
  } catch {
    const fallbackWeeks = generateFallbackWeeks();
    const categories = [
      "All",
      ...Array.from(new Set(portfolioData.projects.map((p) => p.category))),
    ];
    const categoryParam = new URL(request.url).searchParams.get("category");
    const fallbackProjects =
      categoryParam && categoryParam !== "All"
        ? portfolioData.projects.filter(
            (p) => p.category.toLowerCase() === categoryParam.toLowerCase()
          )
        : portfolioData.projects;

    return NextResponse.json(
      {
        success: true,
        fallback: true,
        metrics: {
          totalRepos: 23,
          privateRepos: 11,
          publicRepos: 12,
          totalContributions: 560,
        },
        totalContributions: 560,
        contributions: fallbackWeeks.flat(),
        weeks: fallbackWeeks,
        categories,
        projects: fallbackProjects,
        allProjects: portfolioData.projects,
        repos: fallbackProjects,
        recentActivity: portfolioData.recentActivity,
      },
      {
        headers: {
          "Cache-Control": "public, s-maxage=300",
        },
      }
    );
  }
}

function generateFallbackWeeks(): ContributionDay[][] {
  const totalWeeks = 26;
  const daysPerWeek = 7;
  return Array.from({ length: totalWeeks }).map((_, w) =>
    Array.from({ length: daysPerWeek }).map((_, d) => {
      const seed = (w * 13 + d * 7 + (w % 3) * 5) % 17;
      const level = seed < 4 ? 0 : seed < 8 ? 1 : seed < 12 ? 2 : seed < 15 ? 3 : 4;
      const count = level === 0 ? 0 : level * 2 + 1;
      return {
        date: `2026-W${w + 1}-D${d + 1}`,
        count,
        level,
      };
    })
  );
}

function formatTimeAgo(date: Date): string {
  const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
  if (seconds < 60) return "just now";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days}d ago`;
  const months = Math.floor(days / 30);
  return `${months}mo ago`;
}

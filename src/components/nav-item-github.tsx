import { GitHubFollowers } from "./github-followers"; // We will rename or create this next
import { GITHUB_USERNAME } from "@/config/site";

async function getFollowerCount() {
  try {
    const headers: HeadersInit = {
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
    };

    if (process.env.GITHUB_API_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_API_TOKEN}`;
    }

    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}`,
      {
        headers,
        next: { revalidate: 86400 }, // Cache for 1 day
      }
    );

    if (!response.ok) {
      return 0;
    }

    const json = (await response.json()) as { followers?: number };
    return Number(json?.followers) || 0;
  } catch {
    return 0;
  }
}

export async function NavItemGitHub() {
  const followerCount = await getFollowerCount();

  return (
    <GitHubFollowers
      username={GITHUB_USERNAME}
      followerCount={followerCount}
    />
  );
}

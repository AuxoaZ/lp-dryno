import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getGitHubConfig } from "@/lib/github";

function getMimeType(filename: string): string {
  const lower = filename.toLowerCase();
  if (lower.endsWith(".png")) return "image/png";
  if (lower.endsWith(".webp")) return "image/webp";
  if (lower.endsWith(".gif")) return "image/gif";
  if (lower.endsWith(".svg")) return "image/svg+xml";
  if (lower.endsWith(".avif")) return "image/avif";
  return "image/jpeg";
}

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  const { path } = await params;
  const relativeFile = path.join("/");
  const { pat, owner, repo, branch } = getGitHubConfig();

  const repoPath = `public/images/uploads/${relativeFile}`;
  const encodedPath = repoPath
    .split("/")
    .map((segment) => encodeURIComponent(segment))
    .join("/");

  const apiUrl = `https://api.github.com/repos/${encodeURIComponent(
    owner
  )}/${encodeURIComponent(repo)}/contents/${encodedPath}?ref=${encodeURIComponent(
    branch
  )}`;

  const headers: Record<string, string> = {
    Accept: "application/vnd.github.raw+json",
    "X-GitHub-Api-Version": "2022-11-28",
    "User-Agent": "DRYNO-CMS-Image-Proxy",
  };

  if (pat && !pat.includes("xxxxxxxx") && pat !== "ghp_xxxxxxxxxxxxxxxxxxxx") {
    headers.Authorization = `Bearer ${pat}`;
  }

  try {
    const res = await fetch(apiUrl, {
      headers,
      cache: "no-store",
    });

    if (!res.ok) {
      return new NextResponse("Image not found in GitHub repository", {
        status: 404,
      });
    }

    const buffer = await res.arrayBuffer();
    const contentType = getMimeType(relativeFile);

    return new NextResponse(buffer, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch {
    return new NextResponse("Error fetching image from GitHub", {
      status: 500,
    });
  }
}


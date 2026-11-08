import { NextResponse } from "next/server";
import { isAuthenticatedServer } from "@/lib/auth";
import {
  fetchContentFromGitHub,
  commitContentToGitHub,
} from "@/lib/github";
import type { CMSContent } from "@/types/cms";

export async function GET() {
  try {
    const result = await fetchContentFromGitHub();
    return NextResponse.json(result, {
      headers: {
        "Cache-Control": "no-store, no-cache, must-revalidate",
      },
    });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Gagal mengambil data content.json dari GitHub.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const isAuth = await isAuthenticatedServer();
    if (!isAuth) {
      return NextResponse.json(
        { error: "Unauthorized: Silakan login terlebih dahulu." },
        { status: 401 }
      );
    }

    const body = await request.json();
    const content = body?.content as CMSContent | undefined;
    const sha = typeof body?.sha === "string" ? body.sha : null;
    const commitMessage =
      typeof body?.commitMessage === "string" ? body.commitMessage : undefined;

    if (!content || typeof content !== "object") {
      return NextResponse.json(
        { error: "Payload content tidak valid." },
        { status: 400 }
      );
    }

    const result = await commitContentToGitHub(content, sha, commitMessage);

    return NextResponse.json({
      success: true,
      message: "Berhasil menyimpan dan mem-publish perubahan ke GitHub Repository!",
      sha: result.sha,
      commitSha: result.commitSha,
      commitUrl: result.commitUrl,
      content: result.content,
    });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Gagal menyimpan perubahan ke GitHub.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}


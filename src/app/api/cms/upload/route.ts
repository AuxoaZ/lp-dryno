import { NextResponse } from "next/server";
import { isAuthenticatedServer } from "@/lib/auth";
import { uploadImageToGitHub } from "@/lib/github";

const MAX_FILE_SIZE_BYTES = 1 * 1024 * 1024; // 1 MB strict limit
const ALLOWED_MIME_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
  "image/gif",
  "image/svg+xml",
  "image/avif",
];

export async function POST(request: Request) {
  try {
    const isAuth = await isAuthenticatedServer();
    if (!isAuth) {
      return NextResponse.json(
        { error: "Unauthorized: Silakan login terlebih dahulu." },
        { status: 401 }
      );
    }

    const formData = await request.formData();
    const file = formData.get("file");

    if (!file || !(file instanceof File)) {
      return NextResponse.json(
        { error: "File gambar tidak ditemukan dalam request." },
        { status: 400 }
      );
    }

    if (!ALLOWED_MIME_TYPES.includes(file.type)) {
      return NextResponse.json(
        {
          error:
            "Format file tidak didukung. Gunakan JPG, PNG, WEBP, GIF, AVIF, atau SVG.",
        },
        { status: 400 }
      );
    }

    if (file.size > MAX_FILE_SIZE_BYTES) {
      const sizeInMB = (file.size / (1024 * 1024)).toFixed(2);
      return NextResponse.json(
        {
          error: `Ukuran file (${sizeInMB} MB) melebihi batas maksimum 1 MB. Silakan kompres gambar terlebih dahulu.`,
        },
        { status: 400 }
      );
    }

    // Read file into memory buffer (no local filesystem writes, preventing ENOENT on serverless/Vercel)
    const arrayBuffer = await file.arrayBuffer();
    const result = await uploadImageToGitHub(arrayBuffer, file.name);

    return NextResponse.json({
      success: true,
      message: `Gambar berhasil di-commit ke GitHub (${result.repoPath})`,
      url: result.url,
      rawUrl: result.rawUrl,
      repoPath: result.repoPath,
      sha: result.sha,
      commitUrl: result.commitUrl,
    });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Gagal mengunggah gambar ke GitHub.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}


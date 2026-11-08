import crypto from "crypto";
import { cookies } from "next/headers";
import type { NextRequest } from "next/server";

export const SESSION_COOKIE_NAME = "dryno_cms_session";
const SESSION_DURATION_MS = 1000 * 60 * 60 * 24; // 24 hours

function getAdminPassword(): string {
  return process.env.ADMIN_PASSWORD || "admin@123";
}

function getSecretKey(): string {
  const password = getAdminPassword();
  return crypto
    .createHash("sha256")
    .update(`dryno-cms-secret-key:${password}`)
    .digest("hex");
}

export function verifyPassword(inputPassword: string): boolean {
  const expected = getAdminPassword();
  const inputBuf = Buffer.from(inputPassword, "utf-8");
  const expectedBuf = Buffer.from(expected, "utf-8");

  if (inputBuf.length !== expectedBuf.length) {
    return false;
  }
  return crypto.timingSafeEqual(inputBuf, expectedBuf);
}

export function createSessionToken(): string {
  const expiresAt = Date.now() + SESSION_DURATION_MS;
  const payload = `admin:${expiresAt}`;
  const signature = crypto
    .createHmac("sha256", getSecretKey())
    .update(payload)
    .digest("hex");
  return Buffer.from(`${payload}:${signature}`, "utf-8").toString("base64url");
}

export function verifySessionToken(token?: string | null): boolean {
  if (!token) return false;
  try {
    const decoded = Buffer.from(token, "base64url").toString("utf-8");
    const parts = decoded.split(":");
    if (parts.length !== 3) return false;

    const [role, expiresAtStr, signature] = parts;
    if (role !== "admin") return false;

    const expiresAt = Number(expiresAtStr);
    if (!Number.isFinite(expiresAt) || Date.now() > expiresAt) {
      return false;
    }

    const payload = `${role}:${expiresAtStr}`;
    const expectedSig = crypto
      .createHmac("sha256", getSecretKey())
      .update(payload)
      .digest("hex");

    const sigBuf = Buffer.from(signature, "utf-8");
    const expectedBuf = Buffer.from(expectedSig, "utf-8");

    if (sigBuf.length !== expectedBuf.length) return false;
    return crypto.timingSafeEqual(sigBuf, expectedBuf);
  } catch {
    return false;
  }
}

export async function isAuthenticatedServer(): Promise<boolean> {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE_NAME)?.value;
  return verifySessionToken(token);
}

export function isAuthenticatedRequest(request: NextRequest): boolean {
  const token = request.cookies.get(SESSION_COOKIE_NAME)?.value;
  return verifySessionToken(token);
}


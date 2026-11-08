import { NextResponse } from "next/server";
import { isAuthenticatedServer } from "@/lib/auth";

export async function GET() {
  const authenticated = await isAuthenticatedServer();
  return NextResponse.json({ authenticated });
}


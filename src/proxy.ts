import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isAuthenticatedRequest } from "@/lib/auth";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isAuth = isAuthenticatedRequest(request);

  // Protect /admin routes -> redirect to /login if not authenticated
  if (pathname.startsWith("/admin")) {
    if (!isAuth) {
      const loginUrl = new URL("/login", request.url);
      loginUrl.searchParams.set("from", pathname);
      return NextResponse.redirect(loginUrl);
    }
    return NextResponse.next();
  }

  // Redirect /login to /admin if already authenticated
  if (pathname === "/login") {
    if (isAuth) {
      return NextResponse.redirect(new URL("/admin", request.url));
    }
    return NextResponse.next();
  }

  // Protect mutating /api/cms/* routes
  if (pathname.startsWith("/api/cms")) {
    const method = request.method.toUpperCase();
    if (["POST", "PUT", "DELETE", "PATCH"].includes(method) && !isAuth) {
      return NextResponse.json(
        { error: "Unauthorized: Sesi Anda telah berakhir. Silakan login kembali." },
        { status: 401 }
      );
    }
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/login", "/api/cms/:path*"],
};


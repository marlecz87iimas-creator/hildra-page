import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const CANONICAL_HOST = "hildra.com.mx";

function normalizeHost(host: string) {
  return host.split(":")[0]?.toLowerCase() ?? "";
}

/**
 * Keep the public URL on hildra.com.mx.
 * Do NOT redirect *.railway.app — Railway healthchecks hit that host and need 200.
 */
export function middleware(request: NextRequest) {
  const host = normalizeHost(request.headers.get("host") ?? "");

  if (host !== "www.hildra.com.mx") {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.protocol = "https:";
  url.host = CANONICAL_HOST;
  url.port = "";

  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|icon.png|apple-icon.png|opengraph-image|robots.txt|sitemap.xml).*)",
  ],
};

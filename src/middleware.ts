import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const CANONICAL_HOST = "hildra.com.mx";
const CANONICAL_ORIGIN = `https://${CANONICAL_HOST}`;

function normalizeHost(host: string) {
  return host.split(":")[0]?.toLowerCase() ?? "";
}

export function middleware(request: NextRequest) {
  const host = normalizeHost(request.headers.get("host") ?? "");

  if (!host || host === CANONICAL_HOST) {
    return NextResponse.next();
  }

  const shouldRedirect =
    host.endsWith(".railway.app") || host === "www.hildra.com.mx";

  if (!shouldRedirect) {
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

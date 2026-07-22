import { NextRequest, NextResponse } from "next/server";

/**
 * Subdomain routing.
 *
 * `invest.ecologic-circle.com` serves the standalone investor page
 * (public/ecologic-tony.html) at its root, while the main domain
 * `ecologic-circle.com` keeps serving the normal Next.js site.
 *
 * The invest page is a self-contained HTML file (images inlined as base64),
 * so we simply rewrite the subdomain root to that static file. Its only
 * external reference — /ecologic-detailed-brief.pdf — is served straight
 * from /public on either domain once the PDF is added.
 */
export function middleware(req: NextRequest) {
  const host = (req.headers.get("host") || "").split(":")[0].toLowerCase();
  const isInvestSubdomain =
    host === "invest.ecologic-circle.com" || host.startsWith("invest.");

  if (isInvestSubdomain) {
    const url = req.nextUrl.clone();
    url.pathname = "/ecologic-tony.html";
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

// Only run at the subdomain root; asset/PDF requests pass through untouched.
export const config = {
  matcher: "/",
};

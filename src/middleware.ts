import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// List of paths that require authentication (e.g., /user, /profile)
const protectedPaths = ["/user"]; // Add any other paths that need protection

export function middleware(request: NextRequest) {
  const token = cookies().get("token");

  // Check if the requested path is one of the protected paths
  if (
    protectedPaths.some((path) => request.nextUrl.pathname.startsWith(path))
  ) {
    // If no token is found and the user is trying to access a protected path, redirect to the home page or login page
    if (!token) {
      return NextResponse.redirect(new URL("/", request.url)); // Redirect to login or home page
    }
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-url", request.url);

  // Continue to the requested page if no issues
  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: [
    "/(.*)", // Apply to all paths
  ],
};

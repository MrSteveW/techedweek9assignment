import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import type { NextRequest } from "next/server";

const isProtectedRoute = createRouteMatcher([
  "/chats",
  "/chats(.*)",
  "/users(.*)",
]);

export default clerkMiddleware(async (auth, req: NextRequest) => {
  if (req.nextUrl.pathname.startsWith("/users/signup")) {
    return;
  }
  if (isProtectedRoute(req)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};

import type { NextRequest } from "next/server";
import { DEFAULT_LOGIN_REDIRECT, apiAuthPrefix, publicRoutes } from "./routes";


export function middleware(request: NextRequest) {
  const { nextUrl } = request;

  const isLoggedIn = request.cookies.has("authjs.session-token");

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  

  if (isApiAuthRoute) {
    return null;
  }

  if(!isPublicRoute && !isLoggedIn){
    console.log(nextUrl.pathname)                  
    return Response.redirect(new URL("/login", nextUrl));
  }

  return null;
}

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};



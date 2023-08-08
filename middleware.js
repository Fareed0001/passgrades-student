import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export const config = {
  matcher: ["/Dashboard/:path*"],
};

export default withAuth(
  function middleware(req) {
    if (
      req.nextUrl.pathname.startsWith("/Dashboard/Agent") &&
      req.nextauth.token?.role !== "agent"
    )
      return NextResponse.rewrite(
        new URL("/auth/signup?message=You are not authorised", req.url)
      );
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        !!token;
      },
    },
  }
);

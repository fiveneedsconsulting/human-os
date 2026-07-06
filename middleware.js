import { NextResponse } from "next/server";

const GATE_COOKIE = "hos_gate";
const GATE_VALUE = "granted";

export function middleware(request) {
  const { pathname } = request.nextUrl;

  const cookie = request.cookies.get(GATE_COOKIE);
  if (cookie?.value === GATE_VALUE) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = "/gate";
  url.search = "";
  url.searchParams.set("next", pathname);
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/manual/:path*", "/tools/:path*"],
};

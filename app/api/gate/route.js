import { NextResponse } from "next/server";

const GATE_COOKIE = "hos_gate";
const GATE_VALUE = "granted";

export async function POST(request) {
  const { password } = await request.json();

  if (password !== process.env.SITE_GATE_PASSWORD) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set(GATE_COOKIE, GATE_VALUE, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 30,
    path: "/",
  });
  return res;
}

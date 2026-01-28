import { NextResponse } from "next/server";

export async function GET() {
  const now = new Date();
  return NextResponse.json({
    ok: true,
    timestamp: now.toISOString(),
    uptimeSeconds: Math.round(process.uptime()),
    message: "Sandboxed server is live",
  });
}

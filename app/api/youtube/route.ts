import { NextResponse } from "next/server";
import type { IntegrationResponse } from "@/types/content";

type VideoSummary = {
  id: string;
  title: string;
  publishedAt: string;
  thumbnailUrl: string;
};

export const revalidate = 86400;

export function GET() {
  const response: IntegrationResponse<VideoSummary> = {
    configured: false,
    source: "disabled",
    items: [],
    message: "YouTube enrichment is prepared but disabled for this release.",
  };

  return NextResponse.json(response, {
    headers: { "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=604800" },
  });
}

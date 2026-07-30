import { NextResponse } from "next/server";
import type { IntegrationResponse, Project } from "@/types/content";

export const revalidate = 86400;

export function GET() {
  const response: IntegrationResponse<Pick<Project, "title" | "repositoryUrl">> = {
    configured: false,
    source: "disabled",
    items: [],
    message: "GitHub enrichment is prepared but disabled for this release.",
  };

  return NextResponse.json(response, {
    headers: { "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=604800" },
  });
}

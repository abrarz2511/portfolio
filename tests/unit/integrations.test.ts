import { describe, expect, it } from "vitest";
import { GET as getGitHub } from "@/app/api/github/route";
import { GET as getYouTube } from "@/app/api/youtube/route";

describe("disabled integrations", () => {
  it.each([
    ["GitHub", getGitHub],
    ["YouTube", getYouTube],
  ])("%s responds safely without credentials", async (_name, handler) => {
    const response = handler();
    expect(response.status).toBe(200);
    await expect(response.json()).resolves.toMatchObject({
      configured: false,
      source: "disabled",
      items: [],
    });
  });
});

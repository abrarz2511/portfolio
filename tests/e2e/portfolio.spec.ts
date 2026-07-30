import { expect, test } from "@playwright/test";

test("homepage exposes the primary portfolio journey", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByRole("link", { name: "Abrar Zahin, home" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Featured projects" }),
  ).toBeVisible();
  await expect(page.getByText("Scroll", { exact: true })).toBeVisible();
  await expect(page.locator("video")).toHaveAttribute(
    "poster",
    "/images/hero-poster.webp",
  );
});

test("primary routes and project detail resolve", async ({ page }) => {
  for (const path of ["/projects", "/experience", "/articles"]) {
    await page.goto(path);
    await expect(page.locator("h1")).toBeVisible();
  }

  await page.goto("/projects/production-ai-api");
  await expect(
    page.getByRole("heading", { level: 1, name: "Production AI API" }),
  ).toBeVisible();
});

test("mobile navigation opens, closes, and restores focus", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  const menu = page.getByRole("button", { name: "Open navigation" });
  await expect(page.locator(".site-header")).toHaveAttribute(
    "data-hydrated",
    "true",
  );
  await menu.click();
  await expect(page.getByRole("navigation", { name: "Mobile navigation" })).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("button", { name: "Open navigation" })).toBeFocused();
});

test("reduced motion keeps static content and omits video playback", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await expect(page.locator("video")).toHaveCount(0);
  await expect(page.locator(".hero__poster")).toBeVisible();
});

test("Vanta cleans up safely during route navigation", async ({
  page,
}, testInfo) => {
  test.skip(testInfo.project.name === "mobile", "Vanta is disabled on mobile");
  const pageErrors: string[] = [];
  page.on("pageerror", (error) => pageErrors.push(error.message));

  await page.goto("/");
  await page.waitForLoadState("networkidle");
  await page.evaluate(() => {
    document.querySelector(".profile-section")?.scrollIntoView({
      block: "center",
    });
  });
  await page.waitForTimeout(500);
  await page.goto("/projects");

  expect(pageErrors).toEqual([]);
});

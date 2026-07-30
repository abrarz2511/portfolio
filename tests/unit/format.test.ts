import { describe, expect, it } from "vitest";
import { formatDate, formatDateRange, formatMonthYear } from "@/lib/format";

describe("date formatters", () => {
  it("formats ISO month values consistently", () => {
    expect(formatMonthYear("2026-05")).toBe("May 2026");
  });

  it("formats open and closed experience ranges", () => {
    expect(formatDateRange("2026-05")).toBe("May 2026 — Present");
    expect(formatDateRange("2025-12", "2026-05")).toBe(
      "Dec 2025 — May 2026",
    );
  });

  it("formats project publication dates in UTC", () => {
    expect(formatDate("2026-06-01")).toBe("June 1, 2026");
  });
});

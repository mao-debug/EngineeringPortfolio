import { describe, expect, it } from "vitest";
import { activeNoiseCancellationExpansion, experienceAdditions, projectAdditions } from "@/lib/portfolio-additions";

describe("Supplied portfolio facts", () => {
  it("keeps Takeda dates as May–August 2026", () => {
    const entry = experienceAdditions.find((item) => item.id === "takeda-automation");
    expect(entry?.start).toBe("2026-05");
    expect(entry?.end).toBe("2026-08");
  });

  it("keeps Kraft dates as June–August 2025", () => {
    const entry = experienceAdditions.find((item) => item.id === "kraft-project-engineering");
    expect(entry?.start).toBe("2025-06");
    expect(entry?.end).toBe("2025-08");
  });

  it("keeps DPR's July 2023 start without inventing an end date", () => {
    const entry = experienceAdditions.find((item) => item.id === "dpr-project-management");
    expect(entry?.start).toBe("2023-07");
    expect(entry?.end).toBeNull();
  });

  it("leaves the RF project's dates and status unconfirmed", () => {
    const entry = projectAdditions.find((item) => item.id === "rf-spectrum-wireless");
    expect(entry?.date).toBeNull();
    expect(entry?.status).toBeNull();
  });

  it("leaves the NeuroMaker project date unconfirmed", () => {
    expect(projectAdditions.find((item) => item.id === "neuromaker-robotic-hand")?.date).toBeNull();
  });

  it("does not invent numerical noise reduction measurements", () => {
    expect(activeNoiseCancellationExpansion.measurements).toBeNull();
  });
});
import { describe, expect, it } from "vitest";
import { experienceAdditions } from "@/lib/portfolio-additions";
import { featuredProjects, filterProjects, getSkillDirectory, projects } from "@/lib/portfolio-catalogue";

describe("Portfolio organization", () => {
  it("keeps the homepage selective rather than displaying every project", () => {
    expect(featuredProjects.length).toBe(2);
    expect(featuredProjects.length).toBeLessThan(projects.length);
  });

  it("filters robotics separately from RF work", () => {
    expect(filterProjects("Robotics").map((project) => project.id)).toEqual(["neuromaker-robotic-hand"]);
    expect(filterProjects("RF & Wireless").map((project) => project.id)).toEqual(["rf-spectrum-wireless"]);
    expect(filterProjects("All projects")).toHaveLength(3);
  });

  it("gives every added skill a real project or experience destination", () => {
    const directory = getSkillDirectory();
    expect(directory.find((skill) => skill.name === "Python")?.destinations).toContainEqual({
      kind: "project", id: "rf-spectrum-wireless", title: "RF Spectrum Analysis & Wireless Communication",
    });
    expect(directory.find((skill) => skill.name === "AutoCAD")?.destinations).toContainEqual({
      kind: "experience", id: "kraft-project-engineering", title: "The Kraft Group / Gillette Stadium",
    });
    for (const skill of directory) {
      expect(skill.destinations.length).toBeGreaterThan(0);
      for (const destination of skill.destinations) {
        const exists = destination.kind === "project"
          ? projects.some((project) => project.id === destination.id)
          : experienceAdditions.some((experience) => experience.id === destination.id);
        expect(exists).toBe(true);
      }
    }
  });
});
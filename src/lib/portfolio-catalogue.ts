import { activeNoiseCancellationExpansion, experienceAdditions, projectAdditions } from "./portfolio-additions";

export const projects = [
  {
    id: "active-noise-cancellation",
    ...activeNoiseCancellationExpansion,
    date: null,
    status: null,
    image: null,
    repository: null,
  },
  ...projectAdditions,
] as const;

export const projectCategories = Array.from(new Set(projects.flatMap((project) => [...project.categories])));

export function filterProjects(category: string): typeof projects[number][] {
  return category === "All projects"
    ? [...projects]
    : projects.filter((project) => project.categories.some((item) => item === category));
}

export const featuredProjects = projects.filter((project) =>
  project.id === "active-noise-cancellation" || project.id === "rf-spectrum-wireless",
);

export type SkillDestination = {
  kind: "project" | "experience";
  id: string;
  title: string;
};

// UI resolves these IDs through typed router links once pages are created.
export function getSkillDirectory() {
  const skills = new Map<string, SkillDestination[]>();
  for (const project of projects) {
    for (const skill of project.skills) {
      const destinations = skills.get(skill) ?? [];
      destinations.push({ kind: "project", id: project.id, title: project.title });
      skills.set(skill, destinations);
    }
  }
  for (const experience of experienceAdditions) {
    for (const skill of experience.skills) {
      const destinations = skills.get(skill) ?? [];
      destinations.push({ kind: "experience", id: experience.id, title: experience.organization });
      skills.set(skill, destinations);
    }
  }
  return [...skills.entries()]
    .map(([name, destinations]) => ({ name, destinations }))
    .sort((a, b) => a.name.localeCompare(b.name));
}
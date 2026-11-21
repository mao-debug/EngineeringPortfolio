import { createFileRoute, Link } from "@tanstack/react-router";
import { filterProjects, projectCategories } from "@/lib/portfolio-catalogue";
import { missingInformationLabels } from "@/lib/portfolio-additions";
import { SiteHeader } from "@/components/portfolio/site-header";
import { SiteFooter } from "@/components/portfolio/site-footer";
import { SkillChips } from "@/components/portfolio/skill-chips";

const ALL = "All projects";

export const Route = createFileRoute("/projects")({
  validateSearch: (search: Record<string, unknown>) => ({
    category: typeof search["category"] === "string" ? search["category"] : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Projects — Simao Fernandes Andrade" },
      {
        name: "description",
        content:
          "Technical projects by Simao Fernandes Andrade: RF spectrum analysis, active noise cancellation, robotics and embedded systems.",
      },
      { property: "og:title", content: "Projects — Simao Fernandes Andrade" },
      {
        property: "og:description",
        content:
          "Technical projects: RF spectrum analysis, active noise cancellation, robotics and embedded systems.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const { category } = Route.useSearch();
  const active =
    category && (projectCategories as readonly string[]).includes(category) ? category : ALL;
  const visible = filterProjects(active);

  return (
    <div className="flex min-h-screen flex-col bg-background font-display text-foreground">
      <SiteHeader />
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-12 sm:px-6">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Projects</h1>
        <p className="mt-2 text-muted-foreground">
          Hardware, RF and embedded work — filter by discipline.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {[ALL, ...projectCategories].map((item) => (
            <Link
              key={item}
              to="/projects"
              search={{ category: item === ALL ? undefined : item }}
              className={`rounded-md border px-3 py-1.5 font-mono text-xs transition-colors ${
                active === item
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-muted-foreground hover:border-primary/50 hover:text-primary"
              }`}
            >
              {item}
            </Link>
          ))}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {visible.map((project) => (
            <Link
              key={project.id}
              to="/projects/$projectId"
              params={{ projectId: project.id }}
              search={{ category: undefined }}
              className="group flex flex-col rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/50"
            >
              <div className="flex flex-wrap gap-1.5">
                {project.categories.map((item) => (
                  <span
                    key={item}
                    className="rounded bg-secondary px-2 py-0.5 font-mono text-[11px] text-accent"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <h2 className="mt-3 text-lg font-semibold text-card-foreground group-hover:text-primary">
                {project.title}
              </h2>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{project.details[0]}</p>
              <p className="mt-3 font-mono text-[11px] text-muted-foreground/70">
                {project.date ?? missingInformationLabels.date}
                {" · "}
                {project.status ?? missingInformationLabels.status}
              </p>
              <div className="mt-3">
                <SkillChips skills={project.skills.slice(0, 6)} linked={false} />
              </div>
            </Link>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { projects } from "@/lib/portfolio-catalogue";
import { missingInformationLabels } from "@/lib/portfolio-additions";
import { SiteHeader } from "@/components/portfolio/site-header";
import { SiteFooter } from "@/components/portfolio/site-footer";
import { SkillChips } from "@/components/portfolio/skill-chips";

export const Route = createFileRoute("/projects_/$projectId")({
  loader: ({ params }) => {
    const project = projects.find((item) => item.id === params.projectId);
    if (!project) throw notFound();
    return project;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData ? `${loaderData.title} — Simao Fernandes Andrade` : "Project unavailable" },
      {
        name: "description",
        content: loaderData?.details[0] ?? "Project details are unavailable.",
      },
      {
        property: "og:title",
        content: loaderData ? `${loaderData.title} — Simao Fernandes Andrade` : "Project unavailable",
      },
      {
        property: "og:description",
        content: loaderData?.details[0] ?? "Project details are unavailable.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ProjectDetailPage,
});

function ProjectDetailPage() {
  const project = Route.useLoaderData();

  return (
    <div className="flex min-h-screen flex-col bg-background font-display text-foreground">
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-12 sm:px-6">
        <Link
          to="/projects"
          search={{ category: undefined }}
          className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="size-3.5" /> all projects
        </Link>

        <div className="mt-6 flex flex-wrap gap-1.5">
          {project.categories.map((category) => (
            <Link
              key={category}
              to="/projects"
              search={{ category }}
              className="rounded bg-secondary px-2 py-0.5 font-mono text-[11px] text-accent transition-colors hover:text-primary"
            >
              {category}
            </Link>
          ))}
        </div>

        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">{project.title}</h1>

        <dl className="mt-6 grid gap-3 rounded-lg border border-border bg-card p-4 font-mono text-xs sm:grid-cols-2">
          <div>
            <dt className="text-muted-foreground">date</dt>
            <dd className="mt-0.5 text-card-foreground">
              {project.date ?? missingInformationLabels.date}
            </dd>
          </div>
          <div>
            <dt className="text-muted-foreground">status</dt>
            <dd className="mt-0.5 text-card-foreground">
              {project.status ?? missingInformationLabels.status}
            </dd>
          </div>
          <div>
            <dt className="text-muted-foreground">repository</dt>
            <dd className="mt-0.5 text-card-foreground">
              {project.repository ?? missingInformationLabels.repository}
            </dd>
          </div>
          <div>
            <dt className="text-muted-foreground">measurements</dt>
            <dd className="mt-0.5 text-card-foreground">
              {project.measurements ?? missingInformationLabels.measurements}
            </dd>
          </div>
        </dl>

        <section className="mt-8">
          <h2 className="font-mono text-sm font-semibold uppercase tracking-widest text-primary">
            Technical details
          </h2>
          <ul className="mt-4 space-y-3">
            {project.details.map((detail) => (
              <li key={detail} className="flex gap-3 text-sm text-foreground/90">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                {detail}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="font-mono text-sm font-semibold uppercase tracking-widest text-primary">
            Skills used
          </h2>
          <div className="mt-4">
            <SkillChips skills={project.skills} />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

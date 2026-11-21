import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Github, Code2, Terminal } from "lucide-react";
import { featuredProjects } from "@/lib/portfolio-catalogue";
import { experienceAdditions, missingInformationLabels } from "@/lib/portfolio-additions";
import { profile, formatMonth } from "@/lib/portfolio-profile";
import { SiteHeader } from "@/components/portfolio/site-header";
import { SiteFooter } from "@/components/portfolio/site-footer";
import { SkillChips } from "@/components/portfolio/skill-chips";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Simao Fernandes Andrade — Engineering Portfolio" },
      {
        name: "description",
        content:
          "Engineering portfolio of Simao Fernandes Andrade: RF and wireless, embedded systems, robotics and automation projects plus industry experience.",
      },
      { property: "og:title", content: "Simao Fernandes Andrade — Engineering Portfolio" },
      {
        property: "og:description",
        content:
          "RF and wireless, embedded systems, robotics and automation projects plus industry experience.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="flex min-h-screen flex-col bg-background font-display text-foreground">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
          <div className="relative mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28">
            <p className="inline-flex items-center gap-2 rounded border border-border bg-card px-3 py-1 font-mono text-xs text-primary">
              <Terminal className="size-3.5" /> status: open_to_work
            </p>
            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl">
              {profile.name}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{profile.tagline}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/projects"
                search={{ category: undefined }}
                className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 font-mono text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                View projects <ArrowRight className="size-4" />
              </Link>
              <a
                href={profile.githubUrl ?? undefined}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2 font-mono text-sm text-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                <Github className="size-4" /> GitHub
              </a>
              <a
                href={profile.leetcodeUrl ?? undefined}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2 font-mono text-sm text-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                <Code2 className="size-4" /> LeetCode
              </a>
            </div>
          </div>
        </section>

        {/* Featured projects */}
        <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
          <div className="flex items-baseline justify-between">
            <h2 className="font-mono text-sm font-semibold uppercase tracking-widest text-primary">
              Featured projects
            </h2>
            <Link
              to="/projects"
              search={{ category: undefined }}
              className="font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              all projects →
            </Link>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {featuredProjects.map((project) => (
              <Link
                key={project.id}
                to="/projects/$projectId"
                params={{ projectId: project.id }}
                search={{ category: undefined }}
                className="group rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/50"
              >
                <div className="flex flex-wrap gap-1.5">
                  {project.categories.map((category) => (
                    <span
                      key={category}
                      className="rounded bg-secondary px-2 py-0.5 font-mono text-[11px] text-accent"
                    >
                      {category}
                    </span>
                  ))}
                </div>
                <h3 className="mt-3 text-lg font-semibold text-card-foreground group-hover:text-primary">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{project.details[0]}</p>
                <div className="mt-4">
                  <SkillChips skills={project.skills.slice(0, 5)} linked={false} />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Experience snapshot */}
        <section className="border-t border-border bg-card/40">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
            <div className="flex items-baseline justify-between">
              <h2 className="font-mono text-sm font-semibold uppercase tracking-widest text-primary">
                Experience
              </h2>
              <Link
                to="/experience"
                className="font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
              >
                full history →
              </Link>
            </div>
            <div className="mt-6 space-y-3">
              {experienceAdditions.map((job) => (
                <Link
                  key={job.id}
                  to="/experience/$experienceId"
                  params={{ experienceId: job.id }}
                  className="flex flex-col gap-1 rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/50 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <p className="font-semibold text-card-foreground">{job.role}</p>
                    <p className="text-sm text-muted-foreground">{job.organization}</p>
                  </div>
                  <p className="font-mono text-xs text-muted-foreground">
                    {formatMonth(job.start)} —{" "}
                    {job.end ? formatMonth(job.end) : missingInformationLabels.end}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

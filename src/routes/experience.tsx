import { createFileRoute, Link } from "@tanstack/react-router";
import { experienceAdditions, missingInformationLabels } from "@/lib/portfolio-additions";
import { formatMonth } from "@/lib/portfolio-profile";
import { SiteHeader } from "@/components/portfolio/site-header";
import { SiteFooter } from "@/components/portfolio/site-footer";
import { SkillChips } from "@/components/portfolio/skill-chips";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Simao Fernandes Andrade" },
      {
        name: "description",
        content:
          "Professional experience of Simao Fernandes Andrade: automation engineering at Takeda, project engineering at Gillette Stadium and project management at DPR Construction.",
      },
      { property: "og:title", content: "Experience — Simao Fernandes Andrade" },
      {
        property: "og:description",
        content:
          "Automation engineering at Takeda, project engineering at Gillette Stadium and project management at DPR Construction.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ExperiencePage,
});

function ExperiencePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background font-display text-foreground">
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-12 sm:px-6">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Experience</h1>
        <p className="mt-2 text-muted-foreground">
          Industry internships across pharmaceuticals, sports infrastructure and construction.
        </p>

        <div className="mt-8 space-y-4">
          {experienceAdditions.map((job) => (
            <Link
              key={job.id}
              to="/experience/$experienceId"
              params={{ experienceId: job.id }}
              className="group block rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/50"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h2 className="text-lg font-semibold text-card-foreground group-hover:text-primary">
                  {job.role}
                </h2>
                <p className="font-mono text-xs text-muted-foreground">
                  {formatMonth(job.start)} —{" "}
                  {job.end ? formatMonth(job.end) : missingInformationLabels.end}
                </p>
              </div>
              <p className="mt-1 text-sm text-accent">{job.organization}</p>
              {job.details.length > 0 && (
                <p className="mt-2 text-sm text-muted-foreground">{job.details[0]}</p>
              )}
              {job.skills.length > 0 && (
                <div className="mt-4">
                  <SkillChips skills={job.skills} linked={false} />
                </div>
              )}
            </Link>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

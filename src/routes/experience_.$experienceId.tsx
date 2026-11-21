import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { experienceAdditions, missingInformationLabels } from "@/lib/portfolio-additions";
import { formatMonth } from "@/lib/portfolio-profile";
import { SiteHeader } from "@/components/portfolio/site-header";
import { SiteFooter } from "@/components/portfolio/site-footer";
import { SkillChips } from "@/components/portfolio/skill-chips";

export const Route = createFileRoute("/experience_/$experienceId")({
  loader: ({ params }) => {
    const job = experienceAdditions.find((item) => item.id === params.experienceId);
    if (!job) throw notFound();
    return job;
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData
          ? `${loaderData.role} at ${loaderData.organization} — Simao Fernandes Andrade`
          : "Experience unavailable",
      },
      {
        name: "description",
        content: loaderData
          ? `${loaderData.role} at ${loaderData.organization}.`
          : "Experience details are unavailable.",
      },
      {
        property: "og:title",
        content: loaderData
          ? `${loaderData.role} at ${loaderData.organization} — Simao Fernandes Andrade`
          : "Experience unavailable",
      },
      {
        property: "og:description",
        content: loaderData
          ? `${loaderData.role} at ${loaderData.organization}.`
          : "Experience details are unavailable.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ExperienceDetailPage,
});

function ExperienceDetailPage() {
  const job = Route.useLoaderData();

  return (
    <div className="flex min-h-screen flex-col bg-background font-display text-foreground">
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-12 sm:px-6">
        <Link
          to="/experience"
          className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="size-3.5" /> all experience
        </Link>

        <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">{job.role}</h1>
        <p className="mt-2 text-lg text-accent">{job.organization}</p>
        <p className="mt-1 font-mono text-xs text-muted-foreground">
          {formatMonth(job.start)} — {job.end ? formatMonth(job.end) : missingInformationLabels.end}
        </p>

        {job.details.length > 0 ? (
          <section className="mt-8">
            <h2 className="font-mono text-sm font-semibold uppercase tracking-widest text-primary">
              What I worked on
            </h2>
            <ul className="mt-4 space-y-3">
              {job.details.map((detail) => (
                <li key={detail} className="flex gap-3 text-sm text-foreground/90">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                  {detail}
                </li>
              ))}
            </ul>
          </section>
        ) : (
          <p className="mt-8 rounded-lg border border-border bg-card p-4 text-sm text-muted-foreground">
            Role details pending confirmation.
          </p>
        )}

        {job.skills.length > 0 && (
          <section className="mt-8">
            <h2 className="font-mono text-sm font-semibold uppercase tracking-widest text-primary">
              Skills used
            </h2>
            <div className="mt-4">
              <SkillChips skills={job.skills} />
            </div>
          </section>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}

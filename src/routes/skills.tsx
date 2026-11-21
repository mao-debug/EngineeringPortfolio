import { createFileRoute, Link } from "@tanstack/react-router";
import { getSkillDirectory } from "@/lib/portfolio-catalogue";
import { SiteHeader } from "@/components/portfolio/site-header";
import { SiteFooter } from "@/components/portfolio/site-footer";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Simao Fernandes Andrade" },
      {
        name: "description",
        content:
          "Skill directory of Simao Fernandes Andrade, linking each skill to the projects and roles where it was applied.",
      },
      { property: "og:title", content: "Skills — Simao Fernandes Andrade" },
      {
        property: "og:description",
        content:
          "Skill directory linking each skill to the projects and roles where it was applied.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SkillsPage,
});

function SkillsPage() {
  const directory = getSkillDirectory();

  return (
    <div className="flex min-h-screen flex-col bg-background font-display text-foreground">
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-12 sm:px-6">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Skills</h1>
        <p className="mt-2 text-muted-foreground">
          Every skill links to the project or role where it was applied.
        </p>

        <div className="mt-8 space-y-3">
          {directory.map((entry) => (
            <div
              key={entry.name}
              className="rounded-lg border border-border bg-card p-4"
            >
              <h2 className="font-mono text-sm font-semibold text-primary">{entry.name}</h2>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {entry.destinations.map((destination) =>
                  destination.kind === "project" ? (
                    <Link
                      key={`${destination.kind}-${destination.id}`}
                      to="/projects/$projectId"
                      params={{ projectId: destination.id }}
                      search={{ category: undefined }}
                      className="rounded border border-border bg-secondary px-2 py-0.5 font-mono text-[11px] text-secondary-foreground transition-colors hover:border-primary/50 hover:text-primary"
                    >
                      {destination.title}
                    </Link>
                  ) : (
                    <Link
                      key={`${destination.kind}-${destination.id}`}
                      to="/experience/$experienceId"
                      params={{ experienceId: destination.id }}
                      className="rounded border border-border bg-secondary px-2 py-0.5 font-mono text-[11px] text-secondary-foreground transition-colors hover:border-primary/50 hover:text-primary"
                    >
                      {destination.title}
                    </Link>
                  ),
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

import { Github, Code2 } from "lucide-react";
import { profile, profileLinkLabels } from "@/lib/portfolio-profile";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <div className="flex items-center gap-4">
          {profile.githubUrl ? (
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              <Github className="size-4" /> GitHub
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground/60">
              <Github className="size-4" /> {profileLinkLabels.github}
            </span>
          )}
          {profile.leetcodeUrl ? (
            <a
              href={profile.leetcodeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              <Code2 className="size-4" /> LeetCode
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground/60">
              <Code2 className="size-4" /> {profileLinkLabels.leetcode}
            </span>
          )}
        </div>
      </div>
    </footer>
  );
}

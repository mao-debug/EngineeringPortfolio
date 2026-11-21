import { Link } from "@tanstack/react-router";

const chipClass =
  "rounded border border-border bg-secondary px-2 py-0.5 font-mono text-[11px] text-secondary-foreground";

// Cards that are themselves links must render chips as plain spans: nested
// anchors are invalid HTML and break hydration.
export function SkillChips({
  skills,
  linked = true,
}: {
  skills: readonly string[];
  linked?: boolean;
}) {
  if (skills.length === 0) return null;
  return (
    <div className="flex flex-wrap gap-1.5">
      {skills.map((skill) =>
        linked ? (
          <Link
            key={skill}
            to="/skills"
            className={`${chipClass} transition-colors hover:border-primary/50 hover:text-primary`}
          >
            {skill}
          </Link>
        ) : (
          <span key={skill} className={chipClass}>
            {skill}
          </span>
        ),
      )}
    </div>
  );
}

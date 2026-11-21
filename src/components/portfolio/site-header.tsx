import { Link } from "@tanstack/react-router";
import { profile } from "@/lib/portfolio-profile";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/experience", label: "Experience" },
  { to: "/skills", label: "Skills" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6">
        <Link
          to="/"
          className="font-mono text-sm font-semibold tracking-tight text-foreground"
        >
          <span className="text-primary">~/</span>
          {profile.name.split(" ")[0]?.toLowerCase()}
        </Link>
        <nav className="flex items-center gap-1 sm:gap-2">
          {navItems.map((item) =>
            item.to === "/projects" ? (
              <Link
                key={item.to}
                to="/projects"
                search={{ category: undefined }}
                className="rounded-md px-2 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-primary sm:px-3 sm:text-sm"
                activeProps={{ className: "text-primary" }}
              >
                {item.label}
              </Link>
            ) : (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-md px-2 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-primary sm:px-3 sm:text-sm"
                activeProps={{ className: "text-primary" }}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>
      </div>
    </header>
  );
}

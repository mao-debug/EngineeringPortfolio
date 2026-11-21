// Presentation-independent profile facts. Unconfirmed values stay null and are
// labeled explicitly wherever they are displayed.
export const profile = {
  name: "Simao Fernandes Andrade",
  tagline: "Electrical & computer engineering — RF, embedded systems and automation.",
  githubUrl: "https://github.com/mao-debug" as string | null,
  leetcodeUrl: "https://leetcode.com/u/mao-debug/" as string | null,
} as const;

export const profileLinkLabels = {
  github: "GitHub profile link pending",
  leetcode: "LeetCode profile link pending",
} as const;

// "2026-05" -> "May 2026"
export function formatMonth(value: string) {
  const [year, month] = value.split("-");
  const date = new Date(Number(year), Number(month) - 1, 1);
  return date.toLocaleString("en-US", { month: "short", year: "numeric" });
}

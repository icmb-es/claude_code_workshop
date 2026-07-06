// Rèplica de la font de veritat dels passos (ha de coincidir amb la de la web
// pública i amb les columnes de `workshop.participants`).

export type Step = {
  key: string;
  title: string;
  short: string; // etiqueta curta per a la capçalera de la taula
  optional?: boolean;
};

export const STEPS: Step[] = [
  // Parts essencials
  { key: "git", title: "git", short: "git" },
  { key: "node", title: "Node.js 20+", short: "Node" },
  { key: "claude_code", title: "Claude Code (instal·lació)", short: "Code" },
  { key: "claude_code_login", title: "Claude Code (login)", short: "Login" },
  { key: "repo_clone", title: "Clone del repo", short: "Repo" },
  // SuperDev
  { key: "claude_desktop", title: "Claude Desktop", short: "Desktop" },
  { key: "chrome_ext", title: "Claude in Chrome (extensió)", short: "Claude/Chr" },
  { key: "github_cli", title: "GitHub CLI", short: "gh" },
];

export const REQUIRED_STEPS = STEPS.filter((s) => !s.optional);

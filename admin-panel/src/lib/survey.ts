// Preguntes de l'enquesta inicial (rèplica de la web pública).

export type Question = { key: string; label: string; short: string };

export const SURVEY: Question[] = [
  { key: "q_claude_code", label: "Has treballat amb Claude Code?", short: "Claude Code" },
  { key: "q_cli", label: "Has treballat amb algun CLI d'IA?", short: "CLI d'IA" },
  { key: "q_vscode", label: "IA per programar amb VS Code?", short: "IA a VS Code" },
  { key: "q_chatgpt", label: "Has fet servir ChatGPT?", short: "ChatGPT" },
  { key: "q_ia_docs", label: "IA connectada a documents (Gmail, Excel…)?", short: "IA + docs" },
];

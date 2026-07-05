# STEP 0 — H1 · Benvinguda + configuració completa (60 min, 0:00–1:00)

> Notes per a les slides. Una hora sencera de configuració A PROPÒSIT: aquí es
> resolen els problemes d'entorn, no a mitja demo.

## Slides — Introducció al curs (15 min)

1. Presentació personal + **objectius del curs**: en acabar sabreu donar
   context a Claude, connectar-lo amb eines (MCP), construir amb ell,
   empaquetar coneixement (skills) i automatitzar.
2. Mini-història de la IA generativa: dels LLM autocompletadors al paradigma
   d'agents. El moment actual (2026).
3. L'app del curs: tour per pantalles. "No té backend: tot és localStorage.
   Aquesta tarda en tindrà, amb login corporatiu."

## Checklist — Instal·lació guiada (45 min)

| Eina | URL | Verificació |
|---|---|---|
| Node.js 20+ | <https://nodejs.org/en/download> | `node -v` |
| git | <https://git-scm.com/downloads> | `git -v` |
| Claude Code | <https://claude.com/product/claude-code> · `npm i -g @anthropic-ai/claude-code` | `claude --version` |
| Claude Desktop | <https://claude.ai/download> | login (per a Cowork + Design, H5) |
| GitHub CLI | <https://cli.github.com> | `gh auth status` |
| OpenSpec (opcional) | `npm i -g openspec` | `openspec --version` |

- Fork + clone: `gh repo fork marcbenito/claude_workshop_ensenyament --clone`
  → `cd app && npm install && npm run dev`.
- Chrome + extensió Claude in Chrome.
- Verificar que **`.env` i `.mcp.json` venen donats** (DATABASE_URL de la BD
  compartida, rol `reservas_app` només DML). No es configura res a mà.

⚠️ Instructor: mai el superusuari al repo; rotar contrasenya després del curs.

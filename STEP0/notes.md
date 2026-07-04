# STEP 0 — Presentació: la IA avui + instal·lació de l'entorn (40 min)

> Notes per a les slides del PowerPoint. Aquí s'hi va acumulant el contingut
> punt per punt; després es genera la presentació a partir d'aquest fitxer.

## Slides — 0.1 D'on venim i on som (12 min)

1. **Presentació personal** — qui soc, a què em dedico, per què aquest curs.
2. **Mini-història de la IA generativa**
   - Dels models de llenguatge com a "autocompletadors" (GPT-2/3, primers copilots)…
   - …als models conversacionals (ChatGPT, Claude)…
   - …al **paradigma d'agents**: models que llegeixen fitxers, planifiquen i executen eines.
3. **El moment actual (2026)**
   - L'assistent que suggereix una línia → l'agent que resol una issue sencera.
   - Codi assistit vs codi delegat: el rol de l'enginyer canvia (especificar i verificar).
4. **L'arc del dia** (teaser de la història): partim d'una app sense backend i
   acabarem amb un sistema que es crea les seves pròpies issues i les resol sol.
5. **L'app del curs**: reserva de sessions de treball (Next.js + TS + Tailwind).
   Captures de login, dashboard i stepper de reserva. "No té backend: tot és
   localStorage. Al bloc 3 això canvia."

## Slides — 0.2 Instal·lació (28 min, checklist en directe)

Una slide amb la checklist i les **URLs oficials de descàrrega** (posar-les
també al xat de la sessió perquè es puguin clicar):

| Eina | URL de descàrrega/instal·lació | Verificació |
|---|---|---|
| **Node.js 20+** | <https://nodejs.org/en/download> | `node -v` |
| **git** | <https://git-scm.com/downloads> | `git -v` |
| **GitHub CLI** | <https://cli.github.com> | `gh auth login` → `gh auth status` |
| **Claude Code** | <https://claude.com/product/claude-code> · o bé `npm install -g @anthropic-ai/claude-code` (docs: <https://code.claude.com/docs>) | `claude --version` |
| **Claude Desktop** | <https://claude.ai/download> (macOS/Windows) | obrir l'app i iniciar sessió |
| **OpenSpec CLI** | `npm i -g openspec` | `openspec --version` |

Notes per a la slide:
- Cal **compte de Claude (Pro o Max)** — el mateix login serveix per a Claude
  Code (terminal) i Claude Desktop (app d'escriptori).
- **Per què tots dos?** Claude Code és l'eina principal del curs; Claude
  Desktop es fa servir per a Claude Design (STEP2) i per veure la cara "de
  producte" de Claude.

Resta de la checklist:

- Fork de `github.com/marcbenito/claude_workshop_ensenyament` + clone + `npm run dev`
- Compte de Vercel (vinculat a GitHub): <https://vercel.com/signup>
- Chrome + extensió Claude in Chrome

Nota per a la slide: "curs online → no hi ha pla B d'entorn; qui es quedi
encallat segueix la demo i es re-enganxa amb les branques de checkpoint".

## Material / pendents

- [ ] Captures de pantalla de l'app per a les slides.
- [ ] Línia de temps de la IA (imatge).

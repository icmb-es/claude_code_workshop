# STEP 2 — MCP: Chrome DevTools, Claude Design i landing (45 min)

> Notes per a slides + guió de les demos. Detall complet al guió
> (`claude_workshop_ensenyament/workshop/docs/guio-curs.md`).

## Slides — 2.1 Què és MCP (5 min)

- Protocol estàndard per connectar Claude amb eines externes.
- Config: `.mcp.json` (compartida al repo) o `claude mcp add`.
- Diagrama per a slide: Claude Code ⟷ servidor MCP ⟷ eina (navegador, Figma…).

## Demo — 2.2 Caçar un bug amb el MCP de Chrome (18 min)

- `git checkout 02-bug-chrome` — bug preparat: en seleccionar franja, error a
  consola i la reserva no es crea (p. ex. `slot.hora` arriba `undefined`).
- Reproduir-lo a mà primer: *sembla que "no fa res"*.
- Prompt:
  > «A la pàgina de reservar, quan selecciono una franja i confirmo, no es crea
  > la reserva. Obre l'app al navegador, reprodueix el problema, llegeix la
  > consola i les peticions, troba la causa i arregla-la.»
- Moment wow: navega, llegeix la consola, arregla i **re-verifica al navegador**.
- Pla B: branca `02-bug-chrome-solucio`.

## Demo — 2.3 Design system amb Claude Design (8 min)

- **Claude Design** = canvas visual (claude.ai/design, Anthropic Labs).
- `/design-sync` a Claude Code (bidireccional): importar la component library
  real (`src/components/ui/`) al canvas.
- Missatge: el que es dissenyi al canvas usarà els components DE VERITAT.

## Demo — 2.4 Landing amb Claude Design (14 min)

- Al xat del canvas:
  > «Dissenya una landing page per a l'app de reserva de sessions de treball:
  > hero, beneficis, llista de professors destacats i CTA cap al registre.
  > Distintiva i moderna, no genèrica.»
- Iterar en directe (comentaris inline, arrossegar, colors) — el moment més
  visual del matí.
- Handoff a codi: `/design-sync` (aprovació de pla → implementa a `/`).
- ⚠️ La landing és matèria primera del SEO (STEP4) i del vídeo de Remotion.
- Pla B (sense accés a Claude Design): skill `frontend-design` (oficial
  d'Anthropic, marketplace `claude-plugins-official`).
- Checkpoint: `02-landing`.

## Models i effort d'aquest STEP

| Tasca | Model | Effort |
|---|---|---|
| 2.2 Bug amb MCP de Chrome | Sonnet | high |
| 2.3 /design-sync (pull) | Sonnet | low |
| 2.4 Landing (handoff a codi) | Opus | medium |

## Material / pendents

- [ ] Implementar el bug a la branca `02-bug-chrome` (+ branca solució).
- [ ] `.mcp.json` amb el servidor de Chrome DevTools al repo del curs.
- [ ] Projecte creat a claude.ai/design i `/design-sync` provat en les dues direccions.

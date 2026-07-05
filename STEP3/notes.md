# STEP 2 — H3a · MCPs: els ulls de Claude (40 min, 2:00–2:40)

> Dos parells d'ulls: el navegador i la base de dades. Tots dos es fan servir
> per construir a H3b.

## Slides — 3.1 Què és MCP (5 min — PowerPoint)

1. **El problema**: cada eina amb la seva integració a mida — N models × M
   eines = explosió d'integracions.
2. **MCP (Model Context Protocol)**: estàndard obert d'Anthropic (nov. 2024),
   adoptat per tota la indústria — "el USB-C dels agents".
   - Un **servidor MCP** exposa *tools* (accions) i *resources* (dades).
   - Qualsevol **client** (Claude Code, Claude Desktop, Cowork…) s'hi connecta
     de la mateixa manera.
3. **Diagrama** (slide central): Claude ⟷ client MCP ⟷ servidor MCP ⟷ eina
   (navegador, BD, Figma, Slack, GitHub…).
4. **On es configura**:
   - `.mcp.json` al repo → compartit amb l'equip (el nostre cas: ve donat);
   - `claude mcp add` → personal;
   - connectors a Claude Desktop → per a Cowork (H5a).
5. **Seguretat** (1 frase): un MCP té el poder que li donis — per això el de
   Postgres va amb el rol de mínims privilegis.
6. **El que ve ara**: dos servidors ja configurats — Chrome DevTools (ulls al
   navegador) i Postgres (ulls a la BD).

## Demo — 3.2 Ulls al navegador: cas de rendiment (18 min)

- `git checkout 02-perf`: problema preparat (imatge enorme sense optimitzar +
  re-render continu per `setInterval`). L'app va lenta.
- Prompt:
  > «L'app va lenta. Obre-la al navegador, mira el rendiment (network, traces,
  > re-renders), troba les causes i arregla-les. Verifica la millora.»
- Moment wow: llegeix mètriques reals, arregla, torna a mesurar.
- Pla B: `02-perf-solucio`.

## Demo — 3.3 Ulls a la BD: Postgres per MCP (17 min)

- Obrir `.mcp.json`: el servidor de Postgres amb el string JA posat
  (BD compartida, rol `reservas_app`).
- Prompts:
  > «Quines taules hi ha? Ensenya'm l'esquema de reservations i explica'm la
  > regla de l'índex únic. Quants professors i quines franges existeixen?»
- Missatge: Claude no s'imagina l'esquema — el llegeix. Prepara H3b.
- Aparta: per què `reservas_app` no pot fer DROP TABLE (mínims privilegis).

## Models i effort

| Tasca | Model | Effort |
|---|---|---|
| 3.2 Rendiment amb Chrome | Sonnet | high |
| 3.3 Postgres per MCP | Sonnet | low |

## Material / pendents

- [ ] Implementar el problema de rendiment a `02-perf` (+ solució) i assajar-lo.
- [ ] `.mcp.json` amb chrome-devtools + postgres (string de `reservas_app`).
- [ ] Aplicar els 4 scripts de `bd/` a la BD de proves.

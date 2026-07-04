# STEP 6 — Mòdul extra: OpenSpec, spec-driven development (15 min)

> Mòdul autònom, fora de la narrativa principal. Mentre corre, a la màquina de
> l'instructor el `/goal` del STEP5 continua resolent issues tot sol.
> Si el temps no arriba: material per a casa (branca `06-openspec`).

## Slides — El concepte (3 min)

- La narrativa del dia ha estat **operativa**: issues = feina que arriba.
- OpenSpec és la manera **de producte**: spec = feina pensada abans de construir.
- Amb spec-driven, primer s'escriu el contracte complet (requisits, casos
  límit, criteris) i les tasks se'n deriven.
- Quan compensa: features grans, equips, projectes greenfield.

## Demo — Hands-on (10 min)

- `openspec init` (la CLI ja s'ha instal·lat al STEP0).
- Prompt:
  > «Crea una proposta OpenSpec per a "valoracions": els usuaris poden valorar
  > amb 1-5 estrelles i comentari les sessions completades; nova taula a la BD,
  > endpoints GET/POST a `/api/ratings`, i mitjana de valoracions a la targeta
  > del professor. Desglossa-la en tasks petites i verificables.»
- Revisar l'spec junts — el moment "aha": tot el context escrit ABANS de tocar codi.
- Implementar la primera task guiada.

## El pont (2 min)

- Les tasks d'OpenSpec també poden alimentar un `/goal`: el mateix patró autònom
  del STEP5 amb l'spec com a font de veritat.
- Qui vulgui, ho té complet a la branca `06-openspec`.

## Models i effort d'aquest STEP

| Tasca | Model | Effort |
|---|---|---|
| Crear l'spec OpenSpec | Fable | high |
| Implementar la 1a task | Sonnet | medium |

## Material / pendents

- [ ] Assajar l'spec de "valoracions".
- [ ] Branca `06-openspec` completa (també com a material per a casa).

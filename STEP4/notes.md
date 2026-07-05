# STEP 4 — H4 · Skills i Hooks: empaquetar i obligar (30 min, 3:35–4:05)

> Crear-ne dues, instal·lar-ne una de tercers — i cada alumne se'n va amb un
> vídeo fet.

## Demo — 4.1 Skill de tests + agents (10 min)

- Concepte + anatomia: `.claude/skills/tests/SKILL.md`.
  > «/tests — cobreix l'API de reserves (crear, llistar, cancel·lar,
  > solapament → 409) i l'auth (registre, login bo i dolent, ruta protegida).»
- Agents: `test-writer.md` (Sonnet, medium) i `test-verifier.md` (Haiku, low)
  — context propi, paral·lel, model al frontmatter.

## Demo — 4.2 Skill /ship (6 min)

- branca → lint → tests → commit convencional → push → PR (`gh pr create`).
  > «/ship el backend amb el login»
- Checkpoint: `04-skills`.

## Demo — 4.3 Hooks: quan persuadir no és suficient (6 min)

- L'arc de H2 es tanca: **CLAUDE.md persuadeix; el hook obliga** (l'executa el
  harness, no el model).
- Afegir en directe a `.claude/settings.json` un hook **PostToolUse** que passa
  el lint després de cada edició i bloqueja si falla.
- Demo determinista: demanar un canvi amb error de lint → el hook salta sol →
  Claude corregeix sense que ningú l'hi demani.
- Mencionar PreToolUse (vetar edicions a `src/lib/data/` — la zona prohibida
  com a llei) i els permisos allow/deny.
- Pont: aquest hook + allowlist = el que fa segur el /goal de H5b.

## Demo — 4.4 skills.sh + el teu vídeo amb Remotion (8 min)

- Presentar skills.sh: pròpies al repo, de tercers descarregades:
  `npx skills add <ref-remotion>`.
- **Cada alumne genera el seu vídeo**:
  > «/remotion — vídeo promocional de 15 segons de l'app: logo, 3 captures amb
  > transicions i CTA final.»
- El render corre en segon pla → es reprodueixen al tancament.

## Models i effort

| Tasca | Model | Effort |
|---|---|---|
| 4.1 Skill tests | Sonnet | medium |
| 4.2 /ship | Haiku | low |
| 4.3 Demo del hook | Sonnet | low |
| 4.4 Remotion | Sonnet | medium |

## Material / pendents

- [ ] Skills `tests` i `ship` + 2 agents escrits i assajats (branca `04-skills`).
- [ ] Ref exacta de skills.sh per a Remotion + vídeo pre-renderitzat (pla B).

# STEP 6 — H5b · Automatització final (25 min, 4:30–4:55)

> El clímax: loop → issues que es creen soles → /goal. Demo guiada per
> l'instructor; qui vulgui replica.

## Concepte — git worktree (1 min, abans del loop)

- Normalment: 1 repo = 1 còpia de treball; `git checkout` reescriu els fitxers.
- Un **worktree** = diverses còpies de treball del mateix repo alhora, cada una
  en una carpeta i branca diferents, compartint el mateix `.git`:
  - `git worktree add ../reserves-loop feature-x`
  - `git worktree list` · `git worktree remove ../reserves-loop`
- Per què aquí: deixar un **agent/loop treballant sol en un worktree** mentre tu
  continues a la teva carpeta, sense conflictes. Ultracode fa servir worktrees
  per aïllar agents que editen en **paral·lel**. També és alternativa neta al
  `git stash` per provar un checkpoint sense perdre feina.

## Demo — 5b.1 Issues + loop (9 min)

- 2 issues del gist: «PATCH /api/reservations/:id per reprogramar + UI» i
  «empty state al dashboard». GitHub Project.
  > «Llista les issues obertes amb gh issue list. Agafa la més antiga,
  > implementa-la complint els criteris, passa lint i tests, i obre una PR amb
  > /ship que la tanqui. Continua amb la següent.»
- Mentre corre: allowlist a `.claude/settings.json`, hook de lint, els tests
  de H4 com a xarxa.

## Demo — 5b.2 Ultracode: issues que es creen soles (6 min — instructor)

> «ultracode: audita l'app buscant bugs i accessibilitat; verifica cada
> troballa adversarialment i obre una issue amb gh issue create per cada
> confirmada, amb criteris d'acceptació i etiqueta 'auto'.»

## Demo — 5b.3 /goal (6 min — instructor)

> /goal no queda cap issue oberta amb l'etiqueta 'auto', tots els tests passen
> i el lint surt net — o para després de 10 torns

- Es deixa corrent fins al tancament. Loop = pareu vosaltres; /goal = para el
  sistema. Menció: /schedule (el mateix, al cloud amb calendari).
- Requereix Claude Code v2.1.139+. Pla B: `06-autobuild`.

## Demo — 5b.4 OpenSpec (4 min — instructor)

- `openspec init` + proposta "valoracions" desglossada en tasks; el pont amb
  /goal. Complet a `06-openspec` (material per a casa).

## Models i effort

| Tasca | Model | Effort |
|---|---|---|
| 5b.1 Loop | Sonnet | medium |
| 5b.2 Ultracode | Fable | high |
| 5b.3 /goal | Opus | high |
| 5b.4 OpenSpec | Fable | high |

## Material / pendents

- [ ] Gist amb les 2 issues; settings.json amb allowlist + hook.
- [ ] Assajar ultracode → /goal cronometrat (~25 min). Branca `06-autobuild`.
- [ ] Branca `06-openspec` completa.

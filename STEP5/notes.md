# STEP 5 — Automatització: del loop supervisat a les issues que es creen soles (55 min)

> El clímax de la història, per graons: issue supervisada → loop → issues que
> es creen soles → `/goal` autònom. Amb Vercel ja connectat, cada merge
> acaba a producció.

## Demo — 5.1 GitHub Issues + Projects (10 min)

- Cada alumne crea 3 issues ben escrites (text preparat en un gist):
  1. Endpoint `DELETE /api/reservations/:id` + botó cancel·lar amb confirmació
     *(si el DELETE ja va sortir al 3.1 → canviar per `PATCH` de reprogramar)*.
  2. `GET /api/professors/:id/slots` amb disponibilitat real + usar-lo al stepper.
  3. Empty state amb il·lustració al dashboard.
- GitHub Project (Todo / In progress / Done).
- Missatge: **la qualitat de la issue determina la qualitat del resultat**
  (criteris d'acceptació + "amb tests").

## Demo — 5.2 L'agent que buida el backlog (18 min)

> «Llista les issues obertes amb `gh issue list`. Agafa la més antiga, mou-la a
> In progress al Project, crea una branca, implementa-la complint els criteris
> d'acceptació, passa lint i tests, i obre una PR amb /ship que tanqui la issue.
> Després continua amb la següent. Fes-ne 3 i para.»

- Mentre corre: supervisió, quan interrompre, permisos autònoms, i per què els
  tests del STEP3 són la xarxa de seguretat.
- En mergear una PR → Vercel desplega sol (cercle del STEP4).
- Checkpoint: `05-issues-loop`.

## Demo — 5.3 Ultracode: l'auditoria que crea issues sola (10 min — instructor)

> «ultracode: audita tota l'app, frontend i API, buscant bugs, problemes
> d'accessibilitat i codi mort. Verifica cada troballa adversarialment, i per
> cada troballa confirmada obre una issue amb `gh issue create`, amb criteris
> d'acceptació clars i l'etiqueta `auto`.»

- Explicar el patró: fan-out de finders → verificadors adversarials → síntesi.
- Seguiment amb `/workflows`; comparar amb `/code-review` single-agent.
- En acabar: **el backlog té issues que cap humà ha escrit**.

## Demo — 5.4 `/goal`: el sistema es construeix sol (12 min — instructor)

- `/goal` = condició de finalització verificable; un avaluador comprova cada
  torn si s'ha complert. Diferència amb el 5.2: **para el sistema, no l'humà**.
- Requereix Claude Code v2.1.139+.

> `/goal no queda cap issue oberta amb l'etiqueta 'auto', tots els tests passen
> i el lint surt net — o para després de 15 torns`

- Prompt de treball: «Agafa la issue oberta amb etiqueta `auto` més antiga,
  implementa-la complint els criteris d'acceptació, verifica amb lint i tests,
  commiteja i tanca la issue. Continua amb la següent.»
- Les 4 peces que ho fan possible (slide): tests (STEP3) + allowlist de permisos
  a `.claude/settings.json` + hook post-edit de lint + issues etiquetades (5.3).
- Es llança en branca dedicada i corre durant el STEP6; es revisa al tancament.
- Pla B: branca `05-autobuild`.

## Demo — 5.5 Routine programada (5 min — instructor)

> «Cada dia laborable a les 9:00, revisa les PRs obertes del repo, comenta-hi
> suggeriments i envia'm un resum.»

- `/schedule` = el mateix concepte que `/goal`, però al cloud i amb calendari.

## Models i effort d'aquest STEP

| Tasca | Model | Effort |
|---|---|---|
| 5.1 Crear issues | Haiku | low |
| 5.2 Loop supervisat | Sonnet | medium |
| 5.3 Ultracode | Fable | high |
| 5.4 /goal autònom | Opus | high |
| 5.5 Routine | (cloud, per defecte) | medium |

## Material / pendents

- [ ] Gist amb el text de les 3 issues.
- [ ] `.claude/settings.json` amb allowlist (npm test, lint, git, gh) + hook de lint.
- [ ] Assajar 5.3 + 5.4 de cap a cap i cronometrar (~20 min fins al tancament).
- [ ] Branca `05-autobuild` amb el resultat (pla B).

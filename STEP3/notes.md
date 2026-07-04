# STEP 3 — Muntar el backend + skills de tests i ship (60 min)

> El mòdul estrella: l'app deixa de ser mock. Just després del descans.

## Demo — 3.1 Backend amb mode pla (28 min)

- Context: `bd/` ja té l'esquema SQL (Postgres) i la capa de serveis està aïllada.
- **En mode pla** (insistir: tasca gran = SEMPRE mode pla):
  > «Aquesta app no té backend: tot és mock a localStorage. Munta'l amb Node
  > aprofitant Next.js:
  > 1. Crea route handlers a `app/src/app/api/` per a reserves (GET/POST/DELETE)
  >    i professors (GET).
  > 2. Fes servir SQLite (better-sqlite3) com a BD local, creant esquema i seed
  >    a partir dels SQL de `bd/` (adapta'ls de Postgres si cal).
  > 3. Migra la capa de serveis de `src/lib/services/` a fetch, sense tocar UI.
  > 4. Verifica-ho arrencant l'app i creant una reserva.»
- Ensenyar a **negociar el pla** abans d'aprovar ("no toquis auth", "mantén types.ts").
- Verificació estrella: crear reserva → mode incògnit → **persisteix** (abans no).
- Nota tècnica: SQLite no va al serverless de Vercel → camí a producció al STEP4.
- Pla B: branca `03-backend`.

## Demo — 3.2 Skill de tests + agents de test (22 min)

- **Aquí s'introdueix el concepte de skill** (primera skill del curs):
  coneixement empaquetat a `.claude/skills/`, viatja amb el repo.
- Anatomia: `SKILL.md` amb frontmatter (`name`, `description`) + instruccions.
- La skill sap les convencions per testejar els endpoints (Vitest ja ve del
  STEP1; SQLite en memòria, fixtures de professors).
  > «/tests — cobreix l'API de reserves: crear, llistar, cancel·lar i el
  > conflicte de solapament (ha de retornar 409).»
- **Agents propis**: `.claude/agents/test-writer.md` (només Read/Write/Bash) i
  `test-verifier.md` (executa i critica cobertura).
  > «Fes servir els agents de test per cobrir l'endpoint de professors i
  > verificar la cobertura.»
- Missatge: els agents tenen context propi i corren en paral·lel.
- Checkpoint: `03-skill-tests`.

## Demo — 3.3 Skill /ship (10 min)

- `.claude/skills/ship/SKILL.md`: branca → lint → tests → commit convencional →
  push → PR amb `gh pr create`.
  > «/ship el backend nou»
- Cada alumne acaba amb una PR real al seu fork. Checkpoint: `03-skill-ship`.

## Models i effort d'aquest STEP

| Tasca | Model | Effort |
|---|---|---|
| 3.1 Muntar el backend | **Fable** | **high** |
| 3.2 Skill de tests | Sonnet | medium |
| 3.2 Agent test-writer | Sonnet (frontmatter) | medium |
| 3.2 Agent test-verifier | Haiku (frontmatter) | low |
| 3.3 /ship | Haiku | low |

## Material / pendents

- [ ] Assajar el prompt del backend 2-3 cops de zero i cronometrar-lo.
- [ ] Pla B si better-sqlite3 falla en compilar: `libsql` / `sql.js`.
- [ ] Escriure les skills `tests` i `ship` + els 2 agents (branques 03-*, i a `main`).

# Curs de Claude Code — Guió (5 hores, hands-on, online)

**App base:** "Reserva de Sessions de Treball" (Next.js + TS + Tailwind, persistència mock a `localStorage`).
**Format:** hands-on complet i **online** — cada alumne clona el repo i executa els exercicis des de casa. **Tot ve configurat**: `.env` amb el `DATABASE_URL` de la BD de proves compartida (rol `reservas_app`, només DML), el connector `pg` a `app/src/lib/db.ts` i el `mcp.json` preparat.
**Nivell:** iniciació (zero o gairebé zero amb Claude Code).
**Checkpoints:** una branca per punt; si una demo falla o algú es perd, `git checkout <branca>` i seguim.

**Fil conductor (la història del dia):** entenem l'eina i com donar-li **context** (2); amb el context i l'esquema al repo, **construïm** amb Plan Mode: backend real i login corporatiu (3); connectem **eines externes amb MCP** per veure i verificar el sistema viu — navegador i base de dades (4); empaquetem el coneixement en **skills, hooks i agents** (5); veiem la cara de **producte** amb Claude Design i Cowork (6); i tanquem amb la **IA autònoma**: el loop, les issues que es creen soles i el `/goal` que treballa sol mentre acabem (7).

---

## Els 7 punts del curs

1. **Introducció** — la IA avui + posada en marxa de l'entorn.
2. **Claude Code: comandes i context** — l'eina i la idea central del dia.
3. **Construir i Plan Mode** — backend real + login corporatiu.
4. **MCPs** — connectar Claude amb el món: navegador i base de dades.
5. **Skills, Hooks i Agents** — empaquetar coneixement i imposar regles.
6. **Claude Design i Cowork** — la cara de producte, fora del terminal.
7. **IA autònoma** — loop, issues que es creen soles, `/goal` i OpenSpec.

---

## Horari general (5 hores)

| Hora | Punt | Durada |
|---|---|---|
| 0:00 – 1:00 | **1 · Introducció** (amb marge per a problemes d'entorn) | 60 min |
| 1:00 – 2:00 | **2 · Claude Code: comandes i context** | 60 min |
| 2:00 – 2:40 | **3 · Construir i Plan Mode** (backend + login) | 40 min |
| 2:40 – 2:55 | ☕ Descans | 15 min |
| 2:55 – 3:35 | **4 · MCPs** (Chrome DevTools + Postgres) | 40 min |
| 3:35 – 4:05 | **5 · Skills, Hooks i Agents** | 30 min |
| 4:05 – 4:30 | **6 · Claude Design i Cowork** | 25 min |
| 4:30 – 4:55 | **7 · IA autònoma** (loop, ultracode, /goal, OpenSpec) | 25 min |
| 4:55 – 5:00 | Tancament: revisió del `/goal` i comiat | 5 min |

### Desglossament: temps a dedicar per mòdul

| Punt | Mòdul | Temps |
|---|---|---|
| **1** (60') | 1.1 Introducció al curs (PowerPoint) | 15 min |
| | 1.2 Instal·lació i configuració guiada | 45 min |
| **2** (60') | 2.1 L'estat dels models (PowerPoint) | 5 min |
| | 2.2 Primer contacte i comandes essencials | 10 min |
| | 2.3 CLAUDE.md (toggle): esborrar un professor sense/amb context | 15 min |
| | 2.4 El context, a fons (permanent / puntual / conversa) | 15 min |
| | 2.5 Edita una feature + comparativa de models | 15 min |
| **3** (40') | 3.1 Completar el backend de reserves (Plan Mode + Opus) | 25 min |
| | 3.2 Canviar el flux de reserva (Plan Mode) | 15 min |
| ☕ | Descans | 15 min |
| **4** (40') | 4.1 Què és MCP (PowerPoint) | 5 min |
| | 4.2 Ulls al navegador: rendiment amb Chrome DevTools | 18 min |
| | 4.3 Ulls a la BD: Postgres per MCP (verificació) | 17 min |
| **5** (30') | 5.1 Crear la skill de tests | 8 min |
| | 5.2 Agents propis (test-writer / test-verifier) | 7 min |
| | 5.3 Skill `/ship` | 5 min |
| | 5.4 Hooks: quan persuadir no és suficient | 5 min |
| | 5.5 skills.sh + el teu vídeo amb Remotion | 5 min |
| **6** (25') | 6.1 Claude Design: la landing | 15 min |
| | 6.2 Claude Cowork: correu + PDF (demo) | 10 min |
| **7** (25') | 7.1 Issues + el loop | 9 min |
| | 7.2 Ultracode: issues que es creen soles (demo) | 6 min |
| | 7.3 `/goal`: el tancament autònom (demo) | 6 min |
| | 7.4 OpenSpec (demo) | 4 min |
| **Final** (5') | Tancament: `/goal` + vídeos de Remotion + recap | 5 min |
| | **Total** | **300 min** |

---

## Estructura de branques del repo

| Branca | Contingut |
|---|---|
| `main` | Estadi 0: app funcional (mock) + Vitest net (`vitest run`) + connector `pg` a `app/src/lib/db.ts` (sense usar) + `docs/prd.md` + `.env` i `mcp.json` (inactiu) + **CLAUDE.md superútil camuflat com `informacion-extra.ts`** (s'activa al punt 2 amb `mv informacion-extra.ts CLAUDE.md`) |
| `01-fonaments-final` | Punt 2: `CLAUDE.md` enriquit + filtre per professor |
| `02-backend-base` | **Punt 3 START**: tot el backend muntat (professors, franges, auth, repositoris + mappers, connectats a Postgres) **EXCEPTE els 2 route handlers de reserves** → les reserves fallen, la resta funciona |
| `02-backend` | Punt 3.1 resultat: + els dos route handlers de `api/reservations/` (les reserves funcionen; 409 en viu) |
| `02-flux` | Punt 3.2 resultat: flux invertit (professor → buits reals) + endpoint de disponibilitat |
| `03-perf` / `03-perf-solucio` | Punt 4: **problema de rendiment intencionat** per al MCP de Chrome / arreglat |
| `04-skills` | Punt 5: skills `tests` i `ship` + agents + hook de lint + tests d'API i auth |
| `05-landing` | Punt 6: landing amb Claude Design (`/design-sync`) |
| `06-autobuild` | Punt 7: resultat del `/goal` sobre les issues auto-creades (pla B) |
| `06-openspec` | Punt 7: feature "valoracions" spec-driven amb OpenSpec (demo / casa) |
| `07-final` | Estat final: tot integrat |
| `extra/deploy-vercel` · `extra/seo` | Material per a casa: deploy a Vercel / anàlisi SEO |

Regla d'or: **abans de cada punt**, qui vagi perdut fa `git stash && git checkout <branca-anterior>`.

---

## Models i effort per mòdul

Criteri que el curs transmet: **Haiku** per a feina mecànica, **Sonnet** per al dia a dia, **Opus** per a descobriment i autonomia fiable, **Fable** per a orquestració i pensar producte. L'**effort** es puja només quan hi ha raonament llarg. Es canvia amb `/model`; els agents propis el fixen al frontmatter.

| Mòdul | Tasca | Model | Effort |
|---|---|---|---|
| 2.3 | Demo CLAUDE.md | Sonnet | medium |
| 2.5 | Comparativa de models | els 4 | medium (fix) |
| 3.1 | **Reserves (2 route handlers)** | **Opus** | **high** |
| 3.2 | Canviar el flux de reserva | Sonnet | medium |
| 4.2 | Rendiment amb MCP de Chrome | Sonnet | high |
| 4.3 | Postgres per MCP (verificació) | Sonnet | low |
| 5.1 | Skill de tests | Sonnet | medium |
| 5.2 | Agents test-writer / test-verifier | Sonnet / Haiku | medium / low |
| 5.3 | `/ship` | Haiku | low |
| 5.4 | Demo del hook de lint | Sonnet | low |
| 5.5 | Vídeo Remotion | Sonnet | medium |
| 6.1 | Landing (handoff a codi) | Opus | medium |
| 7.1 | Loop d'issues | Sonnet | medium |
| 7.2 | Ultracode (auditoria → issues) | Fable | high |
| 7.3 | `/goal` autònom | Opus | high |
| 7.4 | OpenSpec | Fable | high |

---

## Punt 1 — Introducció (60 min, 0:00 – 1:00)

**Objectiu:** situar el moment i deixar l'entorn 100% operatiu. L'hora sencera és a propòsit: **segur que hi haurà problemes** i aquí és on es resolen, no a mitja demo. Suport: PowerPoint (notes a `STEP0/`).

### 1.1 Introducció al curs (15 min — PowerPoint)
1. Presentació personal + **objectius del curs** (què sabreu fer a les 5 hores: donar context, construir, connectar eines, empaquetar, automatitzar).
2. Mini-història de la IA generativa: dels LLM autocompletadors al paradigma d'agents. El moment actual.
3. L'app del curs: tour per les pantalles. **No té backend** (tot a `localStorage`) — aquesta tarda en tindrà, amb login corporatiu inclòs.

### 1.2 Instal·lació i configuració guiada (45 min)
Checklist amb URLs al xat; es verifica persona a persona:

- [ ] **Node.js 20+** — [nodejs.org/en/download](https://nodejs.org/en/download) → `node -v`.
- [ ] **git** — [git-scm.com/downloads](https://git-scm.com/downloads) → `git -v`.
- [ ] **Claude Code** — [claude.com/product/claude-code](https://claude.com/product/claude-code) o `npm install -g @anthropic-ai/claude-code` → `claude --version`. Cal **compte de Claude (Pro o Max)**.
- [ ] **Claude Desktop** — [claude.ai/download](https://claude.ai/download) (mateix login; l'usarem per a **Cowork i Claude Design** al punt 6).
- [ ] **GitHub CLI** — [cli.github.com](https://cli.github.com) → `gh auth login` → `gh auth status`.
- [ ] **Fork + clone del repo**:
  ```bash
  gh repo fork marcbenito/claude_workshop_ensenyament --clone
  cd claude_workshop_ensenyament/app
  npm install && npm run dev
  ```
- [ ] **Google Chrome** + extensió **Claude in Chrome** (o `chrome-devtools-mcp` via npx) — per al punt 4.
- [ ] **OpenSpec CLI** (opcional, per a la demo final): `npm i -g openspec`.
- [ ] Verificar que el repo porta **`.env`** i **`mcp.json`** — *no cal configurar res: ve donat*.

Curs online → no hi ha pla B d'entorn: qui no acabi un pas segueix la demo i es re-enganxa amb les branques de checkpoint.

**⚠️ Nota de seguretat (instructor):** el connection string del repo és el del rol **`reservas_app`** (només SELECT/INSERT/UPDATE/DELETE, sense DDL). BD efímera: rotar contrasenya en acabar.

---

## Punt 2 — Claude Code: comandes i context (60 min, 1:00 – 2:00)

**Objectiu:** entendre l'eina i, sobretot, **el context com a idea central**: tot el dia girarà al voltant de com li donem a Claude la informació que necessita. Suport: PowerPoint per a 2.1 (notes a `STEP1/`).

### 2.1 L'estat dels models (5 min — PowerPoint)
La família Claude: **Haiku** (ràpid/barat), **Sonnet** (equilibri), **Opus** (raonament), **Fable** (topall). Context window, cost, velocitat. Frase clau: *el model és una elecció d'enginyeria* (es demostra al 2.5).

### 2.2 Primer contacte i comandes essencials (10 min)
1. `claude` a l'arrel del repo. Trencagel:
   > «Explica'm com funciona la capa de serveis d'aquesta app i per què està aïllada de la UI.»

   (Resposta que prepara el dia: *"aïllada per poder canviar el mock per una API real"*.)
2. Comandes en directe: `/model`, `/cost`, `/clear`, **mode pla** (shift+tab), permisos.

### 2.3 CLAUDE.md: d'un repo mut a un repo que s'explica (15 min)
**Principi**: un bon exemple de "el context ajuda" depèn d'un fet arbitrari del projecte que NO és al codi. El repo **JA porta un CLAUDE.md superútil, però desactivat** — camuflat com `informacion-extra.ts` (nom anodí, `.ts` perquè Claude no el llegeixi en explorar). La demo és un **toggle**.

L'exemple estrella és **esborrar un professor**: `app/src/lib/data/professors.ts` sembla la font de veritat (la UI l'importa), però el CLAUDE.md diu que és **dada congelada de l'equip de Dades**.

**Part A — sense context (7 min):**
> «Esborra el professor David Ortega de l'aplicació.»

Claude edita `professors.ts` i l'esborra (plausible però contra la política).

**Part B — activar el context (8 min):** `mv informacion-extra.ts CLAUDE.md` + reiniciar/`/clear`, i repetir → ara Claude **es nega** i explica que el canvi va a la BD. Obrir junts el CLAUDE.md i el PRD que referencia (`@docs/prd.md`). Tancament: el CLAUDE.md **persuadeix**; al punt 5, hooks i permisos **obliguen**.

### 2.4 El context, a fons (15 min)
La idea central del dia. Tres nivells:
1. **Context permanent**: el CLAUDE.md.
2. **Context puntual**: fitxers referenciats amb `@` — el CLAUDE.md ja usa `@docs/prd.md` (el PRD del producte). Qualsevol document (una spec, un tiquet, un esquema) es pot injectar amb `@` quan calgui. Idea de capes: *CLAUDE.md (com treballar) → PRD (què és el producte) → spec puntual (una feature)*.
3. **Gestió del context de la conversa**: `/clear` vs `/compact`, per què les converses llargues degraden, i l'atajo `#` per capturar coneixement sense sortir del flux.

### 2.5 Edita una feature + comparativa de models (15 min)
Per grups, cada grup amb un model (`/model haiku|sonnet|opus|fable`, effort fix). En mode pla:
> «Afegeix al dashboard un filtre per professor a la llista de reserves. Fes servir els components ui/ existents.»

Comparar **temps / qualitat / cost** (`/cost`). Re-alineació: `git checkout 01-fonaments-final`.

---

## Punt 3 — Construir i Plan Mode (40 min, 2:00 – 2:40)

**Objectiu:** l'app deixa de ser mock. Punt de partida realista: **el backend ja està gairebé tot fet** — professors, franges, login/auth i els repositoris ja estan connectats a Postgres a la branca `02-backend-base`. Només falten **els dos route handlers de reserves**. **Plan Mode** és el protagonista, en dues tasques full-stack: completar les reserves seguint el patró existent (3.1) i **canviar el flux de reserva** (3.2). No cal el MCP: l'esquema és a `bd/` i el connector `pg` ja ve fet a `db.ts`.

### 3.1 Completar el backend de reserves — Plan Mode + Opus (25 min)
`git checkout 02-backend-base`. El backend ja està tot muntat (professors, franges, auth, repositoris + mappers connectats a Postgres) **excepte els dos route handlers de reserves**: `app/src/app/api/reservations/route.ts` (llistar/crear) i `app/src/app/api/reservations/[id]/route.ts` (cancel·lar). El repositori `reservations.repo.ts` i el servei ja migrat a fetch **sí que hi són** → per tant, en arrencar l'app, **les reserves fallen** (criden un endpoint que no existeix), però tota la resta funciona.

1. **Veure-ho fallar primer** (2 min): obrir l'app, intentar reservar → error a la consola/network (fetch 404 a `/api/reservations`). Aquesta és la motivació.
2. `/model opus` (effort high) i **mode pla** (shift+tab). La gràcia: **no es construeix de zero, s'omple un forat seguint un patró que ja existeix**.
   > «Les reserves de l'app fallen: el servei `app/src/lib/services/reservations.ts` crida `/api/reservations` però aquests route handlers no existeixen. El repositori ja està fet a `app/src/lib/server/reservations.repo.ts` i els altres endpoints (professors, franges) segueixen un patró clar a `app/src/app/api/`.
   > **Seguint exactament el mateix patró**, crea els dos route handlers que falten:
   > - `app/src/app/api/reservations/route.ts`: `GET` (les reserves de l'usuari) i `POST` (crear; si la franja ja està ocupada → **409**).
   > - `app/src/app/api/reservations/[id]/route.ts`: `DELETE` (cancel·lar).
   > Usa el repositori existent. No toquis res més ni escriguis tests. Verifica creant una reserva des de l'app.»
3. **Plan Mode en directe**: el pla ha de ser curt (2 fitxers) i calcat al patró de `api/professors`. Aprovar.
4. Verificació estrella: crear una reserva → ara funciona i persisteix a la BD compartida — *es veuen les reserves dels companys*; si dos alumnes reserven el mateix professor/franja, el segon rep el **409 en viu**.

- Pla B: `02-backend` (amb els dos handlers ja fets).

### 3.2 Canviar el flux de reserva amb Plan Mode (15 min)
Una feature de producte, ara que les reserves són reals. **Ara mateix** el flux ensenya totes les franges sempre (dada estàtica); volem **invertir-lo i fer-lo real**: primer tries **professor**, i després veus **només els seus buits** (les franges lliures d'aquell professor per a la data triada, excloent les reserves confirmades).

Amb **mode pla** (una feature full-stack ben acotada):
> «Vull canviar el flux de reserva. Ara les franges surten fixes. Canvia-ho perquè:
> 1. Primer se seleccioni el **professor** i la data.
> 2. Després es mostrin **només les franges lliures** d'aquell professor per a aquella data (les que no tinguin ja una reserva confirmada).
> Afegeix l'endpoint que calgui (p. ex. `GET /api/professors/[id]/slots?date=…`) seguint el patró dels endpoints existents, i reordena el stepper de `reservar/`. Verifica que una franja ja reservada desapareix de la llista.»

- **Plan Mode en directe**: el pla toca backend (nou endpoint de disponibilitat) i frontend (reordenar el stepper). Revisar-lo, negociar-lo, aprovar.
- Verificació: reservar una franja d'un professor → tornar a entrar → aquella franja ja no apareix per a ell.
- Missatge: amb dades reals (3.1), la disponibilitat també es torna real. Pla B: `02-flux`.

---

## ☕ Descans (15 min, 2:40 – 2:55)

---

## Punt 4 — MCPs: connectar Claude amb el món (40 min, 2:55 – 3:35)

**Objectiu:** MCP com a protocol per connectar Claude amb eines externes. Ara que el sistema ja funciona, li donem **ulls per veure'l i verificar-lo**: el navegador i la base de dades.

### 4.1 Què és MCP (5 min — PowerPoint)
Notes a `STEP2/`:
1. **El problema**: cada eina amb la seva integració a mida — N models × M eines.
2. **MCP (Model Context Protocol)**: l'estàndard obert d'Anthropic — "el USB-C dels agents". Un servidor MCP exposa **tools** (accions) i **resources** (dades); qualsevol client (Claude Code, Claude Desktop…) s'hi connecta igual.
3. **Diagrama**: Claude ⟷ client MCP ⟷ servidor MCP ⟷ eina (navegador, BD, Figma, Slack…).
4. **On es configura**: `.mcp.json` al repo, `claude mcp add` (personal), o connectors a Claude Desktop.
5. **Ara**: activar el repo (`mv mcp.json .mcp.json`) — dos servidors ja configurats: Chrome DevTools i Postgres.

### 4.2 Ulls al navegador: rendiment amb Chrome DevTools (18 min)
1. `git checkout 03-perf` — branca amb **problema de rendiment preparat** (p. ex. imatge enorme sense optimitzar + un component que re-renderitza contínuament per un `setInterval` mal posat): l'app va lenta i "ningú sap per què".
2. Amb el MCP de Chrome:
   > «L'app va lenta. Obre-la al navegador, mira el rendiment (network, traces, re-renders), troba les causes i arregla-les. Verifica la millora.»
3. **Moment wow**: Claude navega, llegeix mètriques reals, arregla i torna a mesurar. Ara Claude **veu el que veu l'usuari**.
4. Pla B: `03-perf-solucio`.

### 4.3 Ulls a la base de dades: Postgres per MCP (17 min)
Ara que el backend del punt 3 escriu a la BD real, el MCP de Postgres és **verificació de dades vives** (molt més fort que "llegir l'esquema", que Claude ja podia fer des de `bd/`).
> «Connecta't a la base de dades i ensenya'm les últimes reserves que s'han creat. Comprova que la regla de l'índex únic funciona: hi ha cap professor amb dues reserves confirmades a la mateixa franja? Quants professors hi ha?»

- Missatge: Claude consulta la **font de veritat** directament, sense passar per l'app.
- Aparta didàctica (2 min): per què el rol `reservas_app` no pot fer `DROP TABLE` (mínims privilegis) — el MCP té el poder que li donis.

---

## Punt 5 — Skills, Hooks i Agents (30 min, 3:35 – 4:05)

**Objectiu:** de "fer prompts" a **empaquetar coneixement reutilitzable** (skills), delegar en **agents** amb context propi, i **imposar regles** que el model no pot saltar-se (hooks). I cada alumne se'n va amb un vídeo.

### 5.1 Crear la skill de tests (8 min)
Concepte i anatomia: `.claude/skills/tests/SKILL.md` (frontmatter + instruccions). Sap les convencions del projecte per testejar l'API i l'auth (Vitest ja ve del punt 2).
> «/tests — cobreix l'API de reserves (crear, llistar, cancel·lar, solapament → 409) i l'auth (registre, login bo i dolent, ruta protegida sense sessió).»

### 5.2 Agents propis (7 min)
`.claude/agents/test-writer.md` (escriu tests; només Read/Write/Bash) i `test-verifier.md` (executa i critica cobertura). Tenen **context propi**, corren en **paral·lel** i fixen el model al frontmatter.
> «Fes servir els agents de test per cobrir l'endpoint de professors i verificar la cobertura.»

### 5.3 Skill `/ship` (5 min)
`.claude/skills/ship/SKILL.md`: branca → lint → tests → commit convencional → push → PR amb `gh pr create`.
> «/ship el backend amb el login»

Cada alumne acaba amb una PR real al seu fork. → `04-skills`.

### 5.4 Hooks: quan persuadir no és suficient (5 min)
El tancament de l'arc del punt 2: **el CLAUDE.md persuadeix el model; el hook l'obliga** — l'executa el harness, no el model.
1. Afegir en directe a `.claude/settings.json` un hook **PostToolUse** que passa el lint després de cada edició (i bloqueja si falla).
2. Demo determinista: demanar un canvi que introdueixi un error de lint → el hook salta **sol** i Claude el corregeix sense que ningú l'hi demani.
3. Menció: **PreToolUse** (vetar edicions a `src/lib/data/` — la zona prohibida ara com a llei) i els permisos allow/deny. Pont: això + l'allowlist fan segur el `/goal` del punt 7.

### 5.5 skills.sh + el teu vídeo amb Remotion (5 min)
1. **[skills.sh](https://skills.sh)**: les pròpies viuen al repo; les de tercers es descarreguen: `npx skills add <ref-remotion>`.
2. **Cada alumne genera el seu vídeo**:
   > «/remotion — crea un vídeo promocional de 15 segons de l'app: logo, 3 captures amb transicions i CTA final.»
3. El render corre en segon pla — **es reprodueixen al tancament**. (Instructor: vídeo pre-renderitzat de pla B.)

---

## Punt 6 — Claude Design i Cowork (25 min, 4:05 – 4:30)

**Objectiu:** sortir del terminal. El mateix Claude (mateix login, mateixa arquitectura d'agent) treballant a la cara de producte.

### 6.1 Claude Design: la landing (15 min)
1. Obrir claude.ai/design; `/design-sync` des de Claude Code per **importar la component library real** al canvas.
2. Al canvas: «Dissenya una landing per a l'app de reserva de sessions: hero, beneficis, professors destacats, CTA. Distintiva, no genèrica.» Iterar en directe (comentaris inline, arrossegar, colors).
3. **Handoff a codi**: `/design-sync` (aprovació de pla) → la landing real a `/`. → `05-landing`.
4. Pla B: skill `frontend-design` (oficial d'Anthropic) des del terminal.

### 6.2 Claude Cowork (10 min — demo de l'instructor)
**Cowork** és el mode agèntic de Claude Desktop — "Claude Code sense terminal", per a treball d'oficina. Dues demos:
1. **Revisar el correu** (connector Gmail/Microsoft 365): «Revisa els meus últims 10 correus i resumeix-me els action items.»
2. **Obrir un PDF i editar-lo**: «Llegeix aquest PDF (temari del curs), corregeix les dates i genera'n una versió actualitzada amb un resum executiu al principi.»

Missatge: el paradigma d'agents no és només per a programadors.

---

## Punt 7 — IA autònoma (25 min, 4:30 – 4:55)

**Objectiu:** el clímax. Del loop supervisat a les issues que es creen soles i es resolen soles. Ritme de demo guiada (l'instructor condueix; qui vulgui replica).

> **Concepte — git worktree** (1 min, abans del loop). Normalment un repo té UNA còpia de treball i canvies de branca amb `git checkout` (reescriu els fitxers). Un **worktree** et permet tenir **diverses còpies de treball del mateix repo alhora**, cada una en una carpeta i branca diferents, compartint el mateix `.git`:
> - `git worktree add ../reserves-loop feature-x` · `git worktree list` · `git worktree remove …`
>
> Per què importa: pots deixar un **agent o loop treballant sol en un worktree** mentre tu continues, sense trepitjar-vos. Els workflows multi-agent d'**ultracode** fan servir worktrees per aïllar agents **en paral·lel**. També és alternativa neta al `git stash` per saltar a un checkpoint.

### 7.1 Issues + el loop (9 min)
1. Crear 2 issues ben escrites (gist preparat): «`PATCH /api/reservations/:id` per reprogramar + UI» i «empty state al dashboard». GitHub Project (Todo/In progress/Done).
2. Loop supervisat:
   > «Llista les issues obertes amb `gh issue list`. Agafa la més antiga, implementa-la complint els criteris, passa lint i tests, i obre una PR amb /ship que la tanqui. Continua amb la següent.»
3. Mentre corre: el hook de lint i l'allowlist **ja es van configurar al punt 5** — són el que fa viable aquest mode, amb els tests com a xarxa.

### 7.2 Ultracode: les issues es creen soles (6 min — demo de l'instructor)
> «ultracode: audita l'app (frontend i API) buscant bugs i accessibilitat; verifica cada troballa adversarialment i obre una issue amb `gh issue create` per cada confirmada, amb criteris d'acceptació i etiqueta `auto`.»

El backlog s'omple **sense cap humà escrivint**.

### 7.3 `/goal`: el tancament autònom (6 min — demo de l'instructor)
> `/goal no queda cap issue oberta amb l'etiqueta 'auto', tots els tests passen i el lint surt net — o para després de 10 torns`

Es llança i **es deixa corrent** fins al tancament. Diferència: amb el loop paràveu vosaltres; amb `/goal` **para el sistema**. (Menció d'1 min: `/schedule` = el mateix, al cloud i amb calendari.)

### 7.4 OpenSpec (4 min — demo de l'instructor)
L'altra manera de treballar: spec-driven. `openspec init` + la proposta de "valoracions" desglossada en tasks — i el pont: les tasks també poden alimentar un `/goal`. Complet a `06-openspec` (material per a casa).

---

## Tancament (5 min, 4:55 – 5:00)

1. **Revisar el `/goal`**: estat (torns, tokens), `git log` amb commits fets sols, issues `auto` tancades. *El sistema s'ha auditat, s'ha creat les issues i se les ha resolt sol mentre miràvem Design i Cowork.*
2. **Reproduir els vídeos de Remotion** dels alumnes — traca final.
3. Recapitulació: context → construir (Plan Mode) → connectar eines (MCP) → empaquetar (skills/hooks/agents) → producte → autonomia. Material per a casa: `extra/deploy-vercel`, `extra/seo`, `06-openspec`.
4. Q&A exprés.

---

## Checklist de preparació de l'instructor

**Base de dades (abans del curs):**
- [ ] Aplicar `bd/00_create_db_and_roles.sql` (contrasenya generada), `01_schema.sql`, `02_grants.sql`, `03_seed.sql` a la BD de proves.
- [ ] `.env` del repo amb el `DATABASE_URL` del rol **`reservas_app`** apuntant a `workshop_reservas`. Rotar contrasenya després.
- [ ] `mcp.json` (inactiu) amb Chrome DevTools i Postgres (string posat). Connector `pg` a `app/src/lib/db.ts`.

**Al repo:**
- [ ] Branques de checkpoint creades i provades de cap a cap (incloses `extra/*`).
- [ ] **Toggle del CLAUDE.md** a `main`: superútil camuflat com `informacion-extra.ts` (regla professors congelats + `@docs/prd.md`) i `docs/prd.md` escrit. Assajar el toggle; vigilar el risc de grep de "professor" a la Part A.
- [ ] **Branca `02-backend-base` preparada**: tot el backend menys els 2 route handlers de `api/reservations/` (repo + servei ja migrat hi són → les reserves fallen visiblement). Assajar el 3.1 (2-3 cops, cronometrat): Claude omple els 2 handlers seguint el patró de `api/professors`.
- [ ] **Feature del flux (3.2) assajada**: sobre `02-backend`, invertir stepper + endpoint de disponibilitat (`GET /api/professors/[id]/slots`). Branca `02-flux` de resultat.
- [ ] **Problema de rendiment** del 4.2 preparat a `03-perf` i assajat (Claude el troba amb el MCP en < 8 min).
- [ ] Skills `tests` i `ship` + agents escrits (branca `04-skills`).
- [ ] `.claude/settings.json` amb allowlist + hook post-edit de lint. Claude Code v2.1.139+ per a `/goal`.
- [ ] Gist amb el text de les 2 issues + refs de skills.sh (remotion, seo).
- [ ] **PowerPoints** punts 1, 2 i 4.1 generats des de `STEP0/`, `STEP1/` i `STEP2/`.

**Comptes i demos:**
- [ ] Claude Desktop amb **Cowork** operatiu: connector de correu configurat i un PDF de prova (temari) a punt.
- [ ] Projecte a claude.ai/design amb `/design-sync` provat en les dues direccions.
- [ ] Demo autònoma assajada: ultracode → issues `auto` → `/goal` (cronometrat; ~25 min). Branca `06-autobuild` de pla B.
- [ ] Vídeo de Remotion pre-renderitzat (pla B) + compte amb crèdit de sobres.
- [ ] Invitació enviada amb la llista de requisits perquè el punt 1 sigui verificació.

**Riscos i mitigació (curs online: sense pla B d'entorn):**
| Risc | Mitigació |
|---|---|
| L'entorn falla a algú al punt 1 | Per això el punt 1 és una hora sencera; després, demo compartida + branques |
| La BD compartida s'embruta | `TRUNCATE reservations RESTART IDENTITY CASCADE` + `03_seed.sql`; el rol app no pot fer DDL |
| Dos alumnes xoquen (mateixa reserva) | És la demo del 409 en viu — abraçar-ho |
| El backend del 3.1 s'encalla | Branca `02-backend`; explicar el diff dels 2 handlers |
| La feature del flux (3.2) s'encalla | Branca `02-flux`; explicar el diff |
| El MCP de Chrome no connecta | Seguir la demo; `03-perf-solucio` |
| Cowork/connector falla en directe | Captures/vídeo preparats; el PDF local no depèn de res |
| El `/goal` no acaba a temps | Progrés parcial + `06-autobuild` |
| Renders de Remotion lents | Es reprodueixen els acabats + el pre-renderitzat |
| Quota/rate limits | Escalonar la comparativa de models per grups |

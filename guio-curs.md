# Curs de Claude Code — Guió (5 hores, hands-on)

**App base:** "Reserva de Sessions de Treball" (Next.js + TS + Tailwind, persistència mock a `localStorage`).
**Format:** hands-on complet i **online** — cada alumne clona el repo i executa tots els exercicis des de casa.
**Nivell:** iniciació (zero o gairebé zero amb Claude Code).
**Checkpoints:** una branca per mòdul; si una demo falla o algú es perd, `git checkout <branca>` i seguim.
**Fil conductor (la història del dia):** partim d'un codi funcional però coix (sense backend, tot mock a `localStorage`) i el fem evolucionar amb Claude a cada bloc: primer canvis a mà, després **es munta el backend Node** (endpoints + BD a partir de `bd/`), es testeja, **es desplega a producció**, i s'automatitza per graons — l'agent resol una issue supervisat → el loop buida el backlog (i cada merge es desplega sol) → i al final **les issues es creen soles** (l'auditoria multi-agent obre issues) i un `/goal` autònom local les resol sense humà al mig. Es revisa al tancament. **OpenSpec** s'ensenya a part, com a mòdul extra de metodologia spec-driven.

---

## Estructura de branques del repo

| Branca | Contingut |
|---|---|
| `main` | Estadi 0: app funcional + Vitest amb el **parany del mode watch** (`npm test` vs `npm run test:unit`) + **sense `CLAUDE.md`** (la plantilla de referència viu a `_CLAUDE.md`, que Claude no detecta; el CLAUDE.md real es construeix al 1.3) |
| `01-fonaments-final` | Resultat del bloc 1: `CLAUDE.md` enriquit (tests, lint) + filtre per professor |
| `02-bug-chrome` | **Bug intencionat** per a la demo del MCP de Chrome |
| `02-bug-chrome-solucio` | Bug arreglat |
| `02-landing` | Landing feta amb Claude Design + design system sincronitzat |
| `03-backend` | **Backend muntat**: route handlers a `app/api/`, SQLite a partir de `bd/`, serveis migrats a `fetch` |
| `03-skill-tests` | Skill de tests + Vitest configurat + tests dels endpoints |
| `03-skill-ship` | Skill `/ship` de pujades a GitHub |
| `04-deploy` | App desplegable (config Vercel + correccions SEO de la landing) |
| `05-issues-loop` | Resultat del loop d'issues (3 PRs full-stack) |
| `05-autobuild` | Resultat del `/goal` sobre les issues auto-creades (pla B de la demo final) |
| `06-openspec` | Mòdul extra: feature "valoracions" construïda spec-driven amb OpenSpec |
| `07-final` | Estat final: tot integrat |

Regla d'or durant el curs: **abans de cada mòdul**, qui vagi perdut fa `git stash && git checkout <branca-anterior>`.

---

## Horari general

| Hora | Bloc | Durada |
|---|---|---|
| 0:00 – 0:40 | 0. Presentació: la IA avui + instal·lació de l'entorn | 40 min |
| 0:40 – 1:10 | 1. Introducció a Claude Code | 30 min |
| 1:10 – 1:55 | 2. MCP: Chrome DevTools + Claude Design + Landing | 45 min |
| 1:55 – 2:10 | ☕ Descans | 15 min |
| 2:10 – 3:10 | 3. Muntar el backend + skills de tests i ship | 60 min |
| 3:10 – 3:40 | 4. Deploy a Vercel + SEO + vídeo amb Remotion | 30 min |
| 3:40 – 4:35 | 5. Automatització: del loop supervisat a les issues que es creen soles | 55 min |
| 4:35 – 4:50 | 6. Mòdul extra: OpenSpec (spec-driven development) | 15 min |
| 4:50 – 5:00 | 7. Tancament: revisió de la demo autònoma i Q&A | 10 min |

---

## Models i effort per mòdul

Criteri general que el curs vol transmetre: **Haiku** per a feina mecànica, **Sonnet** per al dia a dia, **Opus** per a autonomia llarga i fiable, **Fable** per als moments d'arquitectura i disseny. L'**effort** (low/medium/high/max) es puja només quan hi ha raonament llarg pel mig; per a tasques curtes i verificables, effort baix = més ràpid i barat. Es canvia amb `/model` (selector de model i effort); els agents propis el fixen al seu frontmatter.

| Mòdul | Tasca | Model | Effort | Per què |
|---|---|---|---|---|
| 1.2 | Trencagel i comandes | Sonnet | low | Lectura de codi curta |
| 1.3 | Demo CLAUDE.md (tests) | Sonnet | medium | Exploració curta, resultat ràpid |
| 1.4 | Comparativa de models | Haiku/Sonnet/Opus/Fable | medium (fix) | Effort igual per a tots: s'aïlla la variable model |
| 2.2 | Bug amb MCP de Chrome | Sonnet | high | Diagnòstic amb navegador sense perdre ritme |
| 2.3 | `/design-sync` (pull) | Sonnet | low | Sincronització mecànica |
| 2.4 | Landing (handoff a codi) | Opus | medium | Fidelitat al disseny del canvas |
| 3.1 | **Muntar el backend** | **Fable** | **high** | El mòdul estrella: arquitectura i migració |
| 3.2 | Skill de tests | Sonnet | medium | Generació de tests amb convencions clares |
| 3.2 | Agent `test-writer` | Sonnet | medium | Fixat al frontmatter de l'agent |
| 3.2 | Agent `test-verifier` | Haiku | low | Executar i criticar cobertura: mecànic |
| 3.3 | `/ship` | Haiku | low | lint+test+commit+PR: pipeline mecànic |
| 4.1 | Deploy a Vercel | Sonnet | low | Configuració guiada |
| 4.2 | Anàlisi SEO | Sonnet | medium | Anàlisi + correccions curtes |
| 4.3 | Vídeo Remotion | Sonnet | medium | El coll d'ampolla és el render, no el model |
| 5.1 | Crear issues | Haiku | low | Text ja redactat al gist |
| 5.2 | Loop supervisat | Sonnet | medium | 3 iteracions: cost/velocitat, els tests fan de xarxa |
| 5.3 | Ultracode (auditoria) | Fable | high | Orquestració multi-agent i verificació adversarial |
| 5.4 | `/goal` autònom | Opus | high | ~20 min sense humà: fiabilitat per sobre de cost |
| 5.5 | Routine programada | (cloud, per defecte) | medium | El valor és el calendari, no el model |
| 6 | Crear l'spec OpenSpec | Fable | high | Pensar el producte: requisits i casos límit |
| 6 | Implementar la 1a task | Sonnet | medium | Task petita i ben especificada |

Moment pedagògic: fer notar que **la tria de model/effort és part del guió de cada demo** — al 1.4 es demostra empíricament i la resta del dia s'aplica.

---

## Bloc 0 — Presentació: la IA avui + instal·lació de l'entorn (40 min)

**Objectiu:** situar el moment que vivim i deixar l'entorn complet. Suport: **PowerPoint** (material a `STEP0/`). El curs és online: aquest bloc inclou tots els requisits, verificats en directe (recomanable enviar la llista amb la invitació, però el bloc no ho pressuposa).

### 0.1 Presentació: d'on venim i on som (12 min — PowerPoint)
1. Presentació personal de l'instructor.
2. Mini-història de la IA generativa: dels LLM com a autocompletadors al **paradigma d'agents** (models que llegeixen, planifiquen i executen eines).
3. El moment actual: de l'assistent que suggereix codi a l'agent que treballa sol — exactament l'arc que recorrerem avui.
4. Presentació de l'app del curs: tour ràpid per les pantalles (login, dashboard, reservar amb stepper). Assenyalar que **no hi ha backend**: tot viu a `localStorage` — *al bloc 3 el muntarem*.

### 0.2 Instal·lació de tot el necessari (28 min)
Checklist en pantalla compartida, amb les URLs oficials enganxades al xat de la sessió; cadascú la va marcant:

- [ ] **Node.js 20+** — [nodejs.org/en/download](https://nodejs.org/en/download) → `node -v`.
- [ ] **git** — [git-scm.com/downloads](https://git-scm.com/downloads) → `git -v`.
- [ ] **Claude Code** — [claude.com/product/claude-code](https://claude.com/product/claude-code) o `npm install -g @anthropic-ai/claude-code` (docs: [code.claude.com/docs](https://code.claude.com/docs)) → `claude --version`. Cal **compte de Claude (Pro o Max)**.
- [ ] **Claude Desktop** — [claude.ai/download](https://claude.ai/download) (mateix login; el farem servir per a Claude Design al bloc 2).
- [ ] **GitHub CLI** — [cli.github.com](https://cli.github.com) → `gh auth login` i `gh auth status`.
- [ ] **Fork del repo del curs**: [github.com/marcbenito/claude_workshop_ensenyament](https://github.com/marcbenito/claude_workshop_ensenyament) (el fork és necessari per a issues, PRs i deploy propis) i clonar-lo:
  ```bash
  gh repo fork marcbenito/claude_workshop_ensenyament --clone
  cd claude_workshop_ensenyament/workshop/app
  npm install && npm run dev
  ```
- [ ] **Compte de Vercel** (gratuït) vinculat al GitHub — [vercel.com/signup](https://vercel.com/signup); només crear-lo, el farem servir al bloc 4.
- [ ] **Google Chrome** + extensió **Claude in Chrome** (o `chrome-devtools-mcp` via npx) — per al bloc 2.
- [ ] **OpenSpec CLI**: `npm i -g openspec` — per al mòdul extra del final.

Com que és online no hi ha pla B d'entorn: qui no completi algun pas segueix la demo compartida i es re-enganxa a qualsevol mòdul amb les branques de checkpoint.

---

## Bloc 1 — Introducció a Claude Code (30 min)

**Objectiu:** entendre l'eina i el seu context (estat dels models), dominar les comandes bàsiques, i veure amb un exemple mesurable per què el `CLAUDE.md` canvia el comportament. Suport: PowerPoint per a 1.1 (material a `STEP1/`).

### 1.1 L'estat dels models (5 min — PowerPoint)
La família Claude i el criteri d'elecció: **Haiku** (ràpid i barat, tasques mecàniques), **Sonnet** (equilibri), **Opus** (raonament), **Fable** (topall de capacitat). Context window, cost per token, i la idea que reprendrem al 1.4: *el model és una elecció d'enginyeria*.

### 1.2 Primer contacte i comandes essencials (7 min)
1. Arrencar `claude` a l'arrel del repo. Trencagel sense tocar res:
   > «Explica'm com funciona la capa de serveis d'aquesta app i per què està aïllada de la UI.»

   (La resposta prepara el terreny: *"està aïllada per poder canviar el mock per una API real"* — el que farem al bloc 3.)
2. Les comandes del dia a dia, provant-les en directe: `/model`, `/cost`, `/clear` (reiniciar context), `/compact` (resumir una conversa llarga i per què degrada), **mode pla** (shift+tab), i el sistema de permisos (per què demana confirmació).

### 1.3 CLAUDE.md: d'un repo mut a un repo que s'explica (10 min)
**El primer exemple del curs, amb diferència mesurable.** El repo porta Vitest configurat amb un parany realista: `npm test` arrenca Vitest en **mode watch** (es queda penjat esperant canvis); la comanda correcta és `npm run test:unit` (`vitest run`).

1. **Sense CLAUDE.md** (l'estadi 0 del repo: no n'hi ha cap; la plantilla de referència de l'instructor és `_CLAUDE.md`, que Claude no detecta):
   > «Executa els tests»

   Claude explora, prova `npm test` → es queda en mode watch (cal interrompre'l) o es perd provant coses. Cronometrar-ho.
2. Generar la base amb `/init` i **refinar-la a mà** afegint la secció:
   ```markdown
   ## Tests
   - Executa SEMPRE els tests amb `cd app && npm run test:unit`.
   - No facis servir `npm test`: arrenca Vitest en mode watch i es queda bloquejat.
   ```
3. `/clear` i repetir exactament el mateix prompt → va directe, verd, en segons.
4. Missatge: **el CLAUDE.md és la memòria operativa del repo** — passem d'un repo sense informació a un repo que explica com es treballa amb ell (tests, lint, convencions). És el mateix mecanisme que fa que més tard executi el lint sol.

### 1.4 Edita una feature + comparativa de models (8 min)
Dos ocells d'un tret: el primer canvi de codi real, fet **per grups amb models diferents** (`/model haiku` / `sonnet` / `opus` / `fable`). En mode pla:
> «Afegeix al dashboard un filtre per professor a la llista de reserves. Fes servir els components ui/ existents.»

Comparar en directe: **temps**, **qualitat** del resultat i **cost** (`/cost`). Missatge: Haiku per a tasques mecàniques, Fable/Opus per a disseny i raonament. Després tothom es re-alinea: `git checkout 01-fonaments-final`.

---

## Bloc 2 — MCP: Chrome DevTools, Claude Design i Landing (45 min)

**Objectiu:** entendre què és MCP i veure Claude sortint del terminal: llegint el navegador i dissenyant en un canvas.

### 2.1 Què és MCP (5 min)
Protocol estàndard per connectar Claude amb eines externes. Config a `.mcp.json` (compartida al repo) o `claude mcp add`.

### 2.2 Caçar un bug amb el MCP de Chrome (18 min)
1. `git checkout 02-bug-chrome` — branca amb un **bug preparat**: en seleccionar una franja horària, la consola llança un error i la reserva no es crea (p. ex. un `slot.hora` que arriba `undefined` pel camí).
2. Reproduir el bug manualment al navegador: *sembla que "no fa res"*.
3. Demanar-li a Claude:
   > «A la pàgina de reservar, quan selecciono una franja i confirmo, no es crea la reserva. Obre l'app al navegador, reprodueix el problema, llegeix la consola i les peticions, troba la causa i arregla-la.»
4. **Moment wow:** Claude navega, llegeix l'error de consola, localitza la línia i l'arregla — i torna a provar al navegador per verificar-ho.
5. Pla B: `02-bug-chrome-solucio`.

### 2.3 Connectar el design system amb Claude Design (8 min)
**Claude Design** (claude.ai/design, Anthropic Labs) és el canvas visual col·laboratiu de Claude. El pont amb el codi és **`/design-sync`** a Claude Code, bidireccional:
1. Obrir claude.ai/design i crear el projecte del curs.
2. Des de Claude Code, executar `/design-sync` per **importar la component library real** de l'app (els components de `src/components/ui/`) al canvas.
3. Missatge: a partir d'ara, tot el que Claude dissenyi al canvas usarà **els vostres botons, cards i tipografia de veritat**, no UI genèrica. Claude no "inventa" estils: sincronitza amb la font de veritat.

### 2.4 Dissenyar la landing amb Claude Design (14 min)
La landing **es dissenya al canvas** i després baixa a codi:
1. Al xat de Claude Design:
   > «Dissenya una landing page per a l'app de reserva de sessions de treball: hero, beneficis, llista de professors destacats i CTA cap al registre. Distintiva i moderna, no genèrica.»
2. **Iterar en directe al canvas**: comentaris inline («fes el CTA més gran»), arrossegar, redimensionar, ajustar colors — el moment més visual del matí.
3. **Handoff a codi**: passar el disseny a Claude Code amb `/design-sync` (workflow d'aprovació de pla: mostra quins fitxers escriurà, s'aprova, i implementa la landing a `/` amb els components reals).
4. **Aquesta landing és la matèria primera de l'anàlisi SEO i del vídeo de Remotion (bloc 4)** — no saltar-se-la. → checkpoint `02-landing`.

Pla B (o per a qui no tingui accés a Claude Design): la skill `frontend-design` (oficial d'Anthropic) genera una landing vistosa en 1 prompt des del terminal.

---

## ☕ Descans (15 min)

---

## Bloc 3 — Muntar el backend + skills de tests i ship (60 min)

**Objectiu:** el mòdul estrella. L'app deixa de ser mock: es munta el backend Node amb Claude en mode pla, es testeja amb una skill pròpia i es puja amb `/ship`.

### 3.1 Muntar el backend amb mode pla (28 min)
El projecte ja porta la feina preparada: `bd/` té l'esquema SQL (`01_schema.sql`, `03_seed.sql`) i la capa de serveis està aïllada. Ara es cobra el dividend.

1. **En mode pla** (insistir: una tasca gran SEMPRE en mode pla):
   > «Aquesta app no té backend: tot és mock a localStorage. Munta'l amb Node aprofitant Next.js:
   > 1. Crea route handlers a `app/src/app/api/` per a reserves (GET/POST/DELETE) i professors (GET).
   > 2. Fes servir SQLite (better-sqlite3) com a base de dades local, creant l'esquema i el seed a partir dels SQL de `bd/` (adapta'ls de Postgres si cal).
   > 3. Migra la capa de serveis de `src/lib/services/` perquè cridi l'API amb fetch en lloc de localStorage, sense tocar cap component de UI.
   > 4. Verifica-ho arrencant l'app i creant una reserva.»
2. Revisar el pla junts (5 min): és el moment d'ensenyar a **negociar un pla** — demanar canvis abans d'aprovar ("no toquis auth encara", "mantén els tipus de types.ts").
3. Mentre implementa (~10 min), explicar per què la migració és neta: la UI no s'assabenta del canvi perquè el contracte de la capa de serveis es manté. Aquest és l'argument d'arquitectura del curs.
4. Verificació en directe: crear una reserva, tancar el navegador en mode incògnit i veure que **persisteix** (abans, amb localStorage, no ho feia). Reforç: demanar-li a Claude que ensenyi la fila amb `sqlite3` per terminal.
5. Pla B: branca `03-backend` llesta.

**Nota tècnica per a l'instructor:** SQLite no funciona al runtime serverless de Vercel. Per al curs és perfecte (zero setup per alumne); al bloc 4 s'explica el camí a producció (Vercel Postgres/Supabase, l'esquema de `bd/` ja és Postgres) i el deploy dels alumnes es fa amb la demo de l'instructor o amb el fallback mock. No intentar migrar tothom a Postgres en directe.

### 3.2 Skill de tests + agents de test (22 min)
1. **Primera skill del curs** — introduir aquí el concepte: una skill és coneixement empaquetat i reutilitzable que viu a `.claude/skills/` i viatja amb el repo. Anatomia: `SKILL.md` amb frontmatter (`name`, `description`) + instruccions. La skill de tests sap les convencions d'aquest projecte per testejar els **endpoints acabats de crear** (Vitest ja ve configurat del bloc 1; BD SQLite en memòria per a tests, fixtures de professors).
2. Usar-la:
   > «/tests — cobreix l'API de reserves: crear, llistar, cancel·lar i el conflicte de solapament (ha de retornar 409).»
3. Testejar una API real és el salt de qualitat respecte de mockejar `localStorage` — i és el que fa que el loop del bloc 5 sigui segur.
4. **Agents propis**: ensenyar `.claude/agents/test-writer.md` (escriu tests, només Read/Write/Bash) i `test-verifier.md` (executa, critica cobertura). Llançar-los:
   > «Fes servir els agents de test per cobrir l'endpoint de professors i verificar la cobertura.»
5. Missatge: els agents tenen **context propi** — no embruten la conversa principal i es poden llançar en paral·lel. → `03-skill-tests`.

### 3.3 Skill `/ship` — pujades i integració amb GitHub (10 min)
Crear `.claude/skills/ship/SKILL.md`: branca → lint → tests → commit amb missatge convencional → push → PR amb `gh pr create` (plantilla de descripció inclosa).
> «/ship el backend nou»

Cada alumne acaba amb una PR real al seu fork amb tot el backend. → `03-skill-ship`.

---

## Bloc 4 — Deploy a Vercel + SEO + vídeo amb Remotion (30 min)

**Objectiu:** posar l'app a producció **abans** d'automatitzar res — així, al bloc 5, cada merge del loop es desplegarà sol.

### 4.1 Deploy a Vercel (15 min)
1. Cada alumne importa el seu fork a Vercel (root directory: `app/`). Primer deploy en directe.
2. **El backend a producció:** explicar que SQLite és local; ensenyar (demo de l'instructor) el projecte connectat a **Vercel Postgres/Supabase** reutilitzant els SQL de `bd/` tal qual — l'esquema ja era Postgres. Els alumnes despleguen amb la variant que tinguin (mock o SQLite ignorat en build) i veuen el camí complet a la demo.
3. Tancar el primer cercle: **mergear la PR del backend** (la del `/ship` del 3.3) → Vercel redesplega sol.
4. Missatge clau: *a partir d'ara, tot el que es mergegi a main acaba a producció sense tocar res — recordeu-ho al bloc 5.*
5. Pla B: si Vercel es rebel·la, `vercel deploy` per CLI o ensenyar el deploy de l'instructor.

### 4.2 Anàlisi SEO de la landing (7 min)
1. **Presentar [skills.sh](https://skills.sh)**, el directori de skills de la comunitat — el complement de les skills pròpies que hem creat al bloc 3: les pròpies viuen a `.claude/skills/` del repo; les de tercers es descarreguen. Cada alumne instal·la la de SEO:
   ```bash
   npx skills add <ref-skill-seo>
   ```
2. Executar-la sobre la landing desplegada:
   > «/seo — analitza la landing: metadades, estructura de headings, schema.org, rendiment.»
3. Aplicar 1-2 correccions ràpides que proposi. → checkpoint `04-deploy`.

### 4.3 Vídeo promocional amb Remotion (8 min — demo de l'instructor, render curt)
Instal·lar la skill de Remotion des de skills.sh i llançar:
> «/remotion — crea un vídeo promocional de 15 segons de l'app: logo, 3 captures de pantalla amb transicions i el CTA final.»

El render triga: llançar-lo, explicar com funciona la skill mentre renderitza, i reproduir el vídeo en acabar el bloc. (Portar un vídeo pre-renderitzat de pla B.)

---

## Bloc 5 — Automatització: del loop supervisat a les issues que es creen soles (55 min)

**Objectiu:** el clímax de la història. El salt de "Claude com a assistent" a "Claude com a treballador autònom" — i com que Vercel ja està connectat, **tot el que el loop mergegi acaba a producció sol**.

### 5.1 GitHub Issues + Projects com a backlog (10 min)
1. Cada alumne crea al seu fork **3 issues petites i ben escrites** (tenir-les redactades en un gist per copiar-les). Ara són tasques de punta a punta:
   - «Endpoint `DELETE /api/reservations/:id` + botó de cancel·lar amb confirmació al dashboard» *(si el DELETE ja ha sortit al 3.1, canviar-la per `PATCH` de reprogramar)*
   - «Endpoint `GET /api/professors/:id/slots` amb disponibilitat real des de la BD + usar-lo al stepper de reserva»
   - «Estat buit (empty state) amb il·lustració al dashboard quan no hi ha reserves»
2. Crear un GitHub Project i afegir-hi les issues (columnes Todo/In progress/Done).
3. Missatge: **la qualitat de la issue determina la qualitat del resultat** — criteris d'acceptació explícits, incloent "amb tests".

### 5.2 L'agent que buida el backlog (18 min)
El cor del curs. Prompt de loop:
> «Llista les issues obertes amb `gh issue list`. Agafa la més antiga, mou-la a In progress al Project, crea una branca, implementa-la complint els criteris d'acceptació, passa lint i tests, i obre una PR amb /ship que tanqui la issue. Després continua amb la següent. Fes-ne 3 i para.»

Mentre el loop corre (2-3 iteracions, ~15 min), s'expliquen els conceptes: com supervisar-lo, quan interrompre'l, permisos en mode autònom, i **per què els tests del bloc 3 són la xarxa de seguretat** que fa viable el mode autònom. Els alumnes veuen les PRs aparèixer al seu fork — i en mergear-ne una, **Vercel la desplega sol** (el cercle del bloc 4). → `05-issues-loop`.

### 5.3 Ultracode: l'auditoria que crea les issues sola (10 min — demo de l'instructor)
El gir de la història: fins ara el backlog l'escrivia un humà. Ara **la feina es genera sola**.
> «ultracode: audita tota l'app, frontend i API, buscant bugs, problemes d'accessibilitat i codi mort. Verifica cada troballa adversarialment, i per cada troballa confirmada obre una issue amb `gh issue create`, amb criteris d'acceptació clars i l'etiqueta `auto`.»

Mentre corre: explicar el patró (fan-out de finders → verificadors adversarials → síntesi), quan val la pena el cost, seguiment amb `/workflows`, comparació amb `/code-review` single-agent. En acabar: **el backlog té issues noves que cap humà ha escrit**.

### 5.4 `/goal` + demo final: «el sistema es construeix sol» (12 min — demo de l'instructor)
La peça que tanca el cercle. **`/goal`** defineix una **condició de finalització verificable** i Claude continua treballant, torn rere torn, fins que un avaluador confirma que s'ha complert — sense que ningú premi Enter.

1. Explicar el concepte i la diferència amb `/loop` (interval de temps) i amb el loop supervisat del 5.2 (paràveu vosaltres): amb `/goal` **para el sistema, no l'humà**.
2. Llançar-lo en una branca dedicada (i deixar-lo corrent durant el mòdul d'OpenSpec, fins al tancament):
   > `/goal no queda cap issue oberta amb l'etiqueta 'auto', tots els tests passen i el lint surt net — o para després de 15 torns`

   Amb el prompt de treball: «Agafa la issue oberta amb etiqueta `auto` més antiga, implementa-la complint els criteris d'acceptació, verifica amb lint i tests, commiteja i tanca la issue. Continua amb la següent.»

   (Variant headless per ensenyar-la de passada: `claude -p "..."` amb el goal — funciona igual en mode no interactiu.)
3. Explicar **les 4 peces que ho fan possible** — construïdes durant el dia:
   - **Tests** (bloc 3): la verificació objectiva de cada canvi.
   - **Permisos preconfigurats**: allowlist a `.claude/settings.json` del repo (npm test, lint, git, gh) — sense això el loop es pararia a cada confirmació.
   - **Hook de verificació**: hook post-edit que executa el lint — la verificació és automàtica, no opcional.
   - **Issues etiquetades** (del 5.3): el backlog i el criteri de parada del goal.
4. Es revisa al tancament. Pla B: branca `05-autobuild` amb el resultat fet.

### 5.5 Routine programada (5 min — demo de l'instructor)
Programar una routine al cloud amb `/schedule`:
> «Cada dia laborable a les 9:00, revisa les PRs obertes del repo, comenta-hi suggeriments i envia'm un resum.»

Ensenyar la llista de routines i explicar casos d'ús (informes setmanals de qualitat, triatge d'issues noves). És el mateix concepte que el `/goal` local, però al cloud i amb calendari.

---

## Bloc 6 — Mòdul extra: OpenSpec, spec-driven development (15 min)

*(Mentrestant, a la màquina de l'instructor, el `/goal` del 5.4 continua resolent les issues auto-creades tot sol.)*

**Objectiu:** ensenyar l'altra manera de treballar. La narrativa del dia ha estat *operativa* (issues = feina que arriba); OpenSpec és la manera *de producte* (spec = feina pensada abans de construir). És un mòdul autònom: si el grup va just de temps, es pot deixar com a material per a casa (branca `06-openspec`).

1. **El concepte** (3 min): amb issues, el contracte és curt i el context viu al codi; amb spec-driven, primer s'escriu el contracte complet (requisits, casos límit, criteris) i les tasks se'n deriven. Quan compensa: features grans, equips, greenfield.
2. **Hands-on** (10 min): `openspec init` i crear una proposta:
   > «Crea una proposta OpenSpec per a "valoracions": els usuaris poden valorar amb 1-5 estrelles i comentari les sessions completades; nova taula a la BD, endpoints GET/POST a `/api/ratings`, i mitjana de valoracions a la targeta del professor. Desglossa-la en tasks petites i verificables.»

   Revisar l'spec generada junts (és el moment "aha": tot el que el model necessita saber, escrit abans de tocar codi) i implementar **la primera task** guiada.
3. **El pont** (2 min): les tasks d'OpenSpec també poden alimentar un `/goal` — el mateix patró autònom del 5.4 amb l'spec com a font de veritat. Qui vulgui, ho té complet a la branca `06-openspec`.

---

## Bloc 7 — Tancament (10 min)

- **Primer de tot: revisar la demo autònoma del 5.4.** El `/goal` mostra l'estat (torns, tokens, avaluació); `git log --oneline` de la branca: commits fets sols, issues `auto` tancades. És la imatge final del curs: *el sistema s'ha detectat els problemes, s'ha creat les issues i se les ha resolt sol mentre parlàvem d'OpenSpec*.
- Recapitulació del viatge: prompt → mode pla → MCP → Claude Design → backend real → skills → agents → producció → loop supervisat → issues que es creen soles → `/goal` autònom.
- Xuleta d'un full (repartir/enllaçar): comandes, estructura `.claude/`, enllaços a docs i a skills.sh.
- El repo queda amb totes les branques: *podeu rejugar el curs sencer a casa*.
- Q&A.

---

## Checklist de preparació de l'instructor

**Al repo (abans del curs):**
- [ ] Totes les branques de checkpoint creades i provades de cap a cap.
- [ ] Skills **pròpies** empaquetades a `main`: `tests`, `ship`. Les **externes** (seo, chrome-devtools, remotion) NO s'empaqueten: es documenten les refs exactes de skills.sh al README perquè cadascú les instal·li amb `npx skills add` quan toqui.
- [ ] Agents `test-writer` i `test-verifier` a `.claude/agents/` (branca 03, i a `main` si es vol).
- [ ] Bug del bloc 2 provat: es reprodueix sempre i Claude el troba en < 5 min.
- [ ] **Parany de tests del 1.3 preparat**: Vitest configurat a `main` amb `npm test` en mode watch i `npm run test:unit` com a comanda correcta; `CLAUDE.md` inicial sense la secció de tests. Assajar la demo (sense info → penjat; amb info → verd en segons).
- [ ] **PowerPoints dels blocs 0 i 1** generats a partir de les notes de `STEP0/` i `STEP1/` (repo guia).
- [ ] **Backend assajat**: el prompt del 3.1 provat 2-3 cops de zero — comprovar que Claude tria bé better-sqlite3, que adapta els SQL de Postgres i que la migració de serveis no trenca la UI. Cronometrar-lo.
- [ ] `.mcp.json` amb el servidor de Chrome DevTools.
- [ ] **Claude Design preparat**: projecte creat a claude.ai/design i `/design-sync` provat en les dues direccions (pull de components i push de la landing). Verificar l'accés dels alumnes (Pro/Max) o tenir el pla B (`frontend-design`) a punt.
- [ ] Gist amb el text de les 3 issues per copiar/enganxar + refs de skills.sh.
- [ ] **Autonomia local preparada**: `.claude/settings.json` al repo amb l'allowlist de permisos (npm test, lint, git, gh) i el hook post-edit de lint — sense això la demo del 5.4 es para a cada confirmació. Claude Code v2.1.139+ per a `/goal`.
- [ ] **Demo autònoma assajada**: ultracode creant issues (5.3) + `/goal` resolent-les (5.4), provat de cap a cap i cronometrat — ha de cabre en els ~20 min entre el llançament i el tancament. Branca `05-autobuild` amb el resultat com a pla B.
- [ ] **Mòdul OpenSpec preparat**: spec de "valoracions" assajada i branca `06-openspec` completa (també serveix de material per a casa si el temps no arriba).
- [ ] Projecte de l'instructor a Vercel amb Postgres/Supabase ja connectat (demo del 4.1).
- [ ] **Invitació enviada amb la llista de requisits** (comptes de Claude, GitHub, Vercel) perquè el bloc 0 sigui de verificació, no de creació de comptes.

**Comptes i entorn:**
- [ ] Compte Claude amb crèdit de sobres (la comparativa de 4 models, el backend i l'ultracode consumeixen).
- [ ] Vídeo de Remotion pre-renderitzat (pla B).
- [ ] Eina de videotrucada provada: pantalla compartida llegible (mida de font del terminal gran) i xat per a la checklist del bloc 0.

**Riscos principals i pla B:**
| Risc | Mitigació (curs online: sense pla B d'entorn) |
|---|---|
| A algú li falla l'entorn al bloc 0 | Segueix la demo compartida i es re-enganxa a qualsevol mòdul via branques de checkpoint |
| MCP de Chrome no connecta a algú | Que segueixin la demo; branca solució |
| Claude Design no disponible per a algú | Skill `frontend-design` des del terminal; seguir la demo de l'instructor |
| El backend del 3.1 s'encalla en directe | Branca `03-backend`; explicar el diff en lloc de generar-lo |
| better-sqlite3 falla en compilar (node-gyp) en algun equip | Alternativa pura JS preparada (p. ex. `libsql`/`sql.js`) o branca feta |
| Vercel/Remotion lents | Deploy i vídeo de l'instructor pre-fets |
| Loop d'issues es desvia | Interrompre, ensenyar com redirigir; PRs de mostra pre-creades |
| El `/goal` del 5.4 no acaba a temps | Ensenyar el progrés parcial (`/goal` status, commits, issues tancades) i el resultat complet a `05-autobuild` |
| No hi ha temps per al mòdul OpenSpec | Deixar-lo com a material per a casa: branca `06-openspec` + guió |
| Quota/rate limits amb tants alumnes | Escalonar els exercicis cars (comparativa de models per grups) |

# STEP 1 — Introducció a Claude Code (30 min)

> Notes per a les slides + guió de les demos en directe.

## Slides — 1.1 L'estat dels models (5 min)

- La família Claude i el criteri d'elecció:
  | Model | Perfil | Quan usar-lo |
  |---|---|---|
  | Haiku | ràpid i barat | tasques mecàniques, refactors simples |
  | Sonnet | equilibri | dia a dia |
  | Opus | raonament | bugs difícils, arquitectura |
  | Fable | topall de capacitat | disseny, tasques llargues autònomes |
- Conceptes: context window, cost per token, velocitat vs profunditat.
- Frase clau: **"el model és una elecció d'enginyeria"** (es demostra al 1.4).

## Demo — 1.2 Primer contacte i comandes (7 min)

- `claude` a l'arrel del repo; trencagel: «Explica'm com funciona la capa de serveis…»
- Comandes a ensenyar en directe: `/model`, `/cost`, `/clear`, `/compact`,
  mode pla (shift+tab), permisos.
- Idea per a slide de suport: taula comanda → què fa → quan usar-la.

## Demo — 1.3 CLAUDE.md: d'un repo mut a un repo que s'explica (10 min)

**El parany JA ESTÀ IMPLEMENTAT a `main` del repo del curs** (fet el 04/07/2026):
- Vitest 4 instal·lat; `vitest.config.ts` amb l'alias `@` → `src`.
- 4 tests trivials que passen a `app/src/lib/utils.test.ts` (`cn`,
  `capitalizeFirst`, dades de `PROFESSORS`).
- `package.json`: `"test": "vitest --watch"` i `"test:unit": "vitest run"`.
- ⚠️ Detall tècnic important: cal el `--watch` EXPLÍCIT. Sense flag, Vitest 4
  detecta que no hi ha TTY (com quan Claude executa comandes) i corre una sola
  vegada. Amb `--watch` es queda viu també per a agents — verificat: després
  de 10 s el procés segueix a "Waiting for file changes…".
- El repo del curs està a l'**estadi 0: SENSE `CLAUDE.md`**. La plantilla de
  referència de l'instructor viu a `workshop/informacion-extra.ts` (contingut
  markdown amb extensió .ts i nom anodí perquè Claude no el llegeixi en explorar). El CLAUDE.md real es construeix en directe en aquesta
  demo amb `/init` + refinament.

**Guió de la demo — Part A: el parany dels tests (5 min):**
1. Prompt: «Executa els tests» → Claude prova `npm test` → es queda penjat en
   watch fins al timeout de Bash (~2 min). Cronometrar i comentar.
2. `/init` per generar la base del CLAUDE.md + afegir la regla amb l'**atajo `#`**
   (Claude la incorpora sol al CLAUDE.md):
   > `# els tests s'executen SEMPRE amb npm run test:unit; npm test arrenca
   > Vitest en mode watch i es queda bloquejat`
3. `/clear` + mateix prompt → directe i verd en segons (~200 ms de Vitest).

**Guió de la demo — Part B: ràfega de regles (5 min):**
4. **Idioma**: «Respon SEMPRE en català» → `/clear` → la primera frase canvia
   d'idioma. (30 segons, impacte immediat.)
5. **Zona prohibida**: «No toquis mai `app/src/lib/data/`» → «Canvia el nom de
   la professora Ana Martín» → s'hi nega i ho explica.
6. **Sembrades sense provar** (es cobren més tard):
   - «No executis mai `npm run dev`: el servidor ja corre al port 3000».
   - «Commits en format convencional i en català» (es veu al 3.3).
7. Tancament: el CLAUDE.md **persuadeix**; al STEP5, hooks i permisos
   **obliguen**. Estat final = `informacion-extra.ts` de referència + regla de tests.

## Demo — 1.4 Edita una feature + comparativa de models (8 min)

- Per grups, cada grup amb un `/model` diferent. Mode pla.
- Prompt: «Afegeix al dashboard un filtre per professor…»
- Comparar: temps / qualitat / `/cost`. Re-alinear amb `git checkout 01-fonaments-final`.

## Models i effort d'aquest STEP

| Tasca | Model | Effort |
|---|---|---|
| 1.2 Trencagel i comandes | Sonnet | low |
| 1.3 Demo CLAUDE.md | Sonnet | medium |
| 1.4 Comparativa | Haiku/Sonnet/Opus/Fable | medium (fix per a tots) |

## Material / pendents

- [x] Parany de tests a `main` del repo dels alumnes (fet i verificat).
- [ ] Slide amb la taula de models (preus reals del dia del curs).

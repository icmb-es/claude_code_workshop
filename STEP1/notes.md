# STEP 1 — H2 · Introducció a Claude Code: conceptes i context (60 min, 1:00–2:00)

> El context és LA idea central del dia.

## Slides — 2.1 L'estat dels models (5 min)

| Model | Perfil | Quan |
|---|---|---|
| Haiku | ràpid i barat | mecànic |
| Sonnet | equilibri | dia a dia |
| Opus | raonament | descobriment, autonomia |
| Fable | topall | orquestració, producte |

Frase clau: "el model és una elecció d'enginyeria" (es demostra al 2.5).

## Demo — 2.2 Primer contacte i comandes (10 min)

- Trencagel: «Explica'm com funciona la capa de serveis…»
- `/model`, `/cost`, `/clear`, mode pla (shift+tab), permisos.

## Demo — 2.3 CLAUDE.md: el context canvia el comportament (15 min)

**Principi**: un bon exemple de "el context ajuda" depèn d'un **fet arbitrari
del projecte que NO és al codi** — si Claude ho pot deduir explorant, ho deduirà
(per això es descartà el parany del watch mode: els models l'esquivaven amb
`npm test -- --run`).

**Mecànica = TOGGLE.** El repo ja porta un **CLAUDE.md superútil, però
desactivat**, camuflat com `informacion-extra.ts` (contingut markdown, nom
anodí, `.ts` perquè Claude no el carregui sol). Conté comandes, convencions,
idioma, la regla de "professors congelats" i referencia el PRD (`@docs/prd.md`).
S'activa amb `mv informacion-extra.ts CLAUDE.md`.

**L'exemple estrella — esborrar un professor**: `app/src/lib/data/professors.ts`
sembla la font de veritat (la UI l'importa), però el CLAUDE.md diu que és **dada
congelada de l'equip de Dades**. Claude no ho pot saber pel codi.

- **Part A — sense context (7'):**
  > «Esborra el professor David Ortega de l'aplicació.»

  Claude obre `professors.ts` i esborra l'entrada (plausible però contra la
  política). Comentar-ho.
- **Part B — activar el context (8'):** `mv informacion-extra.ts CLAUDE.md` +
  reiniciar/`/clear`, i repetir el mateix prompt → ara Claude **es nega** a
  tocar el fitxer i explica que el canvi va a la BD. Diferència visible: fitxer
  editat vs. no. Obrir junts el CLAUDE.md i el PRD (`@docs/prd.md`): context en
  capes (com treballar → què és el producte).
- Tancament: CLAUDE.md **persuadeix**; hooks/permisos (H5b) **obliguen**. El
  fitxer congelat lliga amb H3: la font de veritat serà la BD Postgres.

⚠️ **Risc residual de spoiler**: si a la Part A Claude fa un grep ampli de
"professor", pot trobar `informacion-extra.ts` i avançar-se. Mitigació: el nom
anodí. Si passa sovint als assajos, valorar moure la regla fora del repo.

## Slides + demo — 2.4 El context, a fons (15 min)

1. **Permanent**: CLAUDE.md.
2. **Puntual**: fitxers de context amb `@` — ensenyar `@docs/login-corporatiu.md`
   (s'executarà de veritat a H3b).
3. **De conversa**: `/clear` vs `/compact`, degradació, atajo `#`.

## Demo — 2.5 Edita una feature + comparativa de models (15 min)

- Per grups amb `/model` diferent (effort fix medium), mode pla:
  «Afegeix al dashboard un filtre per professor…»
- Comparar temps/qualitat/`/cost`. Re-alinear: `git checkout 01-fonaments-final`.

## Material / pendents

- [x] CLAUDE.md superútil camuflat com `informacion-extra.ts` (regla professors congelats + `@docs/prd.md`).
- [x] PRD del producte a `docs/prd.md`.
- [ ] Assajar el toggle: sense context esborra del fitxer; amb `mv informacion-extra.ts CLAUDE.md`, s'hi nega. Comprovar el risc de grep.
- [ ] Slide taula de models amb preus del dia.

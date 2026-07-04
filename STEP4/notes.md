# STEP 4 — Deploy a Vercel + SEO + vídeo amb Remotion (30 min)

> El deploy va ABANS de l'automatització a propòsit: així al STEP5 cada merge
> del loop acaba a producció sol.

## Demo — 4.1 Deploy a Vercel (15 min)

1. Cada alumne importa el seu fork a Vercel (root directory: `app/`).
2. **Backend a producció** (demo instructor): projecte connectat a Vercel
   Postgres/Supabase reutilitzant els SQL de `bd/` tal qual (ja són Postgres).
3. Tancar el primer cercle: **mergear la PR del backend** (la del /ship del 3.3)
   → Vercel redesplega sol.
4. Frase clau: *"a partir d'ara, tot el que es mergegi a main acaba a producció
   sense tocar res — recordeu-ho al STEP5."*
5. Pla B: `vercel deploy` per CLI o el deploy de l'instructor.

## Demo — 4.2 Anàlisi SEO de la landing (7 min)

- **Presentar skills.sh** (directori de skills de la comunitat): les pròpies
  viuen a `.claude/skills/` del repo (STEP3); les de tercers es descarreguen:
  ```bash
  npx skills add <ref-skill-seo>
  ```
- Prompt:
  > «/seo — analitza la landing: metadades, estructura de headings, schema.org,
  > rendiment.»
- Aplicar 1-2 correccions ràpides. Checkpoint: `04-deploy`.

## Demo — 4.3 Vídeo amb Remotion (8 min — demo instructor)

- Instal·lar la skill de Remotion des de skills.sh.
  > «/remotion — crea un vídeo promocional de 15 segons de l'app: logo,
  > 3 captures de pantalla amb transicions i el CTA final.»
- El render triga: llançar-lo, explicar la skill mentre renderitza, reproduir
  el vídeo en acabar el bloc.
- Pla B: vídeo pre-renderitzat.

## Models i effort d'aquest STEP

| Tasca | Model | Effort |
|---|---|---|
| 4.1 Deploy a Vercel | Sonnet | low |
| 4.2 Anàlisi SEO | Sonnet | medium |
| 4.3 Vídeo Remotion | Sonnet | medium |

## Material / pendents

- [ ] Projecte de l'instructor a Vercel amb Postgres/Supabase ja connectat.
- [ ] Refs exactes de skills.sh (seo, remotion) documentades al README del curs.
- [ ] Vídeo de Remotion pre-renderitzat (pla B).

# claude_code_workshop

Aquest repositori és **documentació / guia de l'instructor** per muntar un workshop de
5 hores sobre Claude Code (en català). Conté el guió (`guio-curs.md`), les notes per bloc
(`STEP0`–`STEP7/notes.md`) i les slides (`STEPn/slides.md`, format **Marp**). **No és
l'entregable** que executen els alumnes.

## Repositoris relacionats

- **Repo dels alumnes (app del curs)**: `/Users/marcbenito/projects/claude_workshop_ensenyament`
  — l'app de reserves Next.js amb les branques de checkpoint (`01-...`, `03-backend`, etc.).
  GitHub: `marcbenito/claude_workshop_ensenyament`.
- **Web pública de checklist d'instal·lació (STEP0)**:
  `/Users/marcbenito/projects/workshop-checklist` → GitHub `marcbenito/workshop-checklist`
  (privat) → desplegada a Vercel. Els assistents hi posen el seu email i marquen els passos.
- **Panell de seguiment de l'instructor**: carpeta `admin-panel/` dins d'aquest repo; corre
  només en local (`npm run dev`), no es desplega.

## Backend de la checklist

Les dues apps (web pública i panell) llegeixen/escriuen a **PostgreSQL** directament via
API routes server-side (`pg`). Taula: `workshop.participants` (PK `email`, una columna
booleana per pas d'instal·lació). La cadena `DATABASE_URL` va en env server-side.

## Slides

Format **Marp** (`marp: true` al frontmatter). Renderitzar/exportar amb:
`npx @marp-team/marp-cli STEP0/slides.md -o STEP0/slides.html` (o l'extensió Marp de VS Code).

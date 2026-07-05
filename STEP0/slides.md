---
marp: true
theme: default
paginate: true
size: 16:9
header: 'Claude Code — Taller pràctic'
footer: 'STEP 0 · Benvinguda i configuració'
style: |
  section {
    font-size: 30px;
  }
  section.lead {
    text-align: center;
    justify-content: center;
  }
  section.lead h1 {
    font-size: 68px;
    margin-bottom: 0.1em;
  }
  h1 { color: #C15F3C; }
  a { color: #C15F3C; }
  code { background: #f4f1ee; }
  table { font-size: 24px; }
---

<!-- _class: lead -->
<!-- _paginate: false -->

# Claude Code
## Taller pràctic — 5 hores, hands-on

De l'autocompletat al paradigma d'agents

<br>

**Ponent:** _[nom]_ · **Data:** _[data]_

---

<!-- _class: lead -->

# Què farem avui

De donar-li **context** a deixar-lo treballar **sol**

---

## El fil conductor del dia

1. **Context** — entendre l'eina i com donar-li context _(H2)_
2. **Ulls** — connectar-lo amb eines via **MCP**: navegador i base de dades _(H3a)_
3. **Construir** — backend real contra Postgres + login corporatiu _(H3b)_
4. **Empaquetar** — **skills** i el teu vídeo amb Remotion _(H4)_
5. **Producte** — Claude **Cowork** i Claude **Design** _(H5a)_
6. **Automatitzar** — el loop, issues que es creen soles, `/goal` autònom _(H5b)_

> Idea central de tot el dia: **el context**. El `CLAUDE.md` persuadeix; el hook obliga.

---

## Horari (5 hores)

| Hora | Bloc | Durada |
|---|---|---|
| 0:00 – 1:00 | **H1** · Benvinguda + configuració | 60 min |
| 1:00 – 2:00 | **H2** · Introducció: conceptes i el context | 60 min |
| 2:00 – 2:40 | **H3a** · MCPs — els ulls de Claude | 40 min |
| 2:40 – 2:55 | ☕ Descans | 15 min |
| 2:55 – 3:35 | **H3b** · Construir: backend + login | 40 min |
| 3:35 – 4:05 | **H4** · Skills i Hooks + el teu vídeo | 30 min |
| 4:05 – 4:30 | **H5a** · Cowork + Claude Design | 25 min |
| 4:30 – 5:00 | **H5b** · Automatització + tancament | 30 min |

---

<!-- _class: lead -->

# Em presento

_[nom]_ — _[rol / a què em dedico]_

_[una línia sobre la meva relació amb Claude Code / IA]_

📧 _[email]_ · 🔗 _[web / LinkedIn / GitHub]_

---

<!-- _class: lead -->

# Fase 0 · Instal·lació

**Una hora sencera, a propòsit.**
Aquí resolem els problemes d'entorn — no a mitja demo.

<br>

### 👉 Obre aquesta web i introdueix el teu email

## _[URL pública de Vercel]_

_[ QR aquí ]_

Aniràs marcant cada pas a mesura que el completis.

---

## La checklist d'instal·lació

| Eina | Instal·lació | Verificació (què has de veure) |
|---|---|---|
| **git** | [git-scm.com/downloads](https://git-scm.com/downloads) | `git -v` → «git version 2.x» |
| **Node.js 20+** | [nodejs.org/en/download](https://nodejs.org/en/download) | `node -v` → «v20.x» o superior |
| **Claude Code** | `npm i -g @anthropic-ai/claude-code` | `claude --version` |
| **Claude Code · login** | `claude` → login | **amb el correu de la inscripció** |
| **Claude Desktop** | [claude.ai/download](https://claude.ai/download) | login |
| **GitHub CLI** | [cli.github.com](https://cli.github.com) | `gh auth status` |
| **Google Chrome** | [google.com/chrome](https://www.google.com/chrome/) | `chrome://version` |
| **Claude in Chrome** | [claude.ai/chrome](https://claude.ai/chrome) | icona a extensions |

⚠️ Claude Code necessita **compte de Claude (Pro o Max)** i cal fer login **amb el mateix correu amb què t'has inscrit al curs**.

---

## Clonar el repo del curs

Amb la **GitHub CLI** ja autenticada (`gh auth login`):

```bash
gh repo clone marcbenito/claude_workshop_ensenyament
cd claude_workshop_ensenyament/app
npm install
npm run dev
```

- El repo porta **`.env`** (amb `DATABASE_URL` de la BD compartida) i **`.mcp.json`**
  ja preparats — **no cal configurar res a mà**.
- Quan `npm run dev` aixequi l'app a `localhost:3000`, ja estàs a punt.

> Marca aquest pas a la web quan l'app arrenqui correctament.

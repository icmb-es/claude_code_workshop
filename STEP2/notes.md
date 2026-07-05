# STEP 3 — H3b · Construir: backend + login corporatiu (40 min, 2:55–3:35)

> Dues maneres de dirigir Claude: mode pla + Opus per DESCOBRIR; fitxer de
> context per EXECUTAR una especificació.

## Demo — 3b.1 Backend amb Opus + mode pla (25 min)

- `/model opus` (high) + mode pla. Claude té els ulls del MCP: llegeix
  l'esquema real abans de proposar.
  > «Aquesta app funciona amb mock a localStorage, i tenim una BD Postgres real
  > ja configurada a .env (DATABASE_URL). Munta el backend:
  > 1. Route handlers a app/src/app/api/ per a reserves (GET/POST/DELETE) i
  >    professors (GET), connectats a Postgres amb pg.
  > 2. Respecta l'esquema existent i la regla del solapament (índex únic → 409).
  > 3. Migra src/lib/services/ a fetch sense tocar la UI.
  > 4. Verifica-ho creant una reserva des de l'app.»
- Negociar el pla («no toquis el login — ve ara», «mantén types.ts»).
- Verificació: la reserva apareix a la BD compartida; es veuen les dels
  companys; xoc de reserves = 409 en viu (feature, no bug).
- Pla B: `03-backend`.

## Demo — 3b.2 Login corporatiu amb fitxer de context (15 min)

- El repo porta `docs/login-corporatiu.md`: el "paràgraf enorme" de plataforma
  amb TOT: taula users, next-auth (versió fixada), Credentials + JWT
  (contrasenya en pla: decisió del curs), fitxers exactes (handler
  [...nextauth], middleware.ts substituint protected-route, SessionProvider
  substituint auth-context, POST /api/register), AUTH_SECRET (ja a .env).
  > «@docs/login-corporatiu.md — implementa el login corporatiu tal com descriu
  > aquest document i verifica registre, login i logout al navegador.»
- Contrast: a 3b.1 Opus descobria; aquí el context fa la feina → Sonnet n'hi
  ha prou. Nivell 2 del context (H2).
- Verificació: sessió sobreviu al refresc; /dashboard sense login → redirigit.
- Pla B: `03-login`.

## Models i effort

| Tasca | Model | Effort |
|---|---|---|
| 3b.1 Backend | **Opus** | **high** |
| 3b.2 Login (context) | Sonnet | medium |

## Material / pendents

- [ ] Escriure `docs/login-corporatiu.md` i assajar-lo sobre `03-backend`.
- [ ] Assajar el backend amb Opus+pla contra el Postgres compartit (2-3 cops).
- [ ] Branques `03-backend` i `03-login`.

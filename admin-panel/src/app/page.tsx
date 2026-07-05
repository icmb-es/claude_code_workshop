"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { STEPS, REQUIRED_STEPS } from "@/lib/steps";
import { SURVEY } from "@/lib/survey";

type Participant = Record<string, boolean | string | number> & {
  email: string;
  login_email: string;
  spend_pct: number;
  survey_done: boolean;
  updated_at: string;
};

type Tab = "enquesta" | "installacio" | "us" | "gestio";

// Llindars de color de l'ús de la IA: ≥85% vermell, ≥65% groc.
function spendColor(pct: number): string {
  if (pct >= 85) return "bg-red-500";
  if (pct >= 65) return "bg-amber-400";
  return "bg-[#C15F3C]";
}

function timeAgo(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime();
  const m = Math.floor(diff / 60000);
  if (m < 1) return "ara mateix";
  if (m < 60) return `fa ${m} min`;
  const h = Math.floor(m / 60);
  if (h < 24) return `fa ${h} h`;
  return `fa ${Math.floor(h / 24)} d`;
}

export default function Panel() {
  const [rows, setRows] = useState<Participant[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loadedAt, setLoadedAt] = useState<Date | null>(null);
  const [auto, setAuto] = useState(true);
  const [tab, setTab] = useState<Tab>("installacio");

  const load = useCallback(async () => {
    try {
      const res = await fetch("/api/participants", { cache: "no-store" });
      const data = await res.json();
      setRows(data.participants ?? []);
      setLoadedAt(new Date());
      setError(null);
    } catch {
      setError("No s'ha pogut carregar. Comprova DATABASE_URL.");
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  useEffect(() => {
    if (!auto) return;
    const id = setInterval(load, 15000);
    return () => clearInterval(id);
  }, [auto, load]);

  const doneCount = useCallback(
    (p: Participant) => REQUIRED_STEPS.filter((s) => p[s.key]).length,
    []
  );

  const perStep = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const s of STEPS) counts[s.key] = rows.filter((r) => r[s.key]).length;
    return counts;
  }, [rows]);

  const fullyDone = rows.filter((r) => doneCount(r) === REQUIRED_STEPS.length).length;

  // Enquesta inicial: entre els qui l'han completada, quants han dit «sí».
  const surveyRows = rows.filter((r) => r.survey_done);
  const surveyCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const q of SURVEY) counts[q.key] = surveyRows.filter((r) => r[q.key]).length;
    return counts;
  }, [surveyRows]);

  const TABS: { id: Tab; label: string }[] = [
    { id: "enquesta", label: "Enquesta" },
    { id: "installacio", label: "Instal·lació" },
    { id: "us", label: "Ús de la IA" },
    { id: "gestio", label: "Gestió" },
  ];

  return (
    <main className="mx-auto max-w-6xl px-6 py-8">
      <header className="mb-4 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Seguiment del taller</h1>
          <p className="text-sm text-neutral-500">
            {rows.length} participants · {fullyDone} llestos
            {loadedAt && ` · actualitzat ${timeAgo(loadedAt.toISOString())}`}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <label className="flex items-center gap-2 text-sm text-neutral-500">
            <input
              type="checkbox"
              checked={auto}
              onChange={(e) => setAuto(e.target.checked)}
              className="h-4 w-4 accent-[#C15F3C]"
            />
            auto (15s)
          </label>
          <button
            onClick={load}
            className="rounded-lg bg-[#C15F3C] px-3 py-1.5 text-sm font-medium text-white hover:bg-[#a94f30]"
          >
            Refresca
          </button>
        </div>
      </header>

      {/* Pestanyes */}
      <div className="mb-6 flex gap-1 border-b border-neutral-200 dark:border-neutral-800">
        {TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`-mb-px border-b-2 px-4 py-2 text-sm font-medium transition ${
              tab === t.id
                ? "border-[#C15F3C] text-[#C15F3C]"
                : "border-transparent text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {error && <p className="mb-4 text-sm text-red-600">{error}</p>}

      {tab === "enquesta" && (
        <EnquestaView
          surveyCounts={surveyCounts}
          total={surveyRows.length}
        />
      )}

      {tab === "installacio" && (
        <InstallacioView rows={rows} doneCount={doneCount} perStep={perStep} />
      )}

      {tab === "us" && <UsView rows={rows} />}

      {tab === "gestio" && <GestioView rows={rows} onReload={load} />}
    </main>
  );
}

/* ---------- Enquesta ---------- */
function EnquestaView({
  surveyCounts,
  total,
}: {
  surveyCounts: Record<string, number>;
  total: number;
}) {
  return (
    <section>
      <h2 className="mb-3 text-sm font-semibold text-neutral-500">
        Enquesta inicial · {total} contestats
      </h2>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {SURVEY.map((q) => {
          const yes = surveyCounts[q.key] ?? 0;
          const pct = total ? Math.round((yes / total) * 100) : 0;
          return (
            <div
              key={q.key}
              className="rounded-xl border border-neutral-200 p-4 dark:border-neutral-800"
            >
              <p className="text-sm font-medium">{q.label}</p>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-3xl font-bold tabular-nums text-[#C15F3C]">
                  {pct}%
                </span>
                <span className="text-sm text-neutral-400">
                  {yes}/{total} sí
                </span>
              </div>
              <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800">
                <div
                  className="h-full rounded-full bg-[#C15F3C]"
                  style={{ width: `${pct}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
      {total === 0 && (
        <p className="mt-4 text-sm text-neutral-400">
          Encara no hi ha cap enquesta contestada.
        </p>
      )}
    </section>
  );
}

/* ---------- Instal·lació ---------- */
function InstallacioView({
  rows,
  doneCount,
  perStep,
}: {
  rows: Participant[];
  doneCount: (p: Participant) => number;
  perStep: Record<string, number>;
}) {
  return (
    <div className="overflow-x-auto rounded-xl border border-neutral-200 dark:border-neutral-800">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-neutral-200 bg-neutral-50 text-left dark:border-neutral-800 dark:bg-neutral-900">
            <th className="px-3 py-2 font-semibold">Email</th>
            <th className="px-3 py-2 text-center font-semibold">Progrés</th>
            {STEPS.map((s) => (
              <th
                key={s.key}
                className="px-2 py-2 text-center font-medium text-neutral-500"
                title={s.title}
              >
                {s.short}
              </th>
            ))}
            <th className="px-3 py-2 text-right font-semibold">Activitat</th>
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 && (
            <tr>
              <td
                colSpan={STEPS.length + 3}
                className="px-3 py-10 text-center text-neutral-400"
              >
                Encara no hi ha cap participant.
              </td>
            </tr>
          )}
          {rows.map((p) => {
            const done = doneCount(p);
            const complete = done === REQUIRED_STEPS.length;
            return (
              <tr
                key={p.email}
                className="border-b border-neutral-100 last:border-0 dark:border-neutral-900"
              >
                <td className="whitespace-nowrap px-3 py-2">
                  <div className="font-medium">{p.email}</div>
                  {p.login_email && p.login_email !== p.email && (
                    <div className="text-xs text-neutral-400">
                      login: {p.login_email}
                    </div>
                  )}
                </td>
                <td className="px-3 py-2 text-center">
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                      complete
                        ? "bg-green-100 text-green-800 dark:bg-green-950 dark:text-green-200"
                        : "bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300"
                    }`}
                  >
                    {done}/{REQUIRED_STEPS.length}
                  </span>
                </td>
                {STEPS.map((s) => (
                  <td key={s.key} className="px-2 py-2 text-center">
                    {p[s.key] ? (
                      <span className="text-green-600">✓</span>
                    ) : (
                      <span className="text-neutral-300 dark:text-neutral-700">·</span>
                    )}
                  </td>
                ))}
                <td className="whitespace-nowrap px-3 py-2 text-right text-neutral-400">
                  {timeAgo(p.updated_at)}
                </td>
              </tr>
            );
          })}
        </tbody>
        {rows.length > 0 && (
          <tfoot>
            <tr className="border-t border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900">
              <td className="px-3 py-2 font-semibold" colSpan={2}>
                Total per pas
              </td>
              {STEPS.map((s) => (
                <td key={s.key} className="px-2 py-2 text-center font-medium">
                  {perStep[s.key]}
                </td>
              ))}
              <td />
            </tr>
          </tfoot>
        )}
      </table>
    </div>
  );
}

/* ---------- Ús de la IA ---------- */
function UsView({ rows }: { rows: Participant[] }) {
  const sorted = [...rows].sort((a, b) => (b.spend_pct ?? 0) - (a.spend_pct ?? 0));
  const avg = rows.length
    ? Math.round(rows.reduce((a, r) => a + (r.spend_pct ?? 0), 0) / rows.length)
    : 0;
  const warn = rows.filter((r) => (r.spend_pct ?? 0) >= 65 && (r.spend_pct ?? 0) < 85).length;
  const crit = rows.filter((r) => (r.spend_pct ?? 0) >= 85).length;

  return (
    <section>
      <div className="mb-5 grid grid-cols-3 gap-3">
        <div className="rounded-xl border border-neutral-200 p-3 dark:border-neutral-800">
          <p className="text-xs text-neutral-500">Mitjana</p>
          <p className="mt-1 text-2xl font-bold tabular-nums">{avg}%</p>
        </div>
        <div className="rounded-xl border border-amber-300 bg-amber-50 p-3 dark:border-amber-900/60 dark:bg-amber-950/30">
          <p className="text-xs text-amber-700 dark:text-amber-300">≥ 65%</p>
          <p className="mt-1 text-2xl font-bold tabular-nums text-amber-700 dark:text-amber-300">
            {warn}
          </p>
        </div>
        <div className="rounded-xl border border-red-300 bg-red-50 p-3 dark:border-red-900/60 dark:bg-red-950/30">
          <p className="text-xs text-red-700 dark:text-red-300">≥ 85%</p>
          <p className="mt-1 text-2xl font-bold tabular-nums text-red-700 dark:text-red-300">
            {crit}
          </p>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800">
        {sorted.length === 0 && (
          <p className="px-3 py-10 text-center text-neutral-400">
            Encara no hi ha cap participant.
          </p>
        )}
        {sorted.map((p) => {
          const pct = p.spend_pct ?? 0;
          return (
            <div
              key={p.email}
              className="flex items-center gap-3 border-b border-neutral-100 px-3 py-2.5 last:border-0 dark:border-neutral-900"
            >
              <span className="w-56 shrink-0 truncate text-sm font-medium">
                {p.email}
              </span>
              <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800">
                <div
                  className={`h-full rounded-full ${spendColor(pct)}`}
                  style={{ width: `${pct}%` }}
                />
              </div>
              <span
                className={`w-12 text-right text-sm font-semibold tabular-nums ${
                  pct >= 85
                    ? "text-red-600"
                    : pct >= 65
                      ? "text-amber-600"
                      : "text-neutral-600 dark:text-neutral-300"
                }`}
              >
                {pct}%
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ---------- Gestió (alta massiva + eliminar) ---------- */
type ParsedRow = { email: string; loginEmail: string };

function parseBulk(text: string): ParsedRow[] {
  const out: ParsedRow[] = [];
  for (const line of text.split("\n")) {
    const t = line.trim();
    if (!t) continue;
    const parts = t.split(/[\s,;\t]+/).filter(Boolean);
    if (parts.length < 2) continue;
    const [email, loginEmail] = parts;
    // Salta la capçalera (p. ex. "EMAIL Origen destino").
    if (!email.includes("@") || !loginEmail.includes("@")) continue;
    out.push({ email: email.toLowerCase(), loginEmail: loginEmail.toLowerCase() });
  }
  return out;
}

function GestioView({
  rows,
  onReload,
}: {
  rows: Participant[];
  onReload: () => void;
}) {
  const [text, setText] = useState("");
  const [msg, setMsg] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [confirmEmail, setConfirmEmail] = useState<string | null>(null);

  const parsed = useMemo(() => parseBulk(text), [text]);

  async function createBulk() {
    if (!parsed.length) return;
    setBusy(true);
    setMsg(null);
    try {
      const res = await fetch("/api/participants", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rows: parsed }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error();
      setMsg(
        `✅ ${data.created} usuaris creats/actualitzats${
          data.invalid?.length ? ` · ${data.invalid.length} línies ignorades` : ""
        }.`
      );
      setText("");
      onReload();
    } catch {
      setMsg("❌ Error en crear els usuaris.");
    } finally {
      setBusy(false);
    }
  }

  async function remove(email: string) {
    setBusy(true);
    try {
      await fetch(`/api/participants?email=${encodeURIComponent(email)}`, {
        method: "DELETE",
      });
      setConfirmEmail(null);
      onReload();
    } finally {
      setBusy(false);
    }
  }

  return (
    <section className="space-y-8">
      {/* Alta massiva */}
      <div>
        <h2 className="mb-2 text-sm font-semibold text-neutral-500">
          Alta massiva d&apos;usuaris
        </h2>
        <p className="mb-3 text-sm text-neutral-500">
          Enganxa una línia per usuari: <code>email_inscripció</code> i{" "}
          <code>email_login</code> (separats per tab, espais, coma o punt i coma). Es pot
          incloure la capçalera; s&apos;ignora.
        </p>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={8}
          placeholder={"anton.davila@icmb.es    crisgomal@gmail.com\njavier.moreno@icmb.es    marcbenito@gmail.com"}
          className="w-full rounded-lg border border-neutral-300 bg-white p-3 font-mono text-sm outline-none focus:border-[#C15F3C] dark:border-neutral-700 dark:bg-neutral-900"
        />
        <div className="mt-3 flex items-center gap-3">
          <button
            onClick={createBulk}
            disabled={!parsed.length || busy}
            className="rounded-lg bg-[#C15F3C] px-4 py-2 text-sm font-medium text-white hover:bg-[#a94f30] disabled:opacity-40"
          >
            Crea / actualitza {parsed.length || ""} usuaris
          </button>
          {msg && <span className="text-sm text-neutral-600 dark:text-neutral-300">{msg}</span>}
        </div>
      </div>

      {/* Eliminar */}
      <div>
        <h2 className="mb-2 text-sm font-semibold text-neutral-500">
          Usuaris ({rows.length})
        </h2>
        <div className="overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800">
          {rows.length === 0 && (
            <p className="px-3 py-8 text-center text-neutral-400">Cap usuari.</p>
          )}
          {rows.map((p) => (
            <div
              key={p.email}
              className="flex items-center justify-between gap-3 border-b border-neutral-100 px-3 py-2 last:border-0 dark:border-neutral-900"
            >
              <div className="min-w-0">
                <span className="text-sm font-medium">{p.email}</span>
                {p.login_email && (
                  <span className="ml-2 text-xs text-neutral-400">
                    → {p.login_email}
                  </span>
                )}
              </div>
              {confirmEmail === p.email ? (
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-neutral-500">Segur?</span>
                  <button
                    onClick={() => remove(p.email)}
                    disabled={busy}
                    className="rounded bg-red-600 px-2 py-1 text-xs font-medium text-white"
                  >
                    Elimina
                  </button>
                  <button
                    onClick={() => setConfirmEmail(null)}
                    className="text-xs text-neutral-500 underline"
                  >
                    cancel·la
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setConfirmEmail(p.email)}
                  className="rounded px-2 py-1 text-xs text-red-600 hover:bg-red-50 dark:hover:bg-red-950/40"
                >
                  ✕ elimina
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

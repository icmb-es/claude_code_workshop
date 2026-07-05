import { NextResponse } from "next/server";
import { pool } from "@/lib/db";
import { STEPS } from "@/lib/steps";
import { SURVEY } from "@/lib/survey";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const COLUMNS = STEPS.map((s) => s.key);
const SURVEY_COLUMNS = SURVEY.map((q) => q.key);

function normalizeEmail(raw: unknown): string | null {
  if (typeof raw !== "string") return null;
  const email = raw.trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return null;
  return email;
}

// GET /api/participants → totes les files, ordenades per darrera activitat.
export async function GET() {
  const cols = COLUMNS.join(", ");
  const surveyCols = SURVEY_COLUMNS.join(", ");
  const { rows } = await pool.query(
    `SELECT email, login_email, ${cols}, spend_pct, survey_done, ${surveyCols}, updated_at
       FROM workshop.participants
      ORDER BY updated_at DESC`
  );
  return NextResponse.json({ participants: rows });
}

// POST /api/participants  { rows: [{ email, loginEmail }] }
//   Alta massiva: crea/actualitza participants amb el seu correu de login.
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "JSON invàlid" }, { status: 400 });
  }
  const rawRows = (body as { rows?: unknown })?.rows;
  if (!Array.isArray(rawRows)) {
    return NextResponse.json({ error: "falta rows[]" }, { status: 400 });
  }

  const valid: { email: string; login: string }[] = [];
  const invalid: string[] = [];
  for (const r of rawRows) {
    const email = normalizeEmail((r as { email?: unknown })?.email);
    const login = normalizeEmail((r as { loginEmail?: unknown })?.loginEmail);
    if (email && login) valid.push({ email, login });
    else invalid.push(JSON.stringify(r));
  }

  let created = 0;
  for (const { email, login } of valid) {
    await pool.query(
      `INSERT INTO workshop.participants (email, login_email)
       VALUES ($1, $2)
       ON CONFLICT (email)
       DO UPDATE SET login_email = EXCLUDED.login_email, updated_at = now()`,
      [email, login]
    );
    created++;
  }

  return NextResponse.json({ ok: true, created, invalid });
}

// DELETE /api/participants?email=...  → elimina un participant.
export async function DELETE(request: Request) {
  const email = normalizeEmail(new URL(request.url).searchParams.get("email"));
  if (!email) {
    return NextResponse.json({ error: "email invàlid" }, { status: 400 });
  }
  const res = await pool.query(
    `DELETE FROM workshop.participants WHERE email = $1`,
    [email]
  );
  return NextResponse.json({ ok: true, deleted: res.rowCount ?? 0 });
}

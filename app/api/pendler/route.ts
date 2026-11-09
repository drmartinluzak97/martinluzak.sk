import { NextResponse } from "next/server"
import { Resend } from "resend"
import * as Sentry from "@sentry/nextjs"

/**
 * Pendler – prijíma formuláre z aplikácie Pendler (iná doména / mobilná appka)
 * a posiela ich e-mailom cez Resend na hello@martinluzak.sk.
 *
 * POST /api/pendler
 *   { kind: "doctor", ...údaje o lekárovi }  – návrh lekára hovoriaceho po slovensky
 *   { kind: "report", page, message, ... }    – nahlásenie chyby / neaktuálnych údajov
 *
 * Nič sa nikde neukladá – e-mail je jediný výstup. Zverejnenie robí človek ručne.
 */

const resendApiKey = process.env.RESEND_API_KEY
const resend = resendApiKey ? new Resend(resendApiKey) : null

const RECEIVER_EMAIL = process.env.CONTACT_RECEIVER_EMAIL || "hello@martinluzak.sk"
const SENDER_EMAIL = process.env.PENDLER_SENDER_EMAIL || process.env.CONTACT_SENDER_EMAIL || "Pendler <hello@martinluzak.sk>"

// Domény, z ktorých môže prehliadač volať tento endpoint (CORS).
// capacitor://localhost a https://localhost používa budúca mobilná appka (Capacitor iOS / Android).
const ALLOWED_ORIGINS = (
  process.env.PENDLER_ALLOWED_ORIGINS ||
  "https://pendler.martinluzak.sk,http://localhost:3000,capacitor://localhost,https://localhost"
)
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean)

function isAllowedOrigin(origin: string | null) {
  if (!origin) return false
  if (ALLOWED_ORIGINS.includes(origin)) return true
  // náhľady Pendlera na Verceli (napr. pendler-git-xyz.vercel.app)
  return /^https:\/\/pendler[a-z0-9-]*\.vercel\.app$/.test(origin)
}

function corsHeaders(origin: string | null): Record<string, string> {
  const h: Record<string, string> = {
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
    Vary: "Origin",
  }
  if (origin && isAllowedOrigin(origin)) h["Access-Control-Allow-Origin"] = origin
  return h
}

function json(origin: string | null, body: unknown, status = 200) {
  return NextResponse.json(body, { status, headers: corsHeaders(origin) })
}

// Jednoduchý limit: najviac 5 odoslaní za 10 minút z jednej IP (v rámci jednej inštancie servera).
const WINDOW_MS = 10 * 60 * 1000
const MAX_PER_WINDOW = 5
const hits = new Map<string, number[]>()
function rateLimited(ip: string) {
  const now = Date.now()
  const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS)
  recent.push(now)
  hits.set(ip, recent)
  if (hits.size > 5000) hits.clear()
  return recent.length > MAX_PER_WINDOW
}

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")

function str(v: unknown, max: number): string {
  return typeof v === "string" ? v.trim().slice(0, max) : ""
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const COUNTRIES: Record<string, string> = { cz: "Česko", at: "Rakúsko", hu: "Maďarsko", pl: "Poľsko", ua: "Ukrajina" }

type Row = [label: string, value: string]

function renderEmail(title: string, badge: string, rows: Row[], note?: string) {
  const text = `${title}\n\n${rows.map(([k, v]) => `${k}: ${v || "–"}`).join("\n")}${note ? `\n\n${note}` : ""}`
  const html = `
<div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;max-width:620px;margin:0 auto;padding:24px;border:1px solid #e2e8f0;border-radius:12px;background:#fff;color:#1a202c">
  <span style="display:inline-block;padding:4px 10px;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:.05em;border-radius:6px;background:#dcefe7;color:#0f7a5c">${esc(badge)}</span>
  <h2 style="margin:12px 0 20px;font-size:20px;color:#0f172a">${esc(title)}</h2>
  <table style="width:100%;border-collapse:collapse;font-size:14px">
    ${rows
      .map(
        ([k, v]) => `<tr>
      <td style="padding:8px 12px 8px 0;border-top:1px solid #edf2f7;color:#64748b;vertical-align:top;white-space:nowrap">${esc(k)}</td>
      <td style="padding:8px 0;border-top:1px solid #edf2f7;white-space:pre-wrap">${v ? esc(v) : "–"}</td>
    </tr>`,
      )
      .join("")}
  </table>
  ${note ? `<p style="margin-top:20px;font-size:12px;color:#94a3b8">${esc(note)}</p>` : ""}
</div>`
  return { text, html }
}

export async function OPTIONS(request: Request) {
  const origin = request.headers.get("origin")
  return new NextResponse(null, { status: isAllowedOrigin(origin) ? 204 : 403, headers: corsHeaders(origin) })
}

export async function POST(request: Request) {
  const origin = request.headers.get("origin")
  if (origin && !isAllowedOrigin(origin)) {
    return json(origin, { success: false, error: "Nepovolený pôvod požiadavky." }, 403)
  }

  try {
    const ip = (request.headers.get("x-forwarded-for") || "").split(",")[0].trim() || "unknown"
    if (rateLimited(ip)) {
      return json(origin, { success: false, error: "Príliš veľa odoslaní. Skús to o pár minút." }, 429)
    }

    const body = await request.json().catch(() => null)
    if (!body || typeof body !== "object") return json(origin, { success: false, error: "Neplatná požiadavka." }, 400)

    // Honeypot – roboty vyplnia aj skryté pole; tvárime sa, že je všetko v poriadku.
    if (str(body.website, 200)) return json(origin, { success: true })

    const email = str(body.email, 200)
    if (email && !EMAIL_RE.test(email)) return json(origin, { success: false, error: "Zadaj platný e-mail alebo ho nechaj prázdny." }, 400)

    let subject: string
    let content: { text: string; html: string }

    if (body.kind === "doctor") {
      const name = str(body.name, 200)
      const specialty = str(body.specialty, 200)
      const country = str(body.country, 4)
      const city = str(body.city, 200)
      if (!name || !specialty || !COUNTRIES[country] || !city) {
        return json(origin, { success: false, error: "Vyplň meno, odbor, krajinu a mesto." }, 400)
      }
      if (body.consent !== true) {
        return json(origin, { success: false, error: "Potrebujeme tvoj súhlas so spracovaním údajov." }, 400)
      }
      subject = `[Pendler] Návrh lekára: ${name} (${specialty}, ${city})`
      content = renderEmail(
        "Nový návrh lekára",
        "Pendler · lekári",
        [
          ["Meno / ambulancia", name],
          ["Odbor", specialty],
          ["Krajina", COUNTRIES[country]],
          ["Mesto", city],
          ["Adresa", str(body.address, 300)],
          ["Telefón", str(body.phone, 100)],
          ["Web", str(body.web, 300)],
          ["Po slovensky hovorí", str(body.speaker, 100)],
          ["Poistenie", str(body.insurance, 100)],
          ["Poznámka", str(body.note, 2000)],
          ["Navrhuje", str(body.submitterRole, 100)],
          ["E-mail navrhovateľa", email],
        ],
        "Pred zverejnením over údaje priamo v ambulancii a pridaj záznam do lib/doctors.ts v repe pendler.",
      )
    } else if (body.kind === "report") {
      const message = str(body.message, 3000)
      if (message.length < 5) return json(origin, { success: false, error: "Napíš, čo nesedí (aspoň pár slov)." }, 400)
      const page = str(body.page, 300)
      const topic = str(body.topic, 100)
      const context = str(body.context, 300)
      subject = `[Pendler] ${topic || "Nahlásenie"}: ${context || page || "aplikácia"}`
      content = renderEmail("Nahlásenie chyby / neaktuálnych údajov", "Pendler · nahlásenie", [
        ["Typ", topic],
        ["Stránka", page],
        ["Týka sa", context],
        ["Správa", message],
        ["E-mail", email],
      ])
    } else {
      return json(origin, { success: false, error: "Neznámy typ formulára." }, 400)
    }

    if (!resend) {
      console.warn("RESEND_API_KEY nie je nastavený – Pendler formulár len zalogovaný.", { subject })
      return json(origin, { success: true, mock: true })
    }

    const { error } = await resend.emails.send({
      from: SENDER_EMAIL,
      to: [RECEIVER_EMAIL],
      ...(email ? { replyTo: email } : {}),
      subject,
      text: content.text,
      html: content.html,
    })

    if (error) {
      Sentry.captureException(new Error(`Pendler Resend error: ${error.message || JSON.stringify(error)}`))
      return json(origin, { success: false, error: "Odoslanie zlyhalo. Skús to neskôr alebo napíš na hello@martinluzak.sk." }, 500)
    }

    return json(origin, { success: true })
  } catch (err) {
    Sentry.captureException(err)
    return json(origin, { success: false, error: "Nastala neočakávaná chyba. Skús to neskôr." }, 500)
  }
}

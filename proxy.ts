import { NextResponse, type NextRequest } from "next/server"

/**
 * Ochrana vybraných častí webu heslom cez HTTP Basic Auth.
 * Chráni cestu aj všetko pod ňou (podstránky, CSS, PDF…).
 *
 * Premenné vo Verceli (Settings → Environment Variables):
 *   /old   → OLD_PASSWORD  (+ nepovinné OLD_USER)
 *   /trip  → TRIP_PASSWORD (+ nepovinné TRIP_USER)
 *
 * Ak *_USER nie je nastavené, meno môže byť ľubovoľné.
 * Ak heslo chýba, prístup je zamietnutý (fail-closed).
 */

type Area = {
  prefix: string
  realm: string
  passwordEnv: string
  userEnv: string
}

const AREAS: Area[] = [
  { prefix: "/old", realm: "Stara verzia webu", passwordEnv: "OLD_PASSWORD", userEnv: "OLD_USER" },
  { prefix: "/trip", realm: "Japan Trip", passwordEnv: "TRIP_PASSWORD", userEnv: "TRIP_USER" },
]

const NO_INDEX = "noindex, nofollow"

async function sha256(value: string): Promise<Uint8Array> {
  const data = new TextEncoder().encode(value)
  return new Uint8Array(await crypto.subtle.digest("SHA-256", data))
}

// Porovnanie v konštantnom čase (cez hash, aby nezáležalo na dĺžke).
async function safeEqual(a: string, b: string): Promise<boolean> {
  const [ha, hb] = await Promise.all([sha256(a), sha256(b)])
  let diff = 0
  for (let i = 0; i < ha.length; i++) diff |= ha[i] ^ hb[i]
  return diff === 0
}

function unauthorized(realm: string, message = "Vyžaduje sa heslo.") {
  return new NextResponse(message, {
    status: 401,
    headers: {
      "WWW-Authenticate": `Basic realm="${realm}", charset="UTF-8"`,
      "Cache-Control": "no-store",
      "X-Robots-Tag": NO_INDEX,
      "Content-Type": "text/plain; charset=utf-8",
    },
  })
}

function parseBasicAuth(header: string | null): { user: string; password: string } | null {
  const [scheme, encoded] = (header ?? "").split(" ")
  if (scheme?.toLowerCase() !== "basic" || !encoded) return null
  try {
    const bytes = Uint8Array.from(atob(encoded), (c) => c.charCodeAt(0))
    const decoded = new TextDecoder().decode(bytes)
    const sep = decoded.indexOf(":")
    if (sep === -1) return null
    return { user: decoded.slice(0, sep), password: decoded.slice(sep + 1) }
  } catch {
    return null
  }
}

function findArea(pathname: string): Area | undefined {
  return AREAS.find((a) => pathname === a.prefix || pathname.startsWith(a.prefix + "/"))
}

export async function proxy(request: NextRequest) {
  const area = findArea(request.nextUrl.pathname)
  if (!area) return NextResponse.next()

  const expectedPassword = process.env[area.passwordEnv]
  const expectedUser = process.env[area.userEnv]

  if (!expectedPassword) {
    return new NextResponse("Táto časť webu je nedostupná.", {
      status: 503,
      headers: { "Cache-Control": "no-store", "X-Robots-Tag": NO_INDEX },
    })
  }

  const creds = parseBasicAuth(request.headers.get("authorization"))
  if (!creds) return unauthorized(area.realm)

  const passwordOk = await safeEqual(creds.password, expectedPassword)
  const userOk = expectedUser ? await safeEqual(creds.user, expectedUser) : true
  if (!passwordOk || !userOk) return unauthorized(area.realm, "Nesprávne heslo.")

  const response = NextResponse.next()
  response.headers.set("X-Robots-Tag", NO_INDEX)
  response.headers.set("Cache-Control", "private, no-store")
  return response
}

export const config = {
  matcher: ["/old", "/old/:path*", "/trip", "/trip/:path*"],
}

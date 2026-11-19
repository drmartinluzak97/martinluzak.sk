import { NextResponse, type NextRequest } from "next/server"

/**
 * Ochrana starej verzie webu (/old a všetko pod ňou, vrátane PDF) heslom
 * cez HTTP Basic Auth.
 *
 * Nastavenie vo Verceli (Settings → Environment Variables):
 *   OLD_PASSWORD  – povinné, heslo
 *   OLD_USER      – nepovinné; ak nie je nastavené, meno môže byť ľubovoľné
 *
 * Ak OLD_PASSWORD chýba, prístup je zamietnutý (fail-closed).
 */

const REALM = "Stara verzia webu"

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

function unauthorized(message = "Vyžaduje sa heslo.") {
  return new NextResponse(message, {
    status: 401,
    headers: {
      "WWW-Authenticate": `Basic realm="${REALM}", charset="UTF-8"`,
      "Cache-Control": "no-store",
      "X-Robots-Tag": "noindex, nofollow",
      "Content-Type": "text/plain; charset=utf-8",
    },
  })
}

export async function proxy(request: NextRequest) {
  const expectedPassword = process.env.OLD_PASSWORD
  const expectedUser = process.env.OLD_USER

  if (!expectedPassword) {
    return new NextResponse("Stará verzia webu je nedostupná.", {
      status: 503,
      headers: { "Cache-Control": "no-store", "X-Robots-Tag": "noindex, nofollow" },
    })
  }

  const header = request.headers.get("authorization") ?? ""
  const [scheme, encoded] = header.split(" ")
  if (scheme?.toLowerCase() !== "basic" || !encoded) return unauthorized()

  let decoded: string
  try {
    const bytes = Uint8Array.from(atob(encoded), (c) => c.charCodeAt(0))
    decoded = new TextDecoder().decode(bytes)
  } catch {
    return unauthorized()
  }

  const sep = decoded.indexOf(":")
  if (sep === -1) return unauthorized()
  const user = decoded.slice(0, sep)
  const password = decoded.slice(sep + 1)

  const passwordOk = await safeEqual(password, expectedPassword)
  const userOk = expectedUser ? await safeEqual(user, expectedUser) : true
  if (!passwordOk || !userOk) return unauthorized("Nesprávne heslo.")

  const response = NextResponse.next()
  response.headers.set("X-Robots-Tag", "noindex, nofollow")
  response.headers.set("Cache-Control", "private, no-store")
  return response
}

export const config = {
  matcher: ["/old", "/old/:path*"],
}

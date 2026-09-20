import { NextResponse } from "next/server"
import { Resend } from "resend"

const resendApiKey = process.env.RESEND_API_KEY
const resend = resendApiKey ? new Resend(resendApiKey) : null

// Default destination email
const RECEIVER_EMAIL = process.env.CONTACT_RECEIVER_EMAIL || "hello@martinluzak.sk"
// Verified domain sender email
const SENDER_EMAIL = process.env.CONTACT_SENDER_EMAIL || "Martin Lužák <hello@martinluzak.sk>"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, type, message, honeypot } = body

    // Anti-bot honeypot check: if filled, reject silently or fake success
    if (honeypot) {
      return NextResponse.json({ success: true, message: "Message received." })
    }

    // Basic validation
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json(
        { error: "Please enter your name." },
        { status: 400 }
      )
    }

    if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      )
    }

    if (!message || typeof message !== "string" || message.trim().length < 5) {
      return NextResponse.json(
        { error: "Message must be at least 5 characters long." },
        { status: 400 }
      )
    }

    const category = type === "bug" ? "🐛 Issue Report" : "✉️ Quick Message"
    const subjectPrefix = type === "bug" ? "[Website Issue]" : "[Website Message]"
    const subject = `${subjectPrefix} from ${name}`

    // If Resend API key is not configured yet (e.g. in local development before user adds key)
    if (!resend) {
      console.warn("⚠️ RESEND_API_KEY is not configured in environment variables.")
      console.log("Mock received contact message:", { name, email, type, message })
      return NextResponse.json(
        {
          success: true,
          mock: true,
          message: "Message received (development mode without API key).",
        },
        { status: 200 }
      )
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: SENDER_EMAIL,
      to: [RECEIVER_EMAIL],
      replyTo: email,
      subject: subject,
      text: `Category: ${category}\nFrom: ${name} (${email})\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff; color: #1a202c;">
          <div style="border-bottom: 1px solid #edf2f7; padding-bottom: 16px; margin-bottom: 20px;">
            <span style="display: inline-block; padding: 4px 10px; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; border-radius: 6px; background-color: ${type === "bug" ? "#fee2e2" : "#e0f2fe"}; color: ${type === "bug" ? "#991b1b" : "#075985"};">
              ${category}
            </span>
            <h2 style="margin: 12px 0 0 0; font-size: 20px; font-weight: 700; color: #0f172a;">
              New message from martinluzak.sk
            </h2>
          </div>

          <div style="margin-bottom: 20px; padding: 14px; background-color: #f8fafc; border-radius: 8px;">
            <p style="margin: 0 0 6px 0; font-size: 14px;"><strong>Sender:</strong> ${name}</p>
            <p style="margin: 0; font-size: 14px;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></p>
          </div>

          <div style="margin-bottom: 24px;">
            <p style="font-size: 13px; font-weight: 600; color: #64748b; text-transform: uppercase; margin-bottom: 8px;">Message body:</p>
            <div style="padding: 16px; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; font-size: 15px; line-height: 1.6; white-space: pre-wrap; color: #334155;">
${message}
            </div>
          </div>

          <div style="border-top: 1px solid #edf2f7; padding-top: 16px; font-size: 12px; color: #94a3b8; text-align: center;">
            You can reply directly by clicking &bdquo;Reply&ldquo; in your email client.
          </div>
        </div>
      `,
    })

    if (error) {
      console.error("Resend API error:", error)
      return NextResponse.json(
        { error: `Send error: ${error.message}` },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, id: data?.id })
  } catch (err: unknown) {
    console.error("Contact API route exception:", err)
    return NextResponse.json(
      { error: "An unexpected server error occurred. Please try again later." },
      { status: 500 }
    )
  }
}

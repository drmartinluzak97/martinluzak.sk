import { NextResponse } from "next/server"
import { MARTIN_KNOWLEDGE_BASE } from "@/lib/ai-knowledge"

// Environment variable keys for the Big 3
const GEMINI_API_KEY = process.env.GEMINI_API_KEY
const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY
const OPENAI_API_KEY = process.env.OPENAI_API_KEY

interface ChatMessage {
  role: "user" | "assistant" | "system"
  content: string
}

export async function POST(request: Request) {
  try {
    const { messages }: { messages: ChatMessage[] } = await request.json()

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: "Missing message history" }, { status: 400 })
    }

    const latestUserMessage = messages[messages.length - 1]?.content || ""

    // 1. Check Google Gemini (Primary / Default)
    if (GEMINI_API_KEY) {
      try {
        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              systemInstruction: {
                parts: [{ text: MARTIN_KNOWLEDGE_BASE }],
              },
              contents: messages.map((m) => ({
                role: m.role === "assistant" ? "model" : "user",
                parts: [{ text: m.content }],
              })),
              generationConfig: {
                temperature: 0.4,
                maxOutputTokens: 600,
              },
            }),
          }
        )

        if (response.ok) {
          const data = await response.json()
          const answer = data.candidates?.[0]?.content?.parts?.[0]?.text
          if (answer) {
            return NextResponse.json({ reply: answer, provider: "Google Gemini" })
          }
        }
      } catch (geminiErr) {
        console.error("Gemini API call error:", geminiErr)
      }
    }

    // 2. Check Anthropic Claude
    if (ANTHROPIC_API_KEY) {
      try {
        const response = await fetch("https://api.anthropic.com/v1/messages", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": ANTHROPIC_API_KEY,
            "anthropic-version": "2023-06-01",
          },
          body: JSON.stringify({
            model: "claude-3-5-haiku-20241022",
            max_tokens: 600,
            system: MARTIN_KNOWLEDGE_BASE,
            messages: messages.map((m) => ({
              role: m.role === "assistant" ? "assistant" : "user",
              content: m.content,
            })),
          }),
        })

        if (response.ok) {
          const data = await response.json()
          const answer = data.content?.[0]?.text
          if (answer) {
            return NextResponse.json({ reply: answer, provider: "Anthropic Claude" })
          }
        }
      } catch (claudeErr) {
        console.error("Anthropic API call error:", claudeErr)
      }
    }

    // 3. Check OpenAI
    if (OPENAI_API_KEY) {
      try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${OPENAI_API_KEY}`,
          },
          body: JSON.stringify({
            model: "gpt-4o-mini",
            messages: [
              { role: "system", content: MARTIN_KNOWLEDGE_BASE },
              ...messages.map((m) => ({ role: m.role, content: m.content })),
            ],
            max_tokens: 600,
            temperature: 0.4,
          }),
        })

        if (response.ok) {
          const data = await response.json()
          const answer = data.choices?.[0]?.message?.content
          if (answer) {
            return NextResponse.json({ reply: answer, provider: "OpenAI GPT-4o" })
          }
        }
      } catch (openAiErr) {
        console.error("OpenAI API call error:", openAiErr)
      }
    }

    // Fallback Mock Response if no API key is configured yet in local environment
    return NextResponse.json({
      reply: `Hi! I'm Martin's AI Ambassador. (Running in demo mode until an API key is connected).\n\nMartin has 7+ years of experience bridging technical systems with human leadership. He recently supported global maritime fleets with Starlink and VSAT at Marlink, managed European infrastructure monitoring at DPD, and helped win the Senior Friendly 2023 award at DIATYRNAVIA.\n\nFeel free to reach out to Martin directly at hello@martinluzak.sk!`,
      provider: "Demo Mode (Add GEMINI_API_KEY to activate live AI)",
    })
  } catch (error) {
    console.error("Chat API error:", error)
    return NextResponse.json(
      { error: "Failed to generate AI response. Please try again." },
      { status: 500 }
    )
  }
}

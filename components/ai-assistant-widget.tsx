"use client"

import { useState, useRef, useEffect } from "react"
import { Sparkles, MessageCircle, X, Send, Bot, User, RotateCcw, Loader2 } from "lucide-react"

interface Message {
  role: "user" | "assistant"
  content: string
}

const SUGGESTED_PROMPTS = [
  "What are Martin's satellite & Starlink skills?",
  "Tell me about Martin's certifications",
  "What kind of roles is Martin looking for in 2026?",
  "Aké sú Martinove hlavné skúsenosti? (SK)",
]

export function AIAssistantWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hello! I'm Martin's AI Ambassador. Ask me anything about his technical background, Starlink & satellite experience, certifications, or career philosophy.",
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [provider, setProvider] = useState<string | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    if (isOpen) {
      scrollToBottom()
    }
  }, [messages, isOpen])

  const handleSend = async (textToSend?: string) => {
    const query = textToSend || inputValue
    if (!query.trim() || isLoading) return

    const newMessages: Message[] = [...messages, { role: "user", content: query.trim() }]
    setMessages(newMessages)
    setInputValue("")
    setIsLoading(true)

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      })

      const data = await res.json()
      if (data.reply) {
        setMessages((prev) => [...prev, { role: "assistant", content: data.reply }])
        if (data.provider) setProvider(data.provider)
      } else {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: "Sorry, I couldn't reach the AI provider. Please try again or reach out directly at hello@martinluzak.sk.",
          },
        ])
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "A network error occurred. Please check your connection and try again.",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  const handleReset = () => {
    setMessages([
      {
        role: "assistant",
        content:
          "Conversation reset. How can I help you explore Martin's experience?",
      },
    ])
  }

  return (
    <>
      {/* Floating trigger pill in bottom right */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-40 animate-fade-in">
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            aria-label="Open AI Assistant"
            className="group relative flex items-center gap-2.5 rounded-full border border-primary/40 bg-card/90 px-4 py-3 shadow-2xl backdrop-blur-md glass transition-all duration-300 hover:border-primary hover:shadow-primary/20 hover:scale-105 active:scale-95"
          >
            <div className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
            </div>
            <Sparkles className="h-4 w-4 text-primary transition-transform duration-300 group-hover:rotate-12" />
            <span className="font-mono text-xs font-semibold tracking-wide text-foreground">
              Ask AI about Martin
            </span>
          </button>
        </div>
      )}

      {/* Floating Chat Modal */}
      {isOpen && (
        <div className="fixed bottom-6 right-4 sm:right-6 z-50 flex w-[calc(100vw-2rem)] sm:w-[420px] max-h-[580px] h-[82vh] flex-col rounded-2xl border border-border/70 bg-card shadow-2xl glass animate-scale-in">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-border/50 px-4 py-3 bg-secondary/30 rounded-t-2xl">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Sparkles className="h-4 w-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold font-mono text-foreground flex items-center gap-1.5">
                  <span>Martin's AI Ambassador</span>
                </h4>
                <p className="text-[10px] text-muted-foreground font-mono">
                  {provider ? `via ${provider}` : "Multi-LLM (Gemini / Claude / GPT)"}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={handleReset}
                title="Reset conversation"
                aria-label="Reset conversation"
                className="rounded-lg p-1.5 text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
              >
                <RotateCcw className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                title="Close chat"
                aria-label="Close chat"
                className="rounded-lg p-1.5 text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Messages list */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 text-xs sm:text-sm">
            {messages.map((m, index) => (
              <div
                key={index}
                className={`flex gap-2.5 ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {m.role === "assistant" && (
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary mt-0.5">
                    <Bot className="h-3.5 w-3.5" />
                  </div>
                )}
                <div
                  className={`max-w-[82%] rounded-2xl px-3.5 py-2.5 leading-relaxed ${
                    m.role === "user"
                      ? "bg-primary text-primary-foreground font-medium rounded-tr-none"
                      : "bg-secondary/60 border border-border/50 text-foreground rounded-tl-none whitespace-pre-line"
                  }`}
                >
                  {m.content}
                </div>
                {m.role === "user" && (
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-foreground/10 text-foreground mt-0.5">
                    <User className="h-3.5 w-3.5" />
                  </div>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="flex gap-2.5 items-center text-muted-foreground">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Bot className="h-3.5 w-3.5" />
                </div>
                <div className="flex items-center gap-1.5 rounded-2xl bg-secondary/60 border border-border/50 px-3.5 py-2 text-xs">
                  <Loader2 className="h-3 w-3 animate-spin text-primary" />
                  <span className="font-mono text-[11px]">Thinking...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick suggestions if 1 message */}
          {messages.length === 1 && (
            <div className="px-4 pb-2">
              <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider mb-1.5">
                Suggested questions:
              </p>
              <div className="flex flex-wrap gap-1.5">
                {SUGGESTED_PROMPTS.map((prompt, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => handleSend(prompt)}
                    className="rounded-lg border border-border/60 bg-secondary/40 px-2.5 py-1 text-[11px] text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors text-left"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input form */}
          <form
            onSubmit={(e) => {
              e.preventDefault()
              handleSend()
            }}
            className="border-t border-border/50 p-3 bg-secondary/20 rounded-b-2xl"
          >
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Ask about skills, Starlink, experience..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                disabled={isLoading}
                className="flex-1 rounded-xl border border-border/60 bg-background/80 px-3 py-2 text-xs text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={isLoading || !inputValue.trim()}
                aria-label="Send query"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-all duration-200 hover:opacity-90 active:scale-95 disabled:opacity-40"
              >
                <Send className="h-3.5 w-3.5" />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  )
}

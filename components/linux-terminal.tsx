"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { Terminal, X, Maximize2, Minimize2, Sparkles, Monitor, ArrowRight, CornerDownLeft } from "lucide-react"
import { themes, type ThemeColor } from "@/lib/themes"
import { useTheme } from "next-themes"
import * as Sentry from "@sentry/nextjs"

interface HistoryEntry {
  command: string
  output: React.ReactNode
  timestamp: string
  cwd: string
}

const VIRTUAL_FS: Record<string, { type: "file" | "dir"; content?: string; children?: string[] }> = {
  "~": {
    type: "dir",
    children: ["about.md", "skills.json", "contact.sh", "why-you-matter.org", "projects", "certs", ".secret_notes"],
  },
  "~/about.md": {
    type: "file",
    content: `# Martin Lužák
Where Logic Meets Humanity.
7+ years in tech support, satellite/telecom infrastructure (Marlink, SWAN),
systems engineering, and modern web & AI development.

"Technology is at its best when it serves people."`,
  },
  "~/skills.json": {
    type: "file",
    content: JSON.stringify(
      {
        core: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Linux / Bash", "Git"],
        infrastructure: ["Starlink", "VSAT Maritime Satellite", "Zabbix", "Cisco CCNA", "ITIL"],
        ai_tools: ["LLM Integration", "Anthropic Claude", "OpenAI", "Gemini", "MCP Protocol"],
        soft_skills: ["Crisis Management", "Empathy & Care", "Team Leadership", "Negotiation"],
      },
      null,
      2
    ),
  },
  "~/contact.sh": {
    type: "file",
    content: `#!/usr/bin/env bash
# Direct contact endpoint:
echo "Email: hello@martinluzak.sk"
echo "LinkedIn: https://linkedin.com/in/martinluzak"
echo "Location: Bratislava, Slovakia (CET / UTC+1)"`,
  },
  "~/why-you-matter.org": {
    type: "file",
    content: `✨ Why You Matter (https://why-you-matter.org)
An uplifting digital sanctuary dedicated to empathy, psychological safety, and mental wellness.`,
  },
  "~/.secret_notes": {
    type: "file",
    content: `🤫 [CONFIDENTIAL]
"The real superpower in tech isn't just writing fast algorithms.
It's understanding human needs and translating empathy into code."
-- Martin Lužák`,
  },
  "~/projects": {
    type: "dir",
    children: ["martinluzak.sk", "why-you-matter", "ai-ambassador", "starlink-ops", "video-lab"],
  },
  "~/projects/martinluzak.sk": {
    type: "file",
    content: `Portfolio & Workshop v0.2.0: Next.js 16 + React 19 + Tailwind + Command Palette + AI Ambassador.`,
  },
  "~/projects/why-you-matter": {
    type: "file",
    content: `Mental well-being platform built with empathy-driven UX, breathing exercises, and ambient sounds.`,
  },
  "~/projects/ai-ambassador": {
    type: "file",
    content: `Multi-provider AI assistant answering queries with grounded knowledge of career milestones.`,
  },
  "~/projects/starlink-ops": {
    type: "file",
    content: `High-availability maritime connectivity engineering and satellite QoS management.`,
  },
  "~/projects/video-lab": {
    type: "file",
    content: `Adobe Premiere Pro video production & dynamic motion graphics suite.`,
  },
  "~/certs": {
    type: "dir",
    children: ["atlassian-agile.pdf", "cisco-ccna.pdf", "itil4-foundation.pdf", "ani-negotiation.pdf", "ai-engineer.pdf"],
  },
  "~/certs/atlassian-agile.pdf": {
    type: "file",
    content: `[VERIFIED CERTIFICATE] Atlassian Agile Project Management Professional Certificate (Jira Cloud)`,
  },
  "~/certs/cisco-ccna.pdf": {
    type: "file",
    content: `[VERIFIED CERTIFICATE] Cisco CCNA 200-301 Network Fundamentals & Access`,
  },
  "~/certs/itil4-foundation.pdf": {
    type: "file",
    content: `[VERIFIED CERTIFICATE] ITIL Foundation 4 IT Service Management`,
  },
  "~/certs/ani-negotiation.pdf": {
    type: "file",
    content: `[VERIFIED CERTIFICATE] Negotiation Professional Certificate (American Negotiation Institute)`,
  },
  "~/certs/ai-engineer.pdf": {
    type: "file",
    content: `[VERIFIED CERTIFICATE] Become an AI Engineer & Generative AI Systems`,
  },
}

const FORTUNES = [
  "There are 10 types of people in the world: those who understand binary, and those who don't.",
  "Linux is only free if your time has no value. (Just kidding, pacman -Syu solves everything!)",
  "To understand recursion, you must first understand recursion.",
  "Talk is cheap. Show me the code. — Linus Torvalds",
  "Software is like sex: it's better when it's free. — Linus Torvalds",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand. — Martin Fowler",
  "The only way to go fast is to go well. — Robert C. Martin",
]

export function LinuxTerminal() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMaximized, setIsMaximized] = useState(false)
  const [isCrt, setIsCrt] = useState(false)
  const [isMatrix, setIsMatrix] = useState(false)
  const [inputVal, setInputVal] = useState("")
  const [history, setHistory] = useState<HistoryEntry[]>([])
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [historyPointer, setHistoryPointer] = useState<number>(-1)
  const [cwd, setCwd] = useState<string>("~")
  const [isSlRunning, setIsSlRunning] = useState(false)
  const [slPosition, setSlPosition] = useState(100)

  const inputRef = useRef<HTMLInputElement>(null)
  const terminalEndRef = useRef<HTMLDivElement>(null)
  const matrixCanvasRef = useRef<HTMLCanvasElement>(null)
  const { resolvedTheme, systemTheme } = useTheme()

  // Open / Close Global Shortcut Listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger backtick if user is typing in an active input / textarea
      const target = e.target as HTMLElement
      const isInput =
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable

      // 1. Backtick / Tilde key: ` or ~ (like Quake console)
      if (e.key === "`" || e.key === "~") {
        if (!isInput || isOpen) {
          e.preventDefault()
          setIsOpen((prev) => !prev)
          return
        }
      }

      // 2. Ctrl + Alt + T (Standard Ubuntu / Linux terminal hotkey)
      if (e.ctrlKey && e.altKey && (e.key === "t" || e.key === "T")) {
        e.preventDefault()
        setIsOpen((prev) => !prev)
        return
      }

      // 3. Ctrl + ` (VS Code style terminal toggle)
      if (e.ctrlKey && e.key === "`") {
        e.preventDefault()
        setIsOpen((prev) => !prev)
        return
      }

      // 4. Escape closes modal if open
      if (e.key === "Escape" && isOpen) {
        if (isMatrix) {
          setIsMatrix(false)
          return
        }
        setIsOpen(false)
      }
    }

    const handleCustomOpen = () => setIsOpen(true)

    window.addEventListener("keydown", handleKeyDown)
    window.addEventListener("open-linux-terminal", handleCustomOpen)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      window.removeEventListener("open-linux-terminal", handleCustomOpen)
    }
  }, [isOpen, isMatrix])

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 80)
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  // Scroll to bottom whenever history changes
  useEffect(() => {
    if (isOpen) {
      terminalEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }
  }, [history, isOpen])

  // Matrix digital rain effect canvas animation
  useEffect(() => {
    if (!isMatrix || !matrixCanvasRef.current) return

    const canvas = matrixCanvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = canvas.parentElement?.clientWidth || 800
    canvas.height = canvas.parentElement?.clientHeight || 500

    const katakana = "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン"
    const latin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$+-*/=%\"'#&_(),.;:?!\\|{}<>[]^~"
    const alphabet = katakana + latin

    const fontSize = 14
    const columns = Math.floor(canvas.width / fontSize)
    const rainDrops: number[] = Array.from({ length: columns }, () => 1)

    let animationFrameId: number

    const render = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.06)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = "#00ff66"
      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length))
        ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize)

        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          rainDrops[i] = 0
        }
        rainDrops[i]++
      }
      animationFrameId = requestAnimationFrame(render)
    }

    render()

    const handleStopMatrix = () => setIsMatrix(false)
    window.addEventListener("keydown", handleStopMatrix, { once: true })

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("keydown", handleStopMatrix)
    }
  }, [isMatrix])

  // Steam locomotive (sl) animation
  useEffect(() => {
    if (!isSlRunning) return

    let currentPos = 100
    const interval = setInterval(() => {
      currentPos -= 2
      setSlPosition(currentPos)
      if (currentPos < -60) {
        setIsSlRunning(false)
        clearInterval(interval)
      }
    }, 40)

    return () => clearInterval(interval)
  }, [isSlRunning])

  const applyThemeColor = (themeName: ThemeColor) => {
    if (!themes[themeName]) return false
    const themeConfig = themes[themeName]
    const effectiveMode = resolvedTheme ?? systemTheme ?? "dark"
    const isDark = effectiveMode === "dark"
    const colors = isDark ? themeConfig.dark : themeConfig.light

    if (typeof window !== "undefined") {
      localStorage.setItem("color-theme", themeName)
      Object.entries(colors).forEach(([key, value]) => {
        document.documentElement.style.setProperty(`--${key}`, value)
      })
    }
    return true
  }

  // Execute terminal command
  const executeCommand = (rawCmd: string) => {
    const trimmed = rawCmd.trim()
    if (!trimmed) return

    // Save to command history for Up/Down arrows
    setCommandHistory((prev) => [...prev, trimmed])
    setHistoryPointer(-1)

    const parts = trimmed.split(" ").filter(Boolean)
    const cmd = parts[0].toLowerCase()
    const args = parts.slice(1)
    let output: React.ReactNode = null

    switch (cmd) {
      case "help":
      case "man":
        output = (
          <div className="space-y-3 font-mono text-xs sm:text-sm">
            <p className="text-emerald-400 font-bold">✨ Martin Lužák's Terminal — Available Commands:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 text-muted-foreground">
              <div><span className="text-cyan-400 font-semibold">neofetch</span> / <span className="text-cyan-400">fastfetch</span> : System specs & ASCII badge</div>
              <div><span className="text-cyan-400 font-semibold">matrix</span> / <span className="text-cyan-400">cmatrix</span> : Digital falling rain</div>
              <div><span className="text-cyan-400 font-semibold">ls [-la]</span> : List files & folders</div>
              <div><span className="text-cyan-400 font-semibold">cat &lt;file&gt;</span> : Display file contents</div>
              <div><span className="text-cyan-400 font-semibold">cd &lt;dir&gt;</span> : Navigate directory (cd .., cd ~)</div>
              <div><span className="text-cyan-400 font-semibold">pwd</span> : Print current working directory</div>
              <div><span className="text-cyan-400 font-semibold">theme [name]</span> : Switch theme (golden, cyan, emerald...)</div>
              <div><span className="text-cyan-400 font-semibold">whoami</span> : Current session user info</div>
              <div><span className="text-cyan-400 font-semibold">uname -a</span> : Display kernel details</div>
              <div><span className="text-cyan-400 font-semibold">sudo &lt;cmd&gt;</span> : Execute with root privileges ;)</div>
              <div><span className="text-cyan-400 font-semibold">cowsay &lt;msg&gt;</span> : ASCII cow speaker</div>
              <div><span className="text-cyan-400 font-semibold">fortune</span> : Geek wisdom & quote</div>
              <div><span className="text-cyan-400 font-semibold">sl</span> : Steam locomotive animation</div>
              <div><span className="text-cyan-400 font-semibold">ping &lt;host&gt;</span> : ICMP echo check</div>
              <div><span className="text-cyan-400 font-semibold">curl &lt;url&gt;</span> : Simulated HTTP request</div>
              <div><span className="text-cyan-400 font-semibold">clear</span> : Clear terminal output</div>
              <div><span className="text-cyan-400 font-semibold">date / uptime</span> : System date & uptime</div>
              <div><span className="text-cyan-400 font-semibold">exit</span> : Close terminal window</div>
            </div>
            <p className="text-xs text-muted-foreground/70 pt-1">
              Tip: Press <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-emerald-300 font-semibold">Tab</kbd> for auto-completion, and <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-emerald-300">↑ / ↓</kbd> for command history.
            </p>
          </div>
        )
        break

      case "neofetch":
      case "fastfetch":
        output = (
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 font-mono text-xs leading-relaxed">
            <pre className="text-cyan-400 select-none hidden sm:block">
{`       /\\
      /  \\
     /\\   \\
    /      \\
   /   ,,   \\
  /   |  |  -\\
 /_-''    ''-_\\`}
            </pre>
            <div className="space-y-1">
              <p><span className="text-emerald-400 font-bold">martin</span><span className="text-muted-foreground">@</span><span className="text-cyan-400 font-bold">archlinux</span></p>
              <p className="text-muted-foreground">---------------------------------</p>
              <p><span className="text-yellow-400 font-semibold">OS:</span> Arch Linux x86_64 (Martin Lužák Portfolio Edition)</p>
              <p><span className="text-yellow-400 font-semibold">Host:</span> martinluzak.sk (v0.2.0)</p>
              <p><span className="text-yellow-400 font-semibold">Kernel:</span> 6.12.8-arch1-1-luzak</p>
              <p><span className="text-yellow-400 font-semibold">Uptime:</span> 7+ years in IT Systems & Leadership</p>
              <p><span className="text-yellow-400 font-semibold">Shell:</span> bash 5.2.37-release</p>
              <p><span className="text-yellow-400 font-semibold">Stack:</span> Next.js 16 • React 19 • TypeScript • Tailwind 4</p>
              <p><span className="text-yellow-400 font-semibold">Focus:</span> Empathy + Technical Architecture + AI Ecosystems</p>
              <p><span className="text-yellow-400 font-semibold">CPU:</span> Human Heart & Analytical Logic (16 cores @ 4.8GHz)</p>
              <p><span className="text-yellow-400 font-semibold">Memory:</span> 64GB / 128GB (100% Dedicated)</p>
              <div className="flex gap-1.5 pt-2">
                <span className="h-3 w-6 bg-red-500 rounded-sm inline-block" />
                <span className="h-3 w-6 bg-green-500 rounded-sm inline-block" />
                <span className="h-3 w-6 bg-yellow-500 rounded-sm inline-block" />
                <span className="h-3 w-6 bg-blue-500 rounded-sm inline-block" />
                <span className="h-3 w-6 bg-purple-500 rounded-sm inline-block" />
                <span className="h-3 w-6 bg-cyan-500 rounded-sm inline-block" />
                <span className="h-3 w-6 bg-white rounded-sm inline-block" />
              </div>
            </div>
          </div>
        )
        break

      case "matrix":
      case "cmatrix":
        setIsMatrix(true)
        output = <p className="text-emerald-400 animate-pulse">Entering The Matrix... (Press any key or Escape to exit)</p>
        break

      case "sl":
        setIsSlRunning(true)
        setSlPosition(100)
        output = <p className="text-yellow-400">Choo-choo! 🚂💨 (You made the classic 'sl' typo!)</p>
        break

      case "cowsay":
        const msg = args.join(" ") || "Linux rocks! Check out martinluzak.sk"
        const border = "-".repeat(msg.length + 2)
        output = (
          <pre className="text-emerald-400 font-mono text-xs sm:text-sm">
{` ${"-".repeat(msg.length + 2)}
< ${msg} >
 ${"-".repeat(msg.length + 2)}
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||`}
          </pre>
        )
        break

      case "fortune":
        const randomQuote = FORTUNES[Math.floor(Math.random() * FORTUNES.length)]
        output = <p className="text-amber-300 italic font-mono text-sm">💡 "{randomQuote}"</p>
        break

      case "pwd":
        output = <p className="text-emerald-300 font-mono text-sm">{cwd === "~" ? "/home/martin" : `/home/martin/${cwd.replace("~/", "")}`}</p>
        break

      case "ls":
      case "dir":
      case "ll":
        const currentDirObj = VIRTUAL_FS[cwd]
        const showAll = args.includes("-a") || args.includes("-la") || args.includes("-al")
        const isLong = args.includes("-l") || args.includes("-la") || args.includes("-al") || cmd === "ll"

        if (currentDirObj && currentDirObj.type === "dir" && currentDirObj.children) {
          const items = currentDirObj.children.filter((item) => showAll || !item.startsWith("."))
          if (isLong) {
            output = (
              <div className="space-y-1 font-mono text-xs">
                <p className="text-muted-foreground">total {items.length * 4}</p>
                {items.map((item) => {
                  const itemPath = cwd === "~" ? `~/${item}` : `${cwd}/${item}`
                  const itemObj = VIRTUAL_FS[itemPath]
                  const isDir = itemObj?.type === "dir"
                  return (
                    <div key={item} className="flex gap-4">
                      <span className="text-muted-foreground">{isDir ? "drwxr-xr-x" : "-rw-r--r--"}</span>
                      <span className="text-yellow-400">martin</span>
                      <span className="text-muted-foreground">staff</span>
                      <span className="w-12 text-right text-muted-foreground">{isDir ? "4096" : "1024"}</span>
                      <span className="text-muted-foreground">Sep 20 13:37</span>
                      <span className={isDir ? "text-cyan-400 font-semibold" : item.endsWith(".sh") ? "text-emerald-400 font-semibold" : "text-foreground"}>
                        {item}{isDir ? "/" : ""}
                      </span>
                    </div>
                  )
                })}
              </div>
            )
          } else {
            output = (
              <div className="flex flex-wrap gap-4 font-mono text-xs sm:text-sm">
                {items.map((item) => {
                  const itemPath = cwd === "~" ? `~/${item}` : `${cwd}/${item}`
                  const isDir = VIRTUAL_FS[itemPath]?.type === "dir"
                  return (
                    <span
                      key={item}
                      className={isDir ? "text-cyan-400 font-semibold" : item.endsWith(".sh") ? "text-emerald-400 font-semibold" : "text-foreground"}
                    >
                      {item}{isDir ? "/" : ""}
                    </span>
                  )
                })}
              </div>
            )
          }
        } else {
          output = <p className="text-red-400">Error: cannot list directory</p>
        }
        break

      case "cd":
        const targetDir = args[0] || "~"
        if (targetDir === "~" || targetDir === "/home/martin") {
          setCwd("~")
        } else if (targetDir === ".." || targetDir === "../") {
          if (cwd !== "~") {
            setCwd("~")
          }
        } else {
          const resolvedPath = cwd === "~" ? `~/${targetDir.replace(/\/$/, "")}` : `${cwd}/${targetDir.replace(/\/$/, "")}`
          if (VIRTUAL_FS[resolvedPath] && VIRTUAL_FS[resolvedPath].type === "dir") {
            setCwd(resolvedPath)
          } else {
            output = <p className="text-red-400">cd: no such file or directory: {targetDir}</p>
          }
        }
        break

      case "cat":
        if (!args[0]) {
          output = <p className="text-yellow-400">Usage: cat &lt;filename&gt;</p>
        } else {
          const filename = args[0]
          const filePath = filename.startsWith("~")
            ? filename
            : cwd === "~"
            ? `~/${filename}`
            : `${cwd}/${filename}`

          const file = VIRTUAL_FS[filePath]
          if (!file) {
            output = <p className="text-red-400">cat: {filename}: No such file or directory</p>
          } else if (file.type === "dir") {
            output = <p className="text-red-400">cat: {filename}: Is a directory</p>
          } else {
            output = (
              <pre className="font-mono text-xs sm:text-sm text-foreground/90 whitespace-pre-wrap leading-relaxed bg-black/30 p-3 rounded border border-white/5">
                {file.content}
              </pre>
            )
          }
        }
        break

      case "sentry-test":
        try {
          Sentry.captureMessage("Test message from Martin Lužák Interactive Terminal");
          output = <p className="text-emerald-400">📡 Sentry test event successfully captured and dispatched! Check your Sentry dashboard.</p>
        } catch (err) {
          output = <p className="text-red-400">Failed to capture Sentry event: {String(err)}</p>
        }
        break

      case "sudo":
        output = (
          <div className="space-y-1 font-mono text-xs sm:text-sm text-red-400">
            <p>[sudo] password for guest: ••••••••</p>
            <p className="font-bold">🚨 guest is not in the sudoers file. This incident will be reported to Martin Lužák!</p>
          </div>
        )
        break

      case "whoami":
        output = (
          <div className="font-mono text-xs sm:text-sm space-y-1">
            <p><span className="text-emerald-400 font-bold">guest</span> (Curious Tech Enthusiast)</p>
            <p className="text-muted-foreground">Session: Interactive Linux Terminal Easter Egg</p>
            <p className="text-muted-foreground">Permissions: Read-Only, High Curiosity, Sudo Restricted</p>
          </div>
        )
        break

      case "uname":
        output = <p className="font-mono text-xs sm:text-sm text-cyan-300">Linux martinluzak 6.12.8-arch1-1-luzak #1 SMP PREEMPT_DYNAMIC Sat Sep 20 13:37:00 CET 2026 x86_64 GNU/Linux</p>
        break

      case "uptime":
        output = <p className="font-mono text-xs sm:text-sm text-yellow-300"> 13:42:00 up 7 years, 243 days, 1 user, load average: 0.04, 0.08, 0.12</p>
        break

      case "date":
        output = <p className="font-mono text-xs sm:text-sm text-foreground">{new Date().toString()}</p>
        break

      case "echo":
        output = <p className="font-mono text-xs sm:text-sm text-foreground">{args.join(" ")}</p>
        break

      case "theme":
        if (!args[0]) {
          output = (
            <div className="space-y-2 font-mono text-xs sm:text-sm">
              <p className="text-yellow-400">Available Themes:</p>
              <div className="flex flex-wrap gap-2">
                {Object.keys(themes).map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded bg-white/10 text-cyan-300">
                    {t}
                  </span>
                ))}
              </div>
              <p className="text-muted-foreground">Type: <code className="text-emerald-400">theme &lt;name&gt;</code> (e.g. <code className="text-emerald-400">theme cyan</code> or <code className="text-emerald-400">theme emerald</code>)</p>
            </div>
          )
        } else {
          const selected = args[0].toLowerCase() as ThemeColor
          if (applyThemeColor(selected)) {
            output = <p className="text-emerald-400">✨ Switched site theme to '{selected}'!</p>
          } else {
            output = <p className="text-red-400">Unknown theme '{args[0]}'. Run 'theme' to see valid options.</p>
          }
        }
        break

      case "ping":
        const host = args[0] || "1.1.1.1"
        output = (
          <div className="space-y-1 font-mono text-xs">
            <p className="text-muted-foreground">PING {host} ({host}) 56(84) bytes of data.</p>
            <p className="text-emerald-400">64 bytes from {host}: icmp_seq=1 ttl=58 time=9.82 ms</p>
            <p className="text-emerald-400">64 bytes from {host}: icmp_seq=2 ttl=58 time=10.1 ms</p>
            <p className="text-emerald-400">64 bytes from {host}: icmp_seq=3 ttl=58 time=8.94 ms</p>
            <p className="text-muted-foreground">--- {host} ping statistics ---</p>
            <p className="text-cyan-300">3 packets transmitted, 3 received, 0% packet loss, time 2003ms</p>
          </div>
        )
        break

      case "curl":
        const url = args[0] || "martinluzak.sk"
        if (url.includes("wttr.in")) {
          output = (
            <pre className="font-mono text-xs text-cyan-300 leading-tight">
{`Weather report: Bratislava, Slovakia
     \\   /     Sunny / Clear
      .-.      +22°C
   ― (   ) ―   Wind: Calm 7 km/h
      \`-'      Humidity: 48%
     /   \\     Visibility: 10 km`}
            </pre>
          )
        } else {
          output = (
            <div className="font-mono text-xs space-y-1 text-emerald-300">
              <p>HTTP/2 200 OK</p>
              <p>server: Vercel / Next.js 16</p>
              <p>content-type: text/html; charset=utf-8</p>
              <p className="text-foreground pt-1">Welcome to Martin Lužák's digital hub. Where logic meets humanity.</p>
            </div>
          )
        }
        break

      case "clear":
      case "cls":
        setHistory([])
        setInputVal("")
        return

      case "exit":
      case "quit":
      case ":q":
        setIsOpen(false)
        setInputVal("")
        return

      case "reboot":
      case "poweroff":
        output = <p className="text-yellow-400 animate-pulse">System rebooting... Terminal resetting.</p>
        setTimeout(() => {
          setHistory([])
          setCwd("~")
        }, 1200)
        break

      default:
        output = (
          <p className="text-red-400 font-mono text-xs sm:text-sm">
            bash: {cmd}: command not found. Type <span className="text-emerald-400 font-semibold underline cursor-pointer" onClick={() => executeCommand("help")}>help</span> to see available commands.
          </p>
        )
        break
    }

    setHistory((prev) => [
      ...prev,
      {
        command: rawCmd,
        output,
        timestamp: new Date().toLocaleTimeString(),
        cwd,
      },
    ])
    setInputVal("")
  }

  // Handle Tab completion and history navigation
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault()
      executeCommand(inputVal)
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      if (commandHistory.length === 0) return
      const nextIndex = historyPointer === -1 ? commandHistory.length - 1 : Math.max(0, historyPointer - 1)
      setHistoryPointer(nextIndex)
      setInputVal(commandHistory[nextIndex] || "")
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      if (historyPointer === -1) return
      const nextIndex = historyPointer + 1
      if (nextIndex >= commandHistory.length) {
        setHistoryPointer(-1)
        setInputVal("")
      } else {
        setHistoryPointer(nextIndex)
        setInputVal(commandHistory[nextIndex] || "")
      }
    } else if (e.key === "Tab") {
      e.preventDefault()
      const parts = inputVal.split(" ")
      const allCommands = ["help", "neofetch", "fastfetch", "matrix", "cmatrix", "ls", "cat", "cd", "pwd", "theme", "whoami", "uname", "sudo", "cowsay", "fortune", "sl", "ping", "curl", "clear", "exit"]
      
      if (parts.length === 1) {
        const match = allCommands.find((c) => c.startsWith(parts[0].toLowerCase()))
        if (match) setInputVal(match + " ")
      } else if (parts[0] === "cat" || parts[0] === "cd") {
        const currentChildren = VIRTUAL_FS[cwd]?.children || []
        const prefix = parts[1] || ""
        const match = currentChildren.find((c) => c.startsWith(prefix.toLowerCase()))
        if (match) setInputVal(`${parts[0]} ${match}`)
      }
    }
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md animate-fade-in"
      onClick={(e) => {
        if (e.target === e.currentTarget) setIsOpen(false)
      }}
    >
      <div
        className={`relative flex flex-col rounded-xl overflow-hidden shadow-2xl border border-emerald-500/30 bg-[#0c1017] text-gray-100 transition-all duration-300 w-full ${
          isMaximized ? "h-[96vh] max-w-[98vw]" : "h-[600px] max-h-[88vh] max-w-4xl"
        }`}
        style={{
          boxShadow: "0 0 35px rgba(16, 185, 129, 0.15), 0 20px 40px rgba(0,0,0,0.8)",
        }}
      >
        {/* Terminal Title Bar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-[#141b24] border-b border-emerald-500/20 select-none">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsOpen(false)}
              className="h-3 w-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors shadow-sm"
              title="Close Terminal"
              aria-label="Close"
            />
            <button
              onClick={() => setIsMaximized((prev) => !prev)}
              className="h-3 w-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors shadow-sm"
              title="Toggle Size"
              aria-label="Maximize"
            />
            <button
              onClick={() => setIsCrt((prev) => !prev)}
              className={`h-3 w-3 rounded-full ${isCrt ? "bg-emerald-400" : "bg-emerald-600"} hover:bg-emerald-500 transition-colors shadow-sm`}
              title="Toggle CRT Mode"
              aria-label="CRT Mode"
            />
            <span className="ml-3 font-mono text-xs text-muted-foreground/80 flex items-center gap-1.5 hidden sm:inline-flex">
              <Terminal className="h-3.5 w-3.5 text-emerald-400" />
              <span>guest@martinluzak-box: {cwd} (bash 5.2)</span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsCrt((prev) => !prev)}
              className={`px-2 py-0.5 rounded text-[11px] font-mono transition-colors flex items-center gap-1 ${
                isCrt ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40" : "bg-white/5 text-muted-foreground hover:text-white"
              }`}
              title="Toggle retro CRT scanlines"
            >
              <Monitor className="h-3 w-3" />
              <span>CRT {isCrt ? "ON" : "OFF"}</span>
            </button>

            <button
              onClick={() => setIsMaximized((prev) => !prev)}
              className="p-1 rounded text-muted-foreground hover:text-white transition-colors"
              title={isMaximized ? "Restore" : "Maximize"}
            >
              {isMaximized ? <Minimize2 className="h-3.5 w-3.5" /> : <Maximize2 className="h-3.5 w-3.5" />}
            </button>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded text-muted-foreground hover:text-red-400 transition-colors"
              title="Close"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Matrix Rain Canvas Overlay if active */}
        {isMatrix && (
          <div className="absolute inset-0 z-20 bg-black cursor-pointer">
            <canvas ref={matrixCanvasRef} className="w-full h-full block" />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-black/80 border border-emerald-500/50 text-emerald-400 font-mono text-xs animate-pulse">
              Press any key or click to return to terminal
            </div>
          </div>
        )}

        {/* Steam Locomotive Animation overlay */}
        {isSlRunning && (
          <div
            className="absolute top-16 z-30 font-mono text-sm text-yellow-300 pointer-events-none whitespace-pre transition-all duration-75"
            style={{ left: `${slPosition}%` }}
          >
{`     (@@@ @@@ @@)
   (  @@@  @@@  )
  (              )
     ======|=======
    |  _ _ _ _   |  [===]
  __| | | | | |  |__| |__
 |==| | | | | |  |==| |==|
 (o)-(o)-(o)-(o) (o)-(o)`}
          </div>
        )}

        {/* Terminal Body with CRT effect if active */}
        <div
          className={`flex-1 p-4 sm:p-5 overflow-y-auto font-mono text-xs sm:text-sm space-y-3 relative ${
            isCrt ? "crt-screen" : ""
          }`}
          onClick={() => inputRef.current?.focus()}
        >
          {/* CRT Scanline CSS */}
          {isCrt && (
            <div
              className="pointer-events-none absolute inset-0 z-10 opacity-20"
              style={{
                backgroundImage: "linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.4) 50%)",
                backgroundSize: "100% 4px",
              }}
            />
          )}

          {/* Welcome Intro Header */}
          <div className="space-y-1 text-muted-foreground/90 border-b border-white/5 pb-3">
            <p className="text-emerald-400 font-bold flex items-center gap-2">
              <span>🐧 Welcome to Martin Lužák's Interactive Linux Terminal</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-normal">v0.2.0</span>
            </p>
            <p className="text-xs">
              Type <span className="text-cyan-300 font-semibold cursor-pointer underline" onClick={() => executeCommand("help")}>help</span> for commands,{" "}
              <span className="text-cyan-300 font-semibold cursor-pointer underline" onClick={() => executeCommand("neofetch")}>neofetch</span> for system info,{" "}
              <span className="text-cyan-300 font-semibold cursor-pointer underline" onClick={() => executeCommand("matrix")}>matrix</span> for digital rain, or{" "}
              <span className="text-cyan-300 font-semibold cursor-pointer underline" onClick={() => executeCommand("theme cyan")}>theme</span> to change styles.
            </p>
          </div>

          {/* History Output */}
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1.5">
              <div className="flex items-center gap-2 text-xs">
                <span className="text-emerald-400 font-bold">guest@martinluzak.sk</span>
                <span className="text-muted-foreground">:</span>
                <span className="text-cyan-400 font-semibold">{item.cwd}</span>
                <span className="text-yellow-400 font-bold">$</span>
                <span className="text-foreground font-medium">{item.command}</span>
              </div>
              <div className="pl-2 border-l border-emerald-500/20 py-0.5">{item.output}</div>
            </div>
          ))}

          {/* Active Input Line */}
          <div className="flex items-center gap-2 text-xs sm:text-sm pt-1">
            <span className="text-emerald-400 font-bold shrink-0">guest@martinluzak.sk</span>
            <span className="text-muted-foreground shrink-0">:</span>
            <span className="text-cyan-400 font-semibold shrink-0">{cwd}</span>
            <span className="text-yellow-400 font-bold shrink-0">$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent border-none outline-none text-foreground font-mono text-xs sm:text-sm p-0 m-0 focus:ring-0 caret-emerald-400"
              autoFocus
              spellCheck={false}
              autoComplete="off"
            />
          </div>

          <div ref={terminalEndRef} />
        </div>

        {/* Quick Command Pills for mobile & quick clicking */}
        <div className="px-3 sm:px-4 py-2 bg-[#10161f] border-t border-emerald-500/20 flex flex-wrap items-center gap-1.5 sm:gap-2 text-[11px] font-mono">
          <span className="text-muted-foreground text-[10px] uppercase tracking-wider mr-1 hidden sm:inline">Quick commands:</span>
          {["neofetch", "matrix", "ls -la", "cat about.md", "cowsay", "sl", "theme golden", "fortune", "help", "clear"].map((cmd) => (
            <button
              key={cmd}
              type="button"
              onClick={() => executeCommand(cmd)}
              className="px-2 py-0.5 rounded bg-white/5 hover:bg-emerald-500/20 hover:text-emerald-300 text-muted-foreground transition-all duration-200 border border-white/5 hover:border-emerald-500/30 active:scale-95"
            >
              {cmd}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

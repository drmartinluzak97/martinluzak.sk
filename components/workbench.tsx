import Link from "next/link"
import { cn } from "@/lib/utils"
import { Github, ExternalLink, Heart, Network, Database, Video, Activity, ArrowUpRight } from "lucide-react"

const wipItems = [
  {
    id: 1,
    name: "Care and Empathy",
    description: "Healthcare organization support (Diatyrnavia) & customer care during COVID-19 (SWAN)",
    progress: 90,
    lastUpdated: "Ongoing",
    url: "",
    icon: Heart,
    iconColor: "text-rose-400 group-hover:text-rose-300",
    barColor: "bg-rose-500",
    textColor: "text-rose-400",
  },
  {
    id: 2,
    name: "Technical Support & PC Networks",
    description: "Network and technical support for maritime clients (Marlink) and residential customers (SWAN)",
    progress: 80,
    lastUpdated: "Ongoing",
    url: "",
    icon: Network,
    iconColor: "text-cyan-400 group-hover:text-cyan-300",
    barColor: "bg-cyan-500",
    textColor: "text-cyan-400",
  },
  {
    id: 3,
    name: "Video Creator & Editor",
    description: "Video production and editing with Adobe Premiere Pro & AI tools",
    progress: 70,
    lastUpdated: "Ongoing",
    url: "",
    icon: Video,
    iconColor: "text-purple-400 group-hover:text-purple-300",
    barColor: "bg-purple-500",
    textColor: "text-purple-400",
  },
  {
    id: 4,
    name: "Testing & System Health Engineer",
    description: "System health engineering at ForesServices and QA testing for self-service checkout at KASO Technologies",
    progress: 60,
    lastUpdated: "Ongoing",
    url: "",
    icon: Activity,
    iconColor: "text-amber-400 group-hover:text-amber-300",
    barColor: "bg-amber-500",
    textColor: "text-amber-400",
  },
  {
    id: 5,
    name: "Data Implementation",
    description: "Implementation for banking products (RPC) and global blog platform in 50 languages",
    progress: 50,
    lastUpdated: "Ongoing",
    url: "",
    icon: Database,
    iconColor: "text-emerald-400 group-hover:text-emerald-300",
    barColor: "bg-emerald-500",
    textColor: "text-emerald-400",
  },
]

export function Workbench() {
  return (
    <section id="skills" className="px-4 sm:px-6 py-20 sm:py-28 border-t border-border/30">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 sm:mb-14 space-y-3 animate-fade-in-up">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Skills</h2>
          <p className="max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            Bridging clean code, thoughtful systems, and human utility.
          </p>
        </div>

        <div className="rounded-xl border border-border bg-card/40 glass backdrop-blur-sm overflow-hidden hover-lift animate-scale-in stagger-2">
          {/* Terminal header */}
          <div className="flex items-center gap-3 border-b border-border/50 bg-secondary/40 px-4 sm:px-5 py-3.5 sm:py-4">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-destructive/60 transition-colors hover:bg-destructive cursor-pointer" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/60 transition-colors hover:bg-yellow-500 cursor-pointer" />
              <div className="h-3 w-3 rounded-full bg-primary/60 transition-colors hover:bg-primary cursor-pointer" />
            </div>
            <span className="ml-4 font-mono text-xs text-muted-foreground truncate">~/martinluzak/skills</span>
            <div className="ml-auto hidden sm:flex items-center gap-2 text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              <span className="font-mono text-xs">live</span>
            </div>
          </div>

          <div className="divide-y divide-border/30">
            {wipItems.map((item, index) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.id}
                  href="/introduction"
                  className="group flex flex-col gap-4 p-5 sm:p-6 transition-all duration-300 sm:flex-row sm:items-center sm:justify-between hover:bg-secondary/40 animate-fade-in cursor-pointer"
                  style={{ animationDelay: `${index * 100 + 400}ms` }}
                >
                  <div className="flex-1 space-y-2 min-w-0">
                    <div className="flex items-center gap-3">
                      {Icon ? (
                        <Icon className={cn("h-4 w-4 shrink-0 transition-transform duration-300 group-hover:scale-110", item.iconColor)} />
                      ) : (
                        <span className="text-primary font-mono text-sm shrink-0 transition-transform duration-300 group-hover:translate-x-1">
                          ❯
                        </span>
                      )}
                      <h4 className="font-mono text-sm font-medium tracking-tight transition-colors group-hover:text-gradient truncate">
                        {item.name}
                      </h4>
                      <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all duration-300 -translate-x-1 group-hover:translate-x-0" />
                    </div>
                    <p className="pl-6 text-xs text-muted-foreground line-clamp-2 sm:line-clamp-1">{item.description}</p>
                  </div>

                  <div className="flex items-center justify-between gap-6 pl-6 sm:pl-0 sm:justify-end">
                    <div className="flex items-center gap-3 flex-1 sm:flex-none">
                      <div className="h-2 w-full sm:w-28 overflow-hidden rounded-full bg-secondary/80 relative">
                        <div
                          className={cn(
                            "h-full rounded-full transition-all duration-700 ease-out",
                            item.barColor || "bg-primary",
                          )}
                          style={{ width: `${item.progress}%` }}
                        />
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 animate-shimmer opacity-30" />
                      </div>
                      <span
                        className={cn(
                          "font-mono text-xs w-10 shrink-0 transition-colors font-medium",
                          item.textColor || "text-primary",
                        )}
                      >
                        {item.progress}%
                      </span>
                    </div>

                    <span className="font-mono text-xs text-muted-foreground shrink-0">{item.lastUpdated}</span>
                  </div>
                </Link>
              )
            })}
          </div>

          <Link
            href="/introduction"
            className="group/cmd flex items-center justify-between border-t border-border/50 bg-secondary/30 px-4 sm:px-5 py-4 transition-all duration-300 hover:bg-secondary/60 cursor-pointer"
          >
            <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground group-hover/cmd:text-foreground transition-colors">
              <span className="text-primary font-bold">❯</span>
              <span className="typing-cursor truncate text-foreground font-medium">about me / CV</span>
            </div>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all duration-300 group-hover/cmd:text-primary group-hover/cmd:translate-x-0.5 group-hover/cmd:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { Search, X, Compass, FileText, Briefcase, Award, ArrowRight, CornerDownLeft } from "lucide-react"
import { SEARCH_ITEMS, SearchItem } from "@/lib/search-index"

interface SearchDialogProps {
  isOpen: boolean
  onClose: () => void
}

const CATEGORY_ICONS = {
  Navigation: Compass,
  Articles: FileText,
  Experience: Briefcase,
  Credentials: Award,
}

export function SearchDialog({ isOpen, onClose }: SearchDialogProps) {
  const [query, setQuery] = useState("")
  const [selectedIndex, setSelectedIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  // Reset and auto-focus when opened
  useEffect(() => {
    if (isOpen) {
      setQuery("")
      setSelectedIndex(0)
      setTimeout(() => inputRef.current?.focus(), 50)
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  // Filter items based on search query
  const filteredItems = query.trim()
    ? SEARCH_ITEMS.filter((item) => {
        const q = query.toLowerCase()
        const inTitle = item.title.toLowerCase().includes(q)
        const inDesc = item.description.toLowerCase().includes(q)
        const inKeywords = item.keywords?.some((k) => k.toLowerCase().includes(q))
        const inCategory = item.category.toLowerCase().includes(q)
        return inTitle || inDesc || inKeywords || inCategory
      })
    : SEARCH_ITEMS.slice(0, 8) // default recent/top results

  // Reset selectedIndex when filtered items change
  useEffect(() => {
    setSelectedIndex(0)
  }, [query])

  // Handle keyboard navigation
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      } else if (e.key === "ArrowDown") {
        e.preventDefault()
        setSelectedIndex((prev) => (prev + 1) % (filteredItems.length || 1))
      } else if (e.key === "ArrowUp") {
        e.preventDefault()
        setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % (filteredItems.length || 1))
      } else if (e.key === "Enter" && filteredItems[selectedIndex]) {
        e.preventDefault()
        handleSelect(filteredItems[selectedIndex])
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, selectedIndex, filteredItems, onClose])

  const handleSelect = (item: SearchItem) => {
    onClose()
    router.push(item.href)
  }

  if (!isOpen) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Search website"
      className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 sm:pt-20 animate-fade-in"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-background/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Container */}
      <div className="relative z-10 w-full max-w-2xl overflow-hidden rounded-2xl border border-border/70 bg-card shadow-2xl glass animate-scale-in">
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 border-b border-border/50 px-4 py-3.5 bg-secondary/20">
          <Search className="h-5 w-5 text-primary shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search pages, articles, Starlink, skills, credentials..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent text-sm sm:text-base text-foreground placeholder:text-muted-foreground/60 focus:outline-none"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="rounded-md p-1 text-muted-foreground hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          )}
          <kbd className="hidden sm:inline-flex items-center gap-0.5 rounded border border-border/60 bg-muted/40 px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-2 sm:p-3 divide-y divide-border/20">
          {filteredItems.length === 0 ? (
            <div className="py-12 text-center text-sm text-muted-foreground space-y-1">
              <p className="font-semibold text-foreground">No matching results found</p>
              <p className="text-xs">Try searching for "Starlink", "Agile", "Next.js", or "Certificates"</p>
            </div>
          ) : (
            filteredItems.map((item, index) => {
              const Icon = CATEGORY_ICONS[item.category] || Compass
              const isSelected = index === selectedIndex

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleSelect(item)}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`group flex w-full items-center justify-between gap-4 rounded-xl px-3.5 py-3 text-left transition-colors duration-150 ${
                    isSelected
                      ? "bg-primary/10 border border-primary/40 shadow-sm"
                      : "border border-transparent hover:bg-secondary/40"
                  }`}
                >
                  <div className="flex items-start gap-3 min-w-0">
                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg mt-0.5 transition-colors ${
                        isSelected
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary/80 text-muted-foreground group-hover:text-primary"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-xs sm:text-sm text-foreground truncate">
                          {item.title}
                        </span>
                        <span className="shrink-0 rounded-md border border-border/50 bg-secondary/50 px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
                          {item.category}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground line-clamp-1 mt-0.5">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0 text-muted-foreground group-hover:text-primary transition-transform duration-200 group-hover:translate-x-0.5">
                    {isSelected ? (
                      <CornerDownLeft className="h-4 w-4 text-primary" />
                    ) : (
                      <ArrowRight className="h-4 w-4 opacity-40 group-hover:opacity-100" />
                    )}
                  </div>
                </button>
              )
            })
          )}
        </div>

        {/* Footer info & shortcut hints */}
        <div className="flex items-center justify-between border-t border-border/50 px-4 py-2.5 bg-secondary/20 font-mono text-[11px] text-muted-foreground">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <kbd className="rounded border border-border/60 bg-muted/40 px-1.5 py-0.5">↑</kbd>
              <kbd className="rounded border border-border/60 bg-muted/40 px-1.5 py-0.5">↓</kbd> Navigate
            </span>
            <span className="hidden sm:inline-flex items-center gap-1">
              <kbd className="rounded border border-border/60 bg-muted/40 px-1.5 py-0.5">↵</kbd> Select
            </span>
          </div>
          <span>{filteredItems.length} result{filteredItems.length === 1 ? "" : "s"}</span>
        </div>
      </div>
    </div>
  )
}

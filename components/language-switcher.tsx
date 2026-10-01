"use client";

import { useState, useRef, useEffect } from "react";
import { useLanguage } from "./language-context";
import { Globe, Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
  variant?: "header" | "mobile" | "compact";
  className?: string;
}

export function LanguageSwitcher({ variant = "header", className }: LanguageSwitcherProps) {
  const { locale, setLocale, languages, currentLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  if (variant === "mobile") {
    return (
      <div className={cn("space-y-1.5", className)}>
        <div className="flex items-center gap-2 px-1 text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
          <Globe className="h-3.5 w-3.5 text-primary" />
          <span>Language / Jazyk</span>
        </div>
        <div className="grid grid-cols-2 gap-1.5 pt-1">
          {languages.map((lang) => {
            const isSelected = lang.code === locale;
            return (
              <button
                key={lang.code}
                onClick={() => setLocale(lang.code)}
                className={cn(
                  "flex items-center justify-between gap-2 px-3 py-2 rounded-lg text-xs font-medium border transition-all text-left",
                  isSelected
                    ? "border-primary/50 bg-primary/10 text-primary font-semibold shadow-xs"
                    : "border-border/50 bg-secondary/30 text-muted-foreground hover:bg-secondary hover:text-foreground"
                )}
              >
                <div className="flex items-center gap-2 min-w-0 truncate">
                  <span className="text-sm shrink-0">{lang.flag}</span>
                  <span className="truncate">{lang.nativeName}</span>
                </div>
                {isSelected && <Check className="h-3.5 w-3.5 text-primary shrink-0" />}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className={cn("relative inline-block text-left", className)} ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="Select language"
        className={cn(
          "inline-flex items-center gap-2 px-3 py-1.5 rounded-full font-mono text-xs border transition-all duration-200 cursor-pointer select-none",
          isOpen
            ? "border-primary/60 bg-primary/10 text-primary shadow-xs ring-1 ring-primary/20"
            : "border-border/50 bg-secondary/50 text-muted-foreground hover:border-primary/40 hover:text-foreground hover:bg-secondary/80"
        )}
      >
        <Globe className="h-3.5 w-3.5 text-primary shrink-0" />
        <span className="font-semibold text-foreground uppercase">{currentLanguage.code}</span>
        <span className="text-[11px] text-muted-foreground hidden lg:inline">({currentLanguage.nativeName})</span>
        <ChevronDown
          className={cn(
            "h-3 w-3 text-muted-foreground transition-transform duration-200 shrink-0",
            isOpen && "rotate-180 text-primary"
          )}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 origin-top-right rounded-xl border border-border/80 bg-card/95 backdrop-blur-md p-1.5 shadow-xl shadow-black/20 ring-1 ring-border/50 z-50 animate-in fade-in-0 zoom-in-95 duration-150">
          <div className="px-2.5 py-1.5 text-[10px] font-mono uppercase tracking-wider text-muted-foreground border-b border-border/50 mb-1 flex items-center justify-between">
            <span>Select Language</span>
            <span className="text-[9px] bg-primary/10 text-primary px-1.5 py-0.2 rounded">6 Languages</span>
          </div>

          <div className="space-y-0.5">
            {languages.map((lang) => {
              const isSelected = lang.code === locale;
              return (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLocale(lang.code);
                    setIsOpen(false);
                  }}
                  className={cn(
                    "w-full flex items-center justify-between gap-2.5 px-2.5 py-2 rounded-lg text-xs transition-colors text-left",
                    isSelected
                      ? "bg-primary/15 text-primary font-semibold"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                  )}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="text-base leading-none select-none">{lang.flag}</span>
                    <div className="flex flex-col min-w-0">
                      <span className="font-medium text-foreground leading-tight truncate">{lang.nativeName}</span>
                      <span className="text-[10px] text-muted-foreground leading-tight">{lang.name}</span>
                    </div>
                  </div>

                  {isSelected && (
                    <Check className="h-3.5 w-3.5 text-primary shrink-0" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

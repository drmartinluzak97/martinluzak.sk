"use client";

import { useState } from "react";
import {
  Briefcase,
  Calendar,
  Sparkles,
  ExternalLink,
  ChevronDown,
  Layers,
} from "lucide-react";
import { useLanguage } from "@/components/language-context";
import { INTRO_DATA } from "@/lib/i18n/dictionaries/introduction-data";

export function ExperienceTimeline() {
  const { locale } = useLanguage();
  const data = INTRO_DATA[locale] || INTRO_DATA.en;
  const experiences = data.experiences;

  // First item (id: 0) is expanded by default, others collapsed
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({
    0: true,
  });

  const toggleItem = (id: number) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const allExpanded = experiences.every((exp) => expandedItems[exp.id]);

  const toggleAll = () => {
    if (allExpanded) {
      setExpandedItems({ 0: true });
    } else {
      const all: Record<number, boolean> = {};
      experiences.forEach((exp) => {
        all[exp.id] = true;
      });
      setExpandedItems(all);
    }
  };

  return (
    <div className="space-y-8">
      {/* Header controls: Counter & Expand/Collapse All */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/40 pb-4">
        <div className="font-mono text-xs text-muted-foreground">
          Showing <span className="text-foreground font-semibold">{experiences.length} career positions</span> (2018 — Present)
        </div>

        <button
          onClick={toggleAll}
          className="group inline-flex items-center gap-2 rounded-xl border border-border/70 bg-card/60 glass px-3.5 py-1.5 font-mono text-xs text-foreground transition-all duration-300 hover:border-primary/50 hover:bg-card/90 hover:text-primary active:scale-[0.98]"
        >
          <Layers className="h-3.5 w-3.5 text-primary" />
          <span>{allExpanded ? "Collapse All" : "Expand All Positions"}</span>
        </button>
      </div>

      {/* Timeline List */}
      <div className="relative space-y-6 before:absolute before:inset-0 before:left-4 sm:before:left-6 before:h-full before:w-0.5 before:bg-border/60">
        {experiences.map((exp, index) => {
          const isExpanded = !!expandedItems[exp.id];

          return (
            <div
              key={exp.id}
              className="relative flex gap-6 sm:gap-8 group animate-fade-in-up"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              {/* Timeline node icon */}
              <div
                onClick={() => toggleItem(exp.id)}
                className={`relative z-10 flex h-9 w-9 sm:h-12 sm:w-12 shrink-0 cursor-pointer items-center justify-center rounded-xl border transition-all duration-300 ${
                  isExpanded
                    ? "border-primary bg-primary/10 text-primary shadow-md shadow-primary/20 scale-105"
                    : "border-border/80 bg-card text-muted-foreground hover:border-primary/60 hover:text-primary"
                }`}
              >
                <Briefcase className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>

              {/* Content Card */}
              <div
                className={`flex-1 rounded-2xl border transition-all duration-300 ${
                  isExpanded
                    ? "border-primary/40 bg-card/80 p-6 sm:p-7 shadow-xl shadow-black/20"
                    : "border-border/60 bg-card/50 p-5 sm:p-6 hover:border-primary/30 hover:bg-card/70"
                }`}
              >
                {/* Clickable Header Bar */}
                <div
                  onClick={() => toggleItem(exp.id)}
                  className="cursor-pointer select-none flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-base sm:text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                        {exp.title}
                      </h3>
                    </div>
                    <div className="font-mono text-xs sm:text-sm font-medium text-primary">
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-3 pt-1 sm:pt-0">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-secondary/50 px-3 py-1 font-mono text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {exp.period}
                    </span>

                    <button
                      type="button"
                      aria-label={isExpanded ? "Collapse details" : "Expand details"}
                      className={`flex h-8 w-8 items-center justify-center rounded-lg border border-border/60 bg-secondary/30 text-muted-foreground transition-all duration-300 hover:border-primary hover:text-primary ${
                        isExpanded ? "rotate-180 bg-primary/10 text-primary border-primary/40" : ""
                      }`}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                {/* Collapsed Compact State Summary & Quick Tags */}
                {!isExpanded && (
                  <div
                    onClick={() => toggleItem(exp.id)}
                    className="mt-3.5 cursor-pointer pt-3 border-t border-border/30 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <div className="flex flex-wrap gap-1.5">
                      {exp.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-border/40 bg-secondary/30 px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                      {exp.tags.length > 3 && (
                        <span className="font-mono text-[10px] text-muted-foreground/70 self-center">
                          +{exp.tags.length - 3} more
                        </span>
                      )}
                    </div>

                    <span className="font-mono text-xs text-primary/90 group-hover:text-primary inline-flex items-center gap-1">
                      <span>View details & milestone</span>
                      <ChevronDown className="h-3 w-3" />
                    </span>
                  </div>
                )}

                {/* Expanded Full Details */}
                {isExpanded && (
                  <div className="mt-4 pt-4 border-t border-border/40 space-y-4 animate-fade-in-up">
                    <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
                      {exp.description}
                    </p>

                    {/* Bullet Highlights */}
                    <div className="space-y-2">
                      {exp.highlights.map((highlight, hIdx) => (
                        <div
                          key={hIdx}
                          className="flex items-start gap-2 text-xs sm:text-sm text-foreground/90"
                        >
                          <span className="text-primary mt-0.5">▹</span>
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {/* Key Milestone Box */}
                    {exp.milestone && (
                      <div className="rounded-xl border border-primary/30 bg-primary/5 p-3.5 sm:p-4 transition-all duration-300 hover:border-primary/50 hover:bg-primary/10">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                          <span className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-primary">
                            <Sparkles className="h-3.5 w-3.5 text-primary" />
                            <span>{exp.milestone.badge}</span>
                          </span>
                          {exp.milestone.link && (
                            <a
                              href={exp.milestone.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 font-mono text-[11px] text-primary/90 hover:text-primary hover:underline"
                            >
                              <span>{exp.milestone.linkText}</span>
                              {exp.milestone.lang && (
                                <span className="rounded bg-secondary/80 px-1.5 py-0.2 text-[10px] text-muted-foreground">
                                  {exp.milestone.lang}
                                </span>
                              )}
                              <ExternalLink className="h-3 w-3" />
                            </a>
                          )}
                        </div>
                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                          {exp.milestone.text}
                        </p>
                      </div>
                    )}

                    {/* Full Tags */}
                    <div className="flex flex-wrap gap-2 pt-2 border-t border-border/30">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-border/60 bg-secondary/40 px-2.5 py-1 font-mono text-[11px] text-muted-foreground transition-colors hover:text-foreground hover:border-border"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

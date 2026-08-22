"use client";

import { useState } from "react";
import {
  Briefcase,
  Calendar,
  Sparkles,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Layers,
} from "lucide-react";

export interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  period: string;
  type: string;
  description: string;
  highlights: string[];
  milestone?: {
    badge: string;
    text: string;
    link?: string;
    linkText?: string;
    lang?: string;
  };
  tags: string[];
}

const experiencesData: ExperienceItem[] = [
  {
    id: 0,
    title: "Nonprofit Assistant — Humans & IT",
    company: "Zväz diabetikov Slovenska - DIATYRNAVIA",
    period: "Feb 2019 — Aug 2026",
    type: "Long-term Community & IT Support",
    description:
      "Direct executive and technical assistant to the chairwoman. Providing continuous IT education and administrative support to leadership, co-organizing community events with heavy senior participation, managing M365 systems, and producing promotional video materials.",
    highlights: [
      "Provided comprehensive direct support and continuous digital upskilling to the chairwoman in daily leadership workflows.",
      "Co-organized large community gatherings and health awareness events tailored predominantly for seniors.",
      "Managed Microsoft 365 administration, event IT logistics, and video production.",
    ],
    milestone: {
      badge: "🏆 Award Milestone",
      text: "Contributed to achieving the national Senior Friendly 2023 award through dedicated executive assistance to the chairwoman and organizing community events supporting seniors.",
      link: "https://www.seniorfriendly.sk/news/showNew/ocenenia-sf-2023",
      linkText: "Senior Friendly 2023 Award",
      lang: "🇸🇰 SVK",
    },
    tags: ["Leadership Support", "Senior Community", "M365", "Windows Admin", "Video Production"],
  },
  {
    id: 1,
    title: "Technical Network Support Engineer",
    company: "Marlink s.r.o.",
    period: "Jun 2025 — Dec 2025",
    type: "Maritime Satellite & Enterprise Networks",
    description:
      "Provided critical Tier 2 network and communications technical support for global maritime customers (vessel captains, onboard field engineers) via ticketing and live phone assistance under mission-critical SLA.",
    highlights: [
      "Troubleshot complex maritime satellite networks, VSAT systems, and onboard routers.",
      "Monitored live network infrastructure and maintained high communication security.",
      "Delivered calm, precise technical solutions under high-pressure maritime operational conditions.",
    ],
    milestone: {
      badge: "🛰️ Hybrid VSAT & Starlink Support",
      text: "Provided dedicated Tier 2 technical network support for global maritime fleets, addressing complex communication incidents across hybrid connectivity setups combining traditional VSAT with modern Starlink satellite solutions.",
      link: "https://marlink.com/resources/knowledge-hub/starlink-and-marlink/",
      linkText: "Marlink Starlink Integration",
      lang: "🌐 EN",
    },
    tags: ["Technical Support", "Maritime VSAT", "Starlink Solutions", "Zabbix", "SQL Telemetry", "Network Security"],
  },
  {
    id: 2,
    title: "System Health Engineer & Tester",
    company: "ForesServices, s. r. o.",
    period: "Sep 2024 — Apr 2025",
    type: "Logistics Infrastructure & API Testing",
    description:
      "Monitored high-volume system health and applications for DPD courier infrastructure across multiple European countries (NL, CH, BE, SK). Conducted systematic API validation and regression testing.",
    highlights: [
      "Monitored server health, service availability, and alert queues via Zabbix.",
      "Executed API endpoint testing and payload inspection using Insomnia.",
      "Ensured maximum uptime and swift incident escalation for logistics pipelines.",
    ],
    milestone: {
      badge: "📦 Multi-Country Logistics Monitoring",
      text: "Maintained proactive Zabbix system health monitoring (operating 07:00 – 23:00, 7 days a week) and Insomnia API regression testing for DPD courier infrastructure across the Netherlands, Switzerland, Belgium, and Slovakia.",
      link: "https://www.fores.group/case-studies-logistics-dpd/",
      linkText: "Fores & DPD Case Study",
      lang: "🌐 EN",
    },
    tags: ["Zabbix Monitoring", "API Testing", "Insomnia", "DPD Logistics", "Shift Operations (7-23)", "System Health"],
  },
  {
    id: 3,
    title: "Banking Implementation Specialist",
    company: "Regional Card Processing Centre, s. r. o.",
    period: "Mar 2021 — Mar 2023",
    type: "Financial Technology & High Availability",
    description:
      "Executed end-to-end implementation of banking products and application parameter changes. Maintained zero-downtime reliability according to strict financial and security installation criteria.",
    highlights: [
      "Configured sensitive technical parameters for banking terminals and card processing apps.",
      "Collaborated with compliance and banking engineers to guarantee operational integrity.",
      "Managed Oracle and MS SQL Server database configurations.",
    ],
    milestone: {
      badge: "🏦 Selected Project Milestones",
      text: "Delivered technical parameter configurations across a variety of banking projects, including notable examples such as Croatia's currency transition (Kuna → Euro) and technical transaction continuity during the Raiffeisen Bank to KBC Group acquisition.",
      link: "https://newsroom.kbc.com/kbc-completes-acquisition-of-raiffeisen-bank-internationals-bulgarian-operations",
      linkText: "KBC Raiffeisen Acquisition",
      lang: "🌐 Global",
    },
    tags: ["Banking Systems", "Euro Transition", "Oracle SQL", "MS SQL Server", "High Availability", "Strict Compliance"],
  },
  {
    id: 4,
    title: "Customers Network Support Specialist",
    company: "SWAN, a.s.",
    period: "Mar 2020 — Feb 2021",
    type: "Telecommunications & Tier 2 Support",
    description:
      "Delivered Tier 2 network troubleshooting and customer support via phone, email, and written requests for customers experiencing complex internet, IPTV, and telephony issues.",
    highlights: [
      "Diagnosed routing, DNS, optical line, and modem configuration issues.",
      "Bridged complex ISP network diagnostics into plain, reassuring customer guidance.",
    ],
    milestone: {
      badge: "🛡️ COVID-19 Critical Infrastructure",
      text: "Maintained vital network uptime during the onset of the pandemic when schools closed nationwide — within just 10 days of lockdown, primary, middle, and high schools as well as universities fully relied on home connectivity for mandatory distance education.",
      link: "https://kafkadeskdotorg.wordpress.com/2020/05/29/lessons-learned-in-slovakias-education-lockdown/",
      linkText: "Slovakia Lockdown Context",
      lang: "🌐 EN",
    },
    tags: ["Telecommunications", "Tier 2 Support", "COVID-19 Continuity", "Routing & Switching", "IPTV"],
  },
  {
    id: 5,
    title: "Manual Tester & Client Trainer",
    company: "KASO TECHNOLOGIES, s. r. o.",
    period: "Dec 2018 — May 2019",
    type: "POS & ERP Systems",
    description:
      "Tested integrated software and hardware products, specifically self-service checkouts and ERP software suites. Conducted customized, hands-on technical training sessions for retail clients.",
    highlights: [
      "Executed comprehensive test cases on self-service POS checkout hardware and software.",
      "Trained non-technical retail staff on point-of-sale workflows and troubleshooting.",
    ],
    milestone: {
      badge: "🛒 eKasa Reform & POS Testing",
      text: "Alongside continuous ERP and POS testing, one of the key milestones was implementing and validating self-service checkout systems during the Slovak legislative reform from legacy fiscal printers to online eKasa.",
      link: "https://marosavat.com/vat-news/slovakia-full-ekasa-obligation-january-2026",
      linkText: "Slovakia eKasa Reform",
      lang: "🌐 EN",
    },
    tags: ["Manual Testing", "eKasa Reform", "ERP Systems", "Self-Service POS", "Client Training"],
  },
];

export function ExperienceTimeline() {
  // First item (DIATYRNAVIA, id: 0) is expanded by default, others collapsed
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({
    0: true,
  });

  const toggleItem = (id: number) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const allExpanded = experiencesData.every((exp) => expandedItems[exp.id]);

  const toggleAll = () => {
    if (allExpanded) {
      setExpandedItems({ 0: true });
    } else {
      const all: Record<number, boolean> = {};
      experiencesData.forEach((exp) => {
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
          Showing <span className="text-foreground font-semibold">6 career positions</span> (2018 — Present)
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
        {experiencesData.map((exp, index) => {
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

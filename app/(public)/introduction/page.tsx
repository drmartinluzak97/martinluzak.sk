import Link from "next/link";
import {
  Briefcase,
  Award,
  CheckCircle2,
  Calendar,
  MapPin,
  Linkedin,
  Mail,
  Rocket,
  Shield,
  Layers,
  Heart,
  Server,
  Network,
  Users,
  Compass,
  ArrowUpRight,
  Sparkles,
  BookOpen,
  Video,
  ExternalLink,
  FileText,
} from "lucide-react";

export const metadata = {
  title: "About Me & CV — Martin Lužák",
  description:
    "Professional background, work experience, certifications, and philosophy of Martin Lužák — combining technical precision with human empathy.",
};

const stats = [
  { label: "Experience in IT & Mentoring", value: "7+ Years" },
  { label: "Systems & Network Focus", value: "Enterprise & Maritime" },
  { label: "Core Competency", value: "Logic + Empathy" },
  { label: "Verified Credentials", value: "5+ Global Certifications" },
];

const experiences = [
  {
    title: "Nonprofit Assistant — Humans & IT",
    company: "Zväz diabetikov Slovenska - DIATYRNAVIA",
    period: "Feb 2019 — Present",
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
    },
    tags: ["Technical Support", "Maritime VSAT", "Starlink Solutions", "Zabbix", "SQL Telemetry", "Network Security"],
  },
  {
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

const certifications = [
  {
    title: "Atlassian Agile Project Management",
    issuer: "Atlassian / LinkedIn Learning",
    badge: "Professional Certificate",
    description:
      "Validated competencies in modern Agile methodologies, sprint planning, Jira project architecture, and cross-functional team delivery.",
    icon: Compass,
    status: "Verified",
    file: "CertificateOfCompletion_Atlassian Agile Project Management Professional Certificate.pdf",
  },
  {
    title: "Negotiation Professional Certificate",
    issuer: "American Negotiation Institute (ANI)",
    badge: "Strategic Communication",
    description:
      "Advanced mastery in de-escalation, conflict resolution, active listening, and achieving win-win outcomes in high-stakes environments.",
    icon: Users,
    status: "Verified",
    file: "CertificateOfCompletion_Negotiation Professional Certificate by American Negotiation Institute.pdf",
  },
  {
    title: "ITIL® Foundation 4",
    issuer: "AXELOS / IT Service Management",
    badge: "Service Management",
    description:
      "End-to-end framework for modern IT service management (ITSM), continuous improvement, incident resolution, and value co-creation.",
    icon: Layers,
    status: "Verified",
    file: "CertificateOfCompletion_ITIL Foundation 4 First Look.pdf",
  },
  {
    title: "Lean Six Sigma Foundations",
    issuer: "Process Excellence Institute",
    badge: "Operational Efficiency",
    description:
      "Techniques for identifying process waste, streamlining digital workflows, and enforcing quantitative quality standards.",
    icon: CheckCircle2,
    status: "Verified",
    file: "CertificateOfCompletion_Lean Six Sigma Foundations.pdf",
  },
  {
    title: "Cisco Certified Support Technician (CCST) Cybersecurity",
    issuer: "Cisco Certification Preparation",
    badge: "Cybersecurity",
    description:
      "Merging hands-on network administration with enterprise security fundamentals, vulnerability analysis, and digital defense.",
    icon: Shield,
    status: "Verified",
    file: "CertificateOfCompletion_Cisco Certified Support Technician CCST Cybersecurity 100160 Cert Prep.pdf",
  },
  {
    title: "Essential Skills in Adobe Premiere Pro 2025",
    issuer: "Adobe / Creative Media",
    badge: "Professional Certificate",
    description:
      "Video editing, color grading, audio synchronization, and multimedia storytelling applied to educational and promotional content.",
    icon: Video,
    status: "Verified",
    file: "CertificateOfCompletion_Essential Skills in Adobe Premiere Pro 2025 Professional Certificate.pdf",
  },
];

const skillCategories = [
  {
    title: "Technical & Systems",
    icon: Server,
    skills: [
      "Computer Networks & Routing",
      "System Monitoring (Zabbix)",
      "Databases (Oracle, MS SQL, SQL)",
      "API Testing (Insomnia)",
      "Software & Hardware Testing",
      "Windows & Linux Systems",
      "Microsoft 365 Administration",
    ],
  },
  {
    title: "Methodologies & Operations",
    icon: Layers,
    skills: [
      "ITIL® 4 Service Management",
      "Agile & Scrum Practices",
      "Atlassian Jira & Confluence",
      "Lean Six Sigma Process Flow",
      "Incident & Problem Resolution",
      "Quality Assurance & QA Testing",
    ],
  },
  {
    title: "Human Connection & Leadership",
    icon: Heart,
    skills: [
      "Customer Focus & Empathy",
      "High Emotional Intelligence (EQ)",
      "Technical Mentoring & Training",
      "Strategic Negotiation (ANI)",
      "Crisis De-escalation",
      "Clear Stakeholder Communication",
    ],
  },
];

export default function IntroductionPage() {
  return (
    <div className="pt-24 sm:pt-28 pb-20">
      {/* Hero Header */}
      <section className="relative px-4 sm:px-6 pt-8 pb-16 sm:pb-20">
        <div className="mx-auto max-w-5xl space-y-8">
          <div className="space-y-4 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3.5 py-1 text-xs font-mono text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              <span>About Me & Interactive CV</span>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-balance">
              Where Technical Logic Meets{" "}
              <span className="bg-gradient-to-l from-primary/50 to-accent text-transparent bg-clip-text">
                Human Empathy
              </span>
            </h1>

            <p className="max-w-3xl text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Since 2017, I have built a career defined by technical precision and human connection. From troubleshooting mission-critical networks and banking systems to mentoring individuals in everyday digital literacy, I ensure technology works reliably for the people who depend on it.
            </p>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2 animate-fade-in-up stagger-2">
            <a
              href="https://linkedin.com/in/martinluzak"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 rounded-xl border border-primary bg-primary px-6 py-3.5 font-mono text-xs sm:text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Linkedin className="h-4 w-4" />
              <span>Connect on LinkedIn</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href="mailto:hello@martinluzak.sk"
              className="group inline-flex items-center justify-center gap-2.5 rounded-xl border border-border/80 bg-card/60 glass px-6 py-3.5 font-mono text-xs sm:text-sm text-foreground transition-all duration-300 hover:border-primary/50 hover:bg-secondary/60 hover:text-primary active:scale-[0.98]"
            >
              <Mail className="h-4 w-4" />
              <span>hello@martinluzak.sk</span>
            </a>

            <Link
              href="/projects"
              className="group inline-flex items-center justify-center gap-2.5 rounded-xl border border-border/80 bg-card/60 glass px-6 py-3.5 font-mono text-xs sm:text-sm text-foreground transition-all duration-300 hover:border-primary/50 hover:bg-secondary/60 hover:text-primary active:scale-[0.98]"
            >
              <Rocket className="h-4 w-4" />
              <span>My side projects →</span>
            </Link>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 gap-4 pt-6 sm:grid-cols-4 animate-fade-in-up stagger-3">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="rounded-xl border border-border/60 bg-card/40 p-4 sm:p-5 backdrop-blur-sm transition-all duration-300 hover:border-primary/40"
              >
                <div className="font-mono text-xl sm:text-2xl font-bold text-foreground">
                  {stat.value}
                </div>
                <div className="mt-1 font-mono text-xs text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Philosophy Section */}
      <section className="relative px-4 sm:px-6 py-12 sm:py-16">
        <div className="mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-card/80 via-card/50 to-primary/10 p-6 sm:p-10 backdrop-blur-md shadow-2xl">
            <div className="absolute top-0 right-0 -mt-8 -mr-8 h-48 w-48 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
            
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary">
                <Heart className="h-4 w-4" />
                <span>The Core Philosophy</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                &ldquo;I don&apos;t just manage systems; I create meaningful impact.&rdquo;
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
                Technical problems rarely exist in isolation—they almost always impact real human workflows, stress levels, and operational rhythm. Combining technical rigor (databases, networking, health monitoring) with high emotional intelligence allows me to bridge the gap between complex machines and the people who rely on them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="relative px-4 sm:px-6 py-12 sm:py-16">
        <div className="mx-auto max-w-5xl space-y-10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary">
              <Briefcase className="h-4 w-4" />
              <span>Career Journey</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Work Experience
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base max-w-2xl">
              Proven track record across mission-critical maritime IT, high-availability banking integrations, multi-country logistics monitoring, and community digital mentoring.
            </p>
          </div>

          <div className="relative space-y-8 before:absolute before:inset-0 before:left-4 sm:before:left-6 before:h-full before:w-0.5 before:bg-border/60">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative flex gap-6 sm:gap-8 group animate-fade-in-up"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                {/* Timeline node */}
                <div className="relative z-10 flex h-9 w-9 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl border border-border/80 bg-card shadow-md transition-all duration-300 group-hover:border-primary group-hover:scale-110">
                  <Briefcase className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground transition-colors group-hover:text-primary" />
                </div>

                {/* Content Card */}
                <div className="flex-1 rounded-2xl border border-border/60 bg-card/60 p-6 sm:p-7 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:bg-card/80 hover:shadow-xl">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-border/40 pb-4 mb-4">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {exp.title}
                      </h3>
                      <div className="font-mono text-sm font-medium text-primary">
                        {exp.company}
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 sm:text-right">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-secondary/50 px-3 py-1 font-mono text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base leading-relaxed text-muted-foreground mb-4">
                    {exp.description}
                  </p>

                  <div className="space-y-2 mb-5">
                    {exp.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-foreground/90">
                        <span className="text-primary mt-0.5">▹</span>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Key Milestone / Specific Impact Box */}
                  {exp.milestone && (
                    <div className="mb-5 rounded-xl border border-primary/30 bg-primary/5 p-3.5 sm:p-4 transition-all duration-300 hover:border-primary/50 hover:bg-primary/10">
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

                  <div className="flex flex-wrap gap-2 pt-2 border-t border-border/40">
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Continuous Learning Section */}
      <section className="relative px-4 sm:px-6 py-12 sm:py-16">
        <div className="mx-auto max-w-5xl space-y-10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary">
              <Award className="h-4 w-4" />
              <span>Continuous Growth</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Certifications & Credentials
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base max-w-2xl">
              A firm believer in perpetual skill expansion. My credentials validate international standards in Agile execution, strategic negotiation, and IT service management.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="group relative flex flex-col justify-between rounded-2xl border border-border/60 bg-card/60 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-card/80 hover:shadow-lg"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                      <cert.icon className="h-5 w-5" />
                    </div>
                    <span
                      className={`rounded-full px-2.5 py-0.5 font-mono text-[11px] font-medium border ${
                        cert.status === "Verified"
                          ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                          : "border-primary/40 bg-primary/10 text-primary"
                      }`}
                    >
                      {cert.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    <p className="font-mono text-xs text-muted-foreground mt-0.5">
                      {cert.issuer}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-border/40">
                  <a
                    href={`/certificates/${encodeURIComponent(cert.file)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex w-full items-center justify-center gap-2 rounded-xl border border-primary/30 bg-primary/10 px-3.5 py-2 font-mono text-xs text-primary transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground active:scale-[0.98]"
                  >
                    <FileText className="h-3.5 w-3.5" />
                    <span>View Official PDF</span>
                    <ExternalLink className="h-3 w-3 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Explore all certificates CTA banner */}
          <div className="rounded-2xl border border-border/80 bg-card/60 glass p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg animate-fade-in-up">
            <div className="space-y-1.5 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 font-mono text-xs text-primary">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Credentials Hub</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground">
                Looking for all 29 verified certificates & courses?
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground max-w-xl">
                Explore the complete collection with live search and category filters across Agile, Networking, Satellite IT, Cybersecurity, AI Management, and Communication.
              </p>
            </div>

            <Link
              href="/certificates"
              className="group inline-flex shrink-0 items-center justify-center gap-2.5 rounded-xl border border-primary bg-primary px-6 py-3.5 font-mono text-xs sm:text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Explore all 29 certificates</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Matrix Section */}
      <section className="relative px-4 sm:px-6 py-12 sm:py-16">
        <div className="mx-auto max-w-5xl space-y-10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary">
              <Layers className="h-4 w-4" />
              <span>Capabilities</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Skills & Core Competencies
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base max-w-2xl">
              The toolkit that enables stable operational architectures and transparent stakeholder collaboration.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="rounded-2xl border border-border/60 bg-card/60 p-6 sm:p-7 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:shadow-lg space-y-6"
              >
                <div className="flex items-center gap-3 border-b border-border/40 pb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                    <category.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-foreground">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-2.5">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-center gap-2.5 rounded-lg border border-border/40 bg-secondary/30 px-3 py-2 font-mono text-xs text-foreground transition-all duration-200 hover:border-primary/40 hover:bg-secondary/60"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="relative px-4 sm:px-6 pt-12">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-2xl border border-border/60 bg-card/60 p-8 sm:p-12 text-center backdrop-blur-md space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Interested in working together or discussing a technical puzzle?
            </h2>
            <p className="max-w-xl mx-auto text-sm sm:text-base text-muted-foreground">
              Whether you need support engineering, systems guidance, or wish to explore a collaboration, I&apos;d love to connect.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href="mailto:hello@martinluzak.sk"
                className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-xl border border-primary bg-primary px-8 py-4 font-mono text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-500 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Say hello at hello@martinluzak.sk</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
              <Link
                href="/projects"
                className="group inline-flex items-center justify-center gap-3 rounded-xl border border-border/80 bg-secondary/60 px-8 py-4 font-mono text-sm text-foreground transition-all duration-300 hover:border-primary/50 hover:text-primary active:scale-[0.98]"
              >
                <span>Explore my side projects</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

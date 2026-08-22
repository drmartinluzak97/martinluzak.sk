"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  Search,
  ArrowLeft,
  Award,
  ExternalLink,
  Shield,
  Layers,
  Network,
  Users,
  Compass,
  Sparkles,
  CheckCircle2,
  FileText,
  Video,
  Filter,
  Check,
} from "lucide-react";

export interface CertificateItem {
  id: number;
  title: string;
  issuer: string;
  category: string;
  file: string;
  badge: string;
  description: string;
  featured?: boolean;
}

const certificatesData: CertificateItem[] = [
  // Agile & Leadership
  {
    id: 1,
    title: "Atlassian Agile Project Management Professional Certificate",
    issuer: "Atlassian / LinkedIn Learning",
    category: "Agile & Leadership",
    file: "CertificateOfCompletion_Atlassian Agile Project Management Professional Certificate.pdf",
    badge: "Professional Certificate",
    description:
      "Comprehensive mastery in agile leadership, backlog grooming, sprint planning, and managing cross-functional teams in Jira.",
    featured: true,
  },
  {
    id: 2,
    title: "Agile Project Management with Jira Cloud",
    issuer: "Atlassian",
    category: "Agile & Leadership",
    file: "CertificateOfCompletion_Agile Project Management with Jira Cloud 1 Projects Boards and Issues.pdf",
    badge: "Jira Mastery",
    description:
      "Configuring Jira boards, issue types, epics, and automation workflows for high-velocity software and IT operations.",
  },
  {
    id: 3,
    title: "Agile Foundations",
    issuer: "Project Management Institute (PMI)",
    category: "Agile & Leadership",
    file: "CertificateOfCompletion_Agile Foundations.pdf",
    badge: "Core Methodology",
    description:
      "Fundamental principles of agile culture, iterative delivery, standups, and retrospective continuous improvement.",
  },
  {
    id: 4,
    title: "Succeeding as a New Manager Professional Certificate",
    issuer: "LinkedIn Learning",
    category: "Agile & Leadership",
    file: "CertificateOfCompletion_Succeeding as a New Manager Professional Certificate by LinkedIn Learning.pdf",
    badge: "Professional Certificate",
    description:
      "Team leadership, delegation, constructive feedback loops, psychological safety, and operational alignment.",
  },

  // Human Skills & EQ
  {
    id: 5,
    title: "Negotiation Professional Certificate",
    issuer: "American Negotiation Institute (ANI)",
    category: "Human Skills & EQ",
    file: "CertificateOfCompletion_Negotiation Professional Certificate by American Negotiation Institute.pdf",
    badge: "Professional Certificate",
    description:
      "Strategic negotiation frameworks, de-escalating high-tension discussions, active listening, and finding collaborative solutions.",
    featured: true,
  },
  {
    id: 6,
    title: "Essential Business Communication Skills Professional Certificate",
    issuer: "LinkedIn Learning",
    category: "Human Skills & EQ",
    file: "CertificateOfCompletion_Essential Business Communication Skills Professional Certificate by LinkedIn Learning.pdf",
    badge: "Professional Certificate",
    description:
      "Clarity in technical reporting, cross-departmental alignment, executive summaries, and empathetic stakeholder communication.",
  },
  {
    id: 7,
    title: "Mindful Communication for Less Conflict & Stronger Relationships",
    issuer: "LinkedIn Learning",
    category: "Human Skills & EQ",
    file: "CertificateOfCompletion_Mindful Communication for Less Conflict and Stronger Relationships.pdf",
    badge: "Emotional Intelligence",
    description:
      "Techniques for reducing friction, non-violent communication, and maintaining calmness during incident troubleshooting.",
  },
  {
    id: 8,
    title: "Building Business Relationships",
    issuer: "LinkedIn Learning",
    category: "Human Skills & EQ",
    file: "CertificateOfCompletion_Building Business Relationships.pdf",
    badge: "Interpersonal Skills",
    description:
      "Developing long-term trust with clients, internal partners, and vendor engineers through transparency and reliability.",
  },
  {
    id: 9,
    title: "Psychological Safety: Clear Blocks to Innovation & Collaboration",
    issuer: "LinkedIn Learning",
    category: "Human Skills & EQ",
    file: "CertificateOfCompletion_Psychological Safety Clear Blocks to Innovation Collaboration and RiskTaking.pdf",
    badge: "Team Culture",
    description:
      "Creating open environments where team members can voice anomalies, admit mistakes early, and propose improvements.",
  },
  {
    id: 10,
    title: "Professional Soft Skills Learning Pathway",
    issuer: "LinkedIn Learning",
    category: "Human Skills & EQ",
    file: "CertificateOfCompletion_Professional Soft Skills Learning Pathway.pdf",
    badge: "Learning Pathway",
    description:
      "Holistic development of adaptability, emotional intelligence, critical thinking, and collaborative problem-solving.",
  },

  // Networking & Satellite
  {
    id: 11,
    title: "Satellite Internet & Communications Fundamentals",
    issuer: "Telecom & Satellite IT",
    category: "Networking & Satellite",
    file: "CertificateOfCompletion_Satellite Internet and Communications Fundamentals.pdf",
    badge: "Maritime & Satellite",
    description:
      "Satellite orbits, VSAT architectures, link budgets, modulation, and latency mitigation for offshore and maritime networks.",
    featured: true,
  },
  {
    id: 12,
    title: "Cisco CCNA (200-301) Cert Prep: Network Fundamentals & Access",
    issuer: "Cisco Certification Preparation",
    category: "Networking & Satellite",
    file: "CertificateOfCompletion_Cisco CCNA 200301 Cert Prep 1 Network Fundamentals and Access.pdf",
    badge: "Cisco Prep",
    description:
      "TCP/IP and OSI stack, IPv4/IPv6 subnetting, switch configuration, VLANs, trunking, and enterprise network topology.",
  },
  {
    id: 13,
    title: "Networking Foundations: Networking Basics",
    issuer: "Network Infrastructure",
    category: "Networking & Satellite",
    file: "CertificateOfCompletion_Networking Foundations Networking Basics.pdf",
    badge: "Core Foundations",
    description:
      "Core principles of local area networks, routers, gateways, DNS, DHCP, and packet transmission mechanisms.",
  },
  {
    id: 14,
    title: "Networking Foundations: Protocols & CLI Tools",
    issuer: "Network Infrastructure",
    category: "Networking & Satellite",
    file: "CertificateOfCompletion_Networking Foundations Protocols and CLI Tools.pdf",
    badge: "CLI & Protocols",
    description:
      "Command-line troubleshooting tools (ping, traceroute, netstat, Wireshark) and deep packet inspection of TCP/UDP traffic.",
  },

  // Cybersecurity & Compliance
  {
    id: 15,
    title: "Cisco Certified Support Technician (CCST) Cybersecurity (100-160)",
    issuer: "Cisco Certification Preparation",
    category: "Cybersecurity & Compliance",
    file: "CertificateOfCompletion_Cisco Certified Support Technician CCST Cybersecurity 100160 Cert Prep.pdf",
    badge: "Cisco CCST Prep",
    description:
      "Foundational security principles, threat classification, authentication controls, and securing network endpoints.",
    featured: true,
  },
  {
    id: 16,
    title: "Cybersecurity Foundations",
    issuer: "Information Security",
    category: "Cybersecurity & Compliance",
    file: "CertificateOfCompletion_Cybersecurity Foundations.pdf",
    badge: "Security Core",
    description:
      "Threat modeling, confidentiality-integrity-availability (CIA) triad, access control lists, and security policies.",
  },
  {
    id: 17,
    title: "The Cybersecurity Threat Landscape",
    issuer: "Threat Intelligence",
    category: "Cybersecurity & Compliance",
    file: "CertificateOfCompletion_The Cybersecurity Threat Landscape.pdf",
    badge: "Threat Analysis",
    description:
      "Understanding modern attack vectors: ransomware, social engineering, zero-day vulnerabilities, and defense-in-depth.",
  },
  {
    id: 18,
    title: "Cybersecurity at Work",
    issuer: "Enterprise Security",
    category: "Cybersecurity & Compliance",
    file: "CertificateOfCompletion_Cybersecurity at Work.pdf",
    badge: "Workplace Defense",
    description:
      "Operational security hygiene, phishing recognition, password management, and data handling protocols.",
  },
  {
    id: 19,
    title: "GDPR Compliance Essential Training",
    issuer: "Data Privacy & Governance",
    category: "Cybersecurity & Compliance",
    file: "CertificateOfCompletion_GDPR Compliance Essential Training.pdf",
    badge: "Data Privacy",
    description:
      "European data protection principles, personal data processing boundaries, user consent, and regulatory reporting.",
  },

  // Operations & Quality
  {
    id: 20,
    title: "ITIL® Foundation 4: First Look",
    issuer: "AXELOS / IT Service Management",
    category: "Operations & Quality",
    file: "CertificateOfCompletion_ITIL Foundation 4 First Look.pdf",
    badge: "ITSM Standard",
    description:
      "The Service Value System (SVS), 4 dimensions of service management, and guiding principles for IT support operations.",
    featured: true,
  },
  {
    id: 21,
    title: "Learning ITIL®: Practical Implementation",
    issuer: "AXELOS / ITSM",
    category: "Operations & Quality",
    file: "CertificateOfCompletion_Learning ITIL.pdf",
    badge: "Service Delivery",
    description:
      "Incident management, problem management, service request fulfillment, and change enablement in enterprise IT.",
  },
  {
    id: 22,
    title: "Lean Six Sigma Foundations",
    issuer: "Process Excellence Institute",
    category: "Operations & Quality",
    file: "CertificateOfCompletion_Lean Six Sigma Foundations.pdf",
    badge: "Process Optimization",
    description:
      "DMAIC methodology (Define, Measure, Analyze, Improve, Control) to eliminate root causes of defects and reduce operational waste.",
    featured: true,
  },
  {
    id: 23,
    title: "Problem Solving Across an Organization",
    issuer: "Operations & Strategy",
    category: "Operations & Quality",
    file: "CertificateOfCompletion_Problem Solving Across An Organization.pdf",
    badge: "Root-Cause Analysis",
    description:
      "Structured diagnostic tools, fishbone analysis, 5-whys, and cross-functional escalation pathways.",
  },

  // AI & Modern Tech
  {
    id: 24,
    title: "Become an AI Engineer",
    issuer: "Applied Artificial Intelligence",
    category: "AI & Modern Tech",
    file: "CertificateOfCompletion_Become an AI Engineer.pdf",
    badge: "Engineering Track",
    description:
      "Foundations of machine learning, neural networks, prompting techniques, and integrating AI into practical workflows.",
  },
  {
    id: 25,
    title: "Azure OpenAI: Generative AI Models & Practical Usage",
    issuer: "Microsoft Cloud & AI",
    category: "AI & Modern Tech",
    file: "CertificateOfCompletion_Azure OpenAI Generative AI Models and How to Use Them.pdf",
    badge: "Cloud AI",
    description:
      "Deploying GPT models on Microsoft Azure, security guardrails, fine-tuning concepts, and API integration.",
  },
  {
    id: 26,
    title: "ISO/IEC 42001:2023: AI Management System (AIMS) Standard",
    issuer: "ISO Standards & Governance",
    category: "AI & Modern Tech",
    file: "CertificateOfCompletion_ISOIEC 420012023 Understanding and Implementing the Artificial Intelligence Management System AIMS Standard.pdf",
    badge: "Global ISO Standard",
    description:
      "Understanding the first international standard for responsible, compliant, and structured artificial intelligence management.",
  },
  {
    id: 27,
    title: "Ethics in the Age of Generative AI",
    issuer: "Responsible AI Governance",
    category: "AI & Modern Tech",
    file: "CertificateOfCompletion_Ethics in the Age of Generative AI.pdf",
    badge: "AI Ethics",
    description:
      "Bias mitigation, transparency, intellectual property, and safety standards when applying generative AI tools.",
  },
  {
    id: 28,
    title: "A Practical Guide to Upskilling Your Organization on AI",
    issuer: "Organizational AI Adoption",
    category: "AI & Modern Tech",
    file: "CertificateOfCompletion_A Practical Guide to Upskilling Your Organization on AI.pdf",
    badge: "AI Upskilling",
    description:
      "Strategies for training teams, lowering friction with AI tools, and driving practical productivity gains.",
  },

  // Creative & Media
  {
    id: 29,
    title: "Essential Skills in Adobe Premiere Pro 2025 Professional Certificate",
    issuer: "Adobe / Creative Media",
    category: "Creative & Media",
    file: "CertificateOfCompletion_Essential Skills in Adobe Premiere Pro 2025 Professional Certificate.pdf",
    badge: "Professional Certificate",
    description:
      "Video editing, color grading, audio synchronization, and multimedia storytelling applied to educational and promotional videos.",
    featured: true,
  },
];

const categories = [
  "All",
  "Agile & Leadership",
  "Human Skills & EQ",
  "Networking & Satellite",
  "Cybersecurity & Compliance",
  "Operations & Quality",
  "AI & Modern Tech",
  "Creative & Media",
];

export function CertificatesPageContent() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCertificates = useMemo(() => {
    return certificatesData.filter((item) => {
      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory;
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.badge.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: certificatesData.length };
    certificatesData.forEach((c) => {
      counts[c.category] = (counts[c.category] || 0) + 1;
    });
    return counts;
  }, []);

  return (
    <div className="space-y-12">
      {/* Top Back Navigation Bar */}
      <div className="flex items-center justify-between border-b border-border/40 pb-6 animate-fade-in-up">
        <Link
          href="/introduction"
          className="group inline-flex items-center gap-2.5 rounded-xl border border-border/80 bg-card/60 glass px-4 py-2.5 font-mono text-xs sm:text-sm text-foreground transition-all duration-300 hover:border-primary/50 hover:bg-secondary/60 hover:text-primary active:scale-[0.98]"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          <span>← Back to About me / CV</span>
        </Link>

        <div className="font-mono text-xs text-muted-foreground hidden sm:block">
          {certificatesData.length} Verified Credentials
        </div>
      </div>

      {/* Hero Header */}
      <div className="space-y-4 animate-fade-in-up stagger-1">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3.5 py-1 text-xs font-mono text-primary">
          <Award className="h-3.5 w-3.5" />
          <span>Credentials & Continuous Learning</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
          Verified Certificates &{" "}
          <span className="bg-gradient-to-l from-primary/50 to-accent text-transparent bg-clip-text">
            Specializations
          </span>
        </h1>
        <p className="max-w-3xl text-base sm:text-lg text-muted-foreground leading-relaxed">
          Explore my complete portfolio of {certificatesData.length} verified certificates covering Agile Project Management, Negotiation, ITIL® 4, Computer Networks, Cybersecurity, AI Management, and Creative Media. Every certificate can be viewed directly in official PDF format.
        </p>
      </div>

      {/* Search & Category Filter Controls */}
      <div className="space-y-4 pt-2 animate-fade-in-up stagger-2">
        {/* Search Bar */}
        <div className="relative max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by certificate title, issuer, or keyword..."
            className="w-full rounded-xl border border-border/80 bg-card/60 glass pl-10 pr-4 py-2.5 font-mono text-xs sm:text-sm text-foreground placeholder:text-muted-foreground/60 transition-all focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-muted-foreground hover:text-foreground"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 pt-1">
          {categories.map((cat) => {
            const count = categoryCounts[cat] || 0;
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`inline-flex items-center gap-2 rounded-xl px-3.5 py-2 font-mono text-xs transition-all duration-300 ${
                  isSelected
                    ? "border border-primary bg-primary text-primary-foreground font-semibold shadow-md shadow-primary/20"
                    : "border border-border/60 bg-card/40 text-muted-foreground hover:border-primary/40 hover:text-foreground hover:bg-card/80"
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`rounded-full px-1.5 py-0.2 text-[10px] ${
                    isSelected
                      ? "bg-primary-foreground/20 text-primary-foreground"
                      : "bg-secondary text-muted-foreground"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Certificates Grid */}
      <div className="space-y-6 pt-2">
        <div className="flex items-center justify-between text-xs font-mono text-muted-foreground">
          <span>Showing {filteredCertificates.length} of {certificatesData.length} certificates</span>
          {selectedCategory !== "All" && (
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="text-primary hover:underline"
            >
              Reset filters
            </button>
          )}
        </div>

        {filteredCertificates.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-border p-12 text-center space-y-3">
            <p className="font-mono text-sm text-muted-foreground">
              No certificates found matching &ldquo;{searchQuery}&rdquo;.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="font-mono text-xs text-primary hover:underline"
            >
              Clear filters and show all
            </button>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCertificates.map((cert) => (
              <div
                key={cert.id}
                className="group relative flex flex-col justify-between rounded-2xl border border-border/60 bg-card/60 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-card/80 hover:shadow-xl"
              >
                <div className="space-y-4">
                  {/* Header: Category Badge & Verified Pill */}
                  <div className="flex items-start justify-between gap-2">
                    <span className="rounded-md border border-primary/30 bg-primary/10 px-2.5 py-1 font-mono text-[10px] font-medium text-primary">
                      {cert.badge}
                    </span>
                    <span className="inline-flex items-center gap-1 font-mono text-[11px] text-emerald-400">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      <span>Verified</span>
                    </span>
                  </div>

                  {/* Title & Issuer */}
                  <div>
                    <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                      {cert.title}
                    </h3>
                    <p className="font-mono text-xs text-muted-foreground mt-1">
                      {cert.issuer}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                {/* Direct Action Link to Open Official PDF */}
                <div className="pt-5 mt-4 border-t border-border/40">
                  <a
                    href={`/certificates/${encodeURIComponent(cert.file)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex w-full items-center justify-center gap-2 rounded-xl border border-primary/40 bg-primary/10 px-4 py-2.5 font-mono text-xs font-medium text-primary transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground active:scale-[0.98]"
                  >
                    <FileText className="h-3.5 w-3.5" />
                    <span>View Official PDF</span>
                    <ExternalLink className="h-3 w-3 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Back Button */}
      <div className="pt-12 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link
          href="/introduction"
          className="group inline-flex items-center gap-2.5 rounded-xl border border-primary bg-primary px-6 py-3.5 font-mono text-xs sm:text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          <span>← Back to About me / CV</span>
        </Link>

        <p className="font-mono text-xs text-muted-foreground text-center sm:text-right">
          All certificates are verified credentials with international validity.
        </p>
      </div>
    </div>
  );
}

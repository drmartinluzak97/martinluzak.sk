import { PortfolioLocale } from "../types";
import {
  Compass,
  Users,
  Layers,
  CheckCircle2,
  Shield,
  Video,
  Server,
  Heart,
  LucideIcon
} from "lucide-react";

export interface LocalizedCertification {
  title: string;
  issuer: string;
  badge: string;
  description: string;
  icon: LucideIcon;
  status: string;
  file: string;
}

export interface LocalizedSkillCategory {
  title: string;
  icon: LucideIcon;
  skills: string[];
}

export interface LocalizedExperience {
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

export interface LocalizedIntroData {
  badge: string;
  titlePrefix: string;
  titleHighlight: string;
  description: string;
  connectLinkedIn: string;
  emailMe: string;
  myProjects: string;
  stats: { label: string; value: string; href?: string }[];
  philosophy: {
    badge: string;
    quote: string;
    text: string;
  };
  experienceHeader: {
    badge: string;
    title: string;
    subtitle: string;
  };
  experiences: LocalizedExperience[];
  certificationsHeader: {
    badge: string;
    title: string;
    subtitle: string;
    viewCert: string;
    verified: string;
  };
  certifications: LocalizedCertification[];
  skillsHeader: {
    badge: string;
    title: string;
    subtitle: string;
  };
  skillCategories: LocalizedSkillCategory[];
  cta: {
    title: string;
    subtitle: string;
    connectBtn: string;
    emailBtn: string;
  };
}

export const INTRO_DATA: Record<PortfolioLocale, LocalizedIntroData> = {
  en: {
    badge: "About Me & Interactive CV",
    titlePrefix: "Where Technical Logic Meets",
    titleHighlight: "Human Empathy",
    description: "Since 2017, I have built a career defined by technical precision and human connection. From troubleshooting mission-critical networks and banking systems to mentoring individuals in everyday digital literacy, I ensure technology works reliably for the people who depend on it.",
    connectLinkedIn: "Connect on LinkedIn",
    emailMe: "hello@martinluzak.sk",
    myProjects: "My side projects →",
    stats: [
      { label: "Experience in IT & Mentoring", value: "7+ Years", href: "#experience" },
      { label: "Systems & Network Focus", value: "Enterprise & Maritime", href: "#experience" },
      { label: "Core Competency", value: "Logic + Empathy", href: "#philosophy" },
      { label: "Verified Credentials", value: "5+ Global Certifications", href: "/certificates" },
    ],
    philosophy: {
      badge: "The Core Philosophy",
      quote: "“I don't just manage systems; I create meaningful impact.”",
      text: "Technical problems rarely exist in isolation—they almost always impact real human workflows, stress levels, and operational rhythm. Combining technical rigor (databases, networking, health monitoring) with high emotional intelligence allows me to bridge the gap between complex machines and the people who rely on them.",
    },
    experienceHeader: {
      badge: "Career Journey",
      title: "Work Experience",
      subtitle: "Proven track record across mission-critical maritime IT, high-availability banking integrations, multi-country logistics monitoring, and community digital mentoring.",
    },
    experiences: [
      {
        id: 0,
        title: "Nonprofit Assistant — Humans & IT",
        company: "Zväz diabetikov Slovenska - DIATYRNAVIA",
        period: "Feb 2019 — Aug 2026",
        type: "Long-term Community & IT Support",
        description: "Direct executive and technical assistant to the chairwoman. Providing continuous IT education and administrative support to leadership, co-organizing community events with heavy senior participation, managing M365 systems, and producing promotional video materials.",
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
        description: "Provided critical Tier 2 network and communications technical support for global maritime customers (vessel captains, onboard field engineers) via ticketing and live phone assistance under mission-critical SLA.",
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
        description: "Monitored high-volume system health and applications for DPD courier infrastructure across multiple European countries (NL, CH, BE, SK). Conducted systematic API validation and regression testing.",
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
        description: "Executed end-to-end implementation of banking products and application parameter changes. Maintained zero-downtime reliability according to strict financial and security installation criteria.",
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
    ],
    certificationsHeader: {
      badge: "Continuous Growth",
      title: "Certifications & Credentials",
      subtitle: "A firm believer in perpetual skill expansion. My credentials validate international standards in Agile execution, strategic negotiation, and IT service management.",
      viewCert: "View Certificate (PDF)",
      verified: "Verified",
    },
    certifications: [
      {
        title: "Atlassian Agile Project Management",
        issuer: "Atlassian / LinkedIn Learning",
        badge: "Professional Certificate",
        description: "Validated competencies in modern Agile methodologies, sprint planning, Jira project architecture, and cross-functional team delivery.",
        icon: Compass,
        status: "Verified",
        file: "CertificateOfCompletion_Atlassian Agile Project Management Professional Certificate.pdf",
      },
      {
        title: "Negotiation Professional Certificate",
        issuer: "American Negotiation Institute (ANI)",
        badge: "Strategic Communication",
        description: "Advanced mastery in de-escalation, conflict resolution, active listening, and achieving win-win outcomes in high-stakes environments.",
        icon: Users,
        status: "Verified",
        file: "CertificateOfCompletion_Negotiation Professional Certificate by American Negotiation Institute.pdf",
      },
      {
        title: "ITIL® Foundation 4",
        issuer: "AXELOS / IT Service Management",
        badge: "Service Management",
        description: "End-to-end framework for modern IT service management (ITSM), continuous improvement, incident resolution, and value co-creation.",
        icon: Layers,
        status: "Verified",
        file: "CertificateOfCompletion_ITIL Foundation 4 First Look.pdf",
      },
      {
        title: "Lean Six Sigma Foundations",
        issuer: "Process Excellence Institute",
        badge: "Operational Efficiency",
        description: "Techniques for identifying process waste, streamlining digital workflows, and enforcing quantitative quality standards.",
        icon: CheckCircle2,
        status: "Verified",
        file: "CertificateOfCompletion_Lean Six Sigma Foundations.pdf",
      },
      {
        title: "Cisco Certified Support Technician (CCST) Cybersecurity",
        issuer: "Cisco Certification Preparation",
        badge: "Cybersecurity",
        description: "Merging hands-on network administration with enterprise security fundamentals, vulnerability analysis, and digital defense.",
        icon: Shield,
        status: "Verified",
        file: "CertificateOfCompletion_Cisco Certified Support Technician CCST Cybersecurity 100160 Cert Prep.pdf",
      },
      {
        title: "Essential Skills in Adobe Premiere Pro 2025",
        issuer: "Adobe / Creative Media",
        badge: "Professional Certificate",
        description: "Video editing, color grading, audio synchronization, and multimedia storytelling applied to educational and promotional content.",
        icon: Video,
        status: "Verified",
        file: "CertificateOfCompletion_Essential Skills in Adobe Premiere Pro 2025 Professional Certificate.pdf",
      },
    ],
    skillsHeader: {
      badge: "Skill Matrix",
      title: "Technical & Human Competencies",
      subtitle: "A balanced synthesis of deep technical proficiency and people-centric leadership.",
    },
    skillCategories: [
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
    ],
    cta: {
      title: "Interested in working together?",
      subtitle: "Whether you need someone to solve complex IT challenges, support your team, or bridge communication between tech and people, I'd love to connect.",
      connectBtn: "Let's Connect on LinkedIn",
      emailBtn: "Send Me an Email",
    },
  },
  sk: {
    badge: "O mne & Interaktívny životopis",
    titlePrefix: "Kde sa technická logika stretáva s",
    titleHighlight: "ľudskou empatiou",
    description: "Od roku 2017 budujem kariéru postavenú na technickej precíznosti a ľudskom prístupe. Od riešenia kritických sieťových a bankových systémov až po mentorovanie ľudí v digitálnych zručnostiach zabezpečujem, aby technológie slúžili ľuďom spoľahlivo a bez stresu.",
    connectLinkedIn: "Prepojiť sa na LinkedIn",
    emailMe: "hello@martinluzak.sk",
    myProjects: "Moje vedľajšie projekty →",
    stats: [
      { label: "Skúsenosti v IT a mentoringu", value: "7+ rokov", href: "#experience" },
      { label: "Zameranie na siete a systémy", value: "Enterprise & Maritime", href: "#experience" },
      { label: "Kľúčová kompetencia", value: "Logika + Empatia", href: "#philosophy" },
      { label: "Overené certifikáty", value: "5+ globálnych certifikátov", href: "/certificates" },
    ],
    philosophy: {
      badge: "Hlavná filozofia",
      quote: "„Nespravujem len systémy; vytváram zmysluplný a reálny dopad.“",
      text: "Technické problémy málokedy existujú izolovane – takmer vždy priamo ovplyvňujú ľudí, ich pracovný tok, stres a tímovú dynamiku. Spojenie technickej precíznosti (databázy, siete, monitoring) s vysokou emocionálnou inteligenciou mi umožňuje preklenúť priepasť medzi zložitými systémami a ľuďmi, ktorí sa na ne spoliehajú.",
    },
    experienceHeader: {
      badge: "Kariérna cesta",
      title: "Pracovné skúsenosti",
      subtitle: "Overené výsledky v kritickej námornej IT podpore, bankových integráciách s vysokou dostupnosťou, medzinárodnom monitoringu logistiky a komunitnom digitálnom mentoringu.",
    },
    experiences: [
      {
        id: 0,
        title: "Asistent občianskeho združenia — Ľudia & IT",
        company: "Zväz diabetikov Slovenska - DIATYRNAVIA",
        period: "Feb 2019 — Aug 2026",
        type: "Dlhodobá podpora občianskeho združenia & IT",
        description: "Priamy výkonný a technický asistent predsedníčky. Poskytovanie nepretržitého IT vzdelávania a administratívnej podpory vedeniu, spoluorganizácia komunitných podujatí s vysokou účasťou seniorov, správa systémov M365 a tvorba propagačných video materiálov.",
        highlights: [
          "Poskytovanie komplexnej priamej podpory a kontinuálneho digitálneho rozvoja predsedníčke v každodenných procesoch.",
          "Spoluorganizácia veľkých komunitných stretnutí a zdravotno-vzdelávacích podujatí primárne pre seniorov.",
          "Správa Microsoft 365, IT logistika podujatí a video produkcia.",
        ],
        milestone: {
          badge: "🏆 Ocenenie Senior Friendly",
          text: "Prispel k získaniu celonárodného ocenenia Senior Friendly 2023 prostredníctvom obetavej asistencie vedeniu a organizácie komunitných aktivít na podporu seniorov.",
          link: "https://www.seniorfriendly.sk/news/showNew/ocenenia-sf-2023",
          linkText: "Ocenenie Senior Friendly 2023",
          lang: "🇸🇰 SVK",
        },
        tags: ["Podpora vedenia", "Seniorská komunita", "M365", "Windows Admin", "Video produkcia"],
      },
      {
        id: 1,
        title: "Technický špecialista sieťovej podpory",
        company: "Marlink s.r.o.",
        period: "Jún 2025 — Dec 2025",
        type: "Námorné satelitné & podnikové siete",
        description: "Poskytovanie kritickej technickej podpory Tier 2 pre globálnych námorných zákazníkov (kapitáni plavidiel, palubní technici) cez ticketing a telefonickú linku v režime prísnych SLA.",
        highlights: [
          "Riešenie komplexných incidentov v námorných satelitných sieťach, VSAT systémoch a palubných routeroch.",
          "Monitoring živej sieťovej infraštruktúry a udržiavanie vysokej bezpečnosti komunikácie.",
          "Rozvážne a presné riešenie technických problémov v náročných námorných prevádzkových podmienkach.",
        ],
        milestone: {
          badge: "🛰️ Hybridná VSAT & Starlink podpora",
          text: "Dedikovaná Tier 2 technická podpora pre globálne námorné flotily pri riešení incidentov na hybridných riešeniach spájajúcich tradičný VSAT a moderný satelitný systém Starlink.",
          link: "https://marlink.com/resources/knowledge-hub/starlink-and-marlink/",
          linkText: "Marlink Starlink Integrácia",
          lang: "🌐 EN",
        },
        tags: ["Technická podpora", "Námorný VSAT", "Starlink riešenia", "Zabbix", "SQL telemetria", "Sieťová bezpečnosť"],
      },
      {
        id: 2,
        title: "Špecialista monitoringu systémov & tester",
        company: "ForesServices, s. r. o.",
        period: "Sep 2024 — Apr 2025",
        type: "Logistická infraštruktúra & API testovanie",
        description: "Monitoring systémového zdravia a aplikácií kuriérskej infraštruktúry DPD naprieč viacerými európskymi krajinami (NL, CH, BE, SK). Systematické API testovanie a overovanie regresie.",
        highlights: [
          "Monitoring zdravia serverov, dostupnosti služieb a výstrah cez Zabbix.",
          "Vykonávanie testovania API koncových bodov a overovanie dátových štruktúr cez Insomnia.",
          "Zabezpečenie maximálnej dostupnosti a rýchla eskalácia incidentov v logistickom reťazci.",
        ],
        milestone: {
          badge: "📦 Monitoring logistiky vo viacerých krajinách",
          text: "Proaktívny monitoring cez Zabbix (v prevádzke 07:00 – 23:00, 7 dní v týždni) a regresné API testovanie pre infraštruktúru DPD v Holandsku, Švajčiarsku, Belgicku a na Slovensku.",
          link: "https://www.fores.group/case-studies-logistics-dpd/",
          linkText: "Prípadová štúdia Fores & DPD",
          lang: "🌐 EN",
        },
        tags: ["Zabbix monitoring", "API testovanie", "Insomnia", "DPD logistika", "Zmenová prevádzka (7-23)", "Systémové zdravie"],
      },
      {
        id: 3,
        title: "Špecialista bankových implementácií",
        company: "Regional Card Processing Centre, s. r. o.",
        period: "Mar 2021 — Mar 2023",
        type: "Finančné technológie & vysoká dostupnosť",
        description: "Kompletná implementácia bankových produktov a parametrizácia aplikácií. Udržiavanie nepretržitej spoľahlivosti podľa prísnych bezpečnostných a finančných štandardov.",
        highlights: [
          "Konfigurácia citlivých technických parametrov pre bankové terminály a autorizačné systémy.",
          "Spolupráca s compliance tímom a bankovými inžiniermi na zaistení bezchybnej prevádzky.",
          "Správa a úprava konfigurácií v databázach Oracle a MS SQL Server.",
        ],
        milestone: {
          badge: "🏦 Vybrané míľniky bankových projektov",
          text: "Technické parametrizácie na kľúčových bankových projektoch vrátane prechodu meny v Chorvátsku (Kuna → Euro) a kontinuity transakcií pri akvizícii Raiffeisen Bank skupinou KBC Group.",
          link: "https://newsroom.kbc.com/kbc-completes-acquisition-of-raiffeisen-bank-internationals-bulgarian-operations",
          linkText: "Akvizícia KBC Raiffeisen",
          lang: "🌐 Global",
        },
        tags: ["Bankové systémy", "Prechod na Euro", "Oracle SQL", "MS SQL Server", "Vysoká dostupnosť", "Prísny compliance"],
      },
    ],
    certificationsHeader: {
      badge: "Neustály rozvoj",
      title: "Certifikáty a kvalifikácia",
      subtitle: "Pevne verím v celoživotné vzdelávanie. Moje certifikácie potvrdzujú medzinárodné štandardy v Agile riadení, strategickom vyjednávaní a správe IT služieb.",
      viewCert: "Zobraziť certifikát (PDF)",
      verified: "Overené",
    },
    certifications: [
      {
        title: "Atlassian Agile Project Management",
        issuer: "Atlassian / LinkedIn Learning",
        badge: "Profesijný certifikát",
        description: "Overené kompetencie v moderných agilných metodikách, plánovaní šprintov, architektúre projektov Jira a tímovej spolupráci.",
        icon: Compass,
        status: "Overené",
        file: "CertificateOfCompletion_Atlassian Agile Project Management Professional Certificate.pdf",
      },
      {
        title: "Negotiation Professional Certificate",
        issuer: "American Negotiation Institute (ANI)",
        badge: "Strategická komunikácia",
        description: "Pokročilé zvládanie deeskalácie, riešenia konfliktov, aktívneho počúvania a dosahovania win-win výsledkov v náročných situáciách.",
        icon: Users,
        status: "Overené",
        file: "CertificateOfCompletion_Negotiation Professional Certificate by American Negotiation Institute.pdf",
      },
      {
        title: "ITIL® Foundation 4",
        issuer: "AXELOS / IT Service Management",
        badge: "Manažment služieb",
        description: "Ucelený rámec pre moderný manažment IT služieb (ITSM), neustále zlepšovanie, riešenie incidentov a spolutvorbu hodnoty.",
        icon: Layers,
        status: "Overené",
        file: "CertificateOfCompletion_ITIL Foundation 4 First Look.pdf",
      },
      {
        title: "Lean Six Sigma Foundations",
        issuer: "Process Excellence Institute",
        badge: "Procesná efektivita",
        description: "Metodiky identifikácie plytvania, zefektívňovania digitálnych procesov a dodržiavania kvantitatívnych štandardov kvality.",
        icon: CheckCircle2,
        status: "Overené",
        file: "CertificateOfCompletion_Lean Six Sigma Foundations.pdf",
      },
      {
        title: "Cisco Certified Support Technician (CCST) Cybersecurity",
        issuer: "Cisco Certification Preparation",
        badge: "Kybernetická bezpečnosť",
        description: "Prepojenie praktickej sieťovej administrácie so základmi podnikovej bezpečnosti, analýzou zraniteľností a digitálnou obranou.",
        icon: Shield,
        status: "Overené",
        file: "CertificateOfCompletion_Cisco Certified Support Technician CCST Cybersecurity 100160 Cert Prep.pdf",
      },
      {
        title: "Essential Skills in Adobe Premiere Pro 2025",
        issuer: "Adobe / Creative Media",
        badge: "Profesijný certifikát",
        description: "Strih videa, farebné korekcie, synchronizácia zvuku a multimediálny storytelling pre vzdelávací a propagačný obsah.",
        icon: Video,
        status: "Overené",
        file: "CertificateOfCompletion_Essential Skills in Adobe Premiere Pro 2025 Professional Certificate.pdf",
      },
    ],
    skillsHeader: {
      badge: "Matica zručností",
      title: "Technické a ľudské kompetencie",
      subtitle: "Vyvážená syntéza hlbokej technickej odbornosti a empatického prístupu k ľuďom.",
    },
    skillCategories: [
      {
        title: "Technológie a systémy",
        icon: Server,
        skills: [
          "Počítačové siete a smerovanie",
          "Monitoring systémov (Zabbix)",
          "Databázy (Oracle, MS SQL, SQL)",
          "Testovanie API (Insomnia)",
          "Testovanie softvéru a hardvéru",
          "Systémy Windows a Linux",
          "Administrácia Microsoft 365",
        ],
      },
      {
        title: "Metodiky a prevádzka",
        icon: Layers,
        skills: [
          "ITIL® 4 Manažment služieb",
          "Agilné a Scrum praktiky",
          "Atlassian Jira & Confluence",
          "Optimalizácia procesov Lean Six Sigma",
          "Riešenie incidentov a problémov",
          "Zabezpečenie kvality & QA testovanie",
        ],
      },
      {
        title: "Ľudský prístup a vedenie",
        icon: Heart,
        skills: [
          "Zameranie na klienta a empatia",
          "Vysoká emočná inteligencia (EQ)",
          "Technický mentoring a školenia",
          "Strategické vyjednávanie (ANI)",
          "Deeskalácia krízových situácií",
          "Jasná a zrozumiteľná komunikácia",
        ],
      },
    ],
    cta: {
      title: "Máte záujem o spoluprácu?",
      subtitle: "Či už hľadáte niekoho na riešenie náročných IT výziev, posilu pre váš tím alebo človeka, ktorý prepojí technológie s ľuďmi, rád sa s vami spojím.",
      connectBtn: "Spojme sa na LinkedIn",
      emailBtn: "Napíšte mi email",
    },
  },
  de: {
    badge: "Über mich & Interaktiver Lebenslauf",
    titlePrefix: "Wo technische Logik auf",
    titleHighlight: "menschliche Empathie trifft",
    description: "Seit 2017 verbinde ich technische Präzision mit menschlichem Einfühlungsvermögen. Von der Fehlerbehebung in kritischen Netzwerken und Bankensystemen bis hin zur Schulung digitaler Kompetenzen sorge ich dafür, dass Technologie den Menschen zuverlässig dient.",
    connectLinkedIn: "Auf LinkedIn vernetzen",
    emailMe: "hello@martinluzak.sk",
    myProjects: "Meine Projekte ansehen →",
    stats: [
      { label: "Erfahrung in IT & Mentoring", value: "7+ Jahre", href: "#experience" },
      { label: "Netzwerk- & Systemfokus", value: "Enterprise & Maritim", href: "#experience" },
      { label: "Kernkompetenz", value: "Logik + Empathie", href: "#philosophy" },
      { label: "Zertifikate", value: "5+ globale Zertifikate", href: "/certificates" },
    ],
    philosophy: {
      badge: "Kernphilosophie",
      quote: "„Ich verwalte nicht nur Systeme; ich schaffe echte und nachhaltige Wirkung.“",
      text: "Technische Probleme treten selten isoliert auf – sie betreffen fast immer Menschen, Arbeitsabläufe und Teamstimmung. Die Verbindung aus technischem Tiefgang mit hoher emotionaler Intelligenz schlägt die Brücke zwischen komplexen Systemen und den Menschen, die sie nutzen.",
    },
    experienceHeader: {
      badge: "Beruflicher Werdegang",
      title: "Berufserfahrung",
      subtitle: "Erfahrung in maritimer IT, Hochverfügbarkeits-Bankensystemen, europaweitem Logistik-Monitoring und IT-Mentoring.",
    },
    experiences: [
      {
        id: 0,
        title: "Assistent im Non-Profit-Bereich — Mensch & IT",
        company: "Zväz diabetikov Slovenska - DIATYRNAVIA",
        period: "Feb 2019 — Aug 2026",
        type: "Langfristige IT- & Community-Unterstützung",
        description: "Direkter Assistent der Vorsitzenden. Bereitstellung kontinuierlicher IT-Schulungen, M365-Administration, Event-IT und Videoproduktion.",
        highlights: [
          "Umfassende direkte Unterstützung und digitale Weiterbildung der Geschäftsführung.",
          "Mitorganisation von Gemeinschafts- und Gesundheitsveranstaltungen für Senioren.",
          "Microsoft 365 Administration und Videoproduktion.",
        ],
        milestone: {
          badge: "🏆 Senior Friendly Auszeichnung",
          text: "Beitrag zum Gewinn der nationalen Auszeichnung Senior Friendly 2023 durch engagierte Assistenz und Organisation von Community-Events.",
          link: "https://www.seniorfriendly.sk/news/showNew/ocenenia-sf-2023",
          linkText: "Senior Friendly 2023 Auszeichnung",
          lang: "🇸🇰 SVK",
        },
        tags: ["Führungsunterstützung", "Senioren-Community", "M365", "Windows Admin", "Videoproduktion"],
      },
      {
        id: 1,
        title: "Technical Support Engineer für Netzwerke",
        company: "Marlink s.r.o.",
        period: "Jun 2025 — Dez 2025",
        type: "Maritime Satelliten- & Unternehmensnetzwerke",
        description: "Kritischer Tier-2-Support für weltweite Schiffskunden (Kapitäne, Bordingenieure) unter anspruchsvollen SLAs.",
        highlights: [
          "Fehlerbehebung in maritimen Satellitennetzwerken, VSAT-Systemen und Routern.",
          "Überwachung von Netzwerkinfrastruktur und Kommunikationssicherheit.",
          "Präzise Lösungen unter hohem operativem Druck.",
        ],
        milestone: {
          badge: "🛰️ Hybrid VSAT & Starlink Support",
          text: "Tier-2-Support für weltweite Flotten mit hybrider Konnektivität aus VSAT und Starlink-Satellitensystemen.",
          link: "https://marlink.com/resources/knowledge-hub/starlink-and-marlink/",
          linkText: "Marlink Starlink Integration",
          lang: "🌐 EN",
        },
        tags: ["Technischer Support", "Maritimes VSAT", "Starlink", "Zabbix", "Netzwerksicherheit"],
      },
      {
        id: 2,
        title: "System Health Engineer & Tester",
        company: "ForesServices, s. r. o.",
        period: "Sep 2024 — Apr 2025",
        type: "Logistikinfrastruktur & API-Testing",
        description: "Monitoring der DPD-Kurierinfrastruktur in mehreren europäischen Ländern (NL, CH, BE, SK) und systematische API-Tests.",
        highlights: [
          "Server- und Dienstüberwachung via Zabbix.",
          "API-Testing und Datenvalidierung mit Insomnia.",
          "Gewährleistung maximaler Betriebszeit und zügige Eskalation.",
        ],
        milestone: {
          badge: "📦 Länderübergreifendes Logistik-Monitoring",
          text: "Zabbix-Monitoring (07:00 – 23:00, 7 Tage/Woche) und API-Regressionstests für DPD in den Niederlanden, der Schweiz, Belgien und der Slowakei.",
          link: "https://www.fores.group/case-studies-logistics-dpd/",
          linkText: "Fores & DPD Fallstudie",
          lang: "🌐 EN",
        },
        tags: ["Zabbix Monitoring", "API Testing", "Insomnia", "DPD Logistik", "Schichtbetrieb"],
      },
      {
        id: 3,
        title: "Spezialist für Bankenimplementierung",
        company: "Regional Card Processing Centre, s. r. o.",
        period: "Mär 2021 — Mär 2023",
        type: "Finanztechnologie & Hochverfügbarkeit",
        description: "Implementierung von Bankprodukten und Parametrierung unter strikten Sicherheits- und Finanzvorgaben.",
        highlights: [
          "Konfiguration sensibler technischer Parameter für Terminals und Kartensysteme.",
          "Zusammenarbeit mit Compliance und Bankeningenieuren.",
          "Verwaltung von Oracle SQL- und MS SQL Server-Datenbanken.",
        ],
        milestone: {
          badge: "🏦 Meilensteine im Bankensektor",
          text: "Technische Parametrierungen bei der Euro-Umstellung in Kroatien (Kuna → Euro) und bei der KBC-Übernahme der Raiffeisen Bank.",
          link: "https://newsroom.kbc.com/kbc-completes-acquisition-of-raiffeisen-bank-internationals-bulgarian-operations",
          linkText: "KBC Raiffeisen Übernahme",
          lang: "🌐 Global",
        },
        tags: ["Bankensysteme", "Euro-Umstellung", "Oracle SQL", "MS SQL Server", "Hochverfügbarkeit"],
      },
    ],
    certificationsHeader: {
      badge: "Kontinuierliche Weiterbildung",
      title: "Zertifikate & Qualifikationen",
      subtitle: "Internationale Standards in Agile Project Management, strategischer Verhandlung und IT-Servicemanagement.",
      viewCert: "Zertifikat ansehen (PDF)",
      verified: "Verifiziert",
    },
    certifications: [
      {
        title: "Atlassian Agile Project Management",
        issuer: "Atlassian / LinkedIn Learning",
        badge: "Berufszertifikat",
        description: "Kompetenzen in agilen Methoden, Sprint-Planung, Jira-Architektur und Teamzusammenarbeit.",
        icon: Compass,
        status: "Verifiziert",
        file: "CertificateOfCompletion_Atlassian Agile Project Management Professional Certificate.pdf",
      },
      {
        title: "Negotiation Professional Certificate",
        issuer: "American Negotiation Institute (ANI)",
        badge: "Strategische Kommunikation",
        description: "Konfliktlösung, aktives Zuhören und Win-Win-Verhandlungsergebnisse in anspruchsvollen Situationen.",
        icon: Users,
        status: "Verifiziert",
        file: "CertificateOfCompletion_Negotiation Professional Certificate by American Negotiation Institute.pdf",
      },
      {
        title: "ITIL® Foundation 4",
        issuer: "AXELOS / IT Service Management",
        badge: "Service Management",
        description: "Ganzheitliches Framework für modernes IT-Servicemanagement (ITSM) und Wertschöpfung.",
        icon: Layers,
        status: "Verifiziert",
        file: "CertificateOfCompletion_ITIL Foundation 4 First Look.pdf",
      },
      {
        title: "Lean Six Sigma Foundations",
        issuer: "Process Excellence Institute",
        badge: "Prozessoptimierung",
        description: "Methoden zur Vermeidung von Verschwendung und Optimierung digitaler Workflows.",
        icon: CheckCircle2,
        status: "Verifiziert",
        file: "CertificateOfCompletion_Lean Six Sigma Foundations.pdf",
      },
      {
        title: "Cisco Certified Support Technician (CCST) Cybersecurity",
        issuer: "Cisco Certification Preparation",
        badge: "Cybersicherheit",
        description: "Netzwerkadministration kombiniert mit Sicherheitsgrundlagen und digitaler Verteidigung.",
        icon: Shield,
        status: "Verifiziert",
        file: "CertificateOfCompletion_Cisco Certified Support Technician CCST Cybersecurity 100160 Cert Prep.pdf",
      },
      {
        title: "Essential Skills in Adobe Premiere Pro 2025",
        issuer: "Adobe / Creative Media",
        badge: "Berufszertifikat",
        description: "Videoschnitt, Farbkorrektur, Audiosynchronisation und multimediales Storytelling.",
        icon: Video,
        status: "Verifiziert",
        file: "CertificateOfCompletion_Essential Skills in Adobe Premiere Pro 2025 Professional Certificate.pdf",
      },
    ],
    skillsHeader: {
      badge: "Kompetenzmatrix",
      title: "Technische & menschliche Fähigkeiten",
      subtitle: "Eine ausgewogene Kombination aus technischem Know-how und einfühlsamer Kommunikation.",
    },
    skillCategories: [
      {
        title: "Technik & Systeme",
        icon: Server,
        skills: [
          "Computernetzwerke & Routing",
          "Systemmonitoring (Zabbix)",
          "Datenbanken (Oracle, MS SQL, SQL)",
          "API-Testing (Insomnia)",
          "Software- & Hardware-Testing",
          "Windows- & Linux-Systeme",
          "Microsoft 365 Administration",
        ],
      },
      {
        title: "Methoden & Prozesse",
        icon: Layers,
        skills: [
          "ITIL® 4 Service Management",
          "Agile & Scrum Methoden",
          "Atlassian Jira & Confluence",
          "Lean Six Sigma Prozessoptimierung",
          "Incident- & Problem-Management",
          "Qualitätssicherung & QA-Testing",
        ],
      },
      {
        title: "Mensch & Führung",
        icon: Heart,
        skills: [
          "Kundenorientierung & Empathie",
          "Hohe emotionale Intelligenz (EQ)",
          "IT-Mentoring & Schulungen",
          "Strategische Verhandlung (ANI)",
          "Krisendeeskalation",
          "Klare und verständliche Kommunikation",
        ],
      },
    ],
    cta: {
      title: "Interesse an einer Zusammenarbeit?",
      subtitle: "Ob Sie Unterstützung bei IT-Herausforderungen suchen oder jemanden brauchen, der Technik und Menschen verbindet – lassen Sie uns sprechen.",
      connectBtn: "Auf LinkedIn vernetzen",
      emailBtn: "E-Mail senden",
    },
  },
  ja: {
    badge: "自己紹介 & インタラクティブCV",
    titlePrefix: "技術的論理と",
    titleHighlight: "人間的共感が交差する場所",
    description: "2017年以来、技術的正確さと人間味あふれる繋がりを軸にキャリアを築いてきました。基幹ネットワークや金融システムの障害対応から、日常的なITスキル研修まで、テクノロジーが人々の力になるよう支えています。",
    connectLinkedIn: "LinkedInでつながる",
    emailMe: "hello@martinluzak.sk",
    myProjects: "サイドプロジェクトを見る →",
    stats: [
      { label: "IT & メンタリング経験", value: "7年以上", href: "#experience" },
      { label: "システム & ネットワーク", value: "エンタープライズ & 海事", href: "#experience" },
      { label: "中核的強み", value: "論理 + 共感力", href: "#philosophy" },
      { label: "認定資格", value: "5以上の国際資格", href: "/certificates" },
    ],
    philosophy: {
      badge: "中核となる理念",
      quote: "「単にシステムを管理するだけでなく、意味のある成果を創出します。」",
      text: "技術的な課題は単体で存在するのではなく、常に人間の業務やストレス、チームの調和に影響を与えます。技術的な厳密さと高いEQ（感情知能）を融合させることで、複雑なマシンと人々の架け橋となります。",
    },
    experienceHeader: {
      badge: "キャリアの歩み",
      title: "職務経歴",
      subtitle: "ミッションクリティカルな海事IT、高可用性金融システム、欧州複数国の物流監視、コミュニティIT支援における確かな実績。",
    },
    experiences: [
      {
        id: 0,
        title: "NPOアシスタント — 人とITのサポート",
        company: "Zväz diabetikov Slovenska - DIATYRNAVIA",
        period: "2019年2月 — 2026年8月",
        type: "長期コミュニティ & ITサポート",
        description: "代表理事の専任エグゼクティブ・技術アシスタント。M365管理、シニア向けITリテラシー研修、イベント運営、プロモーション動画制作を担当。",
        highlights: [
          "経営層の日常業務における包括的IT支援とスキル向上研修を実施。",
          "シニア向けの大規模コミュニティイベントおよび健康啓発活動を共同運営。",
          "Microsoft 365の運用管理と動画制作を主導。",
        ],
        milestone: {
          badge: "🏆 シニアフレンドリー賞",
          text: "献身的な支援活動を通じて、スロバキア全国表彰「Senior Friendly 2023」の受賞に大きく貢献。",
          link: "https://www.seniorfriendly.sk/news/showNew/ocenenia-sf-2023",
          linkText: "Senior Friendly 2023 受賞",
          lang: "🇸🇰 SVK",
        },
        tags: ["経営支援", "シニア支援", "M365", "Windows Admin", "動画制作"],
      },
      {
        id: 1,
        title: "テクニカルネットワークサポートエンジニア",
        company: "Marlink s.r.o.",
        period: "2025年6月 — 2025年12月",
        type: "海事衛星通信 & エンタープライズ網",
        description: "世界中の船舶（船長、船上技術者）を対象に、厳格なSLAのもとでTier 2ネットワークおよび衛星通信サポートを提供。",
        highlights: [
          "船舶衛星ネットワーク、VSAT端末、船内ルーターのトラブルシューティング。",
          "ネットワーク監視と高水準の通信セキュリティを維持。",
          "プレッシャーの高い現場で冷静かつ迅速に技術課題を解決。",
        ],
        milestone: {
          badge: "🛰️ VSAT & Starlink ハイブリッド対応",
          text: "従来のVSATと最新のStarlink衛星を組み合わせたハイブリッド環境でのTier 2サポートを担当。",
          link: "https://marlink.com/resources/knowledge-hub/starlink-and-marlink/",
          linkText: "Marlink Starlink 統合",
          lang: "🌐 EN",
        },
        tags: ["技術サポート", "海事VSAT", "Starlink", "Zabbix", "ネットワークセキュリティ"],
      },
      {
        id: 3,
        title: "銀行システム導入スペシャリスト",
        company: "Regional Card Processing Centre, s. r. o.",
        period: "2021年3月 — 2023年3月",
        type: "金融テクノロジー & 高可用性",
        description: "決済端末および銀行コアシステムのパラメータ設定と導入。ゼロダウンタイムを遵守した厳格な運用。",
        highlights: [
          "機密性の高い決済端末パラメータの設定と保守。",
          "コンプライアンス基準および銀行エンジニアとの協業。",
          "Oracle SQLおよびMS SQL Serverデータベースの設定管理。",
        ],
        milestone: {
          badge: "🏦 金融プロジェクト実績",
          text: "クロアチアのユーロ導入（クーナ→ユーロ）やKBCグループによるRaiffeisen Bank買収時のトランザクション継続を完遂。",
          link: "https://newsroom.kbc.com/kbc-completes-acquisition-of-raiffeisen-bank-internationals-bulgarian-operations",
          linkText: "KBC Raiffeisen 買収プロジェクト",
          lang: "🌐 Global",
        },
        tags: ["銀行システム", "ユーロ移行", "Oracle SQL", "MS SQL Server", "高可用性"],
      },
    ],
    certificationsHeader: {
      badge: "継続的学習",
      title: "認定資格 & 資格証",
      subtitle: "アジャイル実行、戦略的交渉、ITサービス管理における国際規格の認定を保有しています。",
      viewCert: "修了証を見る (PDF)",
      verified: "認証済",
    },
    certifications: [
      {
        title: "Atlassian Agile Project Management",
        issuer: "Atlassian / LinkedIn Learning",
        badge: "プロフェッショナル認定",
        description: "アジャイル開発手法、スプリント計画、Jiraプロジェクト構築、チーム連携の認定。",
        icon: Compass,
        status: "認証済",
        file: "CertificateOfCompletion_Atlassian Agile Project Management Professional Certificate.pdf",
      },
      {
        title: "Negotiation Professional Certificate",
        issuer: "American Negotiation Institute (ANI)",
        badge: "戦略的コミュニケーション",
        description: "対立解消、傾聴、高難度な場面におけるWin-Win交渉スキルの認定。",
        icon: Users,
        status: "認証済",
        file: "CertificateOfCompletion_Negotiation Professional Certificate by American Negotiation Institute.pdf",
      },
      {
        title: "ITIL® Foundation 4",
        issuer: "AXELOS / IT Service Management",
        badge: "サービスマネジメント",
        description: "現代のITサービスマネジメント（ITSM）と価値共創のフレームワーク。",
        icon: Layers,
        status: "認証済",
        file: "CertificateOfCompletion_ITIL Foundation 4 First Look.pdf",
      },
      {
        title: "Lean Six Sigma Foundations",
        issuer: "Process Excellence Institute",
        badge: "業務効率化",
        description: "プロセスのムダ削減とデジタルワークフロー最適化の品質基準。",
        icon: CheckCircle2,
        status: "認証済",
        file: "CertificateOfCompletion_Lean Six Sigma Foundations.pdf",
      },
      {
        title: "Cisco Certified Support Technician (CCST) Cybersecurity",
        issuer: "Cisco Certification Preparation",
        badge: "サイバーセキュリティ",
        description: "ネットワーク管理とセキュリティ基盤、脆弱性分析、デジタル防御。",
        icon: Shield,
        status: "認証済",
        file: "CertificateOfCompletion_Cisco Certified Support Technician CCST Cybersecurity 100160 Cert Prep.pdf",
      },
      {
        title: "Essential Skills in Adobe Premiere Pro 2025",
        issuer: "Adobe / Creative Media",
        badge: "プロフェッショナル認定",
        description: "映像編集、カラーグレーディング、音声同期、マルチメディア制作。",
        icon: Video,
        status: "認証済",
        file: "CertificateOfCompletion_Essential Skills in Adobe Premiere Pro 2025 Professional Certificate.pdf",
      },
    ],
    skillsHeader: {
      badge: "スキルマトリクス",
      title: "技術力と人間力の融合",
      subtitle: "高度な技術的専門性と、人を大切にするコミュニケーション能力の調和。",
    },
    skillCategories: [
      {
        title: "技術 & システム",
        icon: Server,
        skills: [
          "ネットワーク & ルーティング",
          "システム監視 (Zabbix)",
          "データベース (Oracle, MS SQL, SQL)",
          "APIテスト (Insomnia)",
          "ソフトウェア & ハードウェア検証",
          "Windows & Linux システム",
          "Microsoft 365 管理",
        ],
      },
      {
        title: "手法 & 運用",
        icon: Layers,
        skills: [
          "ITIL® 4 サービスマネジメント",
          "アジャイル & スクラム実践",
          "Atlassian Jira & Confluence",
          "Lean Six Sigma 業務改善",
          "インシデント & 障害対応",
          "品質保証 & QAテスト",
        ],
      },
      {
        title: "人間力 & リーダーシップ",
        icon: Heart,
        skills: [
          "顧客志向 & 共感力",
          "高い感情知能 (EQ)",
          "ITメンタリング & 研修",
          "戦略的交渉 (ANI)",
          "危機的状況での対話",
          "明瞭で親切なコミュニケーション",
        ],
      },
    ],
    cta: {
      title: "一緒に働きませんか？",
      subtitle: "技術的な課題の解決や、チームとテクノロジーをつなぐ人材をお探しの際は、ぜひお気軽にご連絡ください。",
      connectBtn: "LinkedInでつながる",
      emailBtn: "メールを送る",
    },
  },
  fr: {
    badge: "À propos & CV interactif",
    titlePrefix: "Là où la logique technique rencontre",
    titleHighlight: "l'empathie humaine",
    description: "Depuis 2017, je construis une carrière alliant rigueur technique et écoute humaine. Du dépannage de réseaux maritimes et bancaires critiques à la formation numérique, je m'assure que la technologie serve sereinement les personnes qui en dépendent.",
    connectLinkedIn: "Se connecter sur LinkedIn",
    emailMe: "hello@martinluzak.sk",
    myProjects: "Voir mes projets →",
    stats: [
      { label: "Expérience IT & Mentorat", value: "7+ ans", href: "#experience" },
      { label: "Focus Réseaux & Systèmes", value: "Entreprise & Maritime", href: "#experience" },
      { label: "Compétence clé", value: "Logique + Empathie", href: "#philosophy" },
      { label: "Certifications", value: "5+ certifications mondiales", href: "/certificates" },
    ],
    philosophy: {
      badge: "Philosophie fondamentale",
      quote: "« Je ne gère pas seulement des systèmes ; je crée un impact concret. »",
      text: "Les problèmes techniques n'existent jamais seuls : ils impactent directement les personnes et leur travail. Allier rigueur technique et intelligence émotionnelle me permet de faire le pont entre machines complexes et utilisateurs.",
    },
    experienceHeader: {
      badge: "Parcours professionnel",
      title: "Expériences professionnelles",
      subtitle: "Expertise en support réseau maritime, intégrations bancaires haute disponibilité, supervision logistique européenne et formation IT.",
    },
    experiences: [
      {
        id: 0,
        title: "Assistant en ONG — Humain & IT",
        company: "Zväz diabetikov Slovenska - DIATYRNAVIA",
        period: "Fév 2019 — Août 2026",
        type: "Support communautaire & IT à long terme",
        description: "Assistant direct de la direction. Formation continue aux outils numériques, administration M365, logistique IT d'événements et production vidéo.",
        highlights: [
          "Accompagnement numérique continu et soutien opérationnel de la présidente.",
          "Co-organisation d'événements communautaires et de sensibilisation pour les seniors.",
          "Administration de Microsoft 365 et réalisation vidéo.",
        ],
        milestone: {
          badge: "🏆 Prix Senior Friendly",
          text: "Contribution à l'obtention du prix national Senior Friendly 2023 grâce à un engagement constant envers les seniors.",
          link: "https://www.seniorfriendly.sk/news/showNew/ocenenia-sf-2023",
          linkText: "Prix Senior Friendly 2023",
          lang: "🇸🇰 SVK",
        },
        tags: ["Support de direction", "Communauté seniors", "M365", "Windows Admin", "Production vidéo"],
      },
      {
        id: 1,
        title: "Ingénieur Support Réseau & Maritime",
        company: "Marlink s.r.o.",
        period: "Juin 2025 — Déc 2025",
        type: "Réseaux maritimes satellite & entreprise",
        description: "Support technique de niveau 2 pour les flottes maritimes mondiales (capitaines, ingénieurs de bord) sous SLA rigoureux.",
        highlights: [
          "Dépannage de réseaux maritimes par satellite, systèmes VSAT et routeurs.",
          "Supervision d'infrastructure et maintien d'une sécurité réseau stricte.",
          "Résolution calme et précise en environnement opérationnel exigeant.",
        ],
        milestone: {
          badge: "🛰️ Support hybride VSAT & Starlink",
          text: "Support technique Tier 2 sur des architectures hybrides combinant VSAT traditionnel et Starlink.",
          link: "https://marlink.com/resources/knowledge-hub/starlink-and-marlink/",
          linkText: "Intégration Marlink Starlink",
          lang: "🌐 EN",
        },
        tags: ["Support technique", "VSAT maritime", "Starlink", "Zabbix", "Sécurité réseau"],
      },
      {
        id: 3,
        title: "Spécialiste en intégration bancaire",
        company: "Regional Card Processing Centre, s. r. o.",
        period: "Mars 2021 — Mars 2023",
        type: "Technologies financières & haute disponibilité",
        description: "Paramétrage et déploiement de terminaux et systèmes bancaires avec tolérance zéro panne.",
        highlights: [
          "Configuration de paramètres techniques critiques pour terminaux de paiement.",
          "Collaboration étroite avec les équipes de conformité et ingénieurs bancaires.",
          "Gestion des bases de données Oracle SQL et MS SQL Server.",
        ],
        milestone: {
          badge: "🏦 Projets bancaires stratégiques",
          text: "Paramétrage technique lors de la transition vers l'Euro en Croatie et lors de l'acquisition de Raiffeisen Bank par KBC Group.",
          link: "https://newsroom.kbc.com/kbc-completes-acquisition-of-raiffeisen-bank-internationals-bulgarian-operations",
          linkText: "Acquisition KBC Raiffeisen",
          lang: "🌐 Global",
        },
        tags: ["Systèmes bancaires", "Transition Euro", "Oracle SQL", "MS SQL Server", "Haute disponibilité"],
      },
    ],
    certificationsHeader: {
      badge: "Formation continue",
      title: "Certifications & Diplômes",
      subtitle: "Validation aux standards internationaux en gestion de projet Agile, négociation stratégique et gestion de services IT.",
      viewCert: "Voir le certificat (PDF)",
      verified: "Vérifié",
    },
    certifications: [
      {
        title: "Atlassian Agile Project Management",
        issuer: "Atlassian / LinkedIn Learning",
        badge: "Certificat professionnel",
        description: "Méthodologies Agile, planification de sprints, architecture Jira et collaboration d'équipe.",
        icon: Compass,
        status: "Vérifié",
        file: "CertificateOfCompletion_Atlassian Agile Project Management Professional Certificate.pdf",
      },
      {
        title: "Negotiation Professional Certificate",
        issuer: "American Negotiation Institute (ANI)",
        badge: "Communication stratégique",
        description: "Résolution de conflits, écoute active et négociation gagnant-gagnant dans des contextes exigeants.",
        icon: Users,
        status: "Vérifié",
        file: "CertificateOfCompletion_Negotiation Professional Certificate by American Negotiation Institute.pdf",
      },
      {
        title: "ITIL® Foundation 4",
        issuer: "AXELOS / IT Service Management",
        badge: "Gestion des services",
        description: "Cadre global pour la gestion moderne des services informatiques (ITSM).",
        icon: Layers,
        status: "Vérifié",
        file: "CertificateOfCompletion_ITIL Foundation 4 First Look.pdf",
      },
      {
        title: "Lean Six Sigma Foundations",
        issuer: "Process Excellence Institute",
        badge: "Efficacité opérationnelle",
        description: "Techniques d'élimination du gaspillage et optimisation des processus qualité.",
        icon: CheckCircle2,
        status: "Vérifié",
        file: "CertificateOfCompletion_Lean Six Sigma Foundations.pdf",
      },
      {
        title: "Cisco Certified Support Technician (CCST) Cybersecurity",
        issuer: "Cisco Certification Preparation",
        badge: "Cybersécurité",
        description: "Administration réseau, principes de sécurité d'entreprise et défense numérique.",
        icon: Shield,
        status: "Vérifié",
        file: "CertificateOfCompletion_Cisco Certified Support Technician CCST Cybersecurity 100160 Cert Prep.pdf",
      },
      {
        title: "Essential Skills in Adobe Premiere Pro 2025",
        issuer: "Adobe / Creative Media",
        badge: "Certificat professionnel",
        description: "Montage vidéo, étalonnage, synchronisation audio et narration multimédia.",
        icon: Video,
        status: "Vérifié",
        file: "CertificateOfCompletion_Essential Skills in Adobe Premiere Pro 2025 Professional Certificate.pdf",
      },
    ],
    skillsHeader: {
      badge: "Matrice de compétences",
      title: "Compétences techniques et humaines",
      subtitle: "Un équilibre entre expertise technique pointue et intelligence relationnelle.",
    },
    skillCategories: [
      {
        title: "Technique & Systèmes",
        icon: Server,
        skills: [
          "Réseaux informatiques & routage",
          "Supervision système (Zabbix)",
          "Bases de données (Oracle, MS SQL, SQL)",
          "Tests d'API (Insomnia)",
          "Tests logiciels & matériels",
          "Systèmes Windows & Linux",
          "Administration Microsoft 365",
        ],
      },
      {
        title: "Méthodologies & Opérations",
        icon: Layers,
        skills: [
          "Gestion des services ITIL® 4",
          "Pratiques Agile & Scrum",
          "Atlassian Jira & Confluence",
          "Optimisation Lean Six Sigma",
          "Résolution d'incidents & problèmes",
          "Assurance qualité & tests QA",
        ],
      },
      {
        title: "Humain & Leadership",
        icon: Heart,
        skills: [
          "Sens du service & empathie",
          "Intelligence émotionnelle élevée (QE)",
          "Mentorat technique & formation",
          "Négociation stratégique (ANI)",
          "Désescalade des crises",
          "Communication claire et bienveillante",
        ],
      },
    ],
    cta: {
      title: "Envie de collaborer ?",
      subtitle: "Que vous cherchiez quelqu'un pour résoudre des défis informatiques complexes ou faire le pont entre la tech et l'humain, échangeons avec plaisir.",
      connectBtn: "Se connecter sur LinkedIn",
      emailBtn: "M'envoyer un e-mail",
    },
  },
  ar: {
    badge: "نبذة عني & السيرة الذاتية التفاعلية",
    titlePrefix: "حيث يلتقي المنطق التقني مع",
    titleHighlight: "التعاطف الإنساني",
    description: "منذ عام 2017، بنيت مسيرتي المهنية على الدقة التقنية والتواصل الإنساني الصادق. من استكشاف أخطاء شبكات الملاحة البحرية والأنظمة المصرفية الحرجة وإصلاحها إلى تدريب الأفراد على المهارات الرقمية، أحرص على أن تعمل التكنولوجيا بسلاسة لخدمة الناس.",
    connectLinkedIn: "تواصل معي عبر LinkedIn",
    emailMe: "hello@martinluzak.sk",
    myProjects: "مشاريعي الجانبية ←",
    stats: [
      { label: "خبرة في تكنولوجيا المعلومات والتوجيه", value: "+7 سنوات", href: "#experience" },
      { label: "التركيز على الشبكات والأنظمة", value: "المؤسسات والملاحة البحرية", href: "#experience" },
      { label: "الكفاءة الأساسية", value: "المنطق + التعاطف", href: "#philosophy" },
      { label: "شهادات معتمدة", value: "+5 شهادات دولية", href: "/certificates" },
    ],
    philosophy: {
      badge: "الفلسفة الجوهرية",
      quote: "«أنا لا أدير الأنظمة فحسب؛ بل أصنع أثراً حقيقياً ذا معنى.»",
      text: "نادراً ما تكون المشاكل التقنية معزولة—فهي تؤثر دائماً على سير عمل البشر ومستويات توترهم. الجمع بين الصرامة التقنية والذكاء العاطفي المرتفع يتيح لي بناء جسر بين الآلات المعقدة والأشخاص الذين يعتمدون عليها.",
    },
    experienceHeader: {
      badge: "المسيرة المهنية",
      title: "الخبرات العملية",
      subtitle: "سجل حافل بالنجاحات في دعم تكنولوجيا الملاحة البحرية، تكامل الأنظمة المصرفية عالية التوافر، المراقبة اللوجستية الأوروبية، والتدريب الرقمي المجتمعي.",
    },
    experiences: [
      {
        id: 0,
        title: "مساعد غير ربحي — الإنسان وتكنولوجيا المعلومات",
        company: "Zväz diabetikov Slovenska - DIATYRNAVIA",
        period: "فبراير 2019 — أغسطس 2026",
        type: "دعم مجتمعي وتقني طويل الأمد",
        description: "مساعد تنفيذي وتقني مباشر للرئيسة. تقديم التعليم الرقمي المستمر للإدارة، تنظيم فعاليات مجتمعية لكبار السن، إدارة أنظمة M365 وإنتاج الفيديو.",
        highlights: [
          "تقديم الدعم المباشر والتطوير الرقمي المستمر للقيادة في العمليات اليومية.",
          "المشاركة في تنظيم لقاءات مجتمعية وفعاليات توعوية صحية لكبار السن.",
          "إدارة Microsoft 365 ولوجستيات تكنولوجيا المعلومات وإنتاج الفيديو.",
        ],
        milestone: {
          badge: "🏆 جائزة الإنجاز المجتمعي",
          text: "المساهمة في الفوز بجائزة Senior Friendly 2023 الوطنية من خلال تقديم الدعم والمساعدة وتنظيم الفعاليات لكبار السن.",
          link: "https://www.seniorfriendly.sk/news/showNew/ocenenia-sf-2023",
          linkText: "جائزة Senior Friendly 2023",
          lang: "🇸🇰 SVK",
        },
        tags: ["دعم القيادة", "مجتمع كبار السن", "M365", "Windows Admin", "إنتاج الفيديو"],
      },
      {
        id: 1,
        title: "مهندس دعم فني للشبكات البحرية",
        company: "Marlink s.r.o.",
        period: "يونيو 2025 — ديسمبر 2025",
        type: "شبكات الأقمار الصناعية البحرية والمؤسسية",
        description: "تقديم دعم فني متقدم من المستوى الثاني (Tier 2) لعملاء الملاحة البحرية حول العالم تحت شروط اتفاقيات مستوى الخدمة (SLA) الصارمة.",
        highlights: [
          "استكشاف أخطاء شبكات الأقمار الصناعية البحرية وأنظمة VSAT وأجهزة التوجيه وإصلاحها.",
          "مراقبة البنية التحتية المباشرة وضمان أعلى درجات أمان الاتصالات.",
          "تقديم حلول فنية دقيقة وهادئة في أصعب الظروف البحرية التشغيلية.",
        ],
        milestone: {
          badge: "🛰️ دعم هجين لـ VSAT و Starlink",
          text: "تقديم دعم Tier 2 للأساطيل البحرية العالمية عبر حلول اتصالات هجينة تجمع بين VSAT التقليدي ونظام Starlink الحديث.",
          link: "https://marlink.com/resources/knowledge-hub/starlink-and-marlink/",
          linkText: "تكامل Marlink Starlink",
          lang: "🌐 EN",
        },
        tags: ["الدعم الفني", "VSAT البحري", "حلول Starlink", "Zabbix", "أمان الشبكات"],
      },
      {
        id: 3,
        title: "أخصائي تنفيذ الأنظمة المصرفية",
        company: "Regional Card Processing Centre, s. r. o.",
        period: "مارس 2021 — مارس 2023",
        type: "التكنولوجيا المالية والتوافرية العالية",
        description: "تنفيذ المنتجات المصرفية وتعديل معلمات التطبيقات وفق أعلى معايير الأمان المالي دون أي انقطاع في الخدمة.",
        highlights: [
          "تكوين المعلمات التقنية الحساسة لأجهزة الدفع المصرفية وتطبيقات المعالجة.",
          "التعاون مع فرق الامتثال ومهندسي البنوك لضمان سلامة العمليات التشغيلية.",
          "إدارة وتكوين قواعد بيانات Oracle SQL و MS SQL Server.",
        ],
        milestone: {
          badge: "🏦 إنجازات المشاريع المصرفية",
          text: "تنفيذ التكوينات التقنية في مشاريع بارزة مثل انتقال عملة كرواتيا (كونا ← يورو) واستمرارية المعاملات أثناء استحواذ KBC Group على Raiffeisen Bank.",
          link: "https://newsroom.kbc.com/kbc-completes-acquisition-of-raiffeisen-bank-internationals-bulgarian-operations",
          linkText: "استحواذ KBC Raiffeisen",
          lang: "🌐 Global",
        },
        tags: ["الأنظمة المصرفية", "الانتقال إلى اليورو", "Oracle SQL", "MS SQL Server", "توافرية عالية"],
      },
    ],
    certificationsHeader: {
      badge: "النمو والتعلم المستمر",
      title: "الشهادات والاعتمادات الدولية",
      subtitle: "إيمان راسخ بأهمية التعلم المستمر. شهاداتي تعتمد المعايير الدولية في إدارة المشاريع الرشيقة (Agile)، والتفاوض الاستراتيجي، وإدارة خدمات تكنولوجيا المعلومات.",
      viewCert: "عرض الشهادة (PDF)",
      verified: "معتمد وموثق",
    },
    certifications: [
      {
        title: "Atlassian Agile Project Management",
        issuer: "Atlassian / LinkedIn Learning",
        badge: "شهادة مهنية معتمدة",
        description: "كفاءات معتمدة في منهجيات Agile الحديثة، تخطيط الـ Sprints، وبناء مشاريع Jira.",
        icon: Compass,
        status: "معتمد",
        file: "CertificateOfCompletion_Atlassian Agile Project Management Professional Certificate.pdf",
      },
      {
        title: "Negotiation Professional Certificate",
        issuer: "American Negotiation Institute (ANI)",
        badge: "التواصل الاستراتيجي",
        description: "مهارات متقدمة في حل النزاعات، والاستماع الفعال، والوصول إلى نتائج مربحة للطرفين.",
        icon: Users,
        status: "معتمد",
        file: "CertificateOfCompletion_Negotiation Professional Certificate by American Negotiation Institute.pdf",
      },
      {
        title: "ITIL® Foundation 4",
        issuer: "AXELOS / IT Service Management",
        badge: "إدارة الخدمات",
        description: "إطار شامل وحديث لإدارة خدمات تكنولوجيا المعلومات (ITSM) والتحسين المستمر.",
        icon: Layers,
        status: "معتمد",
        file: "CertificateOfCompletion_ITIL Foundation 4 First Look.pdf",
      },
      {
        title: "Lean Six Sigma Foundations",
        issuer: "Process Excellence Institute",
        badge: "الكفاءة التشغيلية",
        description: "تقنيات تقليل الهدر وتحسين سير العمليات الرقمية ومعايير الجودة.",
        icon: CheckCircle2,
        status: "معتمد",
        file: "CertificateOfCompletion_Lean Six Sigma Foundations.pdf",
      },
      {
        title: "Cisco Certified Support Technician (CCST) Cybersecurity",
        issuer: "Cisco Certification Preparation",
        badge: "الأمن السيبراني",
        description: "دمج إدارة الشبكات مع أساسيات أمان المؤسسات وتحليل الثغرات والدفاع الرقمي.",
        icon: Shield,
        status: "معتمد",
        file: "CertificateOfCompletion_Cisco Certified Support Technician CCST Cybersecurity 100160 Cert Prep.pdf",
      },
      {
        title: "Essential Skills in Adobe Premiere Pro 2025",
        issuer: "Adobe / Creative Media",
        badge: "شهادة مهنية معتمدة",
        description: "تحرير الفيديو وتعديل الألوان ومزامنة الصوت وصناعة المحتوى الترويجي والتعليمي.",
        icon: Video,
        status: "معتمد",
        file: "CertificateOfCompletion_Essential Skills in Adobe Premiere Pro 2025 Professional Certificate.pdf",
      },
    ],
    skillsHeader: {
      badge: "مصفوفة المهارات",
      title: "الكفاءات التقنية والإنسانية",
      subtitle: "توليفة متوازنة تجمع بين الخبرة التقنية العميقة والقيادة المتمحورة حول الإنسان.",
    },
    skillCategories: [
      {
        title: "التقنية والأنظمة",
        icon: Server,
        skills: [
          "شبكات الحاسوب والتوجيه",
          "مراقبة الأنظمة (Zabbix)",
          "قواعد البيانات (Oracle, MS SQL, SQL)",
          "اختبار واجهات البرمجة (Insomnia API)",
          "اختبار البرمجيات والعتاد",
          "أنظمة Windows و Linux",
          "إدارة Microsoft 365",
        ],
      },
      {
        title: "المنهجيات والعمليات",
        icon: Layers,
        skills: [
          "إدارة الخدمات ITIL® 4",
          "ممارسات Agile و Scrum",
          "Atlassian Jira & Confluence",
          "تحسين العمليات Lean Six Sigma",
          "حل المشاكل والحوادث التقنية",
          "ضمان الجودة واختبارات QA",
        ],
      },
      {
        title: "التواصل الإنساني والقيادة",
        icon: Heart,
        skills: [
          "التركيز على العملاء والتعاطف",
          "ذكاء عاطفي مرتفع (EQ)",
          "التدريب والتوجيه التقني",
          "التفاوض الاستراتيجي (ANI)",
          "احتواء الأزمات وتهدئتها",
          "تواصل واضح وفعال مع أصحاب المصلحة",
        ],
      },
    ],
    cta: {
      title: "هل ترغب في العمل معاً؟",
      subtitle: "سواء كنت بحاجة إلى شخص لحل التحديات التقنية المعقدة أو بناء جسر تواصل بين التكنولوجيا والناس، يسعدني التواصل معك.",
      connectBtn: "تواصل عبر LinkedIn",
      emailBtn: "أرسل لي بريداً إلكترونياً",
    },
  },
};

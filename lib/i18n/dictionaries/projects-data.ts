import { PortfolioLocale } from "../types";
import { Users, Radio, Server, Building2, LucideIcon } from "lucide-react";

export interface LocalizedEnterpriseProject {
  id: string;
  title: string;
  company: string;
  period: string;
  type: string;
  icon: LucideIcon;
  description: string;
  highlights: string[];
  tags: string[];
  badge: string;
}

export interface LocalizedProjectsData {
  header: {
    badge: string;
    title: string;
    description: string;
  };
  tabs: {
    all: string;
    web: string;
    work: string;
    video: string;
  };
  pillar1: {
    badge: string;
    title: string;
    subtitle: string;
    featuredBadge: string;
    nomineeBadge: string;
    languagesBadge: string;
    platformTitle: string;
    role: string;
    story: string;
    achievementsTitle: string;
    achievement1Title: string;
    achievement1Desc: string;
    achievement2Title: string;
    achievement2Desc: string;
    achievement3Title: string;
    achievement3Desc: string;
    achievement4Title: string;
    achievement4Desc: string;
    techStackTitle: string;
    visitLiveBtn: string;
  };
  pillar2: {
    badge: string;
    title: string;
    subtitle: string;
    expandBtn: string;
    collapseBtn: string;
    projects: LocalizedEnterpriseProject[];
  };
  pillar3: {
    badge: string;
    title: string;
    subtitle: string;
    card1Title: string;
    card1Badge: string;
    card1Role: string;
    card1Desc: string;
    card1Tags: string[];
    card2Title: string;
    card2Badge: string;
    card2Role: string;
    card2Desc: string;
    card2Tags: string[];
    card3Title: string;
    card3Badge: string;
    card3Role: string;
    card3Desc: string;
    card3Tags: string[];
  };
  cta: {
    title: string;
    subtitle: string;
    contactBtn: string;
    aboutBtn: string;
  };
}

export const PROJECTS_DATA: Record<PortfolioLocale, LocalizedProjectsData> = {
  en: {
    header: {
      badge: "Portfolio & Impact",
      title: "My Successful Projects",
      description: "A showcase of enterprise IT troubleshooting, high-impact non-profit platforms, educational video production, and modern web applications.",
    },
    tabs: {
      all: "All Pillars",
      web: "Web Platforms",
      work: "Work & Enterprise",
      video: "Video Production",
    },
    pillar1: {
      badge: "Pillar 01 • Flagship Web Platform",
      title: "Web Platforms & Civic Innovation",
      subtitle: "Independent digital utilities and open-access software engineered for global scale, high reliability, and real human impact.",
      featuredBadge: "Featured Platform",
      nomineeBadge: "🏆 WSA 2026 Nominee",
      languagesBadge: "101 Languages • 252 Regions",
      platformTitle: "Why You Matter: Open-Access Civic Health Utility",
      role: "Founder, Architect & Lead Engineer",
      story: "Developed under the personal motto „Where Logic Meets Humanity“. An open-access, zero-tracking digital lifeline engineered to deliver immediate psychological first aid, somatic de-escalation, and verified crisis helplines across 252 countries and territories in 101 languages. Fusing 7+ years of non-profit community leadership (DIATYRNAVIA / Senior Friendly 2023 award) with modern software engineering.",
      achievementsTitle: "Key Technical & Humanitarian Achievements:",
      achievement1Title: "100% Non-Profit & Zero-Data Monetization:",
      achievement1Desc: "Strict privacy-first architecture with zero authentication, zero cookies, zero user tracking, and no paywalls.",
      achievement2Title: "101 Languages & 252 Territories:",
      achievement2Desc: "The world's most extensive open crisis directory, bridging the linguistic and digital divide for refugees, migrants, and marginalized groups.",
      achievement3Title: "Safety by Design & Disguise Mode:",
      achievement3Desc: "Instant 1-click screen camouflage protecting victims of domestic violence from exposure, paired with interactive 4-7-8 breathing and 5-4-3-2-1 grounding.",
      achievement4Title: "Low-Bandwidth & Offline Resilient:",
      achievement4Desc: "Engineered to load in under 1 second worldwide, functioning reliably on 2G/3G mobile networks in remote or crisis zones.",
      techStackTitle: "Core Technologies & Architecture:",
      visitLiveBtn: "Launch Why You Matter (Live Platform)",
    },
    pillar2: {
      badge: "Pillar 02 • Enterprise Systems",
      title: "Work & Enterprise Milestones",
      subtitle: "Professional missions and infrastructure support delivered across global telecommunications, banking systems, logistics, and non-profit administration.",
      expandBtn: "View All 4 Enterprise Milestones",
      collapseBtn: "Collapse Enterprise Milestones",
      projects: [
        {
          id: "diatyrnavia",
          title: "Senior Friendly Award & IT Leadership Support",
          company: "DIATYRNAVIA NGO",
          period: "2019 — 2026",
          type: "Community Tech, Media & Executive Assistance",
          icon: Users,
          description: "Direct technical and executive assistant to chairwoman. Managed Microsoft 365 administration, event IT logistics, digital upskilling for seniors, and produced promotional video materials contributing to winning the national Senior Friendly 2023 award.",
          highlights: [
            "Continuous digital training and executive IT support for organization leadership.",
            "Produced multimedia promo materials and managed digital communication.",
          ],
          tags: ["Executive Assistance", "M365", "Senior Community", "Video Production"],
          badge: "🏆 Senior Friendly 2023 Award",
        },
        {
          id: "marlink",
          title: "Maritime Satellite & Starlink Support",
          company: "Marlink s.r.o.",
          period: "2025",
          type: "Tier 2 Satellite & Enterprise Networks",
          icon: Radio,
          description: "Provided critical Tier 2 network and communications technical support for global maritime fleets under strict SLAs. Handled complex communication incidents across hybrid connectivity setups combining VSAT and modern Starlink satellite solutions.",
          highlights: [
            "Troubleshot vessel network topologies, VSAT terminals, and Starlink antennas.",
            "Maintained 24/7 communications reliability under demanding maritime conditions.",
          ],
          tags: ["Satellite Networks", "VSAT", "Starlink", "Zabbix", "Network Security"],
          badge: "🛰️ Hybrid Connectivity",
        },
        {
          id: "dpd",
          title: "Multi-Country Logistics Monitoring & API Testing",
          company: "ForesServices / DPD",
          period: "2024 — 2025",
          type: "Logistics Infrastructure & API Validation",
          icon: Server,
          description: "Proactive system health monitoring (07:00 – 23:00, 7 days/week) and systematic Insomnia API regression testing for DPD courier infrastructure across the Netherlands, Switzerland, Belgium, and Slovakia.",
          highlights: [
            "Monitored live server health and alert queues via Zabbix with swift escalation.",
            "Validated critical API payloads to guarantee continuous logistics parcel flow.",
          ],
          tags: ["Zabbix Monitoring", "API Regression Testing", "Insomnia", "High Availability"],
          badge: "📦 European Logistics",
        },
        {
          id: "rcpc",
          title: "Banking Terminal Parameters & Euro Transition",
          company: "Regional Card Processing Centre",
          period: "2021 — 2023",
          type: "Financial Technology & High Availability",
          icon: Building2,
          description: "End-to-end technical configurations for payment terminals and core banking systems. Key project milestones included Croatia's currency transition (Kuna → Euro) and technical transaction continuity during the Raiffeisen Bank to KBC Group acquisition.",
          highlights: [
            "Configured critical banking parameters with zero-downtime tolerance.",
            "Managed Oracle SQL and MS SQL Server database configurations under strict compliance.",
          ],
          tags: ["Banking Systems", "Euro Transition", "Oracle SQL", "MS SQL Server", "Zero-Downtime"],
          badge: "🏦 Banking Infrastructure",
        },
      ],
    },
    pillar3: {
      badge: "Pillar 03 • Creative Media",
      title: "Video Production & Multimedia",
      subtitle: "Storytelling, video editing, and educational content that humanize technology and advocate for community well-being.",
      card1Title: "Senior Friendly 2023: Award-Winning Community Campaign",
      card1Badge: "🏆 Award-Winning Media",
      card1Role: "Director, Camera, Editor & Sound",
      card1Desc: "Complete multimedia campaign and documentary spotlight for DIATYRNAVIA, capturing the vital support given to diabetic seniors and community volunteers.",
      card1Tags: ["Adobe Premiere Pro", "Color Grading", "Audio Mixing", "Documentary"],
      card2Title: "Digital Literacy & Everyday Tech Mentoring",
      card2Badge: "🎓 Educational Video Series",
      card2Role: "Content Creator & Instructor",
      card2Desc: "Step-by-step instructional tutorials designed to make digital tools accessible for beginners, seniors, and non-technical staff.",
      card2Tags: ["Educational Media", "M365 Workflows", "Accessibility", "Visual Guides"],
      card3Title: "Technical Architecture & System Demonstrations",
      card3Badge: "💻 Technical Demos",
      card3Role: "Technical Producer & Voiceover",
      card3Desc: "Clean, professional video walkthroughs explaining complex system configurations, network topologies, and software architecture.",
      card3Tags: ["Screen Production", "System Walkthroughs", "Motion Graphics", "Voiceover"],
    },
    cta: {
      title: "Have a project or mission in mind?",
      subtitle: "Let's build reliable technology that serves people with clarity, empathy, and technical excellence.",
      contactBtn: "Get in Touch via Email",
      aboutBtn: "View Full CV & Background",
    },
  },
  sk: {
    header: {
      badge: "Portfólio a Dopad",
      title: "Moje Úspešné Projekty",
      description: "Prehľad riešení podnikovej IT infraštruktúry, neziskových platforiem s globálnym dosahom, tvorby edukačných videí a moderných webových aplikácií.",
    },
    tabs: {
      all: "Všetky oblasti",
      web: "Webové platformy",
      work: "Práca a Enterprise",
      video: "Video produkcia",
    },
    pillar1: {
      badge: "Oblasť 01 • Vlajková webová platforma",
      title: "Webové platformy a občianska inovácia",
      subtitle: "Nezávislé digitálne nástroje a open-access softvér vyvinutý pre globálny rozsah, vysokú spoľahlivosť a reálny ľudský dopad.",
      featuredBadge: "Vlajkový projekt",
      nomineeBadge: "🏆 WSA 2026 Nominácia",
      languagesBadge: "101 jazykov • 252 regiónov",
      platformTitle: "Why You Matter: Otvorená platforma krízovej pomoci",
      role: "Zakladateľ, architekt a hlavný inžinier",
      story: "Vyvinuté pod osobným mottom „Kde sa logika stretáva s ľudskosťou“. Otvorená digitálna platforma bez sledovania dát poskytujúca okamžitú psychologickú prvú pomoc, somatické upokojenie a overené krízové linky v 252 krajinách a územiach v 101 jazykoch. Spojenie 7+ rokov skúseností v neziskovom sektore (DIATYRNAVIA / ocenenie Senior Friendly 2023) a štúdia psychológie s moderným softvérovým inžinierstvom.",
      achievementsTitle: "Kľúčové technické a humanitárne úspechy:",
      achievement1Title: "100% neziskové & nulová monetizácia dát:",
      achievement1Desc: "Prísna architektúra zameraná na súkromie: bez prihlasovania, bez cookies, bez sledovania používateľov a bez paywallov.",
      achievement2Title: "101 jazykov & 252 území:",
      achievement2Desc: "Najrozsiahlejší otvorený krízový adresár na svete, prekonávajúci jazykovú a digitálnu bariéru pre utečencov, migrantov a zraniteľné skupiny.",
      achievement3Title: "Bezpečnosť od návrhu & Kamuflážny režim:",
      achievement3Desc: "Okamžité 1-klikové zamaskovanie obrazovky chrániace obete domáceho násilia, v kombinácii s interaktívnym dýchaním 4-7-8 a uzemnením 5-4-3-2-1.",
      achievement4Title: "Nízka dátová náročnosť & offline odolnosť:",
      achievement4Desc: "Optimalizované na načítanie pod 1 sekundu kdekoľvek na svete, spoľahlivo fungujúce aj na 2G/3G sieťach v odľahlých alebo krízových oblastiach.",
      techStackTitle: "Technologický stack a architektúra:",
      visitLiveBtn: "Spustiť Why You Matter (Živá platforma)",
    },
    pillar2: {
      badge: "Oblasť 02 • Enterprise systémy",
      title: "Pracovné a firemné míľniky",
      subtitle: "Profesionálne misie a podpora infraštruktúry v telekomunikáciách, bankovníctve, logistike a neziskovej správe.",
      expandBtn: "Zobraziť všetky 4 firemné míľniky",
      collapseBtn: "Zbaliť firemné míľniky",
      projects: [
        {
          id: "diatyrnavia",
          title: "Ocenenie Senior Friendly & Podpora vedenia IT",
          company: "OZ DIATYRNAVIA",
          period: "2019 — 2026",
          type: "Podpora občianskeho združenia, médiá & asistencia vedeniu",
          icon: Users,
          description: "Priamy technický a výkonný asistent predsedníčky. Správa Microsoft 365, IT logistika podujatí, vzdelávanie seniorov v digitálnych zručnostiach a tvorba propagačných video materiálov, ktoré prispeli k získaniu ocenenia Senior Friendly 2023.",
          highlights: [
            "Nepretržité digitálne školenia a IT podpora pre vedenie organizácie.",
            "Tvorba multimediálnych promo materiálov a správa digitálnej komunikácie.",
          ],
          tags: ["Asistencia vedeniu", "M365", "Seniorská komunita", "Video produkcia"],
          badge: "🏆 Ocenenie Senior Friendly 2023",
        },
        {
          id: "marlink",
          title: "Podpora námorných satelitných sietí & Starlink",
          company: "Marlink s.r.o.",
          period: "2025",
          type: "Tier 2 satelitné & podnikové siete",
          icon: Radio,
          description: "Poskytovanie kritickej technickej podpory Tier 2 pre globálne námorné flotily podľa prísnych SLA. Riešenie komplexných incidentov na hybridných sieťach spájajúcich VSAT a moderné satelitné riešenia Starlink.",
          highlights: [
            "Riešenie problémov v sieťach plavidiel, VSAT termináloch a Starlink anténach.",
            "Udržiavanie nepretržitej spoľahlivosti komunikácie v náročných námorných podmienkach.",
          ],
          tags: ["Satelitné siete", "VSAT", "Starlink", "Zabbix", "Bezpečnosť sietí"],
          badge: "🛰️ Hybridná konektivita",
        },
        {
          id: "dpd",
          title: "Medzinárodný monitoring logistiky & API testovanie",
          company: "ForesServices / DPD",
          period: "2024 — 2025",
          type: "Logistická infraštruktúra & validácia API",
          icon: Server,
          description: "Proaktívny monitoring zdravia systémov (07:00 – 23:00, 7 dní v týždni) a systematické regresné testovanie API cez Insomnia pre kuriérsku sieť DPD v Holandsku, Švajčiarsku, Belgicku a na Slovensku.",
          highlights: [
            "Monitoring serverov a frontov výstrah cez Zabbix s rýchlou eskaláciou.",
            "Validácia kritických dátových API štruktúr pre plynulý tok zásielok.",
          ],
          tags: ["Zabbix monitoring", "Regresné testovanie API", "Insomnia", "Vysoká dostupnosť"],
          badge: "📦 Európska logistika",
        },
        {
          id: "rcpc",
          title: "Bankové terminály & Prechod na Euro",
          company: "Regional Card Processing Centre",
          period: "2021 — 2023",
          type: "Finančné technológie & vysoká dostupnosť",
          icon: Building2,
          description: "Kompletné technické konfigurácie pre platobné terminály a bankové systémy. Kľúčové míľniky zahŕňali prechod meny v Chorvátsku (Kuna → Euro) a kontinuitu transakcií pri akvizícii Raiffeisen Bank skupinou KBC Group.",
          highlights: [
            "Konfigurácia kritických bankových parametrov s nulovou toleranciou výpadkov.",
            "Správa databáz Oracle SQL a MS SQL Server podľa prísnych predpisov.",
          ],
          tags: ["Bankové systémy", "Prechod na Euro", "Oracle SQL", "MS SQL Server", "Nulový výpadok"],
          badge: "🏦 Banková infraštruktúra",
        },
      ],
    },
    pillar3: {
      badge: "Oblasť 03 • Kreatívne médiá",
      title: "Video produkcia a multimédiá",
      subtitle: "Tvorba obsahu, strih videa a vzdelávacie materiály, ktoré poľudšťujú technológie a podporujú komunitu.",
      card1Title: "Senior Friendly 2023: Ocenená komunitná kampaň",
      card1Badge: "🏆 Ocenená mediálna tvorba",
      card1Role: "Réžia, kamera, strih & zvuk",
      card1Desc: "Kompletná multimediálna kampaň a dokumentárny profil pre DIATYRNAVIA, zachytávajúci podporu seniorov s diabetom.",
      card1Tags: ["Adobe Premiere Pro", "Farebné korekcie", "Zvukový mix", "Dokument"],
      card2Title: "Digitálna gramotnosť a vzdelávanie",
      card2Badge: "🎓 Séria edukačných videí",
      card2Role: "Tvorca obsahu & lektor",
      card2Desc: "Názorné videonávody navrhnuté tak, aby sprístupnili moderné digitálne nástroje začiatočníkom a seniorom.",
      card2Tags: ["Edukačné médiá", "M365 procesy", "Prístupnosť", "Vizuálne návody"],
      card3Title: "Technická architektúra a systémové ukážky",
      card3Badge: "💻 Technické demá",
      card3Role: "Technický producent & komentár",
      card3Desc: "Prehľadné a profesionálne videoukážky vysvetľujúce konfigurácie systémov, sieťové topológie a softvérovú architektúru.",
      card3Tags: ["Záznam obrazovky", "Prehliadky systémov", "Motion Graphics", "Hlasový komentár"],
    },
    cta: {
      title: "Máte nápad na spoločný projekt?",
      subtitle: "Poďme spolu vytvoriť spoľahlivé technológie, ktoré slúžia ľuďom s empatiou, zrozumiteľnosťou a technickou precíznosťou.",
      contactBtn: "Napíšte mi email",
      aboutBtn: "Pozrieť celý životopis & skúsenosti",
    },
  },
  de: {
    header: {
      badge: "Portfolio & Wirkung",
      title: "Meine erfolgreichen Projekte",
      description: "Ein Überblick über IT-Infrastrukturprojekte, globale Non-Profit-Plattformen, Lehrvideoproduktionen und moderne Webanwendungen.",
    },
    tabs: {
      all: "Alle Säulen",
      web: "Webplattformen",
      work: "Beruf & Enterprise",
      video: "Videoproduktion",
    },
    pillar1: {
      badge: "Säule 01 • Flaggschiff-Webplattform",
      title: "Webplattformen & Bürgernahe Innovation",
      subtitle: "Unabhängige digitale Tools und Open-Access-Software für weltweite Skalierung, hohe Zuverlässigkeit und echte menschliche Wirkung.",
      featuredBadge: "Flaggschiff-Projekt",
      nomineeBadge: "🏆 WSA 2026 Nominiert",
      languagesBadge: "101 Sprachen • 252 Regionen",
      platformTitle: "Why You Matter: Offene Plattform für psychosoziale Krisenhilfe",
      role: "Gründer, Architekt & Leitender Entwickler",
      story: "Entwickelt unter dem Motto „Wo Logik auf Menschlichkeit trifft“. Eine barrierefreie, datenschutzorientierte Plattform für psychologische Erste Hilfe und Krisen-Hotlines in 252 Ländern und 101 Sprachen.",
      achievementsTitle: "Wichtigste technische & humanitäre Meilensteine:",
      achievement1Title: "100% gemeinnützig & keine Datenmonetarisierung:",
      achievement1Desc: "Strikte Privacy-First-Architektur ohne Cookies, ohne Benutzer-Tracking und ohne Paywalls.",
      achievement2Title: "101 Sprachen & 252 Regionen:",
      achievement2Desc: "Das weltweit umfangreichste offene Krisenverzeichnis für Geflüchtete, Migranten und marginalisierte Gruppen.",
      achievement3Title: "Safety by Design & Tarnmodus:",
      achievement3Desc: "1-Klick-Bildschirmtarnung zum Schutz vor häuslicher Gewalt, kombiniert mit interaktiven 4-7-8-Atemübungen.",
      achievement4Title: "Niedrige Bandbreite & Offline-fähig:",
      achievement4Desc: "Weltweites Laden unter 1 Sekunde, auch in 2G/3G-Mobilfunknetzen in Krisengebieten.",
      techStackTitle: "Technologien & Architektur:",
      visitLiveBtn: "Why You Matter öffnen (Live-Plattform)",
    },
    pillar2: {
      badge: "Säule 02 • Enterprise-Systeme",
      title: "Berufliche & Enterprise-Meilensteine",
      subtitle: "Professionelle Infrastrukturprojekte in Telekommunikation, Bankwesen, Logistik und gemeinnütziger Verwaltung.",
      expandBtn: "Alle 4 Meilensteine anzeigen",
      collapseBtn: "Meilensteine einklappen",
      projects: [
        {
          id: "diatyrnavia",
          title: "Senior Friendly Auszeichnung & IT-Leitungssupport",
          company: "DIATYRNAVIA NGO",
          period: "2019 — 2026",
          type: "Community-Tech, Medien & Vorstandsassistenz",
          icon: Users,
          description: "Direkter technischer Assistent der Vorsitzenden. M365-Administration, Schulungen für Senioren und Videoproduktion.",
          highlights: [
            "Kontinuierliche IT-Schulung und Unterstützung der Geschäftsführung.",
            "Erstellung multimedialer Inhalte und Event-IT-Logistik.",
          ],
          tags: ["Führungsunterstützung", "M365", "Senioren-Community", "Videoproduktion"],
          badge: "🏆 Senior Friendly 2023 Auszeichnung",
        },
        {
          id: "marlink",
          title: "Maritime Satelliten- & Starlink-Unterstützung",
          company: "Marlink s.r.o.",
          period: "2025",
          type: "Tier-2-Satelliten- & Unternehmensnetzwerke",
          icon: Radio,
          description: "Technischer Tier-2-Support für maritime Flotten weltweit unter strikten SLAs (VSAT & Starlink).",
          highlights: [
            "Fehlerbehebung in Schiffsnetzwerken und VSAT-/Starlink-Antennen.",
            "Hohe Ausfallsicherheit unter anspruchsvollen Bedingungen auf See.",
          ],
          tags: ["Satellitennetzwerke", "VSAT", "Starlink", "Zabbix", "Netzwerksicherheit"],
          badge: "🛰️ Hybride Konnektivität",
        },
        {
          id: "dpd",
          title: "Länderübergreifendes Logistik-Monitoring & API-Testing",
          company: "ForesServices / DPD",
          period: "2024 — 2025",
          type: "Logistikinfrastruktur & API-Validierung",
          icon: Server,
          description: "Zabbix-Systemmonitoring (07:00 – 23:00) und API-Tests für DPD in NL, CH, BE und SK.",
          highlights: [
            "Überwachung der Serverauslastung und Alarmwarteschlangen.",
            "Validierung kritischer API-Nutzlasten für reibungslosen Paketfluss.",
          ],
          tags: ["Zabbix Monitoring", "API Regression Testing", "Insomnia", "Hochverfügbarkeit"],
          badge: "📦 Europäische Logistik",
        },
        {
          id: "rcpc",
          title: "Bankterminals & Euro-Umstellung",
          company: "Regional Card Processing Centre",
          period: "2021 — 2023",
          type: "Finanztechnologie & Hochverfügbarkeit",
          icon: Building2,
          description: "Technische Konfigurationen für Zahlungsterminals und Kernbanksysteme bei der Euro-Einführung in Kroatien.",
          highlights: [
            "Konfiguration von Bankparametern mit Null-Ausfallzeit-Toleranz.",
            "Verwaltung von Oracle SQL und MS SQL Server Datenbanken.",
          ],
          tags: ["Bankensysteme", "Euro-Umstellung", "Oracle SQL", "MS SQL Server", "Null Ausfallzeit"],
          badge: "🏦 Bankeninfrastruktur",
        },
      ],
    },
    pillar3: {
      badge: "Säule 03 • Kreative Medien",
      title: "Videoproduktion & Multimedia",
      subtitle: "Storytelling, Videoschnitt und Schulungsinhalte, die Technologie verständlich machen.",
      card1Title: "Senior Friendly 2023: Ausgezeichnete Kampagne",
      card1Badge: "🏆 Medienauszeichnung",
      card1Role: "Regie, Kamera, Schnitt & Ton",
      card1Desc: "Vollständige Multimediakampagne für DIATYRNAVIA zur Unterstützung von Senioren.",
      card1Tags: ["Adobe Premiere Pro", "Color Grading", "Audio-Mixing", "Dokumentation"],
      card2Title: "Digitale Kompetenz & IT-Schulungen",
      card2Badge: "🎓 Lernvideos",
      card2Role: "Content Creator & Dozent",
      card2Desc: "Schritt-für-Schritt-Anleitungen für Einsteiger, Senioren und IT-Anwender.",
      card2Tags: ["Lernmedien", "M365 Workflows", "Barrierefreiheit", "Visuelle Guides"],
      card3Title: "Systemarchitektur & Technische Demos",
      card3Badge: "💻 Technische Demos",
      card3Role: "Technischer Produzent & Voiceover",
      card3Desc: "Professionelle Video-Walkthroughs zu Netzwerktopologien und Systemarchitektur.",
      card3Tags: ["Screen Production", "System-Walkthroughs", "Motion Graphics", "Voiceover"],
    },
    cta: {
      title: "Haben Sie ein Projekt im Sinn?",
      subtitle: "Lassen Sie uns gemeinsam zuverlässige Technologien entwickeln, die Menschen mit Empathie und Präzision dienen.",
      contactBtn: "Kontakt per E-Mail",
      aboutBtn: "Lebenslauf & Erfahrungen ansehen",
    },
  },
  ja: {
    header: {
      badge: "実績 & インパクト",
      title: "成功プロジェクト事例",
      description: "エンタープライズIT運用、高信頼性非営利プラットフォーム、教育動画制作、モダンWeb開発の実績紹介。",
    },
    tabs: {
      all: "全分野",
      web: "Webプラットフォーム",
      work: "職務 & 企業",
      video: "動画制作",
    },
    pillar1: {
      badge: "領域 01 • フラッグシップWebプラットフォーム",
      title: "Webプラットフォーム & 市民イノベーション",
      subtitle: "グローバル規模、高可用性、そして真の人間的インパクトのために設計されたオープンアクセスソフトウェア。",
      featuredBadge: "注目プラットフォーム",
      nomineeBadge: "🏆 WSA 2026 ノミネート",
      languagesBadge: "101言語 • 252地域",
      platformTitle: "Why You Matter: 市民向けオープン心理支援ツール",
      role: "創設者、アーキテクト & リードエンジニア",
      story: "「技術的論理と人間的共感が交差する場所」を理念に開発。世界252の国と地域で101言語に対応し、即時の心理的応急処置や検証済み相談窓口を提供するプライバシー重視のオープンツール。",
      achievementsTitle: "主な技術的・人道的是認点:",
      achievement1Title: "100%非営利 & データ収益化ゼロ:",
      achievement1Desc: "ログイン不要、Cookie不使用、トラッキング皆無の完全プライバシー優先設計。",
      achievement2Title: "101言語 & 252の国と地域:",
      achievement2Desc: "言語とデジタル格差を埋める、世界で最も広範なオープン危機支援ディレクトリ。",
      achievement3Title: "安全設計 & カモフラージュモード:",
      achievement3Desc: "画面を一瞬で偽装する機能と、4-7-8呼吸法などのグラウンディング演習を搭載。",
      achievement4Title: "低帯域 & オフライン対応:",
      achievement4Desc: "1秒未満の高速読み込みで、通信環境の悪い地域でも確実に動作。",
      techStackTitle: "コア技術 & アーキテクチャ:",
      visitLiveBtn: "Why You Matter を開く (Live)",
    },
    pillar2: {
      badge: "領域 02 • エンタープライズシステム",
      title: "職務 & 企業プロジェクト実績",
      subtitle: "海事衛星通信、銀行システム、欧州物流監視、非営利団体運営におけるミッションクリティカルな実績。",
      expandBtn: "全4つの企業実績を表示",
      collapseBtn: "企業実績を折りたたむ",
      projects: [
        {
          id: "diatyrnavia",
          title: "シニアフレンドリー賞 & ITリーダーシップ支援",
          company: "DIATYRNAVIA NGO",
          period: "2019 — 2026",
          type: "コミュニティIT、メディア & 経営補佐",
          icon: Users,
          description: "代表理事専任アシスタントとしてM365管理、シニア向けIT講習、動画制作を主導し全国表彰を受賞。",
          highlights: [
            "経営層に対する継続的なデジタルスキル向上研修とIT支援。",
            "広報マルチメディア制作とデジタル広報の統括。",
          ],
          tags: ["経営支援", "M365", "シニア支援", "動画制作"],
          badge: "🏆 Senior Friendly 2023 受賞",
        },
        {
          id: "marlink",
          title: "海事衛星通信 & Starlink サポート",
          company: "Marlink s.r.o.",
          period: "2025",
          type: "Tier 2 衛星通信 & 企業ネットワーク",
          icon: Radio,
          description: "世界中の船舶を対象に、厳格なSLAのもとでVSATおよびStarlinkハイブリッド通信をサポート。",
          highlights: [
            "船舶ネットワーク、VSAT端末、Starlinkアンテナの障害対応。",
            "過酷な海上環境における24時間通信信頼性の維持。",
          ],
          tags: ["衛星ネットワーク", "VSAT", "Starlink", "Zabbix", "ネットワークセキュリティ"],
          badge: "🛰️ ハイブリッド通信",
        },
        {
          id: "dpd",
          title: "欧州複数国物流監視 & API検証",
          company: "ForesServices / DPD",
          period: "2024 — 2025",
          type: "物流インフラ & API検証",
          icon: Server,
          description: "オランダ、スイス、ベルギー、スロバキアのDPD宅配インフラを対象としたシステム監視とAPIテスト。",
          highlights: [
            "Zabbixによるリアルタイムサーバー監視とアラート対応。",
            "荷物流通を支える重要APIペイロードの回帰テスト。",
          ],
          tags: ["Zabbix監視", "API回帰テスト", "Insomnia", "高可用性"],
          badge: "📦 欧州物流",
        },
        {
          id: "rcpc",
          title: "決済端末パラメータ & ユーロ移行",
          company: "Regional Card Processing Centre",
          period: "2021 — 2023",
          type: "金融テクノロジー & 高可用性",
          icon: Building2,
          description: "クロアチアのユーロ導入や銀行買収に伴う決済端末・コア銀行システムの技術設定と無停止運用。",
          highlights: [
            "ゼロダウンタイム要件下での重要パラメータ設定。",
            "厳格なコンプライアンスに基づくOracleおよびMS SQL管理。",
          ],
          tags: ["銀行システム", "ユーロ移行", "Oracle SQL", "MS SQL Server", "無停止運用"],
          badge: "🏦 金融インフラ",
        },
      ],
    },
    pillar3: {
      badge: "領域 03 • クリエイティブメディア",
      title: "動画制作 & マルチメディア",
      subtitle: "テクノロジーを親しみやすくし、コミュニティを支援する映像制作と教育コンテンツ。",
      card1Title: "Senior Friendly 2023: 受賞記念キャンペーン映像",
      card1Badge: "🏆 受賞メディア",
      card1Role: "監督・撮影・編集・音響",
      card1Desc: "DIATYRNAVIAのボランティアとシニア支援の活動を追ったドキュメンタリー映像。",
      card1Tags: ["Adobe Premiere Pro", "カラーグレーディング", "音響編集", "ドキュメンタリー"],
      card2Title: "デジタルリテラシー & IT基礎講座",
      card2Badge: "🎓 教育動画シリーズ",
      card2Role: "コンテンツ制作 & 講師",
      card2Desc: "初心者やシニア向けにITツールを分かりやすく解説するステップバイステップ動画。",
      card2Tags: ["教育メディア", "M365活用", "アクセシビリティ", "図解ガイド"],
      card3Title: "システム構造 & 技術解説デモ",
      card3Badge: "💻 技術デモ",
      card3Role: "プロデュース & ナレーション",
      card3Desc: "複雑なネットワーク構成やシステムアーキテクチャを明快に解説する動画。",
      card3Tags: ["画面収録", "システム解説", "モーショングラフィックス", "ナレーション"],
    },
    cta: {
      title: "共同プロジェクトをお考えですか？",
      subtitle: "技術的な論理と人間的な共感で、確かな成果を生み出しましょう。",
      contactBtn: "メールで問い合わせる",
      aboutBtn: "詳しい経歴・CVを見る",
    },
  },
  fr: {
    header: {
      badge: "Portfolio & Impact",
      title: "Mes projets réussis",
      description: "Une vitrine de solutions informatiques d'entreprise, de plateformes non lucratives à fort impact, de vidéos pédagogiques et d'applications web modernes.",
    },
    tabs: {
      all: "Tous les piliers",
      web: "Plateformes Web",
      work: "Entreprise & Métier",
      video: "Production Vidéo",
    },
    pillar1: {
      badge: "Pilier 01 • Plateforme Web Phare",
      title: "Plateformes Web & Innovation Civique",
      subtitle: "Outils numériques indépendants et logiciels libres conçus pour une portée mondiale et un impact humain direct.",
      featuredBadge: "Projet Phare",
      nomineeBadge: "🏆 Nominé WSA 2026",
      languagesBadge: "101 Langues • 252 Régions",
      platformTitle: "Why You Matter : Soutien psychologique civique en libre accès",
      role: "Fondateur, Architecte & Développeur Principal",
      story: "Conçu selon la devise „Là où la logique rencontre l'humanité“. Une plateforme sans traçage offrant premiers secours psychologiques et lignes d'écoute dans 252 pays en 101 langues.",
      achievementsTitle: "Réalisations techniques et humanitaires majeures :",
      achievement1Title: "100% non lucratif & zéro monétisation de données :",
      achievement1Desc: "Architecture stricte sans cookies, sans authentification et sans aucun traçage.",
      achievement2Title: "101 langues & 252 territoires :",
      achievement2Desc: "Le répertoire de crise ouvert le plus complet au monde pour réfugiés et groupes vulnérables.",
      achievement3Title: "Sécurité intégrée & Mode camouflage :",
      achievement3Desc: "Camouflage instantané en 1 clic pour protéger les victimes de violence domestique.",
      achievement4Title: "Faible bande passante & résilience hors ligne :",
      achievement4Desc: "Chargement en moins d'une seconde, même sur réseaux mobiles 2G/3G en zones de crise.",
      techStackTitle: "Technologies clés & Architecture :",
      visitLiveBtn: "Ouvrir Why You Matter (Plateforme en ligne)",
    },
    pillar2: {
      badge: "Pilier 02 • Systèmes d'entreprise",
      title: "Expériences & Réalisations Enterprise",
      subtitle: "Missions d'infrastructure dans les télécommunications maritimes, la banque, la logistique et l'associatif.",
      expandBtn: "Voir les 4 réalisations d'entreprise",
      collapseBtn: "Réduire les réalisations",
      projects: [
        {
          id: "diatyrnavia",
          title: "Prix Senior Friendly & Soutien IT de direction",
          company: "DIATYRNAVIA NGO",
          period: "2019 — 2026",
          type: "Technologies communautaires, Médias & Direction",
          icon: Users,
          description: "Assistant direct de la direction : gestion M365, formation numérique des seniors et réalisation vidéo.",
          highlights: [
            "Formation continue aux outils numériques pour l'équipe dirigeante.",
            "Production de supports vidéo et logistique d'événements.",
          ],
          tags: ["Support de direction", "M365", "Seniors", "Production vidéo"],
          badge: "🏆 Prix Senior Friendly 2023",
        },
        {
          id: "marlink",
          title: "Support Réseau Satellite Maritime & Starlink",
          company: "Marlink s.r.o.",
          period: "2025",
          type: "Réseaux satellite & entreprise Tier 2",
          icon: Radio,
          description: "Support technique de niveau 2 pour flottes maritimes mondiales sous SLA exigeants (VSAT et Starlink).",
          highlights: [
            "Dépannage des réseaux de bord et antennes satellites.",
            "Maintien d'une communication 24/7 en conditions maritimes difficiles.",
          ],
          tags: ["Réseaux satellite", "VSAT", "Starlink", "Zabbix", "Sécurité réseau"],
          badge: "🛰️ Connectivité hybride",
        },
        {
          id: "dpd",
          title: "Supervision logistique européenne & Tests API",
          company: "ForesServices / DPD",
          period: "2024 — 2025",
          type: "Infrastructure logistique & Validation API",
          icon: Server,
          description: "Supervision Zabbix (07:00 – 23:00) et tests API Insomnia pour DPD aux Pays-Bas, en Suisse, en Belgique et en Slovaquie.",
          highlights: [
            "Supervision en temps réel des serveurs et alertes.",
            "Validation systématique des flux API de colis.",
          ],
          tags: ["Supervision Zabbix", "Tests d'API", "Insomnia", "Haute disponibilité"],
          badge: "📦 Logistique européenne",
        },
        {
          id: "rcpc",
          title: "Terminaux bancaires & Transition vers l'Euro",
          company: "Regional Card Processing Centre",
          period: "2021 — 2023",
          type: "Technologies financières & Haute disponibilité",
          icon: Building2,
          description: "Paramétrage technique des terminaux de paiement et systèmes bancaires lors du passage à l'Euro en Croatie.",
          highlights: [
            "Configuration de paramètres critiques avec tolérance zéro panne.",
            "Gestion des bases de données Oracle SQL et MS SQL Server.",
          ],
          tags: ["Systèmes bancaires", "Transition Euro", "Oracle SQL", "MS SQL Server", "Zéro panne"],
          badge: "🏦 Infrastructure bancaire",
        },
      ],
    },
    pillar3: {
      badge: "Pilier 03 • Médias Créatifs",
      title: "Production Vidéo & Multimédia",
      subtitle: "Montage vidéo, communication visuelle et contenus pédagogiques rendant la technologie accessible.",
      card1Title: "Senior Friendly 2023 : Campagne multimédia primée",
      card1Badge: "🏆 Média Primé",
      card1Role: "Réalisation, caméra, montage & son",
      card1Desc: "Campagne vidéo complète et documentaire pour DIATYRNAVIA illustrant l'entraide envers les seniors.",
      card1Tags: ["Adobe Premiere Pro", "Étalonnage", "Mixage audio", "Documentaire"],
      card2Title: "Compétences numériques & Guides pédagogiques",
      card2Badge: "🎓 Série de vidéos éducatives",
      card2Role: "Créateur de contenu & formateur",
      card2Desc: "Tutoriels vidéo pas à pas pour accompagner débutants et seniors sur les outils informatiques.",
      card2Tags: ["Média éducatif", "Outils M365", "Accessibilité", "Guides visuels"],
      card3Title: "Architecture système & Démonstrations techniques",
      card3Badge: "💻 Démos Techniques",
      card3Role: "Production technique & voix off",
      card3Desc: "Présentations vidéo professionnelles clarifiant topologies réseaux et architectures logicielles.",
      card3Tags: ["Capture d'écran", "Démos systèmes", "Motion Graphics", "Voix off"],
    },
    cta: {
      title: "Un projet ou une idée en tête ?",
      subtitle: "Créons ensemble des technologies fiables et centrées sur l'humain avec rigueur et clarté.",
      contactBtn: "Me contacter par e-mail",
      aboutBtn: "Consulter mon CV complet",
    },
  },
  ar: {
    header: {
      badge: "معرض الأعمال والأثر",
      title: "مشاريعي الناجحة",
      description: "استعراض لحلول تكنولوجيا المعلومات للمؤسسات، منصات النفع العام العالمية، إنتاج الفيديو التعليمي، وتطبيقات الويب الحديثة.",
    },
    tabs: {
      all: "جميع المحاور",
      web: "منصات الويب",
      work: "العمل والمؤسسات",
      video: "إنتاج الفيديو",
    },
    pillar1: {
      badge: "المحور 01 • منصة الويب الرئيسية",
      title: "منصات الويب والابتكار المدني",
      subtitle: "أدوات رقمية مستقلة وبرمجيات مفتوحة المصدر مصممة للانتشار العالمي والموثوقية العالية والأثر الإنساني الحقيقي.",
      featuredBadge: "المنصة الرئيسية",
      nomineeBadge: "🏆 مرشح لجائزة WSA 2026",
      languagesBadge: "101 لغة • 252 منطقة",
      platformTitle: "Why You Matter: منصة مفتوحة للدعم النفسي والمدني",
      role: "المؤسس والمهندس الرئيسي",
      story: "تم تطويرها تحت شعار „حيث يلتقي المنطق مع الإنسانية“. شريان حياة رقمي مفتوح بدون تتبع يقدم الإسعافات النفسية الأولية وخطوط المساعدة المعتمدة في 252 دولة بـ 101 لغة.",
      achievementsTitle: "أبرز الإنجازات التقنية والإنسانية:",
      achievement1Title: "100% غير ربحية وبدون جمع بيانات:",
      achievement1Desc: "بنية صارمة تحمي الخصوصية بالكامل: بدون ملفات تعريف ارتباط، بدون تسجيل، وبدون جدران دفع.",
      achievement2Title: "101 لغة و 252 دولة وإقليماً:",
      achievement2Desc: "أكبر دليل مفتوح لخطوط المساعدة في العالم لخدمة اللاجئين والمهاجرين والفئات المهمشة.",
      achievement3Title: "الأمان بالتصميم ووضع التمويه:",
      achievement3Desc: "تمويه فوري للشاشة بنقرة واحدة لحماية ضحايا العنف المنزلي، مع تمارين تنفس تفاعلية 4-7-8.",
      achievement4Title: "سرعة فائقة واستهلاك بيانات منخفض:",
      achievement4Desc: "تحميل في أقل من ثانية واحدة عالمياً، مع عمل موثوق على شبكات 2G/3G في مناطق الأزمات.",
      techStackTitle: "التقنيات المستخدمة والبنية المعمارية:",
      visitLiveBtn: "فتح منصة Why You Matter (مباشر)",
    },
    pillar2: {
      badge: "المحور 02 • أنظمة المؤسسات",
      title: "إنجازات العمل والمؤسسات",
      subtitle: "دعم البنية التحتية والشبكات في قطاعات الاتصالات الفضائية، البنوك، الخدمات اللوجستية، والمنظمات غير الربحية.",
      expandBtn: "عرض جميع الإنجازات الأربعة",
      collapseBtn: "طي الإنجازات",
      projects: [
        {
          id: "diatyrnavia",
          title: "جائزة Senior Friendly ودعم الإدارة تقنياً",
          company: "DIATYRNAVIA NGO",
          period: "2019 — 2026",
          type: "تقنيات المجتمع، الإعلام والمساعدة التنفيذية",
          icon: Users,
          description: "مساعد تقني وتنفيذي مباشر للرئيسة: إدارة M365، تدريب كبار السن رقمياً وإنتاج الفيديو الترويجي.",
          highlights: [
            "تدريب رقمي مستمر ودعم تقني للقيادة في العمليات اليومية.",
            "إنتاج وسائط متعددة وإدارة اللوجستيات التقنية للفعاليات.",
          ],
          tags: ["دعم القيادة", "M365", "كبار السن", "إنتاج الفيديو"],
          badge: "🏆 جائزة Senior Friendly 2023",
        },
        {
          id: "marlink",
          title: "دعم شبكات الأقمار الصناعية البحرية و Starlink",
          company: "Marlink s.r.o.",
          period: "2025",
          type: "شبكات الأقمار الصناعية والمؤسسات Tier 2",
          icon: Radio,
          description: "دعم فني من المستوى الثاني لأساطيل الملاحة العالمية تحت اتفاقيات SLA صارمة (VSAT و Starlink).",
          highlights: [
            "استكشاف أخطاء شبكات السفن وهوائيات الأقمار الصناعية وإصلاحها.",
            "ضمان استمرارية الاتصالات على مدار الساعة في الظروف البحرية الصعبة.",
          ],
          tags: ["شبكات فضائية", "VSAT", "Starlink", "Zabbix", "أمان الشبكات"],
          badge: "🛰️ اتصالات هجينة",
        },
        {
          id: "dpd",
          title: "مراقبة الخدمات اللوجستية الأوروبية واختبار API",
          company: "ForesServices / DPD",
          period: "2024 — 2025",
          type: "البنية التحتية اللوجستية واختبار واجهات البرمجة",
          icon: Server,
          description: "مراقبة الأنظمة عبر Zabbix (من 07:00 إلى 23:00) واختبار API لشركة DPD في هولندا، سويسرا، بلجيكا، وسلوفاكيا.",
          highlights: [
            "مراقبة مباشرة لصحة الخوادم وتنبيهات الطوارئ مع التصعيد السريع.",
            "التحقق من بيانات API لضمان تدفق الطرود دون انقطاع.",
          ],
          tags: ["مراقبة Zabbix", "اختبار API", "Insomnia", "توافرية عالية"],
          badge: "📦 الخدمات اللوجستية الأوروبية",
        },
        {
          id: "rcpc",
          title: "أجهزة الدفع المصرفية والانتقال إلى اليورو",
          company: "Regional Card Processing Centre",
          period: "2021 — 2023",
          type: "التكنولوجيا المالية والتوافرية العالية",
          icon: Building2,
          description: "تكوين معلمات أجهزة الدفع والأنظمة المصرفية أثناء تحول العملة في كرواتيا واستحواذ البنوك.",
          highlights: [
            "تكوين المعلمات المصرفية الحرجة دون أي انقطاع في الخدمة.",
            "إدارة قواعد بيانات Oracle SQL و MS SQL Server وفق معايير الامتثال.",
          ],
          tags: ["أنظمة مصرفية", "التحول لليورو", "Oracle SQL", "MS SQL Server", "استمرارية كاملة"],
          badge: "🏦 البنية التحتية المصرفية",
        },
      ],
    },
    pillar3: {
      badge: "المحور 03 • الوسائط الإبداعية",
      title: "إنتاج الفيديو والوسائط المتعددة",
      subtitle: "صناعة المحتوى، تحرير الفيديو، والمواد التعليمية التي تبسط التكنولوجيا وتخدم المجتمع.",
      card1Title: "Senior Friendly 2023: حملة إعلامية مجتمعية فائزة",
      card1Badge: "🏆 إعلام حائز على جوائز",
      card1Role: "إخراج، تصوير، مونتاج وهندسة صوت",
      card1Desc: "حملة فيديو وثائقية كاملة لمنظمة DIATYRNAVIA تسلط الضوء على رعاية مرضى السكري من كبار السن.",
      card1Tags: ["Adobe Premiere Pro", "تصحيح الألوان", "هندسة الصوت", "وثائقي"],
      card2Title: "محو الأمية الرقمية والتعليم التقني",
      card2Badge: "🎓 سلسلة فيديوهات تعليمية",
      card2Role: "صانع محتوى ومدرب تقني",
      card2Desc: "شروحات عملية خطوة بخطوة لجعل الأدوات الرقمية سهلة وفي متناول الجميع.",
      card2Tags: ["إعلام تعليمي", "مهام M365", "سهولة الوصول", "أدلة بصرية"],
      card3Title: "الهندسة التقنية والعروض التوضيحية للأنظمة",
      card3Badge: "💻 عروض تقنية",
      card3Role: "منتج تقني وتعليق صوتي",
      card3Desc: "شروحات فيديو احترافية توضح هياكل الشبكات المعقدة وبنية الأنظمة البرمجية.",
      card3Tags: ["تسجيل الشاشة", "شروحات الأنظمة", "موشن جرافيك", "تعليق صوتي"],
    },
    cta: {
      title: "هل لديك فكرة أو مشروع تود تنفيذه؟",
      subtitle: "دعنا نبني معاً تكنولوجيا موثوقة تخدم الناس بوضوح وتعاطف ودقة تقنية.",
      contactBtn: "تواصل معي عبر البريد",
      aboutBtn: "عرض السيرة الذاتية الكاملة",
    },
  },
};

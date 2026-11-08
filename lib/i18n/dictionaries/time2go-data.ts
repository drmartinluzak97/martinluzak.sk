import { PortfolioLocale } from "../types";

export const TIME2GO_URL = "https://time2go.martinluzak.sk";
export const TIME2GO_REPO = "https://github.com/drmartinluzak97/time-2-go";

export interface LocalizedTime2GoData {
  badge: string;
  title: string;
  tagline: string;
  description: string;
  featuresTitle: string;
  features: string[];
  techTitle: string;
  dataNote: string;
  builtNote: string;
  openAppBtn: string;
  detailsBtn: string;
  codeBtn: string;
  placeholderTitle: string;
  placeholderText: string;
  backBtn: string;
}

export const TIME2GO_DATA: Record<PortfolioLocale, LocalizedTime2GoData> = {
  en: {
    badge: "New App • 2026",
    title: "time2go",
    tagline: "Public transport journey planner for Central Europe",
    description:
      "Find train, bus and city transport connections across Slovakia, Czechia, Hungary, Poland and Austria in one place — including cross-border trips with transfers. Instead of switching between each operator's website, time2go shows the whole journey at once, e.g. from Bratislava to Vienna by city bus, train and metro.",
    featuresTitle: "What it can do:",
    features: [
      "Connections with transfers, including across borders",
      "Route via a specific stop with adjustable transfer time",
      "Limit the number of transfers or search direct connections only",
      "Choose transport modes: train, bus, tram, metro, ferry",
      "Departure boards with real-time delays where available",
      "Route shown on a map that can be hidden",
      "Six languages and shareable search links",
    ],
    techTitle: "Technologies:",
    dataNote: "Data: open timetables from operators across Europe via the community project Transitous, running on the open-source MOTIS routing engine.",
    builtNote: "Built in 2026 in collaboration with the AI assistant Claude.",
    openAppBtn: "Open time2go",
    detailsBtn: "Details",
    codeBtn: "Source code",
    placeholderTitle: "time2go",
    placeholderText: "This page is being prepared. In the meantime, you can open the app directly.",
    backBtn: "Back to things I've built",
  },
  sk: {
    badge: "Nová appka • 2026",
    title: "time2go",
    tagline: "Cestovné poriadky pre strednú Európu",
    description:
      "Vyhľadávač spojení vlakom, autobusom a MHD na Slovensku, v Česku, Maďarsku, Poľsku a Rakúsku. Namiesto prepínania medzi stránkami jednotlivých dopravcov ukáže celú cestu naraz, napríklad z Bratislavy do Viedne mestským autobusom, vlakom a metrom.",
    featuresTitle: "Čo vie:",
    features: [
      "Vyhľadať spojenie s prestupmi, aj cez hranice",
      "Trasu cez konkrétnu zastávku s nastaviteľným časom na prestup",
      "Obmedziť počet prestupov alebo hľadať len priame spoje",
      "Vybrať druh dopravy: vlak, autobus, električka, metro, loď",
      "Odchody zo zastávky s meškaniami v reálnom čase, kde sú dostupné",
      "Trasu na mape, ktorú sa dá aj skryť",
      "Šesť jazykov a zdieľanie vyhľadávania cez odkaz",
    ],
    techTitle: "Technológie:",
    dataNote: "Dáta: otvorené cestovné poriadky dopravcov z celej Európy cez komunitný projekt Transitous, ktorý beží na open-source vyhľadávači MOTIS.",
    builtNote: "Projekt som vytvoril v roku 2026 v spolupráci s AI asistentom Claude.",
    openAppBtn: "Otvoriť time2go",
    detailsBtn: "Detail",
    codeBtn: "Zdrojový kód",
    placeholderTitle: "time2go",
    placeholderText: "Táto stránka sa pripravuje. Zatiaľ môžeš aplikáciu otvoriť priamo.",
    backBtn: "Späť na čo som vytvoril",
  },
  de: {
    badge: "Neue App • 2026",
    title: "time2go",
    tagline: "Fahrplanauskunft für Mitteleuropa",
    description:
      "Verbindungen mit Zug, Bus und Nahverkehr in der Slowakei, Tschechien, Ungarn, Polen und Österreich an einem Ort – auch grenzüberschreitend mit Umstiegen. Statt zwischen den Websites einzelner Verkehrsunternehmen zu wechseln, zeigt time2go die ganze Reise auf einmal, z. B. von Bratislava nach Wien mit Stadtbus, Zug und U-Bahn.",
    featuresTitle: "Was die App kann:",
    features: [
      "Verbindungen mit Umstiegen, auch über Grenzen hinweg",
      "Route über eine bestimmte Haltestelle mit einstellbarer Umstiegszeit",
      "Anzahl der Umstiege begrenzen oder nur Direktverbindungen suchen",
      "Verkehrsmittel wählen: Zug, Bus, Straßenbahn, U-Bahn, Schiff",
      "Abfahrtstafeln mit Echtzeit-Verspätungen, wo verfügbar",
      "Route auf einer ausblendbaren Karte",
      "Sechs Sprachen und teilbare Suchlinks",
    ],
    techTitle: "Technologien:",
    dataNote: "Daten: offene Fahrpläne europäischer Verkehrsunternehmen über das Community-Projekt Transitous auf Basis der Open-Source-Routing-Engine MOTIS.",
    builtNote: "2026 in Zusammenarbeit mit dem KI-Assistenten Claude entwickelt.",
    openAppBtn: "time2go öffnen",
    detailsBtn: "Details",
    codeBtn: "Quellcode",
    placeholderTitle: "time2go",
    placeholderText: "Diese Seite wird gerade vorbereitet. Bis dahin kannst du die App direkt öffnen.",
    backBtn: "Zurück zu was ich gebaut habe",
  },
  ja: {
    badge: "新しいアプリ • 2026",
    title: "time2go",
    tagline: "中央ヨーロッパの公共交通乗換案内",
    description:
      "スロバキア、チェコ、ハンガリー、ポーランド、オーストリアの鉄道・バス・市内交通の経路を一か所で検索できます。国境を越える乗り換えにも対応。各事業者のサイトを行き来せずに、例えばブラチスラバからウィーンまで市内バス・鉄道・地下鉄の全行程を一度に表示します。",
    featuresTitle: "主な機能:",
    features: [
      "国境を越える乗り換え経路の検索",
      "経由停留所と乗り換え時間の指定",
      "乗り換え回数の制限や直通のみの検索",
      "交通手段の選択：鉄道、バス、トラム、地下鉄、船",
      "リアルタイム遅延情報付きの発車案内（対応地域のみ）",
      "非表示にもできる地図上のルート表示",
      "6言語対応と検索結果の共有リンク",
    ],
    techTitle: "使用技術:",
    dataNote: "データ: コミュニティプロジェクト Transitous を通じたヨーロッパ各地の事業者のオープン時刻表（オープンソースの経路検索エンジン MOTIS を使用）。",
    builtNote: "2026年、AIアシスタント Claude との協働で開発。",
    openAppBtn: "time2go を開く",
    detailsBtn: "詳細",
    codeBtn: "ソースコード",
    placeholderTitle: "time2go",
    placeholderText: "このページは準備中です。アプリは直接開くことができます。",
    backBtn: "作ったものに戻る",
  },
  fr: {
    badge: "Nouvelle app • 2026",
    title: "time2go",
    tagline: "Calculateur d'itinéraires en transports pour l'Europe centrale",
    description:
      "Trouvez des trajets en train, bus et transports urbains en Slovaquie, Tchéquie, Hongrie, Pologne et Autriche au même endroit, y compris des trajets transfrontaliers avec correspondances. Au lieu de passer d'un site d'opérateur à l'autre, time2go affiche tout le trajet d'un coup, par exemple de Bratislava à Vienne en bus urbain, train et métro.",
    featuresTitle: "Ce qu'elle permet :",
    features: [
      "Trajets avec correspondances, y compris transfrontaliers",
      "Itinéraire via un arrêt précis avec temps de correspondance réglable",
      "Limiter le nombre de correspondances ou ne chercher que les trajets directs",
      "Choisir le mode : train, bus, tram, métro, bateau",
      "Tableaux de départs avec retards en temps réel si disponibles",
      "Itinéraire sur une carte masquable",
      "Six langues et liens de recherche partageables",
    ],
    techTitle: "Technologies :",
    dataNote: "Données : horaires ouverts d'opérateurs de toute l'Europe via le projet communautaire Transitous, basé sur le moteur de calcul open source MOTIS.",
    builtNote: "Créé en 2026 en collaboration avec l'assistant IA Claude.",
    openAppBtn: "Ouvrir time2go",
    detailsBtn: "Détails",
    codeBtn: "Code source",
    placeholderTitle: "time2go",
    placeholderText: "Cette page est en préparation. En attendant, vous pouvez ouvrir l'application directement.",
    backBtn: "Retour à mes réalisations",
  },
  ar: {
    badge: "تطبيق جديد • 2026",
    title: "time2go",
    tagline: "مخطط رحلات النقل العام في أوروبا الوسطى",
    description:
      "ابحث عن رحلات القطار والحافلات والنقل الحضري في سلوفاكيا والتشيك والمجر وبولندا والنمسا في مكان واحد، بما في ذلك الرحلات العابرة للحدود مع التبديل. بدلاً من التنقل بين مواقع كل شركة نقل، يعرض time2go الرحلة كاملة دفعة واحدة، مثلاً من براتيسلافا إلى فيينا بالحافلة والقطار والمترو.",
    featuresTitle: "ما يمكنه فعله:",
    features: [
      "رحلات مع تبديل، بما في ذلك عبر الحدود",
      "مسار عبر محطة محددة مع وقت تبديل قابل للضبط",
      "تحديد عدد مرات التبديل أو البحث عن رحلات مباشرة فقط",
      "اختيار وسيلة النقل: قطار، حافلة، ترام، مترو، عبّارة",
      "لوحات المغادرة مع التأخيرات الفورية حيثما تتوفر",
      "عرض المسار على خريطة يمكن إخفاؤها",
      "ست لغات وروابط بحث قابلة للمشاركة",
    ],
    techTitle: "التقنيات:",
    dataNote: "البيانات: جداول مواعيد مفتوحة من شركات النقل في أوروبا عبر مشروع Transitous المجتمعي القائم على محرك التوجيه مفتوح المصدر MOTIS.",
    builtNote: "تم إنشاؤه في عام 2026 بالتعاون مع مساعد الذكاء الاصطناعي Claude.",
    openAppBtn: "افتح time2go",
    detailsBtn: "التفاصيل",
    codeBtn: "الشيفرة المصدرية",
    placeholderTitle: "time2go",
    placeholderText: "هذه الصفحة قيد الإعداد. يمكنك في الأثناء فتح التطبيق مباشرة.",
    backBtn: "العودة إلى ما صنعته",
  },
};

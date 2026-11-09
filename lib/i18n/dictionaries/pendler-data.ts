import { PortfolioLocale } from "../types";

export const PENDLER_URL = "https://pendler.martinluzak.sk";

export interface PendlerGroup {
  title: string;
  items: string[];
}

export interface LocalizedPendlerData {
  badge: string;
  title: string;
  tagline: string;
  description: string;
  countriesLabel: string;
  groups: PendlerGroup[];
  progressTitle: string;
  progress: string[];
  featuresTitle: string;
  highlights: string[];
  techTitle: string;
  dataNote: string;
  privacyNote: string;
  builtNote: string;
  openAppBtn: string;
  detailsBtn: string;
  backBtn: string;
}

export const PENDLER_DATA: Record<PortfolioLocale, LocalizedPendlerData> = {
  sk: {
    badge: "Nová appka • 2026",
    title: "Pendler",
    tagline: "Práca a život medzi Slovenskom a susedmi",
    description:
      "Sprievodca pre ľudí, ktorí dochádzajú za prácou do Rakúska, Česka, Maďarska, Poľska či na Ukrajinu, bývajú za hranicou a pracujú na Slovensku, alebo sa sťahujú. Všetko na jednom mieste namiesto desiatich appiek: dane, poistenie, úrady, mzdy, termíny aj komunita.",
    countriesLabel: "Pre 🇨🇿 Česko · 🇦🇹 Rakúsko · 🇭🇺 Maďarsko · 🇵🇱 Poľsko · 🇺🇦 Ukrajinu",
    groups: [
      {
        title: "Sprievodca a úrady",
        items: [
          "Sprievodca pre každú krajinu: dane, sociálne a zdravotné poistenie, pobyt, diaľničné známky, hraničné priechody",
          "Osobný checklist podľa situácie – dochádzam, bývam za hranicou, sťahujem sa",
          "Úrady v SR aj u susedov: kedy ísť, čo si priniesť, čo vybavíš online",
          "Pripomienky termínov (daňové priznania, známky, hlásenie pobytu) s exportom do kalendára",
          "Sviatky doma a v práci vedľa seba, predĺžené víkendy",
          "„Čo sa mení“ – nové mzdy, dane a pravidlá so zdrojmi",
        ],
      },
      {
        title: "Peniaze",
        items: [
          "Kalkulačka čistej mzdy pre Rakúsko, Česko, Maďarsko a Slovensko (2026 aj 2027)",
          "Kalkulačka dochádzania – oplatí sa práca za hranicou?",
          "Najlacnejšie palivo v Rakúsku podľa oficiálneho cenníka",
          "Menová kalkulačka a grafy kurzov EUR, USD, CZK, HUF, PLN, zlata, striebra a bitcoinu",
        ],
      },
      {
        title: "Ľudia a miesta",
        items: [
          "Lekári, s ktorými sa dohovoríš po slovensky",
          "Pracovné agentúry overené v oficiálnych registroch a varovné signály podvodov",
          "Slovenské komunity a podujatia v susedných krajinách",
          "Farmári, trhoviská a mliečne automaty na mape",
          "Frázy v nemčine, maďarčine, poľštine a ukrajinčine s čítaním nahlas",
          "Prepojenie s time2go – spoje vlakom a autobusom na pendlerských trasách",
        ],
      },
    ],
    progressTitle: "Rozpracované",
    progress: [
      "Poradňa – otázky a odpovede pendlerov s moderovaním (pripravuje sa spustenie)",
      "Napĺňanie zoznamov lekárov, agentúr a komunít – návrhy sú vítané priamo v appke",
    ],
    featuresTitle: "V skratke:",
    highlights: ["Bez registrácie – osobné údaje ostávajú v telefóne", "Funguje ako appka na ploche aj offline", "Každý údaj s odkazom na oficiálny zdroj"],
    techTitle: "Technológie:",
    dataNote:
      "Dáta: Európska centrálna banka, Národná banka Ukrajiny, E-Control (ceny palív), OpenStreetMap a oficiálne stránky úradov.",
    privacyNote: "Pendler poskytuje všeobecné informácie, nie právne ani daňové poradenstvo.",
    builtNote: "Vytvorené v roku 2026 v spolupráci s AI asistentom Claude.",
    openAppBtn: "Otvoriť Pendler",
    detailsBtn: "Čo všetko vie",
    backBtn: "Späť na appky",
  },
  en: {
    badge: "New App • 2026",
    title: "Pendler",
    tagline: "Work and life between Slovakia and its neighbours",
    description:
      "A guide for people who commute to work in Austria, Czechia, Hungary, Poland or Ukraine, live across the border and work in Slovakia, or are moving. Everything in one place instead of ten apps: taxes, insurance, offices, wages, deadlines and community.",
    countriesLabel: "For 🇨🇿 Czechia · 🇦🇹 Austria · 🇭🇺 Hungary · 🇵🇱 Poland · 🇺🇦 Ukraine",
    groups: [
      {
        title: "Guide and offices",
        items: [
          "Country guides: taxes, social and health insurance, residence, motorway vignettes, border crossings",
          "Personal checklist for your situation – commuting, living abroad, moving",
          "Offices in Slovakia and neighbouring countries: when to go, what to bring, what can be done online",
          "Deadline reminders (tax returns, vignettes, residence registration) with calendar export",
          "Public holidays at home and at work side by side, long weekends",
          "“What’s changing” – new wages, taxes and rules with sources",
        ],
      },
      {
        title: "Money",
        items: [
          "Net salary calculator for Austria, Czechia, Hungary and Slovakia (2026 and 2027)",
          "Commute calculator – is a job across the border worth it?",
          "Cheapest fuel in Austria from the official price register",
          "Currency converter and charts for EUR, USD, CZK, HUF, PLN, gold, silver and bitcoin",
        ],
      },
      {
        title: "People and places",
        items: [
          "Doctors who speak Slovak",
          "Job agencies verified in official registers, plus scam warning signs",
          "Slovak communities and events in neighbouring countries",
          "Farmers, markets and milk vending machines on a map",
          "Phrases in German, Hungarian, Polish and Ukrainian with read-aloud",
          "Linked with time2go – train and bus connections on commuter routes",
        ],
      },
    ],
    progressTitle: "In progress",
    progress: [
      "Q&A forum – commuters’ questions and answers with moderation (launch in preparation)",
      "Filling the lists of doctors, agencies and communities – suggestions welcome in the app",
    ],
    featuresTitle: "In short:",
    highlights: ["No sign-up – personal data stays on your phone", "Installable as an app, works offline", "Every fact links to an official source"],
    techTitle: "Technologies:",
    dataNote: "Data: European Central Bank, National Bank of Ukraine, E-Control (fuel prices), OpenStreetMap and official government websites.",
    privacyNote: "Pendler provides general information, not legal or tax advice.",
    builtNote: "Built in 2026 in collaboration with the AI assistant Claude.",
    openAppBtn: "Open Pendler",
    detailsBtn: "All features",
    backBtn: "Back to things I've built",
  },
  de: {
    badge: "Neue App • 2026",
    title: "Pendler",
    tagline: "Arbeiten und Leben zwischen der Slowakei und ihren Nachbarn",
    description:
      "Ein Wegweiser für alle, die nach Österreich, Tschechien, Ungarn, Polen oder in die Ukraine pendeln, jenseits der Grenze wohnen und in der Slowakei arbeiten oder umziehen. Alles an einem Ort statt zehn Apps: Steuern, Versicherung, Behörden, Löhne, Fristen und Community.",
    countriesLabel: "Für 🇨🇿 Tschechien · 🇦🇹 Österreich · 🇭🇺 Ungarn · 🇵🇱 Polen · 🇺🇦 Ukraine",
    groups: [
      {
        title: "Wegweiser und Behörden",
        items: [
          "Länderleitfäden: Steuern, Sozial- und Krankenversicherung, Aufenthalt, Vignetten, Grenzübergänge",
          "Persönliche Checkliste je nach Situation – pendeln, im Ausland wohnen, umziehen",
          "Behörden in der Slowakei und den Nachbarländern: wann, was mitnehmen, was online geht",
          "Fristen-Erinnerungen (Steuererklärung, Vignette, Meldezettel) mit Kalenderexport",
          "Feiertage zu Hause und am Arbeitsort im Vergleich, lange Wochenenden",
          "„Was sich ändert“ – neue Löhne, Steuern und Regeln mit Quellen",
        ],
      },
      {
        title: "Geld",
        items: [
          "Netto-Lohnrechner für Österreich, Tschechien, Ungarn und die Slowakei (2026 und 2027)",
          "Pendelrechner – lohnt sich der Job jenseits der Grenze?",
          "Günstigster Treibstoff in Österreich laut offiziellem Spritpreisrechner",
          "Währungsrechner und Charts für EUR, USD, CZK, HUF, PLN, Gold, Silber und Bitcoin",
        ],
      },
      {
        title: "Menschen und Orte",
        items: [
          "Ärztinnen und Ärzte, die Slowakisch sprechen",
          "In offiziellen Registern geprüfte Personalagenturen und Warnsignale für Betrug",
          "Slowakische Communities und Veranstaltungen in den Nachbarländern",
          "Bauernläden, Märkte und Milchautomaten auf der Karte",
          "Sätze auf Deutsch, Ungarisch, Polnisch und Ukrainisch mit Vorlesefunktion",
          "Verknüpft mit time2go – Zug- und Busverbindungen auf Pendlerstrecken",
        ],
      },
    ],
    progressTitle: "In Arbeit",
    progress: [
      "Ratgeber-Forum – Fragen und Antworten von Pendlern mit Moderation (Start in Vorbereitung)",
      "Listen von Ärzten, Agenturen und Communities werden befüllt – Vorschläge direkt in der App",
    ],
    featuresTitle: "Kurz gesagt:",
    highlights: ["Ohne Registrierung – persönliche Daten bleiben am Handy", "Als App installierbar, funktioniert offline", "Jede Angabe mit Link zur offiziellen Quelle"],
    techTitle: "Technologien:",
    dataNote: "Daten: Europäische Zentralbank, Ukrainische Nationalbank, E-Control (Spritpreise), OpenStreetMap und offizielle Behördenseiten.",
    privacyNote: "Pendler bietet allgemeine Informationen, keine Rechts- oder Steuerberatung.",
    builtNote: "2026 in Zusammenarbeit mit dem KI-Assistenten Claude entwickelt.",
    openAppBtn: "Pendler öffnen",
    detailsBtn: "Alle Funktionen",
    backBtn: "Zurück zu meinen Projekten",
  },
  ja: {
    badge: "新しいアプリ • 2026",
    title: "Pendler",
    tagline: "スロバキアと隣国のあいだで働き、暮らす人のために",
    description:
      "オーストリア、チェコ、ハンガリー、ポーランド、ウクライナへ通勤する人、国境の向こうに住みスロバキアで働く人、引っ越しを考えている人のためのガイドです。税金、保険、役所、給与、期限、コミュニティを10個のアプリではなく1か所で。",
    countriesLabel: "対象国: 🇨🇿 チェコ · 🇦🇹 オーストリア · 🇭🇺 ハンガリー · 🇵🇱 ポーランド · 🇺🇦 ウクライナ",
    groups: [
      {
        title: "ガイドと役所",
        items: [
          "国別ガイド：税金、社会保険・健康保険、滞在手続き、高速道路ビニエット、国境検問所",
          "状況に合わせた個人用チェックリスト（通勤・国外居住・引っ越し）",
          "スロバキアと隣国の役所：いつ行くか、持ち物、オンラインでできること",
          "期限リマインダー（確定申告、ビニエット、住民登録）とカレンダー書き出し",
          "自宅と勤務地の祝日を並べて比較、連休のヒント",
          "「変更点」– 新しい最低賃金・税金・ルールを出典つきで",
        ],
      },
      {
        title: "お金",
        items: [
          "オーストリア・チェコ・ハンガリー・スロバキアの手取り計算（2026年・2027年）",
          "通勤コスト計算 – 国境を越えて働く価値はあるか",
          "公式価格データによるオーストリアの最安ガソリンスタンド",
          "通貨換算と、EUR・USD・CZK・HUF・PLN・金・銀・ビットコインのチャート",
        ],
      },
      {
        title: "人と場所",
        items: [
          "スロバキア語が通じる医師",
          "公的登録で確認した人材派遣会社と詐欺の見分け方",
          "隣国のスロバキア人コミュニティとイベント",
          "農家直売所・市場・牛乳自販機の地図",
          "ドイツ語・ハンガリー語・ポーランド語・ウクライナ語のフレーズ（読み上げ付き）",
          "time2go と連携 – 通勤ルートの列車・バスの経路検索",
        ],
      },
    ],
    progressTitle: "開発中",
    progress: [
      "Q&Aフォーラム – 通勤者どうしの質問と回答（モデレーション付き、公開準備中）",
      "医師・派遣会社・コミュニティのリストを拡充中 – アプリから提案できます",
    ],
    featuresTitle: "ポイント:",
    highlights: ["登録不要 – 個人データは端末内に保存", "アプリとしてインストール可能、オフライン対応", "すべての情報に公式の出典リンク"],
    techTitle: "使用技術:",
    dataNote: "データ: 欧州中央銀行、ウクライナ国立銀行、E-Control（燃料価格）、OpenStreetMap、各国の公式サイト。",
    privacyNote: "Pendler は一般的な情報を提供するもので、法律・税務の助言ではありません。",
    builtNote: "2026年にAIアシスタント Claude と協力して開発しました。",
    openAppBtn: "Pendler を開く",
    detailsBtn: "機能一覧",
    backBtn: "作ったものに戻る",
  },
  fr: {
    badge: "Nouvelle app • 2026",
    title: "Pendler",
    tagline: "Travailler et vivre entre la Slovaquie et ses voisins",
    description:
      "Un guide pour celles et ceux qui font la navette vers l’Autriche, la Tchéquie, la Hongrie, la Pologne ou l’Ukraine, vivent de l’autre côté de la frontière et travaillent en Slovaquie, ou déménagent. Tout au même endroit au lieu de dix applis : impôts, assurances, administrations, salaires, échéances et communauté.",
    countriesLabel: "Pour 🇨🇿 Tchéquie · 🇦🇹 Autriche · 🇭🇺 Hongrie · 🇵🇱 Pologne · 🇺🇦 Ukraine",
    groups: [
      {
        title: "Guide et administrations",
        items: [
          "Guides par pays : impôts, sécurité sociale et assurance maladie, séjour, vignettes, postes-frontières",
          "Liste de tâches personnelle selon votre situation – navette, vie à l’étranger, déménagement",
          "Administrations en Slovaquie et chez les voisins : quand y aller, quoi apporter, quoi faire en ligne",
          "Rappels d’échéances (déclarations, vignettes, déclaration de domicile) avec export calendrier",
          "Jours fériés à la maison et au travail côte à côte, longs week-ends",
          "« Ce qui change » – nouveaux salaires, impôts et règles avec sources",
        ],
      },
      {
        title: "Argent",
        items: [
          "Calculateur de salaire net pour l’Autriche, la Tchéquie, la Hongrie et la Slovaquie (2026 et 2027)",
          "Calculateur de trajet – un emploi de l’autre côté de la frontière vaut-il le coup ?",
          "Carburant le moins cher en Autriche selon le registre officiel des prix",
          "Convertisseur de devises et graphiques EUR, USD, CZK, HUF, PLN, or, argent et bitcoin",
        ],
      },
      {
        title: "Personnes et lieux",
        items: [
          "Médecins qui parlent slovaque",
          "Agences d’emploi vérifiées dans les registres officiels et signaux d’arnaque",
          "Communautés et événements slovaques dans les pays voisins",
          "Producteurs, marchés et distributeurs de lait sur une carte",
          "Phrases en allemand, hongrois, polonais et ukrainien avec lecture à voix haute",
          "Lié à time2go – trains et bus sur les trajets des frontaliers",
        ],
      },
    ],
    progressTitle: "En cours",
    progress: [
      "Forum de questions-réponses entre frontaliers, avec modération (lancement en préparation)",
      "Enrichissement des listes de médecins, d’agences et de communautés – suggestions bienvenues dans l’app",
    ],
    featuresTitle: "En bref :",
    highlights: ["Sans inscription – vos données restent sur votre téléphone", "Installable comme une app, fonctionne hors ligne", "Chaque information renvoie à une source officielle"],
    techTitle: "Technologies :",
    dataNote: "Données : Banque centrale européenne, Banque nationale d’Ukraine, E-Control (prix des carburants), OpenStreetMap et sites officiels des administrations.",
    privacyNote: "Pendler fournit des informations générales, pas de conseil juridique ou fiscal.",
    builtNote: "Créé en 2026 en collaboration avec l’assistant IA Claude.",
    openAppBtn: "Ouvrir Pendler",
    detailsBtn: "Toutes les fonctions",
    backBtn: "Retour à mes créations",
  },
  ar: {
    badge: "تطبيق جديد • 2026",
    title: "Pendler",
    tagline: "العمل والحياة بين سلوفاكيا وجيرانها",
    description:
      "دليل لمن يتنقلون يوميًا للعمل في النمسا أو التشيك أو المجر أو بولندا أو أوكرانيا، أو يعيشون عبر الحدود ويعملون في سلوفاكيا، أو ينتقلون للسكن. كل شيء في مكان واحد بدلًا من عشرة تطبيقات: الضرائب والتأمين والدوائر الحكومية والأجور والمواعيد والمجتمع.",
    countriesLabel: "يشمل 🇨🇿 التشيك · 🇦🇹 النمسا · 🇭🇺 المجر · 🇵🇱 بولندا · 🇺🇦 أوكرانيا",
    groups: [
      {
        title: "الدليل والدوائر الحكومية",
        items: [
          "أدلة لكل دولة: الضرائب، التأمين الاجتماعي والصحي، الإقامة، ملصقات الطرق السريعة، المعابر الحدودية",
          "قائمة مهام شخصية حسب وضعك – تنقل يومي، سكن في الخارج، انتقال",
          "الدوائر الحكومية في سلوفاكيا والدول المجاورة: متى تذهب، ماذا تحضر، وما يمكن إنجازه عبر الإنترنت",
          "تذكيرات بالمواعيد (الإقرارات الضريبية، الملصقات، تسجيل الإقامة) مع التصدير إلى التقويم",
          "العطل الرسمية في بلد السكن وبلد العمل جنبًا إلى جنب، وعطلات نهاية الأسبوع الطويلة",
          "«ما الذي يتغير» – أجور وضرائب وقواعد جديدة مع المصادر",
        ],
      },
      {
        title: "المال",
        items: [
          "حاسبة صافي الراتب للنمسا والتشيك والمجر وسلوفاكيا (2026 و2027)",
          "حاسبة التنقل – هل يستحق العمل عبر الحدود؟",
          "أرخص وقود في النمسا وفق سجل الأسعار الرسمي",
          "محوّل العملات ورسوم بيانية لليورو والدولار والكرونة والفورنت والزلوتي والذهب والفضة والبيتكوين",
        ],
      },
      {
        title: "أشخاص وأماكن",
        items: [
          "أطباء يتحدثون السلوفاكية",
          "وكالات توظيف موثقة في السجلات الرسمية وعلامات التحذير من الاحتيال",
          "المجتمعات والفعاليات السلوفاكية في الدول المجاورة",
          "المزارع والأسواق وآلات بيع الحليب على الخريطة",
          "عبارات بالألمانية والمجرية والبولندية والأوكرانية مع القراءة الصوتية",
          "مرتبط بتطبيق time2go – رحلات القطارات والحافلات على طرق التنقل",
        ],
      },
    ],
    progressTitle: "قيد التطوير",
    progress: [
      "منتدى أسئلة وأجوبة للمتنقلين مع إشراف (الإطلاق قيد التحضير)",
      "ملء قوائم الأطباء والوكالات والمجتمعات – الاقتراحات مرحب بها داخل التطبيق",
    ],
    featuresTitle: "باختصار:",
    highlights: ["بدون تسجيل – بياناتك الشخصية تبقى على هاتفك", "يُثبّت كتطبيق ويعمل دون اتصال", "كل معلومة مرتبطة بمصدر رسمي"],
    techTitle: "التقنيات:",
    dataNote: "البيانات: البنك المركزي الأوروبي، البنك الوطني الأوكراني، E-Control (أسعار الوقود)، OpenStreetMap والمواقع الحكومية الرسمية.",
    privacyNote: "يقدم Pendler معلومات عامة وليس استشارة قانونية أو ضريبية.",
    builtNote: "تم تطويره في 2026 بالتعاون مع المساعد الذكي Claude.",
    openAppBtn: "افتح Pendler",
    detailsBtn: "جميع الميزات",
    backBtn: "العودة إلى أعمالي",
  },
};

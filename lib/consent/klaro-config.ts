import type { PortfolioLocale } from "@/lib/i18n/types";

/**
 * Cookie consent (Klaro) configuration for martinluzak.sk.
 *
 * Consent is stored in the "ml_consent" cookie on ".martinluzak.sk", so any
 * subdomain that uses the same storageName + cookieDomain reads and writes the
 * same choice.
 *
 * Only share "ml_consent" with a site whose Klaro `services` list is IDENTICAL
 * to this one (same service names). Klaro's ConsentManager._checkConsents()
 * deletes every stored consent whose key is not a service in the current
 * site's config, and marks consent as unconfirmed when a configured service is
 * missing. A subdomain with a different list would therefore erase visitors'
 * main-site consents (e.g. YouTube, Umami) when it saves, and the sites would
 * keep re-asking each other's visitors.
 *
 * A site with a different services list must use its own storageName and no
 * cookieDomain (host-only cookie) — e.g. inspiration.martinluzak.sk uses
 * "ml_consent_inspiration". This applies to time2go.martinluzak.sk and
 * pendler.martinluzak.sk too: share "ml_consent" only if their services list
 * matches this one exactly.
 */

export type ConsentService = "umami" | "vercel-analytics" | "sentry-replay" | "youtube";

export const CONSENT_STORAGE_NAME = "ml_consent";

type Purpose = "analytics" | "performance" | "media";

interface ConsentTexts {
  /** Label of the footer link that reopens the settings. */
  settingsLink: string;
  /** Placeholder shown instead of an embed (e.g. YouTube) without consent. */
  embedTitle: (service: string) => string;
  embedText: string;
  embedButton: string;
  purposes: Record<Purpose, { title: string; description: string }>;
  services: Record<ConsentService, { title: string; description: string }>;
  /** Replaces Klaro's privacy policy sentence (the site has no separate privacy page). */
  privacyText: string;
  /** Full Klaro UI strings for languages Klaro does not ship (sk, ja, ar). */
  ui?: Record<string, unknown>;
}

export const CONSENT_TEXTS: Record<PortfolioLocale, ConsentTexts> = {
  en: {
    settingsLink: "Cookie settings",
    embedTitle: (s) => `This content is provided by ${s}`,
    embedText: "Loading it lets YouTube set cookies and process your data.",
    embedButton: "Load video",
    purposes: {
      analytics: { title: "Analytics", description: "Anonymous visit statistics that help me improve the website." },
      performance: { title: "Error diagnostics", description: "Recordings of sessions that help me find and fix bugs." },
      media: { title: "External media", description: "Embedded content from other platforms, such as videos." },
    },
    services: {
      umami: { title: "Umami", description: "Privacy-friendly, cookie-less visit statistics." },
      "vercel-analytics": { title: "Vercel Analytics", description: "Cookie-less page view and performance statistics from the hosting provider." },
      "sentry-replay": { title: "Sentry Session Replay", description: "Records a sample of sessions (text and media masked) to help reproduce errors. Plain error reports are sent without it." },
      youtube: { title: "YouTube", description: "Embedded videos. YouTube sets its own cookies." },
    },
    privacyText: "You can change or withdraw your consent at any time via “Cookie settings” in the footer.",
  },
  sk: {
    settingsLink: "Nastavenia cookies",
    embedTitle: (s) => `Tento obsah poskytuje ${s}`,
    embedText: "Po načítaní môže YouTube ukladať cookies a spracúvať tvoje údaje.",
    embedButton: "Načítať video",
    purposes: {
      analytics: { title: "Analytika", description: "Anonymné štatistiky návštevnosti, ktoré mi pomáhajú zlepšovať web." },
      performance: { title: "Diagnostika chýb", description: "Záznamy relácií, ktoré mi pomáhajú nájsť a opraviť chyby." },
      media: { title: "Externé médiá", description: "Vložený obsah z iných platforiem, napríklad videá." },
    },
    services: {
      umami: { title: "Umami", description: "Štatistiky návštevnosti bez cookies, šetrné k súkromiu." },
      "vercel-analytics": { title: "Vercel Analytics", description: "Štatistiky zobrazení a výkonu stránok od poskytovateľa hostingu, bez cookies." },
      "sentry-replay": { title: "Sentry Session Replay", description: "Nahráva vzorku relácií (texty a médiá sú zakryté), aby sa dali chyby zopakovať. Bežné hlásenia chýb sa posielajú aj bez neho." },
      youtube: { title: "YouTube", description: "Vložené videá. YouTube si ukladá vlastné cookies." },
    },
    privacyText: "Súhlas môžeš kedykoľvek zmeniť alebo odvolať cez odkaz „Nastavenia cookies“ v pätičke.",
    ui: {
      acceptAll: "Prijať všetko",
      acceptSelected: "Prijať vybrané",
      close: "Zavrieť",
      decline: "Odmietnuť",
      ok: "Súhlasím",
      save: "Uložiť",
      consentModal: {
        title: "Služby, ktoré by sme radi používali",
        description: "Tu si môžeš pozrieť a upraviť služby, ktoré by sme na tomto webe radi používali. Rozhoduješ ty – zapni alebo vypni ich podľa seba.",
      },
      consentNotice: {
        title: "Súhlas s cookies",
        description: "Ahoj! Môžeme zapnúť niekoľko ďalších služieb pre {purposes}? Súhlas môžeš neskôr kedykoľvek zmeniť alebo odvolať.",
        changeDescription: "Od tvojej poslednej návštevy nastali zmeny, prosím obnov svoj súhlas.",
        learnMore: "Vybrať si",
        testing: "Testovací režim!",
      },
      contextualConsent: {
        acceptAlways: "Vždy",
        acceptOnce: "Áno",
        description: "Chceš načítať externý obsah od {title}?",
        descriptionEmptyStore: "Ak chceš s touto službou súhlasiť natrvalo, musíš prijať {title} v {link}.",
        modalLinkText: "nastaveniach súhlasu",
      },
      poweredBy: "Vytvorené pomocou Klaro!",
      purposeItem: { service: "služba", services: "služby" },
      service: {
        disableAll: { title: "Zapnúť alebo vypnúť všetky služby", description: "Týmto prepínačom zapneš alebo vypneš všetky služby." },
        optOut: { title: "(možnosť odhlásenia)", description: "Táto služba sa načítava predvolene (môžeš ju však vypnúť)." },
        required: { title: "(vždy potrebné)", description: "Táto služba je vždy potrebná." },
        purpose: "účel",
        purposes: "účely",
      },
    },
  },
  de: {
    settingsLink: "Cookie-Einstellungen",
    embedTitle: (s) => `Dieser Inhalt wird von ${s} bereitgestellt`,
    embedText: "Beim Laden kann YouTube Cookies setzen und deine Daten verarbeiten.",
    embedButton: "Video laden",
    purposes: {
      analytics: { title: "Statistik", description: "Anonyme Besuchsstatistiken, die mir helfen, die Website zu verbessern." },
      performance: { title: "Fehlerdiagnose", description: "Sitzungsaufzeichnungen, die mir helfen, Fehler zu finden und zu beheben." },
      media: { title: "Externe Medien", description: "Eingebettete Inhalte anderer Plattformen, zum Beispiel Videos." },
    },
    services: {
      umami: { title: "Umami", description: "Datenschutzfreundliche Besuchsstatistik ohne Cookies." },
      "vercel-analytics": { title: "Vercel Analytics", description: "Cookie-freie Seitenaufruf- und Performance-Statistiken des Hosting-Anbieters." },
      "sentry-replay": { title: "Sentry Session Replay", description: "Zeichnet eine Stichprobe von Sitzungen auf (Texte und Medien maskiert), um Fehler nachzustellen. Einfache Fehlerberichte werden auch ohne gesendet." },
      youtube: { title: "YouTube", description: "Eingebettete Videos. YouTube setzt eigene Cookies." },
    },
    privacyText: "Du kannst deine Einwilligung jederzeit über „Cookie-Einstellungen“ in der Fußzeile ändern oder widerrufen.",
  },
  ja: {
    settingsLink: "Cookie設定",
    embedTitle: (s) => `このコンテンツは${s}によって提供されています`,
    embedText: "読み込むと、YouTubeがCookieを保存し、データを処理する場合があります。",
    embedButton: "動画を読み込む",
    purposes: {
      analytics: { title: "アクセス解析", description: "サイト改善のための匿名の訪問統計。" },
      performance: { title: "エラー診断", description: "不具合の発見と修正に役立つセッションの記録。" },
      media: { title: "外部メディア", description: "動画など、他のプラットフォームから埋め込まれたコンテンツ。" },
    },
    services: {
      umami: { title: "Umami", description: "Cookieを使わない、プライバシーに配慮した訪問統計。" },
      "vercel-analytics": { title: "Vercel Analytics", description: "ホスティング事業者によるCookieを使わないページ閲覧・パフォーマンス統計。" },
      "sentry-replay": { title: "Sentry Session Replay", description: "エラーを再現するため、一部のセッションを記録します（テキストとメディアはマスク）。通常のエラー報告はこれがなくても送信されます。" },
      youtube: { title: "YouTube", description: "埋め込み動画。YouTubeは独自のCookieを保存します。" },
    },
    privacyText: "同意はフッターの「Cookie設定」からいつでも変更・撤回できます。",
    ui: {
      acceptAll: "すべて許可",
      acceptSelected: "選択したものを許可",
      close: "閉じる",
      decline: "拒否する",
      ok: "同意する",
      save: "保存",
      consentModal: {
        title: "このサイトで使用したいサービス",
        description: "このサイトで使用したいサービスを確認し、自由に設定できます。必要に応じてオン・オフを切り替えてください。",
      },
      consentNotice: {
        title: "Cookieへの同意",
        description: "{purposes}のために、いくつかの追加サービスを有効にしてもよろしいですか？同意は後からいつでも変更・撤回できます。",
        changeDescription: "前回の訪問以降に変更がありました。同意を更新してください。",
        learnMore: "選択する",
        testing: "テストモード！",
      },
      contextualConsent: {
        acceptAlways: "常に許可",
        acceptOnce: "はい",
        description: "{title}が提供する外部コンテンツを読み込みますか？",
        descriptionEmptyStore: "このサービスに恒久的に同意するには、{link}で{title}を許可してください。",
        modalLinkText: "同意設定",
      },
      poweredBy: "Klaro!で実現",
      purposeItem: { service: "サービス", services: "サービス" },
      service: {
        disableAll: { title: "すべてのサービスを切り替える", description: "このスイッチですべてのサービスを有効・無効にできます。" },
        optOut: { title: "（オプトアウト）", description: "このサービスは既定で読み込まれます（無効にできます）。" },
        required: { title: "（常に必要）", description: "このサービスは常に必要です。" },
        purpose: "目的",
        purposes: "目的",
      },
    },
  },
  fr: {
    settingsLink: "Paramètres des cookies",
    embedTitle: (s) => `Ce contenu est fourni par ${s}`,
    embedText: "En le chargeant, YouTube peut déposer des cookies et traiter vos données.",
    embedButton: "Charger la vidéo",
    purposes: {
      analytics: { title: "Statistiques", description: "Statistiques de visite anonymes qui m’aident à améliorer le site." },
      performance: { title: "Diagnostic des erreurs", description: "Enregistrements de sessions qui m’aident à trouver et corriger les bugs." },
      media: { title: "Médias externes", description: "Contenus intégrés depuis d’autres plateformes, comme des vidéos." },
    },
    services: {
      umami: { title: "Umami", description: "Statistiques de visite respectueuses de la vie privée, sans cookies." },
      "vercel-analytics": { title: "Vercel Analytics", description: "Statistiques de pages vues et de performance de l’hébergeur, sans cookies." },
      "sentry-replay": { title: "Sentry Session Replay", description: "Enregistre un échantillon de sessions (textes et médias masqués) pour reproduire les erreurs. Les rapports d’erreur simples sont envoyés sans cela." },
      youtube: { title: "YouTube", description: "Vidéos intégrées. YouTube dépose ses propres cookies." },
    },
    privacyText: "Vous pouvez modifier ou retirer votre consentement à tout moment via « Paramètres des cookies » en bas de page.",
  },
  ar: {
    settingsLink: "إعدادات ملفات تعريف الارتباط",
    embedTitle: (s) => `هذا المحتوى مقدَّم من ${s}`,
    embedText: "عند تحميله قد يحفظ YouTube ملفات تعريف الارتباط ويعالج بياناتك.",
    embedButton: "تحميل الفيديو",
    purposes: {
      analytics: { title: "التحليلات", description: "إحصاءات زيارات مجهولة الهوية تساعدني على تحسين الموقع." },
      performance: { title: "تشخيص الأخطاء", description: "تسجيلات للجلسات تساعدني على اكتشاف الأخطاء وإصلاحها." },
      media: { title: "وسائط خارجية", description: "محتوى مضمَّن من منصات أخرى، مثل مقاطع الفيديو." },
    },
    services: {
      umami: { title: "Umami", description: "إحصاءات زيارات تحترم الخصوصية ولا تستخدم ملفات تعريف الارتباط." },
      "vercel-analytics": { title: "Vercel Analytics", description: "إحصاءات مشاهدات الصفحات والأداء من مزود الاستضافة، دون ملفات تعريف الارتباط." },
      "sentry-replay": { title: "Sentry Session Replay", description: "يسجّل عيّنة من الجلسات (مع إخفاء النصوص والوسائط) لإعادة إنتاج الأخطاء. تُرسَل تقارير الأخطاء العادية بدونه." },
      youtube: { title: "YouTube", description: "مقاطع فيديو مضمَّنة. يحفظ YouTube ملفات تعريف الارتباط الخاصة به." },
    },
    privacyText: "يمكنك تغيير موافقتك أو سحبها في أي وقت عبر «إعدادات ملفات تعريف الارتباط» في أسفل الصفحة.",
    ui: {
      acceptAll: "قبول الكل",
      acceptSelected: "قبول المحدد",
      close: "إغلاق",
      decline: "رفض",
      ok: "موافق",
      save: "حفظ",
      consentModal: {
        title: "الخدمات التي نود استخدامها",
        description: "هنا يمكنك مراجعة الخدمات التي نود استخدامها على هذا الموقع وتخصيصها. القرار لك: فعّل أو عطّل ما تشاء.",
      },
      consentNotice: {
        title: "الموافقة على ملفات تعريف الارتباط",
        description: "مرحبًا! هل يمكننا تفعيل بعض الخدمات الإضافية لأغراض {purposes}؟ يمكنك تغيير موافقتك أو سحبها لاحقًا في أي وقت.",
        changeDescription: "حدثت تغييرات منذ زيارتك الأخيرة، يرجى تجديد موافقتك.",
        learnMore: "دعني أختار",
        testing: "وضع الاختبار!",
      },
      contextualConsent: {
        acceptAlways: "دائمًا",
        acceptOnce: "نعم",
        description: "هل تريد تحميل محتوى خارجي مقدَّم من {title}؟",
        descriptionEmptyStore: "للموافقة على هذه الخدمة بشكل دائم، يجب قبول {title} في {link}.",
        modalLinkText: "إعدادات الموافقة",
      },
      poweredBy: "تم التنفيذ باستخدام Klaro!",
      purposeItem: { service: "خدمة", services: "خدمات" },
      service: {
        disableAll: { title: "تفعيل أو تعطيل جميع الخدمات", description: "استخدم هذا المفتاح لتفعيل جميع الخدمات أو تعطيلها." },
        optOut: { title: "(إلغاء الاشتراك)", description: "يتم تحميل هذه الخدمة افتراضيًا (لكن يمكنك تعطيلها)." },
        required: { title: "(مطلوبة دائمًا)", description: "هذه الخدمة مطلوبة دائمًا." },
        purpose: "الغرض",
        purposes: "الأغراض",
      },
    },
  },
};

function cookieDomain(): string | undefined {
  if (typeof window === "undefined") return undefined;
  const host = window.location.hostname;
  return host === "martinluzak.sk" || host.endsWith(".martinluzak.sk") ? ".martinluzak.sk" : undefined;
}

export function buildKlaroConfig(locale: PortfolioLocale) {
  const texts = CONSENT_TEXTS[locale] ?? CONSENT_TEXTS.en;

  const translation: Record<string, unknown> = {
    ...(texts.ui ?? {}),
    privacyPolicy: { name: "", text: texts.privacyText },
    purposes: texts.purposes,
  };
  for (const [name, s] of Object.entries(texts.services)) translation[name] = s;

  return {
    version: 1,
    elementID: "klaro",
    storageMethod: "cookie",
    storageName: CONSENT_STORAGE_NAME,
    cookieDomain: cookieDomain(),
    cookieExpiresAfterDays: 365,
    lang: locale,
    fallbackLang: "en",
    htmlTexts: false,
    embedded: false,
    groupByPurpose: true,
    default: false,
    mustConsent: false,
    acceptAll: true,
    hideDeclineAll: false,
    hideLearnMore: false,
    noticeAsModal: false,
    disablePoweredBy: true,
    additionalClass: "ml-klaro",
    // Klaro's colours mapped onto the site's design tokens, so the banner
    // follows the light/dark theme and the colour theme picker.
    styling: {
      theme: ["bottom", "wide"],
      "button-text-color": "var(--primary-foreground)",
      dark1: "var(--card)",
      dark2: "var(--muted-foreground)",
      dark3: "var(--muted-foreground)",
      light1: "var(--foreground)",
      light2: "var(--muted-foreground)",
      light3: "var(--muted-foreground)",
      white1: "var(--foreground)",
      white2: "var(--muted-foreground)",
      white3: "var(--muted-foreground)",
      green1: "var(--primary)",
      green2: "var(--primary)",
      green3: "var(--primary)",
      blue1: "var(--muted-foreground)",
      blue2: "var(--primary)",
      blue3: "var(--primary)",
      "font-family": "var(--font-geist), system-ui, sans-serif",
      "title-font-family": "var(--font-geist), system-ui, sans-serif",
      "border-radius": "12px",
      "border-width": "1px",
      "border-style": "solid",
    },
    translations: { [locale]: translation },
    services: [
      { name: "umami", purposes: ["analytics"] },
      { name: "vercel-analytics", purposes: ["analytics"] },
      { name: "sentry-replay", purposes: ["performance"] },
      { name: "youtube", purposes: ["media"], contextualConsentOnly: false },
    ],
  };
}

import { PortfolioLocale } from "../types";

// Android apps offered for download on /apps/download. The APK files live in
// public/apps/download/ and are served with the APK content type and a download
// header (see next.config.mjs).

export const PENDLER_APK = {
  url: "/apps/download/pendler.apk",
  file: "pendler.apk",
  version: "2.0.0",
  sizeMb: 9.4,
  minAndroid: "7.0",
  sha256: "7959791640ba1dc716922851d67bc64b5110c4436b01503c25fd4ea618f50007",
};

export interface LocalizedDownloadsData {
  title: string;
  intro: string;
  meta: string; // {version} {size} {min}
  downloadBtn: string;
  detailsBtn: string;
  stepsTitle: string;
  steps: string[];
  checksum: string;
  pendlerTitle: string;
  pendlerText: string;
  backBtn: string;
}

export const DOWNLOADS_DATA: Record<PortfolioLocale, LocalizedDownloadsData> = {
  sk: {
    title: "Na stiahnutie",
    intro: "Android aplikácie, ktoré som vytvoril. Inštalujú sa priamo z tejto stránky, bez Google Play.",
    meta: "Verzia {version} · {size} MB · Android {min}+",
    downloadBtn: "Stiahnuť pre Android",
    detailsBtn: "Viac o aplikácii",
    stepsTitle: "Ako nainštalovať:",
    steps: [
      "Stiahni súbor v mobile s Androidom.",
      "Otvor ho. Android sa spýta, či povoliť inštaláciu z tohto zdroja: povoľ ju.",
      "Ťukni na Inštalovať. Ak Google Play Protect upozorní na neznámeho vývojára, zvoľ Napriek tomu nainštalovať.",
    ],
    checksum: "Kontrolný súčet SHA-256",
    pendlerTitle: "Pendler pre Android",
    pendlerText: "Plnohodnotná aplikácia: sprievodca, checklist, kalkulačky aj frázy sú priamo v mobile a fungujú aj bez internetu. Pripomienky ti pošlú upozornenie na termín. Z internetu sa načítavajú len živé dáta, napríklad kurzy a ceny palív.",
    backBtn: "Späť na aplikácie",
  },
  en: {
    title: "Downloads",
    intro: "Android apps I've built. Install them straight from this page, no Google Play needed.",
    meta: "Version {version} · {size} MB · Android {min}+",
    downloadBtn: "Download for Android",
    detailsBtn: "About the app",
    stepsTitle: "How to install:",
    steps: [
      "Download the file on your Android phone.",
      "Open it. Android will ask you to allow installs from this source: allow it.",
      "Tap Install. If Google Play Protect warns about an unknown developer, choose Install anyway.",
    ],
    checksum: "SHA-256 checksum",
    pendlerTitle: "Pendler for Android",
    pendlerText: "A full app: the guide, checklist, calculators and phrases live on your phone and work offline. Reminders send you a notification before each deadline. Only live data such as exchange rates and fuel prices comes from the internet.",
    backBtn: "Back to apps",
  },
  de: {
    title: "Downloads",
    intro: "Android-Apps, die ich gebaut habe. Installation direkt von dieser Seite, ohne Google Play.",
    meta: "Version {version} · {size} MB · Android {min}+",
    downloadBtn: "Für Android herunterladen",
    detailsBtn: "Mehr zur App",
    stepsTitle: "So installierst du sie:",
    steps: [
      "Lade die Datei auf deinem Android-Handy herunter.",
      "Öffne sie. Android fragt, ob Installationen aus dieser Quelle erlaubt sind: erlaube es.",
      "Tippe auf Installieren. Warnt Google Play Protect vor einem unbekannten Entwickler, wähle Trotzdem installieren.",
    ],
    checksum: "SHA-256-Prüfsumme",
    pendlerTitle: "Pendler für Android",
    pendlerText: "Eine vollwertige App: Ratgeber, Checkliste, Rechner und Sätze sind direkt auf dem Handy und funktionieren auch offline. Erinnerungen melden sich vor jeder Frist. Nur Live-Daten wie Wechselkurse und Spritpreise kommen aus dem Internet.",
    backBtn: "Zurück zu den Apps",
  },
  ja: {
    title: "ダウンロード",
    intro: "私が作った Android アプリです。Google Play を使わず、このページから直接インストールできます。",
    meta: "バージョン {version} · {size} MB · Android {min} 以上",
    downloadBtn: "Android 版をダウンロード",
    detailsBtn: "アプリの詳細",
    stepsTitle: "インストール方法:",
    steps: [
      "Android スマートフォンでファイルをダウンロードします。",
      "ファイルを開きます。この提供元からのインストールを許可するか聞かれたら、許可してください。",
      "「インストール」をタップします。Google Play プロテクトが不明な開発元について警告した場合は、「インストールする」を選びます。",
    ],
    checksum: "SHA-256 チェックサム",
    pendlerTitle: "Android 版 Pendler",
    pendlerText: "本格的なアプリです。ガイド、チェックリスト、計算ツール、フレーズはスマートフォン内にあり、オフラインでも使えます。リマインダーは期限の前に通知します。為替レートや燃料価格などのリアルタイムデータだけをインターネットから取得します。",
    backBtn: "アプリ一覧に戻る",
  },
  fr: {
    title: "Téléchargements",
    intro: "Les applications Android que j’ai créées. Elles s’installent directement depuis cette page, sans Google Play.",
    meta: "Version {version} · {size} Mo · Android {min}+",
    downloadBtn: "Télécharger pour Android",
    detailsBtn: "En savoir plus",
    stepsTitle: "Comment l’installer :",
    steps: [
      "Téléchargez le fichier sur votre téléphone Android.",
      "Ouvrez-le. Android vous demandera d’autoriser les installations depuis cette source : autorisez-les.",
      "Appuyez sur Installer. Si Google Play Protect signale un développeur inconnu, choisissez Installer quand même.",
    ],
    checksum: "Somme de contrôle SHA-256",
    pendlerTitle: "Pendler pour Android",
    pendlerText: "Une vraie application : guide, checklist, calculateurs et phrases sont sur votre téléphone et fonctionnent hors ligne. Les rappels vous préviennent avant chaque échéance. Seules les données en direct, comme les taux de change et les prix des carburants, viennent d’internet.",
    backBtn: "Retour aux applications",
  },
  ar: {
    title: "التنزيلات",
    intro: "تطبيقات أندرويد التي أنشأتها. ثبّتها مباشرة من هذه الصفحة دون الحاجة إلى Google Play.",
    meta: "الإصدار {version} · {size} ميغابايت · أندرويد {min} أو أحدث",
    downloadBtn: "تنزيل لأندرويد",
    detailsBtn: "عن التطبيق",
    stepsTitle: "طريقة التثبيت:",
    steps: [
      "نزّل الملف على هاتف أندرويد.",
      "افتحه. سيسألك أندرويد عن السماح بالتثبيت من هذا المصدر: اسمح بذلك.",
      "اضغط على تثبيت. إذا حذّرك Google Play Protect من مطوّر غير معروف، فاختر التثبيت على أي حال.",
    ],
    checksum: "المجموع الاختباري SHA-256",
    pendlerTitle: "Pendler لأندرويد",
    pendlerText: "تطبيق متكامل: الدليل وقائمة المهام والحاسبات والعبارات موجودة على هاتفك وتعمل دون إنترنت. ترسل لك التذكيرات إشعارًا قبل كل موعد. فقط البيانات المباشرة مثل أسعار الصرف وأسعار الوقود تأتي من الإنترنت.",
    backBtn: "العودة إلى التطبيقات",
  },
};

export function fillMeta(template: string, apk: { version: string; sizeMb: number; minAndroid: string }, locale: string) {
  return template
    .replace("{version}", apk.version)
    .replace("{size}", apk.sizeMb.toLocaleString(locale))
    .replace("{min}", apk.minAndroid);
}

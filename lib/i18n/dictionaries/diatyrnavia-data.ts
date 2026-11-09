import { PortfolioLocale } from "../types";

/** Live URL of the new Diatyrnavia website (the "open" button is hidden when empty). */
export const DIATYRNAVIA_URL = "https://diatyrnavia.martinluzak.sk";
export const DIATYRNAVIA_ORIGINAL_URL = "https://www.diatyrnavia.sk";
export const DIATYRNAVIA_PREVIEW = "/pictures/diatyrnavia-preview.webp";

export interface LocalizedDiatyrnaviaData {
  badge: string;
  title: string;
  tagline: string;
  description: string;
  featuresTitle: string;
  features: string[];
  techTitle: string;
  pagesNote: string;
  builtNote: string;
  previewAlt: string;
  openSiteBtn: string;
  originalBtn: string;
}

export const DIATYRNAVIA_DATA: Record<PortfolioLocale, LocalizedDiatyrnaviaData> = {
  en: {
    badge: "New Website • 2026",
    title: "Diatyrnavia",
    tagline: "A new website for a diabetes NGO in Trnava",
    description:
      "A complete redesign of the website for DIATYRNAVIA, the Trnava branch of the Slovak Diabetes Association, where I help with IT. The original Webnode site was hard to navigate, especially for seniors. I moved all of its content into a clear, accessible static website with large type and high contrast that works on phones and computers alike.",
    featuresTitle: "What's new:",
    features: [
      "\"Larger text\" button that the browser remembers",
      "Online membership form that prepares a filled-in email — no server needed",
      "2026 recondition stays shown as clear cards with dates, prices and sign-up rules",
      "Annual finances presented as a readable income and expense table",
      "One-click copying of the bank account (IBAN) and company ID",
      "Official Dia Tyrnavia logo and colours, mobile menu",
    ],
    techTitle: "Technologies:",
    pagesNote: "12 pages: membership, lectures, recondition stays, magazine, finances, 2% tax donation, advice, partners, contact and privacy.",
    builtNote: "Built in 2026 in collaboration with the AI assistant Claude.",
    previewAlt: "Home page of the new Diatyrnavia website",
    openSiteBtn: "Open the website",
    originalBtn: "Original website",
  },
  sk: {
    badge: "Nový web • 2026",
    title: "Diatyrnavia",
    tagline: "Nový web pre združenie diabetikov v Trnave",
    description:
      "Kompletne nový web pre DIATYRNAVIA – základnú organizáciu Zväzu diabetikov Slovenska v Trnave, kde pomáham s IT. Pôvodná stránka na Webnode bola neprehľadná, najmä pre seniorov. Všetok obsah som preniesol do prehľadného a prístupného webu s veľkým písmom a vysokým kontrastom, ktorý funguje na mobile aj na počítači.",
    featuresTitle: "Čo je nové:",
    features: [
      "Tlačidlo „Väčšie písmo“, ktoré si prehliadač zapamätá",
      "Elektronická prihláška, ktorá pripraví vyplnený e-mail – bez servera",
      "Rekondičné pobyty 2026 ako prehľadné karty s termínmi, cenami a pravidlami prihlasovania",
      "Hospodárenie ako čitateľná tabuľka príjmov a výdavkov",
      "Kopírovanie IBAN a IČO jedným klikom",
      "Oficiálne logo Dia Tyrnavia a jeho farby, mobilné menu",
    ],
    techTitle: "Technológie:",
    pagesNote: "12 stránok: členstvo, prednášky, rekondičné pobyty, časopis, hospodárenie, 2 % z dane, rady a pomoc, partneri, kontakt a ochrana údajov.",
    builtNote: "Projekt som vytvoril v roku 2026 v spolupráci s AI asistentom Claude.",
    previewAlt: "Úvodná stránka nového webu Diatyrnavia",
    openSiteBtn: "Otvoriť web",
    originalBtn: "Pôvodný web",
  },
  de: {
    badge: "Neue Website • 2026",
    title: "Diatyrnavia",
    tagline: "Neue Website für einen Diabetikerverein in Trnava",
    description:
      "Eine komplett neue Website für DIATYRNAVIA, die Trnavaer Ortsgruppe des Slowakischen Diabetikerverbandes, bei der ich im IT-Bereich helfe. Die ursprüngliche Webnode-Seite war vor allem für Senioren unübersichtlich. Ich habe alle Inhalte in eine klare, barrierearme Website mit großer Schrift und hohem Kontrast übertragen, die auf dem Handy und am Computer funktioniert.",
    featuresTitle: "Was ist neu:",
    features: [
      "Schaltfläche „Größere Schrift“, die sich der Browser merkt",
      "Online-Mitgliedsantrag, der eine ausgefüllte E-Mail vorbereitet – ohne Server",
      "Kuraufenthalte 2026 als übersichtliche Karten mit Terminen, Preisen und Anmelderegeln",
      "Jahresfinanzen als lesbare Einnahmen- und Ausgabentabelle",
      "IBAN und Firmen-ID mit einem Klick kopieren",
      "Offizielles Dia-Tyrnavia-Logo und Farben, mobiles Menü",
    ],
    techTitle: "Technologien:",
    pagesNote: "12 Seiten: Mitgliedschaft, Vorträge, Kuraufenthalte, Zeitschrift, Finanzen, 2-%-Steuerspende, Ratgeber, Partner, Kontakt und Datenschutz.",
    builtNote: "Entstanden 2026 in Zusammenarbeit mit dem KI-Assistenten Claude.",
    previewAlt: "Startseite der neuen Diatyrnavia-Website",
    openSiteBtn: "Website öffnen",
    originalBtn: "Ursprüngliche Website",
  },
  ja: {
    badge: "新しいウェブサイト • 2026",
    title: "Diatyrnavia",
    tagline: "トルナヴァの糖尿病患者団体の新しいウェブサイト",
    description:
      "スロバキア糖尿病協会トルナヴァ支部「DIATYRNAVIA」のウェブサイトを全面的に作り直しました。私はこの団体でITを担当しています。元のWebnodeのサイトは、特に高齢者にとって分かりにくいものでした。すべての内容を、大きな文字と高いコントラストで読みやすく、スマートフォンでもパソコンでも使えるサイトに移しました。",
    featuresTitle: "新しい点：",
    features: [
      "ブラウザが記憶する「文字を大きく」ボタン",
      "入力済みのメールを作成するオンライン入会フォーム（サーバー不要）",
      "2026年の保養滞在を日程・料金・申込ルール付きのカードで表示",
      "収支を読みやすい表で公開",
      "口座番号（IBAN）と法人番号をワンクリックでコピー",
      "公式ロゴ「Dia Tyrnavia」と配色、モバイルメニュー",
    ],
    techTitle: "使用技術：",
    pagesNote: "全12ページ：会員、講演、保養滞在、会報、会計、2%寄付、アドバイス、パートナー、連絡先、個人情報保護。",
    builtNote: "2026年にAIアシスタントClaudeと協力して制作しました。",
    previewAlt: "新しいDiatyrnaviaサイトのトップページ",
    openSiteBtn: "サイトを開く",
    originalBtn: "元のサイト",
  },
  fr: {
    badge: "Nouveau site • 2026",
    title: "Diatyrnavia",
    tagline: "Un nouveau site pour une association de diabétiques à Trnava",
    description:
      "Une refonte complète du site de DIATYRNAVIA, la section de Trnava de l'Association slovaque des diabétiques, où j'aide pour l'informatique. L'ancien site Webnode était difficile à parcourir, surtout pour les seniors. J'ai transféré tout son contenu vers un site clair et accessible, avec de grands caractères et un fort contraste, qui fonctionne sur mobile comme sur ordinateur.",
    featuresTitle: "Nouveautés :",
    features: [
      "Bouton « Texte plus grand » mémorisé par le navigateur",
      "Formulaire d'adhésion en ligne qui prépare un e-mail prérempli — sans serveur",
      "Séjours de remise en forme 2026 présentés en cartes avec dates, prix et règles d'inscription",
      "Comptes annuels sous forme de tableau lisible des recettes et dépenses",
      "Copie de l'IBAN et du numéro d'identification en un clic",
      "Logo officiel Dia Tyrnavia et ses couleurs, menu mobile",
    ],
    techTitle: "Technologies :",
    pagesNote: "12 pages : adhésion, conférences, séjours, magazine, finances, don de 2 % de l'impôt, conseils, partenaires, contact et confidentialité.",
    builtNote: "Réalisé en 2026 en collaboration avec l'assistant IA Claude.",
    previewAlt: "Page d'accueil du nouveau site Diatyrnavia",
    openSiteBtn: "Ouvrir le site",
    originalBtn: "Site d'origine",
  },
  ar: {
    badge: "موقع جديد • 2026",
    title: "Diatyrnavia",
    tagline: "موقع جديد لجمعية مرضى السكري في ترنافا",
    description:
      "إعادة تصميم كاملة لموقع DIATYRNAVIA، فرع ترنافا لاتحاد مرضى السكري في سلوفاكيا، حيث أساعد في مجال تقنية المعلومات. كان الموقع الأصلي على Webnode صعب التصفح، خاصة لكبار السن. نقلت كل محتواه إلى موقع واضح وسهل الوصول بخط كبير وتباين عالٍ يعمل على الهاتف والحاسوب.",
    featuresTitle: "ما الجديد:",
    features: [
      "زر «تكبير الخط» يتذكره المتصفح",
      "استمارة عضوية إلكترونية تجهّز رسالة بريد معبأة — دون خادم",
      "إقامات الاستشفاء لعام 2026 في بطاقات واضحة بالمواعيد والأسعار وشروط التسجيل",
      "عرض الحسابات السنوية في جدول واضح للإيرادات والمصروفات",
      "نسخ رقم الحساب المصرفي (IBAN) ورقم التعريف بنقرة واحدة",
      "الشعار الرسمي Dia Tyrnavia وألوانه، وقائمة للهاتف المحمول",
    ],
    techTitle: "التقنيات:",
    pagesNote: "12 صفحة: العضوية، المحاضرات، الإقامات، المجلة، الحسابات، التبرع بـ2٪ من الضريبة، النصائح، الشركاء، التواصل والخصوصية.",
    builtNote: "أُنجز في عام 2026 بالتعاون مع المساعد الذكي Claude.",
    previewAlt: "الصفحة الرئيسية لموقع Diatyrnavia الجديد",
    openSiteBtn: "فتح الموقع",
    originalBtn: "الموقع الأصلي",
  },
};

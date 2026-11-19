import { PortfolioLocale } from "../types";

export type TripAreaKey = "osaka" | "kyoto" | "nara" | "koyasan" | "tokyo" | "daytrips";
export type TripFilterKey = "all" | TripAreaKey;
export type TripKindKey =
  | "buddhist"
  | "shinto"
  | "zen"
  | "sacred"
  | "complex"
  | "neighbourhood"
  | "castle"
  | "garden"
  | "onsen";

export type TripPlaceId =
  | "shitennoji"
  | "isshinji"
  | "aizendo"
  | "nozaki"
  | "katsuoji"
  | "hozanji"
  | "todaiji"
  | "kofukuji"
  | "kasuga"
  | "horyuji"
  | "myoshinji"
  | "tofukuji"
  | "ryoanji"
  | "kiyomizu"
  | "sanjusangendo"
  | "byodoin"
  | "kongobuji"
  | "okunoin"
  | "danjo"
  | "sensoji"
  | "zojoji"
  | "meiji"
  | "nezu"
  | "yanaka"
  | "ryogoku"
  | "himeji"
  | "kokoen"
  | "arima";

export interface TripPlace {
  id: TripPlaceId;
  /** Romanized name, also used for the Google Maps search. */
  name: string;
  /** Name in Japanese script, shown for the Japanese locale. */
  jaName: string;
  area: TripAreaKey;
  kind: TripKindKey;
  booked?: boolean;
}

export const TRIP_FILTERS: TripFilterKey[] = ["all", "osaka", "kyoto", "nara", "koyasan", "tokyo", "daytrips"];

export const TRIP_PLACES: TripPlace[] = [
  { id: "shitennoji", name: "Shitennō-ji", jaName: "四天王寺", area: "osaka", kind: "buddhist" },
  { id: "isshinji", name: "Isshin-ji", jaName: "一心寺", area: "osaka", kind: "buddhist" },
  { id: "aizendo", name: "Aizendō Shōman-in", jaName: "愛染堂勝鬘院", area: "osaka", kind: "buddhist" },
  { id: "nozaki", name: "Nozaki Kannon (Jigen-ji)", jaName: "野崎観音（慈眼寺）", area: "osaka", kind: "buddhist" },
  { id: "katsuoji", name: "Katsuo-ji", jaName: "勝尾寺", area: "osaka", kind: "buddhist" },
  { id: "hozanji", name: "Hōzan-ji", jaName: "宝山寺", area: "nara", kind: "buddhist" },
  { id: "todaiji", name: "Tōdai-ji", jaName: "東大寺", area: "nara", kind: "buddhist" },
  { id: "kofukuji", name: "Kōfuku-ji", jaName: "興福寺", area: "nara", kind: "buddhist" },
  { id: "kasuga", name: "Kasuga Taisha", jaName: "春日大社", area: "nara", kind: "shinto" },
  { id: "horyuji", name: "Hōryū-ji", jaName: "法隆寺", area: "daytrips", kind: "buddhist" },
  { id: "myoshinji", name: "Myōshin-ji", jaName: "妙心寺", area: "kyoto", kind: "zen", booked: true },
  { id: "tofukuji", name: "Tōfuku-ji", jaName: "東福寺", area: "kyoto", kind: "zen" },
  { id: "ryoanji", name: "Ryōan-ji", jaName: "龍安寺", area: "kyoto", kind: "zen" },
  { id: "kiyomizu", name: "Kiyomizu-dera", jaName: "清水寺", area: "kyoto", kind: "buddhist" },
  { id: "sanjusangendo", name: "Sanjūsangen-dō", jaName: "三十三間堂", area: "kyoto", kind: "buddhist" },
  { id: "byodoin", name: "Byōdō-in", jaName: "平等院", area: "kyoto", kind: "buddhist" },
  { id: "kongobuji", name: "Kongōbu-ji", jaName: "金剛峯寺", area: "koyasan", kind: "buddhist" },
  { id: "okunoin", name: "Okunoin Cemetery", jaName: "奥之院", area: "koyasan", kind: "sacred" },
  { id: "danjo", name: "Danjo Garan", jaName: "壇上伽藍", area: "koyasan", kind: "complex" },
  { id: "sensoji", name: "Sensō-ji", jaName: "浅草寺", area: "tokyo", kind: "buddhist" },
  { id: "zojoji", name: "Zōjō-ji", jaName: "増上寺", area: "tokyo", kind: "buddhist" },
  { id: "meiji", name: "Meiji Jingū", jaName: "明治神宮", area: "tokyo", kind: "shinto" },
  { id: "nezu", name: "Nezu-jinja", jaName: "根津神社", area: "tokyo", kind: "shinto" },
  { id: "yanaka", name: "Yanaka Ginza", jaName: "谷中銀座", area: "tokyo", kind: "neighbourhood" },
  { id: "ryogoku", name: "Ryōgoku", jaName: "両国", area: "tokyo", kind: "neighbourhood" },
  { id: "himeji", name: "Himeji Castle", jaName: "姫路城", area: "daytrips", kind: "castle" },
  { id: "kokoen", name: "Kōko-en Garden", jaName: "好古園", area: "daytrips", kind: "garden" },
  { id: "arima", name: "Arima Onsen", jaName: "有馬温泉", area: "daytrips", kind: "onsen" },
];

export interface TripStage {
  label: string;
  city: string;
  date: string;
}

export interface TripDay {
  date: string;
  title: string;
  text: string;
  booked?: boolean;
}

export interface LocalizedTripData {
  languageLabel: string;
  headerBrand: string;
  headerSeason: string;
  kicker: string;
  titleLine1: string;
  titleLine2: string;
  intro: string;
  travelWindowLabel: string;
  travelWindowDates: string;
  travelWindowYear: string;
  stages: [TripStage, TripStage, TripStage];
  routeKicker: string;
  routeTitle: string;
  routeMonth: string;
  days: TripDay[];
  bookedLabel: string;
  placesKicker: string;
  placesTitle: string;
  placesIntro: string;
  placesCount: (n: number) => string;
  searchLabel: string;
  searchPlaceholder: string;
  openInMaps: string;
  noResults: string;
  filters: Record<TripFilterKey, string>;
  kinds: Record<TripKindKey, string>;
  notes: Record<TripPlaceId, string>;
  noteKicker: string;
  noteTitle1: string;
  noteTitle2: string;
  noteP1: string;
  noteP2: string;
  footerLeft: string;
  footerRight: string;
}

const en: LocalizedTripData = {
  languageLabel: "Language",
  headerBrand: "ML / Travel notes",
  headerSeason: "Japan · Winter 2026",
  kicker: "Personal journey / 01",
  titleLine1: "Japan,",
  titleLine2: "slowly.",
  intro:
    "Two weeks between temple paths, quiet gardens, city streets and small discoveries. A living notebook for the journey from Kansai to Tokyo.",
  travelWindowLabel: "Travel window",
  travelWindowDates: "13 — 31 December",
  travelWindowYear: "2026 · Japan",
  stages: [
    { label: "01 / Arrival", city: "Osaka", date: "13 December 2026" },
    { label: "02 / Kansai", city: "Osaka · Kyoto", date: "14 — 17 December" },
    { label: "03 / Next chapter", city: "Tokyo", date: "From 18 December" },
  ],
  routeKicker: "The route",
  routeTitle: "A few dates to remember",
  routeMonth: "December 2026",
  days: [
    {
      date: "13 December · Sunday",
      title: "Arrival in Osaka",
      text: "Arrival day and settling in. Keep the schedule light and leave room for the first impressions.",
    },
    {
      date: "14 — 16 December",
      title: "Osaka & surroundings",
      text: "Explore temples, neighbourhoods and possible day trips around the Kansai region.",
    },
    {
      date: "17 December · Thursday",
      title: "Zen experience in Kyoto",
      text: "10:30 — booked Zen experience with a monk in the Myōshin-ji area. Plan to arrive by 10:15.",
      booked: true,
    },
    {
      date: "18 December · Friday",
      title: "Osaka → Tokyo",
      text: "Travel to Tokyo and begin the next part of the journey.",
    },
  ],
  bookedLabel: "Booked",
  placesKicker: "Places & ideas",
  placesTitle: "The places list",
  placesIntro:
    "A curated shortlist to explore, not a fixed schedule. Use the filters to narrow the list and open a place directly in Google Maps.",
  placesCount: (n) => (n === 1 ? "place" : "places"),
  searchLabel: "Search places",
  searchPlaceholder: "Search temples, shrines, gardens…",
  openInMaps: "Open in Maps ↗",
  noResults: "No places match this search. Try another name or area.",
  filters: {
    all: "All",
    osaka: "Osaka",
    kyoto: "Kyoto",
    nara: "Nara",
    koyasan: "Koyasan",
    tokyo: "Tokyo",
    daytrips: "Day trips",
  },
  kinds: {
    buddhist: "Buddhist temple",
    shinto: "Shinto shrine",
    zen: "Zen temple",
    sacred: "Sacred site",
    complex: "Temple complex",
    neighbourhood: "Neighbourhood",
    castle: "Castle",
    garden: "Garden",
    onsen: "Hot spring town",
  },
  notes: {
    shitennoji: "One of Japan’s oldest officially administered temples.",
    isshinji: "Distinctive temple known for its Buddha statues.",
    aizendo: "A quieter temple stop in the Tennoji area.",
    nozaki: "Hillside temple with a calm atmosphere.",
    katsuoji: "Mountain temple famous for daruma dolls.",
    hozanji: "Atmospheric temple in the hills above Ikoma.",
    todaiji: "The Great Buddha Hall and its monumental bronze Buddha.",
    kofukuji: "Historic temple complex beside Nara Park.",
    kasuga: "Lantern-lined paths in a forest setting.",
    horyuji: "A landmark complex with some of the world’s oldest surviving wooden structures.",
    myoshinji: "Large Zen temple complex; the planned Zen experience is nearby.",
    tofukuji: "Known for its gardens and traditional temple architecture.",
    ryoanji: "Famous dry landscape rock garden.",
    kiyomizu: "Iconic hillside temple and wooden terrace.",
    sanjusangendo: "Long hall containing 1,001 statues of Kannon.",
    byodoin: "The Phoenix Hall beside the pond in Uji.",
    kongobuji: "Head temple of Shingon Buddhism on Mount Kōya.",
    okunoin: "Atmospheric forest path leading to the mausoleum of Kūkai.",
    danjo: "Historic sacred complex at the heart of Mount Kōya.",
    sensoji: "Tokyo’s best-known temple in Asakusa.",
    zojoji: "Temple grounds with a striking view toward Tokyo Tower.",
    meiji: "A forest sanctuary in the middle of the city.",
    nezu: "Known for its red torii gates and garden.",
    yanaka: "Traditional shopping street and old-town atmosphere.",
    ryogoku: "Sumo culture, museums and riverside walks.",
    himeji: "One of Japan’s most celebrated original castles.",
    kokoen: "Traditional gardens next to Himeji Castle.",
    arima: "Historic hot-spring town in the mountains.",
  },
  noteKicker: "A note to self",
  noteTitle1: "Leave room",
  noteTitle2: "for the unplanned.",
  noteP1:
    "This page is a working travel notebook. The list is intentionally flexible: opening hours, transport and seasonal conditions should be checked closer to each visit.",
  noteP2:
    "Some places are ideas rather than confirmed plans. The only item marked as booked is the Zen experience in Kyoto on 17 December.",
  footerLeft: "Japan travel notebook · 2026",
  footerRight: "Made for the journey, not the search engines.",
};

const sk: LocalizedTripData = {
  languageLabel: "Jazyk",
  headerBrand: "ML / Cestovné zápisky",
  headerSeason: "Japonsko · Zima 2026",
  kicker: "Osobná cesta / 01",
  titleLine1: "Japonsko,",
  titleLine2: "pomaly.",
  intro:
    "Dva týždne medzi chrámovými chodníkmi, tichými záhradami, mestskými ulicami a drobnými objavmi. Živý zápisník z cesty z Kansai do Tokia.",
  travelWindowLabel: "Termín cesty",
  travelWindowDates: "13. — 31. decembra",
  travelWindowYear: "2026 · Japonsko",
  stages: [
    { label: "01 / Prílet", city: "Osaka", date: "13. decembra 2026" },
    { label: "02 / Kansai", city: "Osaka · Kjóto", date: "14. — 17. decembra" },
    { label: "03 / Ďalšia kapitola", city: "Tokio", date: "Od 18. decembra" },
  ],
  routeKicker: "Trasa",
  routeTitle: "Pár dátumov, ktoré si treba pamätať",
  routeMonth: "December 2026",
  days: [
    {
      date: "13. decembra · nedeľa",
      title: "Prílet do Osaky",
      text: "Deň príletu a ubytovanie. Program nechať voľnejší a ponechať priestor na prvé dojmy.",
    },
    {
      date: "14. — 16. decembra",
      title: "Osaka a okolie",
      text: "Chrámy, mestské štvrte a možné jednodňové výlety po regióne Kansai.",
    },
    {
      date: "17. decembra · štvrtok",
      title: "Zenový zážitok v Kjóte",
      text: "10:30 — rezervovaný zenový zážitok s mníchom v oblasti Myōshin-ji. Prísť do 10:15.",
      booked: true,
    },
    {
      date: "18. decembra · piatok",
      title: "Osaka → Tokio",
      text: "Presun do Tokia a začiatok ďalšej časti cesty.",
    },
  ],
  bookedLabel: "Rezervované",
  placesKicker: "Miesta a nápady",
  placesTitle: "Zoznam miest",
  placesIntro:
    "Vybraný zoznam miest na objavovanie, nie pevný program. Filtrami zoznam zúžiš a miesto otvoríš priamo v Google Mapách.",
  placesCount: (n) => (n === 1 ? "miesto" : n >= 2 && n <= 4 ? "miesta" : "miest"),
  searchLabel: "Hľadať miesta",
  searchPlaceholder: "Hľadaj chrámy, svätyne, záhrady…",
  openInMaps: "Otvoriť v Mapách ↗",
  noResults: "Tomuto hľadaniu nezodpovedá žiadne miesto. Skús iný názov alebo oblasť.",
  filters: {
    all: "Všetko",
    osaka: "Osaka",
    kyoto: "Kjóto",
    nara: "Nara",
    koyasan: "Kójasan",
    tokyo: "Tokio",
    daytrips: "Výlety",
  },
  kinds: {
    buddhist: "Budhistický chrám",
    shinto: "Šintoistická svätyňa",
    zen: "Zenový chrám",
    sacred: "Posvätné miesto",
    complex: "Chrámový komplex",
    neighbourhood: "Mestská štvrť",
    castle: "Hrad",
    garden: "Záhrada",
    onsen: "Kúpeľné mestečko",
  },
  notes: {
    shitennoji: "Jeden z najstarších oficiálne spravovaných chrámov v Japonsku.",
    isshinji: "Osobitý chrám známy svojimi sochami Budhu.",
    aizendo: "Pokojnejšia chrámová zastávka v oblasti Tennódži.",
    nozaki: "Chrám na svahu s pokojnou atmosférou.",
    katsuoji: "Horský chrám preslávený bábkami daruma.",
    hozanji: "Atmosférický chrám v kopcoch nad Ikomou.",
    todaiji: "Sieň Veľkého Budhu s monumentálnou bronzovou sochou.",
    kofukuji: "Historický chrámový komplex pri parku Nara.",
    kasuga: "Chodníky lemované lampášmi uprostred lesa.",
    horyuji: "Významný komplex s jednými z najstarších zachovaných drevených stavieb na svete.",
    myoshinji: "Rozsiahly zenový chrámový komplex; plánovaný zenový zážitok je neďaleko.",
    tofukuji: "Známy svojimi záhradami a tradičnou chrámovou architektúrou.",
    ryoanji: "Slávna suchá kamenná záhrada.",
    kiyomizu: "Ikonický chrám na svahu s drevenou terasou.",
    sanjusangendo: "Dlhá sieň s 1 001 sochami bohyne Kannon.",
    byodoin: "Fénixova sieň pri jazierku v Udži.",
    kongobuji: "Hlavný chrám budhizmu Šingon na hore Kója.",
    okunoin: "Atmosférický lesný chodník vedúci k mauzóleu Kúkaia.",
    danjo: "Historický posvätný komplex v srdci hory Kója.",
    sensoji: "Najznámejší tokijský chrám v štvrti Asakusa.",
    zojoji: "Chrámový areál s pôsobivým výhľadom na Tokijskú vežu.",
    meiji: "Lesná svätyňa uprostred mesta.",
    nezu: "Známa červenými bránami torii a záhradou.",
    yanaka: "Tradičná nákupná ulička s atmosférou starého mesta.",
    ryogoku: "Kultúra sumo, múzeá a prechádzky pri rieke.",
    himeji: "Jeden z najslávnejších pôvodných hradov v Japonsku.",
    kokoen: "Tradičné záhrady vedľa hradu Himeji.",
    arima: "Historické kúpeľné mestečko s horúcimi prameňmi v horách.",
  },
  noteKicker: "Poznámka pre seba",
  noteTitle1: "Nechaj priestor",
  noteTitle2: "aj neplánovanému.",
  noteP1:
    "Táto stránka je rozpracovaný cestovný zápisník. Zoznam je zámerne flexibilný: otváracie hodiny, dopravu a sezónne podmienky treba overiť bližšie k návšteve.",
  noteP2:
    "Niektoré miesta sú skôr nápady než potvrdené plány. Jediná rezervovaná položka je zenový zážitok v Kjóte 17. decembra.",
  footerLeft: "Cestovný zápisník · Japonsko 2026",
  footerRight: "Pre cestu, nie pre vyhľadávače.",
};

const de: LocalizedTripData = {
  languageLabel: "Sprache",
  headerBrand: "ML / Reisenotizen",
  headerSeason: "Japan · Winter 2026",
  kicker: "Persönliche Reise / 01",
  titleLine1: "Japan,",
  titleLine2: "langsam.",
  intro:
    "Zwei Wochen zwischen Tempelwegen, stillen Gärten, Stadtstraßen und kleinen Entdeckungen. Ein lebendiges Notizbuch für die Reise von Kansai nach Tokio.",
  travelWindowLabel: "Reisezeitraum",
  travelWindowDates: "13. — 31. Dezember",
  travelWindowYear: "2026 · Japan",
  stages: [
    { label: "01 / Ankunft", city: "Osaka", date: "13. Dezember 2026" },
    { label: "02 / Kansai", city: "Osaka · Kyoto", date: "14. — 17. Dezember" },
    { label: "03 / Nächstes Kapitel", city: "Tokio", date: "Ab 18. Dezember" },
  ],
  routeKicker: "Die Route",
  routeTitle: "Ein paar Daten zum Merken",
  routeMonth: "Dezember 2026",
  days: [
    {
      date: "13. Dezember · Sonntag",
      title: "Ankunft in Osaka",
      text: "Ankunftstag und erst einmal ankommen. Den Plan locker halten und Raum für die ersten Eindrücke lassen.",
    },
    {
      date: "14. — 16. Dezember",
      title: "Osaka & Umgebung",
      text: "Tempel, Viertel und mögliche Tagesausflüge in der Region Kansai erkunden.",
    },
    {
      date: "17. Dezember · Donnerstag",
      title: "Zen-Erlebnis in Kyoto",
      text: "10:30 — gebuchtes Zen-Erlebnis mit einem Mönch in der Gegend von Myōshin-ji. Ankunft bis 10:15 einplanen.",
      booked: true,
    },
    {
      date: "18. Dezember · Freitag",
      title: "Osaka → Tokio",
      text: "Fahrt nach Tokio und Beginn des nächsten Reiseabschnitts.",
    },
  ],
  bookedLabel: "Gebucht",
  placesKicker: "Orte & Ideen",
  placesTitle: "Die Ortsliste",
  placesIntro:
    "Eine kuratierte Auswahl zum Erkunden, kein fester Zeitplan. Mit den Filtern lässt sich die Liste eingrenzen und jeder Ort direkt in Google Maps öffnen.",
  placesCount: (n) => (n === 1 ? "Ort" : "Orte"),
  searchLabel: "Orte suchen",
  searchPlaceholder: "Tempel, Schreine, Gärten suchen…",
  openInMaps: "In Maps öffnen ↗",
  noResults: "Keine passenden Orte gefunden. Versuche einen anderen Namen oder eine andere Region.",
  filters: {
    all: "Alle",
    osaka: "Osaka",
    kyoto: "Kyoto",
    nara: "Nara",
    koyasan: "Koyasan",
    tokyo: "Tokio",
    daytrips: "Tagesausflüge",
  },
  kinds: {
    buddhist: "Buddhistischer Tempel",
    shinto: "Shintō-Schrein",
    zen: "Zen-Tempel",
    sacred: "Heilige Stätte",
    complex: "Tempelanlage",
    neighbourhood: "Stadtviertel",
    castle: "Burg",
    garden: "Garten",
    onsen: "Thermalort",
  },
  notes: {
    shitennoji: "Einer der ältesten offiziell verwalteten Tempel Japans.",
    isshinji: "Markanter Tempel, bekannt für seine Buddha-Statuen.",
    aizendo: "Ein ruhigerer Tempelstopp in der Gegend von Tennoji.",
    nozaki: "Tempel am Hang mit ruhiger Atmosphäre.",
    katsuoji: "Bergtempel, berühmt für seine Daruma-Figuren.",
    hozanji: "Stimmungsvoller Tempel in den Hügeln oberhalb von Ikoma.",
    todaiji: "Die Halle des Großen Buddha mit ihrer monumentalen Bronzestatue.",
    kofukuji: "Historische Tempelanlage am Nara-Park.",
    kasuga: "Von Laternen gesäumte Wege mitten im Wald.",
    horyuji: "Eine bedeutende Anlage mit einigen der ältesten erhaltenen Holzbauten der Welt.",
    myoshinji: "Große Zen-Tempelanlage; das geplante Zen-Erlebnis ist ganz in der Nähe.",
    tofukuji: "Bekannt für seine Gärten und die traditionelle Tempelarchitektur.",
    ryoanji: "Berühmter Trockenlandschafts-Steingarten.",
    kiyomizu: "Ikonischer Tempel am Hang mit hölzerner Terrasse.",
    sanjusangendo: "Lange Halle mit 1.001 Kannon-Statuen.",
    byodoin: "Die Phönixhalle am Teich in Uji.",
    kongobuji: "Haupttempel des Shingon-Buddhismus auf dem Berg Kōya.",
    okunoin: "Stimmungsvoller Waldweg zum Mausoleum von Kūkai.",
    danjo: "Historische heilige Anlage im Herzen des Bergs Kōya.",
    sensoji: "Tokios bekanntester Tempel in Asakusa.",
    zojoji: "Tempelgelände mit eindrucksvollem Blick auf den Tokyo Tower.",
    meiji: "Ein Waldheiligtum mitten in der Stadt.",
    nezu: "Bekannt für seine roten Torii-Tore und seinen Garten.",
    yanaka: "Traditionelle Einkaufsstraße mit Altstadtflair.",
    ryogoku: "Sumo-Kultur, Museen und Spaziergänge am Fluss.",
    himeji: "Eine der berühmtesten original erhaltenen Burgen Japans.",
    kokoen: "Traditionelle Gärten neben der Burg Himeji.",
    arima: "Historischer Thermalort in den Bergen.",
  },
  noteKicker: "Notiz an mich selbst",
  noteTitle1: "Raum lassen",
  noteTitle2: "für das Ungeplante.",
  noteP1:
    "Diese Seite ist ein Reisenotizbuch in Arbeit. Die Liste ist bewusst flexibel: Öffnungszeiten, Verbindungen und saisonale Bedingungen sollten kurz vor jedem Besuch geprüft werden.",
  noteP2:
    "Manche Orte sind eher Ideen als feste Pläne. Gebucht ist nur das Zen-Erlebnis in Kyoto am 17. Dezember.",
  footerLeft: "Japan-Reisenotizbuch · 2026",
  footerRight: "Gemacht für die Reise, nicht für Suchmaschinen.",
};

const ja: LocalizedTripData = {
  languageLabel: "言語",
  headerBrand: "ML / 旅のノート",
  headerSeason: "日本 · 2026年冬",
  kicker: "個人の旅 / 01",
  titleLine1: "日本を、",
  titleLine2: "ゆっくりと。",
  intro:
    "寺の参道、静かな庭園、街の通り、そして小さな発見のあいだで過ごす2週間。関西から東京への旅を綴る、生きた旅ノート。",
  travelWindowLabel: "旅行期間",
  travelWindowDates: "12月13日 — 31日",
  travelWindowYear: "2026年 · 日本",
  stages: [
    { label: "01 / 到着", city: "大阪", date: "2026年12月13日" },
    { label: "02 / 関西", city: "大阪 · 京都", date: "12月14日 — 17日" },
    { label: "03 / 次の章", city: "東京", date: "12月18日から" },
  ],
  routeKicker: "ルート",
  routeTitle: "覚えておきたい日付",
  routeMonth: "2026年12月",
  days: [
    {
      date: "12月13日（日）",
      title: "大阪に到着",
      text: "到着日。まずは落ち着くこと。予定は軽めにして、最初の印象を味わう余裕を残す。",
    },
    {
      date: "12月14日 — 16日",
      title: "大阪とその周辺",
      text: "関西エリアの寺院や街並み、日帰り旅行の候補を巡る。",
    },
    {
      date: "12月17日（木）",
      title: "京都で禅体験",
      text: "10:30 — 妙心寺エリアで僧侶による禅体験を予約済み。10:15までに到着予定。",
      booked: true,
    },
    {
      date: "12月18日（金）",
      title: "大阪 → 東京",
      text: "東京へ移動し、旅の次のパートが始まる。",
    },
  ],
  bookedLabel: "予約済み",
  placesKicker: "場所とアイデア",
  placesTitle: "行きたい場所リスト",
  placesIntro:
    "決まった予定ではなく、巡ってみたい場所を厳選したリスト。フィルターで絞り込み、Googleマップで直接開けます。",
  placesCount: () => "か所",
  searchLabel: "場所を検索",
  searchPlaceholder: "寺院、神社、庭園を検索…",
  openInMaps: "マップで開く ↗",
  noResults: "該当する場所がありません。別の名前やエリアで試してください。",
  filters: {
    all: "すべて",
    osaka: "大阪",
    kyoto: "京都",
    nara: "奈良",
    koyasan: "高野山",
    tokyo: "東京",
    daytrips: "日帰り",
  },
  kinds: {
    buddhist: "仏教寺院",
    shinto: "神社",
    zen: "禅寺",
    sacred: "聖地",
    complex: "伽藍",
    neighbourhood: "街並み",
    castle: "城",
    garden: "庭園",
    onsen: "温泉街",
  },
  notes: {
    shitennoji: "日本最古級の官寺の一つ。",
    isshinji: "仏像で知られる個性的な寺院。",
    aizendo: "天王寺エリアにある静かな寺院。",
    nozaki: "穏やかな雰囲気に包まれた山腹の寺院。",
    katsuoji: "だるまで有名な山寺。",
    hozanji: "生駒の山中にある趣深い寺院。",
    todaiji: "大仏殿と、そこに鎮座する巨大な銅造の大仏。",
    kofukuji: "奈良公園に隣接する歴史ある寺院群。",
    kasuga: "森の中、灯籠が立ち並ぶ参道。",
    horyuji: "世界最古級の木造建築群を擁する名刹。",
    myoshinji: "大規模な禅寺の伽藍。予定している禅体験はこの近く。",
    tofukuji: "庭園と伝統的な寺院建築で知られる。",
    ryoanji: "有名な枯山水の石庭。",
    kiyomizu: "山腹に建つ象徴的な寺院と木造の舞台。",
    sanjusangendo: "1001体の観音像が並ぶ長いお堂。",
    byodoin: "宇治の池のほとりに建つ鳳凰堂。",
    kongobuji: "高野山にある真言宗の総本山。",
    okunoin: "空海の御廟へと続く、神秘的な森の参道。",
    danjo: "高野山の中心にある歴史ある聖域。",
    sensoji: "浅草にある、東京で最も有名な寺院。",
    zojoji: "東京タワーを望む印象的な境内。",
    meiji: "都会の真ん中にある森の聖域。",
    nezu: "赤い鳥居と庭園で知られる神社。",
    yanaka: "昔ながらの商店街と下町の雰囲気。",
    ryogoku: "相撲文化、博物館、そして川沿いの散歩。",
    himeji: "日本で最も名高い現存天守の城の一つ。",
    kokoen: "姫路城に隣接する日本庭園。",
    arima: "山あいにある歴史ある温泉街。",
  },
  noteKicker: "自分へのメモ",
  noteTitle1: "予定外のことにも",
  noteTitle2: "余白を。",
  noteP1:
    "このページは作成中の旅ノートです。リストはあえて柔軟にしています。営業時間、交通手段、季節の状況は訪問の直前に確認すること。",
  noteP2:
    "一部の場所は確定した予定ではなくアイデアです。予約済みなのは12月17日の京都での禅体験だけです。",
  footerLeft: "日本旅ノート · 2026",
  footerRight: "検索エンジンのためではなく、旅のために。",
};

const fr: LocalizedTripData = {
  languageLabel: "Langue",
  headerBrand: "ML / Carnet de voyage",
  headerSeason: "Japon · Hiver 2026",
  kicker: "Voyage personnel / 01",
  titleLine1: "Le Japon,",
  titleLine2: "lentement.",
  intro:
    "Deux semaines entre chemins de temples, jardins paisibles, rues de la ville et petites découvertes. Un carnet vivant pour le voyage du Kansai jusqu’à Tokyo.",
  travelWindowLabel: "Période du voyage",
  travelWindowDates: "13 — 31 décembre",
  travelWindowYear: "2026 · Japon",
  stages: [
    { label: "01 / Arrivée", city: "Osaka", date: "13 décembre 2026" },
    { label: "02 / Kansai", city: "Osaka · Kyoto", date: "14 — 17 décembre" },
    { label: "03 / Chapitre suivant", city: "Tokyo", date: "À partir du 18 décembre" },
  ],
  routeKicker: "L’itinéraire",
  routeTitle: "Quelques dates à retenir",
  routeMonth: "Décembre 2026",
  days: [
    {
      date: "13 décembre · dimanche",
      title: "Arrivée à Osaka",
      text: "Jour d’arrivée et installation. Garder un programme léger et laisser place aux premières impressions.",
    },
    {
      date: "14 — 16 décembre",
      title: "Osaka et ses environs",
      text: "Explorer temples, quartiers et excursions possibles dans la région du Kansai.",
    },
    {
      date: "17 décembre · jeudi",
      title: "Expérience zen à Kyoto",
      text: "10 h 30 — expérience zen réservée avec un moine dans le quartier du Myōshin-ji. Prévoir d’arriver avant 10 h 15.",
      booked: true,
    },
    {
      date: "18 décembre · vendredi",
      title: "Osaka → Tokyo",
      text: "Trajet vers Tokyo et début de la suite du voyage.",
    },
  ],
  bookedLabel: "Réservé",
  placesKicker: "Lieux et idées",
  placesTitle: "La liste des lieux",
  placesIntro:
    "Une sélection de lieux à explorer, pas un programme figé. Utilisez les filtres pour affiner la liste et ouvrez un lieu directement dans Google Maps.",
  placesCount: (n) => (n <= 1 ? "lieu" : "lieux"),
  searchLabel: "Rechercher des lieux",
  searchPlaceholder: "Rechercher temples, sanctuaires, jardins…",
  openInMaps: "Ouvrir dans Maps ↗",
  noResults: "Aucun lieu ne correspond à cette recherche. Essayez un autre nom ou une autre région.",
  filters: {
    all: "Tous",
    osaka: "Osaka",
    kyoto: "Kyoto",
    nara: "Nara",
    koyasan: "Koyasan",
    tokyo: "Tokyo",
    daytrips: "Excursions",
  },
  kinds: {
    buddhist: "Temple bouddhiste",
    shinto: "Sanctuaire shintô",
    zen: "Temple zen",
    sacred: "Site sacré",
    complex: "Ensemble de temples",
    neighbourhood: "Quartier",
    castle: "Château",
    garden: "Jardin",
    onsen: "Village thermal",
  },
  notes: {
    shitennoji: "L’un des plus anciens temples officiellement administrés du Japon.",
    isshinji: "Temple singulier connu pour ses statues de Bouddha.",
    aizendo: "Une étape plus calme dans le quartier de Tennoji.",
    nozaki: "Temple à flanc de colline à l’atmosphère paisible.",
    katsuoji: "Temple de montagne célèbre pour ses poupées daruma.",
    hozanji: "Temple envoûtant dans les collines au-dessus d’Ikoma.",
    todaiji: "Le pavillon du Grand Bouddha et sa monumentale statue de bronze.",
    kofukuji: "Ensemble de temples historique en bordure du parc de Nara.",
    kasuga: "Allées bordées de lanternes au cœur de la forêt.",
    horyuji: "Un ensemble emblématique qui abrite certaines des plus anciennes constructions en bois du monde.",
    myoshinji: "Vaste ensemble de temples zen ; l’expérience zen prévue se trouve à proximité.",
    tofukuji: "Réputé pour ses jardins et son architecture traditionnelle.",
    ryoanji: "Célèbre jardin sec de pierres.",
    kiyomizu: "Temple emblématique à flanc de colline et sa terrasse en bois.",
    sanjusangendo: "Long pavillon abritant 1 001 statues de Kannon.",
    byodoin: "Le pavillon du Phénix au bord de l’étang, à Uji.",
    kongobuji: "Temple principal du bouddhisme Shingon sur le mont Kōya.",
    okunoin: "Chemin forestier envoûtant menant au mausolée de Kūkai.",
    danjo: "Ensemble sacré historique au cœur du mont Kōya.",
    sensoji: "Le temple le plus connu de Tokyo, à Asakusa.",
    zojoji: "Enceinte de temple avec une vue saisissante sur la Tokyo Tower.",
    meiji: "Un sanctuaire forestier au milieu de la ville.",
    nezu: "Connu pour ses torii rouges et son jardin.",
    yanaka: "Rue commerçante traditionnelle et ambiance de vieille ville.",
    ryogoku: "Culture du sumo, musées et promenades au bord du fleuve.",
    himeji: "L’un des châteaux d’origine les plus célèbres du Japon.",
    kokoen: "Jardins traditionnels à côté du château de Himeji.",
    arima: "Village thermal historique niché dans les montagnes.",
  },
  noteKicker: "Note pour moi-même",
  noteTitle1: "Laisser de la place",
  noteTitle2: "à l’imprévu.",
  noteP1:
    "Cette page est un carnet de voyage en cours. La liste est volontairement souple : horaires d’ouverture, transports et conditions saisonnières sont à vérifier peu avant chaque visite.",
  noteP2:
    "Certains lieux sont des idées plutôt que des projets confirmés. La seule réservation est l’expérience zen à Kyoto le 17 décembre.",
  footerLeft: "Carnet de voyage au Japon · 2026",
  footerRight: "Fait pour le voyage, pas pour les moteurs de recherche.",
};

const ar: LocalizedTripData = {
  languageLabel: "اللغة",
  headerBrand: "ML / ملاحظات السفر",
  headerSeason: "اليابان · شتاء 2026",
  kicker: "رحلة شخصية / 01",
  titleLine1: "اليابان،",
  titleLine2: "على مهل.",
  intro:
    "أسبوعان بين دروب المعابد والحدائق الهادئة وشوارع المدن والاكتشافات الصغيرة. دفتر حيّ لرحلة من كانساي إلى طوكيو.",
  travelWindowLabel: "فترة الرحلة",
  travelWindowDates: "13 — 31 ديسمبر",
  travelWindowYear: "2026 · اليابان",
  stages: [
    { label: "01 / الوصول", city: "أوساكا", date: "13 ديسمبر 2026" },
    { label: "02 / كانساي", city: "أوساكا · كيوتو", date: "14 — 17 ديسمبر" },
    { label: "03 / الفصل التالي", city: "طوكيو", date: "ابتداءً من 18 ديسمبر" },
  ],
  routeKicker: "المسار",
  routeTitle: "تواريخ تستحق التذكّر",
  routeMonth: "ديسمبر 2026",
  days: [
    {
      date: "13 ديسمبر · الأحد",
      title: "الوصول إلى أوساكا",
      text: "يوم الوصول والاستقرار. جدول خفيف مع ترك مساحة للانطباعات الأولى.",
    },
    {
      date: "14 — 16 ديسمبر",
      title: "أوساكا وضواحيها",
      text: "استكشاف المعابد والأحياء والرحلات اليومية المحتملة في منطقة كانساي.",
    },
    {
      date: "17 ديسمبر · الخميس",
      title: "تجربة زن في كيوتو",
      text: "10:30 — تجربة زن محجوزة مع راهب في منطقة ميوشين-جي. يُفضّل الوصول قبل 10:15.",
      booked: true,
    },
    {
      date: "18 ديسمبر · الجمعة",
      title: "أوساكا ← طوكيو",
      text: "السفر إلى طوكيو وبدء الجزء التالي من الرحلة.",
    },
  ],
  bookedLabel: "محجوز",
  placesKicker: "أماكن وأفكار",
  placesTitle: "قائمة الأماكن",
  placesIntro:
    "قائمة مختارة للاستكشاف، وليست جدولًا ثابتًا. استخدم عوامل التصفية لتضييق القائمة وافتح أي مكان مباشرة في خرائط Google.",
  placesCount: (n) => (n === 1 ? "مكان" : "أماكن"),
  searchLabel: "ابحث عن الأماكن",
  searchPlaceholder: "ابحث عن معابد، أضرحة، حدائق…",
  openInMaps: "افتح في الخرائط ↗",
  noResults: "لا توجد أماكن مطابقة لهذا البحث. جرّب اسمًا آخر أو منطقة أخرى.",
  filters: {
    all: "الكل",
    osaka: "أوساكا",
    kyoto: "كيوتو",
    nara: "نارا",
    koyasan: "كوياسان",
    tokyo: "طوكيو",
    daytrips: "رحلات يومية",
  },
  kinds: {
    buddhist: "معبد بوذي",
    shinto: "ضريح شنتو",
    zen: "معبد زن",
    sacred: "موقع مقدس",
    complex: "مجمع معابد",
    neighbourhood: "حي",
    castle: "قلعة",
    garden: "حديقة",
    onsen: "بلدة ينابيع حارة",
  },
  notes: {
    shitennoji: "أحد أقدم المعابد التي أدارتها الدولة رسميًا في اليابان.",
    isshinji: "معبد مميز يشتهر بتماثيل بوذا.",
    aizendo: "محطة أكثر هدوءًا في منطقة تينوجي.",
    nozaki: "معبد على سفح تل بأجواء هادئة.",
    katsuoji: "معبد جبلي يشتهر بدمى داروما.",
    hozanji: "معبد ساحر في التلال المطلة على إيكوما.",
    todaiji: "قاعة بوذا الكبير وتمثاله البرونزي الضخم.",
    kofukuji: "مجمع معابد تاريخي بجوار حديقة نارا.",
    kasuga: "ممرات تصطف على جانبيها الفوانيس وسط الغابة.",
    horyuji: "مجمع بارز يضم بعضًا من أقدم المباني الخشبية الباقية في العالم.",
    myoshinji: "مجمع كبير لمعابد الزن؛ وتجربة الزن المخطط لها قريبة منه.",
    tofukuji: "يشتهر بحدائقه وعمارته التقليدية.",
    ryoanji: "حديقة صخرية جافة شهيرة.",
    kiyomizu: "معبد أيقوني على سفح التل بشرفته الخشبية.",
    sanjusangendo: "قاعة طويلة تضم 1001 تمثال لكانون.",
    byodoin: "قاعة العنقاء بجوار البركة في أوجي.",
    kongobuji: "المعبد الرئيسي لبوذية شينغون على جبل كويا.",
    okunoin: "ممر ساحر في الغابة يؤدي إلى ضريح كوكاي.",
    danjo: "مجمع مقدس تاريخي في قلب جبل كويا.",
    sensoji: "أشهر معابد طوكيو، في حي أساكوسا.",
    zojoji: "ساحات معبد بإطلالة لافتة على برج طوكيو.",
    meiji: "ملاذ وسط الغابة في قلب المدينة.",
    nezu: "يشتهر ببوابات توري الحمراء وحديقته.",
    yanaka: "شارع تسوق تقليدي بأجواء المدينة القديمة.",
    ryogoku: "ثقافة السومو والمتاحف والتنزه على ضفاف النهر.",
    himeji: "إحدى أشهر القلاع الأصلية في اليابان.",
    kokoen: "حدائق تقليدية بجوار قلعة هيميجي.",
    arima: "بلدة ينابيع حارة تاريخية في الجبال.",
  },
  noteKicker: "ملاحظة لنفسي",
  noteTitle1: "اترك مساحة",
  noteTitle2: "لما لم يُخطَّط له.",
  noteP1:
    "هذه الصفحة دفتر سفر قيد العمل. القائمة مرنة عمدًا: يجب التحقق من مواعيد العمل والمواصلات والظروف الموسمية قبل كل زيارة.",
  noteP2:
    "بعض الأماكن أفكار وليست خططًا مؤكدة. الحجز الوحيد هو تجربة الزن في كيوتو يوم 17 ديسمبر.",
  footerLeft: "دفتر رحلة اليابان · 2026",
  footerRight: "صُنع للرحلة، لا لمحركات البحث.",
};

export const TRIP_DATA: Record<PortfolioLocale, LocalizedTripData> = { en, sk, de, ja, fr, ar };

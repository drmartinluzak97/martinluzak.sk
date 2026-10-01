import { PortfolioLocale, LanguageOption, PortfolioDictionary } from "./types";
import { en } from "./dictionaries/en";
import { sk } from "./dictionaries/sk";
import { de } from "./dictionaries/de";
import { ja } from "./dictionaries/ja";
import { fr } from "./dictionaries/fr";
import { ar } from "./dictionaries/ar";

export const LANGUAGES: LanguageOption[] = [
  { code: "en", name: "English", nativeName: "English", flag: "🇬🇧", dir: "ltr" },
  { code: "sk", name: "Slovak", nativeName: "Slovenčina", flag: "🇸🇰", dir: "ltr" },
  { code: "de", name: "German", nativeName: "Deutsch", flag: "🇩🇪", dir: "ltr" },
  { code: "ja", name: "Japanese", nativeName: "日本語", flag: "🇯🇵", dir: "ltr" },
  { code: "fr", name: "French", nativeName: "Français", flag: "🇫🇷", dir: "ltr" },
  { code: "ar", name: "Arabic", nativeName: "العربية", flag: "🇸🇦", dir: "rtl" },
];

export const DICTIONARIES: Record<PortfolioLocale, PortfolioDictionary> = {
  en,
  sk,
  de,
  ja,
  fr,
  ar,
};

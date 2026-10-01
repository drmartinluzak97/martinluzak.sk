export type PortfolioLocale = "en" | "sk" | "de" | "ja" | "fr" | "ar";

export interface LanguageOption {
  code: PortfolioLocale;
  name: string;
  nativeName: string;
  flag: string;
  dir?: "ltr" | "rtl";
}

export interface PortfolioDictionary {
  nav: {
    home: string;
    about: string;
    projects: string;
    blog: string;
    notes: string;
    certificates: string;
    workbench: string;
    search: string;
    searchPlaceholder: string;
    aboutMeCV: string;
    mySideProjects: string;
  };
  hero: {
    greeting: string;
    tagline: string;
    description: string;
    ctaAbout: string;
    ctaProjects: string;
    cardStatus: string;
    cardLocation: string;
    cardRole: string;
    lookingForTitle: string;
    lookingForItem1Title: string;
    lookingForItem1Desc: string;
    lookingForItem2Title: string;
    lookingForItem2Desc: string;
    lookingForItem3Title: string;
    lookingForItem3Desc: string;
    languagesSpoken: string;
    remoteBadge: string;
  };
  footer: {
    talkBadge: string;
    talkHeadingPrefix: string;
    talkHeadingHighlight: string;
    conversation: string;
    moreAboutMe: string;
    quickContact: string;
    findMeElsewhere: string;
    forgedWith: string;
    andCode: string;
    reportIssue: string;
    copyrightSlogan: string;
  };
}

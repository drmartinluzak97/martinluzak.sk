"use client";

import { useMemo, useState } from "react";
import { useLanguage } from "@/components/language-context";
import { TRIP_DATA, TRIP_FILTERS, TRIP_PLACES, type TripFilterKey } from "@/lib/i18n/dictionaries/trip-data";

export default function TripClient() {
  const { locale, setLocale, languages } = useLanguage();
  const t = TRIP_DATA[locale] ?? TRIP_DATA.en;
  const isArabic = locale === "ar";
  const [area, setArea] = useState<TripFilterKey>("all");
  const [query, setQuery] = useState("");
  const visiblePlaces = useMemo(() => {
    const q = query.toLowerCase().trim();
    return TRIP_PLACES.filter((place) => {
      const matchesArea = area === "all" || place.area === area;
      // Search in every language so a name typed in any script still matches.
      const haystack = [place.name, place.jaName, t.kinds[place.kind], t.notes[place.id], TRIP_DATA.en.kinds[place.kind]]
        .join(" ")
        .toLowerCase();
      return matchesArea && haystack.includes(q);
    });
  }, [area, query, t]);

  return (
    <main className={`min-h-screen ${isArabic ? "[&_*]:tracking-normal!" : ""} bg-[#f4f1e9] text-[#20251f] selection:bg-[#c6a66b] selection:text-[#20251f]`}>
      <div className="mx-auto max-w-6xl px-5 pb-20 pt-7 sm:px-8 lg:px-12">
        <header className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-b border-[#d8d2c5] pb-5">
          <a href="/" className="text-xs font-semibold uppercase tracking-[0.24em] text-[#5c6559]">{t.headerBrand}</a>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
            <span className="text-xs uppercase tracking-[0.2em] text-[#77796f]">{t.headerSeason}</span>
            <nav aria-label={t.languageLabel} className="flex flex-wrap gap-1" dir="ltr">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  type="button"
                  lang={lang.code}
                  title={lang.nativeName}
                  aria-label={lang.nativeName}
                  aria-pressed={lang.code === locale}
                  onClick={() => setLocale(lang.code)}
                  className={`min-w-9 border px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] transition-colors ${lang.code === locale ? "border-[#263328] bg-[#263328] text-[#f4f1e9]" : "border-[#c9c1b2] text-[#62675e] hover:border-[#8a6e43]"}`}
                >
                  {lang.code}
                </button>
              ))}
            </nav>
          </div>
        </header>

        <section className="relative overflow-hidden py-16 sm:py-24">
          <div className="pointer-events-none absolute end-0 top-8 hidden h-64 w-64 rounded-full border border-[#d8d2c5] sm:block" />
          <div className="pointer-events-none absolute end-8 top-16 hidden h-48 w-48 rounded-full border border-[#d8d2c5] sm:block" />
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#8a6e43]">{t.kicker}</p>
          <h1 className="max-w-3xl font-serif text-6xl leading-[0.98] tracking-[-0.045em] sm:text-8xl">{t.titleLine1}<br /><span className="italic text-[#8a6e43]">{t.titleLine2}</span></h1>
          <div className="mt-8 grid gap-8 sm:grid-cols-[1fr_260px] sm:items-end">
            <p className="max-w-xl text-base leading-8 text-[#5d6258] sm:text-lg">{t.intro}</p>
            <div className="border-s border-[#c9c1b2] ps-5">
              <p className="text-xs uppercase tracking-[0.2em] text-[#8a6e43]">{t.travelWindowLabel}</p>
              <p className="mt-2 font-serif text-2xl">{t.travelWindowDates}</p>
              <p className="mt-1 text-sm text-[#77796f]">{t.travelWindowYear}</p>
            </div>
          </div>
        </section>

        <section className="grid gap-px overflow-hidden border border-[#d8d2c5] bg-[#d8d2c5] sm:grid-cols-3">
          {t.stages.map((stage) => <div key={stage.label} className="bg-[#eeeadf] p-6 sm:p-7"><p className="text-xs uppercase tracking-[0.2em] text-[#8a6e43]">{stage.label}</p><p className="mt-3 font-serif text-2xl">{stage.city}</p><p className="mt-1 text-sm text-[#77796f]">{stage.date}</p></div>)}
        </section>

        <section className="py-16 sm:py-20">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div><p className="text-xs uppercase tracking-[0.25em] text-[#8a6e43]">{t.routeKicker}</p><h2 className="mt-2 font-serif text-4xl tracking-tight sm:text-5xl">{t.routeTitle}</h2></div>
            <span className="text-sm text-[#77796f]">{t.routeMonth}</span>
          </div>
          <div className="grid gap-0 md:grid-cols-2">
            {t.days.map((day, index) => <div key={day.date} className={`border-t border-[#c9c1b2] py-6 ${index % 2 === 0 ? "md:pe-10" : "md:ps-10"}`}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8a6e43]">{day.date}</p><h3 className="mt-2 font-serif text-2xl">{day.title}</h3><p className="mt-2 max-w-md text-sm leading-7 text-[#686d63]">{day.text}</p>{day.booked && <span className="mt-3 inline-flex border border-[#8a6e43]/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#80633b]">{t.bookedLabel}</span>}
            </div>)}
          </div>
        </section>

        <section className="border-t border-[#c9c1b2] py-16 sm:py-20">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div><p className="text-xs uppercase tracking-[0.25em] text-[#8a6e43]">{t.placesKicker}</p><h2 className="mt-2 font-serif text-4xl tracking-tight sm:text-5xl">{t.placesTitle}</h2><p className="mt-3 max-w-xl text-sm leading-7 text-[#686d63]">{t.placesIntro}</p></div>
            <p className="font-serif text-3xl text-[#8a6e43]">{visiblePlaces.length.toString().padStart(2, "0")} <span className="font-sans text-xs uppercase tracking-widest text-[#77796f]">{t.placesCount(visiblePlaces.length)}</span></p>
          </div>

          <label className="mb-5 block">
            <span className="sr-only">{t.searchLabel}</span>
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={t.searchPlaceholder} className="w-full border-b border-[#bdb5a6] bg-transparent px-0 py-4 text-base outline-none placeholder:text-[#969589] focus:border-[#8a6e43]" />
          </label>
          <div className="mb-8 flex gap-2 overflow-x-auto pb-2">
            {TRIP_FILTERS.map((item) => <button key={item} type="button" aria-pressed={area === item} onClick={() => setArea(item)} className={`shrink-0 border px-4 py-2 text-xs uppercase tracking-[0.13em] transition-colors ${area === item ? "border-[#263328] bg-[#263328] text-[#f4f1e9]" : "border-[#c9c1b2] text-[#62675e] hover:border-[#8a6e43]"}`}>{t.filters[item]}</button>)}
          </div>

          <div className="grid gap-x-8 sm:grid-cols-2">
            {visiblePlaces.map((place, index) => <article key={place.id} className="group flex gap-4 border-t border-[#d8d2c5] py-5">
              <span className="pt-1 font-serif text-sm text-[#a69b88]">{String(index + 1).padStart(2, "0")}</span>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2"><h3 className="font-serif text-xl">{locale === "ja" ? place.jaName : place.name}</h3>{place.booked && <span className="border border-[#8a6e43]/40 px-2 py-0.5 text-[9px] uppercase tracking-widest text-[#80633b]">{t.bookedLabel}</span>}</div>
                <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-[#8a6e43]">{t.filters[place.area]} · {t.kinds[place.kind]}</p>
                <p className="mt-2 text-sm leading-6 text-[#686d63]">{t.notes[place.id]}</p>
                <a className="mt-3 inline-block text-xs font-semibold uppercase tracking-[0.15em] text-[#344638] underline decoration-[#b9a47f] underline-offset-4 hover:text-[#8a6e43]" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.name + " Japan")}`} target="_blank" rel="noreferrer">{t.openInMaps}</a>
              </div>
            </article>)}
          </div>
          {visiblePlaces.length === 0 && <p className="border-t border-[#d8d2c5] py-10 text-sm text-[#77796f]">{t.noResults}</p>}
        </section>

        <section className="border-t border-[#c9c1b2] py-16 sm:py-20">
          <div className="grid gap-8 sm:grid-cols-[1fr_1fr]">
            <div><p className="text-xs uppercase tracking-[0.25em] text-[#8a6e43]">{t.noteKicker}</p><h2 className="mt-2 font-serif text-4xl">{t.noteTitle1}<br /><span className="italic text-[#8a6e43]">{t.noteTitle2}</span></h2></div>
            <div className="space-y-4 text-sm leading-7 text-[#686d63]"><p>{t.noteP1}</p><p>{t.noteP2}</p></div>
          </div>
        </section>

        <footer className="flex flex-wrap items-center justify-between gap-3 border-t border-[#c9c1b2] pt-5 text-[10px] uppercase tracking-[0.18em] text-[#8b8b7e]"><span>{t.footerLeft}</span><span>{t.footerRight}</span></footer>
      </div>
    </main>
  );
}

"use client";

import { useMemo, useState } from "react";

type Place = {
  name: string;
  area: "Osaka" | "Kyoto" | "Nara" | "Koyasan" | "Tokyo" | "Day trips";
  kind: string;
  note: string;
  priority?: "Booked" | "Consider";
};

const places: Place[] = [
  { name: "Shitennō-ji", area: "Osaka", kind: "Buddhist temple", note: "One of Japan’s oldest officially administered temples." },
  { name: "Isshin-ji", area: "Osaka", kind: "Buddhist temple", note: "Distinctive temple known for its Buddha statues." },
  { name: "Aizendō Shōman-in", area: "Osaka", kind: "Buddhist temple", note: "A quieter temple stop in the Tennoji area." },
  { name: "Nozaki Kannon (Jigen-ji)", area: "Osaka", kind: "Buddhist temple", note: "Hillside temple with a calm atmosphere." },
  { name: "Katsuo-ji", area: "Osaka", kind: "Buddhist temple", note: "Mountain temple famous for daruma dolls." },
  { name: "Hōzan-ji", area: "Nara", kind: "Buddhist temple", note: "Atmospheric temple in the hills above Ikoma." },
  { name: "Tōdai-ji", area: "Nara", kind: "Buddhist temple", note: "The Great Buddha Hall and its monumental bronze Buddha." },
  { name: "Kōfuku-ji", area: "Nara", kind: "Buddhist temple", note: "Historic temple complex beside Nara Park." },
  { name: "Kasuga Taisha", area: "Nara", kind: "Shinto shrine", note: "Lantern-lined paths in a forest setting." },
  { name: "Hōryū-ji", area: "Day trips", kind: "Buddhist temple", note: "A landmark complex with some of the world’s oldest surviving wooden structures." },
  { name: "Myōshin-ji", area: "Kyoto", kind: "Zen temple", note: "Large Zen temple complex; the planned Zen experience is nearby.", priority: "Booked" },
  { name: "Tōfuku-ji", area: "Kyoto", kind: "Zen temple", note: "Known for its gardens and traditional temple architecture." },
  { name: "Ryōan-ji", area: "Kyoto", kind: "Zen temple", note: "Famous dry landscape rock garden." },
  { name: "Kiyomizu-dera", area: "Kyoto", kind: "Buddhist temple", note: "Iconic hillside temple and wooden terrace." },
  { name: "Sanjūsangen-dō", area: "Kyoto", kind: "Buddhist temple", note: "Long hall containing 1,001 statues of Kannon." },
  { name: "Byōdō-in", area: "Kyoto", kind: "Buddhist temple", note: "The Phoenix Hall beside the pond in Uji." },
  { name: "Kongōbu-ji", area: "Koyasan", kind: "Buddhist temple", note: "Head temple of Shingon Buddhism on Mount Kōya." },
  { name: "Okunoin Cemetery", area: "Koyasan", kind: "Sacred site", note: "Atmospheric forest path leading to the mausoleum of Kūkai." },
  { name: "Danjo Garan", area: "Koyasan", kind: "Temple complex", note: "Historic sacred complex at the heart of Mount Kōya." },
  { name: "Sensō-ji", area: "Tokyo", kind: "Buddhist temple", note: "Tokyo’s best-known temple in Asakusa." },
  { name: "Zōjō-ji", area: "Tokyo", kind: "Buddhist temple", note: "Temple grounds with a striking view toward Tokyo Tower." },
  { name: "Meiji Jingū", area: "Tokyo", kind: "Shinto shrine", note: "A forest sanctuary in the middle of the city." },
  { name: "Nezu-jinja", area: "Tokyo", kind: "Shinto shrine", note: "Known for its red torii gates and garden." },
  { name: "Yanaka Ginza", area: "Tokyo", kind: "Neighbourhood", note: "Traditional shopping street and old-town atmosphere." },
  { name: "Ryōgoku", area: "Tokyo", kind: "Neighbourhood", note: "Sumo culture, museums and riverside walks." },
  { name: "Himeji Castle", area: "Day trips", kind: "Castle", note: "One of Japan’s most celebrated original castles." },
  { name: "Kōko-en Garden", area: "Day trips", kind: "Garden", note: "Traditional gardens next to Himeji Castle." },
  { name: "Arima Onsen", area: "Day trips", kind: "Hot spring town", note: "Historic hot-spring town in the mountains." },
];

const areas = ["All", "Osaka", "Kyoto", "Nara", "Koyasan", "Tokyo", "Day trips"] as const;

export default function TripClient() {
  const [area, setArea] = useState<(typeof areas)[number]>("All");
  const [query, setQuery] = useState("");
  const visiblePlaces = useMemo(() => places.filter((place) => {
    const matchesArea = area === "All" || place.area === area;
    const haystack = (place.name + " " + place.kind + " " + place.note).toLowerCase();
    return matchesArea && haystack.includes(query.toLowerCase().trim());
  }), [area, query]);

  return (
    <main className="min-h-screen bg-[#f4f1e9] text-[#20251f] selection:bg-[#c6a66b] selection:text-[#20251f]">
      <div className="mx-auto max-w-6xl px-5 pb-20 pt-7 sm:px-8 lg:px-12">
        <header className="flex items-center justify-between border-b border-[#d8d2c5] pb-5">
          <a href="/" className="text-xs font-semibold uppercase tracking-[0.24em] text-[#5c6559]">ML / Travel notes</a>
          <span className="text-xs uppercase tracking-[0.2em] text-[#77796f]">Japan · Winter 2026</span>
        </header>

        <section className="relative overflow-hidden py-16 sm:py-24">
          <div className="pointer-events-none absolute right-0 top-8 hidden h-64 w-64 rounded-full border border-[#d8d2c5] sm:block" />
          <div className="pointer-events-none absolute right-8 top-16 hidden h-48 w-48 rounded-full border border-[#d8d2c5] sm:block" />
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#8a6e43]">Personal journey / 01</p>
          <h1 className="max-w-3xl font-serif text-6xl leading-[0.98] tracking-[-0.045em] sm:text-8xl">Japan,<br /><span className="italic text-[#8a6e43]">slowly.</span></h1>
          <div className="mt-8 grid gap-8 sm:grid-cols-[1fr_260px] sm:items-end">
            <p className="max-w-xl text-base leading-8 text-[#5d6258] sm:text-lg">Two weeks between temple paths, quiet gardens, city streets and small discoveries. A living notebook for the journey from Kansai to Tokyo.</p>
            <div className="border-l border-[#c9c1b2] pl-5">
              <p className="text-xs uppercase tracking-[0.2em] text-[#8a6e43]">Travel window</p>
              <p className="mt-2 font-serif text-2xl">13 — 31 December</p>
              <p className="mt-1 text-sm text-[#77796f]">2026 · Japan</p>
            </div>
          </div>
        </section>

        <section className="grid gap-px overflow-hidden border border-[#d8d2c5] bg-[#d8d2c5] sm:grid-cols-3">
          <div className="bg-[#eeeadf] p-6 sm:p-7"><p className="text-xs uppercase tracking-[0.2em] text-[#8a6e43]">01 / Arrival</p><p className="mt-3 font-serif text-2xl">Osaka</p><p className="mt-1 text-sm text-[#77796f]">13 December 2026</p></div>
          <div className="bg-[#eeeadf] p-6 sm:p-7"><p className="text-xs uppercase tracking-[0.2em] text-[#8a6e43]">02 / Kansai</p><p className="mt-3 font-serif text-2xl">Osaka · Kyoto</p><p className="mt-1 text-sm text-[#77796f]">14 — 17 December</p></div>
          <div className="bg-[#eeeadf] p-6 sm:p-7"><p className="text-xs uppercase tracking-[0.2em] text-[#8a6e43]">03 / Next chapter</p><p className="mt-3 font-serif text-2xl">Tokyo</p><p className="mt-1 text-sm text-[#77796f]">From 18 December</p></div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div><p className="text-xs uppercase tracking-[0.25em] text-[#8a6e43]">The route</p><h2 className="mt-2 font-serif text-4xl tracking-tight sm:text-5xl">A few dates to remember</h2></div>
            <span className="text-sm text-[#77796f]">December 2026</span>
          </div>
          <div className="grid gap-0 md:grid-cols-2">
            <div className="border-t border-[#c9c1b2] py-6 md:pr-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8a6e43]">13 December · Sunday</p><h3 className="mt-2 font-serif text-2xl">Arrival in Osaka</h3><p className="mt-2 max-w-md text-sm leading-7 text-[#686d63]">Arrival day and settling in. Keep the schedule light and leave room for the first impressions.</p>
            </div>
            <div className="border-t border-[#c9c1b2] py-6 md:pl-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8a6e43]">14 — 16 December</p><h3 className="mt-2 font-serif text-2xl">Osaka &amp; surroundings</h3><p className="mt-2 max-w-md text-sm leading-7 text-[#686d63]">Explore temples, neighbourhoods and possible day trips around the Kansai region.</p>
            </div>
            <div className="border-t border-[#c9c1b2] py-6 md:pr-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8a6e43]">17 December · Thursday</p><h3 className="mt-2 font-serif text-2xl">Zen experience in Kyoto</h3><p className="mt-2 max-w-md text-sm leading-7 text-[#686d63]">10:30 — booked Zen experience with a monk in the Myōshin-ji area. Plan to arrive by 10:15.</p><span className="mt-3 inline-flex border border-[#8a6e43]/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#80633b]">Booked</span>
            </div>
            <div className="border-t border-[#c9c1b2] py-6 md:pl-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8a6e43]">18 December · Friday</p><h3 className="mt-2 font-serif text-2xl">Osaka → Tokyo</h3><p className="mt-2 max-w-md text-sm leading-7 text-[#686d63]">Travel to Tokyo and begin the next part of the journey.</p></div>
          </div>
        </section>

        <section className="border-t border-[#c9c1b2] py-16 sm:py-20">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div><p className="text-xs uppercase tracking-[0.25em] text-[#8a6e43]">Places &amp; ideas</p><h2 className="mt-2 font-serif text-4xl tracking-tight sm:text-5xl">The places list</h2><p className="mt-3 max-w-xl text-sm leading-7 text-[#686d63]">A curated shortlist to explore, not a fixed schedule. Use the filters to narrow the list and open a place directly in Google Maps.</p></div>
            <p className="font-serif text-3xl text-[#8a6e43]">{visiblePlaces.length.toString().padStart(2, "0")} <span className="font-sans text-xs uppercase tracking-widest text-[#77796f]">places</span></p>
          </div>

          <label className="mb-5 block">
            <span className="sr-only">Search places</span>
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search temples, shrines, gardens…" className="w-full border-b border-[#bdb5a6] bg-transparent px-0 py-4 text-base outline-none placeholder:text-[#969589] focus:border-[#8a6e43]" />
          </label>
          <div className="mb-8 flex gap-2 overflow-x-auto pb-2">
            {areas.map((item) => <button key={item} onClick={() => setArea(item)} className={\`shrink-0 border px-4 py-2 text-xs uppercase tracking-[0.13em] transition-colors \${area === item ? "border-[#263328] bg-[#263328] text-[#f4f1e9]" : "border-[#c9c1b2] text-[#62675e] hover:border-[#8a6e43]"}\`}>{item}</button>)}
          </div>

          <div className="grid gap-x-8 sm:grid-cols-2">
            {visiblePlaces.map((place, index) => <article key={place.name} className="group flex gap-4 border-t border-[#d8d2c5] py-5">
              <span className="pt-1 font-serif text-sm text-[#a69b88]">{String(index + 1).padStart(2, "0")}</span>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2"><h3 className="font-serif text-xl">{place.name}</h3>{place.priority && <span className="border border-[#8a6e43]/40 px-2 py-0.5 text-[9px] uppercase tracking-widest text-[#80633b]">{place.priority}</span>}</div>
                <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-[#8a6e43]">{place.area} · {place.kind}</p>
                <p className="mt-2 text-sm leading-6 text-[#686d63]">{place.note}</p>
                <a className="mt-3 inline-block text-xs font-semibold uppercase tracking-[0.15em] text-[#344638] underline decoration-[#b9a47f] underline-offset-4 hover:text-[#8a6e43]" href={\`https://www.google.com/maps/search/?api=1&query=\${encodeURIComponent(place.name + " Japan")}\`} target="_blank" rel="noreferrer">Open in Maps ↗</a>
              </div>
            </article>)}
          </div>
          {visiblePlaces.length === 0 && <p className="border-t border-[#d8d2c5] py-10 text-sm text-[#77796f]">No places match this search. Try another name or area.</p>}
        </section>

        <section className="border-t border-[#c9c1b2] py-16 sm:py-20">
          <div className="grid gap-8 sm:grid-cols-[1fr_1fr]">
            <div><p className="text-xs uppercase tracking-[0.25em] text-[#8a6e43]">A note to self</p><h2 className="mt-2 font-serif text-4xl">Leave room<br /><span className="italic text-[#8a6e43]">for the unplanned.</span></h2></div>
            <div className="space-y-4 text-sm leading-7 text-[#686d63]"><p>This page is a working travel notebook. The list is intentionally flexible: opening hours, transport and seasonal conditions should be checked closer to each visit.</p><p>Some places are ideas rather than confirmed plans. The only item marked as booked is the Zen experience in Kyoto on 17 December.</p></div>
          </div>
        </section>

        <footer className="flex flex-wrap items-center justify-between gap-3 border-t border-[#c9c1b2] pt-5 text-[10px] uppercase tracking-[0.18em] text-[#8b8b7e]"><span>Japan travel notebook · 2026</span><span>Made for the journey, not the search engines.</span></footer>
      </div>
    </main>
  );
}

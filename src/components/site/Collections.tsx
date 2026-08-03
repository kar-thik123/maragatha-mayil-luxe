import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";
import necklaces from "@/assets/cat-necklaces.jpg";
import chains from "@/assets/cat-chains.jpg";
import bangles from "@/assets/cat-bangles.jpg";
import bracelets from "@/assets/cat-bracelets.jpg";
import rings from "@/assets/cat-rings.jpg";
import earrings from "@/assets/cat-earrings.jpg";
import anklets from "@/assets/cat-anklets.jpg";
import bridal from "@/assets/cat-bridal.jpg";
import daily from "@/assets/cat-daily.jpg";
import gift from "@/assets/cat-gift.jpg";

const items = [
  { title: "Necklaces", note: "Statement & temple", img: necklaces },
  { title: "Chains", note: "Fine everyday links", img: chains },
  { title: "Bangles", note: "Traditional sets", img: bangles },
  { title: "Bracelets", note: "Modern minimal", img: bracelets },
  { title: "Rings", note: "Stone & classic", img: rings },
  { title: "Earrings", note: "Jhumkas & studs", img: earrings },
  { title: "Anklets", note: "Silver craftsmanship", img: anklets },
  { title: "Bridal Collection", note: "For the grand day", img: bridal },
  { title: "Daily Wear", note: "Light & lasting", img: daily },
  { title: "Gift Collection", note: "Curated gifting", img: gift },
];

export function Collections() {
  return (
    <section id="collections" className="section-pad bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionTitle
          eyebrow="Featured Collections"
          title="Curated for every occasion"
          subtitle="From bridal splendour to understated daily elegance — each piece finished with meticulous detail."
        />

        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 110} as="article">
              <a
                href="#contact"
                className="group relative block overflow-hidden bg-secondary"
              >
                <div className="aspect-4/5 overflow-hidden">
                  <img
                    src={item.img}
                    alt={`${item.title} — Maragatha Mayil Jewels`}
                    loading="lazy"
                    width={900}
                    height={1100}
                    className="size-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent opacity-90 transition-opacity duration-700 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <p className="text-[0.62rem] uppercase tracking-[0.34em] text-gold-soft/85">
                    {item.note}
                  </p>
                  <h3 className="mt-2 text-2xl text-ivory">{item.title}</h3>
                  <span className="mt-4 block h-px w-0 bg-accent transition-all duration-700 group-hover:w-16" />
                </div>
                <span className="pointer-events-none absolute inset-4 border border-ivory/0 transition-all duration-700 group-hover:border-ivory/25" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
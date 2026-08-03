import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";
import g1 from "@/assets/gal-1.jpg";
import g2 from "@/assets/gal-2.jpg";
import g4 from "@/assets/gal-4.jpg";
import bridal from "@/assets/cat-bridal.jpg";
import earrings from "@/assets/cat-earrings.jpg";
import bangles from "@/assets/cat-bangles.jpg";

const shots = [
  { src: g1, alt: "Our luxury jewellery showroom", span: "row-span-2" },
  { src: g2, alt: "Emerald pendant close-up", span: "" },
  { src: bridal, alt: "Bridal gold jewellery set", span: "row-span-2" },
  { src: g4, alt: "Silver jewellery flat lay", span: "" },
  { src: earrings, alt: "Gold jhumka earrings", span: "" },
  { src: bangles, alt: "Stacked gold bangles", span: "" },
];

export function Gallery() {
  return (
    <section id="gallery" className="section-pad bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionTitle
          eyebrow="Gallery"
          title="Inside our world of shine"
          subtitle="Moments from our showroom and studio — light, detail and craftsmanship."
        />

        <div className="mt-20 grid auto-rows-[220px] grid-cols-2 gap-5 lg:grid-cols-4">
          {shots.map((s, i) => (
            <Reveal
              key={s.alt}
              delay={(i % 4) * 90}
              className={`group relative overflow-hidden ${s.span}`}
            >
              <img
                src={s.src}
                alt={s.alt}
                loading="lazy"
                className="size-full object-cover transition-all duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
              />
              <span className="absolute inset-0 bg-primary/0 transition-all duration-700 group-hover:bg-primary/20" />
              <span className="absolute inset-0 opacity-0 shadow-[inset_0_0_60px_rgba(212,175,55,0.35)] transition-opacity duration-700 group-hover:opacity-100" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
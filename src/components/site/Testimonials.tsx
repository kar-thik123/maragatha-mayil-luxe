import { Star } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";

const reviews = [
  {
    name: "Lakshmi Priya",
    place: "Coimbatore",
    text: "My entire bridal set came from Maragatha Mayil. The finish looked like real temple gold and every relative asked where we bought it.",
  },
  {
    name: "Divya Ramesh",
    place: "Chennai",
    text: "I wear their chains daily and the shine has not faded at all. Beautiful designs, honest pricing and lovely people to deal with.",
  },
  {
    name: "Anitha Suresh",
    place: "Madurai",
    text: "Ordered a gift set on WhatsApp and it arrived perfectly packed. It genuinely felt like a luxury boutique experience.",
  },
];

export function Testimonials() {
  return (
    <section className="section-pad relative overflow-hidden bg-secondary/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionTitle
          eyebrow="Testimonials"
          title="Loved by our customers"
          subtitle="Trust, built one piece at a time."
        />

        <div className="mt-20 grid gap-6 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 130}>
              <figure className="glass-card relative h-full p-10">
                <span
                  aria-hidden
                  className="absolute right-7 top-3 font-[family-name:var(--font-display)] text-7xl leading-none text-accent/25"
                >
                  &rdquo;
                </span>
                <div className="flex gap-1 text-accent">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="size-4 fill-current" strokeWidth={0} />
                  ))}
                </div>
                <blockquote className="mt-7 font-[family-name:var(--font-display)] text-xl font-light italic leading-relaxed text-foreground/85">
                  {r.text}
                </blockquote>
                <figcaption className="mt-8 border-t border-border/70 pt-6">
                  <p className="text-sm tracking-[0.14em] text-primary uppercase">{r.name}</p>
                  <p className="mt-1 text-[0.68rem] uppercase tracking-[0.24em] text-muted-foreground">
                    {r.place}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
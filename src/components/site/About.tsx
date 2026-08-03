import { Reveal } from "./Reveal";
import about from "@/assets/about.jpg";

const stats = [
  { value: "10+", label: "Years of Trust" },
  { value: "5000+", label: "Happy Customers" },
  { value: "1200+", label: "Unique Designs" },
];

export function About() {
  return (
    <section id="about" className="section-pad bg-secondary/60">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:gap-24 lg:px-10">
        <Reveal className="relative">
          <div className="absolute -left-4 -top-4 hidden h-full w-full border border-accent/35 lg:block" />
          <img
            src={about}
            alt="Goldsmith crafting fine jewellery by hand"
            loading="lazy"
            width={1200}
            height={1400}
            className="relative aspect-4/5 w-full object-cover shadow-[var(--shadow-luxe)]"
          />
        </Reveal>

        <div>
          <Reveal>
            <p className="text-[0.68rem] uppercase tracking-[0.42em] text-primary/70">
              Our Story
            </p>
            <h2 className="mt-6 text-4xl leading-tight sm:text-5xl">
              Crafting Timeless Elegance
            </h2>
            <div className="mt-7 h-px w-24 bg-gradient-to-r from-accent to-transparent" />
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-9 space-y-6 text-base font-light leading-relaxed text-muted-foreground">
              <p>
                At Maragatha Mayil Jewels, every ornament begins with an old promise —
                that beauty should last. Our artisans blend generations of South Indian
                craftsmanship with a modern eye for proportion, finish and wearability.
              </p>
              <p>
                Our premium 1 gram gold jewellery carries the warmth and detail of
                traditional goldwork, made accessible without compromise. Alongside it,
                our silver collections celebrate quiet, contemporary refinement.
              </p>
              <p>
                Trusted service, honest guidance and pieces finished to an heirloom
                standard — that is the elegance we hand to every customer who walks
                through our doors.
              </p>
            </div>
          </Reveal>

          <Reveal delay={220}>
            <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-9">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="font-[family-name:var(--font-display)] text-3xl text-primary">
                    {s.value}
                  </dt>
                  <dd className="mt-2 text-[0.66rem] uppercase tracking-[0.24em] text-muted-foreground">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
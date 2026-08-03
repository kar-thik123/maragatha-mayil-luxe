import { Gem, Sparkles, BadgeIndianRupee, ShieldCheck, Wand2, Headphones } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";

const features = [
  { icon: Gem, title: "Premium Quality", text: "Carefully sourced materials and rigorous finishing on every piece." },
  { icon: Sparkles, title: "Latest Designs", text: "New collections arriving in step with the season's finest trends." },
  { icon: BadgeIndianRupee, title: "Affordable Luxury", text: "Grand designs in 1 gram gold, priced for everyday celebration." },
  { icon: ShieldCheck, title: "Trusted Store", text: "Thousands of families who return, and recommend, year after year." },
  { icon: Wand2, title: "Elegant Finish", text: "Hand-polished detailing that holds its shine and its shape." },
  { icon: Headphones, title: "Customer Support", text: "Personal guidance before, during and long after your purchase." },
];

export function WhyUs() {
  return (
    <section id="why" className="section-pad relative overflow-hidden bg-[image:var(--gradient-emerald)]">
      <div className="pointer-events-none absolute inset-0 opacity-25 [background:radial-gradient(circle_at_20%_20%,rgba(212,175,55,0.35),transparent_45%),radial-gradient(circle_at_80%_75%,rgba(192,192,192,0.28),transparent_45%)]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionTitle
          light
          eyebrow="Why Choose Us"
          title="The Maragatha Mayil promise"
          subtitle="Six reasons our customers trust us with the moments that matter most."
        />

        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 120}>
              <div className="glass-dark group h-full p-9 transition-all duration-700 hover:-translate-y-1.5 hover:border-accent/45">
                <span className="inline-flex size-14 items-center justify-center border border-ivory/25 text-gold-soft transition-colors duration-700 group-hover:border-accent/70">
                  <f.icon className="size-6" strokeWidth={1.2} />
                </span>
                <h3 className="mt-7 text-2xl text-ivory">{f.title}</h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-ivory/65">{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
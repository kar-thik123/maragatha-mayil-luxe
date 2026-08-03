import hero from "@/assets/hero.jpg";
import logo from "@/assets/mm-logo.asset.json";

const particles = [
  { left: "12%", top: "28%", size: 4, delay: 0 },
  { left: "22%", top: "62%", size: 3, delay: 1.4 },
  { left: "35%", top: "18%", size: 5, delay: 2.6 },
  { left: "48%", top: "72%", size: 3, delay: 0.8 },
  { left: "62%", top: "30%", size: 4, delay: 3.4 },
  { left: "74%", top: "58%", size: 3, delay: 2 },
  { left: "86%", top: "24%", size: 5, delay: 4.2 },
  { left: "92%", top: "68%", size: 3, delay: 1.1 },
];

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      <img
        src={hero}
        alt="Emerald and gold necklace on ivory silk"
        width={1920}
        height={1088}
        fetchPriority="high"
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/75" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.55)_100%)]" />

      <div aria-hidden className="pointer-events-none absolute inset-0">
        {particles.map((p, i) => (
          <span
            key={i}
            className="animate-float-slow absolute rounded-full bg-gold-soft/70 blur-[1px]"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto w-full max-w-3xl px-6 py-32 text-center">
        <img
          src={logo.url}
          alt="Maragatha Mayil Jewels"
          width={150}
          height={150}
          className="animate-fade-up mx-auto size-28 drop-shadow-[0_12px_40px_rgba(0,91,79,0.55)] sm:size-36"
          style={{ mixBlendMode: "multiply", filter: "brightness(1.06)" }}
        />
        <p
          className="animate-fade-up mt-10 text-[0.68rem] uppercase tracking-[0.5em] text-gold-soft/90"
          style={{ animationDelay: "150ms" }}
        >
          Est. Heritage of Fine Jewellery
        </p>
        <h1
          className="animate-fade-up mt-6 text-5xl leading-[1.05] text-ivory sm:text-6xl lg:text-7xl"
          style={{ animationDelay: "280ms" }}
        >
          Maragatha Mayil <span className="block shimmer-text">Jewels</span>
        </h1>
        <p
          className="animate-fade-up mt-7 text-sm font-light uppercase tracking-[0.45em] text-ivory/75"
          style={{ animationDelay: "420ms" }}
        >
          Timeless Elegance
        </p>
        <p
          className="animate-fade-up mx-auto mt-8 max-w-xl text-base font-light leading-relaxed text-ivory/70"
          style={{ animationDelay: "540ms" }}
        >
          Premium 1 gram gold and silver jewellery — bridal grandeur, everyday grace and
          heirloom craftsmanship, presented with quiet luxury.
        </p>

        <div
          className="animate-fade-up mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
          style={{ animationDelay: "680ms" }}
        >
          <a
            href="#collections"
            className="group relative overflow-hidden border border-accent/70 bg-accent/95 px-10 py-4 text-[0.7rem] uppercase tracking-[0.28em] text-[oklch(0.24_0_0)] transition-all duration-500 hover:bg-accent"
          >
            <span className="relative z-10">Explore Collection</span>
          </a>
          <a
            href="#contact"
            className="glass-dark px-10 py-4 text-[0.7rem] uppercase tracking-[0.28em] text-ivory transition-all duration-500 hover:border-accent/70 hover:text-gold-soft"
          >
            Contact Us
          </a>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-8 z-10 flex justify-center">
        <span className="h-14 w-px bg-gradient-to-b from-transparent via-gold-soft/70 to-transparent" />
      </div>
    </section>
  );
}
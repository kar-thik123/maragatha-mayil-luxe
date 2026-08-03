import { Reveal } from "./Reveal";

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  light = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
}) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      {eyebrow ? (
        <p
          className={`mb-5 text-[0.7rem] uppercase tracking-[0.42em] ${
            light ? "text-gold-soft" : "text-primary/70"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`text-4xl leading-tight sm:text-5xl ${
          light ? "text-ivory" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      <div className="mx-auto mt-7 flex items-center justify-center gap-3">
        <span className="h-px w-14 bg-gradient-to-r from-transparent to-accent/70" />
        <span className="size-1.5 rotate-45 bg-accent/80" />
        <span className="h-px w-14 bg-gradient-to-l from-transparent to-accent/70" />
      </div>
      {subtitle ? (
        <p
          className={`mt-7 text-base leading-relaxed font-light ${
            light ? "text-ivory/70" : "text-muted-foreground"
          }`}
        >
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  );
}
import { Instagram, Facebook, MessageCircle, Youtube } from "lucide-react";
import logo from "@/assets/mm-logo.asset.json";
import { WHATSAPP_URL } from "./Navbar";

const quick = [
  { label: "Home", href: "#home" },
  { label: "Collections", href: "#collections" },
  { label: "About", href: "#about" },
  { label: "Why Choose Us", href: "#why" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
  { icon: MessageCircle, href: WHATSAPP_URL, label: "WhatsApp" },
];

export function Footer() {
  return (
    <footer className="bg-[oklch(0.2_0.03_178)] text-ivory">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-3">
          <div>
            <div className="flex items-center gap-4">
              <img
                src={logo.url}
                alt="Maragatha Mayil Jewels"
                width={64}
                height={64}
                loading="lazy"
                className="size-16 rounded-full bg-ivory p-1"
              />
              <span>
                <span className="block font-[family-name:var(--font-display)] text-lg uppercase tracking-[0.16em]">
                  Maragatha Mayil
                </span>
                <span className="block text-[0.6rem] uppercase tracking-[0.42em] text-gold-soft/80">
                  Jewels
                </span>
              </span>
            </div>
            <p className="mt-7 max-w-sm text-sm font-light leading-relaxed text-ivory/60">
              Premium 1 gram gold and silver jewellery, crafted with heritage detail and
              finished for a lifetime of wear.
            </p>
          </div>

          <nav aria-label="Quick links">
            <h3 className="text-[0.66rem] uppercase tracking-[0.34em] text-gold-soft/85">
              Quick Links
            </h3>
            <ul className="mt-7 grid grid-cols-2 gap-4">
              {quick.map((q) => (
                <li key={q.href}>
                  <a
                    href={q.href}
                    className="luxe-underline text-sm font-light text-ivory/70 transition-colors hover:text-ivory"
                  >
                    {q.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-[0.66rem] uppercase tracking-[0.34em] text-gold-soft/85">
              Follow Us
            </h3>
            <div className="mt-7 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="inline-flex size-11 items-center justify-center border border-ivory/20 text-ivory/70 transition-all duration-500 hover:border-accent/70 hover:text-gold-soft"
                >
                  <s.icon className="size-4" strokeWidth={1.3} />
                </a>
              ))}
            </div>
            <p className="mt-8 text-sm font-light text-ivory/60">
              Gandhipuram, Coimbatore
              <br />
              Tamil Nadu, India
            </p>
          </div>
        </div>

        <div className="mt-16 flex items-center gap-4">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
          <span className="size-1.5 rotate-45 bg-accent/70" />
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
        </div>

        <p className="mt-8 text-center text-xs font-light tracking-[0.16em] text-ivory/45">
          © {new Date().getFullYear()} Maragatha Mayil Jewels · Timeless Elegance
        </p>
      </div>
    </footer>
  );
}
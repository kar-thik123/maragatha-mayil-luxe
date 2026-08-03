import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import logo from "@/assets/mm-logo.asset.json";

const links = [
  { label: "Home", href: "#home" },
  { label: "Collections", href: "#collections" },
  { label: "About", href: "#about" },
  { label: "Why Choose Us", href: "#why" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export const WHATSAPP_URL = "https://wa.me/919843012345";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        scrolled
          ? "border-b border-border/60 bg-background/85 py-2 backdrop-blur-xl"
          : "border-b border-transparent py-4"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#home" className="flex items-center gap-3">
          <span
            className={`flex items-center justify-center overflow-hidden rounded-full bg-ivory p-1 ring-1 ring-gold-soft/40 transition-all duration-700 ${
              scrolled ? "size-11" : "size-14"
            }`}
          >
            <img
              src={logo.url}
              alt="Maragatha Mayil Jewels logo"
              width={56}
              height={56}
              className="size-full object-contain"
            />
          </span>
          <span className="hidden leading-tight sm:block">
            <span
              className={`block font-[family-name:var(--font-display)] tracking-[0.16em] transition-colors ${
                scrolled ? "text-primary" : "text-ivory"
              } text-base uppercase`}
            >
              Maragatha Mayil
            </span>
            <span
              className={`block text-[0.6rem] uppercase tracking-[0.42em] ${
                scrolled ? "text-muted-foreground" : "text-ivory/65"
              }`}
            >
              Jewels
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`luxe-underline text-[0.72rem] uppercase tracking-[0.22em] transition-colors ${
                  scrolled
                    ? "text-foreground/75 hover:text-primary"
                    : "text-ivory/80 hover:text-ivory"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 border border-accent/60 px-5 py-2.5 text-[0.68rem] uppercase tracking-[0.24em] text-accent transition-all duration-500 hover:bg-accent hover:text-accent-foreground"
            >
              <MessageCircle className="size-3.5" />
              WhatsApp
            </a>
          </li>
        </ul>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden ${scrolled ? "text-foreground" : "text-ivory"}`}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {open ? (
        <div className="animate-fade-up border-t border-border/60 bg-background/97 px-6 py-6 backdrop-blur-xl lg:hidden">
          <ul className="flex flex-col gap-5">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block text-xs uppercase tracking-[0.26em] text-foreground/80"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-accent/60 px-5 py-3 text-[0.68rem] uppercase tracking-[0.24em] text-accent"
              >
                <MessageCircle className="size-3.5" /> WhatsApp
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
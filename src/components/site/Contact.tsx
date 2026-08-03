import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";
import { WHATSAPP_URL } from "./Navbar";

const details = [
  { icon: Phone, label: "Phone", value: "+91 98430 12345", href: "tel:+919843012345" },
  { icon: MessageCircle, label: "WhatsApp", value: "Chat with us", href: WHATSAPP_URL },
  { icon: Mail, label: "Email", value: "care@maragathamayiljewels.com", href: "mailto:care@maragathamayiljewels.com" },
  { icon: MapPin, label: "Location", value: "Gandhipuram, Coimbatore, Tamil Nadu", href: "#map" },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="section-pad bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionTitle
          eyebrow="Contact"
          title="Visit our showroom"
          subtitle="We would love to help you find the piece that feels like yours."
        />

        <div className="mt-20 grid gap-6 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="flex h-full flex-col justify-between bg-[image:var(--gradient-emerald)] p-10 text-ivory shadow-[var(--shadow-luxe)]">
              <div>
                <h3 className="text-3xl text-ivory">Maragatha Mayil Jewels</h3>
                <p className="mt-3 text-[0.66rem] uppercase tracking-[0.34em] text-gold-soft/85">
                  Timeless Elegance
                </p>
                <ul className="mt-10 space-y-7">
                  {details.map((d) => (
                    <li key={d.label} className="flex items-start gap-4">
                      <span className="mt-0.5 inline-flex size-10 shrink-0 items-center justify-center border border-ivory/25 text-gold-soft">
                        <d.icon className="size-4" strokeWidth={1.3} />
                      </span>
                      <span>
                        <span className="block text-[0.62rem] uppercase tracking-[0.3em] text-ivory/55">
                          {d.label}
                        </span>
                        <a
                          href={d.href}
                          target={d.href.startsWith("http") ? "_blank" : undefined}
                          rel="noreferrer"
                          className="luxe-underline mt-1 inline-block text-sm font-light text-ivory/90"
                        >
                          {d.value}
                        </a>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="mt-12 text-xs font-light text-ivory/55">
                Open daily · 10:00 AM – 8:30 PM
              </p>
            </div>
          </Reveal>

          <Reveal delay={130} className="lg:col-span-3">
            <form
              className="h-full border border-border bg-card p-10 shadow-[var(--shadow-soft)]"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
                toast.success("Thank you — we'll be in touch shortly.");
                (e.target as HTMLFormElement).reset();
              }}
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="Name" name="name" type="text" required />
                <Field label="Phone" name="phone" type="tel" required />
              </div>
              <div className="mt-6">
                <Field label="Email" name="email" type="email" />
              </div>
              <div className="mt-6">
                <label
                  htmlFor="message"
                  className="block text-[0.62rem] uppercase tracking-[0.3em] text-muted-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="mt-3 w-full border-b border-border bg-transparent pb-3 text-sm font-light outline-none transition-colors focus:border-primary"
                  placeholder="Tell us what you're looking for…"
                />
              </div>
              <button
                type="submit"
                className="mt-10 w-full border border-primary bg-primary px-10 py-4 text-[0.7rem] uppercase tracking-[0.28em] text-primary-foreground transition-all duration-500 hover:bg-transparent hover:text-primary sm:w-auto"
              >
                {sent ? "Send another enquiry" : "Send Enquiry"}
              </button>
            </form>
          </Reveal>
        </div>

        <Reveal delay={160} className="mt-6">
          <div id="map" className="overflow-hidden border border-border">
            <iframe
              title="Maragatha Mayil Jewels location"
              src="https://www.google.com/maps?q=Gandhipuram,Coimbatore,Tamil%20Nadu&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[380px] w-full grayscale-[0.35] transition-all duration-700 hover:grayscale-0"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type,
  required,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-[0.62rem] uppercase tracking-[0.3em] text-muted-foreground"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-3 w-full border-b border-border bg-transparent pb-3 text-sm font-light outline-none transition-colors focus:border-primary"
      />
    </div>
  );
}
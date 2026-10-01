import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Maxima Group — Dar es Salaam and Mtwara, Tanzania. Clearing & forwarding, transport, terminal and technology solutions.",
};

const locations = [
  {
    label: "HEAD OFFICE",
    name: "Dar es Salaam",
    lines: ["NHC Building, 9th Floor", "Dar es Salaam, Tanzania"],
  },
  {
    label: "TERMINALS — DAR ES SALAAM",
    name: "Kurasini",
    lines: [
      "Terminal 1 — Kurasini, Police Ufundi",
      "Terminal 3 — Kurasini, near Baraza la Maaskofu",
    ],
  },
  {
    label: "TERMINAL — MTWARA",
    name: "Mtepwezi",
    lines: ["Terminal 2 — Mtepwezi Area", "Mtwara, Tanzania"],
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="px-6 pb-20 pt-40 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionLabel>Contact</SectionLabel>
            <h1 className="mt-8 max-w-4xl text-[clamp(2.5rem,5.5vw,4.5rem)] font-bold leading-[1.02] tracking-tight">
              Let&apos;s talk about your cargo.
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft">
              Whether you need customs clearance, freight forwarding,
              transportation, terminal services or technology solutions — one
              conversation connects you to the whole Group.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line px-6 py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-12">
            {locations.map((loc, i) => (
              <Reveal key={loc.label} delay={i * 80}>
                <div className="border-t-2 border-ink pt-5">
                  <p className="font-mono text-[11px] tracking-[0.3em] text-ink-soft">
                    {loc.label}
                  </p>
                  <h2 className="mt-3 text-xl font-semibold">{loc.name}</h2>
                  <div className="mt-3 space-y-1 text-sm text-ink-soft">
                    {loc.lines.map((l) => (
                      <p key={l}>{l}</p>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={150}>
            <form
              className="border border-line bg-paper-dim p-8 lg:p-10"
              action="#"
              method="post"
            >
              <p className="font-mono text-[11px] tracking-[0.3em] text-ink-soft">
                SEND US A MESSAGE
              </p>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-medium">Name</span>
                  <input
                    type="text"
                    name="name"
                    required
                    className="mt-2 w-full border border-line bg-paper px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-medium">Email</span>
                  <input
                    type="email"
                    name="email"
                    required
                    className="mt-2 w-full border border-line bg-paper px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
                  />
                </label>
                <label className="block sm:col-span-2">
                  <span className="text-sm font-medium">Company</span>
                  <input
                    type="text"
                    name="company"
                    className="mt-2 w-full border border-line bg-paper px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
                  />
                </label>
                <label className="block sm:col-span-2">
                  <span className="text-sm font-medium">Service of interest</span>
                  <select
                    name="service"
                    className="mt-2 w-full border border-line bg-paper px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option>Clearing & Forwarding</option>
                    <option>Transportation</option>
                    <option>CFS & Terminal Services</option>
                    <option>Technology Solutions</option>
                    <option>Other</option>
                  </select>
                </label>
                <label className="block sm:col-span-2">
                  <span className="text-sm font-medium">Message</span>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    className="mt-2 w-full resize-y border border-line bg-paper px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
                  />
                </label>
              </div>
              <button
                type="submit"
                className="mt-8 w-full bg-ink px-7 py-4 text-sm font-medium text-paper transition-colors hover:bg-accent sm:w-auto"
              >
                Send Message
              </button>
              <p className="mt-4 text-xs text-ink-soft">
                Form submission will be connected once contact endpoints are
                confirmed.
              </p>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
import HeroScene from "@/components/HeroScene";
import Reveal from "@/components/Reveal";
import { SectionLabel, SectionLabelDark } from "@/components/SectionLabel";
import {
  companies,
  industries,
  supplyChainSteps,
  terminals,
  whyMaxima,
} from "@/lib/data";

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative flex min-h-dvh flex-col justify-center overflow-hidden px-6 pt-16 lg:px-10">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage: "radial-gradient(ellipse 90% 70% at 50% 40%, black, transparent)",
          }}
        />
        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Reveal>
              <p className="font-mono text-[11px] tracking-[0.35em] text-ink-soft">
                MAXIMA GROUP — TANZANIA
              </p>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="mt-8 text-[clamp(2.5rem,4.6vw,4.25rem)] font-bold leading-[1.02] tracking-tight">
                Moving Cargo.
                <br />
                Connecting Markets.
                <br />
                <span className="text-accent">Enabling Growth.</span>
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-soft">
                A diversified Tanzanian business group delivering integrated
                solutions across clearing &amp; forwarding, transportation,
                terminal operations and technology.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  href="/about"
                  className="bg-ink px-7 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-accent"
                >
                  Discover the Group
                </Link>
                <Link
                  href="/contact"
                  className="border border-ink px-7 py-3.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
                >
                  Get in Touch
                </Link>
              </div>
            </Reveal>
            <Reveal delay={400}>
              <p className="mt-14 font-mono text-[11px] tracking-[0.3em] text-ink-soft">
                EST. 2011 · DAR ES SALAAM · MTWARA
              </p>
            </Reveal>
          </div>
          <Reveal delay={250} className="hidden md:block">
            <div className="mx-auto w-full max-w-lg lg:max-w-none">
              <HeroScene />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Group intro ── */}
      <section className="border-t border-line px-6 py-28 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionLabel>The Group</SectionLabel>
            <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight lg:text-5xl">
              One Group.
              <br />
              Multiple Capabilities.
              <br />
              One Supply Chain.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="space-y-5 text-base leading-relaxed text-ink-soft lg:pt-14">
              <p>
                Established in 2011 through the development of Maxima Clearing
                &amp; Forwarding Ltd, the Group has grown from its core
                logistics and customs-clearing operations into a broader
                business platform supporting the movement, handling and
                management of cargo across Tanzania and the wider regional
                market.
              </p>
              <p>
                Today, Maxima&apos;s capabilities span four principal business
                areas — enabling customers to move cargo from international
                freight and customs clearance, through terminal handling and
                transportation, to technology-enabled logistics management.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Companies ── */}
      <section className="bg-ink px-6 py-28 text-paper lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionLabelDark>Our Businesses</SectionLabelDark>
            <h2 className="mt-6 max-w-2xl text-4xl font-bold tracking-tight lg:text-5xl">
              Four companies. One integrated platform.
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-px bg-line-dark sm:grid-cols-2">
            {companies.map((c, i) => (
              <Reveal key={c.slug} delay={i * 80}>
                <Link
                  href={`/companies/${c.slug}`}
                  className="group flex h-full min-h-72 flex-col justify-between bg-ink p-8 transition-colors hover:bg-[#11151d] lg:p-10"
                >
                  <div>
                    <span className="font-mono text-sm text-accent">
                      {c.number}
                    </span>
                    <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                      {c.shortName}
                    </h3>
                    <p className="mt-3 max-w-sm text-sm leading-relaxed text-paper/60">
                      {c.summary}
                    </p>
                  </div>
                  <span className="mt-8 inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.25em] text-paper/50 transition-colors group-hover:text-accent">
                    EXPLORE <span aria-hidden>→</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Integrated model ── */}
      <section className="px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionLabel>Integrated Logistics Model</SectionLabel>
            <h2 className="mt-6 max-w-2xl text-4xl font-bold tracking-tight lg:text-5xl">
              The cargo journey, connected.
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
            {supplyChainSteps.map((s, i) => (
              <Reveal key={s.step} delay={i * 60}>
                <div className="flex h-full min-h-44 flex-col bg-paper p-6">
                  <span className="font-mono text-xs text-accent">{s.step}</span>
                  <h3 className="mt-3 font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {s.text}
                  </p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={supplyChainSteps.length * 60}>
              <div className="flex h-full min-h-44 flex-col justify-between bg-accent p-6 text-paper">
                <p className="font-semibold leading-snug">
                  One partner, from origin to destination.
                </p>
                <Link
                  href="/about"
                  className="font-mono text-[11px] tracking-[0.25em] underline-offset-4 hover:underline"
                >
                  HOW WE WORK →
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Terminal network ── */}
      <section className="border-t border-line bg-paper-dim px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionLabel>Terminal Network</SectionLabel>
            <h2 className="mt-6 max-w-2xl text-4xl font-bold tracking-tight lg:text-5xl">
              Strategically positioned along Tanzania&apos;s trade corridors.
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-10 lg:grid-cols-3">
            {terminals.map((t, i) => (
              <Reveal key={t.number} delay={i * 100}>
                <div className="border-t-2 border-ink pt-6">
                  <span className="font-mono text-sm text-accent">
                    {t.number}
                  </span>
                  <h3 className="mt-3 text-xl font-semibold tracking-tight">
                    {t.name}
                  </h3>
                  <p className="mt-1 font-mono text-[11px] tracking-[0.25em] text-ink-soft">
                    {t.city.toUpperCase()}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                    {t.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <Link
              href="/companies/terminal"
              className="mt-14 inline-flex items-center gap-2 border border-ink px-7 py-3.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
            >
              Explore the Terminal Network <span aria-hidden>→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── Industries ── */}
      <section className="px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionLabel>Industries We Serve</SectionLabel>
          </Reveal>
          <div className="mt-12 flex flex-wrap gap-3">
            {industries.map((ind, i) => (
              <Reveal key={ind.name} delay={i * 40}>
                <Link
                  href="/industries"
                  className="inline-block border border-line px-5 py-2.5 text-sm text-ink-soft transition-colors hover:border-accent hover:text-accent"
                >
                  {ind.name}
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Maxima ── */}
      <section className="border-t border-line px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionLabel>Why Maxima</SectionLabel>
          </Reveal>
          <div className="mt-14 grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {whyMaxima.map((w, i) => (
              <Reveal key={w.title} delay={i * 60}>
                <div>
                  <span className="font-mono text-xs text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {w.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-ink px-6 py-32 text-paper lg:px-10">
        <div className="mx-auto max-w-7xl text-center">
          <Reveal>
            <h2 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight lg:text-6xl">
              Let&apos;s move your cargo,{" "}
              <span className="text-accent">together.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-paper/60">
              From customs clearance to final delivery — one group, one
              conversation.
            </p>
            <Link
              href="/contact"
              className="mt-10 inline-block bg-accent px-9 py-4 text-sm font-medium text-paper transition-opacity hover:opacity-90"
            >
              Contact Maxima Group
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

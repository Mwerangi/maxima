import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { SectionLabel, SectionLabelDark } from "@/components/SectionLabel";
import { companies, coreValues } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Maxima Group is a diversified Tanzanian business group — from clearing & forwarding to transportation, terminal operations and technology. Established 2011.",
};

const peopleAreas = [
  "Clearing & forwarding",
  "Customs & documentation",
  "Terminal operations",
  "Cargo handling",
  "Transportation",
  "Fleet operations",
  "Customer service",
  "Finance",
  "Administration",
  "Information technology",
  "Business development",
  "Operations management",
];

const futureInvestments = [
  "Logistics infrastructure",
  "Terminal capabilities",
  "Transportation capacity",
  "Technology & digital systems",
  "Customer experience",
  "People & skills",
  "Operational efficiency",
  "Safety & compliance",
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="px-6 pb-20 pt-40 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionLabel>About Maxima Group</SectionLabel>
            <h1 className="mt-8 max-w-4xl text-[clamp(2.5rem,5.5vw,4.5rem)] font-bold leading-[1.02] tracking-tight">
              From logistics to an integrated business group.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft">
              Maxima Group is a diversified Tanzanian business group providing
              integrated solutions across logistics, transportation, terminal
              operations, cargo handling and technology.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Story ── */}
      <section className="border-t border-line px-6 py-28 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <SectionLabel>Our Story</SectionLabel>
            <p className="mt-6 font-mono text-[11px] tracking-[0.3em] text-ink-soft">
              EST. 2011 — DAR ES SALAAM
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="space-y-5 text-base leading-relaxed text-ink-soft">
              <p>
                Maxima began its journey in Tanzania&apos;s logistics sector
                through Maxima Clearing &amp; Forwarding Ltd, established in
                2011. The company developed its capabilities around customs
                clearance, freight forwarding and cargo logistics, serving
                businesses involved in imports, exports and domestic
                distribution.
              </p>
              <p>
                Over time, Maxima expanded beyond traditional clearing and
                forwarding. Transportation capabilities were developed to
                support the movement of cargo between ports, terminals,
                customers and inland destinations. The Group subsequently
                expanded its physical logistics infrastructure through terminal
                and CFS operations, creating facilities capable of handling
                containers and cargo as part of the wider logistics chain.
              </p>
              <p>
                At the same time, Maxima developed capabilities in information
                technology and business systems through Maxima Solutions Ltd,
                supporting the increasing role of technology, automation and
                digital systems within modern logistics operations.
              </p>
              <p className="font-medium text-ink">
                Maxima is an integrated logistics and business solutions group.
              </p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/media/howo-fleet-terminal.webp"
                alt="Maxima truck fleet at the container terminal"
                loading="lazy"
                className="!mt-10 w-full border border-line object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Vision & Mission ── */}
      <section className="bg-ink px-6 py-28 text-paper lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
          <Reveal>
            <SectionLabelDark>Vision</SectionLabelDark>
            <p className="mt-6 text-2xl font-semibold leading-snug tracking-tight lg:text-3xl">
              To be a leading integrated logistics and business solutions group
              in Tanzania and the wider East African region.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <SectionLabelDark>Mission</SectionLabelDark>
            <p className="mt-6 text-2xl font-semibold leading-snug tracking-tight lg:text-3xl">
              To deliver reliable, efficient and technology-enabled logistics
              and business solutions that connect people, businesses and
              markets while creating sustainable value for our customers,
              employees and partners.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionLabel>Core Values</SectionLabel>
          </Reveal>
          <div className="mt-14 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((v, i) => (
              <Reveal key={v.name} delay={i * 50}>
                <div className="flex h-full min-h-48 flex-col bg-paper p-6">
                  <span className="font-mono text-xs text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-semibold">{v.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {v.text}
                  </p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={coreValues.length * 50}>
              <div className="flex h-full min-h-48 flex-col justify-center bg-ink p-6 text-paper">
                <p className="text-sm leading-relaxed text-paper/70">
                  Logistics is not simply about moving cargo. It is about
                  protecting our customers&apos; business, maintaining
                  supply-chain continuity and helping businesses connect with
                  markets efficiently.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Our People ── */}
      <section className="border-t border-line bg-paper-dim px-6 py-28 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionLabel>Our People</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold tracking-tight lg:text-4xl">
              Industry knowledge. Operational experience. Customer commitment.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="flex flex-wrap gap-2.5 lg:pt-14">
              {peopleAreas.map((a) => (
                <span
                  key={a}
                  className="border border-line bg-paper px-4 py-2 text-sm text-ink-soft"
                >
                  {a}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Our Future ── */}
      <section className="px-6 py-28 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <SectionLabel>Our Future</SectionLabel>
            <h2 className="mt-6 max-w-xl text-3xl font-bold tracking-tight lg:text-4xl">
              To make cargo movement more connected, transparent, reliable and
              efficient.
            </h2>
            <p className="mt-6 max-w-xl leading-relaxed text-ink-soft">
              Maxima Group is continuing to develop its capabilities across
              logistics, transportation, terminal infrastructure and
              technology — building a connected logistics ecosystem in which
              physical infrastructure, transportation, customs expertise and
              digital technology work together.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <p className="font-mono text-[11px] tracking-[0.3em] text-ink-soft">
              CONTINUED INVESTMENT IN
            </p>
            <ul className="mt-6 space-y-3">
              {futureInvestments.map((f) => (
                <li
                  key={f}
                  className="flex items-center gap-3 border-b border-line pb-3 text-sm"
                >
                  <span className="h-1 w-1 shrink-0 bg-accent" />
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ── Companies CTA ── */}
      <section className="bg-ink px-6 py-24 text-paper lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionLabelDark>Our Businesses</SectionLabelDark>
          </Reveal>
          <div className="mt-10 grid gap-px bg-line-dark sm:grid-cols-2 lg:grid-cols-4">
            {companies.map((c, i) => (
              <Reveal key={c.slug} delay={i * 60}>
                <Link
                  href={`/companies/${c.slug}`}
                  className="group flex h-full min-h-40 flex-col justify-between bg-ink p-6 transition-colors hover:bg-[#11151d]"
                >
                  <span className="font-mono text-xs text-accent">
                    {c.number}
                  </span>
                  <div>
                    <h3 className="font-semibold">{c.shortName}</h3>
                    <span className="mt-2 inline-block font-mono text-[10px] tracking-[0.25em] text-paper/50 transition-colors group-hover:text-accent">
                      EXPLORE →
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

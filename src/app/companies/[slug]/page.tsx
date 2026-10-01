import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { SectionLabel, SectionLabelDark } from "@/components/SectionLabel";
import { companies, terminals } from "@/lib/data";

export function generateStaticParams() {
  return companies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/companies/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const company = companies.find((c) => c.slug === slug);
  if (!company) return {};
  return {
    title: company.fullName,
    description: `${company.tagline} ${company.summary}`,
  };
}

export default async function CompanyPage({
  params,
}: PageProps<"/companies/[slug]">) {
  const { slug } = await params;
  const company = companies.find((c) => c.slug === slug);
  if (!company) notFound();

  const index = companies.findIndex((c) => c.slug === slug);
  const next = companies[(index + 1) % companies.length];
  const isTerminal = company.slug === "terminal";

  return (
    <>
      {/* ── Hero ── */}
      <section className="px-6 pb-20 pt-40 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="flex items-center gap-4 font-mono text-sm">
              <span className="text-accent">{company.number}</span>
              <span className="text-[11px] tracking-[0.3em] text-ink-soft">
                MAXIMA GROUP — TANZANIA
              </span>
            </p>
            <h1 className="mt-8 max-w-4xl text-[clamp(2.25rem,5vw,4rem)] font-bold leading-[1.05] tracking-tight">
              {company.fullName}
            </h1>
            <p className="mt-6 text-xl font-medium text-accent lg:text-2xl">
              {company.tagline}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Description ── */}
      <section className="border-t border-line px-6 py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <SectionLabel>Overview</SectionLabel>
          </Reveal>
          <Reveal delay={120}>
            <div className="space-y-5 text-base leading-relaxed text-ink-soft">
              {company.description.map((p) => (
                <p key={p.slice(0, 32)}>{p}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Terminal network (terminal page only) ── */}
      {isTerminal && (
        <section className="bg-ink px-6 py-28 text-paper lg:px-10">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionLabelDark>Our Terminal Network</SectionLabelDark>
              <h2 className="mt-6 max-w-2xl text-3xl font-bold tracking-tight lg:text-4xl">
                Three facilities. Two strategic locations.
              </h2>
            </Reveal>
            <div className="mt-16 space-y-px bg-line-dark">
              {terminals.map((t, i) => (
                <Reveal key={t.number} delay={i * 80}>
                  <div className="grid gap-8 bg-ink py-10 lg:grid-cols-[100px_1.2fr_1.6fr] lg:py-12">
                    <span className="font-mono text-2xl text-accent">
                      {t.number}
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold tracking-tight">
                        {t.name}
                      </h3>
                      <p className="mt-1 font-mono text-[11px] tracking-[0.25em] text-paper/50">
                        {t.city.toUpperCase()}
                      </p>
                      <p className="mt-4 text-sm leading-relaxed text-paper/60">
                        {t.location}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-paper/60">
                        {t.description}
                      </p>
                    </div>
                    <div>
                      <p className="font-mono text-[11px] tracking-[0.25em] text-paper/40">
                        CORE CAPABILITIES
                      </p>
                      <ul className="mt-4 grid gap-x-6 gap-y-2 sm:grid-cols-2">
                        {t.capabilities.map((cap) => (
                          <li
                            key={cap}
                            className="flex items-center gap-2.5 text-sm text-paper/70"
                          >
                            <span className="h-1 w-1 shrink-0 bg-accent" />
                            {cap}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal>
              <p className="mt-10 max-w-2xl text-sm leading-relaxed text-paper/40">
                Specific terminal capacity, equipment and operational
                statistics will be published as they are confirmed.
              </p>
            </Reveal>
          </div>
        </section>
      )}

      {/* ── Services ── */}
      <section className="border-t border-line bg-paper-dim px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionLabel>
              {isTerminal ? "CFS & Terminal Services" : "Core Services"}
            </SectionLabel>
          </Reveal>
          <div className="mt-14 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
            {company.serviceGroups.map((g, i) => (
              <Reveal key={g.title} delay={i * 60}>
                <div className="h-full bg-paper p-8">
                  <span className="font-mono text-xs text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold tracking-tight">
                    {g.title}
                  </h3>
                  <ul className="mt-5 space-y-2.5">
                    {g.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2.5 text-sm text-ink-soft"
                      >
                        <span className="h-1 w-1 shrink-0 bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
          {company.note && (
            <Reveal>
              <p className="mt-10 max-w-3xl border-l-2 border-accent pl-5 text-sm leading-relaxed text-ink-soft">
                {company.note}
              </p>
            </Reveal>
          )}
        </div>
      </section>

      {/* ── Next company ── */}
      <section className="px-6 py-24 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <Reveal>
            <p className="font-mono text-[11px] tracking-[0.3em] text-ink-soft">
              NEXT — {next.number}
            </p>
            <Link
              href={`/companies/${next.slug}`}
              className="mt-4 block text-3xl font-bold tracking-tight transition-colors hover:text-accent lg:text-4xl"
            >
              {next.fullName} <span aria-hidden>→</span>
            </Link>
          </Reveal>
          <Reveal delay={100}>
            <Link
              href="/contact"
              className="border border-ink px-7 py-3.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
            >
              Get in Touch
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

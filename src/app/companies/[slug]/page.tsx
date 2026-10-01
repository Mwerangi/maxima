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
  const isTransport = company.slug === "transport";

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

      {/* ── Overview (with company image) ── */}
      <section className="border-t border-line px-6 py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[35fr_65fr]">
          {company.heroImage && (
            <Reveal className="lg:order-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={company.heroImage.src}
                alt={company.heroImage.alt}
                className="w-full border border-line shadow-[0_24px_60px_-24px_rgba(11,14,19,0.35)]"
              />
            </Reveal>
          )}
          <Reveal delay={120} className="lg:order-1">
            <SectionLabel>Overview</SectionLabel>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-ink-soft">
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
                Three facilities. Three strategic locations.
              </h2>
            </Reveal>
            <div className="mt-16 space-y-px bg-line-dark">
              {terminals.map((t, i) => (
                <Reveal key={t.number} delay={i * 80}>
                  <div className="grid gap-8 bg-ink py-10 lg:grid-cols-[60px_1.35fr_1fr_1fr] lg:py-14">
                    <span className="font-mono text-2xl text-accent">
                      {t.number}
                    </span>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={t.image.src}
                      alt={t.image.alt}
                      loading="lazy"
                      className="w-full self-center border border-line-dark shadow-[0_24px_60px_-24px_rgba(0,0,0,0.6)]"
                    />
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

      {/* ── Operations in motion (terminal) ── */}
      {isTerminal && (
        <section className="px-6 py-28 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionLabel>Operations in Motion</SectionLabel>
            </Reveal>
            <div className="mt-14 grid gap-10 lg:grid-cols-[1.6fr_1fr]">
              <Reveal>
                <figure>
                  <video
                    src="/media/weighbridge.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="w-full border border-line object-cover"
                  />
                  <figcaption className="mt-4 font-mono text-[11px] tracking-[0.25em] text-ink-soft">
                    WEIGHBRIDGE OPERATIONS
                  </figcaption>
                </figure>
              </Reveal>
              <Reveal delay={100}>
                <figure>
                  <video
                    src="/media/stuffing.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="mx-auto max-h-[480px] border border-line"
                  />
                  <figcaption className="mt-4 text-center font-mono text-[11px] tracking-[0.25em] text-ink-soft">
                    CONTAINER STUFFING
                  </figcaption>
                </figure>
              </Reveal>
            </div>
          </div>
        </section>
      )}

      {/* ── Fleet in motion (transport) ── */}
      {isTransport && (
        <section className="px-6 py-28 lg:px-10">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_1.4fr]">
            <Reveal>
              <figure>
                <video
                  src="/media/fleet.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="mx-auto max-h-[520px] border border-line"
                />
                <figcaption className="mt-4 text-center font-mono text-[11px] tracking-[0.25em] text-ink-soft">
                  THE MAXIMA FLEET ON THE MOVE
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={120}>
              <SectionLabel>Integrated Transport Operations</SectionLabel>
              <h2 className="mt-6 text-3xl font-bold tracking-tight lg:text-4xl">
                One fleet, connected to the whole supply chain.
              </h2>
              <p className="mt-6 max-w-xl leading-relaxed text-ink-soft">
                Because Maxima Transport operates within the wider Maxima
                Group, transportation is coordinated with freight forwarding,
                customs clearance and terminal operations — reducing
                unnecessary hand-offs between multiple service providers and
                giving customers a more connected logistics process.
              </p>
            </Reveal>
          </div>
        </section>
      )}

      {/* ── Gallery ── */}
      {company.gallery && (
        <section className="px-6 py-28 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionLabel>On the Ground</SectionLabel>
            </Reveal>
            <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.6fr]">
              <Reveal>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={company.gallery.portrait.src}
                  alt={company.gallery.portrait.alt}
                  loading="lazy"
                  className="w-full border border-line shadow-[0_24px_60px_-24px_rgba(11,14,19,0.35)]"
                />
              </Reveal>
              <div className="grid content-between gap-6">
                {company.gallery.landscapes.map((img, i) => (
                  <Reveal key={img.src} delay={(i + 1) * 100}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      className="w-full border border-line shadow-[0_24px_60px_-24px_rgba(11,14,19,0.35)]"
                    />
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

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

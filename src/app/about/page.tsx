import type { Metadata } from "next";
import { Container, Eyebrow, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { CTA } from "@/components/CTA";
import { IconCheck } from "@/components/icons";
import { stats, values } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "StangScales is a results-driven digital marketing studio founded by an SMU graduate, built on the belief that marketing should pay for itself.",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="grid-lines pointer-events-none absolute inset-0 -z-10" />
        <Container className="pb-10 pt-20 sm:pt-24">
          <Reveal>
            <Eyebrow>About</Eyebrow>
          </Reveal>
          <Reveal delay={60}>
            <h1 className="mt-6 max-w-3xl text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
              Marketing that{" "}
              <span className="gradient-text">pays for itself.</span>
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              StangScales was founded by an SMU graduate who got tired of watching
              small businesses overpay agencies for activity instead of outcomes.
              The fix was simple: tie every dollar to a result, and treat each
              client&apos;s budget like it&apos;s our own.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Story + stats */}
      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <Reveal>
              <div className="space-y-5 text-[15px] leading-relaxed text-muted">
                <p>
                  We&apos;re a lean, senior-led studio — which means the person who
                  scopes your project is the person who builds it. No layers of
                  account managers, no offshore handoffs, no telephone game between
                  you and the work.
                </p>
                <p>
                  That structure keeps us fast and honest. We&apos;d rather tell you
                  a tactic won&apos;t move the needle than bill you for it. And when
                  something <em className="text-fg not-italic">is</em> working, we
                  double down hard.
                </p>
                <p>
                  Whether you need a new website, a campaign that actually converts,
                  or someone to quietly keep everything fast and secure in the
                  background — we build systems that compound, and we hand you
                  something you fully own.
                </p>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border">
                {stats.map((s) => (
                  <div key={s.label} className="bg-bg px-6 py-8 text-center">
                    <div className="font-display text-3xl font-semibold sm:text-4xl">
                      <span className="gradient-text">{s.value}</span>
                    </div>
                    <div className="mt-2 text-sm text-muted">{s.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-12 sm:py-16">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="What we stand for"
              title={<>Principles we don&apos;t compromise on.</>}
            />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 70}>
                <div className="card h-full p-7">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 text-accent-bright">
                    <IconCheck className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {v.blurb}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}

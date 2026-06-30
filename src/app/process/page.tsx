import type { Metadata } from "next";
import { Container, Eyebrow } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { CTA } from "@/components/CTA";
import { process } from "@/lib/content";

export const metadata: Metadata = {
  title: "Process",
  description:
    "A simple, proven four-phase path to growth: Discover, Strategy, Build & Launch, and Measure & Scale.",
};

const deliverables: Record<string, string[]> = {
  "01": ["Business & goal audit", "Competitor teardown", "Analytics review", "Opportunity map"],
  "02": ["Prioritized roadmap", "Channel plan", "Budget & targets", "Clear success metrics"],
  "03": ["Design & build", "Copy & creative", "QA & launch", "Tracking setup"],
  "04": ["Performance reporting", "A/B testing", "Iteration cycles", "Scale plan"],
};

export default function ProcessPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="grid-lines pointer-events-none absolute inset-0 -z-10" />
        <Container className="pb-10 pt-20 sm:pt-24">
          <Reveal>
            <Eyebrow>Process</Eyebrow>
          </Reveal>
          <Reveal delay={60}>
            <h1 className="mt-6 max-w-3xl text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
              From kickoff to compounding growth, in{" "}
              <span className="gradient-text">four phases.</span>
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              We keep it lean and transparent. You always know what we&apos;re
              working on, why it matters, and what it&apos;s doing for your bottom
              line.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container>
          <div className="relative">
            {/* vertical line */}
            <div
              className="absolute left-[27px] top-2 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-accent/60 via-border to-transparent sm:block"
              aria-hidden
            />
            <div className="space-y-6">
              {process.map((step, i) => (
                <Reveal key={step.n} delay={i * 60}>
                  <div className="relative sm:pl-20">
                    <div className="absolute left-0 top-0 hidden h-14 w-14 items-center justify-center rounded-2xl border border-border bg-surface font-display text-lg font-semibold text-accent-bright sm:flex">
                      {step.n}
                    </div>
                    <div className="card p-7 sm:p-8">
                      <div className="flex items-baseline gap-3">
                        <span className="font-display text-2xl font-semibold text-border-strong sm:hidden">
                          {step.n}
                        </span>
                        <h2 className="text-xl font-semibold sm:text-2xl">
                          {step.title}
                        </h2>
                      </div>
                      <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted">
                        {step.blurb}
                      </p>
                      <div className="mt-6 flex flex-wrap gap-2.5 border-t border-border pt-6">
                        {deliverables[step.n].map((d) => (
                          <span
                            key={d}
                            className="rounded-full border border-border bg-surface/50 px-3.5 py-1.5 text-xs font-medium text-muted"
                          >
                            {d}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}

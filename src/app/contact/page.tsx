import type { Metadata } from "next";
import { Container, Eyebrow } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { IconCheck } from "@/components/icons";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us where you want to grow and we'll show you how to get there. Start a project with StangScales today.",
};

const reasons = [
  "A free, no-pressure project assessment",
  "A clear plan tied to real results",
  "Senior work — you talk to the person building it",
  "A reply within one business day",
];

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="grid-lines pointer-events-none absolute inset-0 -z-10" />
        <Container className="py-20 sm:py-24">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <Reveal>
                <Eyebrow>Contact</Eyebrow>
              </Reveal>
              <Reveal delay={60}>
                <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
                  Let&apos;s build something that{" "}
                  <span className="gradient-text">grows.</span>
                </h1>
              </Reveal>
              <Reveal delay={120}>
                <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">
                  Tell us about your business and what you&apos;re trying to
                  achieve. We&apos;ll get back to you with a clear next step.
                </p>
              </Reveal>

              <Reveal delay={180}>
                <ul className="mt-8 space-y-3">
                  {reasons.map((r) => (
                    <li key={r} className="flex items-start gap-3 text-sm text-fg/90">
                      <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      {r}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={240}>
                <div className="mt-10 rounded-2xl border border-border bg-surface/40 p-5">
                  <p className="text-sm text-faint">Prefer email?</p>
                  <a
                    href={`mailto:${site.email}`}
                    className="mt-1 inline-block font-display text-lg font-semibold text-accent-bright transition-colors hover:text-accent"
                  >
                    {site.email}
                  </a>
                  <p className="mt-2 text-sm text-muted">24/7 support available</p>
                </div>
              </Reveal>
            </div>

            <Reveal delay={120}>
              <div className="glass rounded-[1.75rem] p-6 sm:p-8">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}

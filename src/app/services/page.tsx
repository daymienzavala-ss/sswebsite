import type { Metadata } from "next";
import { Container, Eyebrow } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { CTA } from "@/components/CTA";
import { serviceIcons, IconCheck } from "@/components/icons";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Website design and development, maintenance and security, digital advertising, SEO, conversion optimization, and analytics — all under one roof.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="grid-lines pointer-events-none absolute inset-0 -z-10" />
        <Container className="pb-10 pt-20 sm:pt-24">
          <Reveal>
            <Eyebrow>Services</Eyebrow>
          </Reveal>
          <Reveal delay={60}>
            <h1 className="mt-6 max-w-3xl text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
              Full-funnel marketing,{" "}
              <span className="gradient-text">one accountable partner.</span>
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              Pick a single service or hand us the whole funnel. Either way, every
              engagement is scoped around one thing: measurable growth for your
              business.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid gap-5 lg:grid-cols-2">
            {services.map((service, i) => {
              const Icon = serviceIcons[service.icon];
              return (
                <Reveal key={service.title} delay={(i % 2) * 80}>
                  <div className="card flex h-full flex-col p-7 sm:p-8">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border bg-surface text-accent-bright">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h2 className="text-xl font-semibold">{service.title}</h2>
                    </div>
                    <p className="mt-4 text-[15px] leading-relaxed text-muted">
                      {service.blurb}
                    </p>
                    <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-border pt-6">
                      {service.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-center gap-2 text-sm text-fg/90"
                        >
                          <IconCheck className="h-4 w-4 shrink-0 text-accent" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}

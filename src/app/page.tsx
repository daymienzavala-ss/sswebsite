import Link from "next/link";
import { Button, Container, Eyebrow, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { ScrollIntro } from "@/components/ScrollIntro";
import { CTA } from "@/components/CTA";
import { serviceIcons, IconArrow, IconCheck } from "@/components/icons";
import { services, process, stats, values } from "@/lib/content";

export default function Home() {
  return (
    <>
      {/* Dark logo splash — sticky; the homepage scrolls up over it */}
      <ScrollIntro />

      {/* Homepage content slides up over the splash */}
      <div className="relative z-10 rounded-t-[2rem] bg-bg shadow-[0_-26px_60px_-30px_rgba(20,16,12,0.55)] sm:rounded-t-[2.75rem]">
        {/* Intro */}
        <section>
          <Container className="pt-16 sm:pt-24">
            <Reveal>
              <Eyebrow>Scale your business digitally</Eyebrow>
            </Reveal>
            <Reveal delay={60}>
              <h1 className="mt-6 max-w-3xl text-balance text-4xl leading-[1.05] tracking-tight sm:text-6xl">
                Websites that turn traffic into{" "}
                <span className="gradient-text">revenue.</span>
              </h1>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
                StangScales builds, grows, and protects the digital side of your
                business — beautiful websites, paid advertising that pays for
                itself, and the maintenance to keep it all running.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="/contact" withArrow>
                  Start a project
                </Button>
                <Button href="/services" variant="ghost">
                  Explore services
                </Button>
              </div>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted">
                <span className="inline-flex items-center gap-2">
                  <IconCheck className="h-4 w-4 text-accent" /> 100% client
                  satisfaction
                </span>
                <span className="inline-flex items-center gap-2">
                  <IconCheck className="h-4 w-4 text-accent" /> 24/7 support
                </span>
                <span className="inline-flex items-center gap-2">
                  <IconCheck className="h-4 w-4 text-accent" /> Founded by an SMU
                  graduate
                </span>
              </div>
            </Reveal>
          </Container>
        </section>

        {/* Three core services */}
        <section className="py-16 sm:py-24">
          <Container>
            <Reveal>
              <SectionHeading
                eyebrow="What we do"
                title={<>Three things, done exceptionally well.</>}
                description="We focus so you don't have to compromise. Design that converts, advertising that returns, and maintenance that lasts."
              />
            </Reveal>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {services.map((service, i) => {
                const Icon = serviceIcons[service.icon];
                return (
                  <Reveal key={service.title} delay={i * 80}>
                    <div className="card flex h-full flex-col p-7 sm:p-8">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-bg text-accent">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="mt-6 text-xl sm:text-2xl">{service.title}</h3>
                      <p className="mt-3 text-[15px] leading-relaxed text-muted">
                        {service.blurb}
                      </p>
                      <ul className="mt-6 space-y-2.5 border-t border-border pt-6">
                        {service.points.map((point) => (
                          <li
                            key={point}
                            className="flex items-center gap-2.5 text-sm text-fg/90"
                          >
                            <IconCheck className="h-4 w-4 shrink-0 text-accent" />
                            {point}
                          </li>
                        ))}
                      </ul>
                      <Link
                        href="/services"
                        className="group mt-7 inline-flex items-center gap-1.5 text-sm font-medium text-accent"
                      >
                        Learn more
                        <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </Link>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </Container>
        </section>

        {/* Stats */}
        <section className="pb-4">
          <Container>
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border lg:grid-cols-4">
              {stats.map((s, i) => (
                <Reveal key={s.label} delay={i * 60}>
                  <div className="h-full bg-bg px-6 py-9 text-center sm:py-11">
                    <div className="font-display text-4xl font-semibold tracking-tight text-accent sm:text-5xl">
                      {s.value}
                    </div>
                    <div className="mt-2 text-sm text-muted">{s.label}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        {/* How it works */}
        <section className="py-16 sm:py-24">
          <Container>
            <Reveal>
              <SectionHeading
                center
                eyebrow="How it works"
                title={<>A simple, proven path to growth.</>}
                description="No bloated retainers or busywork. Four focused phases that take you from where you are to where you want to be."
              />
            </Reveal>

            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {process.map((step, i) => (
                <Reveal key={step.n} delay={i * 70}>
                  <div className="card relative h-full p-7">
                    <span className="font-display text-5xl font-semibold tracking-tight text-border-strong">
                      {step.n}
                    </span>
                    <h3 className="mt-3 text-xl">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {step.blurb}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        {/* Why us */}
        <section className="pb-4">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
              <Reveal>
                <SectionHeading
                  eyebrow="Why StangScales"
                  title={<>The agency standard, without the agency overhead.</>}
                  description="Founded by an SMU graduate on a simple belief: marketing should pay for itself. Here's what that means for you."
                />
                <div className="mt-8">
                  <Button href="/about" variant="ghost" withArrow>
                    More about us
                  </Button>
                </div>
              </Reveal>

              <div className="space-y-4">
                {values.map((v, i) => (
                  <Reveal key={v.title} delay={i * 70}>
                    <div className="flex gap-4 rounded-2xl border border-border bg-surface p-6">
                      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent">
                        <IconCheck className="h-4 w-4" />
                      </div>
                      <div>
                        <h3 className="text-lg">{v.title}</h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-muted">
                          {v.blurb}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <CTA />
      </div>
    </>
  );
}

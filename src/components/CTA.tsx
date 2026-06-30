import { Button, Container } from "./ui";
import { Reveal } from "./Reveal";
import { site } from "@/lib/content";

export function CTA() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-surface px-6 py-16 text-center shadow-[0_1px_2px_rgba(40,34,28,0.04),0_40px_80px_-56px_rgba(40,34,28,0.3)] sm:px-12 sm:py-20">
            <h2 className="mx-auto max-w-2xl text-3xl leading-tight sm:text-5xl">
              Ready to <span className="gradient-text">scale</span> your business?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              Tell us where you want to grow. We&apos;ll show you exactly how to get
              there — no jargon, no pressure, just a clear plan.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/contact" withArrow>
                Start a project
              </Button>
              <Button href={`mailto:${site.email}`} variant="ghost">
                Email us directly
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

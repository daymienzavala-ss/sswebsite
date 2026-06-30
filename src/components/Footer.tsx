import Link from "next/link";
import { Logo } from "./Logo";
import { Container } from "./ui";
import { nav, site } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative z-10 border-t border-border bg-bg">
      <Container className="py-7">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" aria-label="StangScales home">
            <Logo />
          </Link>
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-accent"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={`mailto:${site.email}`}
              className="transition-colors hover:text-accent"
            >
              {site.email}
            </a>
          </nav>
        </div>

        <div className="mt-5 flex flex-col gap-1.5 border-t border-border pt-4 text-xs text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {site.name}. All rights reserved.</p>
          <p>Results-driven digital marketing · 24/7 support · Founded by an SMU graduate</p>
        </div>
      </Container>
    </footer>
  );
}

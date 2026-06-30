"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { nav } from "@/lib/content";

export function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  // `overHero`: transparent nav with light text, sitting over the dark splash.
  // `solid`: opaque nav with a bottom border, over the light page.
  const [overHero, setOverHero] = useState(isHome);
  const [solid, setSolid] = useState(!isHome);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      ticking = false;
      const y = window.scrollY;
      // The splash is a full screen. Switch the nav to its solid (dark-text)
      // style just before the ivory page reaches it, so light text is never
      // shown on ivory.
      const onHero = isHome && y < window.innerHeight * 0.88;
      setOverHero(onHero);
      setSolid(!onHero && y > 8);
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [isHome]);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50">
      <div
        className={`transition-colors duration-300 ${
          solid
            ? "border-b border-border bg-bg/95"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
          <Link href="/" aria-label="StangScales home" className="shrink-0">
            <Logo light={overHero} />
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {nav.map((item) => {
              const active = pathname === item.href;
              const cls = overHero
                ? active
                  ? "text-white"
                  : "text-white/65 hover:text-white"
                : active
                  ? "text-fg"
                  : "text-muted hover:text-fg";
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${cls}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden md:block">
            <Link
              href="/contact"
              className={`inline-flex items-center rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                overHero
                  ? "bg-white text-ink hover:bg-white/90"
                  : "bg-fg text-bg hover:bg-accent"
              }`}
            >
              Start a project
            </Link>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={`flex h-10 w-10 items-center justify-center rounded-lg border transition-colors md:hidden ${
              overHero ? "border-white/30 text-white" : "border-border text-fg"
            }`}
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 block h-0.5 w-5 bg-current transition-all duration-300 ${
                  open ? "top-2 rotate-45" : "top-0.5"
                }`}
              />
              <span
                className={`absolute left-0 top-2 block h-0.5 w-5 bg-current transition-opacity duration-200 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block h-0.5 w-5 bg-current transition-all duration-300 ${
                  open ? "top-2 -rotate-45" : "top-3.5"
                }`}
              />
            </span>
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-b border-border bg-bg transition-[max-height,opacity] duration-300 md:hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="space-y-1 px-5 py-4">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`block rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                  active ? "bg-surface text-fg" : "text-muted hover:bg-surface hover:text-fg"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="mt-2 block rounded-lg bg-fg px-4 py-3 text-center text-base font-medium text-bg"
          >
            Start a project
          </Link>
        </div>
      </div>
    </header>
  );
}

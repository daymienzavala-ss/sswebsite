"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

/**
 * Full-screen dark splash showing the large SS monogram. It's `sticky`, so the
 * light homepage below scrolls up and covers it. As the user scrolls, the logo
 * gently scales down and fades — so it appears to recede "into" the homepage.
 * Only transform/opacity are animated (compositor-only) and the scroll handler
 * is rAF-throttled, so it stays smooth.
 */
export function ScrollIntro() {
  const logoRef = useRef<HTMLDivElement>(null);
  const tagRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      ticking = false;
      const vh = window.innerHeight || 1;
      const p = Math.min(window.scrollY / (vh * 0.85), 1); // 0 → 1 over ~first screen

      if (logoRef.current) {
        const scale = 1 - 0.22 * p;
        logoRef.current.style.transform = `translate3d(0, ${-28 * p}px, 0) scale(${scale})`;
        logoRef.current.style.opacity = `${Math.max(0, 1 - p * 1.15)}`;
      }
      if (tagRef.current) {
        tagRef.current.style.opacity = `${Math.max(0, 1 - p * 1.6)}`;
      }
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
  }, []);

  return (
    <section className="sticky top-0 z-0 -mt-16 flex h-[100svh] flex-col items-center justify-center overflow-hidden bg-ink">
      {/* soft warm glow behind the mark */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(38rem 30rem at 50% 44%, rgba(178,92,67,0.20), transparent 62%)",
        }}
      />

      <div ref={logoRef} className="relative will-change-transform">
        <Image
          src="/ss-logo.png"
          alt="StangScales"
          width={338}
          height={289}
          priority
          className="h-auto w-[clamp(210px,30vw,400px)] [filter:invert(1)]"
        />
      </div>

      <p
        ref={tagRef}
        className="relative mt-10 text-center text-xs uppercase tracking-[0.32em] text-white/55 sm:text-sm"
      >
        Results-driven digital marketing
      </p>
    </section>
  );
}

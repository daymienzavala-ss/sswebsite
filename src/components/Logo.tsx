type LogoProps = {
  className?: string;
  light?: boolean;
};

export function Logo({ className = "", light = false }: LogoProps) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 ${
        light ? "text-white" : "text-fg"
      } ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/ss-logo.png"
        alt=""
        width={338}
        height={289}
        className={`h-7 w-auto ${light ? "[filter:invert(1)]" : ""}`}
      />
      <span className="font-display text-xl font-semibold tracking-tight">
        StangScales
      </span>
    </span>
  );
}

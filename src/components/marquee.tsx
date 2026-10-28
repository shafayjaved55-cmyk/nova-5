import type { ReactNode } from "react";

/**
 * Infinite CSS marquee. Children are duplicated once; the track animates -50%.
 */
export function Marquee({
  children,
  className = "",
  slow = false,
  reverse = false,
}: {
  children: ReactNode;
  className?: string;
  slow?: boolean;
  reverse?: boolean;
}) {
  return (
    <div className={`marquee-hover group relative overflow-hidden ${className}`}>
      <div
        className={`marquee-track flex w-max items-center ${
          slow ? "animate-marquee-slow" : "animate-marquee"
        }`}
        style={reverse ? { animationDirection: "reverse" } : undefined}
      >
        <div className="flex items-center">{children}</div>
        <div className="flex items-center" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}

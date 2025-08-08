"use client";

import React from "react";
import clsx from "clsx";

type MarqueeDirection = "left" | "right";

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  itemClassName?: string;
  speedSeconds?: number; // Full cycle duration
  direction?: MarqueeDirection;
  pauseOnHover?: boolean;
  fadeEdges?: boolean;
  gapClassName?: string; // e.g., "gap-10"
}

export default function Marquee({
  children,
  className,
  itemClassName,
  speedSeconds = 20,
  direction = "left",
  pauseOnHover = true,
  fadeEdges = true,
  gapClassName = "gap-10",
}: MarqueeProps) {
  return (
    <div
      className={clsx(
        "relative w-full overflow-hidden",
        pauseOnHover && "group",
        className
      )}
    >
      {/* Edge fades */}
      {fadeEdges && (
        <>
          <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-black to-transparent z-10" />
        </>
      )}

      {/* Track */}
      <div
        className={clsx(
          "marquee-track flex items-center whitespace-nowrap will-change-transform"
        )}
        style={{
          animationDuration: `${speedSeconds}s`,
          animationName: direction === "left" ? "marquee-left" : "marquee-right",
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
          // Allow hover pause through CSS below
        }}
      >
        {/* Duplicate children for seamless loop */}
        <div className={clsx("flex items-center shrink-0", gapClassName)}>
          {React.Children.map(children, (child, idx) => (
            <div key={`a-${idx}`} className={clsx("flex-none", itemClassName)}>
              {child}
            </div>
          ))}
        </div>
        <div className={clsx("flex items-center shrink-0", gapClassName)} aria-hidden>
          {React.Children.map(children, (child, idx) => (
            <div key={`b-${idx}`} className={clsx("flex-none", itemClassName)}>
              {child}
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .group:hover .marquee-track { 
          animation-play-state: ${pauseOnHover ? "paused" : "running"};
        }
      `}</style>
    </div>
  );
}



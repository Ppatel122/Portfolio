import React from "react";
import { cn } from "@/lib/utils";

interface DotBackgroundProps {
  children?: React.ReactNode;
  className?: string;
}

export function DotBackground({ children, className }: DotBackgroundProps) {
  return (
    <div
      className={cn(
        "h-full w-full relative flex items-center justify-center",
        className
      )}
      style={{
        backgroundColor: "#060917",
        backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)",
        backgroundSize: "20px 20px",
      }}
    >
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-transparent [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="relative z-20 w-full">
        {children}
      </div>
    </div>
  );
} 
"use client";
import { cn } from "@/lib/utils";
import { useRef, useState } from "react";

export interface CometCardProps {
  rotateDepth?: number;
  translateDepth?: number;
  className?: string;
  children: React.ReactNode;
  theme?: 'default' | 'purple' | 'green' | 'gray' | 'work';
}

export const CometCard = ({
  rotateDepth = 17.5,
  translateDepth = 20,
  className,
  children,
  theme = 'default',
}: CometCardProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const rotateX = ((e.clientY - centerY) / rect.height) * rotateDepth;
    const rotateY = ((e.clientX - centerX) / rect.width) * -rotateDepth;

    const translateX = ((e.clientX - centerX) / rect.width) * translateDepth;
    const translateY = ((e.clientY - centerY) / rect.height) * translateDepth;

    containerRef.current.style.transform = `
      perspective(1000px) 
      rotateX(${rotateX}deg) 
      rotateY(${rotateY}deg) 
      translateX(${translateX}px) 
      translateY(${translateY}px)
    `;
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (containerRef.current) {
      containerRef.current.style.transform = `
        perspective(1000px) 
        rotateX(0deg) 
        rotateY(0deg) 
        translateX(0px) 
        translateY(0px)
      `;
    }
  };

  const getThemeClasses = () => {
    switch (theme) {
      case 'purple':
        return {
          background: 'bg-gradient-to-br from-purple-900/80 via-purple-800/60 to-purple-900/80',
          border: 'border-purple-600/50',
          shadow: 'shadow-purple-900/50',
          hoverShadow: 'shadow-purple-900/80',
          overlay: 'bg-gradient-to-br from-purple-500/20 via-transparent to-purple-400/20',
          glow: 'bg-gradient-to-r from-purple-500/30 via-transparent to-purple-400/30'
        };
      case 'green':
        return {
          background: 'bg-gradient-to-br from-green-900/80 via-green-800/60 to-green-900/80',
          border: 'border-green-600/50',
          shadow: 'shadow-green-900/50',
          hoverShadow: 'shadow-green-900/80',
          overlay: 'bg-gradient-to-br from-green-500/20 via-transparent to-green-400/20',
          glow: 'bg-gradient-to-r from-green-500/30 via-transparent to-green-400/30'
        };
      case 'gray':
        return {
          background: 'bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80',
          border: 'border-gray-600/50',
          shadow: 'shadow-gray-900/50',
          hoverShadow: 'shadow-gray-900/80',
          overlay: 'bg-gradient-to-br from-gray-500/20 via-transparent to-gray-400/20',
          glow: 'bg-gradient-to-r from-gray-500/30 via-transparent to-gray-400/30'
        };
      case 'work':
        return {
          background: 'bg-[#0a0a0a]',
          border: 'border-[#1a1a1a]',
          shadow: 'shadow-black/50',
          hoverShadow: 'shadow-black/80',
          overlay: 'bg-gradient-to-br from-gray-800/10 via-transparent to-gray-700/10',
          glow: 'bg-gradient-to-r from-gray-700/20 via-transparent to-gray-600/20'
        };
      default:
        return {
          background: 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900',
          border: 'border-slate-700/50',
          shadow: 'shadow-slate-900/50',
          hoverShadow: 'shadow-slate-900/80',
          overlay: 'bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10',
          glow: 'bg-gradient-to-r from-purple-500/20 via-transparent to-blue-500/20'
        };
    }
  };

  const themeClasses = getThemeClasses();

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative transition-transform duration-300 ease-out transform-gpu",
        className
      )}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      <div
        className={cn(
          "relative w-full h-full rounded-xl overflow-hidden",
          themeClasses.background,
          "border",
          themeClasses.border,
          "shadow-2xl",
          themeClasses.shadow,
          isHovered && "shadow-3xl",
          isHovered && themeClasses.hoverShadow
        )}
        style={{
          transform: "translateZ(0px)",
        }}
      >
        {/* Gradient overlay that appears on hover */}
        <div
          className={cn(
            "absolute inset-0 opacity-0 transition-opacity duration-300",
            themeClasses.overlay,
            isHovered && "opacity-100"
          )}
        />
        
        {/* Content */}
        <div className="relative z-10 p-6 h-full">
          {children}
        </div>

        {/* Subtle border glow effect */}
        <div
          className={cn(
            "absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300",
            themeClasses.glow,
            "blur-sm",
            isHovered && "opacity-50"
          )}
          style={{
            transform: "translateZ(-1px)",
          }}
        />
      </div>
    </div>
  );
};

"use client";
import { motion } from "framer-motion";
import { ReactNode, useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface MacbookWindowProps {
  children: ReactNode;
  className?: string;
  title?: string;
}

export const MacbookWindow = ({ 
  children, 
  className, 
  title = "Terminal" 
}: MacbookWindowProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <div
      className="flex items-center justify-center relative p-4 md:p-8"
      ref={containerRef}
    >
      <div className="py-8 w-full relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={cn(
            "relative w-full max-w-5xl mx-auto",
            "bg-[#0a0a0a] backdrop-blur-xl",
            "border border-[#2D2D2D]",
            "rounded-2xl shadow-2xl shadow-black/40",
            "overflow-hidden",
            className
          )}
        >
          {/* macOS Window Header */}
          <div className="flex items-center px-6 py-4 bg-[#0a0a0a] border-b border-[#2D2D2D]">
            {/* Traffic Light Controls */}
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-400 transition-colors cursor-pointer"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-400 transition-colors cursor-pointer"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-400 transition-colors cursor-pointer"></div>
            </div>
            
            {/* Terminal Title */}
            {title && (
              <div className="flex-1 text-center">
                <span className="text-gray-400 text-sm font-medium">{title}</span>
              </div>
            )}
          </div>

          {/* Window Content */}
          <div className="p-6 md:p-8 bg-[#0a0a0a] min-h-[600px]">
            {children}
          </div>
        </motion.div>
      </div>
    </div>
  );
}; 
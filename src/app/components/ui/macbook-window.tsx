"use client";
import { motion, useScroll, useTransform } from "framer-motion";
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
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
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

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [90, -90]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  
  // Ensure initial values are correct
  useEffect(() => {
    if (scrollYProgress.get() === 0) {
      rotate.set(0);
    }
  }, []);

  return (
    <div
      className="h-[60rem] md:h-[80rem] flex items-center justify-center relative p-2 md:p-20"
      ref={containerRef}
    >
      <div
        className="py-10 md:py-40 w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        <motion.div
          initial={{ rotateX: 0 }}
          style={{
            rotateX: rotate,
            scale,
            boxShadow:
              "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
          }}
          className={cn(
            "relative w-full max-w-7xl mx-auto",
            "bg-black/95 backdrop-blur-xl",
            "border border-gray-800/50",
            "rounded-2xl shadow-2xl shadow-black/40",
            "overflow-hidden",
            className
          )}
        >
          {/* macOS Window Header */}
          <div className="flex items-center px-6 py-4 bg-black/80 border-b border-gray-800/50">
            {/* Traffic Light Controls */}
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-400 transition-colors cursor-pointer"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-400 transition-colors cursor-pointer"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-400 transition-colors cursor-pointer"></div>
            </div>
          </div>

          {/* Window Content */}
          <div className="p-10 md:p-14 lg:p-20 min-h-[550px] md:min-h-[600px] bg-[#100c0c]">
            {children}
          </div>
        </motion.div>
      </div>
    </div>
  );
}; 
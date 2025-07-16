"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface ContainerTextFlipProps {
  words: string[];
  className?: string;
  duration?: number;
}

export const ContainerTextFlip = ({
  words,
  className,
  duration = 3000,
}: ContainerTextFlipProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, [words.length, duration]);

  return (
    <div className={cn("relative", className)}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ 
            duration: 0.5, 
            ease: "easeInOut" 
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {words[currentIndex]}
        </motion.div>
      </AnimatePresence>
      
      {/* Invisible text for height calculation */}
      <div className="invisible" aria-hidden="true">
        {words[0]}
      </div>
    </div>
  );
}; 
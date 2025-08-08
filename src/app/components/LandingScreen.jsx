"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { AuroraBackground } from "./ui/aurora-background";
import { ContainerTextFlip } from "./ui/container-text-flip";

export default function LandingScreen({ showContent }) {
  return (
    <div id="home" className="relative z-50">
      <AuroraBackground className="dark:bg-black bg-black">
        {/* Black overlay that fades out */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 bg-black z-10"
        />
        
        <div className="w-full max-w-7xl px-6 md:px-12 lg:px-24 min-h-screen flex items-center justify-center relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-8 text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ 
                opacity: showContent ? 1 : 0, 
                y: showContent ? 0 : 30 
              }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Hi, I'm Pranj Patel<br />
              <motion.span 
                className="block text-4xl sm:text-5xl md:text-7xl text-gray-400"
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: showContent ? 1 : 0, 
                  y: showContent ? 0 : 20 
                }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                Software Engineer
              </motion.span>
            </motion.h1>

            <motion.div 
              className="mt-16 space-y-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ 
                opacity: showContent ? 1 : 0, 
                y: showContent ? 0 : 30 
              }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              {showContent && (
                <ContainerTextFlip 
                  words={[
                    "Building software that empowers communities",
                    "Solving the world's most difficult problems",
                    "Creating innovative solutions that matter"
                  ]}
                  className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200"
                  duration={3000}
                />
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ 
                opacity: showContent ? 1 : 0, 
                y: showContent ? 0 : 30 
              }}
              transition={{ duration: 0.8, delay: 2.3 }}
              className="mt-8"
            >
              <Link
                href="https://linkedin.com/in/pranj-patel"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 px-6 py-3 rounded-full transition-all duration-300 group border border-white/20"
              >
                <span className="font-medium text-white">Let's Connect</span>
                <FiArrowUpRight className="w-5 h-5 transition-transform group-hover:rotate-45 text-white" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </AuroraBackground>
    </div>
  );
}
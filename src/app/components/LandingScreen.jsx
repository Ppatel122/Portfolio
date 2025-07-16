"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { AuroraBackground } from "./ui/aurora-background";
import { ContainerTextFlip } from "./ui/container-text-flip";
import { MacbookWindow } from "./ui/macbook-window";

export default function LandingScreen() {
  return (
    <div id="home" className="relative z-50">
      <AuroraBackground className="dark:bg-black bg-black">
        <div className="w-full max-w-7xl px-6 md:px-12 lg:px-24">
          <MacbookWindow>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-8 text-white">
                Hi, I'm Pranj Patel<br />
                <span className="text-gray-400">Software Engineer</span>
              </h1>

              <div className="mt-16 space-y-4">
                <ContainerTextFlip 
                  words={[
                    "Building software that empowers communities",
                    "Solving the world's most difficult problems",
                    "Creating innovative solutions that matter"
                  ]}
                  className="text-lg md:text-xl lg:text-2xl text-gray-200"
                  duration={3000}
                />
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
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
          </MacbookWindow>
        </div>
      </AuroraBackground>
    </div>
  );
}
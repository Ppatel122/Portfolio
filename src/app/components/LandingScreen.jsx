"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { AuroraBackground } from "./ui/aurora-background";
import { ContainerTextFlip } from "./ui/container-text-flip";

export default function LandingScreen() {
  return (
    <div id="home">
      <AuroraBackground className="dark:bg-black bg-black">
        <div className="w-full max-w-4xl px-6 md:px-12 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-6 text-white relative z-10">
              Hi, I'm Pranj Patel<br />
              <span className="text-gray-500">Software Engineer</span>
            </h1>

            <div className="mt-12 space-y-4">
              <ContainerTextFlip 
                words={[
                  "Building software that empowers communities",
                  "Solving the world's most difficult problems",
                  "Creating innovative solutions that matter"
                ]}
                className="text-2xl md:text-3xl text-gray-100 relative z-10"
                duration={3000}
              />
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12 relative z-10"
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
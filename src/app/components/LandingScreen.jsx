"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

export default function LandingScreen() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white px-6 md:px-12 lg:px-24">
      {/* Main Content - Adjusted for navbar removal */}
      <div className="max-w-4xl mx-auto pt-60"> {/* Added pt-24 for top padding */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-6">
            Hi, I'm Pranj Patel<br />
            <span className="text-gray-400">Software Engineer</span>
          </h1>

          <div className="mt-12 space-y-4">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-2xl md:text-3xl text-gray-200"
            >
              Building tools that empower communities
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12"
          >
            <Link
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#2D2D2D] hover:bg-[#3D3D3D] px-6 py-3 rounded-full transition-all duration-300 group"
            >
              <span className="font-medium">Let's Connect</span>
              <FiArrowUpRight className="w-5 h-5 transition-transform group-hover:rotate-45" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
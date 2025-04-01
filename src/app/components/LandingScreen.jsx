"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function LandingScreen() {
  return (
    <div className="flex justify-center items-start h-screen overflow-hidden bg-[#0f0f0f] text-white px-4 md:px-12 lg:px-32">
      <div className="flex w-full max-w-7xl gap-8">
        {/* Sidebar Wrapper to vertically center */}
        <div className="w-full md:w-1/4 flex items-center">
          {/* Sidebar Card */}
          <div className="bg-[#1c1c1c] p-6 rounded-2xl shadow-lg flex flex-col items-center border border-gray-500 w-full h-fit">
            <div className="relative w-64 h-64 xl:w-64 xl:h-64 lg:w-48 lg:h-48 md:w-48 md:h-48 rounded-xl overflow-hidden">
              <Image
                src="/profile-ghibli.jpg"
                alt="Pranj Patel"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h2 className="mt-4 text-3xl font-bold text-white">Pranj Patel</h2>
            <p className="mt-8 text-sm text-gray-400 text-center">
              Full Stack Software Engineer passionate about creating efficient,
              scalable solutions that solve real-world problems.
            </p>
            <div className="flex gap-6 mt-4 text-gray-300 text-2xl">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="mailto:your@email.com">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full md:w-3/4 h-screen p-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold">
              Hi, I'm <span className="text-gray-200">Pranj Patel</span>
            </h1>
            <p className="text-2xl mt-4 text-gray-400">
              Full-Stack Software Engineer
            </p>
          </motion.div>

          {/* Additional content can go here */}
        </div>
      </div>
    </div>
  );
}

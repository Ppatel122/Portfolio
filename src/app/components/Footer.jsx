"use client";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Footer() {
  return (
    <footer id="contact" className="sticky bottom-0 bg-white text-black py-20 min-h-[50vh] flex items-end z-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Section */}
          <div className="flex flex-col items-center md:items-end text-center md:text-left">
            <div className="max-w-md">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-3xl font-bold mb-4"
              >
                Pranj Patel
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-gray-600 mb-6"
              >
                Building software that empowers communities
              </motion.p>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col items-center">
            <div className="max-w-md w-full flex flex-col items-center md:items-start">
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-xl font-semibold mb-4 text-center md:text-left"
              >
                Feel free to connect!
              </motion.h3>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="flex justify-center space-x-8"
              >
                <a 
                  href="https://linkedin.com/in/pranj-patel" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  <FaLinkedin className="w-7 h-7" />
                </a>
                <a 
                  href="https://github.com/Ppatel122" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  <FaGithub className="w-7 h-7" />
                </a>
                <a 
                  href="mailto:pranj1012@gmail.com" 
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  <HiOutlineMail className="w-7 h-7" />
                </a>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Copyright - Centered */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mt-16 text-gray-500"
        >
          © 2025 Pranj Patel. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
}
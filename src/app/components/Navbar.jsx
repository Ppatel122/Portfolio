"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Navbar({ visible }) {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ 
        opacity: visible ? 1 : 0,
        y: visible ? 0 : -20
      }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100"
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <motion.span
          className="text-gray-900 hover:text-gray-800 transition-colors font-medium cursor-pointer"
        >
          Pranj Patel
        </motion.span>

        <div className="flex space-x-6">
          {['About', 'Projects', 'Contact'].map((link) => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
              whileHover={{ y: -1 }}
            >
              {link}
            </motion.a>
          ))}
        </div>

        <div className="flex items-center space-x-5">
          <motion.a
            href="mailto:pranj1012@gmail.com"
            className="text-gray-600 hover:text-gray-900"
            whileHover={{ scale: 1.03 }}
          >
            <MdEmail className="w-5 h-5" />
          </motion.a>
          {/* Other social icons */}
        </div>
      </div>
    </motion.nav>
  );
}
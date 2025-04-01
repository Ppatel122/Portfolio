"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-900/90 backdrop-blur-sm border-b border-gray-700'
          : 'bg-transparent backdrop-blur-0 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isScrolled ? 1 : 0 }}
            className="text-gray-100 font-medium"
          >
            Pranj Patel
          </motion.div>

          <motion.div
            className="flex space-x-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: isScrolled ? 1 : 0 }}
          >
            {['About', 'Projects', 'Contact'].map((link) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-gray-300 hover:text-white text-sm transition-colors"
                whileHover={{ y: -1 }}
              >
                {link}
              </motion.a>
            ))}
          </motion.div>

          <div className="flex items-center space-x-5">
            <motion.a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              <FaGithub className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              <FaLinkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="mailto:pranj1012@gmail.com"
              className="text-gray-300 hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              <MdEmail className="w-6 h-6" />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
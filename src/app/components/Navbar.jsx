"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useState } from 'react';

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('Home');

  return (
    <motion.nav
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-sm"
    >
      <motion.div
        layout
        className="max-w-7xl mx-auto px-4"
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <div className="h-16 flex items-center justify-between">
          {/* Left Section - Name */}
          <div className="flex-1">
            <motion.span
              className="text-white font-medium text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Pranj Patel
            </motion.span>
          </div>

          {/* Center Section - Links */}
          <div className="flex-1 flex justify-center">
            <motion.div
              className="flex space-x-2 p-1.5 rounded-full bg-black/20 backdrop-blur-sm border border-white/25"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {['Home', 'About', 'Work', 'Projects', 'Contact'].map((link) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="relative text-white/80 hover:text-white text-sm px-4 py-2 rounded-full transition-colors"
                  onClick={() => setActiveLink(link)}
                >
                  {link}
                  {activeLink === link && (
                    <motion.span
                      layoutId="activeSection"
                      className="absolute inset-0 bg-white/10 rounded-full"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right Section - Social Icons */}
          <div className="flex-1 flex justify-end">
            <motion.div 
              className="flex space-x-6 items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {[
                { icon: FaGithub, href: "https://github.com/Ppatel122" },
                { icon: FaLinkedin, href: "https://linkedin.com/in/pranj-patel" },
                { icon: MdEmail, href: "mailto:pranj1012@gmail.com" }
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors relative group"
                  whileHover={{ scale: 1.1 }}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-xs text-white/80 transition-opacity duration-200">
                    {index === 0 ? 'GitHub' : index === 1 ? 'LinkedIn' : 'Email'}
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
}
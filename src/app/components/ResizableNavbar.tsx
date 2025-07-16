"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarButton,
} from "./ui/resizable-navbar";

export default function ResizableNavbar({ showNavbar }) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Work", link: "#work" },
    { name: "Contact", link: "#contact" },
  ];

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/Ppatel122", label: "GitHub" },
    { icon: FaLinkedin, href: "https://linkedin.com/in/pranj-patel", label: "LinkedIn" },
    { icon: MdEmail, href: "mailto:pranj1012@gmail.com", label: "Email" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ 
        opacity: showNavbar ? 1 : 0, 
        y: showNavbar ? 0 : -20 
      }}
      transition={{ duration: 1.0, ease: "easeOut" }}
    >
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody className="dark">
          {/* Logo */}
          <div className="relative z-20 flex items-center space-x-2 px-2 py-1">
            <span className="font-medium text-white">Pranj Patel</span>
          </div>

          {/* Navigation Items */}
          <NavItems items={navItems} className="text-white" />

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-white transition-colors"
                title={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav className="dark">
          <MobileNavHeader>
            {/* Logo */}
            <div className="flex items-center space-x-2 px-2 py-1">
              <span className="font-medium text-white">Pranj Patel</span>
            </div>

            {/* Mobile Menu Toggle */}
            <MobileNavToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
          </MobileNavHeader>

          {/* Mobile Menu */}
          <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="text-neutral-300 hover:text-white transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            
            {/* Mobile Social Links */}
            <div className="flex items-center space-x-4 pt-4 border-t border-neutral-700">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-300 hover:text-white transition-colors"
                  title={social.label}
                  onClick={() => setIsOpen(false)}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </motion.div>
  );
} 
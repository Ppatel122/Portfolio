"use client";
import { motion } from "framer-motion";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-gray-900 text-center mb-12"
        >
          Contact Me
        </motion.h2>

        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-4">
              <MdEmail className="w-6 h-6 text-gray-600" />
              <a href="mailto:pranj1012@gmail.com" className="text-gray-600 hover:text-gray-900">
                pranj1012@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <MdPhone className="w-6 h-6 text-gray-600" />
              <span className="text-gray-600">+1 (123) 456-7890</span>
            </div>
            <div className="flex items-center space-x-4">
              <MdLocationOn className="w-6 h-6 text-gray-600" />
              <span className="text-gray-600">New York, USA</span>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <FaGithub className="w-6 h-6 text-gray-600" />
              <a 
                href="https://github.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                GitHub
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <FaLinkedin className="w-6 h-6 text-gray-600" />
              <a 
                href="https://linkedin.com/in/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
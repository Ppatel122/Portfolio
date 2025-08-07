"use client";
import { motion } from "motion/react";
import { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import Image from "next/image";

export default function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add your form submission logic here
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };



  return (
    <footer id="contact" className="bg-black text-white pt-24 pb-8 min-h-[80vh] flex items-center z-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8">
          
          {/* Left Section */}
          <div className="flex flex-col justify-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Profile Picture */}
              <div className="flex justify-center mb-6">
                <div className="bg-black p-2 rounded-xl border border-[#2D2D2D]">
                  <Image
                    src="/profile.png"
                    alt="Pranj Patel"
                    width={160}
                    height={160}
                    className="w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-lg object-cover"
                  />
                </div>
              </div>
              
              <h2 className="text-4xl font-bold mb-4">Pranj Patel</h2>
              <p className="text-gray-400 text-lg mb-6">
                Building software that empowers communities
              </p>
              
              {/* Social Icons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex justify-center space-x-6"
              >
                <a 
                  href="https://linkedin.com/in/pranj-patel" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <FaLinkedin className="w-12 h-12" />
                </a>
                <a 
                  href="https://github.com/Ppatel122" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <FaGithub className="w-12 h-12" />
                </a>
                <a 
                  href="mailto:pranj1012@gmail.com" 
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <HiOutlineMail className="w-12 h-12" />
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="flex flex-col justify-center items-center lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-full max-w-lg"
            >
              <div className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold mb-6 text-center">Get In Touch</h3>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      autoComplete="off"
                      className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#2D2D2D] rounded-lg focus:ring-2 focus:ring-gray-600 focus:border-gray-600 text-white placeholder-gray-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      autoComplete="off"
                      className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#2D2D2D] rounded-lg focus:ring-2 focus:ring-gray-600 focus:border-gray-600 text-white placeholder-gray-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      autoComplete="off"
                      className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#2D2D2D] rounded-lg focus:ring-2 focus:ring-gray-600 focus:border-gray-600 text-white placeholder-gray-400 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#2a2a2a] hover:bg-[#3a3a3a] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 focus:ring-offset-[#0a0a0a]"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Copyright - Centered */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16 text-gray-500"
        >
          © 2025 Pranj Patel. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
}
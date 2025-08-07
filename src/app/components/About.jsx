"use client";
import { motion } from "motion/react";
import { CometCard } from "./ui/comet-card";
import Image from "next/image";
import { FaCode, FaRobot, FaGraduationCap, FaRocket } from "react-icons/fa";

export default function About({ sectionRef }) {
  return (
    <section 
      id="about"
      ref={sectionRef}
      className="relative z-40 min-h-screen bg-black pt-20 pb-6"
    >
      <div className="container mx-auto px-4">
        {/* Centered Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white">About Me</h2>
        </motion.div>

        {/* Comet Cards Layout */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[400px]">
            
            {/* Large Left Card - 2/3 width */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2 h-full"
            >
              <CometCard className="w-full h-full" theme="work">
                <div className="h-full flex flex-col">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6">Summary</h3>
                    
                    <div className="space-y-4 text-gray-300">
                      <div className="flex items-start gap-3">
                        <div className="w-12 h-12 rounded-md bg-gray-800 border border-gray-600 flex items-center justify-center flex-shrink-0">
                          <FaCode className="w-5 h-5 text-gray-300" />
                        </div>
                        <p className="leading-relaxed">
                          I'm Pranj Patel, a driven software engineer who finds excitement in turning complex 
                          challenges into elegant solutions. 
                        </p>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-12 h-12 rounded-md bg-gray-800 border border-gray-600 flex items-center justify-center flex-shrink-0">
                          <FaRobot className="w-5 h-5 text-gray-300" />
                        </div>
                        <p className="leading-relaxed">
                          I'm particularly fascinated by the potential of AI to solve complex challenges across 
                          finance, healthcare, technology, and education. 
                        </p>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-12 h-12 rounded-md bg-gray-800 border border-gray-600 flex items-center justify-center flex-shrink-0">
                          <FaGraduationCap className="w-5 h-5 text-gray-300" />
                        </div>
                        <p className="leading-relaxed">
                          During my Masters at NYU, I'm excited about diving deeper into AI research 
                          and machine learning. 
                        </p>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-12 h-12 rounded-md bg-gray-800 border border-gray-600 flex items-center justify-center flex-shrink-0">
                          <FaRocket className="w-5 h-5 text-gray-300" />
                        </div>
                        <p className="leading-relaxed">
                          I am currently working on an ed tech startup aiming to reduce the workload of 
                          teachers and improve educational outcomes using AI.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CometCard>
            </motion.div>

            {/* Right Column - Stacked Cards */}
            <div className="lg:col-span-1 space-y-6 h-full">
              
              {/* Top Right Card - NYU Purple Theme */}
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="h-[184px]"
              >
                <CometCard className="w-full h-full" theme="work">
                  <div className="h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="relative w-12 h-12 rounded-md overflow-hidden border border-[#2D2D2D]">
                        <Image
                          src="/NYU.png"
                          alt="NYU Logo"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-white">New York University</h3>
                    </div>
                    
                    <div className="space-y-2 text-gray-300 flex-1">
                      <div>
                        <h4 className="font-semibold text-white text-base leading-tight">MSc. in Computer Science</h4>
                        <p className="text-sm text-gray-400 mt-1">September 2025 - May 2027</p>
                      </div>
                    </div>


                  </div>
                </CometCard>
              </motion.div>

              {/* Bottom Right Card - UofA Green Theme */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="h-[184px]"
              >
                <CometCard className="w-full h-full" theme="work">
                  <div className="h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="relative w-12 h-12 rounded-md overflow-hidden border border-[#2D2D2D]">
                        <Image
                          src="/UofA.png"
                          alt="University of Alberta Logo"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-white">University of Alberta</h3>
                    </div>
                    
                    <div className="space-y-2 text-gray-300 flex-1">
                      <div>
                        <h4 className="font-semibold text-white text-base leading-tight">BSc. in Software Engineering</h4>
                        <p className="text-sm text-gray-400 mt-1">September 2019 - April 2024</p>
                      </div>
                    </div>


                  </div>
                </CometCard>
              </motion.div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
"use client";
import { motion } from "framer-motion";
import Timeline from "./Timeline";
import Image from "next/image";
import TechStack from "./TechStack";

export default function About({ sectionRef }) {
  return (
    <section 
      id="about"
      ref={sectionRef}
      className="min-h-screen bg-white py-20"
    >
      <div className="container mx-auto px-4">
        {/* Centered Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900">About Me</h2>
        </motion.div>

        {/* Photo & Experience Row */}
        <div className="grid grid-cols-1 lg:grid-cols-[35%_65%] gap-12 items-start mb-12">
          {/* Left Column - Photo & Description */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex justify-center"
            >
              <div className="relative w-full max-w-xs">
                <div className="rounded-2xl overflow-hidden border-4 border-white shadow-xl bg-gray-50 p-2">
                  <Image
                    src='/profile.png'
                    alt="Pranj Patel"
                    width={400}
                    height={400}
                    className="w-full h-auto rounded-xl"
                  />
                </div>
                <div className="absolute inset-0 border-2 border-gray-200 rounded-2xl -z-10 translate-x-6 translate-y-6" />
              </div>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-prose mx-auto"
            >
              <p className="text-gray-600 text-lg text-center lg:text-left">
                Full Stack Software Engineer with expertise in modern web development. 
                Passionate about creating efficient, scalable solutions that solve real-world problems.
              </p>
            </motion.div>
          </div>

          {/* Right Column - Experience */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 text-center">
              Experience
            </h3>
            <Timeline />
          </motion.div>
        </div>

        {/* Centered Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <TechStack />
        </motion.div>
      </div>
    </section>
  );
}
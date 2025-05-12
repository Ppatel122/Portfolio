"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGraduationCap } from "react-icons/fa";

const education = [
  {
    degree: "Master of Science in Computer Science",
    school: "New York University",
    years: "2025 - 2027",
    location: "New York, NY",
    logo: "/NYU.png"
  },
  {
    degree: "Bachelor of Science in Computer Engineering",
    school: "University of Alberta",
    years: "2019 - 2024",
    location: "Edmonton, AB",
    logo: "/UofA.png"
  }
];

export default function About({ sectionRef }) {
  return (
    <section 
      id="about"
      ref={sectionRef}
      className="min-h-screen bg-black py-20"
    >
      <div className="container mx-auto px-4">
        {/* Centered Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white">About Me</h2>
        </motion.div>

        {/* Content Grid */}
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
                <div className="rounded-2xl overflow-hidden border-4 border-[#2D2D2D] shadow-xl bg-[#1a1a1a] p-2">
                  <Image
                    src='/profile-ghibli.jpg'
                    alt="Pranj Patel"
                    width={400}
                    height={400}
                    className="w-full h-auto rounded-xl"
                  />
                </div>
                <div className="absolute inset-0 border-2 border-[#2D2D2D] rounded-2xl -z-10 translate-x-6 translate-y-6" />
              </div>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-prose mx-auto"
            >
              <p className="text-gray-300 text-lg text-center lg:text-left">
                Full Stack Software Engineer with expertise in modern web development. 
                Passionate about creating efficient, scalable solutions that solve real-world problems.
              </p>
            </motion.div>
          </div>

          {/* Right Column - Education */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold text-white text-center mb-8">
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-[#0a0a0a] rounded-lg p-6 border border-[#1a1a1a] hover:border-purple-500/30 transition-colors"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="relative w-12 h-12 rounded-md overflow-hidden border border-[#2D2D2D]">
                        <Image
                          src={edu.logo}
                          alt={edu.school}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-white font-medium">{edu.degree}</h4>
                        <p className="text-gray-400">{edu.school}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-400 text-sm">{edu.years}</p>
                      <p className="text-gray-500 text-sm">{edu.location}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
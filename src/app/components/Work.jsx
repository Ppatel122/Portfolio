"use client";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import Image from "next/image";

const experiences = [
  {
    position: "Junior Software QA Engineer",
    company: "Seisware International Inc.",
    date: "Sep 2024 - Apr 2025",
    location: "Calgary, Alberta",
    logo: "/seisware.jpg"
  },
  {
    position: "Software Engineer Intern",
    company: "Seisware International Inc.",
    date: "May 2023 - Dec 2023",
    location: "Calgary, Alberta",
    logo: "/seisware.jpg"
  },
  {
    position: "Software Engineer Intern",
    company: "Willowglen Systems Inc.",
    date: "Jan 2022 - Aug 2022",
    location: "Edmonton, Alberta",
    logo: "/willowglen.jpg"
  },
  {
    position: "Front-End Developer Intern",
    company: "University of Alberta",
    date: "May 2021 - Aug 2021",
    location: "Edmonton, Alberta",
    logo: "/UofA.png"
  }
];

export default function Work() {
  return (
    <section id="work" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-white text-center mb-12"
        >
          Work Experience
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative mb-8"
            >
              <div className="p-6 bg-[#0a0a0a] rounded-lg shadow-lg border border-[#1a1a1a] hover:border-purple-500/30 transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-white">{exp.position}</h3>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <FaCalendarAlt className="w-4 h-4" />
                    <span className="text-sm">{exp.date}</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <div className="relative w-12 h-12 rounded-md overflow-hidden border border-[#2D2D2D]">
                      <Image
                        src={exp.logo}
                        alt={exp.company}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="font-medium text-gray-300">{exp.company}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-gray-400">
                    <FaMapMarkerAlt className="w-4 h-4" />
                    <span className="text-sm">{exp.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 
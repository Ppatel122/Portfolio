"use client";
import { motion } from "framer-motion";
import { FaBuilding, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const experiences = [
  {
    position: "Junior Software QA Engineer",
    company: "Seisware International Inc.",
    date: "Sep 2024 - Apr 2025",
    location: "Calgary, Alberta"
  },
  {
    position: "Software Engineer Intern",
    company: "Seisware International Inc.",
    date: "May 2023 - Dec 2023", 
    location: "Calgary, Alberta"
  },
  {
    position: "Software Engineer Intern",
    company: "Willowglen Systems Inc.",
    date: "Jan 2022 - Aug 2022",
    location: "Edmonton, Alberta"
  },
  {
    position: "Front-End Developer Intern",
    company: "University of Alberta",
    date: "May 2021 - Aug 2021",
    location: "Edmonton, Alberta"
  }
];

export default function Timeline() {
    return (
      <div className="relative mx-auto max-w-2xl py-6">
        
        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative mb-4"
          >
            <div className={`p-6 bg-white rounded-lg shadow-sm border border-gray-100 
              hover:shadow-md transition-shadow`}>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold text-gray-900">{exp.position}</h3>
                <div className="flex items-center space-x-2 text-gray-500">
                  <FaCalendarAlt className="w-4 h-4" />
                  <span className="text-sm">{exp.date}</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2 text-gray-600">
                  <FaBuilding className="w-4 h-4" />
                  <span className="font-medium">{exp.company}</span>
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
    );
  }
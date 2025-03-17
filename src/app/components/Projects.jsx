"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLink, FaHtml5, FaCss3Alt, FaJava } from "react-icons/fa";
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiMongodb, 
  SiFirebase, 
  SiAzure, 
  SiVite,
  SiJavascript,
  SiAndroidstudio,
  SiXml
} from "react-icons/si";
import Image from "next/image";

const projects = [
  {
    title: "Orqa - Educational App",
    date: "May 2025",
    tech: ["Vite", "React", "MongoDB"],
    description: "Interactive learning platform with real-time collaboration features",
    image: "/orqa.jpg",
    github: "#",
    live: "#"
  },
  {
    title: "TravellR - Travel App",
    date: "March 2025",
    tech: ["Next.js", "TypeScript", "Firebase"],
    description: "Trip planning application with AI-powered itinerary generation",
    image: "/travellr.jpg",
    github: "#",
    live: "#"
  },
  {
    title: "Air Quality Dashboard",
    date: "April 2024",
    tech: ["React", "D3.js", "Azure"],
    description: "Global air quality visualization platform with real-time sensor data",
    image: "/air-quality.jpg",
    github: "#",
    live: "#"
  },
  {
    title: "FoodVerse",
    date: "November 2022",
    tech: ["Java", "Android Studio", "XML", "Firebase"],
    description: "Food waste reduction app with inventory tracking and meal planning",
    image: "/foodverse.jpg",
    github: "#",
    live: "#"
  },
  {
    title: "Pool Simulation",
    date: "June 2021",
    tech: ["HTML", "CSS", "JavaScript"],
    description: "Physics-based pool game simulation with collision visualization",
    image: "/pool-sim.jpg",
    github: "#",
    live: "#"
  },
  {
    title: "Newton's Cradle Simulation",
    date: "August 2021",
    tech: ["HTML", "CSS", "JavaScript"],
    description: "Interactive physics simulation demonstrating momentum conservation",
    image: "/newtons-cradle.jpg",
    github: "#",
    live: "#"
  },
];

const techIcons = {
  "Vite": SiVite,
  "React": SiReact,
  "Next.js": SiNextdotjs,
  "TypeScript": SiTypescript,
  "MongoDB": SiMongodb,
  "Firebase": SiFirebase,
  "Azure": SiAzure,
  "HTML": FaHtml5,
  "CSS": FaCss3Alt,
  "JavaScript": SiJavascript,
  "Java": FaJava,
  "Android Studio": SiAndroidstudio,
  "XML": SiXml
};

export default function Projects() {
    return (
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-gray-900 text-center mb-12"
          >
            Projects
          </motion.h2>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
              >
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
  
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                    <span className="text-sm text-gray-500">{project.date}</span>
                  </div>
  
                  <p className="text-gray-600 mb-4">{project.description}</p>
  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => {
                      const Icon = techIcons[tech] || FaGithub;
                      return (
                        <span 
                          key={tech}
                          className="flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-sm"
                        >
                          <Icon className="w-4 h-4 mr-2" />
                          {tech}
                        </span>
                      )
                    })}
                  </div>
  
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="flex items-center px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      <FaGithub className="w-5 h-5 mr-2" />
                      Code
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                    >
                      <FaLink className="w-5 h-5 mr-2" />
                      Live
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }
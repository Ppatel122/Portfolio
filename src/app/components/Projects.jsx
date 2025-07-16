"use client";
import { motion } from "framer-motion";
import { FaGithub, FaHtml5, FaCss3Alt, FaJava, FaGraduationCap, FaBilliards } from "react-icons/fa";
import { SiReact, SiNextdotjs, SiTypescript, SiMongodb, SiJavascript, SiAndroidstudio, SiRemix } from "react-icons/si";
import { RiExternalLinkLine, RiBilliardsFill } from "react-icons/ri";
import { VscAzure } from "react-icons/vsc";
import { IoFastFoodOutline } from "react-icons/io5";
import { TbBrandOpenai } from "react-icons/tb";
import { MdOutlineAirplanemodeActive } from "react-icons/md";
import { WiDayCloudy } from "react-icons/wi";
import { GiPoolTriangle } from "react-icons/gi";
import { GlareCard } from "./ui/glare-card";

const ViteIcon = () => (
    <svg className="w-4 h-4 mr-2" viewBox="0 0 32 32">
      <defs>
        <linearGradient id="viteGradient" x1="0" y1="0" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#41D1FF" />
          <stop offset="100%" stopColor="#BD34FE" />
        </linearGradient>
      </defs>
      <path 
        fill="url(#viteGradient)"
        d="M29.884 6.146l-13.142 23.5a.714.714 0 0 1-1.244.005L2.096 6.148a.714.714 0 0 1 .746-1.057l13.156 2.352a.714.714 0 0 0 .253 0l12.881-2.348a.714.714 0 0 1 .752 1.05z"
      />
      <path
        fill="#FFEA83"
        d="M22.264 2.007L12.54 3.912a.357.357 0 0 0-.288.33l-.598 10.104a.357.357 0 0 0 .437.369l2.707-.625a.357.357 0 0 1 .43.42l-.804 3.939a.357.357 0 0 0 .454.413l1.672-.508a.357.357 0 0 1 .454.414l-1.317 6.173c-.08.375.434.548.65.267l.143-.222 7.83-15.8a.357.357 0 0 0-.387-.51l-2.787.537a.357.357 0 0 1-.41-.45l1.818-6.306a.357.357 0 0 0-.412-.45z"
      />
    </svg>
);
  

const FirebaseIcon = () => (
    <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
      <defs>
        <linearGradient id="firebaseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFCA28" />
          <stop offset="40%" stopColor="#FFA000" />
          <stop offset="100%" stopColor="#F57C00" />
        </linearGradient>
      </defs>
      <path 
        fill="url(#firebaseGradient)"
        d="M3.89 15.672L6.255.461A.542.542 0 0 1 7.27.288l2.543 4.771zm16.794 3.692l-2.25-14a.54.54 0 0 0-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 0 0 1.635 0zM14.3 7.147l-1.82-3.482a.542.542 0 0 0-.96 0L3.53 17.984z"
      />
    </svg>
);

const JavaIcon = () => (
    <svg 
      className="w-4 h-4 mr-2"
      viewBox="0 0 48 48"
    >
      <g transform="scale(1)">
        <path 
          fill="#F44336" 
          d="M23.65 24.898c-0.998-1.609-1.722-2.943-2.725-5.455C19.229 15.2 31.24 11.366 26.37 3.999c2.111 5.089-7.577 8.235-8.477 12.473C17.07 20.37 23.645 24.898 23.65 24.898z"
        />
        <path 
          fill="#F44336" 
          d="M23.878 17.27c-0.192 2.516 2.229 3.857 2.299 5.695 0.056 1.496-1.447 2.743-1.447 2.743s2.728-0.536 3.579-2.818c0.945-2.534-1.834-4.269-1.548-6.298 0.267-1.938 6.031-5.543 6.031-5.543S24.311 11.611 23.878 17.27z"
        />
        <path 
          fill="#1565C0" 
          d="M32.084 25.055c1.754-.394 3.233.723 3.233 2.01 0 2.901-4.021 5.643-4.021 5.643s6.225-.742 6.225-5.505C37.521 24.053 34.464 23.266 32.084 25.055zM29.129 27.395c0 0 1.941-1.383 2.458-1.902-4.763 1.011-15.638 1.147-15.638.269 0-.809 3.507-1.638 3.507-1.638s-7.773-.112-7.773 2.181C11.683 28.695 21.858 28.866 29.129 27.395z"
        />
        <path 
          fill="#1565C0" 
          d="M27.935 29.571c-4.509 1.499-12.814 1.02-10.354-0.993-1.198 0-2.974 0.963-2.974 1.889 0 1.857 8.982 3.291 15.63 0.572L27.935 29.571z"
        />
        <path 
          fill="#1565C0" 
          d="M18.686 32.739c-1.636 0-2.695 1.054-2.695 1.822 0 2.391 9.76 2.632 13.627 0.205l-2.458-1.632C24.271 34.404 17.014 34.579 18.686 32.739z"
        />
        <path 
          fill="#1565C0" 
          d="M36.281 36.632c0-0.936-1.055-1.377-1.433-1.588 2.228 5.373-22.317 4.956-22.317 1.784 0-0.721 1.807-1.427 3.477-1.093l-1.42-0.839C11.26 34.374 9 35.837 9 37.017 9 42.52 36.281 42.255 36.281 36.632z"
        />
        <path 
          fill="#1565C0" 
          d="M39 38.604c-4.146 4.095-14.659 5.587-25.231 3.057C24.341 46.164 38.95 43.628 39 38.604z"
        />
      </g>
    </svg>
  );
  
const projects = [
  {
    title: "Orqa",
    date: "In Progress",
    tech: ["Vite", "React", "JavaScript", "MongoDB"],
    description: "Educational platform generating AI-powered curriculum-aligned questions and enabling real-time collaboration between teachers and students to reduce workload while supporting student learning.",
    image: "/orqa.jpg",
    github: "#",
    live: "https://www.orqa.ca/"
  },
  {
    title: "TravellR",
    date: "In Progress",
    tech: ["Next", "React", "TypeScript", "Firebase"],
    description: "Travel planning web application combining comprehensive hotel and flight searches with AI-powered activity recommendations to plan and organize trips efficiently and seamlessly for travelers.",
    image: "/travellr.jpg",
    github: "#",
    live: "#"
  },
  {
    title: "Air Quality Dashboard",
    date: "April 2024",
    tech: ["Remix", "React", "JavaScript", "Azure"],
    description: "Air quality monitoring application providing real-time visualization of environmental sensor data across the globe, featuring comprehensive historical trend analysis and customizable alert notifications for users.",
    image: "/air-quality.png",
    github: "https://github.com/Ppatel122/AirQualityDashboard",
    live: "https://edmonton-air-quality-299f003c3f64.herokuapp.com/"
  },
  {
    title: "FoodVerse",
    date: "November 2022",
    tech: ["Java", "Android Studio", "Firebase"],
    description: "Android application reducing food wastage through secure user authenticated ingredient tracking, comprehensive recipe creation, detailed meal planning and organized shopping lists.",
    image: "/foodverse.png",
    github: "https://github.com/CMPUT301F22T15/Foodverse",
    live: "#"
  },
  {
    title: "Newton's Cradle",
    date: "August 2021",
    tech: ["HTML", "CSS", "JavaScript"],
    description: "Educational Newton's Cradle simulation allowing dynamic adjustment of physics parameters to analyze collision behavior and momentum transfer, developed for the University of Alberta's Mec E 265 course.",
    image: "/newtons-cradle.png",
    github: "https://github.com/Ppatel122/Cradle",
    live: "https://sites.ualberta.ca/~dnobes/Teaching_Section/NOBES_SIM_Newton.html"
  },
  {
    title: "Pool",
    date: "June 2021",
    tech: ["HTML", "CSS", "JavaScript"],
    description: "Educational Pool simulation allowing dynamic adjustment of physics parameters to analyze collision behavior and ball mechanics, developed for the University of Alberta's Mec E 265 course.",
    image: "/pool.png",
    github: "https://github.com/Ppatel122/Pool",
    live: "https://sites.ualberta.ca/~dnobes/Teaching_Section/NOBES_SIM_Pool.html"
  },
];

const techIcons = {
  "Vite": ViteIcon,
  "React": SiReact,
  "Next": SiNextdotjs,
  "TypeScript": SiTypescript,
  "MongoDB": SiMongodb,
  "Firebase": FirebaseIcon,
  "Azure": VscAzure,
  "HTML": FaHtml5,
  "CSS": FaCss3Alt,
  "JavaScript": SiJavascript,
  "Java": JavaIcon,
  "Android Studio": SiAndroidstudio,
  "Remix": SiRemix
};

const techColors = {
    "Vite": "text-purple-400",
    "React": "text-cyan-400",
    "Next": "text-gray-300",
    "TypeScript": "text-blue-400",
    "MongoDB": "text-green-400",
    "Firebase": "text-orange-400",
    "Azure": "text-blue-400",
    "HTML": "text-orange-400",
    "CSS": "text-blue-400",
    "JavaScript": "text-yellow-400",
    "Java": "text-gray-300",
    "Android Studio": "text-green-400",
    "Remix": "text-gray-300"
};

export default function Projects() {
    // Helper function to determine which link to use
    const getProjectLink = (project) => {
        if (project.title === "Orqa") {
            return project.live !== "#" ? project.live : null;
        } else {
            return project.github !== "#" ? project.github : null;
        }
    };

    const handleProjectClick = (project) => {
        const link = getProjectLink(project);
        if (link) {
            window.open(link, '_blank', 'noopener,noreferrer');
        }
    };

    return (
      <section id="projects" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-white text-center mb-12"
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
              >
                  <GlareCard 
                    className={`bg-[#0a0a0a] rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden border border-[#1a1a1a] ${
                      getProjectLink(project) ? 'cursor-pointer' : ''
                    }`}
                    onClick={() => handleProjectClick(project)}
                  >
                  <div className="relative h-64 group overflow-hidden bg-[#1a1a1a] flex items-center justify-center">
                      {/* Project Icon */}
                      <div className="relative transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                          {project.title === "Orqa" && (
                              <TbBrandOpenai className="w-32 h-32 text-purple-500/80" />
                          )}
                          {project.title === "TravellR" && (
                              <MdOutlineAirplanemodeActive className="w-32 h-32 text-blue-500/80" />
                          )}
                          {project.title === "Air Quality Dashboard" && (
                              <WiDayCloudy className="w-32 h-32 text-green-500/80" />
                          )}
                          {project.title === "FoodVerse" && (
                              <IoFastFoodOutline className="w-32 h-32 text-orange-500/80" />
                          )}
                          {project.title === "Newton's Cradle" && (
                              <FaGraduationCap className="w-32 h-32 text-yellow-500/80" />
                          )}
                          {project.title === "Pool" && (
                              <RiBilliardsFill className="w-32 h-32 text-cyan-500/80" />
                          )}
                      </div>
                  
                      {/* Overlay buttons */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
                          {project.github !== "#" && (
                          <a
                              href={project.github}
                              className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all shadow-lg border border-gray-600"
                              target="_blank"
                              rel="noopener noreferrer"
                          >
                              <FaGithub className="w-5 h-5 mr-2" />
                              Code
                          </a>
                          )}
                          {project.live !== "#" && (
                          <a
                              href={project.live}
                              className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all shadow-lg border border-purple-500"
                              target="_blank"
                              rel="noopener noreferrer"
                          >
                              <RiExternalLinkLine className="w-5 h-5 mr-2" />
                              Live
                          </a>
                          )}
                      </div>
                  </div>

                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                      <span className="text-sm text-gray-400">{project.date}</span>
                    </div>

                    <p className="text-gray-400 mb-4">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => {
                        const Icon = techIcons[tech] || FaGithub;
                        return (
                          <span 
                              key={tech}
                              className="flex items-center px-3 py-1 rounded-full bg-[#1a1a1a] text-gray-300 text-sm border border-[#2a2a2a] hover:border-purple-500/50 transition-colors"
                          >
                              <span className={`${techColors[tech] || 'text-gray-300'}`}>
                                  <Icon className="w-4 h-4 mr-2" />
                              </span>
                              {tech}
                          </span>
                        )
                      })}
                    </div>
                  </div>
                </GlareCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }
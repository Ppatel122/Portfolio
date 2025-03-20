"use client";
import { 
  FaPython, 
  FaJava, 
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiJavascript,
  SiCplusplus,
  SiNextdotjs,
  SiMongodb,
  SiGrpc,
  SiFlask,
  SiFirebase,
  SiMysql,
} from "react-icons/si";

const techStack = [
  { name: "Python", icon: <FaPython /> },
  { name: "Java", icon: <FaJava /> },
  { name: "C++", icon: <SiCplusplus /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "React", icon: <FaReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "SQL", icon: <SiMysql /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "Flask", icon: <SiFlask /> },
  { name: "Firebase", icon: <SiFirebase /> },
];

// Double the array for seamless looping
const duplicatedTechStack = [...techStack, ...techStack];

export default function TechStack() {
  return (
    <div className="max-w-4xl mx-auto overflow-hidden">
      <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
        Skills
      </h3>
      <div className="relative h-32 overflow-hidden">
        <div className="absolute left-0 flex w-[200%] animate-marquee items-center space-x-1">
          {duplicatedTechStack.map((tech, index) => (
            <div 
              key={index}
              className="flex flex-col items-center justify-center min-w-[150px]"
            >
              <span className="text-4xl text-gray-700 mb-2">
                {tech.icon}
              </span>
              <span className="text-gray-600 font-medium text-sm">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Add this to your globals.css */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 10s linear infinite;
        }
      `}</style>
    </div>
  );
}
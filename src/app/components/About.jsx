"use client";
import { motion } from "motion/react";
import { CometCard } from "./ui/comet-card";
import Image from "next/image";
import { ViteIcon, FirebaseIcon, JavaIcon, PythonIcon, GRPCIcon, CPlusPlusIcon } from "./CustomIcons";
import { FaGithub, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiReact, SiNextdotjs, SiTypescript, SiMongodb, SiJavascript, SiAndroidstudio, SiRemix, SiTailwindcss, SiNodedotjs, SiExpress, SiFlask, SiDjango, SiPostman } from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";
import { VscAzure } from "react-icons/vsc";

const techSphereIcons = [
  { name: "HTML", icon: FaHtml5 },
  { name: "CSS", icon: FaCss3Alt },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: SiReact },
  { name: "Next", icon: SiNextdotjs },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Android Studio", icon: SiAndroidstudio },
  { name: "Remix", icon: SiRemix },
  { name: "GitHub", icon: FaGithub },
  { name: "Vite", icon: ViteIcon },
  { name: "Firebase", icon: FirebaseIcon },
  { name: "Java", icon: JavaIcon },
  { name: "Azure", icon: VscAzure },
  { name: "Python", icon: PythonIcon },
  { name: "CPP", icon: CPlusPlusIcon },
  { name: "gRPC", icon: GRPCIcon },
  { name: "Flask", icon: SiFlask },
  { name: "Django", icon: SiDjango },
  { name: "Postman", icon: SiPostman },
  { name: "Visual Studio", icon: DiVisualstudio },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "Node", icon: SiNodedotjs },
  { name: "Express", icon: SiExpress },
];

const techSphereColors = {
  Vite: "text-purple-600",
  React: "text-cyan-600",
  Next: "text-white",
  TypeScript: "text-blue-600",
  MongoDB: "text-green-600",
  Firebase: "text-orange-600",
  Azure: "text-blue-600",
  HTML: "text-orange-600",
  CSS: "text-blue-600",
  JavaScript: "text-yellow-500",
  Java: "text-gray-600",
  "Android Studio": "text-green-600",
  Remix: "text-white",
  GitHub: "text-white",
  Tailwind: "text-teal-500",
  Node: "text-green-600",
  Express: "text-gray-400",
  Flask: "text-white",
  Django: "text-green-800",
  Postman: "text-orange-600",
  "Visual Studio": "text-purple-600",
  Python: "text-blue-400",
  CPP: "text-blue-700",
  gRPC: "text-blue-500",
};

export default function About({ sectionRef }) {
  return (
    <section 
      id="background"
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
          <h2 className="text-4xl font-bold text-white">Background</h2>
        </motion.div>

        {/* Comet Cards Layout */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[400px]">
            
            {/* Left Card - Summary (1/3 width on lg) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-1"
            >
              <CometCard className="w-full h-[392px]" theme="work">
                <div className="h-full flex flex-col overflow-auto">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6">Summary</h3>
                    
                    <div className="space-y-4 text-gray-300 text-[0.89rem]">
                      <div>
                        <p className="leading-relaxed">
                          I'm a software engineer who finds excitement in turning complex 
                          challenges into elegant solutions. 
                        </p>
                      </div>
                      
                      <div>
                        <p className="leading-relaxed">
                          I'm fascinated by how AI is being integrated into society and excited to build systems that make this integration useful in everyday life.
                        </p>
                      </div>

                      <div>
                        <p className="leading-relaxed">
                          I am currently working on a web application aiming to reduce the workload of 
                          teachers and improve educational outcomes using AI.
                        </p>
                      </div>

                    </div>
                  </div>
                </div>
              </CometCard>
            </motion.div>

            {/* Middle Card - Skills (1/3 width on lg) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-1"
            >
              <CometCard className="w-full h-[392px]" theme="work">
                <div className="h-full flex flex-col">
                  <h3 className="text-2xl font-bold text-white mb-6">Skills</h3>
                  <div className="flex flex-wrap gap-4 overflow-auto pr-1">
                    {techSphereIcons.map(({ name, icon: Icon }, index) => {
                      const isCustomSVG = [ViteIcon, FirebaseIcon, JavaIcon, PythonIcon, CPlusPlusIcon, GRPCIcon].includes(Icon);
                      const colorClass = techSphereColors[name] || "text-white";
                      return (
                        <div key={index} className="flex items-center gap-2">
                          <Icon className={`w-5 h-5 ${isCustomSVG ? "" : colorClass}`} />
                          <span className="text-xs text-gray-300">{name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </CometCard>
            </motion.div>

            {/* Right Column - Education (merged) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-1"
            >
              <CometCard className="w-full h-[392px]" theme="work">
                <div className="h-full flex flex-col overflow-auto">
                  <h3 className="text-2xl font-bold text-white mb-6">Education</h3>

                  <div className="flex flex-col justify-evenly h-full">
                    {/* NYU */}
                    <div className="flex items-start gap-5 md:gap-6 py-2 md:py-4">
                      <div className="relative w-12 h-12 rounded-md overflow-hidden border border-[#2D2D2D] flex-shrink-0">
                        <Image src="/NYU.png" alt="NYU Logo" fill className="object-cover" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold leading-tight">New York University</h4>
                        <p className="text-gray-300 text-sm">MSc. in Computer Science</p>
                        <p className="text-gray-400 text-xs mt-1">September 2025 - May 2027</p>
                        
                      </div>
                    </div>

                    <div className="border-t border-[#2D2D2D] my-4 md:my-6" />

                    {/* UofA */}
                    <div className="flex items-start gap-5 md:gap-6 py-2 md:py-4">
                      <div className="relative w-12 h-12 rounded-md overflow-hidden border border-[#2D2D2D] flex-shrink-0">
                        <Image src="/UofA.png" alt="University of Alberta Logo" fill className="object-cover" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold leading-tight">University of Alberta</h4>
                        <p className="text-gray-300 text-sm">BSc. in Software Engineering</p>
                        <p className="text-gray-400 text-xs mt-1">September 2019 - April 2024</p>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </CometCard>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
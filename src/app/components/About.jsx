"use client";
import { animate, motion } from "motion/react";
import Image from "next/image";
import React, { useEffect } from "react";
import { cn } from "@/lib/utils";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { SiReact, SiNodedotjs, SiTypescript, SiMongodb, SiJavascript, SiNextdotjs, SiFlask, SiTailwindcss, SiAndroidstudio, SiRemix, SiDjango, SiPostman, SiExpress } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { FaHtml5, FaCss3Alt, FaGithub } from "react-icons/fa";
import { DiVisualstudio } from "react-icons/di";
import { PythonIcon, JavaIcon, FirebaseIcon, ViteIcon, SQLIcon, GRPCIcon, CPlusPlusIcon } from "./CustomIcons";
import { World } from "./ui/globe";
import { useState } from "react";

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

// Globe configuration for the Flexible Time Zones card
const globeConfig = {
  pointSize: 4,
  globeColor: "#062056",
  showAtmosphere: true,
  atmosphereColor: "#FFFFFF",
  atmosphereAltitude: 0.1,
  emissive: "#062056",
  emissiveIntensity: 0.1,
  shininess: 0.9,
  polygonColor: "rgba(255,255,255,0.7)",
  ambientLight: "#38bdf8",
  directionalLeftLight: "#ffffff",
  directionalTopLight: "#ffffff",
  pointLight: "#ffffff",
  arcTime: 1000,
  arcLength: 0.9,
  rings: 1,
  maxRings: 3,
  initialPosition: { lat: 40.7128, lng: -74.0060 }, // New York coordinates
  autoRotate: false,
  autoRotateSpeed: 0,
};

// Personal journey: Birth → Hometown → Present
const sampleArcs = [
  {
    order: 1,
    startLat: 23.5880, // Mehsana, Gujarat (Birth)
    startLng: 72.3693,
    endLat: 53.5461, // Edmonton, Alberta (Hometown)
    endLng: -113.4938,
    arcAlt: 0.4,
    color: "#06b6d4",
  },
  {
    order: 2,
    startLat: 53.5461, // Edmonton, Alberta (Hometown)
    startLng: -113.4938,
    endLat: 40.7128, // New York (Present)
    endLng: -74.0060,
    arcAlt: 0.3,
    color: "#3b82f6",
  },
];

const TechStackSkeleton = () => {
  const scale = [1, 1.1, 1];
  const transform = ["translateY(0px)", "translateY(-4px)", "translateY(0px)"];
  const sequence = Array.from({ length: 24 }, (_, i) => [
    `.circle-${i + 1}`,
    { scale, transform },
    { duration: 0.8 }
  ]);

  useEffect(() => {
    animate(sequence, {
      repeat: Infinity,
      repeatDelay: 1,
    });
  }, []);

  return (
    <div className="p-2 overflow-hidden h-full relative flex items-center justify-center">
      <div className="grid grid-cols-6 gap-1 justify-center items-center">
        {/* Row 1 */}
        <Container className="h-8 w-8 circle-1">
          <FaHtml5 className="h-4 w-4 text-orange-600" />
        </Container>
        <Container className="h-10 w-10 circle-2">
          <FaCss3Alt className="h-5 w-5 text-blue-600" />
        </Container>
        <Container className="h-8 w-8 circle-3">
          <SiJavascript className="h-4 w-4 text-yellow-500" />
        </Container>
        <Container className="h-10 w-10 circle-4">
          <SiTypescript className="h-5 w-5 text-blue-600" />
        </Container>
        <Container className="h-8 w-8 circle-5">
          <SiReact className="h-4 w-4 text-cyan-600" />
        </Container>
        <Container className="h-10 w-10 circle-6">
          <SiNextdotjs className="h-5 w-5 text-white" />
        </Container>
        
        {/* Row 2 */}
        <Container className="h-10 w-10 circle-7">
          <SiMongodb className="h-5 w-5 text-green-600" />
        </Container>
        <Container className="h-8 w-8 circle-8">
          <SiAndroidstudio className="h-4 w-4 text-green-600" />
        </Container>
        <Container className="h-10 w-10 circle-9">
          <SiRemix className="h-5 w-5 text-white" />
        </Container>
        <Container className="h-8 w-8 circle-10">
          <FaGithub className="h-4 w-4 text-white" />
        </Container>
        <Container className="h-10 w-10 circle-11">
          <ViteIcon className="h-5 w-5" />
        </Container>
        <Container className="h-8 w-8 circle-12">
          <FirebaseIcon className="h-4 w-4" />
        </Container>
        
        {/* Row 3 */}
        <Container className="h-8 w-8 circle-13">
          <JavaIcon className="h-4 w-4" />
        </Container>
        <Container className="h-10 w-10 circle-14">
          <VscAzure className="h-5 w-5 text-blue-600" />
        </Container>
        <Container className="h-8 w-8 circle-15">
          <PythonIcon className="h-4 w-4" />
        </Container>
        <Container className="h-10 w-10 circle-16">
          <CPlusPlusIcon className="h-5 w-5" />
        </Container>
        <Container className="h-8 w-8 circle-17">
          <SQLIcon className="h-4 w-4" />
        </Container>
        <Container className="h-10 w-10 circle-18">
          <GRPCIcon className="h-5 w-5" />
        </Container>
        
        {/* Row 4 */}
        <Container className="h-10 w-10 circle-19">
          <SiFlask className="h-5 w-5 text-white" />
        </Container>
        <Container className="h-8 w-8 circle-20">
          <SiDjango className="h-4 w-4 text-green-800" />
        </Container>
        <Container className="h-10 w-10 circle-21">
          <SiPostman className="h-5 w-5 text-orange-600" />
        </Container>
        <Container className="h-8 w-8 circle-22">
          <DiVisualstudio className="h-4 w-4 text-purple-600" />
        </Container>
        <Container className="h-10 w-10 circle-23">
          <SiTailwindcss className="h-5 w-5 text-teal-500" />
        </Container>
        <Container className="h-8 w-8 circle-24">
          <SiNodedotjs className="h-4 w-4 text-green-600" />
        </Container>
      </div>
    </div>
  );
};



const Container = ({ className, children }) => {
  return (
    <div
      className={cn(
        `h-16 w-16 rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)]
    shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]
    `,
        className
      )}
    >
      {children}
    </div>
  );
};



export default function About({ sectionRef }) {
  // Location data for the three places
  const locations = {
    birthplace: { lat: 23.5880, lng: 72.3693, name: "Birthplace" },
    hometown: { lat: 53.5461, lng: -113.4938, name: "Hometown" },
    present: { lat: 40.7128, lng: -74.0060, name: "Present" }
  };

  const [selectedLocation, setSelectedLocation] = useState("present");

  // Update globe config based on selected location
  const currentGlobeConfig = {
    ...globeConfig,
    initialPosition: locations[selectedLocation]
  };

  return (
    <section 
      id="about"
      ref={sectionRef}
      className="relative z-40 min-h-screen bg-black py-20"
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

        {/* Bento Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <BentoGrid className="grid-cols-3 md:grid-cols-3 auto-rows-[16rem] max-w-5xl">
            {/* Item 1 - Wide item (spans 2 columns) - Top */}
            <BentoGridItem
              title="Collaboration & Communication"
              description="I prioritize client collaboration, fostering open communication"
              className="col-span-2"
              header={
                <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-lg bg-gradient-to-br from-gray-500/20 to-gray-700/20 border border-gray-500/30 p-4">
                  <div className="flex items-center justify-center w-full">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-purple-500">
                      <Image
                        src='/profile-ghibli.jpg'
                        alt="Pranj Patel"
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              }
            />

            {/* Item 2 - Tall item (spans 2 rows) - Top Right */}
            <BentoGridItem
              title="Flexible Time Zones"
              description="I'm very flexible with time zone communications. Based in New York."
              className="row-span-2"
              header={
                <div className="flex flex-col w-full h-full min-h-[6rem] overflow-hidden">
                  {/* Location Buttons */}
                  <div className="flex justify-center gap-1 p-2 bg-black/20 backdrop-blur-sm">
                    <button
                      onClick={() => setSelectedLocation("birthplace")}
                      className={`px-3 py-1 text-xs rounded-md transition-all duration-200 ${
                        selectedLocation === "birthplace"
                          ? "bg-cyan-500 text-white"
                          : "bg-gray-700/50 text-gray-300 hover:bg-gray-600/50"
                      }`}
                    >
                      Birthplace
                    </button>
                    <button
                      onClick={() => setSelectedLocation("hometown")}
                      className={`px-3 py-1 text-xs rounded-md transition-all duration-200 ${
                        selectedLocation === "hometown"
                          ? "bg-cyan-500 text-white"
                          : "bg-gray-700/50 text-gray-300 hover:bg-gray-600/50"
                      }`}
                    >
                      Hometown
                    </button>
                    <button
                      onClick={() => setSelectedLocation("present")}
                      className={`px-3 py-1 text-xs rounded-md transition-all duration-200 ${
                        selectedLocation === "present"
                          ? "bg-cyan-500 text-white"
                          : "bg-gray-700/50 text-gray-300 hover:bg-gray-600/50"
                      }`}
                    >
                      Present
                    </button>
                  </div>
                                     {/* Globe */}
                   <div className="flex-1 w-full">
                     <World 
                       key={selectedLocation} 
                       globeConfig={currentGlobeConfig} 
                       data={sampleArcs} 
                     />
                   </div>
                </div>
              }
            />

            {/* Item 3 - Tall item (spans 2 rows) - Middle Left */}
            <BentoGridItem
              title="Tech Stack"
              description="Passionate about cutting-edge technologies"
              className="row-span-2"
              header={
                <TechStackSkeleton />
              }
            />

            {/* Item 4 - Small item - Middle Right */}
            <BentoGridItem
              title="Current Focus"
              description="Building scalable web applications and working with modern tech stacks. Passionate about clean code and user experience."
              header={
                <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30"></div>
              }
            />

            {/* Item 5 - Wide item (spans 2 columns) - Bottom */}
            <BentoGridItem
              title="Let's Connect"
              description="Ready to work together on your next project"
              className="col-span-2"
              header={
                <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-lg bg-gradient-to-br from-green-500/20 to-teal-500/20 border border-green-500/30 p-4">
                  <div className="flex items-center justify-center w-full">
                    <div className="text-2xl">💼</div>
                  </div>
                </div>
              }
            />
          </BentoGrid>
        </motion.div>
      </div>
    </section>
  );
}
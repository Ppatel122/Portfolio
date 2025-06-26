"use client";
import { animate, motion } from "motion/react";
import Image from "next/image";
import React, { useEffect } from "react";
import { cn } from "@/lib/utils";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { SiReact, SiNodedotjs, SiTypescript, SiMongodb } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { PythonIcon } from "./CustomIcons";

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

const TechStackSkeleton = () => {
  const scale = [1, 1.1, 1];
  const transform = ["translateY(0px)", "translateY(-4px)", "translateY(0px)"];
  const sequence = [
    [
      ".circle-1",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-2",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-3",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-4",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-5",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
  ];

  useEffect(() => {
    animate(sequence, {
      repeat: Infinity,
      repeatDelay: 1,
    });
  }, []);

  return (
    <div className="p-4 overflow-hidden h-full relative flex items-center justify-center">
      <div className="flex flex-row shrink-0 justify-center items-center gap-2">
        <Container className="h-8 w-8 circle-1">
          <SiReact className="h-4 w-4 text-cyan-600" />
        </Container>
        <Container className="h-12 w-12 circle-2">
          <SiNodedotjs className="h-6 w-6 text-green-600" />
        </Container>
        <Container className="circle-3">
          <SiTypescript className="h-8 w-8 text-blue-600" />
        </Container>
        <Container className="h-12 w-12 circle-4">
          <PythonIcon className="h-6 w-6" />
        </Container>
        <Container className="h-8 w-8 circle-5">
          <SiMongodb className="h-4 w-4 text-green-600" />
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

        {/* Bento Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <BentoGrid className="grid-cols-3 md:grid-cols-3 auto-rows-[16rem]">
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
              title="Tech Stack"
              description="Passionate about cutting-edge technologies"
              className="row-span-2"
              header={
                <TechStackSkeleton />
              }
            />

            {/* Item 3 - Tall item (spans 2 rows) - Middle Left */}
            <BentoGridItem
              title="Flexible Time Zones"
              description="I'm very flexible with time zone communications"
              className="row-span-2"
              header={
                <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 p-4">
                  <div className="flex flex-col justify-center items-center w-full space-y-2">
                    <div className="text-xs text-gray-300">🇺🇸 USA</div>
                    <div className="text-xs text-gray-300">🇨🇦 Canada</div>
                    <div className="text-xs text-gray-300">Remote Work</div>
                  </div>
                </div>
              }
            />

            {/* Item 4 - Small item - Middle Right */}
            <BentoGridItem
              title="Let's Connect"
              description="Ready to work together on your next project"
              header={
                <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-lg bg-gradient-to-br from-green-500/20 to-teal-500/20 border border-green-500/30 p-4">
                  <div className="flex items-center justify-center w-full">
                    <div className="text-2xl">💼</div>
                  </div>
                </div>
              }
            />

            {/* Item 5 - Wide item (spans 2 columns) - Bottom */}
            <BentoGridItem
              title="Current Focus"
              description="Building scalable web applications and working with modern tech stacks. Passionate about clean code and user experience."
              className="col-span-2"
              header={
                <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30"></div>
              }
            />
          </BentoGrid>
        </motion.div>
      </div>
    </section>
  );
}
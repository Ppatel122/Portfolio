"use client";
import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { Timeline } from "./ui/timeline";
import { GlareCard } from "./ui/glare-card";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import Image from "next/image";

const timelineData = [
  {
    title: "2024",
    content: (
      <div>
        <GlareCard className="bg-[#0a0a0a] p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-semibold text-white">Junior Software QA Engineer</h3>
            <div className="flex items-center space-x-2 text-gray-400">
              <FaCalendarAlt className="w-4 h-4" />
              <span className="text-sm">Sep 2024 - Apr 2025</span>
            </div>
          </div>
          
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-4">
              <div className="relative w-12 h-12 rounded-md overflow-hidden border border-[#2D2D2D]">
                <Image
                  src="/seisware.jpg"
                  alt="Seisware International Inc."
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-medium text-gray-300">Seisware International Inc.</span>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-400">
              <FaMapMarkerAlt className="w-4 h-4" />
              <span className="text-sm">Calgary, Alberta</span>
            </div>
          </div>
          
          <ul className="list-disc list-outside text-gray-400 space-y-2 pl-5">
            <li>Developed automated test scripts in Python to validate common user workflows across the SeisWare app, increasing test coverage by 70% and saving the QA team 15 hours of manual testing per release.</li>
            <li>Created a system-wide test plan for a major release of the SeisWare app, incorporating load variations and edge case scenarios, uncovering 6 critical bugs pre-release and causing a 40% reduction in post-release issues.</li>
            <li>Conducted black-box testing on new features, identifying critical bugs and ensuring seamless integration with existing functionality before release.</li>
          </ul>
        </GlareCard>
      </div>
    ),
  },
  {
    title: "2023",
    content: (
      <div>
        <GlareCard className="bg-[#0a0a0a] p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-semibold text-white">Software Engineer Intern</h3>
            <div className="flex items-center space-x-2 text-gray-400">
              <FaCalendarAlt className="w-4 h-4" />
              <span className="text-sm">May 2023 - Dec 2023</span>
            </div>
          </div>
          
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-4">
              <div className="relative w-12 h-12 rounded-md overflow-hidden border border-[#2D2D2D]">
                <Image
                  src="/seisware.jpg"
                  alt="Seisware International Inc."
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-medium text-gray-300">Seisware International Inc.</span>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-400">
              <FaMapMarkerAlt className="w-4 h-4" />
              <span className="text-sm">Calgary, Alberta</span>
            </div>
          </div>
          
          <ul className="list-disc list-outside text-gray-400 space-y-2 pl-5">
            <li>Led the refactoring of SeisWare’s internal SDK to support batch CRUD operations, improving API efficiency by enabling developers to process multiple seismic data types in a single request.</li>
            <li>Implemented batch processing logic within the SDK's C++ API layer, reducing network and processing overhead by 60% for high-volume data workflows.</li>
            <li>Built comprehensive unit tests for the new multi-CRUD endpoints, preventing critical post-deployment bugs and ensuring reliability for SDK app developers.</li>
          </ul>
        </GlareCard>
      </div>
    ),
  },
  {
    title: "2022",
    content: (
      <div>
        <GlareCard className="bg-[#0a0a0a] p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-semibold text-white">Software Engineer Intern</h3>
            <div className="flex items-center space-x-2 text-gray-400">
              <FaCalendarAlt className="w-4 h-4" />
              <span className="text-sm">Jan 2022 - Aug 2022</span>
            </div>
          </div>
          
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-4">
              <div className="relative w-12 h-12 rounded-md overflow-hidden border border-[#2D2D2D]">
                <Image
                  src="/willowglen.jpg"
                  alt="Willowglen Systems Inc."
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-medium text-gray-300">Willowglen Systems Inc.</span>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-400">
              <FaMapMarkerAlt className="w-4 h-4" />
              <span className="text-sm">Edmonton, Alberta</span>
            </div>
          </div>
          
          <ul className="list-disc list-outside text-gray-400 space-y-2 pl-5">
            <li>Built a C++ and gRPC-based messaging layer for the Vancouver SkyTrain’s SCADA system, enabling real-time routing of train location, signal and sensor data between modules via a pub-sub architecture.</li>
            <li>Developed simulators in Python and gRPC to emulate the messaging layer, allowing other teams to test their modules independently and accelerate development cycles by 70%.</li>
            <li>Resolved critical C++ and JavaScript bugs that caused data latency errors in real-time data monitoring systems for the Vancouver SkyTrain, Ottawa LRT, and JFK AirTrain, preventing service interruptions for 10,000+ daily riders.</li>
          </ul>
        </GlareCard>
      </div>
    ),
  },
  {
    title: "2021",
    content: (
      <div>
        <GlareCard className="bg-[#0a0a0a] p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-semibold text-white">Front-End Developer Intern</h3>
            <div className="flex items-center space-x-2 text-gray-400">
              <FaCalendarAlt className="w-4 h-4" />
              <span className="text-sm">May 2021 - Aug 2021</span>
            </div>
          </div>
          
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-4">
              <div className="relative w-12 h-12 rounded-md overflow-hidden border border-[#2D2D2D]">
                <Image
                  src="/UofA.png"
                  alt="University of Alberta"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-medium text-gray-300">University of Alberta</span>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-400">
              <FaMapMarkerAlt className="w-4 h-4" />
              <span className="text-sm">Edmonton, Alberta</span>
            </div>
          </div>
          
          <ul className="list-disc list-outside text-gray-400 space-y-2 pl-5">
            <li>Developed and deployed interactive physics web simulations using HTML, CSS and JavaScript, enabling 100+ engineering students each semester to engage deeply with course topics and grasp core concepts faster.</li>
            <li>Redesigned and modernized the Engineering Graphics course website to be fully responsive, reducing navigation-related student support emails by 30% and improving usability across devices.</li>
          </ul>
        </GlareCard>
      </div>
    ),
  },
];

export default function Work() {
  const containerRef = useRef(null);
  const [transformValues, setTransformValues] = useState({
    translateY: 0,
    scaleX: 1,
    scaleY: 1,
    borderRadius: 0
  });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Scroll progress:", latest);
    
    if (latest >= 0.9) {
      const progress = (latest - 0.9) / 0.1; // 0 to 1 over the last 10%
      console.log("Animation progress:", progress);
      
      setTransformValues({
        translateY: -400 * progress,
        scaleX: 1 - (0.15 * progress),
        scaleY: 1 - (0.05 * progress),
        borderRadius: 80 * progress
      });
    } else {
      setTransformValues({
        translateY: 0,
        scaleX: 1,
        scaleY: 1,
        borderRadius: 0
      });
    }
  });

  console.log("Current transform values:", transformValues);

  return (
    <section 
      ref={containerRef}
      id="work" 
      className="relative bg-black shadow-2xl z-30 hover:scale-90 hover:rounded-3xl"
      style={{
        transform: `translateY(${transformValues.translateY}px) scale(${transformValues.scaleX}, ${transformValues.scaleY})`,
        borderBottomLeftRadius: `${transformValues.borderRadius}px`,
        borderBottomRightRadius: `${transformValues.borderRadius}px`,
        transformOrigin: 'center',
        transition: 'all 0.3s ease-out'
      }}
    >
      <Timeline data={timelineData} />
    </section>
  );
} 
"use client";
import React from "react";
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
            <li>Developed automated test scripts in Python to verify user functionality within the SeisWare app, improving test coverage by 60% and reducing manual testing effort.</li>
            <li>Performed black-box testing on new features, identifying critical bugs and ensuring smooth integration with existing functionalities before release.</li>
            <li>Designed comprehensive test plans for new application modules, ensuring thorough validation of features and adherence to quality standards throughout the development lifecycle.</li>
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
            <li>Refactored the SeisWare windows application codebase to integrate over unique 40 data types into a cohesive multi-CRUD architecture.</li>
            <li>Implemented batch processing in all CRUD operations across the codebase, reducing overhead and improving the performance of seismic data analysis tools by 60%.</li>
            <li>Developed comprehensive unit tests for the new multi-CRUD functionality, ensuring robustness and reliability.</li>
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
            <li>Implemented and tested a C++ and gRPC-based messaging library to efficiently route messages between all modules, interfaces, and subsystems of a SCADA system for the Vancouver SkyTrain.</li>
            <li>Developed robust simulators using Python and gRPC for the messaging library, achieving a 70% increase in the development and testing efficiency of other modules.</li>
            <li>Performed various bug fixes in C++ and JavaScript on existing data monitoring systems used at the Ottawa LRT, Vancouver SkyTrain and JFK AirTrain having a daily ridership upwards of 10,000/day.</li>
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
            <li>Developed and deployed interactive physics web simulations using HTML, CSS and JavaScript to allow 100+ mechanical engineering students each semester to visualize various physics concepts.</li>
            <li>Revamped the UI of an existing AutoMark software to increase the efficiency of marking students' submissions by 40%.</li>
            <li>Re-designed the website containing the simulations and tutorials created by past co-op students and updated it to include the content created by my team.</li>
          </ul>
        </GlareCard>
      </div>
    ),
  },
];

export default function Work() {
  return (
    <section id="work">
      <Timeline data={timelineData} />
    </section>
  );
} 
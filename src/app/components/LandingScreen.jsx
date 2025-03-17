"use client";
import { motion } from "framer-motion";

export default function LandingScreen() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-50">
      {/* Content remains the same but remove the nav */}
      <div className="relative z-10 text-center">
        <h1 className="text-6xl font-bold text-gray-900">Hi, I'm Pranj Patel</h1>
        <p className="text-2xl mt-4 text-gray-600">
          Full Stack Software Engineer
        </p>
      </div>
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-10 [background:radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-blue-300 to-purple-300" />
    </div>
  );
}
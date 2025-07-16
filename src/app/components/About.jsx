"use client";
import { motion } from "motion/react";

export default function About({ sectionRef }) {
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
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-white">About Me</h2>
        </motion.div>
      </div>
    </section>
  );
}
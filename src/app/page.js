"use client";
import { useState, useRef } from 'react';
import LandingScreen from "./components/LandingScreen";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  const aboutSectionRef = useRef(null);

  return (
    <div>
      <LandingScreen />
      <Navbar />
      <About sectionRef={aboutSectionRef} />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
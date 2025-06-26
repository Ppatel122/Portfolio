"use client";
import { useRef } from 'react';
import LandingScreen from "./components/LandingScreen";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Work from "./components/Work";
import Projects from './components/Projects';
import Footer from './components/Footer';

export default function Home() {
  const aboutSectionRef = useRef(null);

  return (
    <div>
      <LandingScreen />
      <Navbar />
      <About sectionRef={aboutSectionRef} />
      <Projects />
      <Work />
      <Footer />
    </div>
  );
}
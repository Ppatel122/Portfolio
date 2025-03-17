"use client";
import { useState, useEffect, useRef } from 'react';
import LandingScreen from "./components/LandingScreen";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from './components/Projects';

export default function Home() {
  const [showNavbar, setShowNavbar] = useState(false);
  const aboutSectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (aboutSectionRef.current) {
        const aboutSectionTop = aboutSectionRef.current.offsetTop;
        const triggerPoint = aboutSectionTop - window.innerHeight * 0.5;
        setShowNavbar(window.scrollY > triggerPoint);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <LandingScreen />
      <Navbar visible={showNavbar} />
      <About sectionRef={aboutSectionRef} />
      <Projects />
      {/* Add Projects and Contact sections similarly */}
    </div>
  );
}
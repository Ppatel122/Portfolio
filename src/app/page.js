"use client";
import { useRef, useState, useEffect } from 'react';
import LandingScreen from "./components/LandingScreen";
import ResizableNavbar from "./components/ResizableNavbar";
import About from "./components/About";
import Work from "./components/Work";
import Projects from './components/Projects';
import Footer from './components/Footer';

export default function Home() {
  const aboutSectionRef = useRef(null);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Start content animations after aurora reveals
    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 1500);

    return () => {
      clearTimeout(contentTimer);
    };
  }, []);

  return (
    <div>
      {/* Main content */}
      <ResizableNavbar />
      <LandingScreen showContent={showContent} />
      <About sectionRef={aboutSectionRef} />
      <Projects />
      <Work />
      <Footer />
    </div>
  );
}
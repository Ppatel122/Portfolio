"use client";
import { useEffect, useRef } from "react";
import { ViteIcon, FirebaseIcon, JavaIcon } from "./CustomIcons";
import {
  FaGithub,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
  SiJavascript,
  SiAndroidstudio,
  SiRemix,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";

const icons = [
    { name: "HTML", icon: FaHtml5 },
    { name: "CSS", icon: FaCss3Alt },
    { name: "JavaScript", icon: SiJavascript },
    { name: "TypeScript", icon: SiTypescript },
    { name: "React", icon: SiReact },
    { name: "Next", icon: SiNextdotjs },
    { name: "MongoDB", icon: SiMongodb },
    { name: "Android Studio", icon: SiAndroidstudio },
    { name: "Remix", icon: SiRemix },
    { name: "GitHub", icon: FaGithub },
    { name: "Vite", icon: ViteIcon },
    { name: "Firebase", icon: FirebaseIcon },
    { name: "Java", icon: JavaIcon },
    { name: "Azure", icon: VscAzure },
  ];
  

  const techColors = {
    Vite: "text-purple-600",
    React: "text-cyan-600",
    Next: "text-white",
    TypeScript: "text-blue-600",
    MongoDB: "text-green-600",
    Firebase: "text-orange-600",
    Azure: "text-blue-600",
    HTML: "text-orange-600",
    CSS: "text-blue-600",
    JavaScript: "text-yellow-500",
    Java: "text-gray-600",
    "Android Studio": "text-green-600",
    Remix: "text-white",
    GitHub: "text-white",
  };

export default function TagSphere() {
  const sphereRef = useRef(null);
  const iconRefs = useRef([]);

  useEffect(() => {
    const radius = 120;
    const total = icons.length;
    let angleX = 0;
    let angleY = 0;

    const positions = icons.map((_, i) => {
      const phi = Math.acos(-1 + (2 * i) / total);
      const theta = Math.sqrt(total * Math.PI) * phi;
      return {
        x: radius * Math.cos(theta) * Math.sin(phi),
        y: radius * Math.sin(theta) * Math.sin(phi),
        z: radius * Math.cos(phi),
      };
    });

    const animate = () => {
      angleX += 0.002;
      angleY += 0.003;

      const sinX = Math.sin(angleX);
      const cosX = Math.cos(angleX);
      const sinY = Math.sin(angleY);
      const cosY = Math.cos(angleY);

      iconRefs.current.forEach((ref, i) => {
        let { x, y, z } = positions[i];

        // Rotate around Y axis
        let dx = x * cosY - z * sinY;
        let dz = x * sinY + z * cosY;
        x = dx;
        z = dz;

        // Rotate around X axis
        let dy = y * cosX - z * sinX;
        dz = y * sinX + z * cosX;
        y = dy;
        z = dz;

        ref.style.transform = `
          translate3d(${x}px, ${y}px, ${z}px)
        `;
      });

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <div className="w-[300px] h-[300px] mx-auto perspective-[1000px]">
      <div
        className="relative w-full h-full transform-style-preserve-3d"
      >
        {icons.map(({ name, icon: Icon }, i) => {
            const isCustomSVG = [ViteIcon, FirebaseIcon, JavaIcon].includes(Icon);
            const colorClass = techColors[name] || "text-white";

            return (
                <div
                key={i}
                ref={(el) => (iconRefs.current[i] = el)}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                >
                <Icon
                    className={`w-6 h-6 md:w-8 md:h-8 opacity-80 hover:opacity-100 transition-opacity duration-300 ${
                    isCustomSVG ? "" : colorClass
                    }`}
                />
                </div>
            );
            })}

      </div>
    </div>
  );
}

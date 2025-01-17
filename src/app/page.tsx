"use client";

import SkillsSection from "@/components/skills";
import ProjectsSection from "@/components/projects";
import Image from "next/image";
import bgimage from "../../public/bgimage.svg";
import me from "../../public/me.svg";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const glowElements = document.querySelectorAll(
        ".glow-effect"
      ) as NodeListOf<HTMLElement>;
      glowElements.forEach((glowElement) => {
        const rect = glowElement.parentElement?.getBoundingClientRect();
        if (rect) {
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          glowElement.style.left = `${x}px`;
          glowElement.style.top = `${y}px`;
        }
      });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Home
  return (
    <main className="w-full relative">
      {/* Banner */}
      <div className="h-[50vh] flex items-center justify-center bg-url[('../public/bgimage.png')] bg-cover bg-no-repeat relative">
        <div className="glow-effect absolute pointer-events-none w-[300px] h-[300px] z-0" />
        <Image
          src={bgimage}
          alt="bgimage"
          quality={100}
          className="absolute w-full h-[50vh] object-cover z-10"
        />
        <div className="flex flex-col items-center z-20 relative">
          <h1 className="text-center font-['Syne'] font-extrabold text-[50px] text-white">
            JESSE VAN LUXEMBURG
          </h1>
          <p className="text-center font-['Syne'] mr-0 ml-auto font-regular text-white text-md">
            STUDENT @ FONTYS ICT
          </p>
        </div>
      </div>
      {/* Image and navigation */}
      <div className="h-[50vh] flex">
        {/* Image */}
        <div className="w-1/2 bg-[#191919] h-[50vh] relative">
          <div className="glow-effect absolute pointer-events-none w-[300px] h-[300px] z-0" />
          <Image
            src={me}
            alt="me"
            className="w-full h-full object-cover z-10 relative"
            quality={100}
          />
        </div>
        {/* Navigation */}
        <div className="w-1/2 bg-[#19191973] flex flex-col items-start justify-start gap-4 p-8 relative h-[50vh] overflow-hidden">
          <div className="glow-effect absolute pointer-events-none w-[300px] h-[300px] z-0" />
          <button className="bg-[#191919] text-white font-['Syne'] font-semibold px-8 py-2 rounded-lg hover:bg-white hover:text-[#191919] transition-colors w-[200px] relative z-10">
            Skills
          </button>
          <button className="bg-[#191919] text-white font-['Syne'] font-semibold px-8 py-2 rounded-lg hover:bg-white hover:text-[#191919] transition-colors w-[200px] relative z-10">
            Projects
          </button>
          <button className="bg-none text-white font-['Syne'] font-semibold px-8 py-2 rounded-lg border border-white hover:bg-white hover:text-[#191919] transition-colors w-[200px] relative z-10">
            Contact
          </button>
        </div>
      </div>

      {/* Line */}
      <div
        className="w-5/6 mx-auto h-[1px] my-16 rounded-full"
        style={{
          background: "linear-gradient(90deg, #134A51 0%, #8DB4B3 100%)",
        }}
      />

      {/* Skills */}
      <SkillsSection />

      {/* Line */}
      <div
        className="w-5/6 mx-auto h-[1.5px] my-16 rounded-full"
        style={{
          background: "linear-gradient(90deg, #8DB4B3 0%, #134A51 100%)",
        }}
      />

      {/* Projects */}
      <ProjectsSection />

      {/* Line */}
      <div
        className="w-5/6 mx-auto h-[1.5px] my-16 rounded-full"
        style={{
          background: "linear-gradient(90deg, #8DB4B3 0%, #134A51 100%)",
        }}
      />

      {/* About */}
      <section className="w-full relative z-0">
        <div className="container mx-auto px-[70px] relative z-0">
          <h2 className="ml-[190px] mb-8 -mt-3 text-left text-3xl font-['Syne'] font-semibold tracking-wider text-white relative z-0">
            ABOUT & CONTACT
          </h2>
          <p className="ml-[190px] text-white text-md font-['Syne']">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </p>
        </div>
      </section>

      <style jsx global>{`
        .glow-effect {
          background: radial-gradient(
            circle at center,
            rgba(110, 183, 184, 0.35) 0%,
            rgba(110, 183, 184, 0.2) 40%,
            rgba(110, 183, 184, 0) 70%
          );
          transform: translate(-50%, -50%);
          mix-blend-mode: screen;
          filter: blur(8px);
          transition: all 0.2s ease-out;
          animation: pulse 2s infinite ease-in-out;
        }

        @keyframes pulse {
          0% {
            transform: translate(-50%, -50%) scale(0.95);
          }
          50% {
            transform: translate(-50%, -50%) scale(1.05);
          }
          100% {
            transform: translate(-50%, -50%) scale(0.95);
          }
        }
      `}</style>
    </main>
  );
}

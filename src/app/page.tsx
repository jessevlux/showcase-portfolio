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

  return (
    <main className="w-full overflow-hidden relative">
      {/* Navigation */}
      <div className="w-[85%] flex justify-end p-3 mt-1 fixed mx-auto bg-[#181818] rounded-md z-20">
        <div className="grid grid-cols-10 gap-4 justify-center">
          <button
            onClick={() => {
              document
                .getElementById("skills")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-[#191919] text-white font-['Syne'] font-semibold px-4 py-2 rounded-lg hover:bg-white hover:text-[#191919] transition-colors col-span-3"
          >
            About
          </button>
          <button
            onClick={() => {
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-[#191919] text-white font-['Syne'] font-semibold px-4 py-2 rounded-lg hover:bg-white hover:text-[#191919] transition-colors col-span-3"
          >
            Projects
          </button>
          <button
            onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-none text-white font-['Syne'] font-semibold px-4 py-2 rounded-lg border border-white hover:bg-white hover:text-[#191919] transition-colors col-span-3"
          >
            Contact
          </button>
        </div>
      </div>
      {/* Banner */}
      <div className="h-[50vh] flex items-center justify-center bg-url[('../public/bgimage.png')] bg-cover bg-no-repeat relative px-4 md:px-0 z-0">
        <div className="glow-effect absolute pointer-events-none w-[300px] h-[300px] z-0" />
        <Image
          src={bgimage}
          alt="bgimage"
          quality={100}
          className="absolute w-full h-[50vh] object-cover z-10"
        />
        <div className="flex flex-col items-center z-20 relative">
          <h1 className="text-center font-['Syne'] font-extrabold text-[32px] md:text-[34px] text-white px-4 md:px-0">
            JESSE VAN LUXEMBURG
          </h1>
          <p className="text-center font-['Syne'] font-regular text-white text-md">
            STUDENT @ FONTYS ICT
          </p>
        </div>
      </div>

      {/* Line */}
      <div
        className="w-5/6 mx-auto h-[1px] my-16 rounded-full"
        id="skills"
        style={{
          background: "linear-gradient(90deg, #134A51 0%, #8DB4B3 100%)",
        }}
      />

      {/* Skills */}
      <SkillsSection />

      {/* Line */}
      <div
        className="w-5/6 mx-auto h-[1.5px] my-16 rounded-full"
        id="projects"
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

      {/* Contact */}
      <section className="w-full relative mb-16 z-0" id="contact">
        <div className="container mx-auto px-4 md:px-[70px] relative z-0">
          <h2 className="ml-0 md:ml-[190px] mb-6 text-left text-3xl font-['Syne'] font-semibold tracking-wider text-white relative z-0">
            CONTACT
          </h2>
          <div className="ml-0 md:ml-[190px] max-w-[500px]">
            <p className="text-zinc-400 text-md font-['Syne']">
              Want to work with me? <br></br>
              <br></br>
              <span className="flex items-center -mt-4 text-zinc-400 gap-2">
                <svg
                  className="text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                jessevanluxemburg@outlook.com
              </span>
              <br></br>
              <span className="flex items-center text-zinc-400 -mt-4 gap-2">
                <svg
                  className="text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                +31 6 57 51 38 64
              </span>
            </p>
          </div>
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

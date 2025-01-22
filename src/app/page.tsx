"use client"; // This directive indicates that the component is a client-side component

// Importing necessary components and assets
import SkillsSection from "@/components/skills";
import ProjectsSection from "@/components/projects";
import Image from "next/image";
import bgimage from "../../public/bgimage.svg";
import me from "../../public/me.svg";
import { useEffect, useRef } from "react";

// Main Home component
export default function Home() {
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      if (navRef.current) {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
          navRef.current.style.transition = "transform 0.3s ease";
          navRef.current.style.transform = "translateY(-120%)";
        } else {
          navRef.current.style.transition = "transform 0.3s ease";
          navRef.current.style.transform = "translateY(0)";
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="w-full overflow-hidden relative">
      {/* Navigation */}
      <div
        ref={navRef}
        className="fixed top-0 left-0 right-0 flex justify-center w-full z-20 mt-3"
      >
        <div className="w-[47rem] max-w-[90vw] rounded-2xl p-2 bg-[#0e0e0e] flex items-center justify-between">
          <div className="text-[#CBFFFE] font-['Syne'] pl-4 font-extrabold py-2">
            JESSE v LUX
          </div>
          <div className="flex space-x-4">
            {/* About button */}
            <button
              onClick={() => {
                document
                  .getElementById("skills")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-[#CBFFFE] font-['Syne'] font-semibold w-[120px] py-2 rounded-lg hover:bg-[#CBFFFE] hover:text-[#191919] transition-colors"
            >
              About
            </button>
            {/* Projects button */}
            <button
              onClick={() => {
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-[#CBFFFE] font-['Syne'] font-semibold w-[120px] py-2 rounded-lg hover:bg-[#CBFFFE] hover:text-[#191919] transition-colors"
            >
              Projects
            </button>
            {/* Contact button */}
            <button
              onClick={() => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="font-['Syne'] font-semibold w-[120px] py-2 rounded-lg hover:bg-[#CBFFFE] text-[#CBFFFE] hover:text-[#191919] transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
      {/* Home section */}
      <div className="h-screen flex items-center justify-center relative px-4 md:px-0 z-0">
        <div className="glow-effect absolute pointer-events-none w-[300px] h-[300px] z-0" />
        <div className="flex flex-col items-center z-20 relative">
          <h1 className="text-center font-['Syne'] font-extrabold text-[32px] md:text-[34px] text-[#CBFFFE] px-4 md:px-0">
            {/* Infinity banner right to left */}
            <div className="overflow-hidden whitespace-nowrap">
              <div className="flex animate-marquee-left">
                {Array.from({ length: 10 }, (_, index) => (
                  <span
                    key={`marquee-left-${index}`}
                    className="text-[48px] md:text-[64px] lg:text-[80px] bg-gradient-to-r from-[#227F8B] to-[#8DB4B3] bg-clip-text text-transparent animate-gradient"
                  >
                    JESSE VAN LUXEMBURG &nbsp;
                  </span>
                ))}
              </div>
            </div>
            {/* Infinity banner left to right */}
            <div className="overflow-hidden whitespace-nowrap -mt-10">
              <div className="flex animate-marquee-right">
                {Array.from({ length: 10 }, (_, index) => (
                  <span
                    key={`marquee-right-${index}`}
                    className="text-[48px] md:text-[64px] lg:text-[80px] bg-gradient-to-r from-[#8DB4B3] to-[#227F8B] bg-clip-text text-transparent animate-gradient"
                  >
                    JESSE VAN LUXEMBURG &nbsp;
                  </span>
                ))}
              </div>
            </div>
            {/* CSS for marquee and gradient animations */}
            <style jsx>{`
              @keyframes marquee-left {
                0% {
                  transform: translateX(0%);
                }
                100% {
                  transform: translateX(-100%);
                }
              }
              .animate-marquee-left {
                display: inline-block;
                white-space: nowrap;
                animation: marquee-left 180s linear infinite;
              }
              @keyframes marquee-right {
                0% {
                  transform: translateX(0%);
                }
                100% {
                  transform: translateX(100%);
                }
              }
              .animate-marquee-right {
                display: inline-block;
                white-space: nowrap;
                animation: marquee-right 180s linear infinite;
              }
            `}</style>
            <style jsx>{`
              @keyframes gradient-animation {
                0% {
                  background-position: 0% 50%;
                }
                50% {
                  background-position: 100% 50%;
                }
                100% {
                  background-position: 0% 50%;
                }
              }
              .animate-gradient {
                background-size: 200% 200%;
                animation: gradient-animation 5s ease infinite;
              }
            `}</style>
          </h1>
          <p className="text-center font-['Syne'] font-regular text-[#CBFFFE] text-md">
            STUDENT @ FONTYS ICT
          </p>
        </div>
      </div>

      {/* Line separator */}
      <div
        className="w-5/6 mx-auto h-[1px] mb-16 rounded-full"
        id="skills"
        style={{
          background: "linear-gradient(90deg, #134A51 0%, #8DB4B3 100%)",
        }}
      />

      {/* Skills section */}
      <SkillsSection />

      {/* Line separator */}
      <div
        className="w-5/6 mx-auto h-[1.5px] my-16 rounded-full"
        id="projects"
        style={{
          background: "linear-gradient(90deg, #8DB4B3 0%, #134A51 100%)",
        }}
      />

      {/* Projects section */}
      <ProjectsSection />

      {/* Line separator */}
      <div
        className="w-5/6 mx-auto h-[1.5px] my-16 rounded-full"
        style={{
          background: "linear-gradient(90deg, #8DB4B3 0%, #134A51 100%)",
        }}
      />

      {/* Contact section */}
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
    </main>
  );
}

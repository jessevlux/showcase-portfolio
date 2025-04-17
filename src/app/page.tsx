"use client"; // This directive indicates that the component is a client-side component

// Importing necessary components and assets
import SkillsSection from "@/components/skills";
import ProjectsSection from "@/components/projects";
import ScrollRestorer from "@/components/ScrollRestorer";
import Image from "next/image";
import { useEffect, useRef } from "react";

// Main Home component
export default function Home() {
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Navigation scroll handler
    let lastScrollTop = 0;
    const handleScroll = () => {
      if (navRef.current) {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
          navRef.current.style.transition = "transform 0.3s ease";
          navRef.current.style.transform = "translateY(-125%)";
        } else {
          navRef.current.style.transition = "transform 0.3s ease";
          navRef.current.style.transform = "translateY(0)";
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
      }
    };

    // Scroll animation observer with increased threshold
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.2, // Increased threshold for better scroll trigger
        rootMargin: "-50px 0px", // Add some margin to prevent premature triggering
      }
    );

    // Observe sections
    const sections = document.querySelectorAll(
      ".about-section, .skills-section, .projects-section"
    );
    sections.forEach((section) => observer.observe(section));

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <main className="w-full overflow-hidden relative">
      <ScrollRestorer />
      {/* Navigation */}
      <div
        ref={navRef}
        className="fixed top-0 left-0 right-0 flex justify-center w-full z-20 mt-3"
      >
        <div className="w-full max-w-[90vw] rounded-2xl  bg-[#0a0a0a] flex items-center justify-between">
          <div className="w-full h-full md:p-1 rounded-xl bg-[#0a0a0a] flex items-center justify-between">
            <div className="text-[#4fb1c4] hidden md:block font-['Syne'] pl-4 font-extrabold py-2">
              JESSE v LUX
            </div>
            <div className="flex space-x-1 md:space-x-4 mx-auto md:mx-0">
              {/* About button */}
              <button
                onClick={() => {
                  const element = document.getElementById("skills");
                  if (element) {
                    element.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                }}
                className="text-white font-['Poppins'] text-xs md:text-base font-semibold w-[80px] md:w-[120px] py-2 rounded-lg hover:text-[#4fb1c4] transition-all duration-300 hover:scale-105"
              >
                ABOUT
              </button>
              {/* Projects button */}
              <button
                onClick={() => {
                  const element = document.getElementById("projects");
                  if (element) {
                    element.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                }}
                className="text-white font-['Poppins'] text-xs md:text-base font-semibold w-[80px] md:w-[120px] py-2 rounded-lg hover:text-[#4fb1c4] transition-all duration-300 hover:scale-105"
              >
                PROJECTS
              </button>
              {/* Contact button */}
              <button
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) {
                    element.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                }}
                className="text-white font-['Poppins'] text-xs md:text-base font-semibold w-[80px] md:w-[120px] py-2 rounded-lg hover:text-[#4fb1c4] transition-all duration-300 hover:scale-105"
              >
                CONTACT
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Home section */}
      <div className="h-screen flex items-center justify-center relative px-4 md:px-0 z-0">
        {/* Background image with gradient overlay */}
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <Image
              src="/me.svg"
              alt="Background"
              fill
              style={{ objectFit: "cover", objectPosition: "top" }}
              className="opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/65 to-black/90" />
          </div>
        </div>

        <div className="glow-effect absolute pointer-events-none w-[300px] h-[300px] z-0" />
        <div className="flex flex-col items-center z-20 relative">
          <h1 className="text-center font-['Syne'] font-extrabold text-[32px] md:text-[34px] text-[#4fb1c4] px-4 md:px-0">
            {/* Infinity banner right to left */}
            <div className="overflow-hidden whitespace-nowrap">
              <div className="flex animate-marquee-left">
                {Array.from({ length: 100 }, (_, index) => (
                  <span
                    key={`marquee-left-${index}`}
                    className="text-[48px] md:text-[64px] lg:text-[80px] bg-gradient-to-r from-[#4fb1c4] to-[#CBFFFE] bg-clip-text text-transparent animate-gradient"
                  >
                    JESSE VAN LUXEMBURG &nbsp;
                  </span>
                ))}
              </div>
            </div>
            {/* Infinity banner left to right */}
            <div className="overflow-hidden whitespace-nowrap -mt-8 md:-mt-10">
              <div className="flex animate-marquee-right">
                {Array.from({ length: 100 }, (_, index) => (
                  <span
                    key={`marquee-right-${index}`}
                    className="text-[48px] md:text-[64px] lg:text-[80px] bg-gradient-to-r from-[#CBFFFE] to-[#4fb1c4] bg-clip-text text-transparent animate-gradient"
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
                animation: marquee-left 2500s linear infinite;
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
                animation: marquee-right 2500s linear infinite;
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
          <p className="text-center font-['Poppins'] font-regular text-white text-md">
            STUDENT @ FONTYS ICT
          </p>
        </div>

        {/* Scroll down button */}
        <div className="absolute bottom-8 transform -translate-x-1/2 z-20 animate-bounce">
          <button
            onClick={() => {
              window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
            }}
            aria-label="Scroll down"
            className="text-white hover:text-[#4fb1c4] transition-colors bg-black/50 p-2 rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="animate-fadeIn animation-delay-500"
            >
              <path d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Line separator */}
      <div
        className="max-w-[88vw] mx-auto h-[1px] mb-16 rounded-full"
        id="skills"
        style={{
          background: "linear-gradient(90deg, #4fb1c4 0%, #CBFFFE 100%)",
          opacity: 0,
        }}
      />

      {/* About section */}
      <section id="skills" className="about-section">
        <SkillsSection />
      </section>

      {/* Projects section */}
      <section id="projects" className="projects-section">
        <ProjectsSection />
      </section>

      {/* Line separator */}
      <div
        className="max-w-[88vw] mx-auto h-[1px] mt-8 rounded-full"
        id="skills"
        style={{
          background: "linear-gradient(90deg, #4fb1c4 0%, #CBFFFE 100%)",
          opacity: 0,
        }}
      />

      {/* Contact section */}
      <section
        className="w-full relative pb-12 z-0 bg-gradient-to-b from-[#0f0f0f] to-[#4fb1c4]/15"
        id="contact"
      >
        <div className="container mx-auto px-4 md:px-[70px] relative z-0">
          <h2 className="pt-14 text-left text-2xl font-['Poppins'] font-semibold tracking-wider text-white relative z-0">
            CONTACT
          </h2>
          <p className="text-white text-md font-['Poppins']">
            <br />
            <span className="flex items-center text-white/80 gap-3">
              <svg
                className="text-[#4fb1c4]"
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
            <br />
            <span className="flex items-center text-white/80 gap-3 -mt-2">
              <svg
                className="text-[#4fb1c4]"
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
      </section>
    </main>
  );
}

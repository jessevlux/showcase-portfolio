"use client";

import BackBtn from "@/components/backbtn";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [showBackBtn, setShowBackBtn] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY < lastScrollY) {
        // scrolling up
        setShowBackBtn(true);
      } else {
        // scrolling down
        setShowBackBtn(false);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="w-full min-h-screen overflow-hidden relative">
      <BackBtn show={showBackBtn} />

      {/* Hero Section with Mockup Image */}
      <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 group">
          <div className="relative w-full h-full">
            <Image
              src="/footballcoach2.svg"
              alt="FootballCoach mockup"
              fill
              sizes="100vw"
              priority
              quality={90}
              style={{ objectFit: "cover", objectPosition: "center" }}
              className="animate-fadeIn transition-opacity duration-300"
            />
          </div>
          <div className="absolute inset-0 z-20 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10 text-center">
              <h1 className="font-['Syne'] font-extrabold text-3xl md:text-5xl mt-10 text-white mb-4 animate-slideUp">
                FOOTBALLCOACH
              </h1>
              <p className="text-white max-w-2xl mx-auto font-['Syne'] text-lg animate-slideUp animation-delay-200">
                An app for football players to train their technique
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="container mx-auto px-4 md:px-[70px]">
        {/* Two Column Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 mb-16">
          <div className="md:col-span-2 bg-[#191919] p-8 rounded-lg">
            <h3 className="font-['Poppins'] font-semibold text-xl text-white mb-4">
              What is FootballCoach?
            </h3>
            <p className="text-white/70 font-['Poppins'] text-sm mb-2 md:text-base leading-relaxed">
              FootballCoach is an app with the purpose to make it easier for
              users to train their shooting technique in a playful way.<br></br>
              There is a option to cast a goal to a beamer, so the user can
              project a goal with targets at home. The user can compete with
              friends by completing challenges and daily tasks, while improving
              their technique.
            </p>
            <p className="text-white/70 font-['Poppins'] text-sm md:text-base leading-relaxed">
              I participated in the UI/UX design and frontend development.
            </p>
          </div>
          <div className="md:col-span-1 bg-[#191919] p-8 rounded-lg flex flex-col justify-between">
            <div>
              <h3 className="font-['Poppins'] font-semibold text-xl text-white mb-4">
                Included
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-[#0e0e0e] text-white/80 text-sm font-['Syne'] rounded-full">
                  Typescript
                </span>
                <span className="px-3 py-1 bg-[#0e0e0e] text-white/80 text-sm font-['Syne'] rounded-full">
                  Tailwind
                </span>
                <span className="px-3 py-1 bg-[#0e0e0e] text-white/80 text-sm font-['Syne'] rounded-full">
                  Next.js
                </span>
                <span className="px-3 py-1 bg-[#0e0e0e] text-white/80 text-sm font-['Syne'] rounded-full">
                  UX/UI Design
                </span>
              </div>
            </div>
            <div className="mt-6">
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/jessevlux/footballcoach"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 bg-[#0e0e0e] text-white hover:bg-[#4fb1c4] transition-colors duration-300 text-sm font-['Syne'] rounded-full"
                >
                  <Image
                    src="/github-icon.svg"
                    alt="GitHub"
                    width={24}
                    height={24}
                    className="filter invert hover:brightness-100"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Screenshots Section */}
        <h2 className="font-['Syne'] font-bold text-3xl text-center text-white mb-12">
          Screenrecord
        </h2>
        <div className="flex justify-center mt-10 mb-20">
          <div className="w-full max-w-4xl rounded-lg overflow-hidden">
            <video
              className="w-full h-auto rounded-lg"
              controls
              autoPlay
              muted
              loop
            >
              <source src="/footballcoach1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
    </main>
  );
}

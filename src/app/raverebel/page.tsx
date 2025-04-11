"use client";

import Image from "next/image";
import BackBtn from "@/components/backbtn";
import Carousel from "@/components/carousel";
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
    <main className="w-full overflow-hidden min-h-screen relative">
      <BackBtn show={showBackBtn} />

      {/* Hero Section with Mockup Image */}
      <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 group">
          <div className="relative w-full h-full">
            <Image
              src="/mockup.png"
              alt="RaveRebel mockup"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              priority
              className="animate-fadeIn"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/20"></div>
          </div>
          <div className="absolute inset-0 z-20 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10 text-center">
              <h1 className="font-['Syne'] font-extrabold text-4xl md:text-5xl mt-10 text-white mb-4 animate-slideUp">
                RAVEREBEL
              </h1>
              <p className="text-white max-w-2xl mx-auto font-['Syne'] text-lg md:text-xl animate-slideUp animation-delay-200">
                A clothing brand for the festival community
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
              What is RaveRebel?
            </h3>
            <p className="text-white/70 font-['Poppins'] text-sm mb-2 md:text-base leading-relaxed">
              RaveRebel is a clothing brand I created with the aim of appealing
              to the festival community, particularly those into the harder
              styles. From stylish designs to ones with a message, there are
              multiple options for different people attending festivals.
            </p>
            <p className="text-white/70 font-['Poppins'] text-sm md:text-base leading-relaxed">
              When I attend festivals, I often see people wearing clothing from
              their own festival related brands. This always seemed like a cool
              idea to me. I had the chance to create my own project at school,
              so it was the perfect opportunity to put my creativity and ideas
              into this project.
            </p>
          </div>
          <div className="md:col-span-1 bg-[#191919] p-8 rounded-lg">
            <h3 className="font-['Poppins'] font-semibold text-xl text-white mb-4">
              Included
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-[#0e0e0e] text-white/80 text-sm font-['Syne'] rounded-full">
                Figma
              </span>
              <span className="px-3 py-1 bg-[#0e0e0e] text-white/80 text-sm font-['Syne'] rounded-full">
                Photoshop
              </span>
              <span className="px-3 py-1 bg-[#0e0e0e] text-white/80 text-sm font-['Syne'] rounded-full">
                Adobe Firefly
              </span>
            </div>
          </div>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-20">
          <div className="h-72 flex items-center justify-center relative overflow-hidden rounded-lg">
            <Image
              src="/v8 mockup_front.svg"
              alt="Design 1 - V8 Front"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="h-72 flex items-center justify-center relative overflow-hidden rounded-lg">
            <Image
              src="/v8 mockup_back.svg"
              alt="Design 2 - V8 Back"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <Carousel />
    </main>
  );
}

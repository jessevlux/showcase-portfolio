"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import BackBtn from "@/components/backbtn";

import img1 from "../../../public/1.svg";
import img2 from "../../../public/2.svg";
import img3 from "../../../public/3.svg";
import img4 from "../../../public/4.svg";
import img5 from "../../../public/5.svg";
import img6 from "../../../public/6.svg";
import img7 from "../../../public/7.svg";
import img8 from "../../../public/8.svg";
import img9 from "../../../public/9.svg";
import img10 from "../../../public/10.svg";
import img11 from "../../../public/11.svg";
import Carousel from "@/components/carousel";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const getImageIndex = (offset: number) => {
    return (currentIndex + offset + images.length) % images.length;
  };

  return (
    <main className="w-full overflow-hidden min-h-screen relative">
      <BackBtn />

      {/* Hero Section with Mockup Image */}
      <section className="relative w-full h-[60vh] md:h-[100vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <Image
              src="/mockup.png"
              alt="RaveRebel mockup"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              priority
              className="animate-fadeIn"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/75 "></div>
          </div>
        </div>
        <div className="relative z-20 text-center p-6">
          <h1 className="font-['Syne'] font-extrabold text-4xl md:text-5xl text-white mb-4 animate-slideUp">
            RAVEREBEL
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto font-['Syne'] text-lg md:text-xl animate-slideUp animation-delay-200">
            A clothing brand for the festival community
          </p>
        </div>
        <div className="absolute bottom-8  transform -translate-x-1/2 z-20 animate-bounce">
          <button
            onClick={() =>
              window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
            }
            aria-label="Scroll down"
            className="text-white hover:text-white/80 transition-colors bg-black/50 p-2 rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="animate-fadeIn animation-delay-500"
            >
              <path d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
            </svg>
          </button>
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
            <p className="text-white/80 font-['Poppins'] text-sm mb-2 md:text-base leading-relaxed">
              RaveRebel is a clothing brand I created with the aim of appealing
              to the festival community, particularly those into the harder
              styles. From stylish designs to ones with a message, there are
              multiple options for different people attending festivals.
            </p>
            <p className="text-white/80 font-['Poppins'] text-sm md:text-base leading-relaxed">
              When I attend festivals, I often see people wearing clothing from
              their own festival related brands. This always seemed like a cool
              idea to me. I had the chance to create my own project at school,
              so it was the perfect opportunity to put my creativity and ideas
              into this project.
            </p>
          </div>
          <div className="bg-[#191919] p-8 rounded-lg">
            <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
              <Image
                src="/raverebel.png"
                alt="RaveRebel"
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </div>
          </div>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-20">
          <div className="h-72 flex items-center justify-center relative overflow-hidden rounded-lg">
            <Image
              src="/v8 mockup_front.png"
              alt="Design 1 - V8 Front"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="h-72 flex items-center justify-center relative overflow-hidden rounded-lg">
            <Image
              src="/v8 mockup_back.png"
              alt="Design 2 - V8 Back"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <Carousel />

      <script
        dangerouslySetInnerHTML={{
          __html: `
          let lastScrollY = window.scrollY;
          const nav = document.getElementById('navBtn');

          window.addEventListener('scroll', () => {
            if (window.scrollY < lastScrollY) { // scrolling up
              nav.style.opacity = '1';
            } else { // scrolling down
              nav.style.opacity = '0';
            }
            lastScrollY = window.scrollY;
          });
        `,
        }}
      />
    </main>
  );
}

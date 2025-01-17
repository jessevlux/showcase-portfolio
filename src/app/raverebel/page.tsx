"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const getImageIndex = (offset: number) => {
    return (currentIndex + offset + images.length) % images.length;
  };

  return (
    <main className="w-full relative">
      <div className="container mx-auto px-[70px] relative z-0">
        <div className="grid grid-cols-12 gap-[20px] max-w-[1440px] mx-auto relative z-0">
          <div className="col-span-12 col-start-2 col-end-12">
            <div className="flex justify-between items-center">
              <h1 className="text-left font-['Syne'] font-extrabold text-3xl text-white my-8">
                RAVEREBEL
              </h1>
              <div className="w-[60px] hidden h-full">
                <img
                  src="/raverebel logo.svg"
                  alt="RAVEREBEL logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Line */}
      <div
        className="w-5/6 mx-auto h-[1px] rounded-full"
        style={{
          background: "linear-gradient(90deg, #134A51 0%, #8DB4B3 100%)",
        }}
      />

      {/* What is RaveRebel? */}
      <div className="container mx-auto px-[70px] mt-8">
        <div className="grid grid-cols-12 gap-[20px] items-center mb-20">
          <div className="col-span-5 col-start-2">
            <h3 className="font-['Syne'] font-semibold text-2xl text-white mb-4">
              What is RaveRebel?
            </h3>
            <p className="text-white/80 font-['Syne'] leading-relaxed">
              RaveRebel is a clothing brand I created with the aim of appealing
              to the festival community, particularly those into the harder
              styles. From stylish designs to ones with a message, there are
              multiple options for different people attending festivals.
            </p>
          </div>
          <div className="col-span-4 z-10 col-start-9">
            <img
              src="/raverebel.png"
              alt="RaveRebel brand"
              className="w-64 h-full object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Why? */}
        <div
          className="grid grid-cols-12 container mx-auto gap-[20px] items-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="col-span-4 col-start-2">
            <img
              src="/mockup.png"
              alt="RaveRebel mockup"
              className="w-full object-cover scale-110 ml-5 rounded-lg"
            />
          </div>
          <div className="col-span-5 col-start-7">
            <h3 className="font-['Syne'] font-semibold text-2xl text-white mb-4">
              Why?
            </h3>
            <p className="text-white/80 font-['Syne'] leading-relaxed">
              When I attend festivals, I often see people wearing clothing from
              their own festival related brands. This always seemed like a cool
              idea to me. I had the chance to create my own project at school,
              so it was the perfect opportunity to put my creativity and ideas
              into this project.
            </p>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div className="w-full mt-20">
        <div className="w-full">
          <div className="carousel-container relative w-full h-[500px] overflow-hidden pb-8 bg-[#141414]">
            <h2 className="ml-[165px] mt-8 -mb-8 text-white font-['Syne'] font-semibold text-3xl">
              Designs
            </h2>
            <div className="carousel flex items-center justify-center h-full">
              {[-1, 0, 1].map((offset) => (
                <div
                  key={offset}
                  className={`carousel-item flex-shrink-0 transition-all duration-300 ease-in-out ${
                    offset === 0
                      ? "w-2/3 h-96 z-20"
                      : "w-1/5 h-80 opacity-50 absolute"
                  } ${
                    offset === -1
                      ? "left-[25%] transform -translate-x-3/3"
                      : offset === 1
                      ? "right-[25%] transform translate-x-3/3"
                      : ""
                  }`}
                >
                  <img
                    src={
                      images[getImageIndex(offset)].src || "/placeholder.svg"
                    }
                    alt={`Image ${getImageIndex(offset) + 1}`}
                    className="w-full h-full object-contain rounded-2xl"
                  />
                </div>
              ))}
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-[165px] top-[250px] transform -translate-y-1/2 bg-white/20 text-white rounded-full z-30"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-6 w-6" />
              <span className="sr-only">Previous slide</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-[165px] top-[250px] transform -translate-y-1/2 bg-white/20 text-white rounded-full z-30"
              onClick={nextSlide}
            >
              <ChevronRight className="h-6 w-6" />
              <span className="sr-only">Next slide</span>
            </Button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .carousel-container {
          perspective: 1000px;
        }
        .carousel {
          display: flex;
          transition: transform 0.5s ease-in-out;
        }
        .carousel-item {
          backface-visibility: hidden;
        }
      `}</style>

      <div className="glow-effect absolute pointer-events-none w-[300px] h-[300px] z-0" />
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

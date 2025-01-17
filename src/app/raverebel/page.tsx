"use client";

import { useEffect, useState } from "react";

import img1 from "/public/1.png";
import img2 from "/public/2.png";
import img3 from "/public/3.png";
import img4 from "/public/4.png";
import img5 from "/public/5.png";
import img6 from "/public/6.png";
import img7 from "/public/7.png";
import img8 from "/public/8.png";
import img9 from "/public/9.png";
import img10 from "/public/10.png";
import img11 from "/public/11.png";
import img12 from "/public/12.png";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 11 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 11 ? 0 : prevIndex + 1));
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
      <div className="grid mt-20 grid-cols-12">
        <div className="col-span-10 col-start-2">
          <div className="carousel-container relative w-full h-[400px] overflow-hidden rounded-lg bg-[#191919]">
            <div className="carousel flex transition-transform duration-500 ease-in-out">
              {[...Array(12)].map((_, index) => (
                <div
                  key={index}
                  className="carousel-item flex-shrink-0 w-full h-full flex justify-center items-center"
                  style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                  }}
                >
                  <img
                    src={`/${index + 1}.png`}
                    alt={`Image ${index + 1}`}
                    className="w-64 h-full object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/20 text-white p-2 rounded-full"
              onClick={prevSlide}
            >
              &#10094;
            </button>
            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/20 text-white p-2 rounded-full"
              onClick={nextSlide}
            >
              &#10095;
            </button>
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
          min-width: 100%;
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

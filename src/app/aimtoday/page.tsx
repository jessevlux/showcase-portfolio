"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

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
                AIMTODAY
              </h1>
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

      {/* What is AimToday? */}
      <div className="container mx-auto px-[70px] mt-8">
        <div className="grid grid-cols-12 gap-[20px] items-center mb-20">
          <div className="col-span-5 col-start-2">
            <h3 className="font-['Syne'] font-semibold text-2xl text-white mb-4">
              What is AIMTODAY?
            </h3>
            <p className="text-white/80 font-['Syne'] leading-relaxed">
              AIMTODAY is a group project we did for 2manydots. 2manydots wanted
              a marketing news website. For this project we didn't have any
              guidelines. No company name, no brandguide, etc. So we've done the
              branding and created the website with the name AIMTODAY, which
              stands for Ads, Insights & Marketing Today.
            </p>
            <p className="text-white/80 mt-2 font-['Syne'] leading-relaxed">
              I participated in the branding, UI/UX design and the frontend and
              the frontend development.
            </p>
          </div>
          <div className="col-span-4 z-10 col-start-9">
            <img
              src="/upendo.png"
              alt="RaveRebel brand"
              className="w-64 h-full object-cover rounded-lg"
            />
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
